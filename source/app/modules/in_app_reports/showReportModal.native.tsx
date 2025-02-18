// app/modules/in_app_reports/showReportModal.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _showReportModal
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 209; continue _fun00001 }
 13:
                    romeon = argFoo;
                    tangon = argBar;
                    yankee = michal.onSubmit;
                    michal = michal.isEligibleForFeedback;
                    zuuluu = undefined;
                    if(!(michal === zuuluu)) { _fun00002_ip = 39; continue _fun00001 }
 37:
                    michal = true;
 39:
                    offset = michal;
                    SaveGenerator(address=46);
 44:
                    return zuuluu;
 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 206; continue _fun00001 }
 55: // try_start_0
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    oscard = 1;
                    oscard = option[oscard];
                    option = golfie.bind(zuuluu)(oscard);
                    golfie = option.getReportMenu;
                    oscard = romeon;
                    tangon = golfie.bind(option)(oscard, tangon);
                    SaveGenerator(address=97);
 95:
                    return tangon;
 97:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 198; continue _fun00001 }
 103:
                    option = _closure1_slot1;
                    oscard = _closure1_slot2;
                    golfie = 2;
                    golfie = oscard[golfie];
                    verify = option.bind(zuuluu)(golfie);
                    option = verify.pushLazy;
                    foxtra = _closure1_slot0;
                    golfie = 4;
                    golfie = oscard[golfie];
                    foxtra = foxtra.bind(zuuluu)(golfie);
                    golfie = 3;
                    golfie = oscard[golfie];
                    oscard = oscard.paths;
                    golfie = foxtra.bind(zuuluu)(golfie, oscard);
                    oscard = {};
                    oscard['menu'] = tangon;
                    oscard['reportType'] = romeon;
                    oscard['afterSubmit'] = yankee;
                    oscard['isEligibleForFeedback'] = offset;
                    report = _closure1_slot4;
                    report = option.bind(verify)(golfie, oscard, report);
 196: // try_end0
                    _fun00002_ip = 203; continue _fun00001;
 198:
                    return tangon;
 201: // catch_target0
                    CatchBlockStart(arg_register=3);
 203:
                    return zuuluu;
 206:
                    return michal;
 209:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 'IN_APP_REPORT_MODAL_KEY';
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/in_app_reports/showReportModal.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: showReportModal
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['showReportModal'] = tangon;
    michal = function() { // Original name: hideReportModal
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 2;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.popWithKey;
        michal = _closure1_slot4;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['hideReportModal'] = michal;
    return entity;
})();