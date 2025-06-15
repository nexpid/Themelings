// app/design/utils/shared/themes.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ThemeTypes;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/utils/shared/themes.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: isThemeLight
        entity = _closure1_slot0;
        michal = entity.LIGHT;
        entity = argFoo;
        entity = entity === michal;
        return entity;
    };
    zuuluu['isThemeLight'] = tangon;
    michal = function(argFoo) { // Original name: isThemeDark
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot0;
            zuuluu = zuuluu.DARK;
            if(!(zuuluu !== michal)) { _fun00002_ip = 49; continue _fun00001 }
 19:
            zuuluu = _closure1_slot0;
            zuuluu = zuuluu.MIDNIGHT;
            if(!(zuuluu !== michal)) { _fun00002_ip = 49; continue _fun00001 }
 32:
            entity = _closure1_slot0;
            entity = entity.DARKER;
            if(!(entity !== michal)) { _fun00002_ip = 49; continue _fun00001 }
 45:
            entity = false;
            return entity;
 49:
            entity = true;
            return entity;
        }
    };
    zuuluu['isThemeDark'] = michal;
    return entity;
})();