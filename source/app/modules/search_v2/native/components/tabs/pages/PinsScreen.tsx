// app/modules/search_v2/native/components/tabs/pages/PinsScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: InitialPinsScreen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.searchContext;
            var _closure2_slot0 = report;
            romeon = entity.isFocused;
            var _closure2_slot1 = romeon;
            entity = _closure1_slot6;
            tangon = undefined;
            entity = entity.bind(tangon)(report);
            var _closure2_slot2 = entity;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = 6;
            oscard = zuuluu[oscard];
            option = michal.bind(tangon)(oscard);
            golfie = option.useIsSearchImprovedLoadingStatesExperimentEnabled;
            oscard = {};
            yankee = 'PinsScreen';
            oscard['location'] = yankee;
            foxtra = golfie.bind(option)(oscard);
            oscard = 7;
            oscard = zuuluu[oscard];
            option = michal.bind(tangon)(oscard);
            golfie = option.useFullscreenPlaceholderCount;
            oscard = {};
            yankee = _closure1_slot8;
            oscard['placeholderHeight'] = yankee;
            yankee = 1;
            oscard['numColumns'] = yankee;
            yankee = golfie.bind(option)(oscard);
            var _closure2_slot3 = yankee;
            option = _closure1_slot3;
            golfie = option.useEffect;
            oscard = new Array(3);
            oscard[0] = romeon;
            oscard[1] = entity;
            entity = report.channelId;
            oscard[2] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot2;
                    if(!michal) { _fun00004_ip = 14; continue _fun00003 }
 10:
                    michal = _closure2_slot1;
 14:
                    if(!michal) { _fun00004_ip = 62; continue _fun00003 }
 17:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 8;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.fetchPins;
                    entity = _closure2_slot0;
                    entity = entity.channelId;
                    entity = michal.bind(zuuluu)(entity);
 62:
                    entity = undefined;
                    return entity;
                }
            };
            entity = golfie.bind(option)(entity, oscard);
            entity = 9;
            entity = zuuluu[entity];
            option = michal.bind(tangon)(entity);
            golfie = option.useStateFromStoresObject;
            entity = _closure1_slot4;
            oscard = new Array(1);
            oscard[0] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot4;
                    michal = tangon.getPins;
                    entity = _closure2_slot0;
                    entity = entity.channelId;
                    tangon = michal.bind(tangon)(entity);
                    entity = {};
                    michal = null;
                    oscard = michal == tangon;
                    report = undefined;
                    if(oscard) { _fun00006_ip = 49; continue _fun00005 }
 43:
                    report = tangon.items;
 49:
                    entity['items'] = report;
                    michal = michal == tangon;
                    if(michal) { _fun00006_ip = 80; continue _fun00005 }
 61:
                    tangon = tangon.state;
                    zuuluu = _closure1_slot5;
                    zuuluu = zuuluu.LOADING;
                    michal = tangon === zuuluu;
 80:
                    entity['showLoading'] = michal;
                    return entity;
                }
            };
            oscard = golfie.bind(option)(oscard, entity);
            entity = oscard.items;
            var _closure2_slot4 = entity;
            backup = oscard.showLoading;
            var _closure2_slot5 = backup;
            oscard = 10;
            oscard = zuuluu[oscard];
            option = michal.bind(tangon)(oscard);
            golfie = option.useOnPressSearchItem;
            oscard = {};
            oscard['searchContext'] = report;
            romeon = golfie.bind(option)(oscard);
            var _closure2_slot6 = romeon;
            option = _closure1_slot3;
            golfie = option.useCallback;
            oscard = new Array(2);
            oscard[0] = romeon;
            oscard[1] = report;
            report = function(argFoo, argBar) {
                tangon = argFoo;
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 11;
                michal = michal[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.trackSearchResultClicked;
                zuuluu = {};
                golfie = _closure2_slot0;
                zuuluu['searchContext'] = golfie;
                zuuluu['channelId'] = tangon;
                zuuluu = report.bind(oscard)(zuuluu);
                zuuluu = _closure2_slot6;
                michal = argBar;
                michal = zuuluu.bind(entity)(tangon, michal);
                return entity;
            };
            option = golfie.bind(option)(report, oscard);
            var _closure2_slot7 = option;
            golfie = _closure1_slot3;
            oscard = golfie.useRef;
            report = {};
            report = oscard.bind(golfie)(report);
            var _closure2_slot8 = report;
            golfie = _closure1_slot3;
            oscard = golfie.useMemo;
            report = new Array(4);
            report[0] = yankee;
            report[1] = option;
            report[2] = backup;
            report[3] = entity;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    tangon = _closure2_slot4;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00008_ip = 44; continue _fun00007 }
 23:
                    tangon = _closure2_slot4;
                    zuuluu = tangon.forEach;
                    michal = function(argFoo) {
                        entity = argFoo;
                        report = entity.message;
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.push;
                        entity = {};
                        tangon = _closure1_slot10;
                        tangon = tangon.MESSAGE;
                        entity['type'] = tangon;
                        tangon = {};
                        tangon['message'] = report;
                        golfie = _closure2_slot7;
                        tangon['onPress'] = golfie;
                        oscard = _closure1_slot9;
                        tangon['lineClamp'] = oscard;
                        report = _closure2_slot8;
                        tangon['messageSizeCacheRef'] = report;
                        entity['props'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
 44:
                    michal = _closure2_slot5;
                    if(!michal) { _fun00008_ip = 132; continue _fun00007 }
 51:
                    michal = _closure2_slot3;
                    oscard = 0;
                    michal = oscard < michal;
                    tangon = global;
                    zuuluu = 'message-placeholder-';
                    if(!michal) { _fun00008_ip = 132; continue _fun00007 }
 75:
                    option = entity.push;
                    michal = {};
                    verify = _closure1_slot10;
                    verify = verify.MESSAGE_PLACEHOLDER;
                    michal['type'] = verify;
                    verify = tangon.HermesInternal;
                    verify = verify.concat;
                    verify = verify.bind(zuuluu)(oscard);
                    michal['key'] = verify;
                    michal = option.bind(entity)(michal);
                    oscard = oscard + 1;
                    michal = _closure2_slot3;
                    if(oscard < michal) { _fun00008_ip = 75; continue _fun00007 }
 132:
                    return entity;
                }
            };
            yankee = oscard.bind(golfie)(entity, report);
            entity = 12;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useContentContainerStyles;
            romeon = entity.bind(michal)();
            zuuluu = _closure1_slot15;
            michal = _closure1_slot14;
            entity = {};
            oscard = !foxtra;
            if(!oscard) { _fun00002_ip = 460; continue _fun00001 }
 408:
            option = _closure1_slot13;
            golfie = _closure1_slot1;
            kiloes = _closure1_slot2;
            report = 13;
            report = kiloes[report];
            golfie = golfie.bind(tangon)(report);
            report = {};
            kiloes = _closure1_slot11;
            kiloes = kiloes.PINS;
            report['tab'] = kiloes;
            report['visible'] = backup;
            oscard = option.bind(tangon)(golfie, report);
 460:
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot13;
            golfie = _closure1_slot1;
            kiloes = _closure1_slot2;
            oscard = 14;
            oscard = kiloes[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            if(foxtra) { _fun00002_ip = 500; continue _fun00001 }
 497:
            foxtra = !backup;
 500:
            oscard['visible'] = foxtra;
            romeon = romeon.messagesContentContainer;
            oscard['contentContainerStyle'] = romeon;
            oscard['data'] = yankee;
            offset = function() { // Original name: onEndReached
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 8;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.fetchPins;
                    michal = _closure2_slot0;
                    zuuluu = michal.channelId;
                    michal = {};
                    oscard = _closure2_slot4;
                    option = null;
                    verify = option == oscard;
                    oscard = undefined;
                    if(verify) { _fun00010_ip = 96; continue _fun00009 }
 60:
                    offset = _closure2_slot4;
                    verify = offset.at;
                    golfie = -1;
                    golfie = verify.bind(offset)(golfie);
                    option = option == golfie;
                    oscard = undefined;
                    if(option) { _fun00010_ip = 96; continue _fun00009 }
 90:
                    oscard = golfie.pinnedAt;
 96:
                    michal['before'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                }
            };
            oscard['onEndReached'] = offset;
            offset = _closure1_slot7;
            oscard['estimatedItemSize'] = offset;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 15;
            verify = yankee[verify];
            verify = offset.bind(tangon)(verify);
            verify = verify.MessageVerticalSeparator;
            oscard['ItemSeparatorComponent'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: SearchResultsPinsScreen
        entity = argFoo;
        golfie = entity.searchContext;
        oscard = entity.tab;
        report = entity.isFocused;
        tangon = _closure1_slot13;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 16;
        entity = zuuluu[entity];
        zuuluu = undefined;
        entity = michal.bind(zuuluu)(entity);
        michal = entity.MessagesScreen;
        entity = {};
        entity['searchContext'] = golfie;
        entity['tab'] = oscard;
        entity['isFocused'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FetchState;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useIsInitialSearchQuery;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MESSAGE_ESTIMATED_ITEM_SIZE;
    var _closure1_slot7 = golfie;
    golfie = tangon.MESSAGE_PLACEHOLDER_ITEM_SIZE;
    var _closure1_slot8 = golfie;
    golfie = tangon.SEARCH_PINNED_MESSAGES_LINE_CLAMP;
    var _closure1_slot9 = golfie;
    golfie = tangon.SearchListItemTypes;
    var _closure1_slot10 = golfie;
    tangon = tangon.SearchTabs;
    var _closure1_slot11 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchTypes;
    var _closure1_slot12 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot13 = golfie;
    golfie = tangon.Fragment;
    var _closure1_slot14 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot15 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/tabs/pages/PinsScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: PinsScreen
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            option = entity.searchContext;
            golfie = entity.tab;
            oscard = entity.isFocused;
            entity = _closure1_slot6;
            report = undefined;
            entity = entity.bind(report)(option);
            if(!entity) { _fun00012_ip = 123; continue _fun00011 }
 38:
            zuuluu = option.type;
            entity = _closure1_slot12;
            entity = entity.CHANNEL;
            if(!(zuuluu !== entity)) { _fun00012_ip = 95; continue _fun00011 }
 57:
            zuuluu = option.type;
            entity = _closure1_slot12;
            entity = entity.GUILD_CHANNEL;
            if(!(zuuluu !== entity)) { _fun00012_ip = 95; continue _fun00011 }
 76:
            zuuluu = option.type;
            entity = _closure1_slot12;
            entity = entity.THREAD;
            if(!(zuuluu === entity)) { _fun00012_ip = 123; continue _fun00011 }
 95:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot16;
            entity = {};
            entity['searchContext'] = option;
            entity['isFocused'] = oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00012_ip = 154; continue _fun00011;
 123:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot17;
            michal = {};
            michal['searchContext'] = option;
            michal['tab'] = golfie;
            michal['isFocused'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 154:
            return entity;
        }
    };
    zuuluu['PinsScreen'] = michal;
    return entity;
})();