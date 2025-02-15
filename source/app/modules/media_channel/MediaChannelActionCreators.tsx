// app/modules/media_channel/MediaChannelActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchMediaPostEmbed
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun92142: for(var _fun92142_ip = 0; ; ) switch(_fun92142_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun92142_ip = 254; continue _fun92142 }
 13:
                    oscar = verify;
                    golf = _closure1_slot1;
                    mike = _closure1_slot2;
                    report = 2;
                    tango = mike[report];
                    mike = undefined;
                    options = golf.bind(mike)(tango);
                    golf = options.dispatch;
                    tango = {};
                    offset = 'MEDIA_POST_EMBED_FETCH';
                    tango['type'] = offset;
                    tango['threadId'] = verify;
                    tango = golf.bind(options)(tango);
 68: // try_start_0
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 3;
                    tango = options[tango];
                    tango = golf.bind(mike)(tango);
                    options = tango.HTTP;
                    golf = options.get;
                    tango = {};
                    yankee = _closure1_slot4;
                    offset = yankee.MEDIA_POST_RESHARE_GET_PREVIEW;
                    verify = oscar;
                    verify = offset.bind(yankee)(verify);
                    tango['url'] = verify;
                    verify = true;
                    tango['rejectWithError'] = verify;
                    tango = golf.bind(options)(tango);
                    SaveGenerator(address=137);
 135:
                    return tango;
 137:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun92142_ip = 202; continue _fun92142 }
 143:
                    offset = tango.body;
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[report];
                    verify = options.bind(mike)(golf);
                    options = verify.dispatch;
                    golf = {};
                    yankee = 'MEDIA_POST_EMBED_FETCH_SUCCESS';
                    golf['type'] = yankee;
                    yankee = oscar;
                    golf['threadId'] = yankee;
                    golf['mediaPostEmbed'] = offset;
                    golf = options.bind(verify)(golf);
 200: // try_end0
                    _fun92142_ip = 251; continue _fun92142;
 202:
                    return tango;
 205: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'MEDIA_POST_EMBED_FETCH_FAILURE';
                    zulu['type'] = golf;
                    zulu['threadId'] = oscar;
                    zulu = tango.bind(report)(zulu);
 251:
                    return mike;
 254:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function() { // Original name: _unfurlEmbedUrl
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun92145: for(var _fun92145_ip = 0; ; ) switch(_fun92145_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun92145_ip = 166; continue _fun92145 }
 10:
                    oscar = argFoo;
 13: // try_start_0
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot4;
                    report = report.UNFURL_EMBED_URLS;
                    mike['url'] = report;
                    report = {};
                    report['urls'] = oscar;
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=91);
 89:
                    return mike;
 91:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun92145_ip = 105; continue _fun92145 }
 97:
                    zulu = mike.body;
 102: // try_end0
                    return zulu;
 105:
                    return mike;
 108: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = report.bind(mike)(zulu);
                    mike = mike.APIError;
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    options = zulu;
                    golf = tango;
                    mike = new options[mike](golf, oscar);
                    mike = mike instanceof Object ? mike : zulu;
                    throw mike;
 166:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot6 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_channel/MediaChannelActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: dismissMediaPostSharePrompt
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'DISMISS_MEDIA_POST_SHARE_PROMPT';
        mike['type'] = report;
        report = argFoo;
        mike['threadId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['dismissMediaPostSharePrompt'] = tango;
    tango = function() { // Original name: fetchMediaPostEmbed
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchMediaPostEmbed'] = tango;
    mike = function() { // Original name: unfurlEmbedUrl
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['unfurlEmbedUrl'] = mike;
    return entity;
})();