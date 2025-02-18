// app/modules/friend_suggestions/FriendSuggestionActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function() { // Original name: fetch
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 191; continue _fun00001 }
 10: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 2;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.get;
                    michal = {};
                    golfie = _closure1_slot4;
                    golfie = golfie.FRIEND_SUGGESTIONS;
                    michal['url'] = golfie;
                    golfie = true;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=76);
 74:
                    return michal;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 134; continue _fun00001 }
 82:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'LOAD_FRIEND_SUGGESTIONS_SUCCESS';
                    zuuluu['type'] = oscard;
                    oscard = michal.body;
                    zuuluu['suggestions'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 132: // try_end0
                    _fun00002_ip = 186; continue _fun00001;
 134:
                    return michal;
 137: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'LOAD_FRIEND_SUGGESTIONS_FAILURE';
                    michal['type'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 186:
                    michal = undefined;
                    return michal;
 191:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['fetch'] = golfie;
    tangon = function(argFoo) { // Original name: ignore
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.HTTP;
        zuuluu = tangon.del;
        michal = {};
        golfie = _closure1_slot4;
        oscard = golfie.FRIEND_SUGGESTION;
        report = argFoo;
        report = oscard.bind(golfie)(report);
        michal['url'] = report;
        report = true;
        michal['rejectWithError'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['ignore'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/friend_suggestions/FriendSuggestionActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();