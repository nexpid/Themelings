// app/actions/ChannelFollowerActionCreators.tsx
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
    golfie = function(argFoo, argBar) { // Original name: createChannelFollower
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        oscard = _closure1_slot4;
        report = oscard.CHANNEL_FOLLOWERS;
        tangon = argBar;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        tangon = {};
        report = argFoo;
        tangon['webhook_channel_id'] = report;
        entity['body'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['createChannelFollower'] = golfie;
    golfie = function(argFoo) { // Original name: fetchChannelFollowerStats
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 268; continue _fun00001 }
 10:
                    oscard = _closure1_slot1;
                    michal = _closure1_slot2;
                    report = 3;
                    tangon = michal[report];
                    michal = undefined;
                    golfie = oscard.bind(michal)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    option = 'CHANNEL_FOLLOWER_STATS_FETCH_START';
                    tangon['type'] = option;
                    tangon = oscard.bind(golfie)(tangon);
 57: // try_start_0
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 2;
                    tangon = golfie[tangon];
                    tangon = oscard.bind(michal)(tangon);
                    golfie = tangon.HTTP;
                    oscard = golfie.get;
                    tangon = {};
                    yankee = _closure1_slot4;
                    option = yankee.CHANNEL_FOLLOWER_STATS;
                    offset = _closure2_slot0;
                    option = option.bind(yankee)(offset);
                    tangon['url'] = option;
                    option = {};
                    option['channel_id'] = offset;
                    tangon['body'] = option;
                    option = true;
                    tangon['oldFormErrors'] = option;
                    tangon['rejectWithError'] = option;
                    tangon = oscard.bind(golfie)(tangon);
                    SaveGenerator(address=145);
 143:
                    return tangon;
 145:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 210; continue _fun00001 }
 151:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[report];
                    option = golfie.bind(michal)(oscard);
                    golfie = option.dispatch;
                    oscard = {};
                    offset = 'CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS';
                    oscard['type'] = offset;
                    offset = tangon.body;
                    oscard['stats'] = offset;
                    verify = _closure2_slot0;
                    oscard['channelId'] = verify;
                    oscard = golfie.bind(option)(oscard);
 208: // try_end0
                    _fun00002_ip = 265; continue _fun00001;
 210:
                    return tangon;
 213: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[report];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'CHANNEL_FOLLOWER_STATS_FETCH_FAILURE';
                    zuuluu['type'] = oscard;
                    oscard = _closure2_slot0;
                    zuuluu['channelId'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 265:
                    return michal;
 268:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['fetchChannelFollowerStats'] = golfie;
    golfie = function(argFoo) { // Original name: dismissPublishBump
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED';
        michal['type'] = report;
        report = argFoo;
        michal['messageId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['dismissPublishBump'] = golfie;
    tangon = function(argFoo) { // Original name: permanentlyHidePublishBump
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY';
        michal['type'] = report;
        report = argFoo;
        michal['channelId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['permanentlyHidePublishBump'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/ChannelFollowerActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();