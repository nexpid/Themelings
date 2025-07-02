// app/modules/safety_flows/native/SafetyFlowsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: getScreensForTaskType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 2;
            entity = entity[oscard];
            report = undefined;
            entity = michal.bind(report)(entity);
            entity = entity.TASK_TYPE_TO_SCREENS;
            option = entity[verify];
            golfie = null;
            michal = golfie == option;
            entity = null;
            if(michal) { _fun00002_ip = 163; continue _fun00001 }
 49:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.TaskType;
            tangon = michal.EMAIL_VERIFICATION;
            michal = option;
            if(!(verify === tangon)) { _fun00002_ip = 160; continue _fun00001 }
 85:
            verify = _closure1_slot4;
            tangon = verify.getCurrentUser;
            verify = tangon.bind(verify)();
            offset = golfie == verify;
            tangon = undefined;
            if(offset) { _fun00002_ip = 113; continue _fun00001 }
 107:
            tangon = verify.email;
 113:
            michal = option;
            if(!(golfie != tangon)) { _fun00002_ip = 160; continue _fun00001 }
 120:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.SafetyFlowScreens;
            tangon = zuuluu.VERIFY_EMAIL;
            zuuluu = new Array(1);
            zuuluu[0] = tangon;
            michal = zuuluu;
 160:
            entity = michal;
 163:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = function() { // Original name: _fetchAndUpdateTask
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 72; continue _fun00003 }
 7:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 3;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.getCurrentTask;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=46);
 44:
                    return michal;
 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 69; continue _fun00003 }
 52:
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00004_ip = 66; continue _fun00003 }
 58:
                    zuuluu = argFoo;
                    zuuluu = zuuluu.bind(tangon)(michal);
 66:
                    return michal;
 69:
                    return michal;
 72:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 10;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/safety_flows/native/SafetyFlowsUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getScreensForTaskType'] = tangon;
    tangon = function() { // Original name: fetchAndUpdateTask
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchAndUpdateTask'] = tangon;
    michal = function(argFoo, argBar) { // Original name: navigateToScreenForTask
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = argBar;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00006_ip = 98; continue _fun00005 }
 12:
            oscard = _closure1_slot5;
            report = entity.task_type;
            entity = undefined;
            report = oscard.bind(entity)(report);
            if(!(zuuluu == report)) { _fun00006_ip = 80; continue _fun00005 }
 36:
            zuuluu = tangon.push;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
            michal = golfie[michal];
            michal = oscard.bind(entity)(michal);
            michal = michal.SafetyFlowScreens;
            michal = michal.UPDATE_APP;
            michal = zuuluu.bind(tangon)(michal);
            _fun00006_ip = 96; continue _fun00005;
 80:
            zuuluu = tangon.push;
            michal = 0;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
 96:
            return entity;
 98:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 4;
            michal = verify[michal];
            golfie = undefined;
            zuuluu = option.bind(golfie)(michal);
            michal = zuuluu.popWithKey;
            report = _closure1_slot0;
            entity = 5;
            entity = verify[entity];
            entity = report.bind(golfie)(entity);
            entity = entity.SAFETY_FLOWS_MODAL_KEY;
            entity = michal.bind(zuuluu)(entity);
            entity = 6;
            entity = verify[entity];
            zuuluu = option.bind(golfie)(entity);
            michal = zuuluu.open;
            entity = {};
            tangon = 'SAFETY_FLOWS_VERIFY_EMAIL_SUCCESS';
            entity['key'] = tangon;
            tangon = 7;
            tangon = verify[tangon];
            tangon = option.bind(golfie)(tangon);
            entity['icon'] = tangon;
            tangon = 8;
            tangon = verify[tangon];
            tangon = report.bind(golfie)(tangon);
            oscard = tangon.intl;
            report = oscard.string;
            tangon = 9;
            tangon = verify[tangon];
            tangon = option.bind(golfie)(tangon);
            tangon = tangon./fHz9f;
            tangon = report.bind(oscard)(tangon);
            entity['content'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        }
    };
    zuuluu['navigateToScreenForTask'] = michal;
    return entity;
})();