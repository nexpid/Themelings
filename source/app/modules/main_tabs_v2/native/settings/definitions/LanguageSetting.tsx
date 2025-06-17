// app/modules/main_tabs_v2/native/settings/definitions/LanguageSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    tangon = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(option)(zuuluu, entity, michal);
    entity = 0;
    tangon = oscard[entity];
    michal = argBaz;
    entity = undefined;
    michal = michal.bind(entity)(tangon);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.RendererType;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.UserSettingsSections;
    michal = {};
    tangon = tangon.ROUTE;
    michal['type'] = tangon;
    tangon = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 4;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.IHMsPj;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = tangon;
    tangon = null;
    michal['parent'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.LanguageIcon;
    michal['IconComponent'] = tangon;
    tangon = function() { // Original name: useLanguageSettingTrailing
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            report = 3;
            oscard = michal[report];
            report = undefined;
            verify = tangon.bind(report)(oscard);
            option = verify.useStateFromStores;
            oscard = _closure1_slot2;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                entity = _closure1_slot2;
                entity = entity.locale;
                return entity;
            };
            oscard = option.bind(verify)(golfie, oscard);
            var _closure2_slot0 = oscard;
            oscard = 4;
            michal = michal[oscard];
            tangon = tangon.bind(report)(michal);
            michal = tangon.getAvailableLocales;
            tangon = michal.bind(tangon)();
            michal = tangon.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.value;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            michal = michal.bind(tangon)(entity);
            entity = null;
            tangon = entity != michal;
            if(!tangon) { _fun00002_ip = 147; continue _fun00001 }
 109:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = michal.localizedName;
            entity = zuuluu.bind(tangon)(michal);
 147:
            return entity;
        }
    };
    michal['useTrailing'] = tangon;
    tangon = {};
    option = option.LOCALE;
    tangon['route'] = option;
    golfie = function() { // Original name: getComponent
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.default;
        return entity;
    };
    tangon['getComponent'] = golfie;
    michal['screen'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/LanguageSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();