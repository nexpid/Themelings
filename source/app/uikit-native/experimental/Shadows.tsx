// app/uikit-native/experimental/Shadows.tsx
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
    tangon = 'uikit-native/experimental/Shadows.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            option = entity.xOffset;
            golfie = entity.yOffset;
            verify = entity.shadowColorIos;
            oscard = entity.shadowOpacity;
            report = entity.shadowRadius;
            tangon = entity.elevation;
            zuuluu = entity.shadowColorAndroid;
            offset = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 0;
            michal = michal[entity];
            entity = undefined;
            michal = offset.bind(entity)(michal);
            entity = michal.isAndroid;
            entity = entity.bind(michal)();
            michal = {};
            if(entity) { _fun00002_ip = 115; continue _fun00001 }
 83:
            entity = {};
            entity['shadowColor'] = verify;
            michal['width'] = option;
            michal['height'] = golfie;
            entity['shadowOffset'] = michal;
            entity['shadowOpacity'] = oscard;
            entity['shadowRadius'] = report;
            _fun00002_ip = 128; continue _fun00001;
 115:
            michal['elevation'] = tangon;
            michal['shadowColor'] = zuuluu;
            entity = michal;
 128:
            return entity;
        }
    };
    zuuluu['generateBoxShadowStyle'] = michal;
    michal = {'xOffset': 0, 'yOffset': 4, 'shadowColorIos': '#000000', 'shadowOpacity': 0.3, 'shadowRadius': 4.65, 'elevation': 8, 'shadowColorAndroid': '#000000'};
    zuuluu['EIGHT_DP_ELEVATION_SHADOW_PARAMS'] = michal;
    michal = {'xOffset': 0, 'yOffset': 2, 'shadowColorIos': '#000000', 'shadowOpacity': 0.23, 'shadowRadius': 2.62, 'elevation': 4, 'shadowColorAndroid': '#000000'};
    zuuluu['FOUR_DP_ELEVATION_SHADOW_PARAMS'] = michal;
    michal = {'xOffset': 0, 'yOffset': 7, 'shadowColorIos': '#000', 'shadowOpacity': 0.36, 'shadowRadius': 9.51, 'elevation': 15, 'shadowColorAndroid': '#000'};
    zuuluu['EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS'] = michal;
    michal = {'xOffset': 0, 'yOffset': 0, 'shadowColorIos': '#000', 'shadowOpacity': 0, 'shadowRadius': 0, 'elevation': 0, 'shadowColorAndroid': '#000'};
    zuuluu['NO_ELEVATION_SHADOW_PARAMS'] = michal;
    return entity;
})();