// app/actions/ChannelFollowerActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot4 = mike;
    mike = {};
    golf = function(argFoo, argBar) { // Original name: createChannelFollower
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        oscar = _closure1_slot4;
        report = oscar.CHANNEL_FOLLOWERS;
        tango = argBar;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = {};
        report = argFoo;
        tango['webhook_channel_id'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['createChannelFollower'] = golf;
    golf = function(argFoo) { // Original name: fetchChannelFollowerStats
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun89160: for(var _fun89160_ip = 0; ; ) switch(_fun89160_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun89160_ip = 268; continue _fun89160 }
 10:
                    oscar = _closure1_slot1;
                    mike = _closure1_slot2;
                    report = 3;
                    tango = mike[report];
                    mike = undefined;
                    golf = oscar.bind(mike)(tango);
                    oscar = golf.dispatch;
                    tango = {};
                    options = 'CHANNEL_FOLLOWER_STATS_FETCH_START';
                    tango['type'] = options;
                    tango = oscar.bind(golf)(tango);
 57: // try_start_0
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 2;
                    tango = golf[tango];
                    tango = oscar.bind(mike)(tango);
                    golf = tango.HTTP;
                    oscar = golf.get;
                    tango = {};
                    yankee = _closure1_slot4;
                    options = yankee.CHANNEL_FOLLOWER_STATS;
                    offset = _closure2_slot0;
                    options = options.bind(yankee)(offset);
                    tango['url'] = options;
                    options = {};
                    options['channel_id'] = offset;
                    tango['body'] = options;
                    options = true;
                    tango['oldFormErrors'] = options;
                    tango['rejectWithError'] = options;
                    tango = oscar.bind(golf)(tango);
                    SaveGenerator(address=145);
 143:
                    return tango;
 145:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun89160_ip = 210; continue _fun89160 }
 151:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[report];
                    options = golf.bind(mike)(oscar);
                    golf = options.dispatch;
                    oscar = {};
                    offset = 'CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS';
                    oscar['type'] = offset;
                    offset = tango.body;
                    oscar['stats'] = offset;
                    verify = _closure2_slot0;
                    oscar['channelId'] = verify;
                    oscar = golf.bind(options)(oscar);
 208: // try_end0
                    _fun89160_ip = 265; continue _fun89160;
 210:
                    return tango;
 213: // catch_target0
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[report];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'CHANNEL_FOLLOWER_STATS_FETCH_FAILURE';
                    zulu['type'] = oscar;
                    oscar = _closure2_slot0;
                    zulu['channelId'] = oscar;
                    zulu = tango.bind(report)(zulu);
 265:
                    return mike;
 268:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['fetchChannelFollowerStats'] = golf;
    golf = function(argFoo) { // Original name: dismissPublishBump
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED';
        mike['type'] = report;
        report = argFoo;
        mike['messageId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['dismissPublishBump'] = golf;
    tango = function(argFoo) { // Original name: permanentlyHidePublishBump
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CHANNEL_FOLLOWING_PUBLISH_BUMP_HIDE_PERMANENTLY';
        mike['type'] = report;
        report = argFoo;
        mike['channelId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['permanentlyHidePublishBump'] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/ChannelFollowerActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();