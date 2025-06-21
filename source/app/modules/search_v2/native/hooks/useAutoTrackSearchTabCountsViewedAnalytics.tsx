// app/modules/search_v2/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchTabs;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useAutoTrackSearchTabCountsViewedAnalytics
        michal = argFoo;
        report = michal.searchContext;
        var _closure2_slot0 = report;
        michal = michal.visibleTabCounts;
        var _closure2_slot1 = michal;
        tangon = _closure1_slot2;
        oscard = tangon.useRef;
        zuuluu = false;
        zuuluu = oscard.bind(tangon)(zuuluu);
        var _closure2_slot2 = zuuluu;
        oscard = tangon.useEffect;
        zuuluu = new Array(2);
        zuuluu[0] = report;
        zuuluu[1] = michal;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot1;
                entity = null;
                entity = entity == michal;
                if(entity) { _fun00002_ip = 25; continue _fun00001 }
 16:
                michal = _closure2_slot2;
                entity = michal.current;
 25:
                if(entity) { _fun00002_ip = 218; continue _fun00001 }
 31:
                michal = _closure2_slot2;
                entity = true;
                michal['current'] = entity;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.trackSearchResultCountsViewed;
                entity = {};
                oscard = _closure2_slot0;
                entity['searchContext'] = oscard;
                report = _closure2_slot1;
                tangon = _closure1_slot4;
                oscard = tangon.FILES;
                oscard = report[oscard];
                entity['totalFilesResults'] = oscard;
                oscard = tangon.GUILD_CHANNELS;
                oscard = report[oscard];
                entity['totalGuildChannelsResults'] = oscard;
                oscard = tangon.LINKS;
                oscard = report[oscard];
                entity['totalLinksResults'] = oscard;
                oscard = tangon.MEDIA;
                oscard = report[oscard];
                entity['totalMediaResults'] = oscard;
                oscard = tangon.MEMBERS;
                oscard = report[oscard];
                entity['totalMembersResults'] = oscard;
                oscard = tangon.MESSAGES;
                oscard = report[oscard];
                entity['totalMessageResults'] = oscard;
                oscard = tangon.PEOPLE;
                oscard = report[oscard];
                entity['totalPeopleResults'] = oscard;
                tangon = tangon.PINS;
                tangon = report[tangon];
                entity['totalPinsResults'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 218:
                entity = undefined;
                return entity;
            }
        };
        michal = oscard.bind(tangon)(michal, zuuluu);
        zuuluu = tangon.useEffect;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            report = _closure1_slot3;
            tangon = report.subscribeState;
            zuuluu = _closure2_slot0;
            michal = function(argFoo) {
                michal = argFoo;
                entity = michal.getSearchResultsQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00004_ip = 19; continue _fun00003 }
 12:
                    michal = argBar;
                    entity = michal !== zuuluu;
 19:
                    if(!entity) { _fun00004_ip = 37; continue _fun00003 }
 22:
                    michal = _closure2_slot2;
                    entity = false;
                    michal['current'] = entity;
 37:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = undefined;
        return entity;
    };
    zuuluu['useAutoTrackSearchTabCountsViewedAnalytics'] = michal;
    return entity;
})();