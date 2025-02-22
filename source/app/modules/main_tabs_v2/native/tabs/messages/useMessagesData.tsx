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
    yankee = 0;
    michal = option[yankee];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    offset = 1;
    oscard = option[offset];
    michal = argCor;
    michal = michal.bind(entity)(oscard);
    var _closure1_slot4 = michal;
    verify = 2;
    michal = option[verify];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    foxtra = 3;
    michal = option[foxtra];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot6 = michal;
    romeon = 4;
    michal = option[romeon];
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
    michal = 7;
    michal = option[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot10 = michal;
    tangon = {};
    tangon['IncomingRequests'] = yankee;
    michal = 'IncomingRequests';
    tangon[yankee] = michal;
    tangon['FavoriteChannels'] = offset;
    michal = 'FavoriteChannels';
    tangon[offset] = michal;
    tangon['Channels'] = verify;
    michal = 'Channels';
    tangon[verify] = michal;
    tangon['Separator'] = foxtra;
    michal = 'Separator';
    tangon[foxtra] = michal;
    tangon['SuggestedFriends'] = romeon;
    michal = 'SuggestedFriends';
    tangon[romeon] = michal;
    tangon['Placeholders'] = oscard;
    michal = 'Placeholders';
    tangon[oscard] = michal;
    michal = {};
    michal['HappeningNow'] = yankee;
    oscard = 'HappeningNow';
    michal[yankee] = oscard;
    michal['EmptyState'] = offset;
    oscard = 'EmptyState';
    michal[offset] = oscard;
    michal['QuickLauncher'] = verify;
    oscard = 'QuickLauncher';
    michal[verify] = oscard;
    var _closure1_slot11 = michal;
    oscard = 14;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function() { // Original name: useMessagesData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 8;
            tangon = offset[zuuluu];
            option = undefined;
            golfie = verify.bind(option)(tangon);
            oscard = golfie.useStateFromStoresObject;
            tangon = _closure1_slot8;
            report = new Array(2);
            report[0] = tangon;
            tangon = _closure1_slot5;
            report[1] = tangon;
            tangon = function() {
                entity = {};
                tangon = _closure1_slot8;
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
            tangon = oscard.bind(golfie)(report, tangon);
            sizing = tangon.connected;
            var _closure2_slot0 = sizing;
            kiloes = tangon.connectedToGateway;
            var _closure2_slot1 = kiloes;
            tangon = offset[zuuluu];
            golfie = verify.bind(option)(tangon);
            oscard = golfie.useStateFromStoresArray;
            tangon = _closure1_slot10;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                michal = _closure1_slot10;
                entity = michal.getSortedChannels;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = oscard.bind(golfie)(report, tangon);
            report = _closure1_slot3;
            tangon = 2;
            report = report.bind(option)(oscard, tangon);
            oscard = 0;
            backup = report[oscard];
            var _closure2_slot2 = backup;
            tangon = 1;
            foxtra = report[tangon];
            var _closure2_slot3 = foxtra;
            golfie = _closure1_slot1;
            report = 9;
            tangon = offset[report];
            yankee = golfie.bind(option)(tangon);
            golfie = yankee.useExperiment;
            tangon = {};
            romeon = 'DM List';
            tangon['location'] = romeon;
            tangon = golfie.bind(yankee)(tangon);
            yankee = tangon.showInDMs;
            tangon = tangon.removeItemAfterAck;
            golfie = offset[zuuluu];
            result = verify.bind(option)(golfie);
            output = result.useStateFromStoresArray;
            golfie = _closure1_slot6;
            romeon = new Array(1);
            romeon[0] = golfie;
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
                        oscard = 10;
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
            golfie = output.bind(result)(romeon, golfie);
            report = offset[report];
            offset = verify.bind(option)(report);
            verify = offset.useNumFriendRequestsForBadging;
            report = 'DMs';
            report = verify.bind(offset)(report);
            if(!yankee) { _fun00002_ip = 289; continue _fun00001 }
 280:
            golfie = golfie.length;
            yankee = golfie > oscard;
 289:
            if(!yankee) { _fun00002_ip = 305; continue _fun00001 }
 292:
            tangon = !tangon;
            if(tangon) { _fun00002_ip = 302; continue _fun00001 }
 298:
            tangon = report > oscard;
 302:
            yankee = tangon;
 305:
            var _closure2_slot4 = yankee;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 11;
            tangon = oscard[tangon];
            report = report.bind(option)(tangon);
            tangon = {};
            output = 'Messages Tab';
            tangon['location'] = output;
            oscard = sizing;
            if(!oscard) { _fun00002_ip = 350; continue _fun00001 }
 347:
            oscard = kiloes;
 350:
            tangon['isConnected'] = oscard;
            tangon = report.bind(option)(tangon);
            report = tangon.setAdded;
            var _closure2_slot5 = report;
            offset = tangon.friendSuggestions;
            var _closure2_slot6 = offset;
            romeon = tangon.numFriendSuggestions;
            var _closure2_slot7 = romeon;
            tangon = _closure1_slot0;
            result = _closure1_slot2;
            oscard = 12;
            oscard = result[oscard];
            oscard = tangon.bind(option)(oscard);
            golfie = oscard.HappeningNowCardsDisabled;
            oscard = golfie.useSetting;
            golfie = oscard.bind(golfie)();
            var _closure2_slot8 = golfie;
            oscard = result[zuuluu];
            update = tangon.bind(option)(oscard);
            echoed = update.useStateFromStores;
            oscard = _closure1_slot9;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                michal = _closure1_slot9;
                entity = michal.getFriendCount;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = echoed.bind(update)(verify, oscard);
            var _closure2_slot9 = oscard;
            zuuluu = result[zuuluu];
            update = tangon.bind(option)(zuuluu);
            echoed = update.useStateFromStores;
            zuuluu = _closure1_slot7;
            verify = new Array(1);
            verify[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot7;
                entity = entity.showPlayAgain;
                return entity;
            };
            verify = echoed.bind(update)(verify, zuuluu);
            var _closure2_slot10 = verify;
            zuuluu = 13;
            zuuluu = result[zuuluu];
            option = tangon.bind(option)(zuuluu);
            tangon = option.useIsQuickLauncherMobileEnabled;
            zuuluu = {};
            zuuluu['location'] = output;
            option = tangon.bind(option)(zuuluu);
            var _closure2_slot11 = option;
            tangon = _closure1_slot4;
            zuuluu = tangon.useRef;
            michal = -1;
            michal = zuuluu.bind(tangon)(michal);
            var _closure2_slot12 = michal;
            zuuluu = tangon.useMemo;
            michal = new Array(12);
            michal[0] = sizing;
            michal[1] = kiloes;
            michal[2] = backup;
            michal[3] = foxtra;
            michal[4] = romeon;
            michal[5] = yankee;
            michal[6] = offset;
            michal[7] = verify;
            michal[8] = option;
            michal[9] = golfie;
            michal[10] = oscard;
            michal[11] = report;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot12;
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
                    michal = _closure2_slot12;
                    entity = michal.current;
                    entity = entity + 1;
                    michal['current'] = entity;
                    _fun00006_ip = 68; continue _fun00005;
 56:
                    michal = _closure2_slot12;
                    entity = 0;
                    michal['current'] = entity;
 68:
                    entity = _closure2_slot2;
                    michal = entity.length;
                    entity = _closure2_slot3;
                    entity = entity.length;
                    entity = michal + entity;
                    option = 0;
                    report = entity > option;
                    entity = _closure2_slot7;
                    tangon = entity > option;
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
                    verify = _closure2_slot4;
                    entity = 0;
                    if(!verify) { _fun00006_ip = 188; continue _fun00005 }
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
                    verify = _closure2_slot0;
                    entity = 0;
                    if(!verify) { _fun00006_ip = 286; continue _fun00005 }
 268:
                    verify = _closure2_slot1;
                    entity = 0;
                    if(!verify) { _fun00006_ip = 286; continue _fun00005 }
 277:
                    verify = _closure2_slot6;
                    entity = verify.length;
 286:
                    entity = golfie.bind(michal)(entity);
                    entity = michal.push;
                    entity = entity.bind(michal)(zuuluu);
                    entity = _closure2_slot10;
                    if(!entity) { _fun00006_ip = 315; continue _fun00005 }
 308:
                    entity = _closure2_slot11;
                    if(entity) { _fun00006_ip = 365; continue _fun00005 }
 315:
                    if(report) { _fun00006_ip = 338; continue _fun00005 }
 318:
                    zuuluu = null;
                    if(!tangon) { _fun00006_ip = 336; continue _fun00005 }
 323:
                    golfie = _closure1_slot11;
                    zuuluu = golfie.EmptyState;
 336:
                    _fun00006_ip = 363; continue _fun00005;
 338:
                    golfie = _closure2_slot8;
                    entity = null;
                    if(golfie) { _fun00006_ip = 360; continue _fun00005 }
 347:
                    golfie = _closure1_slot11;
                    entity = golfie.HappeningNow;
 360:
                    zuuluu = entity;
 363:
                    _fun00006_ip = 378; continue _fun00005;
 365:
                    entity = _closure1_slot11;
                    zuuluu = entity.QuickLauncher;
 378:
                    entity = {};
                    golfie = _closure2_slot3;
                    entity['channels'] = golfie;
                    golfie = _closure2_slot2;
                    entity['channelFavorites'] = golfie;
                    golfie = _closure2_slot12;
                    golfie = golfie.current;
                    option = golfie > option;
                    golfie = null;
                    if(!option) { _fun00006_ip = 447; continue _fun00005 }
 416:
                    option = _closure2_slot12;
                    offset = option.current;
                    option = global;
                    option = option.HermesInternal;
                    verify = option.concat;
                    option = '';
                    golfie = verify.bind(option)(offset);
 447:
                    entity['dataKey'] = golfie;
                    golfie = !report;
                    if(report) { _fun00006_ip = 462; continue _fun00005 }
 458:
                    golfie = _closure2_slot0;
 462:
                    if(!golfie) { _fun00006_ip = 468; continue _fun00005 }
 465:
                    golfie = !tangon;
 468:
                    entity['showFullscreenEmptyState'] = golfie;
                    golfie = _closure2_slot5;
                    entity['setAddedFriendSuggestions'] = golfie;
                    golfie = _closure2_slot6;
                    entity['friendSuggestions'] = golfie;
                    entity['renderHeader'] = zuuluu;
                    zuuluu = _closure2_slot0;
                    if(!zuuluu) { _fun00006_ip = 514; continue _fun00005 }
 503:
                    golfie = _closure2_slot9;
                    oscard = 4;
                    zuuluu = golfie < oscard;
 514:
                    if(!zuuluu) { _fun00006_ip = 520; continue _fun00005 }
 517:
                    zuuluu = report;
 520:
                    if(zuuluu) { _fun00006_ip = 526; continue _fun00005 }
 523:
                    zuuluu = tangon;
 526:
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