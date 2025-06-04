// app/modules/search_v2/native/components/tabs/pages/PinsScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: InitialPinsScreen
        entity = argFoo;
        michal = entity.searchContext;
        var _closure2_slot0 = michal;
        yankee = entity.isFocused;
        var _closure2_slot1 = yankee;
        tangon = _closure1_slot6;
        zuuluu = tangon.useState;
        entity = function(argFoo) {
            michal = argFoo;
            entity = michal.isInitialSearchQuery;
            entity = entity.bind(michal)();
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        var _closure2_slot2 = entity;
        oscard = _closure1_slot0;
        golfie = _closure1_slot2;
        zuuluu = 6;
        zuuluu = golfie[zuuluu];
        tangon = undefined;
        offset = oscard.bind(tangon)(zuuluu);
        verify = offset.useFullscreenPlaceholderCount;
        zuuluu = {};
        romeon = _closure1_slot8;
        zuuluu['placeholderHeight'] = romeon;
        romeon = 1;
        zuuluu['numColumns'] = romeon;
        romeon = verify.bind(offset)(zuuluu);
        var _closure2_slot3 = romeon;
        offset = _closure1_slot3;
        verify = offset.useEffect;
        zuuluu = new Array(3);
        zuuluu[0] = yankee;
        zuuluu[1] = entity;
        entity = michal.channelId;
        zuuluu[2] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot2;
                if(!michal) { _fun00002_ip = 14; continue _fun00001 }
 10:
                michal = _closure2_slot1;
 14:
                if(!michal) { _fun00002_ip = 62; continue _fun00001 }
 17:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 7;
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
        entity = verify.bind(offset)(entity, zuuluu);
        entity = 8;
        entity = golfie[entity];
        offset = oscard.bind(tangon)(entity);
        verify = offset.useStateFromStoresObject;
        entity = _closure1_slot4;
        zuuluu = new Array(1);
        zuuluu[0] = entity;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
                if(oscard) { _fun00004_ip = 49; continue _fun00003 }
 43:
                report = tangon.items;
 49:
                entity['items'] = report;
                michal = michal == tangon;
                if(michal) { _fun00004_ip = 80; continue _fun00003 }
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
        zuuluu = verify.bind(offset)(zuuluu, entity);
        entity = zuuluu.items;
        var _closure2_slot4 = entity;
        offset = zuuluu.showLoading;
        var _closure2_slot5 = offset;
        zuuluu = 9;
        zuuluu = golfie[zuuluu];
        yankee = oscard.bind(tangon)(zuuluu);
        verify = yankee.useOnPressSearchItem;
        zuuluu = {};
        zuuluu['searchContext'] = michal;
        foxtra = verify.bind(yankee)(zuuluu);
        var _closure2_slot6 = foxtra;
        yankee = _closure1_slot3;
        verify = yankee.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = foxtra;
        zuuluu[1] = michal;
        michal = function(argFoo, argBar) {
            tangon = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 10;
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
        yankee = verify.bind(yankee)(michal, zuuluu);
        var _closure2_slot7 = yankee;
        verify = _closure1_slot3;
        zuuluu = verify.useRef;
        michal = {};
        michal = zuuluu.bind(verify)(michal);
        var _closure2_slot8 = michal;
        verify = _closure1_slot3;
        zuuluu = verify.useMemo;
        michal = new Array(4);
        michal[0] = romeon;
        michal[1] = yankee;
        michal[2] = offset;
        michal[3] = entity;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = new Array(0);
                var _closure3_slot0 = entity;
                tangon = _closure2_slot4;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00006_ip = 44; continue _fun00005 }
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
                if(!michal) { _fun00006_ip = 132; continue _fun00005 }
 51:
                michal = _closure2_slot3;
                oscard = 0;
                michal = oscard < michal;
                tangon = global;
                zuuluu = 'message-placeholder-';
                if(!michal) { _fun00006_ip = 132; continue _fun00005 }
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
                if(oscard < michal) { _fun00006_ip = 75; continue _fun00005 }
 132:
                return entity;
            }
        };
        verify = zuuluu.bind(verify)(entity, michal);
        entity = 11;
        entity = golfie[entity];
        michal = oscard.bind(tangon)(entity);
        entity = michal.useContentContainerStyles;
        offset = entity.bind(michal)();
        zuuluu = _closure1_slot12;
        michal = _closure1_slot1;
        entity = 12;
        entity = golfie[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        offset = offset.messagesContentContainer;
        entity['contentContainerStyle'] = offset;
        entity['data'] = verify;
        option = function() { // Original name: onEndReached
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 7;
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
                if(verify) { _fun00008_ip = 96; continue _fun00007 }
 60:
                offset = _closure2_slot4;
                verify = offset.at;
                golfie = -1;
                golfie = verify.bind(offset)(golfie);
                option = option == golfie;
                oscard = undefined;
                if(option) { _fun00008_ip = 96; continue _fun00007 }
 90:
                oscard = golfie.pinnedAt;
 96:
                michal['before'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            }
        };
        entity['onEndReached'] = option;
        report = _closure1_slot7;
        entity['estimatedItemSize'] = report;
        report = 13;
        report = golfie[report];
        report = oscard.bind(tangon)(report);
        report = report.MessageVerticalSeparator;
        entity['ItemSeparatorComponent'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: SearchResultsPinsScreen
        entity = argFoo;
        golfie = entity.searchContext;
        oscard = entity.tab;
        report = entity.isFocused;
        tangon = _closure1_slot12;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 14;
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
    var _closure1_slot14 = entity;
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
    option = oscard[tangon];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FetchState;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
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
    tangon = tangon.SearchListItemTypes;
    var _closure1_slot10 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchTypes;
    var _closure1_slot11 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot12 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/tabs/pages/PinsScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: PinsScreen
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            golfie = entity.searchContext;
            oscard = entity.tab;
            michal = entity.isFocused;
            report = _closure1_slot6;
            tangon = report.useState;
            entity = function(argFoo) {
                michal = argFoo;
                entity = michal.isInitialSearchQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = tangon.bind(report)(golfie, entity);
            if(!entity) { _fun00010_ip = 138; continue _fun00009 }
 51:
            tangon = golfie.type;
            entity = _closure1_slot11;
            entity = entity.CHANNEL;
            if(!(tangon !== entity)) { _fun00010_ip = 108; continue _fun00009 }
 70:
            tangon = golfie.type;
            entity = _closure1_slot11;
            entity = entity.GUILD_CHANNEL;
            if(!(tangon !== entity)) { _fun00010_ip = 108; continue _fun00009 }
 89:
            tangon = golfie.type;
            entity = _closure1_slot11;
            entity = entity.THREAD;
            if(!(tangon === entity)) { _fun00010_ip = 138; continue _fun00009 }
 108:
            option = _closure1_slot12;
            report = _closure1_slot13;
            tangon = {};
            tangon['searchContext'] = golfie;
            tangon['isFocused'] = michal;
            entity = undefined;
            entity = option.bind(entity)(report, tangon);
            _fun00010_ip = 171; continue _fun00009;
 138:
            report = _closure1_slot12;
            tangon = _closure1_slot14;
            zuuluu = {};
            zuuluu['searchContext'] = golfie;
            zuuluu['tab'] = oscard;
            zuuluu['isFocused'] = michal;
            michal = undefined;
            entity = report.bind(michal)(tangon, zuuluu);
 171:
            return entity;
        }
    };
    zuuluu['PinsScreen'] = michal;
    return entity;
})();