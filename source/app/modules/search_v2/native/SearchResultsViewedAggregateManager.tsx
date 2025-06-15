// app/modules/search_v2/native/SearchResultsViewedAggregateManager.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: toSearchResultViewedData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.index;
            michal = entity.item;
            entity = null;
            if(!(entity != report)) { _fun00002_ip = 383; continue _fun00001 }
 22:
            if(!(entity != michal)) { _fun00002_ip = 383; continue _fun00001 }
 29:
            oscard = michal.type;
            tangon = _closure1_slot7;
            tangon = tangon.DM;
            if(!(tangon !== oscard)) { _fun00002_ip = 344; continue _fun00001 }
 54:
            tangon = _closure1_slot7;
            tangon = tangon.GUILD_CHANNEL_MEMBER;
            if(!(tangon !== oscard)) { _fun00002_ip = 344; continue _fun00001 }
 71:
            tangon = _closure1_slot7;
            tangon = tangon.GROUP_DM;
            if(!(tangon !== oscard)) { _fun00002_ip = 327; continue _fun00001 }
 88:
            tangon = _closure1_slot7;
            tangon = tangon.GUILD_TEXT_CHANNEL;
            if(!(tangon !== oscard)) { _fun00002_ip = 327; continue _fun00001 }
 105:
            tangon = _closure1_slot7;
            tangon = tangon.GUILD_VOICE_CHANNEL;
            if(!(tangon !== oscard)) { _fun00002_ip = 327; continue _fun00001 }
 122:
            tangon = _closure1_slot7;
            tangon = tangon.MESSAGE;
            if(!(tangon !== oscard)) { _fun00002_ip = 310; continue _fun00001 }
 139:
            tangon = _closure1_slot7;
            tangon = tangon.LINK;
            if(!(tangon !== oscard)) { _fun00002_ip = 249; continue _fun00001 }
 153:
            tangon = _closure1_slot7;
            tangon = tangon.FILE;
            if(!(tangon !== oscard)) { _fun00002_ip = 249; continue _fun00001 }
 167:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.MEDIA;
            tangon = null;
            if(!(zuuluu === oscard)) { _fun00002_ip = 359; continue _fun00001 }
 186:
            zuuluu = michal.props;
            zuuluu = zuuluu.media;
            verify = zuuluu.messageId;
            zuuluu = michal.props;
            zuuluu = zuuluu.media;
            option = zuuluu.mediaIndex;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            golfie = zuuluu.concat;
            oscard = '';
            zuuluu = '-';
            tangon = golfie.bind(oscard)(verify, zuuluu, option);
            _fun00002_ip = 359; continue _fun00001;
 249:
            zuuluu = michal.props;
            zuuluu = zuuluu.data;
            verify = zuuluu.messageId;
            zuuluu = michal.props;
            zuuluu = zuuluu.data;
            option = zuuluu.mediaIndex;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            golfie = zuuluu.concat;
            oscard = '';
            zuuluu = '-';
            tangon = golfie.bind(oscard)(verify, zuuluu, option);
            _fun00002_ip = 359; continue _fun00001;
 310:
            zuuluu = michal.props;
            zuuluu = zuuluu.message;
            tangon = zuuluu.id;
            _fun00002_ip = 359; continue _fun00001;
 327:
            zuuluu = michal.props;
            zuuluu = zuuluu.channel;
            tangon = zuuluu.id;
            _fun00002_ip = 359; continue _fun00001;
 344:
            michal = michal.props;
            michal = michal.user;
            tangon = michal.id;
 359:
            zuuluu = entity == tangon;
            michal = null;
            if(zuuluu) { _fun00002_ip = 381; continue _fun00001 }
 368:
            zuuluu = {};
            zuuluu['index'] = report;
            zuuluu['key'] = tangon;
            michal = zuuluu;
 381:
            return michal;
 383:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = golfie[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.SearchListItemTypes;
    var _closure1_slot7 = tangon;
    tangon = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: SearchResultsViewedAnalyticsManagerImpl
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot3;
            tangon = _closure2_slot0;
            entity = undefined;
            tangon = report.bind(entity)(zuuluu, tangon);
            tangon = global;
            report = tangon.Map;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            verify = oscard;
            report = new verify[report](option);
            report = report instanceof Object ? report : oscard;
            zuuluu['pendingViewEvents'] = report;
            tangon = tangon.Map;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            verify = report;
            tangon = new verify[tangon](option);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu['aggregateViewEvents'] = tangon;
            tangon = function(argFoo, argBar, argBaz) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscard = argFoo;
                    zuuluu = _closure1_slot9;
                    entity = undefined;
                    michal = argBaz;
                    verify = zuuluu.bind(entity)(michal);
                    golfie = null;
                    if(!(golfie != verify)) { _fun00004_ip = 119; continue _fun00003 }
 26:
                    report = verify.index;
                    tangon = verify.key;
                    zuuluu = _closure3_slot0;
                    option = argBar;
                    if(option) { _fun00004_ip = 106; continue _fun00003 }
 49:
                    offset = zuuluu.pendingViewEvents;
                    option = offset.get;
                    option = option.bind(offset)(oscard);
                    if(!(golfie == option)) { _fun00004_ip = 73; continue _fun00003 }
 69:
                    option = new Array(0);
 73:
                    golfie = option.push;
                    golfie = golfie.bind(option)(verify);
                    michal = _closure3_slot0;
                    golfie = michal.pendingViewEvents;
                    michal = golfie.set;
                    michal = michal.bind(golfie)(oscard, option);
                    _fun00004_ip = 119; continue _fun00003;
 106:
                    michal = zuuluu.markItemViewed;
                    michal = michal.bind(zuuluu)(oscard, report, tangon);
 119:
                    return entity;
                }
            };
            zuuluu['onItemView'] = tangon;
            tangon = function(argFoo) {
                zuuluu = _closure3_slot0;
                michal = zuuluu.processPendingEvents;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            zuuluu['processPendingViewEvents'] = tangon;
            michal = function() {
                entity = _closure3_slot0;
                michal = entity.pendingViewEvents;
                entity = michal.clear;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            zuuluu['clearPendingViewEvents'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'getOrCreateAnalytics';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = argFoo;
                zuuluu = this;
                michal = zuuluu.aggregateViewEvents;
                entity = michal.get;
                entity = entity.bind(michal)(report);
                michal = null;
                if(!(michal == entity)) { _fun00006_ip = 95; continue _fun00005 }
 28:
                michal = {'farthestSeenIndex': 0, 'uniqueSeenItems': null, 'totalResultsViewed': 0};
                tangon = global;
                tangon = tangon.Set;
                oscard = tangon.prototype;
                oscard = Object.create(oscard, {constructor: {value: tangon}});
                verify = oscard;
                tangon = new verify[tangon](option);
                tangon = tangon instanceof Object ? tangon : oscard;
                michal['uniqueSeenItems'] = tangon;
                tangon = zuuluu.aggregateViewEvents;
                zuuluu = tangon.set;
                zuuluu = zuuluu.bind(tangon)(report, michal);
                return michal;
 95:
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'markItemViewed';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            zuuluu = this;
            michal = zuuluu.getOrCreateAnalytics;
            entity = argFoo;
            michal = michal.bind(zuuluu)(entity);
            entity = michal.totalResultsViewed;
            entity = entity + 1;
            michal['totalResultsViewed'] = entity;
            tangon = michal.uniqueSeenItems;
            zuuluu = tangon.add;
            entity = argBaz;
            entity = zuuluu.bind(tangon)(entity);
            entity = global;
            report = entity.Math;
            tangon = report.max;
            zuuluu = michal.farthestSeenIndex;
            entity = argBar;
            entity = tangon.bind(report)(zuuluu, entity);
            michal['farthestSeenIndex'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'processPendingEvents';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                entity = this;
                var _closure3_slot0 = entity;
                var _closure3_slot1 = zuuluu;
                report = entity.pendingViewEvents;
                tangon = report.get;
                report = tangon.bind(report)(zuuluu);
                tangon = null;
                tangon = tangon != report;
                if(!tangon) { _fun00008_ip = 52; continue _fun00007 }
 41:
                golfie = report.length;
                oscard = 0;
                tangon = oscard !== golfie;
 52:
                if(!tangon) { _fun00008_ip = 88; continue _fun00007 }
 55:
                tangon = report.forEach;
                michal = function(argFoo) {
                    entity = argFoo;
                    report = entity.index;
                    tangon = entity.key;
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.markItemViewed;
                    entity = _closure3_slot1;
                    entity = michal.bind(zuuluu)(entity, report, tangon);
                    return entity;
                };
                michal = tangon.bind(report)(michal);
                michal = entity.pendingViewEvents;
                entity = michal.delete;
                entity = entity.bind(michal)(zuuluu);
 88:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'flushAnalytics';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = argFoo;
            var _closure3_slot0 = zuuluu;
            tangon = entity.aggregateViewEvents;
            zuuluu = tangon.forEach;
            michal = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    oscard = michal.farthestSeenIndex;
                    entity = michal.uniqueSeenItems;
                    tangon = michal.totalResultsViewed;
                    report = entity.size;
                    entity = 0;
                    if(!(report > entity)) { _fun00010_ip = 105; continue _fun00009 }
 32:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.trackSearchResultsViewedAggregate;
                    entity = {};
                    golfie = _closure3_slot0;
                    entity['searchContext'] = golfie;
                    golfie = argBar;
                    entity['searchTab'] = golfie;
                    entity['farthestIndexSeen'] = oscard;
                    entity['totalResultsViewedUnique'] = report;
                    entity['totalResultsViewed'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 105:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = entity.aggregateViewEvents;
            michal = zuuluu.clear;
            michal = michal.bind(zuuluu)();
            michal = entity.pendingViewEvents;
            entity = michal.clear;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    report = tangon.prototype;
    report = Object.create(report, {constructor: {value: tangon}});
    foxtra = report;
    tangon = new foxtra[tangon](romeon);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot8 = tangon;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/search_v2/native/SearchResultsViewedAggregateManager.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: useSearchResultsViewedAnalytics
        michal = argFoo;
        oscard = michal.searchContext;
        var _closure2_slot0 = oscard;
        zuuluu = michal.tab;
        var _closure2_slot1 = zuuluu;
        verify = michal.isFocused;
        var _closure2_slot2 = verify;
        option = michal.isInitialSearchQuery;
        var _closure2_slot3 = option;
        report = _closure1_slot1;
        golfie = _closure1_slot2;
        michal = 6;
        michal = golfie[michal];
        golfie = undefined;
        report = report.bind(golfie)(michal);
        michal = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                entity = _closure2_slot3;
                if(entity) { _fun00012_ip = 32; continue _fun00011 }
 13:
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    report = _closure1_slot8;
                    tangon = report.onItemView;
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot2;
                    entity = argFoo;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
 32:
                entity = undefined;
                return entity;
            }
        };
        michal = report.bind(golfie)(michal);
        report = _closure1_slot5;
        golfie = report.useEffect;
        tangon = new Array(3);
        tangon[0] = verify;
        tangon[1] = option;
        tangon[2] = zuuluu;
        zuuluu = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = _closure2_slot2;
                if(!michal) { _fun00014_ip = 17; continue _fun00013 }
 10:
                zuuluu = _closure2_slot3;
                michal = !zuuluu;
 17:
                if(!michal) { _fun00014_ip = 42; continue _fun00013 }
 20:
                zuuluu = _closure1_slot8;
                michal = zuuluu.processPendingViewEvents;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
 42:
                entity = undefined;
                return entity;
            }
        };
        zuuluu = golfie.bind(report)(zuuluu, tangon);
        tangon = report.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        entity = function() {
            report = _closure1_slot6;
            tangon = report.subscribeState;
            zuuluu = _closure2_slot0;
            michal = function(argFoo) {
                michal = argFoo;
                entity = michal.getSearchResultsQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = function(argFoo, argBar) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00016_ip = 19; continue _fun00015 }
 12:
                    michal = argBar;
                    entity = michal !== zuuluu;
 19:
                    if(!entity) { _fun00016_ip = 39; continue _fun00015 }
 22:
                    michal = _closure1_slot8;
                    entity = michal.clearPendingViewEvents;
                    entity = entity.bind(michal)();
 39:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        };
        entity = tangon.bind(report)(entity, zuuluu);
        entity = {};
        entity['onViewableItemsChanged'] = michal;
        return entity;
    };
    zuuluu['useSearchResultsViewedAnalytics'] = michal;
    return entity;
})();