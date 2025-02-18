// app/modules/global_discovery_servers/native/components/search/GlobalDiscoveryServersSearchResults.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: GlobalDiscoveryServersSearchPage
        entity = argFoo;
        yankee = entity.categoryId;
        var _closure2_slot0 = yankee;
        foxtra = entity.loadId;
        var _closure2_slot1 = foxtra;
        oscard = entity.contentContainerStyle;
        report = _closure1_slot7;
        tangon = report.useField;
        zuuluu = 'fetchedQuery';
        option = tangon.bind(report)(zuuluu);
        var _closure2_slot2 = option;
        report = _closure1_slot7;
        tangon = report.useField;
        zuuluu = 'languageCode';
        zuuluu = tangon.bind(report)(zuuluu);
        var _closure2_slot3 = zuuluu;
        golfie = _closure1_slot3;
        report = golfie.useMemo;
        tangon = new Array(3);
        tangon[0] = option;
        tangon[1] = yankee;
        tangon[2] = zuuluu;
        zuuluu = function() {
            entity = {};
            zuuluu = _closure2_slot2;
            entity['query'] = zuuluu;
            zuuluu = _closure2_slot0;
            entity['categoryId'] = zuuluu;
            michal = _closure2_slot3;
            entity['languageCode'] = michal;
            return entity;
        };
        romeon = report.bind(golfie)(zuuluu, tangon);
        var _closure2_slot4 = romeon;
        report = _closure1_slot0;
        offset = _closure1_slot2;
        zuuluu = 9;
        golfie = offset[zuuluu];
        tangon = undefined;
        backup = report.bind(tangon)(golfie);
        verify = backup.useStateFromStores;
        golfie = _closure1_slot6;
        option = new Array(1);
        option[0] = golfie;
        golfie = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot6;
                michal = zuuluu.getIsInitialFetchComplete;
                entity = _closure2_slot4;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00002_ip = 37; continue _fun00001 }
 34:
                entity = michal;
 37:
                return entity;
            }
        };
        verify = verify.bind(backup)(option, golfie);
        golfie = offset[zuuluu];
        kiloes = report.bind(tangon)(golfie);
        backup = kiloes.useStateFromStores;
        golfie = _closure1_slot6;
        option = new Array(1);
        option[0] = golfie;
        golfie = function() {
            zuuluu = _closure1_slot6;
            michal = zuuluu.getErrorMessage;
            entity = _closure2_slot4;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        golfie = backup.bind(kiloes)(option, golfie);
        zuuluu = offset[zuuluu];
        kiloes = report.bind(tangon)(zuuluu);
        backup = kiloes.useStateFromStores;
        zuuluu = _closure1_slot6;
        option = new Array(1);
        option[0] = zuuluu;
        zuuluu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot6;
                zuuluu = tangon.getGuildIds;
                entity = _closure2_slot4;
                entity = zuuluu.bind(tangon)(entity);
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00004_ip = 35; continue _fun00003 }
 31:
                entity = _closure1_slot8;
 35:
                return entity;
            }
        };
        backup = backup.bind(kiloes)(option, zuuluu);
        var _closure2_slot5 = backup;
        zuuluu = 10;
        zuuluu = offset[zuuluu];
        option = report.bind(tangon)(zuuluu);
        report = option.useGuildCardPressHandler;
        zuuluu = {};
        zuuluu['loadId'] = foxtra;
        zuuluu['categoryId'] = yankee;
        yankee = {};
        kiloes = _closure1_slot9;
        kiloes = kiloes.GLOBAL_DISCOVERY;
        yankee['page'] = kiloes;
        kiloes = _closure1_slot10;
        kiloes = kiloes.DISCOVER_SEARCH;
        yankee['section'] = kiloes;
        kiloes = _closure1_slot11;
        kiloes = kiloes.CARD;
        yankee['object'] = kiloes;
        zuuluu['analyticsLocation'] = yankee;
        zuuluu = report.bind(option)(zuuluu);
        var _closure2_slot6 = zuuluu;
        yankee = _closure1_slot3;
        option = yankee.useMemo;
        report = new Array(2);
        report[0] = backup;
        report[1] = zuuluu;
        zuuluu = function() {
            entity = new Array(0);
            var _closure3_slot0 = entity;
            tangon = _closure2_slot5;
            zuuluu = tangon.forEach;
            michal = function(argFoo, argBar) {
                report = argFoo;
                var _closure4_slot0 = report;
                entity = argBar;
                var _closure4_slot1 = entity;
                zuuluu = _closure3_slot0;
                michal = zuuluu.push;
                entity = {};
                option = _closure1_slot0;
                golfie = _closure1_slot2;
                oscard = 11;
                golfie = golfie[oscard];
                oscard = undefined;
                oscard = option.bind(oscard)(golfie);
                oscard = oscard.GlobalDiscoveryServerListItemTypes;
                oscard = oscard.CARD;
                entity['type'] = oscard;
                entity['guildId'] = report;
                tangon = function() { // Original name: onPress
                    tangon = _closure2_slot6;
                    zuuluu = _closure4_slot0;
                    michal = _closure4_slot1;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                };
                entity['onPress'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        option = option.bind(yankee)(zuuluu, report);
        yankee = _closure1_slot3;
        report = yankee.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = foxtra;
        zuuluu[1] = romeon;
        michal = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot6;
                michal = zuuluu.getIsFetching;
                entity = _closure2_slot4;
                entity = michal.bind(zuuluu)(entity);
                if(entity) { _fun00006_ip = 176; continue _fun00005 }
 31:
                zuuluu = _closure1_slot6;
                michal = zuuluu.getOffset;
                entity = _closure2_slot4;
                report = michal.bind(zuuluu)(entity);
                entity = null;
                if(!(entity != report)) { _fun00006_ip = 176; continue _fun00005 }
 56:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.loadMoreCategoryResults;
                entity = {};
                oscard = _closure2_slot1;
                entity['loadId'] = oscard;
                entity['offset'] = report;
                golfie = _closure1_slot7;
                oscard = golfie.getField;
                report = 'fetchedQuery';
                report = oscard.bind(golfie)(report);
                entity['query'] = report;
                golfie = _closure1_slot7;
                oscard = golfie.getField;
                report = 'categoryId';
                report = oscard.bind(golfie)(report);
                entity['categoryId'] = report;
                oscard = _closure1_slot7;
                report = oscard.getField;
                tangon = 'languageCode';
                tangon = report.bind(oscard)(tangon);
                entity['languageCode'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 176:
                entity = undefined;
                return entity;
            }
        };
        report = report.bind(yankee)(michal, zuuluu);
        zuuluu = _closure1_slot12;
        michal = _closure1_slot1;
        entity = 11;
        entity = offset[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        verify = !verify;
        entity['loading'] = verify;
        entity['items'] = option;
        entity['errorMessage'] = golfie;
        entity['contentContainerStyle'] = oscard;
        oscard = 0.5;
        entity['onEndReachedThreshold'] = oscard;
        entity['onEndReached'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    offset = 1;
    tangon = oscard[offset];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EMPTY_GUILD_IDS;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticsPages;
    var _closure1_slot9 = golfie;
    golfie = tangon.AnalyticsSections;
    var _closure1_slot10 = golfie;
    tangon = tangon.AnalyticsObjects;
    var _closure1_slot11 = tangon;
    tangon = 7;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot12 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsxs;
    var _closure1_slot13 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Fragment;
    var _closure1_slot14 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flex': 0, 'minHeight': 32};
    tangon['controls'] = verify;
    verify = {};
    verify['flex'] = offset;
    tangon['page'] = verify;
    verify = {};
    verify['flex'] = offset;
    tangon['pages'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/global_discovery_servers/native/components/search/GlobalDiscoveryServersSearchResults.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GlobalDiscoveryServersSearchResults
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            yankee = michal.loadId;
            var _closure2_slot0 = yankee;
            romeon = michal.contentContainerStyle;
            var _closure2_slot1 = romeon;
            michal = _closure1_slot15;
            report = undefined;
            offset = michal.bind(report)();
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 9;
            tangon = zuuluu[tangon];
            verify = michal.bind(report)(tangon);
            option = verify.useStateFromStores;
            tangon = _closure1_slot5;
            golfie = new Array(1);
            golfie[0] = tangon;
            tangon = function() {
                michal = _closure1_slot5;
                entity = michal.getVisibleTabs;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = option.bind(verify)(golfie, tangon);
            var _closure2_slot2 = tangon;
            foxtra = _closure1_slot3;
            verify = foxtra.useMemo;
            option = new Array(1);
            option[0] = tangon;
            golfie = function() {
                zuuluu = _closure2_slot2;
                michal = zuuluu.map;
                entity = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        michal = entity[Symbol.iterator];
                        entity = michal().next;
                        tangon = entity().value;
                        zuuluu = michal;
                        entity = undefined;
                        zuuluu = zuuluu === entity;
                        if(zuuluu) { _fun00010_ip = 25; continue _fun00009 }
 22:
                        entity = tangon;
 25:
                        if(zuuluu) { _fun00010_ip = 31; continue _fun00009 }
 28:
                        michal.return();
 31:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = verify.bind(foxtra)(golfie, option);
            golfie = 13;
            golfie = zuuluu[golfie];
            verify = michal.bind(report)(golfie);
            option = verify.useServersSearchCategoryNamesById;
            golfie = {};
            golfie['categoryIds'] = foxtra;
            foxtra = option.bind(verify)(golfie);
            var _closure2_slot3 = foxtra;
            verify = _closure1_slot3;
            option = verify.useMemo;
            golfie = new Array(4);
            golfie[0] = foxtra;
            golfie[1] = romeon;
            golfie[2] = yankee;
            golfie[3] = tangon;
            tangon = function() {
                entity = new Array(0);
                var _closure3_slot0 = entity;
                tangon = _closure2_slot2;
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        tangon = argFoo;
                        michal = tangon[Symbol.iterator];
                        tangon = michal().next;
                        report = tangon().value;
                        zuuluu = michal;
                        entity = undefined;
                        zuuluu = zuuluu === entity;
                        verify = undefined;
                        if(zuuluu) { _fun00012_ip = 27; continue _fun00011 }
 24:
                        verify = report;
 27:
                        report = undefined;
                        if(zuuluu) { _fun00012_ip = 57; continue _fun00011 }
 32:
                        oscard = tangon().value;
                        tangon = michal;
                        tangon = tangon === entity;
                        report = undefined;
                        zuuluu = tangon;
                        if(tangon) { _fun00012_ip = 57; continue _fun00011 }
 51:
                        report = oscard;
                        zuuluu = tangon;
 57:
                        if(zuuluu) { _fun00012_ip = 63; continue _fun00011 }
 60:
                        michal.return();
 63:
                        michal = 0;
                        if(!(michal !== report)) { _fun00012_ip = 186; continue _fun00011 }
 69:
                        michal = _closure2_slot3;
                        oscard = michal[verify];
                        michal = null;
                        if(!(michal != oscard)) { _fun00012_ip = 186; continue _fun00011 }
 86:
                        tangon = _closure3_slot0;
                        zuuluu = tangon.push;
                        michal = {};
                        michal['label'] = oscard;
                        michal['count'] = report;
                        report = global;
                        report = report.HermesInternal;
                        oscard = report.concat;
                        report = '';
                        report = oscard.bind(report)(verify);
                        michal['id'] = report;
                        golfie = _closure1_slot12;
                        oscard = _closure1_slot16;
                        report = {};
                        report['categoryId'] = verify;
                        verify = _closure2_slot0;
                        report['loadId'] = verify;
                        option = _closure2_slot1;
                        report['contentContainerStyle'] = option;
                        report = golfie.bind(entity)(oscard, report);
                        michal['page'] = report;
                        michal = zuuluu.bind(tangon)(michal);
 186:
                        return entity;
                    }
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            golfie = option.bind(verify)(tangon, golfie);
            verify = _closure1_slot3;
            option = verify.useCallback;
            tangon = new Array(1);
            tangon[0] = yankee;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = argFoo;
                    entity = null;
                    if(!(entity != michal)) { _fun00014_ip = 149; continue _fun00013 }
 12:
                    entity = global;
                    entity = entity.Number;
                    zuuluu = undefined;
                    report = entity.bind(zuuluu)(michal);
                    oscard = _closure1_slot7;
                    michal = oscard.setState;
                    entity = {};
                    entity['categoryId'] = report;
                    entity = michal.bind(oscard)(entity);
                    michal = _closure1_slot1;
                    oscard = _closure1_slot2;
                    entity = 12;
                    entity = oscard[entity];
                    zuuluu = michal.bind(zuuluu)(entity);
                    michal = zuuluu.loadCategoryResults;
                    entity = {};
                    oscard = _closure2_slot0;
                    entity['loadId'] = oscard;
                    entity['categoryId'] = report;
                    golfie = _closure1_slot7;
                    oscard = golfie.getField;
                    report = 'fetchedQuery';
                    report = oscard.bind(golfie)(report);
                    entity['query'] = report;
                    oscard = _closure1_slot7;
                    report = oscard.getField;
                    tangon = 'languageCode';
                    tangon = report.bind(oscard)(tangon);
                    entity['languageCode'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 149:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = option.bind(verify)(entity, tangon);
            entity = 14;
            entity = zuuluu[entity];
            zuuluu = michal.bind(report)(entity);
            michal = zuuluu.useSearchSegmentedControlState;
            entity = {};
            entity['items'] = golfie;
            entity['onSetActiveIndex'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            foxtra = entity.segmentedControlState;
            entity = foxtra.items;
            michal = entity.length;
            entity = 0;
            if(!(entity !== michal)) { _fun00008_ip = 489; continue _fun00007 }
 289:
            zuuluu = _closure1_slot13;
            michal = _closure1_slot14;
            entity = {};
            verify = _closure1_slot4;
            tangon = {};
            golfie = offset.controls;
            tangon['style'] = golfie;
            romeon = _closure1_slot12;
            yankee = _closure1_slot1;
            backup = _closure1_slot2;
            golfie = 17;
            golfie = backup[golfie];
            option = yankee.bind(report)(golfie);
            golfie = {};
            golfie['state'] = foxtra;
            option = romeon.bind(report)(option, golfie);
            golfie = new Array(2);
            golfie[0] = option;
            romeon = _closure1_slot12;
            option = 18;
            option = backup[option];
            yankee = yankee.bind(report)(option);
            option = {};
            option['state'] = foxtra;
            option = romeon.bind(report)(yankee, option);
            golfie[1] = option;
            tangon['children'] = golfie;
            golfie = zuuluu.bind(report)(verify, tangon);
            tangon = new Array(2);
            tangon[0] = golfie;
            option = _closure1_slot12;
            golfie = {};
            offset = offset.pages;
            golfie['style'] = offset;
            romeon = _closure1_slot12;
            yankee = _closure1_slot0;
            offset = 19;
            offset = backup[offset];
            offset = yankee.bind(report)(offset);
            yankee = offset.SegmentedControlPages;
            offset = {};
            offset['state'] = foxtra;
            offset = romeon.bind(report)(yankee, offset);
            golfie['children'] = offset;
            golfie = option.bind(report)(verify, golfie);
            tangon[1] = golfie;
            entity['children'] = tangon;
            entity = zuuluu.bind(report)(michal, entity);
            _fun00008_ip = 576; continue _fun00007;
 489:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot1;
            offset = _closure1_slot2;
            michal = 15;
            michal = offset[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            verify = _closure1_slot0;
            oscard = 16;
            golfie = offset[oscard];
            golfie = verify.bind(report)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(report)(oscard);
            oscard = oscard.t;
            oscard = oscard.V6nAfH;
            oscard = golfie.bind(option)(oscard);
            michal['text'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 576:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();