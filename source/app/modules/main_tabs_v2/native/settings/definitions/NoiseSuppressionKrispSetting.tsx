// app/modules/main_tabs_v2/native/settings/definitions/NoiseSuppressionKrispSetting.tsx
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
    option = option.RADIO;
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
    golfie = function() { // Original name: useNoiseSuppressionKrispSettingValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 3;
            entity = golfie[tangon];
            report = undefined;
            yankee = oscard.bind(report)(entity);
            offset = yankee.useStateFromStores;
            option = _closure1_slot2;
            verify = new Array(1);
            verify[0] = option;
            entity = function() {
                michal = _closure1_slot2;
                entity = michal.getNoiseSuppression;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = offset.bind(yankee)(verify, entity);
            tangon = golfie[tangon];
            golfie = oscard.bind(report)(tangon);
            oscard = golfie.useStateFromStores;
            tangon = new Array(1);
            tangon[0] = option;
            zuuluu = function() {
                michal = _closure1_slot2;
                entity = michal.getNoiseCancellation;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = oscard.bind(golfie)(tangon, zuuluu);
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 4;
            michal = oscard[michal];
            michal = tangon.bind(report)(michal);
            michal = michal.NoiseSuppressionOpt;
            if(zuuluu) { _fun00002_ip = 140; continue _fun00001 }
 121:
            if(entity) { _fun00002_ip = 132; continue _fun00001 }
 124:
            entity = michal.NONE;
            _fun00002_ip = 138; continue _fun00001;
 132:
            entity = michal.STANDARD;
 138:
            _fun00002_ip = 146; continue _fun00001;
 140:
            entity = michal.KRISP;
 146:
            return entity;
        }
    };
    michal['useValue'] = golfie;
    golfie = function(argFoo) { // Original name: onNoiseSuppressionKrispValueSettingChange
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.handleNoiseSuppressionChange;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['onValueChange'] = golfie;
    golfie = function() { // Original name: useNoiseSuppressionKrispSettingOptions
        michal = {};
        golfie = _closure1_slot0;
        option = _closure1_slot1;
        tangon = 4;
        entity = option[tangon];
        oscard = undefined;
        entity = golfie.bind(oscard)(entity);
        entity = entity.NoiseSuppressionOpt;
        entity = entity.KRISP;
        michal['value'] = entity;
        zuuluu = 5;
        entity = option[zuuluu];
        entity = golfie.bind(oscard)(entity);
        verify = entity.intl;
        report = verify.string;
        entity = option[zuuluu];
        entity = golfie.bind(oscard)(entity);
        entity = entity.t;
        entity = entity.rdoNzs;
        entity = report.bind(verify)(entity);
        michal['label'] = entity;
        entity = new Array(3);
        entity[0] = michal;
        michal = {};
        report = option[tangon];
        report = golfie.bind(oscard)(report);
        report = report.NoiseSuppressionOpt;
        report = report.STANDARD;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.qXeYHx;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[1] = michal;
        michal = {};
        tangon = option[tangon];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.NoiseSuppressionOpt;
        tangon = tangon.NONE;
        michal['value'] = tangon;
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        report = tangon.intl;
        tangon = report.string;
        zuuluu = option[zuuluu];
        zuuluu = golfie.bind(oscard)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.wkYAl5;
        zuuluu = tangon.bind(report)(zuuluu);
        michal['label'] = zuuluu;
        entity[2] = michal;
        return entity;
    };
    michal['useOptions'] = golfie;
    golfie = function() { // Original name: useHasNoiseSuppressionKrispSetting
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
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['usePredicate'] = golfie;
    tangon = function() { // Original name: additionalSearchTerms
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
        entity = entity.hmfkCg;
        michal = michal.bind(zuuluu)(entity);
        entity = new Array(1);
        entity[0] = michal;
        return entity;
    };
    michal['additionalSearchTerms'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/NoiseSuppressionKrispSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();