// app/utils/AnalyticsFeedItemSeenActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/AnalyticsFeedItemSeenActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz) { // Original name: markAnalyticsFeedItemSeen
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'ANALYTICS_FEED_ITEM_SEEN';
        michal['type'] = report;
        report = argFoo;
        michal['id'] = report;
        report = argBar;
        michal['feedItemId'] = report;
        report = argBaz;
        michal['timestampMillis'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['markAnalyticsFeedItemSeen'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: markAnalyticsFeedItemUnseen
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'ANALYTICS_FEED_ITEM_UNSEEN';
        michal['type'] = report;
        report = argFoo;
        michal['id'] = report;
        report = argBar;
        michal['feedItemId'] = report;
        report = argBaz;
        michal['timestampMillis'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['markAnalyticsFeedItemUnseen'] = tangon;
    michal = function(argFoo, argBar) { // Original name: flushAnalyticsFeedItems
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'ANALYTICS_FEED_FLUSH';
        michal['type'] = report;
        report = argFoo;
        michal['id'] = report;
        report = argBar;
        michal['force'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['flushAnalyticsFeedItems'] = michal;
    return entity;
})();