// app/modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.RelationshipTypes;
    var _closure1_slot7 = options;
    tango = tango.MAX_GROUP_DM_PARTICIPANTS;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot9 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: PrivateChannelUserList
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            sizing = entity.channelId;
            var _closure2_slot0 = sizing;
            options = entity.disableStickySections;
            golf = entity.listStyleOverride;
            oscar = entity.disableBottomSafeZone;
            report = entity.insetEnd;
            tango = undefined;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            zulu = 6;
            zulu = offset[zulu];
            zulu = verify.bind(tango)(zulu);
            zulu = zulu.bind(tango)();
            kilo = zulu.analyticsLocations;
            var _closure2_slot1 = kilo;
            yankee = _closure1_slot0;
            zulu = 7;
            romeo = offset[zulu];
            output = yankee.bind(tango)(romeo);
            backup = output.useStateFromStores;
            romeo = _closure1_slot4;
            foxtrot = new Array(1);
            foxtrot[0] = romeo;
            romeo = function() {
                zulu = _closure1_slot4;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = backup.bind(output)(foxtrot, romeo);
            var _closure2_slot2 = romeo;
            zulu = offset[zulu];
            output = yankee.bind(tango)(zulu);
            backup = output.useStateFromStoresArray;
            zulu = _closure1_slot6;
            foxtrot = new Array(1);
            foxtrot[0] = zulu;
            yankee = new Array(1);
            yankee[0] = romeo;
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot2;
                    entity = null;
                    if(!(entity == mike)) { _fun00004_ip = 22; continue _fun00003 }
 13:
                    entity = new Array(0);
                    _fun00004_ip = 163; continue _fun00003;
 22:
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 8;
                    tango = golf[tango];
                    oscar = undefined;
                    tango = report.bind(oscar)(tango);
                    zulu = _closure2_slot2;
                    zulu = zulu.recipients;
                    report = tango.bind(oscar)(zulu);
                    tango = report.map;
                    options = _closure1_slot6;
                    zulu = options.getUser;
                    report = tango.bind(report)(zulu);
                    tango = report.unshift;
                    zulu = options.getCurrentUser;
                    zulu = zulu.bind(options)();
                    tango = tango.bind(report)(zulu);
                    zulu = tango.filter;
                    report = _closure1_slot0;
                    mike = 9;
                    mike = golf[mike];
                    mike = report.bind(oscar)(mike);
                    mike = mike.isNotNullish;
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.sortBy;
                    mike = function(argFoo) {
                        entity = argFoo;
                        mike = entity.username;
                        entity = mike.toLowerCase;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.value;
                    entity = mike.bind(zulu)();
 163:
                    return entity;
                }
            };
            echo = backup.bind(output)(foxtrot, zulu, yankee);
            var _closure2_slot3 = echo;
            zulu = 10;
            zulu = offset[zulu];
            verify = verify.bind(tango)(zulu);
            zulu = {};
            zulu['channel'] = romeo;
            zulu = verify.bind(tango)(zulu);
            verify = zulu.listActionRenderer;
            offset = zulu.listActionHeight;
            zulu = null;
            foxtrot = zulu == romeo;
            yankee = undefined;
            if(foxtrot) { _fun00002_ip = 248; continue _fun00001 }
 238:
            foxtrot = romeo.isMultiUserDM;
            yankee = foxtrot.bind(romeo)();
 248:
            result = zulu != yankee;
            if(!result) { _fun00002_ip = 258; continue _fun00001 }
 255:
            result = yankee;
 258:
            _closure2_slot4 = result;
            output = undefined;
            if(!result) { _fun00002_ip = 285; continue _fun00001 }
 267:
            foxtrot = zulu == romeo;
            yankee = undefined;
            if(foxtrot) { _fun00002_ip = 282; continue _fun00001 }
 276:
            yankee = romeo.ownerId;
 282:
            output = yankee;
 285:
            _closure2_slot5 = output;
            foxtrot = zulu == romeo;
            yankee = undefined;
            if(foxtrot) { _fun00002_ip = 304; continue _fun00001 }
 298:
            yankee = romeo.userLimit;
 304:
            romeo = zulu != yankee;
            zulu = 0;
            if(!romeo) { _fun00002_ip = 316; continue _fun00001 }
 313:
            zulu = yankee;
 316:
            _closure2_slot6 = zulu;
            backup = _closure1_slot3;
            foxtrot = backup.useMemo;
            romeo = new Array(1);
            romeo[0] = echo;
            yankee = function() {
                entity = _closure2_slot3;
                mike = entity.length;
                entity = new Array(1);
                entity[0] = mike;
                return entity;
            };
            foxtrot = foxtrot.bind(backup)(yankee, romeo);
            romeo = backup.useCallback;
            yankee = new Array(3);
            yankee[0] = result;
            yankee[1] = echo;
            yankee[2] = zulu;
            zulu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    entity = 11;
                    mike = golf[entity];
                    tango = undefined;
                    mike = oscar.bind(tango)(mike);
                    zulu = mike.intl;
                    mike = zulu.string;
                    entity = golf[entity];
                    entity = oscar.bind(tango)(entity);
                    entity = entity.t;
                    entity = entity.9Oq93t;
                    options = mike.bind(zulu)(entity);
                    entity = _closure2_slot3;
                    golf = entity.length;
                    entity = global;
                    mike = entity.HermesInternal;
                    oscar = mike.concat;
                    zulu = '';
                    mike = ' — ';
                    mike = oscar.bind(zulu)(options, mike, golf);
                    oscar = _closure2_slot4;
                    zulu = mike;
                    if(!oscar) { _fun00006_ip = 156; continue _fun00005 }
 112:
                    golf = _closure2_slot6;
                    oscar = 0;
                    if(!(!(golf > oscar))) { _fun00006_ip = 128; continue _fun00005 }
 122:
                    report = _closure1_slot8;
                    _fun00006_ip = 132; continue _fun00005;
 128:
                    report = _closure2_slot6;
 132:
                    entity = entity.HermesInternal;
                    tango = entity.concat;
                    entity = '/';
                    entity = tango.bind(entity)(report);
                    zulu = mike + entity;
 156:
                    entity = {};
                    mike = 'section';
                    entity['type'] = mike;
                    mike = {};
                    mike['title'] = zulu;
                    entity['props'] = mike;
                    return entity;
                }
            };
            yankee = romeo.bind(backup)(zulu, yankee);
            romeo = backup.useCallback;
            zulu = new Array(5);
            zulu[0] = echo;
            zulu[1] = result;
            zulu[2] = output;
            zulu[3] = sizing;
            zulu[4] = kilo;
            mike = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = argBar;
                    entity = 0;
                    tango = entity === report;
                    mike = _closure2_slot3;
                    oscar = mike.length;
                    zulu = 1;
                    zulu = oscar - zulu;
                    zulu = report === zulu;
                    oscar = mike[report];
                    mike = null;
                    if(!(mike == oscar)) { _fun00008_ip = 68; continue _fun00007 }
 42:
                    mike = {};
                    report = 'placeholder';
                    mike['type'] = report;
                    report = {};
                    report['start'] = tango;
                    report['end'] = zulu;
                    mike['props'] = report;
                    return mike;
 68:
                    report = _closure2_slot4;
                    if(!report) { _fun00008_ip = 88; continue _fun00007 }
 75:
                    mike = oscar.id;
                    entity = _closure2_slot5;
                    report = mike === entity;
 88:
                    entity = {};
                    mike = 'user';
                    entity['type'] = mike;
                    mike = {};
                    options = _closure1_slot7;
                    options = options.NONE;
                    mike['type'] = options;
                    mike['user'] = oscar;
                    options = _closure1_slot5;
                    golf = options.getNickname;
                    oscar = oscar.id;
                    oscar = golf.bind(options)(oscar);
                    mike['nickname'] = oscar;
                    oscar = function(argFoo) { // Original name: onPress
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 12;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = {};
                        tango = argFoo;
                        tango = tango.id;
                        mike['userId'] = tango;
                        report = _closure2_slot1;
                        mike['sourceAnalyticsLocations'] = report;
                        tango = _closure2_slot0;
                        mike['channelId'] = tango;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike['onPress'] = oscar;
                    mike['isOwner'] = report;
                    mike['start'] = tango;
                    mike['end'] = zulu;
                    entity['props'] = mike;
                    return entity;
                }
            };
            romeo = romeo.bind(backup)(mike, zulu);
            zulu = _closure1_slot9;
            mike = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 13;
            entity = backup[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.UsersFastList;
            entity = {};
            entity['sections'] = foxtrot;
            entity['getItemProps'] = romeo;
            entity['getSectionProps'] = yankee;
            entity['listHeaderSize'] = offset;
            entity['renderListHeader'] = verify;
            entity['disableStickySections'] = options;
            options = true;
            entity['disableBackgroundOverlay'] = options;
            entity['listStyleOverride'] = golf;
            entity['disableBottomSafeZone'] = oscar;
            entity['insetEnd'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/user_list/PrivateChannelUserList.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();