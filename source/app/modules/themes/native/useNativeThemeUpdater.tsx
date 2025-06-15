// app/modules/themes/native/useNativeThemeUpdater.tsx
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/themes/native/useNativeThemeUpdater.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useNativeThemeUpdater
        tangon = _closure1_slot2;
        zuuluu = tangon.useRef;
        michal = _closure1_slot3;
        michal = michal.theme;
        michal = zuuluu.bind(tangon)(michal);
        var _closure2_slot0 = michal;
        zuuluu = tangon.useLayoutEffect;
        michal = function() {
            tangon = function() { // Original name: handleThemeUpdate
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    michal = _closure1_slot3;
                    zuuluu = michal.theme;
                    tangon = _closure2_slot0;
                    tangon = tangon.current;
                    if(!(zuuluu !== tangon)) { _fun00002_ip = 72; continue _fun00001 }
 29:
                    michal = _closure2_slot0;
                    michal['current'] = zuuluu;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 2;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    entity = michal.updateTheme;
                    entity = entity.bind(michal)(zuuluu);
 72:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot0 = tangon;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 2;
            report = report[zuuluu];
            zuuluu = undefined;
            oscard = oscard.bind(zuuluu)(report);
            report = oscard.updateTheme;
            zuuluu = _closure1_slot3;
            michal = zuuluu.theme;
            michal = report.bind(oscard)(michal);
            michal = zuuluu.addChangeListener;
            michal = michal.bind(zuuluu)(tangon);
            entity = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.removeChangeListener;
                entity = _closure3_slot0;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            return entity;
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();