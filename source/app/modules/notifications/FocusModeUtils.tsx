// app/modules/notifications/FocusModeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NotificationSettingsUpdateType;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot5 = golf;
    tango = tango.StatusTypes;
    var _closure1_slot6 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/notifications/FocusModeUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useFocusModeEnabled
        _fun86628: for(var _fun86628_ip = 0; ; ) switch(_fun86628_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 3;
            entity = tango[mike];
            golf = undefined;
            entity = zulu.bind(golf)(entity);
            report = entity.FocusMode;
            entity = report.useSetting;
            entity = entity.bind(report)();
            mike = tango[mike];
            mike = zulu.bind(golf)(mike);
            zulu = mike.FocusModeExpiresAtSetting;
            mike = zulu.useSetting;
            report = mike.bind(zulu)();
            if(!entity) { _fun86628_ip = 180; continue _fun86628 }
 69:
            mike = '0';
            mike = mike === report;
            if(mike) { _fun86628_ip = 177; continue _fun86628 }
 82:
            zulu = global;
            oscar = zulu.Date;
            tango = zulu.Number;
            options = tango.bind(golf)(report);
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            verify = report;
            tango = new verify[oscar](options, golf);
            report = tango instanceof Object ? tango : report;
            tango = report.getTime;
            tango = tango.bind(report)();
            zulu = zulu.Date;
            report = zulu.prototype;
            report = Object.create(report, {constructor: {value: zulu}});
            verify = report;
            zulu = new verify[zulu](options);
            report = zulu instanceof Object ? zulu : report;
            zulu = report.getTime;
            zulu = zulu.bind(report)();
            tango = tango - zulu;
            zulu = 0;
            mike = tango > zulu;
 177:
            entity = mike;
 180:
            return entity;
        }
    };
    zulu['useFocusModeEnabled'] = tango;
    tango = function() { // Original name: getFocusModeEnabled
        _fun86629: for(var _fun86629_ip = 0; ; ) switch(_fun86629_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 3;
            entity = tango[mike];
            oscar = undefined;
            entity = zulu.bind(oscar)(entity);
            report = entity.FocusMode;
            entity = report.getSetting;
            entity = entity.bind(report)();
            mike = tango[mike];
            mike = zulu.bind(oscar)(mike);
            zulu = mike.FocusModeExpiresAtSetting;
            mike = zulu.getSetting;
            tango = mike.bind(zulu)();
            if(!entity) { _fun86629_ip = 75; continue _fun86629 }
 69:
            mike = null;
            entity = mike != tango;
 75:
            if(!entity) { _fun86629_ip = 173; continue _fun86629 }
 78:
            mike = global;
            report = mike.Date;
            zulu = mike.Number;
            golf = zulu.bind(oscar)(tango);
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            options = tango;
            zulu = new options[report](golf, oscar);
            tango = zulu instanceof Object ? zulu : tango;
            zulu = tango.getTime;
            zulu = zulu.bind(tango)();
            mike = mike.Date;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            options = tango;
            mike = new options[mike](golf);
            tango = mike instanceof Object ? mike : tango;
            mike = tango.getTime;
            mike = mike.bind(tango)();
            zulu = zulu - mike;
            mike = 0;
            entity = zulu > mike;
 173:
            return entity;
        }
    };
    zulu['getFocusModeEnabled'] = tango;
    mike = function(argFoo, argBar) { // Original name: setFocusMode
        _fun86630: for(var _fun86630_ip = 0; ; ) switch(_fun86630_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            var _closure2_slot0 = zulu;
            var _closure2_slot1 = tango;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            entity = 3;
            mike = options[entity];
            entity = undefined;
            mike = golf.bind(entity)(mike);
            verify = mike.FocusMode;
            mike = verify.getSetting;
            offset = mike.bind(verify)();
            mike = 4;
            verify = options[mike];
            verify = golf.bind(entity)(verify);
            romeo = verify.PreloadedUserSettingsActionCreators;
            yankee = romeo.updateAsync;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.UserSettingsDelay;
            verify = mike.INFREQUENT_USER_ACTION;
            golf = 'notifications';
            mike = function(argFoo) {
                _fun86631: for(var _fun86631_ip = 0; ; ) switch(_fun86631_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    mike = tango.bind(entity)(mike);
                    golf = mike.BoolValue;
                    oscar = golf.create;
                    mike = {};
                    tango = _closure2_slot0;
                    mike['value'] = tango;
                    mike = oscar.bind(golf)(mike);
                    zulu['quietMode'] = mike;
                    oscar = '0';
                    mike = oscar;
                    if(!tango) { _fun86631_ip = 136; continue _fun86631 }
 75:
                    golf = _closure2_slot1;
                    tango = null;
                    tango = tango != golf;
                    mike = oscar;
                    if(!tango) { _fun86631_ip = 136; continue _fun86631 }
 91:
                    tango = global;
                    golf = tango.Date;
                    oscar = golf.now;
                    oscar = oscar.bind(golf)();
                    report = _closure2_slot1;
                    oscar = oscar + report;
                    tango = tango.HermesInternal;
                    report = tango.concat;
                    tango = '';
                    mike = report.bind(tango)(oscar);
 136:
                    zulu['focusModeExpiresAtMs'] = mike;
                    return entity;
                }
            };
            mike = yankee.bind(romeo)(golf, mike, verify);
            golf = _closure1_slot1;
            mike = 6;
            mike = options[mike];
            verify = golf.bind(entity)(mike);
            options = verify.track;
            mike = _closure1_slot5;
            golf = mike.NOTIFICATION_SETTINGS_UPDATED;
            mike = {};
            yankee = _closure1_slot4;
            yankee = yankee.ACCOUNT;
            mike['update_type'] = yankee;
            mike['quiet_mode_enabled'] = zulu;
            mike['quiet_mode_enabled_old'] = offset;
            mike = options.bind(verify)(golf, mike);
            golf = _closure1_slot3;
            mike = golf.getStatus;
            golf = mike.bind(golf)();
            mike = _closure1_slot6;
            mike = mike.DND;
            mike = golf === mike;
            if(!mike) { _fun86630_ip = 218; continue _fun86630 }
 215:
            mike = zulu;
 218:
            if(!mike) { _fun86630_ip = 227; continue _fun86630 }
 221:
            zulu = null;
            mike = zulu == tango;
 227:
            if(!mike) { _fun86630_ip = 479; continue _fun86630 }
 233:
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 7;
            mike = offset[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.show;
            mike = {};
            verify = _closure1_slot0;
            oscar = 8;
            golf = offset[oscar];
            golf = verify.bind(entity)(golf);
            yankee = golf.intl;
            options = yankee.string;
            golf = offset[oscar];
            golf = verify.bind(entity)(golf);
            golf = golf.t;
            golf = golf.B+cbLS;
            golf = options.bind(yankee)(golf);
            mike['title'] = golf;
            golf = offset[oscar];
            golf = verify.bind(entity)(golf);
            yankee = golf.intl;
            options = yankee.string;
            golf = offset[oscar];
            golf = verify.bind(entity)(golf);
            golf = golf.t;
            golf = golf.CYVgLC;
            golf = options.bind(yankee)(golf);
            mike['body'] = golf;
            golf = offset[oscar];
            golf = verify.bind(entity)(golf);
            yankee = golf.intl;
            options = yankee.string;
            golf = offset[oscar];
            golf = verify.bind(entity)(golf);
            golf = golf.t;
            golf = golf.f3Pet7;
            golf = options.bind(yankee)(golf);
            mike['cancelText'] = golf;
            golf = offset[oscar];
            golf = verify.bind(entity)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(entity)(oscar);
            oscar = oscar.t;
            oscar = oscar.BddRzc;
            oscar = golf.bind(options)(oscar);
            mike['confirmText'] = oscar;
            report = function() { // Original name: onConfirm
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 9;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                mike = _closure1_slot6;
                mike = mike.ONLINE;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike['onConfirm'] = report;
            mike = zulu.bind(tango)(mike);
 479:
            return entity;
        }
    };
    zulu['setFocusMode'] = mike;
    return entity;
})();