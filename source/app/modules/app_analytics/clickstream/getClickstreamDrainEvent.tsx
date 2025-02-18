// app/modules/app_analytics/clickstream/getClickstreamDrainEvent.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_analytics/clickstream/getClickstreamDrainEvent.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: getClicksteamDrainEvent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            tangon = argBar;
            entity = global;
            zuuluu = entity.Date;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            option = report;
            zuuluu = new option[zuuluu](golfie);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            var _closure2_slot0 = zuuluu;
            report = _closure1_slot0;
            report = report.CHANNEL_OPENED_CLICKSTREAM;
            if(!(report !== oscard)) { _fun00002_ip = 329; continue _fun00001 }
 60:
            report = _closure1_slot0;
            report = report.GUILD_VIEWED_CLICKSTREAM;
            if(!(report !== oscard)) { _fun00002_ip = 265; continue _fun00001 }
 77:
            zuuluu = _closure1_slot0;
            zuuluu = zuuluu.FRIENDS_LIST_VIEWED_CLICKSTREAM;
            if(!(zuuluu !== oscard)) { _fun00002_ip = 141; continue _fun00001 }
 91:
            report = entity.Error;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            entity = 'getClicksteamDrainEvent: Unknown event: ';
            golfie = zuuluu.bind(entity)(oscard);
            zuuluu = report.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: report}});
            option = zuuluu;
            entity = new option[report](golfie, oscard);
            entity = entity instanceof Object ? entity : zuuluu;
            throw entity;
 141:
            entity = {};
            report = tangon.map;
            zuuluu = function(argFoo) {
                michal = _closure2_slot0;
                entity = michal.getTime;
                michal = entity.bind(michal)();
                entity = argFoo;
                zuuluu = entity.timestamp;
                entity = zuuluu.getTime;
                entity = entity.bind(zuuluu)();
                entity = michal - entity;
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            entity['time_minus'] = zuuluu;
            report = tangon.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.rtc_state;
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            entity['rtc_states'] = zuuluu;
            report = tangon.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.tab_opened;
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            entity['tab_opened'] = zuuluu;
            report = tangon.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.num_friends;
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            entity['num_friends'] = zuuluu;
            report = tangon.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.now_playing_visible;
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            entity['now_playing_visible'] = zuuluu;
            report = tangon.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.now_playing_num_cards;
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            entity['now_playing_num_cards'] = zuuluu;
            return entity;
 265:
            entity = {};
            report = tangon.map;
            zuuluu = function(argFoo) {
                michal = _closure2_slot0;
                entity = michal.getTime;
                michal = entity.bind(michal)();
                entity = argFoo;
                zuuluu = entity.timestamp;
                entity = zuuluu.getTime;
                entity = entity.bind(zuuluu)();
                entity = michal - entity;
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            entity['time_minus'] = zuuluu;
            report = tangon.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.guildId;
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            entity['guild_ids'] = zuuluu;
            report = tangon.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.rtc_state;
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            entity['rtc_states'] = zuuluu;
            return entity;
 329:
            entity = {};
            report = tangon.map;
            zuuluu = function(argFoo) {
                michal = _closure2_slot0;
                entity = michal.getTime;
                michal = entity.bind(michal)();
                entity = argFoo;
                zuuluu = entity.timestamp;
                entity = zuuluu.getTime;
                entity = entity.bind(zuuluu)();
                entity = michal - entity;
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            entity['time_minus'] = zuuluu;
            report = tangon.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.channelId;
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            entity['channel_ids'] = zuuluu;
            report = tangon.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.channelType;
                return entity;
            };
            zuuluu = report.bind(tangon)(zuuluu);
            entity['channel_types'] = zuuluu;
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.rtc_state;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            entity['rtc_states'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();