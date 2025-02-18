// app/modules/remixing/native/hooks/useKeyboardState.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Keyboard;
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useRemixingEditorStore;
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RemixMode;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/remixing/native/hooks/useKeyboardState.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useKeyboardState
        entity = argFoo;
        option = entity.isOnAndroid;
        var _closure2_slot0 = option;
        oscard = entity.setIsKeyboardVisible;
        var _closure2_slot1 = oscard;
        report = _closure1_slot2;
        entity = undefined;
        tangon = function(argFoo) {
            entity = argFoo;
            entity = entity.setCurrentMode;
            return entity;
        };
        golfie = report.bind(entity)(tangon);
        var _closure2_slot2 = golfie;
        report = _closure1_slot0;
        tangon = report.useEffect;
        zuuluu = new Array(3);
        zuuluu[0] = option;
        zuuluu[1] = golfie;
        zuuluu[2] = oscard;
        michal = function() {
            report = _closure1_slot1;
            tangon = report.addListener;
            zuuluu = 'keyboardDidShow';
            michal = function() {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    michal = _closure2_slot0;
                    if(!michal) { _fun00002_ip = 23; continue _fun00001 }
 10:
                    zuuluu = _closure2_slot1;
                    michal = undefined;
                    entity = true;
                    entity = zuuluu.bind(michal)(entity);
 23:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            var _closure3_slot0 = michal;
            tangon = report.addListener;
            zuuluu = 'keyboardDidHide';
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot0;
                    if(!michal) { _fun00004_ip = 45; continue _fun00003 }
 10:
                    tangon = _closure2_slot1;
                    zuuluu = undefined;
                    michal = false;
                    michal = tangon.bind(zuuluu)(michal);
                    michal = _closure2_slot2;
                    entity = _closure1_slot3;
                    entity = entity.DEFAULT_MODE;
                    entity = michal.bind(zuuluu)(entity);
 45:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            var _closure3_slot1 = michal;
            tangon = report.addListener;
            zuuluu = 'keyboardWillShow';
            michal = function() {
                zuuluu = _closure2_slot1;
                entity = undefined;
                michal = true;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            var _closure3_slot2 = michal;
            tangon = report.addListener;
            zuuluu = 'keyboardWillHide';
            michal = function() {
                zuuluu = _closure2_slot1;
                entity = undefined;
                michal = false;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            var _closure3_slot3 = michal;
            entity = function() {
                zuuluu = _closure3_slot1;
                michal = zuuluu.remove;
                michal = michal.bind(zuuluu)();
                zuuluu = _closure3_slot0;
                michal = zuuluu.remove;
                michal = michal.bind(zuuluu)();
                zuuluu = _closure3_slot3;
                michal = zuuluu.remove;
                michal = michal.bind(zuuluu)();
                michal = _closure3_slot2;
                entity = michal.remove;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useKeyboardState'] = michal;
    return entity;
})();