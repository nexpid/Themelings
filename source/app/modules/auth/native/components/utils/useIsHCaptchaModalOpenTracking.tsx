// app/modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx
export default (function(_, argBar, __, argCorge, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.RegisterTransitionSteps;
    var _closure1_slot3 = golf;
    tango = tango.RegistrationTransitionActionTypes;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useIsHCaptchaModalOpenTracking
        report = _closure1_slot2;
        tango = report.useContext;
        oscar = _closure1_slot0;
        zulu = _closure1_slot1;
        entity = 2;
        zulu = zulu[entity];
        entity = undefined;
        zulu = oscar.bind(entity)(zulu);
        zulu = zulu.TrackRegistrationContext;
        oscar = tango.bind(report)(zulu);
        var _closure2_slot0 = oscar;
        tango = report.useLayoutEffect;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getRootNavigationRef;
                tango = mike.bind(zulu)();
                zulu = null;
                report = zulu == tango;
                mike = undefined;
                if(report) { _fun00002_ip = 51; continue _fun00001 }
 46:
                mike = tango.current;
 51:
                if(!(zulu == mike)) { _fun00002_ip = 57; continue _fun00001 }
 55:
                return entity;
 57:
                zulu = tango.addListener;
                mike = 'state';
                entity = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot1;
                        entity = 4;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        zulu = report.isModalOpen;
                        mike = 'hcaptcha';
                        mike = zulu.bind(report)(mike);
                        if(!mike) { _fun00004_ip = 89; continue _fun00003 }
 45:
                        zulu = _closure2_slot0;
                        mike = {};
                        report = _closure1_slot3;
                        report = report.CAPTCHA;
                        mike['step'] = report;
                        tango = _closure1_slot4;
                        tango = tango.VIEWED;
                        mike['actionType'] = tango;
                        mike = zulu.bind(entity)(mike);
 89:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useIsHCaptchaModalOpenTracking'] = mike;
    return entity;
})();