// app/design/components/ThemeContextProvider/ThemeContext.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    golfie = function(argFoo) { // Original name: createThemedContext
        michal = argFoo;
        entity = global;
        zuuluu = entity.JSON;
        entity = zuuluu.stringify;
        zuuluu = entity.bind(zuuluu)(michal);
        entity = {};
        report = entity;
        tangon = michal;
        michal = copyDataProperties(report, tangon);
        michal = 'key';
        entity[michal] = zuuluu;
        return entity;
    };
    oscard = function() { // Original name: useThemeContext
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = zuuluu.useContext;
            entity = _closure1_slot3;
            entity = michal.bind(zuuluu)(entity);
            michal = null;
            if(!(michal != entity)) { _fun00002_ip = 30; continue _fun00001 }
 28:
            return entity;
 30:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            tangon = 'useThemeContext must be used within a ThemeContext.Provider';
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    var _closure1_slot4 = oscard;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = offset[entity];
    tangon = argCor;
    entity = undefined;
    option = tangon.bind(entity)(report);
    var _closure1_slot0 = option;
    tangon = 1;
    report = offset[tangon];
    report = verify.bind(entity)(report);
    report = report.Fragment;
    var _closure1_slot1 = report;
    tangon = offset[tangon];
    tangon = verify.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot2 = tangon;
    tangon = {'theme': 'light', 'primaryColor': null, 'secondaryColor': null, 'gradient': null, 'flags': 0, 'contrast': 1, 'saturation': 1, 'density': 'compact', 'disableAdaptiveTheme': false};
    report = golfie.bind(entity)(tangon);
    tangon = option.createContext;
    tangon = tangon.bind(option)(report);
    var _closure1_slot3 = tangon;
    option = 2;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'design/components/ThemeContextProvider/ThemeContext.tsx';
    option = verify.bind(offset)(option);
    zuuluu['createThemedContext'] = golfie;
    zuuluu['useThemeContext'] = oscard;
    zuuluu['FALLBACK_THEME_CONTEXT_VALUE'] = report;
    zuuluu['ThemeContext'] = tangon;
    michal = function(argFoo) { // Original name: UseThemeContext
        entity = argFoo;
        oscard = entity.children;
        michal = _closure1_slot4;
        tangon = undefined;
        report = michal.bind(tangon)();
        zuuluu = _closure1_slot2;
        michal = _closure1_slot1;
        entity = {};
        report = oscard.bind(tangon)(report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['UseThemeContext'] = michal;
    return entity;
})();