// app/actions/GuildSubscriptionsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: subscribeChannel
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SUBSCRIPTIONS_CHANNEL';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['channelId'] = report;
        report = argBaz;
        mike['ranges'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot3 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, golf);
    entity = 2;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/GuildSubscriptionsActionCreators.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: subscribeMembers
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SUBSCRIPTIONS_MEMBERS_ADD';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['userIds'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['subscribeMembers'] = report;
    report = function(argFoo, argBar) { // Original name: unsubscribeMembers
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['userIds'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['unsubscribeMembers'] = report;
    report = function(argFoo) { // Original name: subscribeToMemberUpdates
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['subscribeToMemberUpdates'] = report;
    report = function(argFoo) { // Original name: unsubscribeFromMemberUpdates
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['unsubscribeFromMemberUpdates'] = report;
    report = function(argFoo) { // Original name: subscribeGuild
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 0;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SUBSCRIPTIONS';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['subscribeGuild'] = report;
    zulu['subscribeChannel'] = tango;
    mike = function(argFoo) { // Original name: subscribeChannelDimensions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            report = zulu.guildId;
            tango = zulu.channelId;
            verify = zulu.y;
            mike = zulu.height;
            zulu = zulu.rowHeight;
            var _closure2_slot0 = zulu;
            golf = function(argFoo) { // Original name: toIndex
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = arguments[1];
                    entity = undefined;
                    if(!(mike === entity)) { _fun00004_ip = 11; continue _fun00003 }
 9:
                    mike = 0;
 11:
                    entity = global;
                    tango = entity.Math;
                    zulu = tango.max;
                    oscar = entity.Math;
                    report = oscar.ceil;
                    options = entity.Math;
                    golf = options.ceil;
                    verify = _closure2_slot0;
                    entity = argFoo;
                    entity = entity / verify;
                    entity = golf.bind(options)(entity);
                    entity = report.bind(oscar)(entity);
                    mike = entity + mike;
                    entity = 0;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                }
            };
            options = function(argFoo) { // Original name: pushRange
                oscar = argFoo;
                tango = _closure1_slot0;
                entity = _closure1_slot2;
                mike = 1;
                zulu = entity[mike];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.MINIMUM_RANGE;
                entity = entity - mike;
                entity = oscar + entity;
                report = _closure2_slot1;
                tango = report.push;
                zulu = new Array(2);
                zulu[0] = oscar;
                zulu[1] = entity;
                zulu = tango.bind(report)(zulu);
                entity = entity + mike;
                return entity;
            };
            zulu = new Array(0);
            var _closure2_slot1 = zulu;
            entity = 0.5;
            oscar = entity * mike;
            entity = undefined;
            oscar = golf.bind(entity)(oscar);
            offset = -oscar;
            offset = golf.bind(entity)(verify, offset);
            mike = verify + mike;
            golf = golf.bind(entity)(mike, oscar);
            mike = 0;
            backup = offset;
            if(!(backup > mike)) { _fun00002_ip = 126; continue _fun00001 }
 102:
            oscar = global;
            verify = oscar.Math;
            oscar = verify.max;
            mike = options.bind(entity)(mike);
            backup = oscar.bind(verify)(mike, offset);
 126:
            mike = global;
            foxtrot = mike.Math;
            romeo = foxtrot.floor;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            oscar = 1;
            verify = yankee[oscar];
            verify = offset.bind(entity)(verify);
            verify = verify.MINIMUM_RANGE;
            verify = backup / verify;
            verify = romeo.bind(foxtrot)(verify);
            oscar = yankee[oscar];
            oscar = offset.bind(entity)(oscar);
            oscar = oscar.MINIMUM_RANGE;
            oscar = verify * oscar;
            if(!(oscar <= golf)) { _fun00002_ip = 210; continue _fun00001 }
 201:
            oscar = options.bind(entity)(oscar);
            if(oscar <= golf) { _fun00002_ip = 201; continue _fun00001 }
 210:
            mike = _closure1_slot3;
            mike = mike.bind(entity)(report, tango, zulu);
            return entity;
        }
    };
    zulu['subscribeChannelDimensions'] = mike;
    return entity;
})();