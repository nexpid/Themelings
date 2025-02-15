// app/actions/native/PushNotificationActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golf;
    entity = function() { // Original name: getOrRefreshPushSyncToken
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _getOrRefreshPushSyncToken
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun97818: for(var _fun97818_ip = 0; ; ) switch(_fun97818_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun97818_ip = 270; continue _fun97818 }
 13:
                    golf = mike;
                    oscar = undefined;
                    report = undefined;
                    yankee = undefined;
                    zulu = mike.pushSyncToken;
                    mike = null;
                    if(!(mike != zulu)) { _fun97818_ip = 46; continue _fun97818 }
 34:
                    zulu = golf;
                    zulu = zulu.pushSyncToken;
                    return zulu;
 46:
                    options = _closure1_slot2;
                    verify = _closure1_slot3;
                    tango = 6;
                    tango = verify[tango];
                    verify = options.bind(oscar)(tango);
                    options = verify.getToken;
                    tango = golf;
                    tango = tango.id;
                    tango = options.bind(verify)(tango);
                    yankee = tango;
                    if(!(mike != tango)) { _fun97818_ip = 267; continue _fun97818 }
 98: // try_start_0
                    options = _closure1_slot0;
                    verify = _closure1_slot3;
                    tango = 7;
                    tango = verify[tango];
                    tango = options.bind(oscar)(tango);
                    verify = tango.HTTP;
                    options = verify.get;
                    tango = {};
                    offset = _closure1_slot9;
                    offset = offset.DEVICES_SYNC_TOKEN;
                    tango['url'] = offset;
                    offset = {};
                    offset['authorization'] = yankee;
                    tango['headers'] = offset;
                    offset = false;
                    tango['rejectWithError'] = offset;
                    tango = options.bind(verify)(tango);
                    SaveGenerator(address=171);
 169:
                    return tango;
 171:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(options) { _fun97818_ip = 228; continue _fun97818 }
 177:
                    options = tango.body;
                    report = options.token;
 188: // try_end0
                    verify = _closure1_slot2;
                    offset = _closure1_slot3;
                    options = 9;
                    options = offset[options];
                    verify = verify.bind(oscar)(options);
                    options = verify.updatePushSyncToken;
                    golf = golf.id;
                    golf = options.bind(verify)(golf, report);
                    return report;
 228:
                    return tango;
 231: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = _closure1_slot1;
                    golf = _closure1_slot3;
                    zulu = 8;
                    zulu = golf[zulu];
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.captureException;
                    zulu = zulu.bind(tango)(report);
                    return mike;
 267:
                    return mike;
 270:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    options = tango.DEVICE_TOKEN;
    var _closure1_slot7 = options;
    options = tango.DEVICE_VOIP_TOKEN;
    var _closure1_slot8 = options;
    tango = tango.Endpoints;
    var _closure1_slot9 = tango;
    tango = 4;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    options = tango.BUNDLE_ID;
    var _closure1_slot10 = options;
    options = tango.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot11 = options;
    tango = tango.getDevicePushProvider;
    var _closure1_slot12 = tango;
    tango = 5;
    tango = golf[tango];
    options = report.bind(entity)(tango);
    tango = options.prototype;
    report = Object.create(tango, {constructor: {value: options}});
    romeo = 'PushNotificationActionCreators';
    foxtrot = report;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : report;
    var _closure1_slot13 = tango;
    tango = {};
    report = function(argFoo) { // Original name: registerDevice
        _fun97819: for(var _fun97819_ip = 0; ; ) switch(_fun97819_ip) {
 0:
            report = argFoo;
            entity = arguments[1];
            tango = this;
            offset = undefined;
            if(!(entity === offset)) { _fun97819_ip = 17; continue _fun97819 }
 15:
            entity = false;
 17:
            oscar = _closure1_slot13;
            zulu = oscar.log;
            mike = global;
            mike = mike.HermesInternal;
            verify = mike.concat;
            golf = 'Registering push notification token: ';
            mike = ', is voip:';
            mike = verify.bind(golf)(report, mike, entity);
            mike = zulu.bind(oscar)(mike);
            zulu = _closure1_slot0;
            oscar = _closure1_slot3;
            mike = 10;
            mike = oscar[mike];
            mike = zulu.bind(offset)(mike);
            oscar = mike.Storage;
            mike = oscar.set;
            zulu = entity;
            if(zulu) { _fun97819_ip = 110; continue _fun97819 }
 104:
            entity = _closure1_slot7;
            _fun97819_ip = 114; continue _fun97819;
 110:
            entity = _closure1_slot8;
 114:
            entity = mike.bind(oscar)(entity, report);
            entity = _closure1_slot5;
            entity = entity.canUseMultiAccountNotifications;
            if(entity) { _fun97819_ip = 310; continue _fun97819 }
 136:
            mike = _closure1_slot1;
            oscar = _closure1_slot3;
            entity = 11;
            entity = oscar[entity];
            oscar = mike.bind(offset)(entity);
            mike = oscar.post;
            entity = {};
            golf = _closure1_slot9;
            golf = golf.DEVICES;
            entity['url'] = golf;
            golf = {};
            if(zulu) { _fun97819_ip = 193; continue _fun97819 }
 183:
            verify = _closure1_slot12;
            verify = verify.bind(offset)();
            _fun97819_ip = 197; continue _fun97819;
 193:
            verify = _closure1_slot11;
 197:
            golf['provider'] = verify;
            golf['token'] = report;
            verify = _closure1_slot0;
            yankee = _closure1_slot3;
            romeo = 12;
            romeo = yankee[romeo];
            foxtrot = verify.bind(offset)(romeo);
            romeo = foxtrot.isAndroid;
            romeo = romeo.bind(foxtrot)();
            golf['bypass_server_throttling_supported'] = romeo;
            options = _closure1_slot10;
            golf['bundle_id'] = options;
            entity['body'] = golf;
            golf = true;
            entity['oldFormErrors'] = golf;
            golf = {};
            options = 13;
            options = yankee[options];
            options = verify.bind(offset)(options);
            options = options.NetworkActionNames;
            options = options.USER_REGISTER_DEVICE_TOKEN;
            golf['event'] = options;
            entity['trackedActionData'] = golf;
            golf = false;
            entity['rejectWithError'] = golf;
            entity = mike.bind(oscar)(entity);
            _fun97819_ip = 322; continue _fun97819;
 310:
            mike = tango.syncDevice;
            entity = mike.bind(tango)(report, zulu);
 322:
            return entity;
        }
    };
    tango['registerDevice'] = report;
    report = function(argFoo) { // Original name: syncDevice
        _fun97820: for(var _fun97820_ip = 0; ; ) switch(_fun97820_ip) {
 0:
            zulu = arguments[1];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun97820_ip = 20; continue _fun97820 }
 18:
            zulu = false;
 20:
            var _closure2_slot1 = zulu;
            zulu = _closure1_slot4;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun97822: for(var _fun97822_ip = 0; ; ) switch(_fun97822_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun97822_ip = 412; continue _fun97822 }
 12:
                        zulu = undefined;
                        var _closure4_slot0 = zulu;
                        oscar = _closure1_slot6;
                        tango = oscar.getId;
                        tango = tango.bind(oscar)();
                        _closure4_slot0 = tango;
                        tango = global;
                        oscar = tango.Promise;
                        tango = oscar.all;
                        options = _closure1_slot5;
                        golf = options.getValidUsers;
                        options = golf.bind(options)();
                        golf = options.sort;
                        mike = function(argFoo, argBar) {
                            _fun97823: for(var _fun97823_ip = 0; ; ) switch(_fun97823_ip) {
 0:
                                entity = argFoo;
                                tango = entity.id;
                                zulu = _closure4_slot0;
                                entity = -1;
                                if(!(tango !== zulu)) { _fun97823_ip = 49; continue _fun97823 }
 25:
                                zulu = argBar;
                                tango = zulu.id;
                                zulu = _closure4_slot0;
                                mike = 0;
                                if(!(tango === zulu)) { _fun97823_ip = 46; continue _fun97823 }
 43:
                                mike = 1;
 46:
                                entity = mike;
 49:
                                return entity;
                            }
                        };
                        options = golf.bind(options)(mike);
                        golf = options.map;
                        mike = _closure1_slot14;
                        mike = golf.bind(options)(mike);
                        mike = tango.bind(oscar)(mike);
                        SaveGenerator(address=110);
 108:
                        return mike;
 110:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun97822_ip = 409; continue _fun97822 }
 119:
                        oscar = mike.length;
                        tango = 1;
                        if(!(!(oscar < tango))) { _fun97822_ip = 406; continue _fun97822 }
 134:
                        golf = 0;
                        oscar = mike[golf];
                        tango = null;
                        if(!(tango != oscar)) { _fun97822_ip = 406; continue _fun97822 }
 149:
                        oscar = _closure1_slot0;
                        options = _closure1_slot3;
                        tango = 7;
                        tango = options[tango];
                        tango = oscar.bind(zulu)(tango);
                        options = tango.HTTP;
                        oscar = options.put;
                        tango = {};
                        verify = _closure1_slot9;
                        verify = verify.DEVICES_SYNC;
                        tango['url'] = verify;
                        verify = {};
                        yankee = _closure2_slot1;
                        if(yankee) { _fun97822_ip = 218; continue _fun97822 }
 208:
                        yankee = _closure1_slot12;
                        yankee = yankee.bind(zulu)();
                        _fun97822_ip = 222; continue _fun97822;
 218:
                        yankee = _closure1_slot11;
 222:
                        verify['provider'] = yankee;
                        offset = _closure2_slot0;
                        verify['token'] = offset;
                        foxtrot = mike.filter;
                        yankee = _closure1_slot0;
                        romeo = _closure1_slot3;
                        offset = 14;
                        offset = romeo[offset];
                        offset = yankee.bind(zulu)(offset);
                        offset = offset.isNotNullish;
                        offset = foxtrot.bind(mike)(offset);
                        verify['push_sync_tokens'] = offset;
                        offset = 12;
                        offset = romeo[offset];
                        yankee = yankee.bind(zulu)(offset);
                        offset = yankee.isAndroid;
                        offset = offset.bind(yankee)();
                        verify['bypass_server_throttling_supported'] = offset;
                        offset = _closure1_slot10;
                        verify['bundle_id'] = offset;
                        tango['body'] = verify;
                        verify = false;
                        tango['rejectWithError'] = verify;
                        tango = oscar.bind(options)(tango);
                        SaveGenerator(address=333);
 331:
                        return tango;
 333:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(oscar) { _fun97822_ip = 403; continue _fun97822 }
 339:
                        oscar = tango.body;
                        oscar = oscar.invalid_push_sync_tokens;
                        oscar = oscar.length;
                        if(!(oscar > golf)) { _fun97822_ip = 406; continue _fun97822 }
 359:
                        oscar = _closure1_slot2;
                        golf = _closure1_slot3;
                        report = 9;
                        report = golf[report];
                        golf = oscar.bind(zulu)(report);
                        oscar = golf.invalidatePushSyncTokens;
                        report = tango.body;
                        report = report.invalid_push_sync_tokens;
                        report = oscar.bind(golf)(report);
                        _fun97822_ip = 406; continue _fun97822;
 403:
                        return tango;
 406:
                        return zulu;
 409:
                        return mike;
 412:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    tango['syncDevice'] = report;
    report = function(argFoo) { // Original name: unregisterDevice
        oscar = argFoo;
        zulu = _closure1_slot13;
        mike = zulu.log;
        entity = global;
        entity = entity.HermesInternal;
        tango = entity.concat;
        entity = 'Unregistering push notification token: ';
        entity = tango.bind(entity)(oscar);
        entity = mike.bind(zulu)(entity);
        mike = _closure1_slot1;
        options = _closure1_slot3;
        entity = 11;
        entity = options[entity];
        golf = undefined;
        zulu = mike.bind(golf)(entity);
        mike = zulu.delete;
        entity = {};
        tango = _closure1_slot9;
        tango = tango.DEVICES;
        entity['url'] = tango;
        tango = {};
        verify = _closure1_slot12;
        verify = verify.bind(golf)();
        tango['provider'] = verify;
        tango['token'] = oscar;
        entity['body'] = tango;
        tango = {};
        oscar = _closure1_slot0;
        report = 13;
        report = options[report];
        report = oscar.bind(golf)(report);
        report = report.NetworkActionNames;
        report = report.USER_UNREGISTER_DEVICE_TOKEN;
        tango['event'] = report;
        entity['trackedActionData'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['unregisterDevice'] = report;
    report = 16;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/native/PushNotificationActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = function(argFoo) { // Original name: setPushPermissionState
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot3;
        entity = 15;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.wait;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot3;
            entity = 15;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'PUSH_NOTIFICATION_PERMISSION_SET_STATE';
            mike['type'] = report;
            report = _closure2_slot0;
            mike['permissionState'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPushPermissionState'] = tango;
    mike = function(argFoo) { // Original name: setPushPermissionReactivationSeen
        zulu = _closure1_slot1;
        mike = _closure1_slot3;
        entity = 15;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN';
        mike['type'] = report;
        report = argFoo;
        mike['promptType'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPushPermissionReactivationSeen'] = mike;
    return entity;
})();