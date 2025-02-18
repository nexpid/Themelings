// app/actions/SurveyActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    tangon = 0;
    golfie = oscard[tangon];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SURVEY_REFETCH_INTERVAL;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot5 = golfie;
    golfie = tangon.NoticeTypes;
    var _closure1_slot6 = golfie;
    tangon = tangon.Endpoints;
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/SurveyActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: overrideSurvey
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'SURVEY_OVERRIDE';
        michal['type'] = report;
        report = argFoo;
        michal['id'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['overrideSurvey'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: surveyHide
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'SURVEY_HIDE';
            michal['type'] = report;
            michal['key'] = golfie;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 3;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot5;
            if(oscard) { _fun00002_ip = 120; continue _fun00001 }
 89:
            verify = michal.APP_NOTICE_PRIMARY_CTA_OPENED;
            zuuluu = {};
            offset = _closure1_slot6;
            offset = offset.SURVEY;
            zuuluu['notice_type'] = offset;
            zuuluu = tangon.bind(report)(verify, zuuluu);
            _fun00002_ip = 161; continue _fun00001;
 120:
            zuuluu = michal.APP_NOTICE_CLOSED;
            michal = {};
            option = _closure1_slot6;
            option = option.SURVEY;
            michal['notice_type'] = option;
            michal['survey_id'] = golfie;
            michal['dismissed'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 161:
            return entity;
        }
    };
    zuuluu['surveyHide'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: surveyFetch
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            michal = argBar;
            report = {};
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00004_ip = 24; continue _fun00003 }
 16:
            report['survey_override'] = tangon;
 24:
            if(!(zuuluu != michal)) { _fun00004_ip = 36; continue _fun00003 }
 28:
            report['disable_auto_seen'] = michal;
 36:
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 4;
            michal = verify[michal];
            option = undefined;
            tangon = zuuluu.bind(option)(michal);
            zuuluu = tangon.get;
            michal = {};
            golfie = _closure1_slot7;
            golfie = golfie.USER_SURVEY;
            michal['url'] = golfie;
            michal['query'] = report;
            report = {};
            golfie = _closure1_slot0;
            oscard = 5;
            oscard = verify[oscard];
            oscard = golfie.bind(option)(oscard);
            oscard = oscard.NetworkActionNames;
            oscard = oscard.USER_SURVEY_FETCH;
            report['event'] = oscard;
            oscard = function(argFoo) { // Original name: properties
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    oscard = null;
                    michal = oscard == entity;
                    tangon = undefined;
                    report = undefined;
                    if(michal) { _fun00006_ip = 36; continue _fun00005 }
 16:
                    entity = entity.body;
                    michal = oscard == entity;
                    report = undefined;
                    if(michal) { _fun00006_ip = 36; continue _fun00005 }
 30:
                    report = entity.survey;
 36:
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 6;
                    entity = zuuluu[entity];
                    zuuluu = michal.bind(tangon)(entity);
                    michal = zuuluu.exact;
                    entity = {};
                    oscard = oscard == report;
                    tangon = undefined;
                    if(oscard) { _fun00006_ip = 81; continue _fun00005 }
 76:
                    tangon = report.key;
 81:
                    entity['key'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            report['properties'] = oscard;
            michal['trackedActionData'] = report;
            report = false;
            michal['rejectWithError'] = report;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    oscard = argFoo;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 2;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'SURVEY_FETCHED';
                    michal['type'] = report;
                    golfie = null;
                    option = golfie == oscard;
                    report = undefined;
                    if(option) { _fun00008_ip = 76; continue _fun00007 }
 56:
                    oscard = oscard.body;
                    golfie = golfie == oscard;
                    report = undefined;
                    if(golfie) { _fun00008_ip = 76; continue _fun00007 }
 70:
                    report = oscard.survey;
 76:
                    michal['survey'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {'type': 'SURVEY_FETCHED', 'survey': null};
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['surveyFetch'] = tangon;
    michal = function(argFoo) { // Original name: surveySeen
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            offset = argFoo;
            var _closure2_slot0 = offset;
            michal = _closure1_slot3;
            entity = michal.getLastSeenTimestamp;
            michal = entity.bind(michal)();
            entity = null;
            if(!(entity !== michal)) { _fun00010_ip = 71; continue _fun00009 }
 34:
            if(!(entity != michal)) { _fun00010_ip = 67; continue _fun00009 }
 38:
            entity = global;
            zuuluu = entity.Date;
            entity = zuuluu.now;
            entity = entity.bind(zuuluu)();
            michal = entity - michal;
            entity = _closure1_slot4;
            if(!(!(michal >= entity))) { _fun00010_ip = 71; continue _fun00009 }
 67:
            entity = undefined;
            return entity;
 71:
            michal = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            option = undefined;
            tangon = michal.bind(option)(entity);
            zuuluu = tangon.dispatch;
            entity = {};
            golfie = 'SURVEY_SEEN';
            entity['type'] = golfie;
            entity['key'] = offset;
            entity = zuuluu.bind(tangon)(entity);
            entity = 4;
            entity = verify[entity];
            zuuluu = michal.bind(option)(entity);
            michal = zuuluu.post;
            entity = {};
            golfie = _closure1_slot7;
            tangon = golfie.USER_SURVEY_SEEN;
            tangon = tangon.bind(golfie)(offset);
            entity['url'] = tangon;
            tangon = {};
            golfie = _closure1_slot0;
            oscard = 5;
            oscard = verify[oscard];
            oscard = golfie.bind(option)(oscard);
            oscard = oscard.NetworkActionNames;
            oscard = oscard.USER_SURVEY_SEEN;
            tangon['event'] = oscard;
            report = function() { // Original name: properties
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.exact;
                entity = {};
                tangon = _closure2_slot0;
                entity['key'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon['properties'] = report;
            entity['trackedActionData'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['surveySeen'] = michal;
    return entity;
})();