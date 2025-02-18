// app/modules/main_tabs_v2/native/settings/definitions/NoiseSuppressionSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    golfie = oscard[entity];
    michal = argBaz;
    entity = undefined;
    michal = michal.bind(entity)(golfie);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = {};
    option = 2;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.RendererType;
    option = option.TOGGLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 5;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.t8QhiY;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    golfie = golfie.VOICE;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useNoiseSuppressionSettingValue
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot2;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            michal = _closure1_slot2;
            entity = michal.getNoiseSuppression;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['useValue'] = golfie;
    golfie = function(argFoo) { // Original name: onNoiseSuppressionSettingValueChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 4;
            zuuluu = entity[oscard];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.handleNoiseSuppressionChange;
            report = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = report.bind(entity)(michal);
            report = michal.NoiseSuppressionOpt;
            michal = argFoo;
            if(michal) { _fun00002_ip = 68; continue _fun00001 }
 60:
            michal = report.NONE;
            _fun00002_ip = 74; continue _fun00001;
 68:
            michal = report.STANDARD;
 74:
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['onValueChange'] = golfie;
    tangon = function() { // Original name: useHasNoiseSuppressionSetting
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot2;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            michal = _closure1_slot2;
            entity = michal.isNoiseCancellationSupported;
            entity = entity.bind(michal)();
            entity = !entity;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['usePredicate'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/NoiseSuppressionSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();