// app/actions/native/PushNotificationActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = golfie;
    entity = function() { // Original name: getOrRefreshPushSyncToken
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _getOrRefreshPushSyncToken
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 270; continue _fun00001 }
 13:
                    golfie = michal;
                    oscard = undefined;
                    report = undefined;
                    yankee = undefined;
                    zuuluu = michal.pushSyncToken;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00002_ip = 46; continue _fun00001 }
 34:
                    zuuluu = golfie;
                    zuuluu = zuuluu.pushSyncToken;
                    return zuuluu;
 46:
                    option = _closure1_slot2;
                    verify = _closure1_slot3;
                    tangon = 6;
                    tangon = verify[tangon];
                    verify = option.bind(oscard)(tangon);
                    option = verify.getToken;
                    tangon = golfie;
                    tangon = tangon.id;
                    tangon = option.bind(verify)(tangon);
                    yankee = tangon;
                    if(!(michal != tangon)) { _fun00002_ip = 267; continue _fun00001 }
 98: // try_start_0
                    option = _closure1_slot0;
                    verify = _closure1_slot3;
                    tangon = 7;
                    tangon = verify[tangon];
                    tangon = option.bind(oscard)(tangon);
                    verify = tangon.HTTP;
                    option = verify.get;
                    tangon = {};
                    offset = _closure1_slot9;
                    offset = offset.DEVICES_SYNC_TOKEN;
                    tangon['url'] = offset;
                    offset = {};
                    offset['authorization'] = yankee;
                    tangon['headers'] = offset;
                    offset = false;
                    tangon['rejectWithError'] = offset;
                    tangon = option.bind(verify)(tangon);
                    SaveGenerator(address=171);
 169:
                    return tangon;
 171:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(option) { _fun00002_ip = 228; continue _fun00001 }
 177:
                    option = tangon.body;
                    report = option.token;
 188: // try_end0
                    verify = _closure1_slot2;
                    offset = _closure1_slot3;
                    option = 9;
                    option = offset[option];
                    verify = verify.bind(oscard)(option);
                    option = verify.updatePushSyncToken;
                    golfie = golfie.id;
                    golfie = option.bind(verify)(golfie, report);
                    return report;
 228:
                    return tangon;
 231: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot3;
                    zuuluu = 8;
                    zuuluu = golfie[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.captureException;
                    zuuluu = zuuluu.bind(tangon)(report);
                    return michal;
 267:
                    return michal;
 270:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.DEVICE_TOKEN;
    var _closure1_slot7 = option;
    option = tangon.DEVICE_VOIP_TOKEN;
    var _closure1_slot8 = option;
    tangon = tangon.Endpoints;
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.BUNDLE_ID;
    var _closure1_slot10 = option;
    option = tangon.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot11 = option;
    tangon = tangon.getDevicePushProvider;
    var _closure1_slot12 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    option = report.bind(entity)(tangon);
    tangon = option.prototype;
    report = Object.create(tangon, {constructor: {value: option}});
    romeon = 'PushNotificationActionCreators';
    foxtra = report;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot13 = tangon;
    tangon = {};
    report = function(argFoo) { // Original name: registerDevice
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            entity = arguments[1];
            tangon = this;
            offset = undefined;
            if(!(entity === offset)) { _fun00004_ip = 17; continue _fun00003 }
 15:
            entity = false;
 17:
            oscard = _closure1_slot13;
            zuuluu = oscard.log;
            michal = global;
            michal = michal.HermesInternal;
            verify = michal.concat;
            golfie = 'Registering push notification token: ';
            michal = ', is voip:';
            michal = verify.bind(golfie)(report, michal, entity);
            michal = zuuluu.bind(oscard)(michal);
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot3;
            michal = 10;
            michal = oscard[michal];
            michal = zuuluu.bind(offset)(michal);
            oscard = michal.Storage;
            michal = oscard.set;
            zuuluu = entity;
            if(zuuluu) { _fun00004_ip = 109; continue _fun00003 }
 103:
            entity = _closure1_slot7;
            _fun00004_ip = 113; continue _fun00003;
 109:
            entity = _closure1_slot8;
 113:
            entity = michal.bind(oscard)(entity, report);
            entity = _closure1_slot5;
            entity = entity.canUseMultiAccountNotifications;
            if(entity) { _fun00004_ip = 309; continue _fun00003 }
 135:
            michal = _closure1_slot1;
            oscard = _closure1_slot3;
            entity = 11;
            entity = oscard[entity];
            oscard = michal.bind(offset)(entity);
            michal = oscard.post;
            entity = {};
            golfie = _closure1_slot9;
            golfie = golfie.DEVICES;
            entity['url'] = golfie;
            golfie = {};
            if(zuuluu) { _fun00004_ip = 192; continue _fun00003 }
 182:
            verify = _closure1_slot12;
            verify = verify.bind(offset)();
            _fun00004_ip = 196; continue _fun00003;
 192:
            verify = _closure1_slot11;
 196:
            golfie['provider'] = verify;
            golfie['token'] = report;
            verify = _closure1_slot0;
            yankee = _closure1_slot3;
            romeon = 12;
            romeon = yankee[romeon];
            foxtra = verify.bind(offset)(romeon);
            romeon = foxtra.isAndroid;
            romeon = romeon.bind(foxtra)();
            golfie['bypass_server_throttling_supported'] = romeon;
            option = _closure1_slot10;
            golfie['bundle_id'] = option;
            entity['body'] = golfie;
            golfie = true;
            entity['oldFormErrors'] = golfie;
            golfie = {};
            option = 13;
            option = yankee[option];
            option = verify.bind(offset)(option);
            option = option.NetworkActionNames;
            option = option.USER_REGISTER_DEVICE_TOKEN;
            golfie['event'] = option;
            entity['trackedActionData'] = golfie;
            golfie = false;
            entity['rejectWithError'] = golfie;
            entity = michal.bind(oscard)(entity);
            _fun00004_ip = 321; continue _fun00003;
 309:
            michal = tangon.syncDevice;
            entity = michal.bind(tangon)(report, zuuluu);
 321:
            return entity;
        }
    };
    tangon['registerDevice'] = report;
    report = function(argFoo) { // Original name: syncDevice
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = arguments[1];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00006_ip = 20; continue _fun00005 }
 18:
            zuuluu = false;
 20:
            var _closure2_slot1 = zuuluu;
            zuuluu = _closure1_slot4;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00008_ip = 412; continue _fun00007 }
 12:
                        zuuluu = undefined;
                        var _closure4_slot0 = zuuluu;
                        oscard = _closure1_slot6;
                        tangon = oscard.getId;
                        tangon = tangon.bind(oscard)();
                        _closure4_slot0 = tangon;
                        tangon = global;
                        oscard = tangon.Promise;
                        tangon = oscard.all;
                        option = _closure1_slot5;
                        golfie = option.getValidUsers;
                        option = golfie.bind(option)();
                        golfie = option.sort;
                        michal = function(argFoo, argBar) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                entity = argFoo;
                                tangon = entity.id;
                                zuuluu = _closure4_slot0;
                                entity = -1;
                                if(!(tangon !== zuuluu)) { _fun00010_ip = 49; continue _fun00009 }
 25:
                                zuuluu = argBar;
                                tangon = zuuluu.id;
                                zuuluu = _closure4_slot0;
                                michal = 0;
                                if(!(tangon === zuuluu)) { _fun00010_ip = 46; continue _fun00009 }
 43:
                                michal = 1;
 46:
                                entity = michal;
 49:
                                return entity;
                            }
                        };
                        option = golfie.bind(option)(michal);
                        golfie = option.map;
                        michal = _closure1_slot14;
                        michal = golfie.bind(option)(michal);
                        michal = tangon.bind(oscard)(michal);
                        SaveGenerator(address=110);
 108:
                        return michal;
 110:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tangon) { _fun00008_ip = 409; continue _fun00007 }
 119:
                        oscard = michal.length;
                        tangon = 1;
                        if(!(!(oscard < tangon))) { _fun00008_ip = 406; continue _fun00007 }
 134:
                        golfie = 0;
                        oscard = michal[golfie];
                        tangon = null;
                        if(!(tangon != oscard)) { _fun00008_ip = 406; continue _fun00007 }
 149:
                        oscard = _closure1_slot0;
                        option = _closure1_slot3;
                        tangon = 7;
                        tangon = option[tangon];
                        tangon = oscard.bind(zuuluu)(tangon);
                        option = tangon.HTTP;
                        oscard = option.put;
                        tangon = {};
                        verify = _closure1_slot9;
                        verify = verify.DEVICES_SYNC;
                        tangon['url'] = verify;
                        verify = {};
                        yankee = _closure2_slot1;
                        if(yankee) { _fun00008_ip = 218; continue _fun00007 }
 208:
                        yankee = _closure1_slot12;
                        yankee = yankee.bind(zuuluu)();
                        _fun00008_ip = 222; continue _fun00007;
 218:
                        yankee = _closure1_slot11;
 222:
                        verify['provider'] = yankee;
                        offset = _closure2_slot0;
                        verify['token'] = offset;
                        foxtra = michal.filter;
                        yankee = _closure1_slot0;
                        romeon = _closure1_slot3;
                        offset = 14;
                        offset = romeon[offset];
                        offset = yankee.bind(zuuluu)(offset);
                        offset = offset.isNotNullish;
                        offset = foxtra.bind(michal)(offset);
                        verify['push_sync_tokens'] = offset;
                        offset = 12;
                        offset = romeon[offset];
                        yankee = yankee.bind(zuuluu)(offset);
                        offset = yankee.isAndroid;
                        offset = offset.bind(yankee)();
                        verify['bypass_server_throttling_supported'] = offset;
                        offset = _closure1_slot10;
                        verify['bundle_id'] = offset;
                        tangon['body'] = verify;
                        verify = false;
                        tangon['rejectWithError'] = verify;
                        tangon = oscard.bind(option)(tangon);
                        SaveGenerator(address=333);
 331:
                        return tangon;
 333:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                        if(oscard) { _fun00008_ip = 403; continue _fun00007 }
 339:
                        oscard = tangon.body;
                        oscard = oscard.invalid_push_sync_tokens;
                        oscard = oscard.length;
                        if(!(oscard > golfie)) { _fun00008_ip = 406; continue _fun00007 }
 359:
                        oscard = _closure1_slot2;
                        golfie = _closure1_slot3;
                        report = 9;
                        report = golfie[report];
                        golfie = oscard.bind(zuuluu)(report);
                        oscard = golfie.invalidatePushSyncTokens;
                        report = tangon.body;
                        report = report.invalid_push_sync_tokens;
                        report = oscard.bind(golfie)(report);
                        _fun00008_ip = 406; continue _fun00007;
 403:
                        return tangon;
 406:
                        return zuuluu;
 409:
                        return michal;
 412:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    tangon['syncDevice'] = report;
    report = function(argFoo) { // Original name: unregisterDevice
        oscard = argFoo;
        zuuluu = _closure1_slot13;
        michal = zuuluu.log;
        entity = global;
        entity = entity.HermesInternal;
        tangon = entity.concat;
        entity = 'Unregistering push notification token: ';
        entity = tangon.bind(entity)(oscard);
        entity = michal.bind(zuuluu)(entity);
        michal = _closure1_slot1;
        option = _closure1_slot3;
        entity = 11;
        entity = option[entity];
        golfie = undefined;
        zuuluu = michal.bind(golfie)(entity);
        michal = zuuluu.delete;
        entity = {};
        tangon = _closure1_slot9;
        tangon = tangon.DEVICES;
        entity['url'] = tangon;
        tangon = {};
        verify = _closure1_slot12;
        verify = verify.bind(golfie)();
        tangon['provider'] = verify;
        tangon['token'] = oscard;
        entity['body'] = tangon;
        tangon = {};
        oscard = _closure1_slot0;
        report = 13;
        report = option[report];
        report = oscard.bind(golfie)(report);
        report = report.NetworkActionNames;
        report = report.USER_UNREGISTER_DEVICE_TOKEN;
        tangon['event'] = report;
        entity['trackedActionData'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['unregisterDevice'] = report;
    report = 16;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/native/PushNotificationActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function(argFoo) { // Original name: setPushPermissionState
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot3;
        entity = 15;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.wait;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot3;
            entity = 15;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'PUSH_NOTIFICATION_PERMISSION_SET_STATE';
            michal['type'] = report;
            report = _closure2_slot0;
            michal['permissionState'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPushPermissionState'] = tangon;
    michal = function(argFoo) { // Original name: setPushPermissionReactivationSeen
        zuuluu = _closure1_slot1;
        michal = _closure1_slot3;
        entity = 15;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'PUSH_NOTIFICATION_PERMISSION_REACTIVATION_SEEN';
        michal['type'] = report;
        report = argFoo;
        michal['promptType'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPushPermissionReactivationSeen'] = michal;
    return entity;
})();