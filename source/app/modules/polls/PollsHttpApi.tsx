// app/modules/polls/PollsHttpApi.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function() { // Original name: _submitPollVote
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 199; continue _fun00001 }
 13:
                    verify = michal.channelId;
                    golfie = michal.messageId;
                    option = michal.answerIds;
                    oscard = undefined;
                    SaveGenerator(address=35);
 33:
                    return oscard;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 196; continue _fun00001 }
 44: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot1;
                    zuuluu = 2;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.put;
                    zuuluu = {};
                    yankee = _closure1_slot3;
                    offset = yankee.POLL_ANSWERS;
                    golfie = offset.bind(yankee)(verify, golfie);
                    zuuluu['url'] = golfie;
                    golfie = {};
                    golfie['answer_ids'] = option;
                    zuuluu['body'] = golfie;
                    golfie = false;
                    zuuluu['rejectWithError'] = golfie;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=128);
 126:
                    return zuuluu;
 128:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 137; continue _fun00001 }
 134: // try_end0
                    return oscard;
 137:
                    return zuuluu;
 140: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot1;
                    zuuluu = 3;
                    zuuluu = golfie[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.APIError;
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    backup = tangon;
                    foxtra = report;
                    zuuluu = new backup[zuuluu](foxtra, romeon);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 196:
                    return michal;
 199:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot4 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function() { // Original name: _endPollEarly
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 180; continue _fun00003 }
 13:
                    option = michal.channelId;
                    golfie = michal.messageId;
                    oscard = undefined;
                    SaveGenerator(address=29);
 27:
                    return oscard;
 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 177; continue _fun00003 }
 38: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot1;
                    zuuluu = 2;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.post;
                    zuuluu = {};
                    offset = _closure1_slot3;
                    verify = offset.POLL_EXPIRE;
                    golfie = verify.bind(offset)(option, golfie);
                    zuuluu['url'] = golfie;
                    golfie = false;
                    zuuluu['rejectWithError'] = golfie;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=109);
 107:
                    return zuuluu;
 109:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 118; continue _fun00003 }
 115: // try_end0
                    return oscard;
 118:
                    return zuuluu;
 121: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot1;
                    zuuluu = 3;
                    zuuluu = golfie[zuuluu];
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    zuuluu = zuuluu.APIError;
                    tangon = zuuluu.prototype;
                    tangon = Object.create(tangon, {constructor: {value: zuuluu}});
                    foxtra = tangon;
                    romeon = report;
                    zuuluu = new foxtra[zuuluu](romeon, yankee);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 177:
                    return michal;
 180:
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
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/polls/PollsHttpApi.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: submitPollVote
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['submitPollVote'] = tangon;
    michal = function() { // Original name: endPollEarly
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['endPollEarly'] = michal;
    return entity;
})();