// app/modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
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
    tangon = tangon.NativeModules;
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ContactSyncScenes;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/contact_sync/native/components/useBackHandlerSkipPhoneScreens.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useBackHandlerSkipPhoneScreens
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 2;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.useNavigatorBackPressHandler;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot1;
                michal = null;
                if(!(michal == zuuluu)) { _fun00002_ip = 157; continue _fun00001 }
 16:
                zuuluu = _closure2_slot0;
                michal = _closure1_slot3;
                tangon = michal.ADD_PHONE;
                oscard = new Array(3);
                oscard[0] = tangon;
                tangon = michal.VERIFY_PHONE;
                oscard[1] = tangon;
                michal = michal.VERIFY_PASSWORD;
                oscard[2] = michal;
                michal = zuuluu.getState;
                michal = michal.bind(zuuluu)();
                michal = michal.routes;
                tangon = michal.length;
                report = 2;
                if(!(!(tangon <= report))) { _fun00002_ip = 145; continue _fun00001 }
 89:
                tangon = michal.length;
                tangon = tangon - report;
                tangon = michal[tangon];
                report = oscard.includes;
                tangon = tangon.name;
                tangon = report.bind(oscard)(tangon);
                if(!tangon) { _fun00002_ip = 167; continue _fun00001 }
 120:
                tangon = zuuluu.pop;
                report = michal.length;
                michal = 1;
                michal = report - michal;
                michal = tangon.bind(zuuluu)(michal);
                _fun00002_ip = 167; continue _fun00001;
 145:
                michal = zuuluu.pop;
                michal = michal.bind(zuuluu)();
                _fun00002_ip = 167; continue _fun00001;
 157:
                michal = _closure2_slot1;
                entity = undefined;
                entity = michal.bind(entity)();
 167:
                entity = true;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function() { // Original name: useBackHandlerMinimizeApp
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.useNavigatorBackPressHandler;
        michal = function() {
            entity = _closure1_slot2;
            michal = entity.MinimizeApp;
            entity = michal.minimizeApp;
            entity = entity.bind(michal)();
            entity = true;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['useBackHandlerMinimizeApp'] = michal;
    return entity;
})();