// app/modules/saved_messages/SavedMessagesActions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _upsertSavedMessage
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 173; continue _fun00001 }
 13:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 3;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.put;
                    michal = {};
                    yankee = _closure1_slot5;
                    offset = yankee.PUT_SAVED_MESSAGE;
                    verify = option.channelId;
                    golfie = option.messageId;
                    golfie = offset.bind(yankee)(verify, golfie);
                    michal['url'] = golfie;
                    golfie = {};
                    option = option.dueAt;
                    golfie['due_at'] = option;
                    michal['body'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=113);
 111:
                    return michal;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 170; continue _fun00001 }
 119:
                    tangon = michal.ok;
                    if(tangon) { _fun00002_ip = 131; continue _fun00001 }
 128:
                    return report;
 131:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.savedMessageCreateObjectToClient;
                    zuuluu = michal.body;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return zuuluu;
 170:
                    return michal;
 173:
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
    entity = function() { // Original name: _deleteSavedMessage
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    oscard = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 119; continue _fun00003 }
 10:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.del;
                    michal = {};
                    verify = _closure1_slot5;
                    option = verify.DELETE_SAVED_MESSAGE;
                    golfie = oscard.channelId;
                    oscard = oscard.messageId;
                    oscard = option.bind(verify)(golfie, oscard);
                    michal['url'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=93);
 91:
                    return michal;
 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 116; continue _fun00003 }
 99:
                    tangon = michal.ok;
                    if(tangon) { _fun00004_ip = 111; continue _fun00003 }
 108:
                    return zuuluu;
 111:
                    zuuluu = true;
                    return zuuluu;
 116:
                    return michal;
 119:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _fetchAndUpdateSavedMessages
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 201; continue _fun00005 }
 10:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.getIsStale;
                    michal = michal.bind(zuuluu)();
                    if(michal) { _fun00006_ip = 51; continue _fun00005 }
 30:
                    michal = global;
                    zuuluu = michal.Promise;
                    michal = zuuluu.resolve;
                    michal = michal.bind(zuuluu)();
                    return michal;
 51:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(michal);
                    oscard = michal.HTTP;
                    report = oscard.get;
                    michal = {};
                    golfie = _closure1_slot5;
                    golfie = golfie.GET_SAVED_MESSAGES;
                    michal['url'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=114);
 112:
                    return michal;
 114:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 198; continue _fun00005 }
 120:
                    report = michal.body;
                    golfie = report.results;
                    oscard = golfie.map;
                    report = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            michal = argFoo;
                            entity = {};
                            tangon = michal.message;
                            zuuluu = null;
                            tangon = zuuluu != tangon;
                            if(!tangon) { _fun00008_ip = 60; continue _fun00007 }
 19:
                            oscard = _closure1_slot0;
                            report = _closure1_slot2;
                            tangon = 5;
                            report = report[tangon];
                            tangon = undefined;
                            oscard = oscard.bind(tangon)(report);
                            report = oscard.createMessageRecord;
                            tangon = michal.message;
                            zuuluu = report.bind(oscard)(tangon);
 60:
                            entity['message'] = zuuluu;
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            zuuluu = 4;
                            tangon = tangon[zuuluu];
                            zuuluu = undefined;
                            tangon = report.bind(zuuluu)(tangon);
                            zuuluu = tangon.savedMessageDataToClient;
                            michal = michal.save_data;
                            michal = zuuluu.bind(tangon)(michal);
                            entity['saveData'] = michal;
                            return entity;
                        }
                    };
                    golfie = oscard.bind(golfie)(report);
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 6;
                    tangon = oscard[tangon];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    option = 'SAVED_MESSAGES_UPDATE';
                    tangon['type'] = option;
                    tangon['savedMessages'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 198:
                    return michal;
 201:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot5 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/saved_messages/SavedMessagesActions.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: upsertSavedMessage
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['upsertSavedMessage'] = tangon;
    tangon = function() { // Original name: deleteSavedMessage
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['deleteSavedMessage'] = tangon;
    michal = function() { // Original name: fetchAndUpdateSavedMessages
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchAndUpdateSavedMessages'] = michal;
    return entity;
})();