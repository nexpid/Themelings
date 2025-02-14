// app/modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    tango = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = options;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, mike);
    yankee = 0;
    mike = options[yankee];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    offset = 1;
    oscar = options[offset];
    mike = argCorge;
    mike = mike.bind(entity)(oscar);
    var _closure1_slot4 = mike;
    verify = 2;
    mike = options[verify];
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    foxtrot = 3;
    mike = options[foxtrot];
    mike = tango.bind(entity)(mike);
    var _closure1_slot6 = mike;
    romeo = 4;
    mike = options[romeo];
    mike = tango.bind(entity)(mike);
    var _closure1_slot7 = mike;
    oscar = 5;
    mike = options[oscar];
    mike = tango.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = options[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot9 = mike;
    tango = {};
    tango['IncomingRequests'] = yankee;
    mike = 'IncomingRequests';
    tango[yankee] = mike;
    tango['FavoriteChannels'] = offset;
    mike = 'FavoriteChannels';
    tango[offset] = mike;
    tango['Channels'] = verify;
    mike = 'Channels';
    tango[verify] = mike;
    tango['Separator'] = foxtrot;
    mike = 'Separator';
    tango[foxtrot] = mike;
    tango['SuggestedFriends'] = romeo;
    mike = 'SuggestedFriends';
    tango[romeo] = mike;
    tango['Placeholders'] = oscar;
    mike = 'Placeholders';
    tango[oscar] = mike;
    mike = {};
    mike['HappeningNow'] = yankee;
    oscar = 'HappeningNow';
    mike[yankee] = oscar;
    mike['EmptyState'] = offset;
    oscar = 'EmptyState';
    mike[offset] = oscar;
    mike['QuickLauncher'] = verify;
    oscar = 'QuickLauncher';
    mike[verify] = oscar;
    var _closure1_slot10 = mike;
    oscar = 14;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/main_tabs_v2/native/tabs/messages/useMessagesData.tsx';
    oscar = golf.bind(options)(oscar);
    report = function() { // Original name: useMessagesData
        _fun114798: for(var _fun114798_ip = 0; ; ) switch(_fun114798_ip) {
 0:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 7;
            tango = offset[zulu];
            options = undefined;
            golf = verify.bind(options)(tango);
            oscar = golf.useStateFromStoresObject;
            tango = _closure1_slot7;
            report = new Array(2);
            report[0] = tango;
            tango = _closure1_slot5;
            report[1] = tango;
            tango = function() {
                entity = {};
                tango = _closure1_slot7;
                zulu = tango.getSessionId;
                tango = zulu.bind(tango)();
                zulu = null;
                zulu = zulu != tango;
                entity['connected'] = zulu;
                zulu = _closure1_slot5;
                mike = zulu.isConnected;
                mike = mike.bind(zulu)();
                entity['connectedToGateway'] = mike;
                return entity;
            };
            tango = oscar.bind(golf)(report, tango);
            sizing = tango.connected;
            var _closure2_slot0 = sizing;
            kilo = tango.connectedToGateway;
            var _closure2_slot1 = kilo;
            tango = offset[zulu];
            golf = verify.bind(options)(tango);
            oscar = golf.useStateFromStoresArray;
            tango = _closure1_slot9;
            report = new Array(1);
            report[0] = tango;
            tango = function() {
                mike = _closure1_slot9;
                entity = mike.getSortedChannels;
                entity = entity.bind(mike)();
                return entity;
            };
            oscar = oscar.bind(golf)(report, tango);
            report = _closure1_slot3;
            tango = 2;
            report = report.bind(options)(oscar, tango);
            oscar = 0;
            backup = report[oscar];
            var _closure2_slot2 = backup;
            tango = 1;
            foxtrot = report[tango];
            var _closure2_slot3 = foxtrot;
            golf = _closure1_slot1;
            report = 8;
            tango = offset[report];
            yankee = golf.bind(options)(tango);
            golf = yankee.useExperiment;
            tango = {};
            romeo = 'DM List';
            tango['location'] = romeo;
            tango = golf.bind(yankee)(tango);
            yankee = tango.showInDMs;
            tango = tango.removeItemAfterAck;
            golf = offset[zulu];
            result = verify.bind(options)(golf);
            output = result.useStateFromStoresArray;
            golf = _closure1_slot6;
            romeo = new Array(1);
            romeo[0] = golf;
            golf = function() {
                entity = _closure1_slot6;
                zulu = entity.localItems;
                mike = zulu.filter;
                entity = function(argFoo) {
                    _fun114802: for(var _fun114802_ip = 0; ; ) switch(_fun114802_ip) {
 0:
                        zulu = argFoo;
                        tango = zulu.type;
                        golf = _closure1_slot0;
                        entity = _closure1_slot2;
                        oscar = 9;
                        entity = entity[oscar];
                        report = undefined;
                        entity = golf.bind(report)(entity);
                        entity = entity.NotificationCenterLocalItems;
                        entity = entity.INCOMING_FRIEND_REQUESTS;
                        entity = tango === entity;
                        if(entity) { _fun114802_ip = 90; continue _fun114802 }
 52:
                        zulu = zulu.type;
                        tango = _closure1_slot0;
                        mike = _closure1_slot2;
                        mike = mike[oscar];
                        mike = tango.bind(report)(mike);
                        mike = mike.NotificationCenterLocalItems;
                        mike = mike.INCOMING_GAME_FRIEND_REQUESTS;
                        entity = zulu === mike;
 90:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = output.bind(result)(romeo, golf);
            report = offset[report];
            offset = verify.bind(options)(report);
            verify = offset.useNumFriendRequestsForBadging;
            report = 'DMs';
            report = verify.bind(offset)(report);
            if(!yankee) { _fun114798_ip = 289; continue _fun114798 }
 280:
            golf = golf.length;
            yankee = golf > oscar;
 289:
            if(!yankee) { _fun114798_ip = 305; continue _fun114798 }
 292:
            tango = !tango;
            if(tango) { _fun114798_ip = 302; continue _fun114798 }
 298:
            tango = report > oscar;
 302:
            yankee = tango;
 305:
            var _closure2_slot4 = yankee;
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 10;
            tango = oscar[tango];
            report = report.bind(options)(tango);
            tango = {};
            output = 'Messages Tab';
            tango['location'] = output;
            oscar = sizing;
            if(!oscar) { _fun114798_ip = 350; continue _fun114798 }
 347:
            oscar = kilo;
 350:
            tango['isConnected'] = oscar;
            tango = report.bind(options)(tango);
            report = tango.setAdded;
            var _closure2_slot5 = report;
            offset = tango.friendSuggestions;
            var _closure2_slot6 = offset;
            romeo = tango.numFriendSuggestions;
            var _closure2_slot7 = romeo;
            tango = _closure1_slot0;
            result = _closure1_slot2;
            oscar = 11;
            oscar = result[oscar];
            oscar = tango.bind(options)(oscar);
            golf = oscar.HappeningNowCardsDisabled;
            oscar = golf.useSetting;
            golf = oscar.bind(golf)();
            var _closure2_slot8 = golf;
            zulu = result[zulu];
            echo = tango.bind(options)(zulu);
            verify = echo.useStateFromStores;
            zulu = _closure1_slot8;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = function() {
                mike = _closure1_slot8;
                entity = mike.getFriendCount;
                entity = entity.bind(mike)();
                return entity;
            };
            oscar = verify.bind(echo)(oscar, zulu);
            var _closure2_slot9 = oscar;
            zulu = 12;
            zulu = result[zulu];
            verify = tango.bind(options)(zulu);
            zulu = verify.useShouldShowQuickLaunchRow;
            verify = zulu.bind(verify)();
            var _closure2_slot10 = verify;
            zulu = 13;
            zulu = result[zulu];
            options = tango.bind(options)(zulu);
            tango = options.useIsQuickLauncherMobileEnabled;
            zulu = {};
            zulu['location'] = output;
            options = tango.bind(options)(zulu);
            var _closure2_slot11 = options;
            tango = _closure1_slot4;
            zulu = tango.useRef;
            mike = -1;
            mike = zulu.bind(tango)(mike);
            var _closure2_slot12 = mike;
            zulu = tango.useMemo;
            mike = new Array(12);
            mike[0] = sizing;
            mike[1] = kilo;
            mike[2] = backup;
            mike[3] = foxtrot;
            mike[4] = romeo;
            mike[5] = yankee;
            mike[6] = offset;
            mike[7] = verify;
            mike[8] = options;
            mike[9] = golf;
            mike[10] = oscar;
            mike[11] = report;
            entity = function() {
                _fun114804: for(var _fun114804_ip = 0; ; ) switch(_fun114804_ip) {
 0:
                    entity = _closure2_slot12;
                    mike = entity.current;
                    entity = -1;
                    if(!(entity !== mike)) { _fun114804_ip = 56; continue _fun114804 }
 22:
                    entity = _closure2_slot0;
                    if(!entity) { _fun114804_ip = 33; continue _fun114804 }
 29:
                    entity = _closure2_slot1;
 33:
                    if(!entity) { _fun114804_ip = 68; continue _fun114804 }
 36:
                    mike = _closure2_slot12;
                    entity = mike.current;
                    entity = entity + 1;
                    mike['current'] = entity;
                    _fun114804_ip = 68; continue _fun114804;
 56:
                    mike = _closure2_slot12;
                    entity = 0;
                    mike['current'] = entity;
 68:
                    entity = _closure2_slot2;
                    mike = entity.length;
                    entity = _closure2_slot3;
                    entity = entity.length;
                    entity = mike + entity;
                    options = 0;
                    report = entity > options;
                    entity = _closure2_slot7;
                    tango = entity > options;
                    if(!tango) { _fun114804_ip = 149; continue _fun114804 }
 107:
                    entity = _closure2_slot0;
                    if(!entity) { _fun114804_ip = 121; continue _fun114804 }
 114:
                    entity = _closure2_slot1;
                    if(entity) { _fun114804_ip = 149; continue _fun114804 }
 121:
                    entity = global;
                    golf = entity.Math;
                    zulu = golf.min;
                    mike = _closure2_slot7;
                    entity = 5;
                    zulu = zulu.bind(golf)(mike, entity);
                    _fun114804_ip = 167; continue _fun114804;
 149:
                    if(report) { _fun114804_ip = 162; continue _fun114804 }
 152:
                    mike = _closure2_slot0;
                    entity = 15;
                    if(!mike) { _fun114804_ip = 164; continue _fun114804 }
 162:
                    entity = 0;
 164:
                    zulu = entity;
 167:
                    mike = new Array(0);
                    golf = mike.push;
                    verify = _closure2_slot4;
                    entity = 0;
                    if(!verify) { _fun114804_ip = 188; continue _fun114804 }
 185:
                    entity = 1;
 188:
                    entity = golf.bind(mike)(entity);
                    golf = mike.push;
                    entity = _closure2_slot2;
                    entity = entity.length;
                    entity = golf.bind(mike)(entity);
                    golf = mike.push;
                    entity = _closure2_slot3;
                    entity = entity.length;
                    entity = golf.bind(mike)(entity);
                    golf = mike.push;
                    entity = 0;
                    if(!tango) { _fun114804_ip = 244; continue _fun114804 }
 241:
                    entity = 1;
 244:
                    entity = golf.bind(mike)(entity);
                    golf = mike.push;
                    entity = 0;
                    if(!tango) { _fun114804_ip = 286; continue _fun114804 }
 259:
                    verify = _closure2_slot0;
                    entity = 0;
                    if(!verify) { _fun114804_ip = 286; continue _fun114804 }
 268:
                    verify = _closure2_slot1;
                    entity = 0;
                    if(!verify) { _fun114804_ip = 286; continue _fun114804 }
 277:
                    verify = _closure2_slot6;
                    entity = verify.length;
 286:
                    entity = golf.bind(mike)(entity);
                    entity = mike.push;
                    entity = entity.bind(mike)(zulu);
                    entity = _closure2_slot10;
                    if(!entity) { _fun114804_ip = 315; continue _fun114804 }
 308:
                    entity = _closure2_slot11;
                    if(entity) { _fun114804_ip = 365; continue _fun114804 }
 315:
                    if(report) { _fun114804_ip = 338; continue _fun114804 }
 318:
                    zulu = null;
                    if(!tango) { _fun114804_ip = 336; continue _fun114804 }
 323:
                    golf = _closure1_slot10;
                    zulu = golf.EmptyState;
 336:
                    _fun114804_ip = 363; continue _fun114804;
 338:
                    golf = _closure2_slot8;
                    entity = null;
                    if(golf) { _fun114804_ip = 360; continue _fun114804 }
 347:
                    golf = _closure1_slot10;
                    entity = golf.HappeningNow;
 360:
                    zulu = entity;
 363:
                    _fun114804_ip = 378; continue _fun114804;
 365:
                    entity = _closure1_slot10;
                    zulu = entity.QuickLauncher;
 378:
                    entity = {};
                    golf = _closure2_slot3;
                    entity['channels'] = golf;
                    golf = _closure2_slot2;
                    entity['channelFavorites'] = golf;
                    golf = _closure2_slot12;
                    golf = golf.current;
                    options = golf > options;
                    golf = null;
                    if(!options) { _fun114804_ip = 447; continue _fun114804 }
 416:
                    options = _closure2_slot12;
                    offset = options.current;
                    options = global;
                    options = options.HermesInternal;
                    verify = options.concat;
                    options = '';
                    golf = verify.bind(options)(offset);
 447:
                    entity['dataKey'] = golf;
                    golf = !report;
                    if(report) { _fun114804_ip = 462; continue _fun114804 }
 458:
                    golf = _closure2_slot0;
 462:
                    if(!golf) { _fun114804_ip = 468; continue _fun114804 }
 465:
                    golf = !tango;
 468:
                    entity['showFullscreenEmptyState'] = golf;
                    golf = _closure2_slot5;
                    entity['setAddedFriendSuggestions'] = golf;
                    golf = _closure2_slot6;
                    entity['friendSuggestions'] = golf;
                    entity['renderHeader'] = zulu;
                    zulu = _closure2_slot0;
                    if(!zulu) { _fun114804_ip = 514; continue _fun114804 }
 503:
                    golf = _closure2_slot9;
                    oscar = 4;
                    zulu = golf < oscar;
 514:
                    if(!zulu) { _fun114804_ip = 520; continue _fun114804 }
 517:
                    zulu = report;
 520:
                    if(zulu) { _fun114804_ip = 526; continue _fun114804 }
 523:
                    zulu = tango;
 526:
                    entity['renderFooter'] = zulu;
                    entity['sections'] = mike;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['default'] = report;
    zulu['MessagesDataSections'] = tango;
    zulu['MessagesDataHeader'] = mike;
    return entity;
})();