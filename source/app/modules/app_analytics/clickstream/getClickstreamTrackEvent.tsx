// app/modules/app_analytics/clickstream/getClickstreamTrackEvent.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot2 = golfie;
    tangon = tangon.ChannelTypes;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StaticChannelRoute;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_analytics/clickstream/getClickstreamTrackEvent.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: getClickstreamTrackEvent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = argBar;
            michal = _closure1_slot2;
            michal = michal.CHANNEL_OPENED_CLICKSTREAM;
            if(!(michal !== oscard)) { _fun00002_ip = 274; continue _fun00001 }
 26:
            michal = _closure1_slot2;
            michal = michal.GUILD_VIEWED_CLICKSTREAM;
            if(!(michal !== oscard)) { _fun00002_ip = 209; continue _fun00001 }
 43:
            michal = _closure1_slot2;
            michal = michal.FRIENDS_LIST_VIEWED_CLICKSTREAM;
            if(!(michal !== oscard)) { _fun00002_ip = 109; continue _fun00001 }
 57:
            michal = global;
            report = michal.Error;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = 'getClickstreamTrackEvent: Unknown event: ';
            golfie = zuuluu.bind(michal)(oscard);
            zuuluu = report.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: report}});
            option = zuuluu;
            michal = new option[report](golfie, oscard);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 109:
            michal = {};
            zuuluu = global;
            zuuluu = zuuluu.Date;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            option = report;
            zuuluu = new option[zuuluu](golfie);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            michal['timestamp'] = zuuluu;
            report = _closure1_slot1;
            zuuluu = report.getState;
            zuuluu = zuuluu.bind(report)();
            michal['rtc_state'] = zuuluu;
            zuuluu = entity.tab_opened;
            michal['tab_opened'] = zuuluu;
            zuuluu = entity.num_friends;
            michal['num_friends'] = zuuluu;
            zuuluu = entity.now_playing_visible;
            michal['now_playing_visible'] = zuuluu;
            zuuluu = entity.now_playing_num_cards;
            michal['now_playing_num_cards'] = zuuluu;
            return michal;
 209:
            zuuluu = entity.guildId;
            michal = {};
            report = global;
            report = report.Date;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            option = oscard;
            report = new option[report](golfie);
            report = report instanceof Object ? report : oscard;
            michal['timestamp'] = report;
            oscard = _closure1_slot1;
            report = oscard.getState;
            report = report.bind(oscard)();
            michal['rtc_state'] = report;
            michal['guildId'] = zuuluu;
            return michal;
 274:
            zuuluu = entity.channelId;
            entity = _closure1_slot4;
            entity = entity.CHANNEL_BROWSER;
            if(!(entity !== zuuluu)) { _fun00002_ip = 538; continue _fun00001 }
 296:
            entity = _closure1_slot4;
            entity = entity.GUILD_HOME;
            if(!(entity !== zuuluu)) { _fun00002_ip = 538; continue _fun00001 }
 313:
            entity = _closure1_slot4;
            entity = entity.GUILD_SHOP;
            if(!(entity !== zuuluu)) { _fun00002_ip = 538; continue _fun00001 }
 330:
            entity = _closure1_slot4;
            entity = entity.MEMBER_APPLICATIONS;
            if(!(entity !== zuuluu)) { _fun00002_ip = 538; continue _fun00001 }
 347:
            entity = _closure1_slot4;
            entity = entity.ROLE_SUBSCRIPTIONS;
            if(!(entity !== zuuluu)) { _fun00002_ip = 538; continue _fun00001 }
 364:
            entity = _closure1_slot4;
            entity = entity.CUSTOMIZE_COMMUNITY;
            if(!(entity !== zuuluu)) { _fun00002_ip = 538; continue _fun00001 }
 381:
            entity = _closure1_slot4;
            entity = entity.MEMBER_SAFETY;
            if(!(entity !== zuuluu)) { _fun00002_ip = 538; continue _fun00001 }
 398:
            entity = _closure1_slot4;
            entity = entity.GUILD_ONBOARDING;
            if(!(entity !== zuuluu)) { _fun00002_ip = 538; continue _fun00001 }
 415:
            entity = _closure1_slot4;
            entity = entity.GUILD_BOOSTS;
            if(!(entity !== zuuluu)) { _fun00002_ip = 538; continue _fun00001 }
 429:
            michal = _closure1_slot0;
            entity = michal.getChannel;
            report = entity.bind(michal)(zuuluu);
            entity = null;
            oscard = entity == report;
            michal = undefined;
            if(oscard) { _fun00002_ip = 459; continue _fun00001 }
 454:
            michal = report.type;
 459:
            if(!(entity == michal)) { _fun00002_ip = 473; continue _fun00001 }
 463:
            entity = _closure1_slot3;
            michal = entity.UNKNOWN;
 473:
            entity = {};
            report = global;
            report = report.Date;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            option = oscard;
            report = new option[report](golfie);
            report = report instanceof Object ? report : oscard;
            entity['timestamp'] = report;
            report = _closure1_slot1;
            tangon = report.getState;
            tangon = tangon.bind(report)();
            entity['rtc_state'] = tangon;
            entity['channelId'] = zuuluu;
            entity['channelType'] = michal;
            return entity;
 538:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();