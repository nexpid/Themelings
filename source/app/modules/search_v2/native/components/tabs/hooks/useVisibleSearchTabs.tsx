// app/modules/search_v2/native/components/tabs/hooks/useVisibleSearchTabs.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getSearchTabsKey
        zuuluu = argFoo;
        michal = zuuluu.join;
        entity = '-';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    golfie = option.bind(entity)(tangon);
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.subscribeSearchTabsLayout;
    var _closure1_slot6 = option;
    tangon = tangon.useSearchResultsQuery;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.SearchTabs;
    var _closure1_slot8 = option;
    option = tangon.SEARCH_TYPE_TO_SEARCH_INITIAL_TABS;
    var _closure1_slot9 = option;
    tangon = tangon.SEARCH_TYPE_TO_SEARCH_RESULT_TABS;
    var _closure1_slot10 = tangon;
    tangon = function(argFoo) { // Original name: SearchTabsLayoutManager
        michal = argFoo;
        zuuluu = this;
        var _closure2_slot0 = zuuluu;
        golfie = _closure1_slot4;
        oscard = _closure1_slot13;
        entity = undefined;
        oscard = golfie.bind(entity)(zuuluu, oscard);
        oscard = null;
        zuuluu['visibleTabCounts'] = oscard;
        oscard = false;
        zuuluu['isInitialSearchQuery'] = oscard;
        oscard = function() {
            entity = _closure2_slot0;
            entity = entity.candidateTabs;
            return entity;
        };
        zuuluu['getCandidateTabs'] = oscard;
        oscard = function() {
            entity = _closure2_slot0;
            entity = entity.visibleTabs;
            return entity;
        };
        zuuluu['getVisibleTabs'] = oscard;
        oscard = function() {
            entity = _closure2_slot0;
            entity = entity.visibleTabCounts;
            return entity;
        };
        zuuluu['getVisibleTabCounts'] = oscard;
        oscard = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.isInitialSearchQuery;
                entity = entity.tagsManager;
                var _closure3_slot0 = entity;
                if(zuuluu) { _fun00002_ip = 55; continue _fun00001 }
 27:
                tangon = _closure1_slot10;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.searchContext;
                zuuluu = zuuluu.type;
                tangon = tangon[zuuluu];
                _fun00002_ip = 81; continue _fun00001;
 55:
                report = _closure1_slot9;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.searchContext;
                zuuluu = zuuluu.type;
                tangon = report[zuuluu];
 81:
                zuuluu = tangon.filter;
                michal = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = argFoo;
                        michal = _closure1_slot8;
                        michal = michal.MEMBERS;
                        if(!(michal !== zuuluu)) { _fun00004_ip = 140; continue _fun00003 }
 20:
                        michal = _closure1_slot8;
                        michal = michal.RECENT;
                        if(!(michal !== zuuluu)) { _fun00004_ip = 121; continue _fun00003 }
 34:
                        michal = _closure1_slot8;
                        michal = michal.GUILD_CHANNELS;
                        if(!(michal !== zuuluu)) { _fun00004_ip = 121; continue _fun00003 }
 48:
                        michal = _closure1_slot8;
                        michal = michal.PEOPLE;
                        if(!(michal !== zuuluu)) { _fun00004_ip = 121; continue _fun00003 }
 62:
                        michal = _closure1_slot8;
                        michal = michal.THREADS;
                        if(!(michal !== zuuluu)) { _fun00004_ip = 80; continue _fun00003 }
 76:
                        michal = true;
                        return michal;
 80:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 6;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.isChannelDetailsHeaderExperimentV2Enabled;
                        entity = 'getSearchInitialTabs';
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
 121:
                        michal = _closure3_slot0;
                        entity = michal.isEmpty;
                        entity = entity.bind(michal)();
                        return entity;
 140:
                        michal = _closure3_slot0;
                        entity = michal.hasUserAddedTags;
                        entity = entity.bind(michal)();
                        entity = !entity;
                        return entity;
                    }
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                oscard = _closure1_slot12;
                report = undefined;
                tangon = oscard.bind(report)(zuuluu);
                entity = _closure2_slot0;
                entity = entity.candidateTabs;
                entity = oscard.bind(report)(entity);
                entity = tangon !== entity;
                if(!entity) { _fun00002_ip = 146; continue _fun00001 }
 134:
                michal = _closure2_slot0;
                michal['candidateTabs'] = zuuluu;
                entity = true;
 146:
                return entity;
            }
        };
        zuuluu['computeCandidateTabs'] = oscard;
        oscard = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                report = entity.nextTabs;
                zuuluu = entity.nextTabCounts;
                golfie = _closure1_slot12;
                tangon = undefined;
                oscard = golfie.bind(tangon)(report);
                entity = _closure2_slot0;
                entity = entity.visibleTabs;
                tangon = golfie.bind(tangon)(entity);
                entity = false;
                if(!(oscard !== tangon)) { _fun00006_ip = 65; continue _fun00005 }
 53:
                tangon = _closure2_slot0;
                tangon['visibleTabs'] = report;
                entity = true;
 65:
                tangon = _closure2_slot0;
                tangon = tangon.visibleTabCounts;
                if(!(zuuluu !== tangon)) { _fun00006_ip = 91; continue _fun00005 }
 79:
                michal = _closure2_slot0;
                michal['visibleTabCounts'] = zuuluu;
                entity = true;
 91:
                return entity;
            }
        };
        zuuluu['updateVisibleTabs'] = oscard;
        report = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                oscard = entity.isInitialSearchQuery;
                zuuluu = entity.isPendingSearchResults;
                michal = entity.peopleTabCount;
                golfie = entity.memberTabCount;
                report = entity.channelTabCount;
                entity = entity.messageTabCounts;
                option = undefined;
                var _closure3_slot0 = option;
                var _closure3_slot1 = option;
                if(oscard) { _fun00008_ip = 294; continue _fun00007 }
 57:
                if(zuuluu) { _fun00008_ip = 219; continue _fun00007 }
 63:
                oscard = {};
                yankee = oscard;
                offset = entity;
                entity = copyDataProperties(yankee, offset);
                entity = _closure1_slot8;
                zuuluu = entity.MEMBERS;
                oscard[zuuluu] = golfie;
                zuuluu = entity.GUILD_CHANNELS;
                oscard[zuuluu] = report;
                entity = entity.PEOPLE;
                oscard[entity] = michal;
                _closure3_slot1 = oscard;
                entity = _closure2_slot0;
                report = entity.candidateTabs;
                zuuluu = report.every;
                entity = function(argFoo) {
                    michal = _closure3_slot1;
                    entity = argFoo;
                    michal = michal[entity];
                    entity = null;
                    entity = entity != michal;
                    return entity;
                };
                entity = zuuluu.bind(report)(entity);
                zuuluu = !entity;
                entity = !zuuluu;
                if(zuuluu) { _fun00008_ip = 217; continue _fun00007 }
 159:
                report = _closure2_slot0;
                michal = false;
                report['isInitialSearchQuery'] = michal;
                zuuluu = report.updateVisibleTabs;
                michal = {};
                verify = report.candidateTabs;
                option = verify.filter;
                golfie = function(argFoo) {
                    michal = _closure3_slot1;
                    entity = argFoo;
                    michal = michal[entity];
                    entity = 0;
                    entity = entity !== michal;
                    return entity;
                };
                golfie = option.bind(verify)(golfie);
                michal['nextTabs'] = golfie;
                michal['nextTabCounts'] = oscard;
                entity = zuuluu.bind(report)(michal);
 217:
                return entity;
 219:
                zuuluu = _closure2_slot0;
                entity = zuuluu.isInitialSearchQuery;
                _closure3_slot0 = entity;
                entity = false;
                zuuluu['isInitialSearchQuery'] = entity;
                michal = zuuluu.updateVisibleTabs;
                entity = {};
                oscard = zuuluu.candidateTabs;
                report = oscard.filter;
                tangon = function(argFoo) {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = _closure3_slot0;
                        if(entity) { _fun00010_ip = 36; continue _fun00009 }
 10:
                        michal = _closure2_slot0;
                        tangon = michal.visibleTabs;
                        zuuluu = tangon.includes;
                        michal = argFoo;
                        entity = zuuluu.bind(tangon)(michal);
 36:
                        return entity;
                    }
                };
                tangon = report.bind(oscard)(tangon);
                entity['nextTabs'] = tangon;
                tangon = null;
                entity['nextTabCounts'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
 294:
                zuuluu = _closure2_slot0;
                entity = true;
                zuuluu['isInitialSearchQuery'] = entity;
                michal = zuuluu.updateVisibleTabs;
                entity = {};
                tangon = zuuluu.candidateTabs;
                entity['nextTabs'] = tangon;
                tangon = null;
                entity['nextTabCounts'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        zuuluu['computeVisibleTabs'] = report;
        zuuluu['searchContext'] = michal;
        tangon = _closure1_slot9;
        report = michal.type;
        report = tangon[report];
        zuuluu['candidateTabs'] = report;
        michal = michal.type;
        michal = tangon[michal];
        zuuluu['visibleTabs'] = michal;
        return entity;
    };
    var _closure1_slot13 = tangon;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/tabs/hooks/useVisibleSearchTabs.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useVisibleSearchTabs
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        oscard = _closure1_slot5;
        report = oscard.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = golfie;
        michal = function() {
            zuuluu = _closure1_slot11;
            tangon = _closure2_slot0;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        yankee = report.bind(oscard)(michal, zuuluu);
        var _closure2_slot1 = yankee;
        zuuluu = oscard.useState;
        michal = yankee.getCandidateTabs;
        michal = michal.bind(yankee)();
        michal = zuuluu.bind(oscard)(michal);
        romeon = _closure1_slot3;
        foxtra = undefined;
        offset = 2;
        zuuluu = romeon.bind(foxtra)(michal, offset);
        michal = 0;
        report = zuuluu[michal];
        var _closure2_slot2 = report;
        verify = 1;
        zuuluu = zuuluu[verify];
        var _closure2_slot3 = zuuluu;
        option = oscard.useState;
        zuuluu = yankee.getVisibleTabs;
        zuuluu = zuuluu.bind(yankee)();
        zuuluu = option.bind(oscard)(zuuluu);
        option = romeon.bind(foxtra)(zuuluu, offset);
        zuuluu = option[michal];
        option = option[verify];
        var _closure2_slot4 = option;
        backup = oscard.useState;
        option = null;
        option = backup.bind(oscard)(option);
        option = romeon.bind(foxtra)(option, offset);
        michal = option[michal];
        option = option[verify];
        var _closure2_slot5 = option;
        offset = oscard.useEffect;
        verify = new Array(2);
        verify[0] = yankee;
        verify[1] = golfie;
        option = function() {
            tangon = _closure1_slot6;
            zuuluu = _closure2_slot0;
            michal = undefined;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.isInitialSearchQuery;
                    report = entity.tagsManager;
                    entity = entity.isAutocompleteVisible;
                    if(entity) { _fun00012_ip = 82; continue _fun00011 }
 24:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.computeCandidateTabs;
                    michal = {};
                    michal['isInitialSearchQuery'] = oscard;
                    michal['tagsManager'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    if(!michal) { _fun00012_ip = 82; continue _fun00011 }
 57:
                    zuuluu = _closure2_slot3;
                    michal = _closure2_slot1;
                    entity = michal.getCandidateTabs;
                    michal = entity.bind(michal)();
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 82:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tangon.bind(michal)(zuuluu, entity);
            return entity;
        };
        option = offset.bind(oscard)(option, verify);
        verify = oscard.useMemo;
        option = new Array(1);
        option[0] = report;
        report = function() {
            entity = global;
            zuuluu = entity.Set;
            tangon = _closure2_slot2;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        kiloes = verify.bind(oscard)(report, option);
        verify = kiloes.has;
        report = _closure1_slot8;
        option = report.GUILD_CHANNELS;
        option = verify.bind(kiloes)(option);
        offset = !option;
        verify = _closure1_slot1;
        backup = _closure1_slot2;
        option = 7;
        option = backup[option];
        option = verify.bind(foxtra)(option);
        romeon = option.bind(foxtra)(golfie, offset);
        var _closure2_slot6 = romeon;
        offset = kiloes.has;
        option = report.MEMBERS;
        option = offset.bind(kiloes)(option);
        offset = !option;
        option = 8;
        option = backup[option];
        option = verify.bind(foxtra)(option);
        offset = option.bind(foxtra)(golfie, offset);
        var _closure2_slot7 = offset;
        option = kiloes.has;
        report = report.PEOPLE;
        report = option.bind(kiloes)(report);
        option = !report;
        report = 9;
        report = backup[report];
        report = verify.bind(foxtra)(report);
        option = report.bind(foxtra)(golfie, option);
        var _closure2_slot8 = option;
        report = _closure1_slot7;
        verify = report.bind(foxtra)(golfie);
        var _closure2_slot9 = verify;
        report = oscard.useRef;
        report = report.bind(oscard)(verify);
        var _closure2_slot10 = report;
        sizing = oscard.useEffect;
        kiloes = new Array(1);
        kiloes[0] = verify;
        report = function() {
            michal = _closure2_slot10;
            entity = _closure2_slot9;
            michal['current'] = entity;
            entity = undefined;
            return entity;
        };
        report = sizing.bind(oscard)(report, kiloes);
        report = _closure1_slot0;
        tangon = 10;
        tangon = backup[tangon];
        report = report.bind(foxtra)(tangon);
        tangon = report.useMessageSearchTabCounts;
        verify = tangon.bind(report)(golfie, verify);
        var _closure2_slot11 = verify;
        report = oscard.useEffect;
        tangon = new Array(6);
        tangon[0] = romeon;
        tangon[1] = yankee;
        tangon[2] = offset;
        tangon[3] = verify;
        tangon[4] = option;
        tangon[5] = golfie;
        entity = function() {
            tangon = _closure1_slot6;
            zuuluu = _closure2_slot0;
            michal = undefined;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.isInitialSearchQuery;
                    report = entity.isPendingSearchResults;
                    golfie = entity.searchResultsQuery;
                    entity = entity.isAutocompleteVisible;
                    if(entity) { _fun00014_ip = 162; continue _fun00013 }
 33:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.computeVisibleTabs;
                    michal = {};
                    michal['isInitialSearchQuery'] = oscard;
                    if(report) { _fun00014_ip = 69; continue _fun00013 }
 56:
                    oscard = _closure2_slot10;
                    oscard = oscard.current;
                    report = oscard !== golfie;
 69:
                    michal['isPendingSearchResults'] = report;
                    report = _closure2_slot8;
                    michal['peopleTabCount'] = report;
                    report = _closure2_slot7;
                    michal['memberTabCount'] = report;
                    report = _closure2_slot6;
                    michal['channelTabCount'] = report;
                    report = _closure2_slot11;
                    michal['messageTabCounts'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    if(!michal) { _fun00014_ip = 162; continue _fun00013 }
 118:
                    report = _closure2_slot4;
                    tangon = _closure2_slot1;
                    michal = tangon.getVisibleTabs;
                    michal = michal.bind(tangon)();
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(michal);
                    michal = _closure2_slot5;
                    entity = tangon.getVisibleTabCounts;
                    entity = entity.bind(tangon)();
                    entity = michal.bind(zuuluu)(entity);
 162:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tangon.bind(michal)(zuuluu, entity);
            return entity;
        };
        entity = report.bind(oscard)(entity, tangon);
        entity = {};
        entity['visibleTabs'] = zuuluu;
        entity['visibleTabCounts'] = michal;
        return entity;
    };
    zuuluu['useVisibleSearchTabs'] = michal;
    return entity;
})();