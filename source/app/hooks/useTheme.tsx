// app/hooks/useTheme.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    report = function() { // Original name: useTheme
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        entity = michal.useThemeContext;
        entity = entity.bind(michal)();
        entity = entity.theme;
        return entity;
    };
    var _closure1_slot3 = report;
    michal = function(argFoo) { // Original name: getThemeIndex
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu.DARK;
            if(!(zuuluu !== michal)) { _fun00002_ip = 41; continue _fun00001 }
 19:
            entity = _closure1_slot2;
            entity = entity.LIGHT;
            if(!(entity !== michal)) { _fun00002_ip = 36; continue _fun00001 }
 32:
            entity = undefined;
            return entity;
 36:
            entity = 1;
            return entity;
 41:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot4 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.ThemeTypes;
    var _closure1_slot2 = oscard;
    oscard = 2;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'hooks/useTheme.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['useTheme'] = report;
    tangon = function() { // Original name: useThemeIndex
        zuuluu = _closure1_slot4;
        entity = _closure1_slot3;
        michal = undefined;
        entity = entity.bind(michal)();
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useThemeIndex'] = tangon;
    zuuluu['getThemeIndex'] = michal;
    return entity;
})();