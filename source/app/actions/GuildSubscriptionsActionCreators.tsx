// app/actions/GuildSubscriptionsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: subscribeChannel
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SUBSCRIPTIONS_CHANNEL';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['channelId'] = report;
        report = argBaz;
        michal['ranges'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot3 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 2;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/GuildSubscriptionsActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: subscribeMembers
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SUBSCRIPTIONS_MEMBERS_ADD';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['userIds'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['subscribeMembers'] = report;
    report = function(argFoo, argBar) { // Original name: unsubscribeMembers
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['userIds'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['unsubscribeMembers'] = report;
    report = function(argFoo) { // Original name: subscribeToMemberUpdates
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['subscribeToMemberUpdates'] = report;
    report = function(argFoo) { // Original name: unsubscribeFromMemberUpdates
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['unsubscribeFromMemberUpdates'] = report;
    report = function(argFoo) { // Original name: subscribeGuild
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SUBSCRIPTIONS';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['subscribeGuild'] = report;
    zuuluu['subscribeChannel'] = tangon;
    michal = function(argFoo) { // Original name: subscribeChannelDimensions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            report = zuuluu.guildId;
            tangon = zuuluu.channelId;
            verify = zuuluu.y;
            michal = zuuluu.height;
            zuuluu = zuuluu.rowHeight;
            var _closure2_slot0 = zuuluu;
            golfie = function(argFoo) { // Original name: toIndex
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = arguments[1];
                    entity = undefined;
                    if(!(michal === entity)) { _fun00004_ip = 11; continue _fun00003 }
 9:
                    michal = 0;
 11:
                    entity = global;
                    tangon = entity.Math;
                    zuuluu = tangon.max;
                    oscard = entity.Math;
                    report = oscard.ceil;
                    option = entity.Math;
                    golfie = option.ceil;
                    verify = _closure2_slot0;
                    entity = argFoo;
                    entity = entity / verify;
                    entity = golfie.bind(option)(entity);
                    entity = report.bind(oscard)(entity);
                    michal = entity + michal;
                    entity = 0;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                }
            };
            option = function(argFoo) { // Original name: pushRange
                oscard = argFoo;
                tangon = _closure1_slot0;
                entity = _closure1_slot2;
                michal = 1;
                zuuluu = entity[michal];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.MINIMUM_RANGE;
                entity = entity - michal;
                entity = oscard + entity;
                report = _closure2_slot1;
                tangon = report.push;
                zuuluu = new Array(2);
                zuuluu[0] = oscard;
                zuuluu[1] = entity;
                zuuluu = tangon.bind(report)(zuuluu);
                entity = entity + michal;
                return entity;
            };
            zuuluu = new Array(0);
            var _closure2_slot1 = zuuluu;
            entity = 0.5;
            oscard = entity * michal;
            entity = undefined;
            oscard = golfie.bind(entity)(oscard);
            offset = -oscard;
            offset = golfie.bind(entity)(verify, offset);
            michal = verify + michal;
            golfie = golfie.bind(entity)(michal, oscard);
            michal = 0;
            backup = offset;
            if(!(backup > michal)) { _fun00002_ip = 126; continue _fun00001 }
 102:
            oscard = global;
            verify = oscard.Math;
            oscard = verify.max;
            michal = option.bind(entity)(michal);
            backup = oscard.bind(verify)(michal, offset);
 126:
            michal = global;
            foxtra = michal.Math;
            romeon = foxtra.floor;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscard = 1;
            verify = yankee[oscard];
            verify = offset.bind(entity)(verify);
            verify = verify.MINIMUM_RANGE;
            verify = backup / verify;
            verify = romeon.bind(foxtra)(verify);
            oscard = yankee[oscard];
            oscard = offset.bind(entity)(oscard);
            oscard = oscard.MINIMUM_RANGE;
            oscard = verify * oscard;
            if(!(oscard <= golfie)) { _fun00002_ip = 210; continue _fun00001 }
 201:
            oscard = option.bind(entity)(oscard);
            if(oscard <= golfie) { _fun00002_ip = 201; continue _fun00001 }
 210:
            michal = _closure1_slot3;
            michal = michal.bind(entity)(report, tangon, zuuluu);
            return entity;
        }
    };
    zuuluu['subscribeChannelDimensions'] = michal;
    return entity;
})();