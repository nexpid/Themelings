// app/actions/UserSettingsModalActionCreators.tsx
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
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.Endpoints;
    var _closure1_slot4 = golf;
    golf = mike.AnalyticEvents;
    var _closure1_slot5 = golf;
    golf = mike.DEVICE_TOKEN;
    var _closure1_slot6 = golf;
    golf = mike.DEVICE_VOIP_TOKEN;
    var _closure1_slot7 = golf;
    mike = mike.Layers;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot8 = golf;
    mike = mike.getDevicePushProvider;
    var _closure1_slot9 = mike;
    mike = {};
    golf = function() { // Original name: open
        _fun79901: for(var _fun79901_ip = 0; ; ) switch(_fun79901_ip) {
 0:
            golf = arguments[0];
            oscar = arguments[1];
            report = arguments[2];
            entity = undefined;
            if(!(golf === entity)) { _fun79901_ip = 17; continue _fun79901 }
 15:
            golf = null;
 17:
            if(!(oscar === entity)) { _fun79901_ip = 23; continue _fun79901 }
 21:
            oscar = null;
 23:
            if(!(report === entity)) { _fun79901_ip = 39; continue _fun79901 }
 27:
            mike = {};
            zulu = false;
            mike['openWithoutBackstack'] = zulu;
            report = mike;
 39:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 3;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            options = 'USER_SETTINGS_MODAL_OPEN';
            mike['type'] = options;
            mike['section'] = golf;
            mike['subsection'] = oscar;
            offset = mike;
            verify = report;
            report = copyDataProperties(offset, verify);
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['open'] = golf;
    golf = function(argFoo) { // Original name: init
        _fun79902: for(var _fun79902_ip = 0; ; ) switch(_fun79902_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun79902_ip = 11; continue _fun79902 }
 9:
            report = null;
 11:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 3;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            oscar = 'USER_SETTINGS_MODAL_INIT';
            mike['type'] = oscar;
            oscar = argFoo;
            mike['section'] = oscar;
            mike['subsection'] = report;
            golf = arguments[2];
            options = mike;
            report = copyDataProperties(options, golf);
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['init'] = golf;
    golf = function() { // Original name: close
        _fun79903: for(var _fun79903_ip = 0; ; ) switch(_fun79903_ip) {
 0:
            mike = _closure1_slot3;
            mike = mike.onClose;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.dispatch;
            zulu = {};
            oscar = 'USER_SETTINGS_MODAL_CLOSE';
            zulu['type'] = oscar;
            zulu = tango.bind(report)(zulu);
            zulu = null;
            if(!(zulu != mike)) { _fun79903_ip = 65; continue _fun79903 }
 61:
            mike = mike.bind(entity)();
 65:
            return entity;
        }
    };
    mike['close'] = golf;
    golf = function(argFoo) { // Original name: setSection
        _fun79904: for(var _fun79904_ip = 0; ; ) switch(_fun79904_ip) {
 0:
            oscar = arguments[1];
            report = arguments[2];
            entity = undefined;
            if(!(oscar === entity)) { _fun79904_ip = 14; continue _fun79904 }
 12:
            oscar = null;
 14:
            if(!(report === entity)) { _fun79904_ip = 20; continue _fun79904 }
 18:
            report = {};
 20:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 3;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            golf = 'USER_SETTINGS_MODAL_SET_SECTION';
            mike['type'] = golf;
            golf = argFoo;
            mike['section'] = golf;
            mike['subsection'] = oscar;
            verify = mike;
            options = report;
            report = copyDataProperties(verify, options);
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    mike['setSection'] = golf;
    golf = function(argFoo) { // Original name: clearSubsection
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_MODAL_CLEAR_SUBSECTION';
        mike['type'] = report;
        report = argFoo;
        mike['forSection'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['clearSubsection'] = golf;
    golf = function(argFoo) { // Original name: clearScrollPosition
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION';
        mike['type'] = report;
        report = argFoo;
        mike['forSection'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['clearScrollPosition'] = golf;
    golf = function(argFoo) { // Original name: updateAccount
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_MODAL_UPDATE_ACCOUNT';
        mike['type'] = report;
        report = argFoo;
        mike['settings'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateAccount'] = golf;
    golf = function() { // Original name: submitComplete
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_MODAL_SUBMIT_COMPLETE';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['submitComplete'] = golf;
    golf = function() { // Original name: reset
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_MODAL_RESET';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['reset'] = golf;
    tango = function(argFoo, argBar) { // Original name: saveAccountChanges
        mike = argFoo;
        zulu = this;
        var _closure2_slot0 = zulu;
        zulu = _closure1_slot1;
        offset = _closure1_slot2;
        tango = 3;
        tango = offset[tango];
        report = undefined;
        options = zulu.bind(report)(tango);
        golf = options.dispatch;
        tango = {};
        verify = 'USER_SETTINGS_MODAL_SUBMIT';
        tango['type'] = verify;
        tango = golf.bind(options)(tango);
        tango = mike.username;
        var _closure2_slot1 = tango;
        tango = mike.email;
        var _closure2_slot2 = tango;
        tango = mike.emailToken;
        var _closure2_slot3 = tango;
        tango = mike.password;
        var _closure2_slot4 = tango;
        tango = mike.avatar;
        var _closure2_slot5 = tango;
        tango = mike.newPassword;
        var _closure2_slot6 = tango;
        mike = mike.discriminator;
        var _closure2_slot7 = mike;
        mike = argBar;
        mike = mike.close;
        var _closure2_slot8 = mike;
        mike = 4;
        mike = offset[mike];
        tango = zulu.bind(report)(mike);
        zulu = {};
        mike = false;
        zulu['checkEnabled'] = mike;
        mike = {};
        verify = _closure1_slot0;
        oscar = 7;
        golf = offset[oscar];
        golf = verify.bind(report)(golf);
        options = golf.intl;
        golf = options.string;
        oscar = offset[oscar];
        oscar = verify.bind(report)(oscar);
        oscar = oscar.t;
        oscar = oscar.clQc1d;
        oscar = golf.bind(options)(oscar);
        mike['title'] = oscar;
        zulu['modalProps'] = mike;
        mike = {};
        oscar = function() { // Original name: onEarlyClose
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'USER_SETTINGS_MODAL_SUBMIT_FAILURE';
            entity['type'] = tango;
            tango = {};
            entity['errors'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike['onEarlyClose'] = oscar;
        zulu['hooks'] = mike;
        mike = function(argFoo) {
            _fun79911: for(var _fun79911_ip = 0; ; ) switch(_fun79911_ip) {
 0:
                tango = {};
                mike = _closure2_slot1;
                tango['username'] = mike;
                mike = _closure2_slot2;
                tango['email'] = mike;
                mike = _closure2_slot3;
                tango['email_token'] = mike;
                mike = _closure2_slot4;
                tango['password'] = mike;
                mike = _closure2_slot5;
                tango['avatar'] = mike;
                mike = _closure2_slot6;
                tango['new_password'] = mike;
                offset = argFoo;
                yankee = tango;
                mike = copyDataProperties(yankee, offset);
                mike = _closure2_slot7;
                oscar = null;
                report = oscar != mike;
                zulu = undefined;
                mike = undefined;
                if(!report) { _fun79911_ip = 103; continue _fun79911 }
 85:
                golf = _closure2_slot7;
                report = '';
                mike = undefined;
                if(!(report !== golf)) { _fun79911_ip = 103; continue _fun79911 }
 99:
                mike = _closure2_slot7;
 103:
                entity = 'discriminator';
                tango[entity] = mike;
                mike = _closure1_slot0;
                entity = _closure1_slot2;
                golf = 5;
                entity = entity[golf];
                entity = mike.bind(zulu)(entity);
                options = entity.Storage;
                mike = options.get;
                entity = _closure1_slot6;
                entity = mike.bind(options)(entity);
                mike = _closure1_slot9;
                mike = mike.bind(zulu)();
                options = oscar != mike;
                if(!options) { _fun79911_ip = 174; continue _fun79911 }
 170:
                options = oscar != entity;
 174:
                if(!options) { _fun79911_ip = 189; continue _fun79911 }
 177:
                tango['push_provider'] = mike;
                tango['push_token'] = entity;
 189:
                mike = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golf];
                entity = mike.bind(zulu)(entity);
                golf = entity.Storage;
                mike = golf.get;
                entity = _closure1_slot7;
                entity = mike.bind(golf)(entity);
                mike = _closure1_slot8;
                mike = oscar != mike;
                if(!mike) { _fun79911_ip = 241; continue _fun79911 }
 237:
                mike = oscar != entity;
 241:
                if(!mike) { _fun79911_ip = 260; continue _fun79911 }
 244:
                mike = _closure1_slot8;
                tango['push_voip_provider'] = mike;
                tango['push_voip_token'] = entity;
 260:
                mike = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 6;
                entity = oscar[entity];
                entity = mike.bind(zulu)(entity);
                zulu = entity.HTTP;
                mike = zulu.patch;
                entity = {};
                report = _closure1_slot4;
                report = report.ME;
                entity['url'] = report;
                report = true;
                entity['oldFormErrors'] = report;
                entity['body'] = tango;
                tango = false;
                entity['rejectWithError'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        tango = tango.bind(report)(mike, zulu);
        zulu = tango.then;
        mike = function(argFoo) {
            _fun79913: for(var _fun79913_ip = 0; ; ) switch(_fun79913_ip) {
 0:
                entity = argFoo;
                oscar = entity.body;
                yankee = oscar.token;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                report = 8;
                golf = zulu[report];
                report = undefined;
                offset = tango.bind(report)(golf);
                verify = offset.track;
                golf = _closure1_slot5;
                options = golf.USER_AVATAR_UPDATED;
                golf = {};
                foxtrot = _closure1_slot0;
                romeo = 9;
                romeo = zulu[romeo];
                backup = foxtrot.bind(report)(romeo);
                foxtrot = backup.isAnimatedIconHash;
                romeo = oscar.avatar;
                romeo = foxtrot.bind(backup)(romeo);
                golf['animated'] = romeo;
                golf = verify.bind(offset)(options, golf);
                golf = delete oscar.token;
                golf = 3;
                options = zulu[golf];
                offset = tango.bind(report)(options);
                verify = offset.dispatch;
                options = {};
                romeo = 'UPDATE_TOKEN';
                options['type'] = romeo;
                options['token'] = yankee;
                yankee = oscar.id;
                options['userId'] = yankee;
                options = verify.bind(offset)(options);
                zulu = zulu[golf];
                options = tango.bind(report)(zulu);
                tango = options.dispatch;
                zulu = {};
                verify = 'CURRENT_USER_UPDATE';
                zulu['type'] = verify;
                zulu['user'] = oscar;
                zulu = tango.bind(options)(zulu);
                tango = _closure2_slot6;
                verify = null;
                if(!(verify != tango)) { _fun79913_ip = 249; continue _fun79913 }
 197:
                options = _closure1_slot1;
                tango = _closure1_slot2;
                tango = tango[golf];
                offset = options.bind(report)(tango);
                options = offset.dispatch;
                tango = {};
                yankee = 'USER_PASSWORD_UPDATE';
                tango['type'] = yankee;
                tango['user'] = oscar;
                yankee = _closure2_slot6;
                tango['newPassword'] = yankee;
                tango = options.bind(offset)(tango);
 249:
                tango = _closure2_slot4;
                tango = verify != tango;
                if(!tango) { _fun79913_ip = 268; continue _fun79913 }
 260:
                options = _closure2_slot6;
                tango = verify != options;
 268:
                if(!tango) { _fun79913_ip = 319; continue _fun79913 }
 271:
                tango = _closure1_slot1;
                mike = _closure1_slot2;
                mike = mike[golf];
                report = tango.bind(report)(mike);
                tango = report.dispatch;
                mike = {};
                golf = 'PASSWORD_UPDATED';
                mike['type'] = golf;
                oscar = oscar.id;
                mike['userId'] = oscar;
                mike = tango.bind(report)(mike);
 319:
                mike = _closure2_slot8;
                zulu = _closure2_slot0;
                if(mike) { _fun79913_ip = 342; continue _fun79913 }
 330:
                mike = zulu.submitComplete;
                mike = mike.bind(zulu)();
                _fun79913_ip = 352; continue _fun79913;
 342:
                mike = zulu.close;
                mike = mike.bind(zulu)();
 352:
                return entity;
            }
        };
        entity = function(argFoo) {
            entity = argFoo;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.dispatch;
            mike = {};
            report = 'USER_SETTINGS_MODAL_SUBMIT_FAILURE';
            mike['type'] = report;
            report = entity.body;
            mike['errors'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike['saveAccountChanges'] = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/UserSettingsModalActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();