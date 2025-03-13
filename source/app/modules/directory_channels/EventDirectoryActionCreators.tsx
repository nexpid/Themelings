// app/modules/directory_channels/EventDirectoryActionCreators.tsx
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
    tangon = tangon.DirectoryEntryTypes;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    golfie = golfie.bind(entity)(tangon);
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 264; continue _fun00001 }
 10:
                    oscard = argFoo;
 13: // try_start_0
                    tangon = _closure1_slot1;
                    option = _closure1_slot2;
                    golfie = 4;
                    michal = option[golfie];
                    report = undefined;
                    verify = tangon.bind(report)(michal);
                    tangon = verify.dispatch;
                    michal = {};
                    offset = 'EVENT_DIRECTORY_FETCH_START';
                    michal['type'] = offset;
                    michal = tangon.bind(verify)(michal);
                    tangon = _closure1_slot0;
                    michal = 5;
                    michal = option[michal];
                    michal = tangon.bind(report)(michal);
                    option = michal.HTTP;
                    tangon = option.get;
                    michal = {};
                    yankee = _closure1_slot5;
                    offset = yankee.DIRECTORY_CHANNEL_ENTRIES;
                    verify = oscard;
                    verify = offset.bind(yankee)(verify);
                    michal['url'] = verify;
                    verify = {};
                    offset = _closure1_slot4;
                    offset = offset.GUILD_SCHEDULED_EVENT;
                    verify['type'] = offset;
                    michal['query'] = verify;
                    verify = true;
                    michal['rejectWithError'] = verify;
                    michal = tangon.bind(option)(michal);
                    SaveGenerator(address=146);
 144:
                    return michal;
 146:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 207; continue _fun00001 }
 152:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'EVENT_DIRECTORY_FETCH_SUCCESS';
                    zuuluu['type'] = golfie;
                    zuuluu['channelId'] = oscard;
                    oscard = michal.body;
                    zuuluu['entries'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 205: // try_end0
                    _fun00002_ip = 259; continue _fun00001;
 207:
                    return michal;
 210: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'EVENT_DIRECTORY_FETCH_FAILURE';
                    michal['type'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 259:
                    michal = undefined;
                    return michal;
 264:
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    tangon = michal.bind(entity)();
    michal = 200;
    michal = golfie.bind(entity)(tangon, michal);
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/directory_channels/EventDirectoryActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['fetchDirectoryEntries'] = michal;
    return entity;
})();