// app/modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/in_app_reports/native/components/feedback/InAppReportsFeedbackActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: InAppReportsFeedbackActionSheet
        entity = argFoo;
        michal = entity.reportId;
        var _closure2_slot0 = michal;
        entity = entity.reportType;
        var _closure2_slot1 = entity;
        michal = _closure1_slot1;
        romeon = _closure1_slot2;
        zuuluu = 3;
        zuuluu = romeon[zuuluu];
        tangon = undefined;
        zuuluu = michal.bind(tangon)(zuuluu);
        golfie = zuuluu.bind(tangon)();
        yankee = _closure1_slot0;
        zuuluu = 4;
        zuuluu = romeon[zuuluu];
        option = yankee.bind(tangon)(zuuluu);
        oscard = option.improperGetEnglishIntlMessageText;
        zuuluu = 'CALL_FEEDBACK_OPTION_OTHER';
        oscard = oscard.bind(option)(zuuluu);
        zuuluu = _closure1_slot4;
        entity = 5;
        entity = romeon[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        option = 6;
        verify = romeon[option];
        verify = yankee.bind(tangon)(verify);
        foxtra = verify.intl;
        offset = foxtra.string;
        verify = romeon[option];
        verify = yankee.bind(tangon)(verify);
        verify = verify.t;
        verify = verify.MP5lDg;
        verify = offset.bind(foxtra)(verify);
        entity['headerLabel'] = verify;
        verify = true;
        entity['showHeaderCloseButton'] = verify;
        verify = romeon[option];
        verify = yankee.bind(tangon)(verify);
        foxtra = verify.intl;
        offset = foxtra.string;
        verify = romeon[option];
        verify = yankee.bind(tangon)(verify);
        verify = verify.t;
        verify = verify.7Ct0Dg;
        verify = offset.bind(foxtra)(verify);
        entity['ratingsBodyLabel'] = verify;
        verify = romeon[option];
        verify = yankee.bind(tangon)(verify);
        offset = verify.intl;
        verify = offset.string;
        option = romeon[option];
        option = yankee.bind(tangon)(option);
        option = option.t;
        option = option.FJmoxM;
        option = verify.bind(offset)(option);
        entity['reasonsHeaderLabel'] = option;
        entity['reasons'] = golfie;
        golfie = new Array(1);
        golfie[0] = oscard;
        entity['feedbackReasons'] = golfie;
        entity['otherKey'] = oscard;
        oscard = function() { // Original name: trackOpen
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 7;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot3;
            zuuluu = michal.IAR_FEEDBACK_MODAL_VIEWED;
            michal = {};
            golfie = _closure2_slot0;
            michal['report_id'] = golfie;
            oscard = _closure2_slot1;
            michal['report_type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['trackOpen'] = oscard;
        report = function(argFoo) { // Original name: trackReport
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                tangon = michal.rating;
                entity = michal.reason;
                verify = michal.feedback;
                option = michal.doNotShowAgain;
                zuuluu = null;
                michal = zuuluu != entity;
                golfie = null;
                if(!michal) { _fun00002_ip = 43; continue _fun00001 }
 38:
                golfie = entity.value;
 43:
                oscard = _closure1_slot1;
                report = _closure1_slot2;
                entity = 8;
                report = report[entity];
                entity = undefined;
                oscard = oscard.bind(entity)(report);
                report = {};
                report['rating'] = tangon;
                report['problem'] = golfie;
                offset = zuuluu != verify;
                golfie = '';
                if(!offset) { _fun00002_ip = 94; continue _fun00001 }
 91:
                golfie = verify;
 94:
                report['feedback'] = golfie;
                verify = _closure2_slot0;
                report['reportId'] = verify;
                golfie = _closure2_slot1;
                report['reportType'] = golfie;
                golfie = zuuluu != option;
                if(!golfie) { _fun00002_ip = 130; continue _fun00001 }
 127:
                golfie = option;
 130:
                report['dontShowAgain'] = golfie;
                report = oscard.bind(entity)(report);
                if(!(zuuluu != tangon)) { _fun00002_ip = 174; continue _fun00001 }
 144:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 9;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.presentFeedbackSent;
                michal = michal.bind(zuuluu)();
 174:
                return entity;
            }
        };
        entity['trackReport'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();