// app/modules/user_settings/native/BlockedUserRowV2.tsx
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
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = function(argFoo) { // Original name: handleUnblockUser
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.unblockUser;
        zulu = {};
        mike = 'blocked-users-list-mobile-v2';
        zulu['location'] = mike;
        mike = argFoo;
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    var _closure1_slot5 = tango;
    tango = function(argFoo) { // Original name: BlockedUserRow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.userRecord;
            var _closure2_slot0 = verify;
            golf = _closure1_slot1;
            romeo = _closure1_slot2;
            entity = 4;
            entity = romeo[entity];
            tango = undefined;
            entity = golf.bind(tango)(entity);
            entity = entity.bind(tango)();
            entity = entity.analyticsLocations;
            var _closure2_slot1 = entity;
            zulu = _closure1_slot4;
            yankee = _closure1_slot0;
            entity = 5;
            entity = romeo[entity];
            entity = yankee.bind(tango)(entity);
            mike = entity.TableRow;
            entity = {'icon': null, 'label': null, 'subLabel': null, 'labelLineClamp': 1, 'subLabelLineClamp': 1, 'accessibilityRole': 'button'};
            offset = 6;
            oscar = romeo[offset];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            oscar['user'] = verify;
            oscar['guildId'] = tango;
            offset = romeo[offset];
            offset = yankee.bind(tango)(offset);
            offset = offset.AvatarSizes;
            offset = offset.REFRESH_MEDIUM_32;
            oscar['size'] = offset;
            oscar = zulu.bind(tango)(golf, oscar);
            entity['icon'] = oscar;
            golf = null;
            oscar = golf != verify;
            if(!oscar) { _fun00002_ip = 176; continue _fun00001 }
 158:
            offset = verify.globalName;
            if(!(golf == offset)) { _fun00002_ip = 173; continue _fun00001 }
 168:
            offset = verify.username;
 173:
            oscar = offset;
 176:
            entity['label'] = oscar;
            offset = golf == verify;
            oscar = undefined;
            if(offset) { _fun00002_ip = 197; continue _fun00001 }
 191:
            oscar = verify.globalName;
 197:
            offset = golf != oscar;
            oscar = undefined;
            if(!offset) { _fun00002_ip = 223; continue _fun00001 }
 206:
            offset = golf == verify;
            golf = undefined;
            if(offset) { _fun00002_ip = 220; continue _fun00001 }
 215:
            golf = verify.username;
 220:
            oscar = golf;
 223:
            entity['subLabel'] = oscar;
            golf = {};
            oscar = 'unblock';
            golf['name'] = oscar;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            verify = 7;
            oscar = foxtrot[verify];
            oscar = romeo.bind(tango)(oscar);
            yankee = oscar.intl;
            offset = yankee.string;
            oscar = foxtrot[verify];
            oscar = romeo.bind(tango)(oscar);
            oscar = oscar.t;
            oscar = oscar.XyHpKC;
            oscar = offset.bind(yankee)(oscar);
            golf['label'] = oscar;
            oscar = new Array(1);
            oscar[0] = golf;
            entity['accessibilityActions'] = oscar;
            oscar = function(argFoo) { // Original name: onAccessibilityAction
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    mike = entity.actionName;
                    entity = 'unblock';
                    if(!(entity !== mike)) { _fun00004_ip = 26; continue _fun00003 }
 22:
                    entity = undefined;
                    return entity;
 26:
                    zulu = _closure1_slot5;
                    entity = _closure2_slot0;
                    mike = entity.id;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            entity['onAccessibilityAction'] = oscar;
            oscar = function() { // Original name: onPress
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 8;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                report = _closure2_slot0;
                report = report.id;
                entity['userId'] = report;
                tango = _closure2_slot1;
                entity['sourceAnalyticsLocations'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity['onPress'] = oscar;
            golf = _closure1_slot4;
            report = 9;
            report = foxtrot[report];
            report = romeo.bind(tango)(report);
            oscar = report.Button;
            report = {'size': 'sm', 'variant': 'secondary'};
            offset = foxtrot[verify];
            offset = romeo.bind(tango)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtrot[verify];
            verify = romeo.bind(tango)(verify);
            verify = verify.t;
            verify = verify.PR/xU1;
            verify = offset.bind(yankee)(verify);
            report['text'] = verify;
            options = function() { // Original name: onPress
                zulu = _closure1_slot5;
                entity = _closure2_slot0;
                mike = entity.id;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            report['onPress'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['trailing'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/native/BlockedUserRowV2.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ConnectedBlockedUserRow
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            mike = mike.userId;
            var _closure2_slot0 = mike;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 10;
            zulu = report[zulu];
            report = undefined;
            oscar = tango.bind(report)(zulu);
            tango = oscar.useStateFromStores;
            golf = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = golf;
            entity = function() {
                zulu = _closure1_slot3;
                mike = zulu.getUser;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = tango.bind(oscar)(zulu, entity);
            entity = null;
            zulu = entity == oscar;
            if(zulu) { _fun00006_ip = 99; continue _fun00005 }
 78:
            tango = _closure1_slot4;
            zulu = _closure1_slot6;
            mike = {};
            mike['userRecord'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 99:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();