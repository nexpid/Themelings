// app/stores/ChannelFollowerStatsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun90926: for(var _fun90926_ip = 0; ; ) switch(_fun90926_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun90926_ip = 51; continue _fun90926 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun90926_ip = 92; continue _fun90926;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun90926_ip = 71; continue _fun90926 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun90927: for(var _fun90927_ip = 0; ; ) switch(_fun90927_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun90927_ip = 76; continue _fun90927;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = report[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = {};
    golf = 'failed';
    mike['FAILED'] = golf;
    golf = 'succeeded';
    mike['SUCCEEDED'] = golf;
    var _closure1_slot5 = mike;
    mike = {};
    var _closure1_slot6 = mike;
    mike = 5;
    mike = report[mike];
    mike = oscar.bind(entity)(mike);
    golf = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: ChannelFollowerStatsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot7;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot4;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot1;
        report = {};
        oscar = 'getFollowerStatsForChannel';
        report['key'] = oscar;
        entity = function(argFoo) { // Original name: value
            mike = _closure1_slot6;
            entity = argFoo;
            entity = mike[entity];
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    golf = mike.bind(entity)(golf);
    mike = 'ChannelFollowerStatsStore';
    golf['displayName'] = mike;
    mike = 6;
    mike = report[mike];
    yankee = oscar.bind(entity)(mike);
    mike = {};
    options = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    mike['CONNECTION_OPEN'] = options;
    options = function(argFoo) { // Original name: handleFollowerStatsFetchSuccess
        _fun90934: for(var _fun90934_ip = 0; ; ) switch(_fun90934_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            tango = entity.stats;
            entity = null;
            if(!(entity == tango)) { _fun90934_ip = 22; continue _fun90934 }
 20:
            tango = {};
 22:
            mike = _closure1_slot6;
            entity = {};
            report = _closure1_slot5;
            report = report.SUCCEEDED;
            entity['loadingStatus'] = report;
            report = global;
            oscar = report.Date;
            report = oscar.now;
            report = report.bind(oscar)();
            entity['lastFetched'] = report;
            report = tango.channels_following;
            entity['channelsFollowing'] = report;
            report = tango.guild_members;
            entity['guildMembers'] = report;
            report = tango.guilds_following;
            entity['guildsFollowing'] = report;
            report = tango.users_seen_ever;
            entity['usersSeenEver'] = report;
            report = tango.subscribers_gained_since_last_post;
            entity['subscribersGainedSinceLastPost'] = report;
            tango = tango.subscribers_lost_since_last_post;
            entity['subscribersLostSinceLastPost'] = tango;
            mike[zulu] = entity;
            entity = undefined;
            return entity;
        }
    };
    mike['CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS'] = options;
    tango = function(argFoo) { // Original name: handleFollowerStatsFetchFailure
        entity = argFoo;
        zulu = entity.channelId;
        mike = _closure1_slot6;
        entity = {'loadingStatus': null, 'lastFetched': null, 'channelsFollowing': 0, 'guildMembers': 0, 'guildsFollowing': 0, 'usersSeenEver': 0, 'subscribersGainedSinceLastPost': 0, 'subscribersLostSinceLastPost': 0};
        tango = _closure1_slot5;
        tango = tango.FAILED;
        entity['loadingStatus'] = tango;
        tango = global;
        report = tango.Date;
        tango = report.now;
        tango = tango.bind(report)();
        entity['lastFetched'] = tango;
        mike[zulu] = entity;
        entity = undefined;
        return entity;
    };
    mike['CHANNEL_FOLLOWER_STATS_FETCH_FAILURE'] = tango;
    tango = golf.prototype;
    tango = Object.create(tango, {constructor: {value: golf}});
    romeo = tango;
    offset = mike;
    mike = new romeo[golf](yankee, offset, verify);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'stores/ChannelFollowerStatsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();