// app/modules/main_tabs_v2/native/settings/definitions/PremiumRestoreSubscriptionSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    golfie = true;
    michal['value'] = golfie;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.RendererType;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot4 = michal;
    michal = {};
    option = option.PRESSABLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 9;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.s9h22N;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    option = null;
    michal['parent'] = option;
    option = 10;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.NitroWheelIcon;
    michal['IconComponent'] = option;
    option = function() { // Original name: handleNitroRestoreSettingPress
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        entity = 3;
        michal = tangon[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        michal = report.restoreSubscription;
        michal = michal.bind(report)();
        michal = 4;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.openLazy;
        michal = {};
        report = function() { // Original name: importer
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            michal = 6;
            michal = entity[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = 5;
            michal = entity[michal];
            entity = entity.paths;
            zuuluu = zuuluu.bind(tangon)(michal, entity);
            michal = zuuluu.then;
            entity = function(argFoo) {
                michal = argFoo;
                michal = michal.default;
                var _closure4_slot0 = michal;
                entity = function(argFoo) {
                    tangon = _closure1_slot4;
                    zuuluu = _closure4_slot0;
                    michal = {};
                    report = argFoo;
                    oscard = michal;
                    entity = copyDataProperties(oscard, report);
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal['importer'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['onPress'] = option;
    michal['withArrow'] = golfie;
    tangon = function() { // Original name: useHasPremiumRestoreSubscriptionSetting
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 7;
            entity = tangon[entity];
            tangon = undefined;
            oscard = zuuluu.bind(tangon)(entity);
            report = oscard.useStateFromStores;
            entity = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu, entity);
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00002_ip = 72; continue _fun00001 }
 66:
            entity = zuuluu.verified;
 72:
            if(!entity) { _fun00002_ip = 107; continue _fun00001 }
 75:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 8;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.isAndroid;
            michal = michal.bind(zuuluu)();
            entity = !michal;
 107:
            return entity;
        }
    };
    michal['usePredicate'] = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/PremiumRestoreSubscriptionSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();