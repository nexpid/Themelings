// app/modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.useEffect;
    var _closure1_slot3 = option;
    tangon = tangon.useState;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useTrackUserProfileActivityView
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.userId;
            var _closure2_slot0 = zuuluu;
            report = entity.onAction;
            var _closure2_slot1 = report;
            entity = undefined;
            var _closure2_slot3 = entity;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 3;
            tangon = golfie[tangon];
            option = oscard.bind(entity)(tangon);
            golfie = option.useStateFromStores;
            tangon = _closure1_slot5;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.isFetchingUserOutbox;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = golfie.bind(option)(oscard, tangon);
            golfie = _closure1_slot4;
            tangon = false;
            option = golfie.bind(entity)(tangon);
            golfie = _closure1_slot2;
            tangon = 2;
            option = golfie.bind(entity)(option, tangon);
            tangon = 0;
            tangon = option[tangon];
            golfie = 1;
            golfie = option[golfie];
            var _closure2_slot2 = golfie;
            oscard = !oscard;
            if(!oscard) { _fun00002_ip = 131; continue _fun00001 }
 128:
            oscard = !tangon;
 131:
            _closure2_slot3 = oscard;
            tangon = _closure1_slot3;
            zuuluu = new Array(2);
            zuuluu[0] = oscard;
            zuuluu[1] = report;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot3;
                    if(!michal) { _fun00004_ip = 44; continue _fun00003 }
 10:
                    tangon = _closure2_slot1;
                    michal = {};
                    zuuluu = 'VIEW_ACTIVITY_CARD';
                    michal['action'] = zuuluu;
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    michal = _closure2_slot2;
                    entity = true;
                    entity = michal.bind(zuuluu)(entity);
 44:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();