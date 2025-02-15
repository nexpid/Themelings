// app/modules/in_app_reports/trackInAppReportsFeedback.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/in_app_reports/trackInAppReportsFeedback.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: trackInAppReportsFeedback
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            yankee = mike.problem;
            golf = mike.feedback;
            offset = mike.reportType;
            verify = mike.reportId;
            entity = undefined;
            if(!(verify === entity)) { _fun00002_ip = 35; continue _fun00001 }
 33:
            verify = null;
 35:
            options = mike.rating;
            if(!(options === entity)) { _fun00002_ip = 47; continue _fun00001 }
 45:
            options = null;
 47:
            oscar = mike.dontShowAgain;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 1;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot2;
            zulu = mike.IAR_FEEDBACK_SUBMITTED;
            mike = {};
            mike['reason'] = yankee;
            mike['report_type'] = offset;
            mike['report_id'] = verify;
            mike['rating'] = options;
            mike['feedback'] = golf;
            mike['dont_show_again'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();