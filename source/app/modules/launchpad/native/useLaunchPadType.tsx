// app/modules/launchpad/native/useLaunchPadType.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = tangon.LaunchPadTypes;
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/launchpad/native/useLaunchPadType.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useLaunchPadType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 1;
            tangon = zuuluu[michal];
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            oscard = tangon.LaunchPadModeSetting;
            tangon = oscard.useSetting;
            tangon = tangon.bind(oscard)();
            oscard = 2;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.LaunchPadMode;
            zuuluu = zuuluu.LAUNCH_PAD_DISABLED;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 209; continue _fun00001 }
 72:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.LaunchPadMode;
            zuuluu = zuuluu.LAUNCH_PAD_GESTURE_FULL_SCREEN;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 197; continue _fun00001 }
 105:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.LaunchPadMode;
            zuuluu = zuuluu.LAUNCH_PAD_GESTURE_RIGHT_EDGE;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 185; continue _fun00001 }
 138:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[oscard];
            zuuluu = report.bind(michal)(zuuluu);
            zuuluu = zuuluu.LaunchPadMode;
            zuuluu = zuuluu.LAUNCH_PAD_PULL_TAB;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 173; continue _fun00001 }
 171:
            return michal;
 173:
            michal = _closure1_slot2;
            michal = michal.PULL_TAB;
            return michal;
 185:
            michal = _closure1_slot2;
            michal = michal.GESTURE_EDGE;
            return michal;
 197:
            michal = _closure1_slot2;
            michal = michal.GESTURE_FULL;
            return michal;
 209:
            entity = _closure1_slot2;
            entity = entity.DISABLED;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();