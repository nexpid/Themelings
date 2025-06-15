// app/modules/keyboard/native/AnimatedKeyboardExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
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
    var _closure1_slot4 = michal;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    offset = golfie.bind(entity)(report);
    verify = offset.createExperiment;
    report = {'kind': 'user', 'id': '2025-06_animated_keyboard_android', 'label': 'Animated Keyboard (Android)'};
    oscard = {'enabled': false, 'reanimated': false};
    report['defaultConfig'] = oscard;
    oscard = {'id': 1, 'label': 'Enable w/ Reanimated(Android)'};
    yankee = {'enabled': true, 'reanimated': true};
    oscard['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = oscard;
    romeon = {'id': 2, 'label': 'Enable w/ KeyboardController (Android)'};
    oscard = 2;
    foxtra = {'enabled': true, 'reanimated': false};
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    report['treatments'] = yankee;
    report = verify.bind(offset)(report);
    offset = report.getCurrentConfig;
    verify = {};
    yankee = 'isAnimatedKeyboardEnabled';
    verify['location'] = yankee;
    verify = offset.bind(report)(verify);
    offset = verify.enabled;
    var _closure1_slot2 = offset;
    verify = verify.reanimated;
    var _closure1_slot3 = verify;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/keyboard/native/AnimatedKeyboardExperiment.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['AnimatedKeyboardExperiment'] = report;
    tangon = function() { // Original name: isReanimatedKeyboardEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot4;
            entity = undefined;
            entity = zuuluu.bind(entity)();
            entity = !entity;
            if(!entity) { _fun00004_ip = 23; continue _fun00003 }
 19:
            entity = _closure1_slot3;
 23:
            return entity;
        }
    };
    zuuluu['isReanimatedKeyboardEnabled'] = tangon;
    zuuluu['isLegacyAndroidKeyboard'] = michal;
    return entity;
})();