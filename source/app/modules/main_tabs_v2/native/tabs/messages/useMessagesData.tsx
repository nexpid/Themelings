// app/modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = option;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, michal);
    offset = 0;
    michal = option[offset];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    verify = 1;
    oscard = option[verify];
    michal = argCor;
    michal = michal.bind(entity)(oscard);
    var _closure1_slot4 = michal;
    foxtra = 2;
    michal = option[foxtra];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    romeon = 3;
    michal = option[romeon];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot6 = michal;
    yankee = 4;
    michal = option[yankee];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot7 = michal;
    oscard = 5;
    michal = option[oscard];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = option[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot9 = michal;
    tangon = {};
    tangon['IncomingRequests'] = offset;
    michal = 'IncomingRequests';
    tangon[offset] = michal;
    tangon['FavoriteChannels'] = verify;
    michal = 'FavoriteChannels';
    tangon[verify] = michal;
    tangon['Channels'] = foxtra;
    michal = 'Channels';
    tangon[foxtra] = michal;
    tangon['Separator'] = romeon;
    michal = 'Separator';
    tangon[romeon] = michal;
    tangon['SuggestedFriends'] = yankee;
    michal = 'SuggestedFriends';
    tangon[yankee] = michal;
    tangon['Placeholders'] = oscard;
    michal = 'Placeholders';
    tangon[oscard] = michal;
    michal = {};
    michal['HappeningNow'] = offset;
    oscard = 'HappeningNow';
    michal[offset] = oscard;
    michal['EmptyState'] = verify;
    oscard = 'EmptyState';
    michal[verify] = oscard;
    var _closure1_slot10 = michal;
    oscard = 12;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function() { // Original name: useMessagesData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = _closure1_slot0;
            offset = _closure1_slot2;
            kiloes = 7;
            zuuluu = offset[kiloes];
            oscard = undefined;
            golfie = option.bind(oscard)(zuuluu);
            report = golfie.useStateFromStoresObject;
            zuuluu = _closure1_slot7;
            tangon = new Array(2);
            tangon[0] = zuuluu;
            zuuluu = _closure1_slot5;
            tangon[1] = zuuluu;
            zuuluu = function() {
                entity = {};
                tangon = _closure1_slot7;
                zuuluu = tangon.getSessionId;
                tangon = zuuluu.bind(tangon)();
                zuuluu = null;
                zuuluu = zuuluu != tangon;
                entity['connected'] = zuuluu;
                zuuluu = _closure1_slot5;
                michal = zuuluu.isConnected;
                michal = michal.bind(zuuluu)();
                entity['connectedToGateway'] = michal;
                return entity;
            };
            zuuluu = report.bind(golfie)(tangon, zuuluu);
            backup = zuuluu.connected;
            var _closure2_slot0 = backup;
            foxtra = zuuluu.connectedToGateway;
            var _closure2_slot1 = foxtra;
            zuuluu = offset[kiloes];
            golfie = option.bind(oscard)(zuuluu);
            report = golfie.useStateFromStoresArray;
            zuuluu = _closure1_slot9;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot9;
                entity = michal.getSortedChannels;
                entity = entity.bind(michal)();
                return entity;
            };
            report = report.bind(golfie)(tangon, zuuluu);
            tangon = _closure1_slot3;
            zuuluu = 2;
            tangon = tangon.bind(oscard)(report, zuuluu);
            report = 0;
            romeon = tangon[report];
            var _closure2_slot2 = romeon;
            zuuluu = 1;
            yankee = tangon[zuuluu];
            var _closure2_slot3 = yankee;
            golfie = _closure1_slot1;
            tangon = 8;
            zuuluu = offset[tangon];
            verify = golfie.bind(oscard)(zuuluu);
            golfie = verify.useExperiment;
            zuuluu = {};
            sizing = 'DM List';
            zuuluu['location'] = sizing;
            zuuluu = golfie.bind(verify)(zuuluu);
            verify = zuuluu.showInDMs;
            zuuluu = zuuluu.removeItemAfterAck;
            golfie = offset[kiloes];
            result = option.bind(oscard)(golfie);
            output = result.useStateFromStoresArray;
            golfie = _closure1_slot6;
            sizing = new Array(1);
            sizing[0] = golfie;
            golfie = function() {
                entity = _closure1_slot6;
                zuuluu = entity.localItems;
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = argFoo;
                        tangon = zuuluu.type;
                        golfie = _closure1_slot0;
                        entity = _closure1_slot2;
                        oscard = 9;
                        entity = entity[oscard];
                        report = undefined;
                        entity = golfie.bind(report)(entity);
                        entity = entity.NotificationCenterLocalItems;
                        entity = entity.INCOMING_FRIEND_REQUESTS;
                        entity = tangon === entity;
                        if(entity) { _fun00004_ip = 90; continue _fun00003 }
 52:
                        zuuluu = zuuluu.type;
                        tangon = _closure1_slot0;
                        michal = _closure1_slot2;
                        michal = michal[oscard];
                        michal = tangon.bind(report)(michal);
                        michal = michal.NotificationCenterLocalItems;
                        michal = michal.INCOMING_GAME_FRIEND_REQUESTS;
                        entity = zuuluu === michal;
 90:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = output.bind(result)(sizing, golfie);
            tangon = offset[tangon];
            offset = option.bind(oscard)(tangon);
            option = offset.useNumFriendRequestsForBadging;
            tangon = 'DMs';
            tangon = option.bind(offset)(tangon);
            if(!verify) { _fun00002_ip = 289; continue _fun00001 }
 280:
            golfie = golfie.length;
            verify = golfie > report;
 289:
            if(!verify) { _fun00002_ip = 305; continue _fun00001 }
 292:
            zuuluu = !zuuluu;
            if(zuuluu) { _fun00002_ip = 302; continue _fun00001 }
 298:
            zuuluu = tangon > report;
 302:
            verify = zuuluu;
 305:
            var _closure2_slot4 = verify;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = {};
            report = 'Messages Tab';
            zuuluu['location'] = report;
            report = backup;
            if(!report) { _fun00002_ip = 350; continue _fun00001 }
 347:
            report = foxtra;
 350:
            zuuluu['isConnected'] = report;
            zuuluu = tangon.bind(oscard)(zuuluu);
            report = zuuluu.setAdded;
            var _closure2_slot5 = report;
            option = zuuluu.friendSuggestions;
            var _closure2_slot6 = option;
            offset = zuuluu.numFriendSuggestions;
            var _closure2_slot7 = offset;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            golfie = 11;
            golfie = zuuluu[golfie];
            golfie = tangon.bind(oscard)(golfie);
            sizing = golfie.HappeningNowCardsDisabled;
            golfie = sizing.useSetting;
            golfie = golfie.bind(sizing)();
            var _closure2_slot8 = golfie;
            zuuluu = zuuluu[kiloes];
            kiloes = tangon.bind(oscard)(zuuluu);
            oscard = kiloes.useStateFromStores;
            zuuluu = _closure1_slot8;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot8;
                entity = michal.getFriendCount;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = oscard.bind(kiloes)(tangon, zuuluu);
            var _closure2_slot9 = oscard;
            tangon = _closure1_slot4;
            zuuluu = tangon.useRef;
            michal = -1;
            michal = zuuluu.bind(tangon)(michal);
            var _closure2_slot10 = michal;
            zuuluu = tangon.useMemo;
            michal = new Array(10);
            michal[0] = backup;
            michal[1] = foxtra;
            michal[2] = romeon;
            michal[3] = yankee;
            michal[4] = offset;
            michal[5] = verify;
            michal[6] = option;
            michal[7] = golfie;
            michal[8] = oscard;
            michal[9] = report;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot10;
                    michal = entity.current;
                    entity = -1;
                    if(!(entity !== michal)) { _fun00006_ip = 56; continue _fun00005 }
 22:
                    entity = _closure2_slot0;
                    if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 29:
                    entity = _closure2_slot1;
 33:
                    if(!entity) { _fun00006_ip = 68; continue _fun00005 }
 36:
                    michal = _closure2_slot10;
                    entity = michal.current;
                    entity = entity + 1;
                    michal['current'] = entity;
                    _fun00006_ip = 68; continue _fun00005;
 56:
                    michal = _closure2_slot10;
                    entity = 0;
                    michal['current'] = entity;
 68:
                    entity = _closure2_slot2;
                    michal = entity.length;
                    entity = _closure2_slot3;
                    entity = entity.length;
                    entity = michal + entity;
                    verify = 0;
                    report = entity > verify;
                    entity = _closure2_slot7;
                    tangon = entity > verify;
                    if(!tangon) { _fun00006_ip = 149; continue _fun00005 }
 107:
                    entity = _closure2_slot0;
                    if(!entity) { _fun00006_ip = 121; continue _fun00005 }
 114:
                    entity = _closure2_slot1;
                    if(entity) { _fun00006_ip = 149; continue _fun00005 }
 121:
                    entity = global;
                    golfie = entity.Math;
                    zuuluu = golfie.min;
                    michal = _closure2_slot7;
                    entity = 5;
                    zuuluu = zuuluu.bind(golfie)(michal, entity);
                    _fun00006_ip = 167; continue _fun00005;
 149:
                    if(report) { _fun00006_ip = 162; continue _fun00005 }
 152:
                    michal = _closure2_slot0;
                    entity = 15;
                    if(!michal) { _fun00006_ip = 164; continue _fun00005 }
 162:
                    entity = 0;
 164:
                    zuuluu = entity;
 167:
                    michal = new Array(0);
                    golfie = michal.push;
                    option = _closure2_slot4;
                    entity = 0;
                    if(!option) { _fun00006_ip = 188; continue _fun00005 }
 185:
                    entity = 1;
 188:
                    entity = golfie.bind(michal)(entity);
                    golfie = michal.push;
                    entity = _closure2_slot2;
                    entity = entity.length;
                    entity = golfie.bind(michal)(entity);
                    golfie = michal.push;
                    entity = _closure2_slot3;
                    entity = entity.length;
                    entity = golfie.bind(michal)(entity);
                    golfie = michal.push;
                    entity = 0;
                    if(!tangon) { _fun00006_ip = 244; continue _fun00005 }
 241:
                    entity = 1;
 244:
                    entity = golfie.bind(michal)(entity);
                    golfie = michal.push;
                    entity = 0;
                    if(!tangon) { _fun00006_ip = 286; continue _fun00005 }
 259:
                    option = _closure2_slot0;
                    entity = 0;
                    if(!option) { _fun00006_ip = 286; continue _fun00005 }
 268:
                    option = _closure2_slot1;
                    entity = 0;
                    if(!option) { _fun00006_ip = 286; continue _fun00005 }
 277:
                    option = _closure2_slot6;
                    entity = option.length;
 286:
                    entity = golfie.bind(michal)(entity);
                    entity = michal.push;
                    entity = entity.bind(michal)(zuuluu);
                    if(report) { _fun00006_ip = 324; continue _fun00005 }
 304:
                    zuuluu = null;
                    if(!tangon) { _fun00006_ip = 322; continue _fun00005 }
 309:
                    entity = _closure1_slot10;
                    zuuluu = entity.EmptyState;
 322:
                    _fun00006_ip = 349; continue _fun00005;
 324:
                    option = _closure2_slot8;
                    entity = null;
                    if(option) { _fun00006_ip = 346; continue _fun00005 }
 333:
                    option = _closure1_slot10;
                    entity = option.HappeningNow;
 346:
                    zuuluu = entity;
 349:
                    entity = {};
                    option = _closure2_slot3;
                    entity['channels'] = option;
                    option = _closure2_slot2;
                    entity['channelFavorites'] = option;
                    option = _closure2_slot10;
                    option = option.current;
                    option = option > verify;
                    golfie = null;
                    if(!option) { _fun00006_ip = 418; continue _fun00005 }
 387:
                    option = _closure2_slot10;
                    offset = option.current;
                    option = global;
                    option = option.HermesInternal;
                    verify = option.concat;
                    option = '';
                    golfie = verify.bind(option)(offset);
 418:
                    entity['dataKey'] = golfie;
                    golfie = !report;
                    if(report) { _fun00006_ip = 433; continue _fun00005 }
 429:
                    golfie = _closure2_slot0;
 433:
                    if(!golfie) { _fun00006_ip = 439; continue _fun00005 }
 436:
                    golfie = !tangon;
 439:
                    entity['showFullscreenEmptyState'] = golfie;
                    golfie = _closure2_slot5;
                    entity['setAddedFriendSuggestions'] = golfie;
                    golfie = _closure2_slot6;
                    entity['friendSuggestions'] = golfie;
                    entity['renderHeader'] = zuuluu;
                    zuuluu = _closure2_slot0;
                    if(!zuuluu) { _fun00006_ip = 485; continue _fun00005 }
 474:
                    golfie = _closure2_slot9;
                    oscard = 4;
                    zuuluu = golfie < oscard;
 485:
                    if(!zuuluu) { _fun00006_ip = 491; continue _fun00005 }
 488:
                    zuuluu = report;
 491:
                    if(zuuluu) { _fun00006_ip = 497; continue _fun00005 }
 494:
                    zuuluu = tangon;
 497:
                    entity['renderFooter'] = zuuluu;
                    entity['sections'] = michal;
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        }
    };
    zuuluu['default'] = report;
    zuuluu['MessagesDataSections'] = tangon;
    zuuluu['MessagesDataHeader'] = michal;
    return entity;
})();