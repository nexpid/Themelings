// app/actions/UserSettingsAccountActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function() { // Original name: saveAccountRequest
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = tango;
    entity = function() { // Original name: _saveAccountRequest
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun63513: for(var _fun63513_ip = 0; ; ) switch(_fun63513_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun63513_ip = 326; continue _fun63513 }
 13:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 6;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.patch;
                    mike = {};
                    golf = _closure1_slot4;
                    golf = golf.ME;
                    mike['url'] = golf;
                    golf = true;
                    mike['oldFormErrors'] = golf;
                    mike['body'] = offset;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=91);
 89:
                    return mike;
 91:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun63513_ip = 323; continue _fun63513 }
 100:
                    oscar = mike.body;
                    tango = oscar.token;
                    if(!tango) { _fun63513_ip = 276; continue _fun63513 }
 117:
                    yankee = oscar.token;
                    tango = delete oscar.token;
                    golf = _closure1_slot1;
                    tango = _closure1_slot2;
                    options = 3;
                    tango = tango[options];
                    verify = golf.bind(report)(tango);
                    golf = verify.dispatch;
                    tango = {};
                    romeo = 'UPDATE_TOKEN';
                    tango['type'] = romeo;
                    tango['token'] = yankee;
                    yankee = oscar.id;
                    tango['userId'] = yankee;
                    tango = golf.bind(verify)(tango);
                    verify = null;
                    golf = verify == offset;
                    tango = undefined;
                    if(golf) { _fun63513_ip = 199; continue _fun63513 }
 193:
                    tango = offset.password;
 199:
                    tango = verify != tango;
                    if(!tango) { _fun63513_ip = 225; continue _fun63513 }
 206:
                    yankee = verify == offset;
                    golf = undefined;
                    if(yankee) { _fun63513_ip = 221; continue _fun63513 }
 215:
                    golf = offset.new_password;
 221:
                    tango = verify != golf;
 225:
                    if(!tango) { _fun63513_ip = 276; continue _fun63513 }
 228:
                    golf = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    options = golf.bind(report)(tango);
                    golf = options.dispatch;
                    tango = {};
                    verify = 'PASSWORD_UPDATED';
                    tango['type'] = verify;
                    verify = oscar.id;
                    tango['userId'] = verify;
                    tango = golf.bind(options)(tango);
 276:
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 3;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'CURRENT_USER_UPDATE';
                    zulu['type'] = golf;
                    zulu['user'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 323:
                    return mike;
 326:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.Endpoints;
    var _closure1_slot4 = options;
    options = report.Routes;
    var _closure1_slot5 = options;
    options = report.DEVICE_TOKEN;
    var _closure1_slot6 = options;
    options = report.DEVICE_VOIP_TOKEN;
    var _closure1_slot7 = options;
    report = report.AnalyticEvents;
    var _closure1_slot8 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot9 = options;
    report = report.getDevicePushProvider;
    var _closure1_slot10 = report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/UserSettingsAccountActionCreators.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: accountDetailsInit
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_ACCOUNT_INIT';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['accountDetailsInit'] = report;
    report = function() { // Original name: accountDetailsClose
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_ACCOUNT_CLOSE';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['accountDetailsClose'] = report;
    report = function(argFoo, argBar) { // Original name: disableAccount
        _fun63516: for(var _fun63516_ip = 0; ; ) switch(_fun63516_ip) {
 0:
            zulu = argBar;
            mike = argFoo;
            var _closure2_slot0 = mike;
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 4;
            golf = verify[tango];
            report = undefined;
            golf = oscar.bind(report)(golf);
            options = golf.intl;
            golf = options.string;
            tango = verify[tango];
            tango = oscar.bind(report)(tango);
            tango = tango.t;
            if(zulu) { _fun63516_ip = 77; continue _fun63516 }
 64:
            oscar = tango.jf5GGR;
            oscar = golf.bind(options)(oscar);
            _fun63516_ip = 88; continue _fun63516;
 77:
            tango = tango.8lQ2ra;
            oscar = golf.bind(options)(tango);
 88:
            tango = _closure1_slot4;
            if(zulu) { _fun63516_ip = 103; continue _fun63516 }
 95:
            zulu = tango.DISABLE_ACCOUNT;
            _fun63516_ip = 109; continue _fun63516;
 103:
            zulu = tango.DELETE_ACCOUNT;
 109:
            var _closure2_slot1 = zulu;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 5;
            mike = tango[mike];
            tango = zulu.bind(report)(mike);
            zulu = {};
            mike = {};
            mike['title'] = oscar;
            zulu['modalProps'] = mike;
            mike = false;
            zulu['checkEnabled'] = mike;
            mike = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                zulu = entity.HTTP;
                mike = zulu.post;
                entity = {};
                tango = _closure2_slot1;
                entity['url'] = tango;
                tango = {};
                report = _closure2_slot0;
                tango['password'] = report;
                oscar = argFoo;
                golf = tango;
                report = copyDataProperties(golf, oscar);
                entity['body'] = tango;
                tango = true;
                entity['oldFormErrors'] = tango;
                tango = false;
                entity['rejectWithError'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = tango.bind(report)(mike, zulu);
            mike = zulu.then;
            entity = function() {
                tango = _closure1_slot1;
                report = _closure1_slot2;
                entity = 7;
                zulu = report[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.logoutInternal;
                zulu = zulu.bind(tango)();
                tango = _closure1_slot0;
                zulu = 8;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.transitionTo;
                mike = _closure1_slot5;
                mike = mike.DEFAULT_LOGGED_OUT;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['disableAccount'] = report;
    zulu['saveAccountRequest'] = tango;
    tango = function(argFoo) { // Original name: saveAccountChanges
        mike = argFoo;
        zulu = mike.username;
        var _closure2_slot0 = zulu;
        zulu = mike.discriminator;
        var _closure2_slot1 = zulu;
        zulu = mike.email;
        var _closure2_slot2 = zulu;
        zulu = mike.emailToken;
        var _closure2_slot3 = zulu;
        zulu = mike.password;
        var _closure2_slot4 = zulu;
        zulu = mike.avatar;
        var _closure2_slot5 = zulu;
        zulu = mike.avatarDecoration;
        var _closure2_slot6 = zulu;
        zulu = mike.newPassword;
        var _closure2_slot7 = zulu;
        mike = mike.globalName;
        var _closure2_slot8 = mike;
        zulu = _closure1_slot1;
        offset = _closure1_slot2;
        mike = 3;
        mike = offset[mike];
        report = undefined;
        golf = zulu.bind(report)(mike);
        tango = golf.dispatch;
        mike = {};
        options = 'USER_SETTINGS_ACCOUNT_SUBMIT';
        mike['type'] = options;
        mike = tango.bind(golf)(mike);
        mike = 5;
        mike = offset[mike];
        tango = zulu.bind(report)(mike);
        zulu = {};
        mike = false;
        zulu['checkEnabled'] = mike;
        mike = {};
        verify = _closure1_slot0;
        oscar = 4;
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
            tango = 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE';
            entity['type'] = tango;
            tango = {};
            entity['errors'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike['onEarlyClose'] = oscar;
        zulu['hooks'] = mike;
        mike = function(argFoo) {
            _fun63520: for(var _fun63520_ip = 0; ; ) switch(_fun63520_ip) {
 0:
                zulu = {};
                mike = _closure2_slot0;
                zulu['username'] = mike;
                mike = _closure2_slot2;
                zulu['email'] = mike;
                mike = _closure2_slot3;
                zulu['email_token'] = mike;
                mike = _closure2_slot4;
                zulu['password'] = mike;
                mike = _closure2_slot5;
                zulu['avatar'] = mike;
                mike = _closure2_slot1;
                zulu['discriminator'] = mike;
                mike = _closure2_slot8;
                zulu['global_name'] = mike;
                mike = _closure2_slot7;
                zulu['new_password'] = mike;
                offset = argFoo;
                yankee = zulu;
                mike = copyDataProperties(yankee, offset);
                mike = _closure2_slot6;
                oscar = null;
                if(!(oscar === mike)) { _fun63520_ip = 102; continue _fun63520 }
 96:
                zulu['avatar_decoration_id'] = oscar;
 102:
                mike = _closure2_slot6;
                if(!(oscar != mike)) { _fun63520_ip = 137; continue _fun63520 }
 110:
                entity = _closure2_slot6;
                mike = entity.id;
                zulu['avatar_decoration_id'] = mike;
                entity = entity.skuId;
                zulu['avatar_decoration_sku_id'] = entity;
 137:
                report = _closure1_slot0;
                mike = _closure1_slot2;
                golf = 9;
                tango = mike[golf];
                mike = undefined;
                tango = report.bind(mike)(tango);
                options = tango.Storage;
                report = options.get;
                tango = _closure1_slot6;
                tango = report.bind(options)(tango);
                report = _closure1_slot10;
                report = report.bind(mike)();
                options = oscar != report;
                if(!options) { _fun63520_ip = 201; continue _fun63520 }
 197:
                options = oscar != tango;
 201:
                if(!options) { _fun63520_ip = 216; continue _fun63520 }
 204:
                zulu['push_provider'] = report;
                zulu['push_token'] = tango;
 216:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                tango = tango[golf];
                tango = report.bind(mike)(tango);
                golf = tango.Storage;
                report = golf.get;
                tango = _closure1_slot7;
                tango = report.bind(golf)(tango);
                report = _closure1_slot9;
                report = oscar != report;
                if(!report) { _fun63520_ip = 268; continue _fun63520 }
 264:
                report = oscar != tango;
 268:
                if(!report) { _fun63520_ip = 287; continue _fun63520 }
 271:
                report = _closure1_slot9;
                zulu['push_voip_provider'] = report;
                zulu['push_voip_token'] = tango;
 287:
                entity = _closure1_slot11;
                entity = entity.bind(mike)(zulu);
                return entity;
            }
        };
        tango = tango.bind(report)(mike, zulu);
        zulu = tango.then;
        mike = function(argFoo) {
            entity = argFoo;
            verify = entity.body;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 10;
            mike = report[mike];
            zulu = undefined;
            options = tango.bind(zulu)(mike);
            golf = options.track;
            mike = _closure1_slot8;
            oscar = mike.USER_AVATAR_UPDATED;
            mike = {};
            yankee = _closure1_slot0;
            offset = 11;
            offset = report[offset];
            yankee = yankee.bind(zulu)(offset);
            offset = yankee.isAnimatedIconHash;
            verify = verify.avatar;
            verify = offset.bind(yankee)(verify);
            mike['animated'] = verify;
            mike = golf.bind(options)(oscar, mike);
            mike = 3;
            mike = report[mike];
            tango = tango.bind(zulu)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS';
            mike['type'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
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
            report = 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE';
            mike['type'] = report;
            report = entity.body;
            mike['errors'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['saveAccountChanges'] = tango;
    tango = function() { // Original name: getHarvestStatus
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.get;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        tango = _closure1_slot4;
        tango = tango.USER_HARVEST;
        entity['url'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getHarvestStatus'] = tango;
    tango = function(argFoo) { // Original name: requestHarvest
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 6;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot4;
        tango = tango.USER_HARVEST;
        entity['url'] = tango;
        tango = {};
        report = argFoo;
        tango['backends'] = report;
        entity['body'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['requestHarvest'] = tango;
    tango = function(argFoo) { // Original name: setPendingAvatar
        _fun63526: for(var _fun63526_ip = 0; ; ) switch(_fun63526_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 3;
            zulu = zulu[entity];
            entity = undefined;
            oscar = report.bind(entity)(zulu);
            report = oscar.dispatch;
            zulu = {};
            golf = 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR';
            zulu['type'] = golf;
            zulu['avatar'] = tango;
            zulu = report.bind(oscar)(zulu);
            zulu = null;
            if(!(zulu != tango)) { _fun63526_ip = 147; continue _fun63526 }
 61:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 12;
            zulu = verify[zulu];
            zulu = options.bind(entity)(zulu);
            report = zulu.AccessibilityAnnouncer;
            tango = report.announce;
            zulu = 4;
            oscar = verify[zulu];
            oscar = options.bind(entity)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            zulu = verify[zulu];
            zulu = options.bind(entity)(zulu);
            zulu = zulu.t;
            zulu = zulu.NstziY;
            zulu = oscar.bind(golf)(zulu);
            zulu = tango.bind(report)(zulu);
            _fun63526_ip = 231; continue _fun63526;
 147:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 12;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            tango = mike.AccessibilityAnnouncer;
            zulu = tango.announce;
            mike = 4;
            report = options[mike];
            report = golf.bind(entity)(report);
            oscar = report.intl;
            report = oscar.string;
            mike = options[mike];
            mike = golf.bind(entity)(mike);
            mike = mike.t;
            mike = mike.f1+oNj;
            mike = report.bind(oscar)(mike);
            mike = zulu.bind(tango)(mike);
 231:
            return entity;
        }
    };
    zulu['setPendingAvatar'] = tango;
    tango = function(argFoo) { // Original name: setPendingGlobalNameName
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME';
        mike['type'] = report;
        report = argFoo;
        mike['globalName'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingGlobalNameName'] = tango;
    tango = function(argFoo) { // Original name: setPendingAvatarDecoration
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION';
        mike['type'] = report;
        report = argFoo;
        mike['avatarDecoration'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingAvatarDecoration'] = tango;
    tango = function(argFoo) { // Original name: setPendingProfileEffectId
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID';
        mike['type'] = report;
        report = argFoo;
        mike['profileEffectId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingProfileEffectId'] = tango;
    tango = function(argFoo) { // Original name: setSingleTryItOutCollectiblesItem
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM';
        mike['type'] = report;
        report = argFoo;
        mike['item'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setSingleTryItOutCollectiblesItem'] = tango;
    tango = function() { // Original name: clearErrors
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_CLEAR_ERRORS';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearErrors'] = tango;
    tango = function() { // Original name: resetPendingAccountChanges
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetPendingAccountChanges'] = tango;
    tango = function() { // Original name: resetAllPending
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_RESET_ALL_PENDING';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetAllPending'] = tango;
    tango = function() { // Original name: resetAllTryItOut
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_RESET_ALL_TRY_IT_OUT';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetAllTryItOut'] = tango;
    tango = function() { // Original name: resetAndCloseUserProfileForm
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetAndCloseUserProfileForm'] = tango;
    mike = function() { // Original name: resetPendingAvatarDecoration
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetPendingAvatarDecoration'] = mike;
    return entity;
})();