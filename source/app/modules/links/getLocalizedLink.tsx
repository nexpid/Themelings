// app/modules/links/getLocalizedLink.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/links/getLocalizedLink.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getLocalizedLink
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 0;
            michal = michal[entity];
            entity = undefined;
            entity = tangon.bind(entity)(michal);
            entity = entity.intl;
            michal = entity.currentLocale;
            entity = michal.toLowerCase;
            michal = entity.bind(michal)();
            entity = michal in zuuluu;
            if(entity) { _fun00002_ip = 62; continue _fun00001 }
 55:
            entity = zuuluu.default;
            _fun00002_ip = 66; continue _fun00001;
 62:
            entity = zuuluu[michal];
 66:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();