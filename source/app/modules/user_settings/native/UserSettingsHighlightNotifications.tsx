// app/modules/user_settings/native/UserSettingsHighlightNotifications.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: Row
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            yankee = mike.guildId;
            var _closure2_slot0 = yankee;
            verify = mike.isStart;
            options = mike.isEnd;
            report = _closure1_slot3;
            tango = report.useCallback;
            zulu = new Array(1);
            zulu[0] = yankee;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = argFoo;
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 6;
                    zulu = zulu[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.updateGuildNotificationSettings;
                    tango = _closure2_slot0;
                    zulu = {};
                    verify = _closure1_slot7;
                    if(mike) { _fun00004_ip = 58; continue _fun00003 }
 50:
                    options = verify.DISABLED;
                    _fun00004_ip = 64; continue _fun00003;
 58:
                    options = verify.ENABLED;
 64:
                    zulu['notify_highlights'] = options;
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    golf = 7;
                    golf = verify[golf];
                    golf = options.bind(entity)(golf);
                    options = golf.NotificationLabel;
                    golf = options.highlights;
                    mike = !mike;
                    mike = golf.bind(options)(mike);
                    mike = report.bind(oscar)(tango, zulu, mike);
                    return entity;
                }
            };
            offset = tango.bind(report)(mike, zulu);
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 8;
            mike = tango[mike];
            report = undefined;
            golf = zulu.bind(report)(mike);
            tango = golf.useStateFromStoresObject;
            mike = _closure1_slot6;
            zulu = new Array(2);
            zulu[0] = mike;
            mike = _closure1_slot4;
            zulu[1] = mike;
            mike = new Array(1);
            mike[0] = yankee;
            entity = function() {
                entity = {};
                report = _closure1_slot4;
                zulu = report.getGuild;
                tango = _closure2_slot0;
                zulu = zulu.bind(report)(tango);
                entity['guild'] = zulu;
                report = _closure1_slot6;
                zulu = report.isMuted;
                zulu = zulu.bind(report)(tango);
                entity['muted'] = zulu;
                zulu = _closure1_slot6;
                mike = zulu.getNotifyHighlights;
                mike = mike.bind(zulu)(tango);
                entity['notifyHighlights'] = mike;
                return entity;
            };
            entity = tango.bind(golf)(zulu, entity, mike);
            golf = entity.guild;
            mike = entity.muted;
            tango = entity.notifyHighlights;
            entity = null;
            yankee = entity == golf;
            zulu = undefined;
            if(yankee) { _fun00002_ip = 162; continue _fun00001 }
 157:
            zulu = golf.name;
 162:
            if(!(entity != zulu)) { _fun00002_ip = 307; continue _fun00001 }
 169:
            foxtrot = golf.name;
            if(mike) { _fun00002_ip = 191; continue _fun00001 }
 177:
            zulu = _closure1_slot7;
            zulu = zulu.DISABLED;
            mike = tango === zulu;
 191:
            yankee = !mike;
            tango = _closure1_slot8;
            zulu = _closure1_slot1;
            backup = _closure1_slot2;
            mike = 9;
            mike = backup[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike['guild'] = golf;
            romeo = tango.bind(report)(zulu, mike);
            tango = _closure1_slot8;
            zulu = _closure1_slot9;
            mike = {};
            golf = _closure1_slot0;
            oscar = 10;
            oscar = backup[oscar];
            oscar = golf.bind(report)(oscar);
            golf = oscar.TableSwitchRow;
            oscar = {};
            oscar['label'] = foxtrot;
            oscar['icon'] = romeo;
            oscar['value'] = yankee;
            oscar['onValueChange'] = offset;
            oscar['start'] = verify;
            oscar['end'] = options;
            oscar = tango.bind(report)(golf, oscar);
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 307:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.HighlightSettings;
    var _closure1_slot7 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot8 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot9 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_settings/native/UserSettingsHighlightNotifications.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: UserSettingsHighlightNotifications
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            report = undefined;
            golf = tango.bind(report)(entity);
            oscar = golf.useStateFromStoresArray;
            entity = _closure1_slot5;
            tango = new Array(1);
            tango[0] = entity;
            entity = function() {
                mike = _closure1_slot5;
                entity = mike.getFlattenedGuildIds;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = oscar.bind(golf)(tango, entity);
            var _closure2_slot0 = entity;
            golf = _closure1_slot3;
            oscar = golf.useMemo;
            tango = new Array(1);
            tango[0] = entity;
            zulu = function() {
                zulu = _closure2_slot0;
                mike = zulu.map;
                entity = function(argFoo, argBar) {
                    report = argFoo;
                    oscar = argBar;
                    tango = _closure1_slot8;
                    zulu = _closure1_slot10;
                    mike = {};
                    mike['guildId'] = report;
                    entity = 0;
                    entity = entity === oscar;
                    mike['isStart'] = entity;
                    entity = _closure2_slot0;
                    golf = entity.length;
                    entity = 1;
                    entity = golf - entity;
                    entity = oscar === entity;
                    mike['isEnd'] = entity;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike, report);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            oscar = oscar.bind(golf)(zulu, tango);
            tango = entity.length;
            zulu = 0;
            entity = null;
            if(!(zulu !== tango)) { _fun00006_ip = 147; continue _fun00005 }
 105:
            tango = _closure1_slot8;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 11;
            mike = golf[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.Form;
            mike = {};
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 147:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();