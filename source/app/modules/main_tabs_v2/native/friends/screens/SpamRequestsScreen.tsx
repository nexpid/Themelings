// app/modules/main_tabs_v2/native/friends/screens/SpamRequestsScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UserRowModes;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RelationshipTypes;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot8 = tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/friends/screens/SpamRequestsScreen.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: SpamRequestsScreen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = entity.navigation;
            yankee = _closure1_slot1;
            verify = _closure1_slot2;
            tango = 6;
            report = verify[tango];
            tango = undefined;
            oscar = yankee.bind(tango)(report);
            report = 7;
            report = verify[report];
            report = yankee.bind(tango)(report);
            report = report.FRIEND_REQUESTS;
            report = oscar.bind(tango)(report);
            oscar = report.analyticsLocations;
            var _closure2_slot0 = oscar;
            options = _closure1_slot0;
            golf = 8;
            report = verify[golf];
            foxtrot = options.bind(tango)(report);
            romeo = foxtrot.useStateFromStores;
            report = _closure1_slot4;
            offset = new Array(1);
            offset[0] = report;
            report = function() {
                mike = _closure1_slot4;
                entity = mike.getRelationships;
                entity = entity.bind(mike)();
                return entity;
            };
            romeo = romeo.bind(foxtrot)(offset, report);
            report = 9;
            report = verify[report];
            offset = options.bind(tango)(report);
            report = offset.getPendingRelationshipIds;
            report = report.bind(offset)(romeo);
            report = report.spamIds;
            var _closure2_slot1 = report;
            offset = 10;
            offset = verify[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            romeo = 11;
            romeo = verify[romeo];
            romeo = options.bind(tango)(romeo);
            romeo = romeo.ImpressionNames;
            romeo = romeo.FRIEND_REQUESTS_SPAM_INBOX;
            offset['name'] = romeo;
            offset = yankee.bind(tango)(offset);
            golf = verify[golf];
            offset = options.bind(tango)(golf);
            verify = offset.useStateFromStores;
            golf = _closure1_slot5;
            options = new Array(1);
            options[0] = golf;
            golf = new Array(1);
            golf[0] = report;
            report = function() {
                tango = _closure2_slot1;
                zulu = tango.map;
                mike = function(argFoo) {
                    zulu = _closure1_slot5;
                    mike = zulu.getUser;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.filter;
                entity = function(argFoo) {
                    mike = null;
                    entity = argFoo;
                    entity = mike != entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = verify.bind(offset)(options, report, golf);
            var _closure2_slot2 = report;
            verify = _closure1_slot3;
            options = verify.useCallback;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function(argFoo) {
                tango = argFoo;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = {};
                report = tango.id;
                mike['userId'] = report;
                mike['localUser'] = tango;
                tango = _closure2_slot0;
                mike['sourceAnalyticsLocations'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            offset = options.bind(verify)(oscar, golf);
            var _closure2_slot3 = offset;
            options = verify.useCallback;
            golf = function() {
                entity = undefined;
                return entity;
            };
            oscar = new Array(0);
            oscar = options.bind(verify)(golf, oscar);
            options = verify.useCallback;
            golf = new Array(2);
            golf[0] = offset;
            golf[1] = report;
            mike = function(argFoo) {
                tango = argFoo;
                entity = {};
                mike = 'user';
                entity['type'] = mike;
                mike = {};
                zulu = _closure1_slot7;
                zulu = zulu.PENDING_INCOMING;
                mike['type'] = zulu;
                zulu = _closure2_slot2;
                golf = zulu[tango];
                mike['user'] = golf;
                oscar = _closure2_slot3;
                mike['onPress'] = oscar;
                report = _closure1_slot6;
                report = report.ACTIONS;
                mike['mode'] = report;
                report = 0;
                report = report === tango;
                mike['start'] = report;
                report = zulu.length;
                zulu = 1;
                zulu = report - zulu;
                zulu = tango === zulu;
                mike['end'] = zulu;
                entity['props'] = mike;
                return entity;
            };
            golf = options.bind(verify)(mike, golf);
            options = report.length;
            mike = 0;
            if(!(mike === options)) { _fun00002_ip = 356; continue _fun00001 }
 344:
            mike = zulu.goBack;
            mike = mike.bind(zulu)();
            return tango;
 356:
            zulu = _closure1_slot8;
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 13;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.UsersFastList;
            entity = {};
            entity['getItemProps'] = golf;
            entity['getSectionProps'] = oscar;
            oscar = report.length;
            report = new Array(1);
            report[0] = oscar;
            entity['sections'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();