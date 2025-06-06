// app/modules/keyboard/native/AnimatedKeyboardExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    yankee = true;
    tangon['value'] = yankee;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-06_animated_keyboard_android', 'label': 'Animated Keyboard (Android)'};
    verify = {};
    offset = false;
    verify['enabled'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Enable Animated Keyboard (Android)'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    option = tangon.getCurrentConfig;
    report = {};
    verify = 'isAnimatedKeyboardEnabled';
    report['location'] = verify;
    report = option.bind(tangon)(report);
    report = report.enabled;
    var _closure1_slot2 = report;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/keyboard/native/AnimatedKeyboardExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['AnimatedKeyboardExperiment'] = tangon;
    michal = function() { // Original name: isLegacyAndroidKeyboard
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            entity = zuuluu.isAndroid;
            entity = entity.bind(zuuluu)();
            if(!entity) { _fun00002_ip = 44; continue _fun00001 }
 37:
            michal = _closure1_slot2;
            entity = !michal;
 44:
            return entity;
        }
    };
    zuuluu['isLegacyAndroidKeyboard'] = michal;
    return entity;
})();