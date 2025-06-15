// app/modules/themes/getSystemTheme.native.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
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
    tangon = tangon.Appearance;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SystemTheme;
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/themes/getSystemTheme.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: getSystemTheme
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = zuuluu.getColorScheme;
            zuuluu = michal.bind(zuuluu)();
            michal = 'light';
            if(!(michal !== zuuluu)) { _fun00002_ip = 56; continue _fun00001 }
 25:
            michal = 'dark';
            if(!(michal !== zuuluu)) { _fun00002_ip = 45; continue _fun00001 }
 33:
            michal = _closure1_slot1;
            michal = michal.NO_PREFERENCE;
            return michal;
 45:
            michal = _closure1_slot1;
            michal = michal.DARK;
            return michal;
 56:
            entity = _closure1_slot1;
            entity = entity.LIGHT;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();