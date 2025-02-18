// app/modules/keyboard/native/initializeKeyboardListeners.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    tangon = tangon.Keyboard;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/keyboard/native/initializeKeyboardListeners.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: initializeKeyboardListeners
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = _closure1_slot3;
            oscard = option.addListener;
            report = _closure1_slot0;
            entity = _closure1_slot2;
            golfie = 1;
            tangon = entity[golfie];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.isAndroid;
            tangon = tangon.bind(report)();
            report = 'keyboardWillShow';
            if(!tangon) { _fun00002_ip = 61; continue _fun00001 }
 55:
            report = 'keyboardDidShow';
 61:
            tangon = function(argFoo) {
                entity = argFoo;
                oscard = entity.duration;
                entity = entity.endCoordinates;
                report = entity.height;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                golfie = 'KEYBOARD_CHANGE';
                michal['type'] = golfie;
                michal['duration'] = oscard;
                michal['height'] = report;
                report = true;
                michal['open'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            tangon = oscard.bind(option)(report, tangon);
            report = _closure1_slot3;
            tangon = report.addListener;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            oscard = oscard.bind(entity)(zuuluu);
            zuuluu = oscard.isAndroid;
            oscard = zuuluu.bind(oscard)();
            zuuluu = 'keyboardWillHide';
            if(!oscard) { _fun00002_ip = 125; continue _fun00001 }
 119:
            zuuluu = 'keyboardDidHide';
 125:
            michal = function(argFoo) {
                entity = argFoo;
                report = entity.duration;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {'type': 'KEYBOARD_CHANGE', 'duration': null, 'height': 0, 'open': false};
                michal['duration'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();