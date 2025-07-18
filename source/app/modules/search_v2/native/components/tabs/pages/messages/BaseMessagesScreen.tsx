// app/modules/search_v2/native/components/tabs/pages/messages/BaseMessagesScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/tabs/pages/messages/BaseMessagesScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: BaseMessagesScreen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            backup = michal.data;
            var _closure2_slot0 = backup;
            oscard = michal.searchContext;
            var _closure2_slot1 = oscard;
            echoed = michal.tab;
            var _closure2_slot2 = echoed;
            vacuum = michal.isFocused;
            var _closure2_slot3 = vacuum;
            zuuluu = michal.isFirstPageLoading;
            entity = michal.isNextPageLoading;
            foxtra = michal.estimatedItemSize;
            kiloes = michal.contentContainerStyle;
            offset = michal.ItemSeparatorComponent;
            verify = michal.numColumns;
            option = michal.onViewableItemsChanged;
            report = undefined;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            if(zuuluu) { _fun00002_ip = 122; continue _fun00001 }
 119:
            zuuluu = entity;
 122:
            _closure2_slot4 = zuuluu;
            golfie = _closure1_slot5;
            tangon = golfie.useState;
            entity = function(argFoo) {
                michal = argFoo;
                entity = michal.getSearchResultsQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = tangon.bind(golfie)(oscard, entity);
            output = _closure1_slot0;
            result = _closure1_slot2;
            entity = 4;
            entity = result[entity];
            tangon = output.bind(report)(entity);
            entity = tangon.getSearchTabFetchId;
            entity = entity.bind(tangon)(oscard, echoed, golfie);
            _closure2_slot5 = entity;
            golfie = 6;
            entity = result[golfie];
            update = output.bind(report)(entity);
            sizing = update.useStateFromStores;
            entity = _closure1_slot4;
            romeon = new Array(1);
            romeon[0] = entity;
            tangon = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getIsIndexing;
                entity = _closure2_slot5;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = sizing.bind(update)(romeon, tangon);
            golfie = result[golfie];
            sizing = output.bind(report)(golfie);
            romeon = sizing.useStateFromStoresObject;
            golfie = new Array(1);
            golfie[0] = entity;
            entity = function() {
                entity = {};
                tangon = _closure1_slot4;
                report = tangon.getIsHistoricalIndexing;
                zuuluu = _closure2_slot5;
                zuuluu = report.bind(tangon)(zuuluu);
                entity['isHistoricalIndexing'] = zuuluu;
                zuuluu = tangon.getDocumentsIndexed;
                michal = _closure2_slot5;
                michal = zuuluu.bind(tangon)(michal);
                entity['documentsIndexed'] = michal;
                return entity;
            };
            entity = romeon.bind(sizing)(golfie, entity);
            update = entity.isHistoricalIndexing;
            _closure2_slot6 = update;
            source = entity.documentsIndexed;
            _closure2_slot7 = source;
            entity = 7;
            entity = result[entity];
            romeon = output.bind(report)(entity);
            golfie = romeon.useMessageSearchErrorScreen;
            entity = {};
            entity['searchContext'] = oscard;
            entity['tab'] = echoed;
            romeon = golfie.bind(romeon)(entity);
            entity = romeon.canShowErrorScreen;
            golfie = romeon.errorScreenText;
            sequen = romeon.canShowErrorToast;
            _closure2_slot8 = sequen;
            sizing = romeon.showErrorToast;
            _closure2_slot9 = sizing;
            romeon = 8;
            romeon = result[romeon];
            output = output.bind(report)(romeon);
            romeon = output.useSearchFetchPendingManager;
            output = romeon.bind(output)(oscard);
            _closure2_slot10 = output;
            result = _closure1_slot3;
            config = result.useCallback;
            romeon = backup.length;
            ctrled = new Array(6);
            ctrled[0] = romeon;
            ctrled[1] = zuuluu;
            ctrled[2] = vacuum;
            ctrled[3] = output;
            ctrled[4] = echoed;
            ctrled[5] = oscard;
            romeon = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot0;
                    zuuluu = michal.length;
                    michal = 0;
                    if(!(michal !== zuuluu)) { _fun00004_ip = 117; continue _fun00003 }
 18:
                    michal = _closure2_slot4;
                    if(michal) { _fun00004_ip = 99; continue _fun00003 }
 25:
                    michal = _closure2_slot3;
                    if(michal) { _fun00004_ip = 52; continue _fun00003 }
 32:
                    tangon = _closure2_slot10;
                    zuuluu = tangon.add;
                    michal = _closure2_slot2;
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00004_ip = 117; continue _fun00003;
 52:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 9;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.fetchNextMessages;
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot2;
                    michal = tangon.bind(report)(zuuluu, michal);
                    _fun00004_ip = 117; continue _fun00003;
 99:
                    zuuluu = _closure2_slot10;
                    michal = zuuluu.add;
                    entity = _closure2_slot2;
                    entity = michal.bind(zuuluu)(entity);
 117:
                    entity = undefined;
                    return entity;
                }
            };
            romeon = config.bind(result)(romeon, ctrled);
            config = result.useEffect;
            ctrled = new Array(5);
            ctrled[0] = vacuum;
            ctrled[1] = zuuluu;
            ctrled[2] = oscard;
            ctrled[3] = output;
            ctrled[4] = echoed;
            output = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot3;
                    if(michal) { _fun00006_ip = 27; continue _fun00005 }
 10:
                    zuuluu = _closure2_slot3;
                    if(!zuuluu) { _fun00006_ip = 24; continue _fun00005 }
 17:
                    tangon = _closure2_slot4;
                    zuuluu = !tangon;
 24:
                    michal = zuuluu;
 27:
                    if(!michal) { _fun00006_ip = 54; continue _fun00005 }
 30:
                    tangon = _closure2_slot10;
                    zuuluu = tangon.flush;
                    michal = _closure2_slot1;
                    entity = _closure2_slot2;
                    entity = zuuluu.bind(tangon)(michal, entity);
 54:
                    entity = undefined;
                    return entity;
                }
            };
            output = config.bind(result)(output, ctrled);
            ctrled = result.useEffect;
            output = new Array(5);
            output[0] = sequen;
            sequen = backup.length;
            output[1] = sequen;
            output[2] = vacuum;
            output[3] = zuuluu;
            output[4] = sizing;
            sizing = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = !michal;
                    if(!michal) { _fun00008_ip = 17; continue _fun00007 }
 13:
                    michal = _closure2_slot8;
 17:
                    if(!michal) { _fun00008_ip = 24; continue _fun00007 }
 20:
                    michal = _closure2_slot3;
 24:
                    if(!michal) { _fun00008_ip = 42; continue _fun00007 }
 27:
                    zuuluu = _closure2_slot0;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    michal = tangon > zuuluu;
 42:
                    if(!michal) { _fun00008_ip = 55; continue _fun00007 }
 45:
                    michal = _closure2_slot9;
                    entity = undefined;
                    entity = michal.bind(entity)();
 55:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = ctrled.bind(result)(sizing, output);
            output = result.useMemo;
            sizing = new Array(4);
            sizing[0] = source;
            sizing[1] = update;
            sizing[2] = oscard;
            sizing[3] = echoed;
            yankee = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot6;
                    zuuluu = null;
                    entity = null;
                    if(!michal) { _fun00010_ip = 106; continue _fun00009 }
 14:
                    michal = _closure2_slot7;
                    michal = zuuluu != michal;
                    entity = null;
                    if(!michal) { _fun00010_ip = 106; continue _fun00009 }
 27:
                    tangon = _closure2_slot7;
                    michal = 0;
                    michal = tangon > michal;
                    entity = null;
                    if(!michal) { _fun00010_ip = 106; continue _fun00009 }
 42:
                    report = _closure1_slot6;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 10;
                    michal = tangon[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    golfie = _closure2_slot1;
                    michal['searchContext'] = golfie;
                    golfie = _closure2_slot7;
                    michal['documentsIndexed'] = golfie;
                    oscard = _closure2_slot2;
                    michal['tab'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 106:
                    return entity;
                }
            };
            yankee = output.bind(result)(yankee, sizing);
            if(tangon) { _fun00002_ip = 696; continue _fun00001 }
 568:
            if(zuuluu) { _fun00002_ip = 623; continue _fun00001 }
 571:
            if(!entity) { _fun00002_ip = 623; continue _fun00001 }
 574:
            zuuluu = backup.length;
            entity = 0;
            if(!(entity === zuuluu)) { _fun00002_ip = 623; continue _fun00001 }
 585:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot1;
            sizing = _closure1_slot2;
            entity = 12;
            entity = sizing[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            entity['text'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00002_ip = 694; continue _fun00001;
 623:
            golfie = _closure1_slot6;
            tangon = _closure1_slot1;
            sizing = _closure1_slot2;
            zuuluu = 13;
            zuuluu = sizing[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            zuuluu['contentContainerStyle'] = kiloes;
            zuuluu['data'] = backup;
            zuuluu['estimatedItemSize'] = foxtra;
            zuuluu['onEndReached'] = romeon;
            zuuluu['ListHeaderComponent'] = yankee;
            zuuluu['ItemSeparatorComponent'] = offset;
            zuuluu['numColumns'] = verify;
            zuuluu['onViewableItemsChanged'] = option;
            entity = golfie.bind(report)(tangon, zuuluu);
 694:
            _fun00002_ip = 733; continue _fun00001;
 696:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 11;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['searchContext'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 733:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: trackMessageItemPress
        entity = argFoo;
        verify = entity.searchContext;
        option = entity.channelId;
        golfie = entity.messageId;
        oscard = entity.index;
        romeon = entity.tab;
        tangon = _closure1_slot5;
        zuuluu = tangon.getState;
        entity = function(argFoo) {
            michal = argFoo;
            entity = michal.getSearchResultsQuery;
            entity = entity.bind(michal)();
            return entity;
        };
        yankee = zuuluu.bind(tangon)(verify, entity);
        zuuluu = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 4;
        report = tangon[entity];
        entity = undefined;
        offset = zuuluu.bind(entity)(report);
        report = offset.getSearchTabFetchId;
        offset = report.bind(offset)(verify, romeon, yankee);
        report = _closure1_slot4;
        michal = report.getTotalCount;
        report = michal.bind(report)(offset);
        michal = 5;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.trackSearchResultClicked;
        michal = {};
        michal['searchContext'] = verify;
        michal['channelId'] = option;
        michal['messageId'] = golfie;
        michal['index'] = oscard;
        michal['totalSearchResults'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['trackMessageItemPress'] = michal;
    return entity;
})();