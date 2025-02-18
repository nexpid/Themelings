// app/modules/in_app_reports/trackInAppReportsFeedback.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    tangon = tangon.AnalyticEvents;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/in_app_reports/trackInAppReportsFeedback.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: trackInAppReportsFeedback
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            yankee = michal.problem;
            golfie = michal.feedback;
            offset = michal.reportType;
            verify = michal.reportId;
            entity = undefined;
            if(!(verify === entity)) { _fun00002_ip = 35; continue _fun00001 }
 33:
            verify = null;
 35:
            option = michal.rating;
            if(!(option === entity)) { _fun00002_ip = 47; continue _fun00001 }
 45:
            option = null;
 47:
            oscard = michal.dontShowAgain;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 1;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot2;
            zuuluu = michal.IAR_FEEDBACK_SUBMITTED;
            michal = {};
            michal['reason'] = yankee;
            michal['report_type'] = offset;
            michal['report_id'] = verify;
            michal['rating'] = option;
            michal['feedback'] = golfie;
            michal['dont_show_again'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();