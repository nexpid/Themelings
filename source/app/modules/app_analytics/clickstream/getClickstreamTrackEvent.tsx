// app/modules/app_analytics/clickstream/getClickstreamTrackEvent.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot2 = golf;
    tango = tango.ChannelTypes;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StaticChannelRoute;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_analytics/clickstream/getClickstreamTrackEvent.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: getClickstreamTrackEvent
        _fun68718: for(var _fun68718_ip = 0; ; ) switch(_fun68718_ip) {
 0:
            oscar = argFoo;
            entity = argBar;
            mike = _closure1_slot2;
            mike = mike.CHANNEL_OPENED_CLICKSTREAM;
            if(!(mike !== oscar)) { _fun68718_ip = 274; continue _fun68718 }
 26:
            mike = _closure1_slot2;
            mike = mike.GUILD_VIEWED_CLICKSTREAM;
            if(!(mike !== oscar)) { _fun68718_ip = 209; continue _fun68718 }
 43:
            mike = _closure1_slot2;
            mike = mike.FRIENDS_LIST_VIEWED_CLICKSTREAM;
            if(!(mike !== oscar)) { _fun68718_ip = 109; continue _fun68718 }
 57:
            mike = global;
            report = mike.Error;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = 'getClickstreamTrackEvent: Unknown event: ';
            golf = zulu.bind(mike)(oscar);
            zulu = report.prototype;
            zulu = Object.create(zulu, {constructor: {value: report}});
            options = zulu;
            mike = new options[report](golf, oscar);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 109:
            mike = {};
            zulu = global;
            zulu = zulu.Date;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            options = report;
            zulu = new options[zulu](golf);
            zulu = zulu instanceof Object ? zulu : report;
            mike['timestamp'] = zulu;
            report = _closure1_slot1;
            zulu = report.getState;
            zulu = zulu.bind(report)();
            mike['rtc_state'] = zulu;
            zulu = entity.tab_opened;
            mike['tab_opened'] = zulu;
            zulu = entity.num_friends;
            mike['num_friends'] = zulu;
            zulu = entity.now_playing_visible;
            mike['now_playing_visible'] = zulu;
            zulu = entity.now_playing_num_cards;
            mike['now_playing_num_cards'] = zulu;
            return mike;
 209:
            zulu = entity.guildId;
            mike = {};
            report = global;
            report = report.Date;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            options = oscar;
            report = new options[report](golf);
            report = report instanceof Object ? report : oscar;
            mike['timestamp'] = report;
            oscar = _closure1_slot1;
            report = oscar.getState;
            report = report.bind(oscar)();
            mike['rtc_state'] = report;
            mike['guildId'] = zulu;
            return mike;
 274:
            zulu = entity.channelId;
            entity = _closure1_slot4;
            entity = entity.CHANNEL_BROWSER;
            if(!(entity !== zulu)) { _fun68718_ip = 538; continue _fun68718 }
 296:
            entity = _closure1_slot4;
            entity = entity.GUILD_HOME;
            if(!(entity !== zulu)) { _fun68718_ip = 538; continue _fun68718 }
 313:
            entity = _closure1_slot4;
            entity = entity.GUILD_SHOP;
            if(!(entity !== zulu)) { _fun68718_ip = 538; continue _fun68718 }
 330:
            entity = _closure1_slot4;
            entity = entity.MEMBER_APPLICATIONS;
            if(!(entity !== zulu)) { _fun68718_ip = 538; continue _fun68718 }
 347:
            entity = _closure1_slot4;
            entity = entity.ROLE_SUBSCRIPTIONS;
            if(!(entity !== zulu)) { _fun68718_ip = 538; continue _fun68718 }
 364:
            entity = _closure1_slot4;
            entity = entity.CUSTOMIZE_COMMUNITY;
            if(!(entity !== zulu)) { _fun68718_ip = 538; continue _fun68718 }
 381:
            entity = _closure1_slot4;
            entity = entity.MEMBER_SAFETY;
            if(!(entity !== zulu)) { _fun68718_ip = 538; continue _fun68718 }
 398:
            entity = _closure1_slot4;
            entity = entity.GUILD_ONBOARDING;
            if(!(entity !== zulu)) { _fun68718_ip = 538; continue _fun68718 }
 415:
            entity = _closure1_slot4;
            entity = entity.GUILD_BOOSTS;
            if(!(entity !== zulu)) { _fun68718_ip = 538; continue _fun68718 }
 429:
            mike = _closure1_slot0;
            entity = mike.getChannel;
            report = entity.bind(mike)(zulu);
            entity = null;
            oscar = entity == report;
            mike = undefined;
            if(oscar) { _fun68718_ip = 459; continue _fun68718 }
 454:
            mike = report.type;
 459:
            if(!(entity == mike)) { _fun68718_ip = 473; continue _fun68718 }
 463:
            entity = _closure1_slot3;
            mike = entity.UNKNOWN;
 473:
            entity = {};
            report = global;
            report = report.Date;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            options = oscar;
            report = new options[report](golf);
            report = report instanceof Object ? report : oscar;
            entity['timestamp'] = report;
            report = _closure1_slot1;
            tango = report.getState;
            tango = tango.bind(report)();
            entity['rtc_state'] = tango;
            entity['channelId'] = zulu;
            entity['channelType'] = mike;
            return entity;
 538:
            entity = undefined;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();