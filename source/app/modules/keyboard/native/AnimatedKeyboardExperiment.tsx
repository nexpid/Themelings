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
            michal = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 1;
            entity = tangon[entity];
            report = undefined;
            michal = michal.bind(report)(entity);
            entity = michal.isAndroid;
            entity = entity.bind(michal)();
            michal = !entity;
            entity = !michal;
            if(michal) { _fun00002_ip = 89; continue _fun00001 }
 43:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 2;
            michal = oscard[michal];
            tangon = tangon.bind(report)(michal);
            michal = tangon.isFabric;
            michal = michal.bind(tangon)();
            michal = !michal;
            if(!michal) { _fun00002_ip = 86; continue _fun00001 }
 79:
            zuuluu = _closure1_slot2;
            michal = !zuuluu;
 86:
            entity = michal;
 89:
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
    verify = golfie.bind(entity)(report);
    oscard = verify.createExperiment;
    report = {'kind': 'user', 'id': '2025-06_animated_keyboard_android', 'label': 'Animated Keyboard (Android)'};
    offset = {'enabled': false, 'reanimated': false};
    report['defaultConfig'] = offset;
    yankee = {'id': 1, 'label': 'Enable w/ KeyboardController (Android)'};
    offset = {'enabled': true, 'reanimated': false};
    yankee['config'] = offset;
    offset = new Array(2);
    offset[0] = yankee;
    yankee = {'id': 2, 'label': 'Deprecated Reanimated (Android)'};
    romeon = {'enabled': true, 'reanimated': true};
    yankee['config'] = romeon;
    offset[1] = yankee;
    report['treatments'] = offset;
    report = oscard.bind(verify)(report);
    verify = report.getCurrentConfig;
    oscard = {};
    offset = 'isAnimatedKeyboardEnabled';
    oscard['location'] = offset;
    oscard = verify.bind(report)(oscard);
    verify = oscard.enabled;
    var _closure1_slot2 = verify;
    oscard = oscard.reanimated;
    var _closure1_slot3 = oscard;
    oscard = 3;
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
            zuuluu = zuuluu.bind(entity)();
            entity = !zuuluu;
            if(zuuluu) { _fun00004_ip = 23; continue _fun00003 }
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