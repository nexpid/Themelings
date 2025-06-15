// app/modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.findNodeHandle;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserSettingsSections;
    var _closure1_slot6 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/hooks/native/useScrollToUserProfileEditFormSection.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useScrollToUserProfileEditFormSection
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        tangon = _closure1_slot3;
        report = tangon.useRef;
        entity = {};
        entity = report.bind(tangon)(entity);
        var _closure2_slot2 = entity;
        golfie = _closure1_slot0;
        oscard = _closure1_slot2;
        report = 4;
        oscard = oscard[report];
        report = undefined;
        golfie = golfie.bind(report)(oscard);
        oscard = golfie.useStateFromStores;
        zuuluu = _closure1_slot5;
        report = new Array(1);
        report[0] = zuuluu;
        zuuluu = function() {
            entity = _closure1_slot5;
            entity = entity.useReducedMotion;
            return entity;
        };
        zuuluu = oscard.bind(golfie)(report, zuuluu);
        var _closure2_slot3 = zuuluu;
        zuuluu = tangon.useEffect;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot1;
                zuuluu = null;
                entity = zuuluu != entity;
                if(!entity) { _fun00002_ip = 46; continue _fun00001 }
 16:
                michal = _closure2_slot2;
                report = michal.current;
                oscard = zuuluu == report;
                michal = undefined;
                if(oscard) { _fun00002_ip = 42; continue _fun00001 }
 34:
                tangon = _closure2_slot1;
                michal = report[tangon];
 42:
                entity = zuuluu != michal;
 46:
                if(!entity) { _fun00002_ip = 76; continue _fun00001 }
 49:
                entity = global;
                tangon = entity.setTimeout;
                zuuluu = undefined;
                michal = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = _closure2_slot2;
                        zuuluu = michal.current;
                        michal = _closure2_slot1;
                        oscard = zuuluu[michal];
                        tangon = _closure1_slot4;
                        entity = _closure2_slot0;
                        zuuluu = entity.current;
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        zuuluu = null;
                        if(!(zuuluu != report)) { _fun00004_ip = 115; continue _fun00003 }
 49:
                        if(!(zuuluu != oscard)) { _fun00004_ip = 74; continue _fun00003 }
 53:
                        tangon = oscard.measureLayout;
                        zuuluu = function(argFoo, argBar) {
                            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                entity = _closure2_slot0;
                                zuuluu = entity.current;
                                entity = null;
                                if(!(entity != zuuluu)) { _fun00006_ip = 57; continue _fun00005 }
 18:
                                michal = zuuluu.scrollTo;
                                entity = {};
                                report = argFoo;
                                entity['x'] = report;
                                report = argBar;
                                entity['y'] = report;
                                tangon = _closure2_slot3;
                                tangon = !tangon;
                                entity['animated'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
 57:
                                entity = undefined;
                                return entity;
                            }
                        };
                        zuuluu = tangon.bind(oscard)(report, zuuluu);
 74:
                        tangon = _closure1_slot1;
                        report = _closure1_slot2;
                        zuuluu = 5;
                        zuuluu = report[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.clearScrollPosition;
                        michal = _closure1_slot6;
                        michal = michal.PROFILE_CUSTOMIZATION;
                        michal = zuuluu.bind(tangon)(michal);
 115:
                        return entity;
                    }
                };
                entity = 0;
                entity = tangon.bind(zuuluu)(michal, entity);
 76:
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();