// app/modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_analytics/track/friends_list_viewed/trackFriendListViewed.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: trackFriendsListViewed
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.tab_opened;
            yankee = entity.source;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 1;
            michal = report[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            golfie = michal.bind(entity)();
            michal = 2;
            michal = report[michal];
            offset = tangon.bind(entity)(michal);
            option = offset.track;
            michal = _closure1_slot3;
            oscard = michal.FRIENDS_LIST_VIEWED;
            tangon = {};
            tangon['tab_opened'] = verify;
            tangon['source'] = yankee;
            backup = tangon;
            foxtra = golfie;
            yankee = copyDataProperties(backup, foxtra);
            tangon = option.bind(offset)(oscard, tangon);
            tangon = _closure1_slot0;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.trackClickstream;
            zuuluu = michal.FRIENDS_LIST_VIEWED_CLICKSTREAM;
            michal = {};
            option = null;
            offset = option != verify;
            oscard = 'tabless';
            if(!offset) { _fun00002_ip = 145; continue _fun00001 }
 142:
            oscard = verify;
 145:
            michal['tab_opened'] = oscard;
            offset = golfie.num_friends;
            yankee = option != offset;
            verify = 0;
            if(!yankee) { _fun00002_ip = 168; continue _fun00001 }
 165:
            verify = offset;
 168:
            michal['num_friends'] = verify;
            offset = golfie.now_playing_visible;
            verify = option != offset;
            if(!verify) { _fun00002_ip = 189; continue _fun00001 }
 186:
            verify = offset;
 189:
            michal['now_playing_visible'] = verify;
            golfie = golfie.now_playing_num_cards;
            option = option != golfie;
            oscard = 0;
            if(!option) { _fun00002_ip = 212; continue _fun00001 }
 209:
            oscard = golfie;
 212:
            michal['now_playing_num_cards'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();