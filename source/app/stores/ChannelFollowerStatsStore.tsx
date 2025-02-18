// app/stores/ChannelFollowerStatsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = report[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = {};
    golfie = 'failed';
    michal['FAILED'] = golfie;
    golfie = 'succeeded';
    michal['SUCCEEDED'] = golfie;
    var _closure1_slot5 = michal;
    michal = {};
    var _closure1_slot6 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: ChannelFollowerStatsStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot7;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot4;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot1;
        report = {};
        oscard = 'getFollowerStatsForChannel';
        report['key'] = oscard;
        entity = function(argFoo) { // Original name: value
            michal = _closure1_slot6;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'ChannelFollowerStatsStore';
    golfie['displayName'] = michal;
    michal = 6;
    michal = report[michal];
    yankee = oscard.bind(entity)(michal);
    michal = {};
    option = function() { // Original name: handleConnectionOpen
        entity = {};
        _closure1_slot6 = entity;
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_OPEN'] = option;
    option = function(argFoo) { // Original name: handleFollowerStatsFetchSuccess
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            tangon = entity.stats;
            entity = null;
            if(!(entity == tangon)) { _fun00006_ip = 22; continue _fun00005 }
 20:
            tangon = {};
 22:
            michal = _closure1_slot6;
            entity = {};
            report = _closure1_slot5;
            report = report.SUCCEEDED;
            entity['loadingStatus'] = report;
            report = global;
            oscard = report.Date;
            report = oscard.now;
            report = report.bind(oscard)();
            entity['lastFetched'] = report;
            report = tangon.channels_following;
            entity['channelsFollowing'] = report;
            report = tangon.guild_members;
            entity['guildMembers'] = report;
            report = tangon.guilds_following;
            entity['guildsFollowing'] = report;
            report = tangon.users_seen_ever;
            entity['usersSeenEver'] = report;
            report = tangon.subscribers_gained_since_last_post;
            entity['subscribersGainedSinceLastPost'] = report;
            tangon = tangon.subscribers_lost_since_last_post;
            entity['subscribersLostSinceLastPost'] = tangon;
            michal[zuuluu] = entity;
            entity = undefined;
            return entity;
        }
    };
    michal['CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS'] = option;
    tangon = function(argFoo) { // Original name: handleFollowerStatsFetchFailure
        entity = argFoo;
        zuuluu = entity.channelId;
        michal = _closure1_slot6;
        entity = {'loadingStatus': null, 'lastFetched': null, 'channelsFollowing': 0, 'guildMembers': 0, 'guildsFollowing': 0, 'usersSeenEver': 0, 'subscribersGainedSinceLastPost': 0, 'subscribersLostSinceLastPost': 0};
        tangon = _closure1_slot5;
        tangon = tangon.FAILED;
        entity['loadingStatus'] = tangon;
        tangon = global;
        report = tangon.Date;
        tangon = report.now;
        tangon = tangon.bind(report)();
        entity['lastFetched'] = tangon;
        michal[zuuluu] = entity;
        entity = undefined;
        return entity;
    };
    michal['CHANNEL_FOLLOWER_STATS_FETCH_FAILURE'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    romeon = tangon;
    offset = michal;
    michal = new romeon[golfie](yankee, offset, verify);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 7;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/ChannelFollowerStatsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();