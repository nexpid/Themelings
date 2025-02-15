// app/actions/SurveyActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    tango = 0;
    golf = oscar[tango];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SURVEY_REFETCH_INTERVAL;
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot5 = golf;
    golf = tango.NoticeTypes;
    var _closure1_slot6 = golf;
    tango = tango.Endpoints;
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/SurveyActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: overrideSurvey
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'SURVEY_OVERRIDE';
        mike['type'] = report;
        report = argFoo;
        mike['id'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['overrideSurvey'] = tango;
    tango = function(argFoo, argBar) { // Original name: surveyHide
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            oscar = argBar;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'SURVEY_HIDE';
            mike['type'] = report;
            mike['key'] = golf;
            mike = zulu.bind(tango)(mike);
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 3;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot5;
            if(oscar) { _fun00002_ip = 120; continue _fun00001 }
 89:
            verify = mike.APP_NOTICE_PRIMARY_CTA_OPENED;
            zulu = {};
            offset = _closure1_slot6;
            offset = offset.SURVEY;
            zulu['notice_type'] = offset;
            zulu = tango.bind(report)(verify, zulu);
            _fun00002_ip = 161; continue _fun00001;
 120:
            zulu = mike.APP_NOTICE_CLOSED;
            mike = {};
            options = _closure1_slot6;
            options = options.SURVEY;
            mike['notice_type'] = options;
            mike['survey_id'] = golf;
            mike['dismissed'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 161:
            return entity;
        }
    };
    zulu['surveyHide'] = tango;
    tango = function(argFoo, argBar) { // Original name: surveyFetch
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            mike = argBar;
            report = {};
            zulu = null;
            if(!(zulu != tango)) { _fun00004_ip = 24; continue _fun00003 }
 16:
            report['survey_override'] = tango;
 24:
            if(!(zulu != mike)) { _fun00004_ip = 36; continue _fun00003 }
 28:
            report['disable_auto_seen'] = mike;
 36:
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 4;
            mike = verify[mike];
            options = undefined;
            tango = zulu.bind(options)(mike);
            zulu = tango.get;
            mike = {};
            golf = _closure1_slot7;
            golf = golf.USER_SURVEY;
            mike['url'] = golf;
            mike['query'] = report;
            report = {};
            golf = _closure1_slot0;
            oscar = 5;
            oscar = verify[oscar];
            oscar = golf.bind(options)(oscar);
            oscar = oscar.NetworkActionNames;
            oscar = oscar.USER_SURVEY_FETCH;
            report['event'] = oscar;
            oscar = function(argFoo) { // Original name: properties
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    oscar = null;
                    mike = oscar == entity;
                    tango = undefined;
                    report = undefined;
                    if(mike) { _fun00006_ip = 36; continue _fun00005 }
 16:
                    entity = entity.body;
                    mike = oscar == entity;
                    report = undefined;
                    if(mike) { _fun00006_ip = 36; continue _fun00005 }
 30:
                    report = entity.survey;
 36:
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 6;
                    entity = zulu[entity];
                    zulu = mike.bind(tango)(entity);
                    mike = zulu.exact;
                    entity = {};
                    oscar = oscar == report;
                    tango = undefined;
                    if(oscar) { _fun00006_ip = 81; continue _fun00005 }
 76:
                    tango = report.key;
 81:
                    entity['key'] = tango;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            report['properties'] = oscar;
            mike['trackedActionData'] = report;
            report = false;
            mike['rejectWithError'] = report;
            tango = zulu.bind(tango)(mike);
            zulu = tango.then;
            mike = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    oscar = argFoo;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 2;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'SURVEY_FETCHED';
                    mike['type'] = report;
                    golf = null;
                    options = golf == oscar;
                    report = undefined;
                    if(options) { _fun00008_ip = 76; continue _fun00007 }
 56:
                    oscar = oscar.body;
                    golf = golf == oscar;
                    report = undefined;
                    if(golf) { _fun00008_ip = 76; continue _fun00007 }
 70:
                    report = oscar.survey;
 76:
                    mike['survey'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {'type': 'SURVEY_FETCHED', 'survey': null};
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['surveyFetch'] = tango;
    mike = function(argFoo) { // Original name: surveySeen
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            offset = argFoo;
            var _closure2_slot0 = offset;
            mike = _closure1_slot3;
            entity = mike.getLastSeenTimestamp;
            mike = entity.bind(mike)();
            entity = null;
            if(!(entity !== mike)) { _fun00010_ip = 71; continue _fun00009 }
 34:
            if(!(entity != mike)) { _fun00010_ip = 67; continue _fun00009 }
 38:
            entity = global;
            zulu = entity.Date;
            entity = zulu.now;
            entity = entity.bind(zulu)();
            mike = entity - mike;
            entity = _closure1_slot4;
            if(!(!(mike >= entity))) { _fun00010_ip = 71; continue _fun00009 }
 67:
            entity = undefined;
            return entity;
 71:
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 2;
            entity = verify[entity];
            options = undefined;
            tango = mike.bind(options)(entity);
            zulu = tango.dispatch;
            entity = {};
            golf = 'SURVEY_SEEN';
            entity['type'] = golf;
            entity['key'] = offset;
            entity = zulu.bind(tango)(entity);
            entity = 4;
            entity = verify[entity];
            zulu = mike.bind(options)(entity);
            mike = zulu.post;
            entity = {};
            golf = _closure1_slot7;
            tango = golf.USER_SURVEY_SEEN;
            tango = tango.bind(golf)(offset);
            entity['url'] = tango;
            tango = {};
            golf = _closure1_slot0;
            oscar = 5;
            oscar = verify[oscar];
            oscar = golf.bind(options)(oscar);
            oscar = oscar.NetworkActionNames;
            oscar = oscar.USER_SURVEY_SEEN;
            tango['event'] = oscar;
            report = function() { // Original name: properties
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.exact;
                entity = {};
                tango = _closure2_slot0;
                entity['key'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango['properties'] = report;
            entity['trackedActionData'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['surveySeen'] = mike;
    return entity;
})();