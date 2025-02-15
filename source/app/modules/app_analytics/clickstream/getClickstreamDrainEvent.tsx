// app/modules/app_analytics/clickstream/getClickstreamDrainEvent.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_analytics/clickstream/getClickstreamDrainEvent.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: getClicksteamDrainEvent
        _fun68728: for(var _fun68728_ip = 0; ; ) switch(_fun68728_ip) {
 0:
            oscar = argFoo;
            tango = argBar;
            entity = global;
            zulu = entity.Date;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            options = report;
            zulu = new options[zulu](golf);
            zulu = zulu instanceof Object ? zulu : report;
            var _closure2_slot0 = zulu;
            report = _closure1_slot0;
            report = report.CHANNEL_OPENED_CLICKSTREAM;
            if(!(report !== oscar)) { _fun68728_ip = 347; continue _fun68728 }
 60:
            report = _closure1_slot0;
            report = report.GUILD_VIEWED_CLICKSTREAM;
            if(!(report !== oscar)) { _fun68728_ip = 277; continue _fun68728 }
 77:
            zulu = _closure1_slot0;
            zulu = zulu.FRIENDS_LIST_VIEWED_CLICKSTREAM;
            if(!(zulu !== oscar)) { _fun68728_ip = 141; continue _fun68728 }
 91:
            report = entity.Error;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            entity = 'getClicksteamDrainEvent: Unknown event: ';
            golf = zulu.bind(entity)(oscar);
            zulu = report.prototype;
            zulu = Object.create(zulu, {constructor: {value: report}});
            options = zulu;
            entity = new options[report](golf, oscar);
            entity = entity instanceof Object ? entity : zulu;
            throw entity;
 141:
            entity = {};
            report = tango.map;
            zulu = function(argFoo) {
                mike = _closure2_slot0;
                entity = mike.getTime;
                mike = entity.bind(mike)();
                entity = argFoo;
                zulu = entity.timestamp;
                entity = zulu.getTime;
                entity = entity.bind(zulu)();
                entity = mike - entity;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['time_minus'] = zulu;
            report = tango.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.rtc_state;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['rtc_states'] = zulu;
            report = tango.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.tab_opened;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['tab_opened'] = zulu;
            report = tango.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.num_friends;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['num_friends'] = zulu;
            report = tango.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.now_playing_visible;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['now_playing_visible'] = zulu;
            report = tango.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.now_playing_num_cards;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['now_playing_num_cards'] = zulu;
            return entity;
 277:
            entity = {};
            report = tango.map;
            zulu = function(argFoo) {
                mike = _closure2_slot0;
                entity = mike.getTime;
                mike = entity.bind(mike)();
                entity = argFoo;
                zulu = entity.timestamp;
                entity = zulu.getTime;
                entity = entity.bind(zulu)();
                entity = mike - entity;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['time_minus'] = zulu;
            report = tango.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.guildId;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['guild_ids'] = zulu;
            report = tango.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.rtc_state;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['rtc_states'] = zulu;
            return entity;
 347:
            entity = {};
            report = tango.map;
            zulu = function(argFoo) {
                mike = _closure2_slot0;
                entity = mike.getTime;
                mike = entity.bind(mike)();
                entity = argFoo;
                zulu = entity.timestamp;
                entity = zulu.getTime;
                entity = entity.bind(zulu)();
                entity = mike - entity;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['time_minus'] = zulu;
            report = tango.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.channelId;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['channel_ids'] = zulu;
            report = tango.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.channelType;
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['channel_types'] = zulu;
            zulu = tango.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.rtc_state;
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            entity['rtc_states'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();