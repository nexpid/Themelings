// app/design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx
export default (function(_, argBar, __, argCor, ___, argFre, argPlu) {
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
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Navigator/native/useNavigatorShouldCrossfade.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useNavigatorShouldCrossfade
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot2;
            michal = zuuluu.useContext;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 2;
            entity = oscard[entity];
            tangon = undefined;
            entity = report.bind(tangon)(entity);
            entity = entity.AccessibilityPreferencesContext;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.reducedMotion;
            michal = michal.enabled;
            entity = entity.prefersCrossfades;
            zuuluu = 1;
            zuuluu = oscard[zuuluu];
            tangon = report.bind(tangon)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(!zuuluu) { _fun00002_ip = 90; continue _fun00001 }
 87:
            entity = michal;
 90:
            return entity;
        }
    };
    zuuluu['useNavigatorShouldCrossfade'] = michal;
    return entity;
})();