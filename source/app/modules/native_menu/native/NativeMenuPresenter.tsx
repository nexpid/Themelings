// app/modules/native_menu/native/NativeMenuPresenter.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Fragment;
    var _closure1_slot5 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/native_menu/native/NativeMenuPresenter.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: MenuContainer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot0;
            option = _closure1_slot2;
            entity = 3;
            entity = option[entity];
            tangon = undefined;
            verify = report.bind(tangon)(entity);
            golfie = verify.useStateFromStoresObject;
            entity = _closure1_slot4;
            oscard = new Array(1);
            oscard[0] = entity;
            report = function() {
                entity = {};
                zuuluu = _closure1_slot4;
                michal = zuuluu.getKey;
                michal = michal.bind(zuuluu)();
                entity['key'] = michal;
                michal = zuuluu.getMenu;
                michal = michal.bind(zuuluu)();
                entity['menu'] = michal;
                return entity;
            };
            entity = new Array(0);
            report = golfie.bind(verify)(oscard, report, entity);
            entity = report.key;
            var _closure2_slot0 = entity;
            oscard = report.menu;
            verify = _closure1_slot3;
            golfie = verify.useCallback;
            report = new Array(1);
            report[0] = entity;
            zuuluu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00004_ip = 56; continue _fun00003 }
 16:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 4;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.hideNativeMenu;
                    michal = _closure2_slot0;
                    michal = zuuluu.bind(tangon)(michal);
 56:
                    return entity;
                }
            };
            report = golfie.bind(verify)(zuuluu, report);
            golfie = _closure1_slot1;
            zuuluu = 5;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)(report);
            zuuluu = _closure1_slot6;
            michal = _closure1_slot5;
            report = null;
            if(!(report != entity)) { _fun00002_ip = 147; continue _fun00001 }
 143:
            if(!(report == oscard)) { _fun00002_ip = 155; continue _fun00001 }
 147:
            entity = {};
            entity['children'] = report;
            _fun00002_ip = 164; continue _fun00001;
 155:
            report = {};
            report['children'] = oscard;
            entity = report;
 164:
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();