// app/modules/media_channel/MediaChannelActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _fetchMediaPostEmbed
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 254; continue _fun00001 }
 13:
                    oscard = verify;
                    golfie = _closure1_slot1;
                    michal = _closure1_slot2;
                    report = 2;
                    tangon = michal[report];
                    michal = undefined;
                    option = golfie.bind(michal)(tangon);
                    golfie = option.dispatch;
                    tangon = {};
                    offset = 'MEDIA_POST_EMBED_FETCH';
                    tangon['type'] = offset;
                    tangon['threadId'] = verify;
                    tangon = golfie.bind(option)(tangon);
 68: // try_start_0
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 3;
                    tangon = option[tangon];
                    tangon = golfie.bind(michal)(tangon);
                    option = tangon.HTTP;
                    golfie = option.get;
                    tangon = {};
                    yankee = _closure1_slot4;
                    offset = yankee.MEDIA_POST_RESHARE_GET_PREVIEW;
                    verify = oscard;
                    verify = offset.bind(yankee)(verify);
                    tangon['url'] = verify;
                    verify = true;
                    tangon['rejectWithError'] = verify;
                    tangon = golfie.bind(option)(tangon);
                    SaveGenerator(address=137);
 135:
                    return tangon;
 137:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 202; continue _fun00001 }
 143:
                    offset = tangon.body;
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[report];
                    verify = option.bind(michal)(golfie);
                    option = verify.dispatch;
                    golfie = {};
                    yankee = 'MEDIA_POST_EMBED_FETCH_SUCCESS';
                    golfie['type'] = yankee;
                    yankee = oscard;
                    golfie['threadId'] = yankee;
                    golfie['mediaPostEmbed'] = offset;
                    golfie = option.bind(verify)(golfie);
 200: // try_end0
                    _fun00002_ip = 251; continue _fun00001;
 202:
                    return tangon;
 205: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'MEDIA_POST_EMBED_FETCH_FAILURE';
                    zuuluu['type'] = golfie;
                    zuuluu['threadId'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 251:
                    return michal;
 254:
                    return entity;
                }
            };
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
    entity = function() { // Original name: _unfurlEmbedUrl
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 166; continue _fun00003 }
 10:
                    oscard = argFoo;
 13: // try_start_0
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot4;
                    report = report.UNFURL_EMBED_URLS;
                    michal['url'] = report;
                    report = {};
                    report['urls'] = oscard;
                    michal['body'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=91);
 89:
                    return michal;
 91:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 105; continue _fun00003 }
 97:
                    zuuluu = michal.body;
 102: // try_end0
                    return zuuluu;
 105:
                    return michal;
 108: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = report.bind(michal)(zuuluu);
                    michal = michal.APIError;
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    option = zuuluu;
                    golfie = tangon;
                    michal = new option[michal](golfie, oscard);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 166:
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_channel/MediaChannelActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: dismissMediaPostSharePrompt
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'DISMISS_MEDIA_POST_SHARE_PROMPT';
        michal['type'] = report;
        report = argFoo;
        michal['threadId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['dismissMediaPostSharePrompt'] = tangon;
    tangon = function() { // Original name: fetchMediaPostEmbed
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchMediaPostEmbed'] = tangon;
    michal = function() { // Original name: unfurlEmbedUrl
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['unfurlEmbedUrl'] = michal;
    return entity;
})();