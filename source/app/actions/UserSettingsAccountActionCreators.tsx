// app/actions/UserSettingsAccountActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function() { // Original name: saveAccountRequest
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = tangon;
    entity = function() { // Original name: _saveAccountRequest
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 326; continue _fun00001 }
 13:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 6;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.patch;
                    michal = {};
                    golfie = _closure1_slot4;
                    golfie = golfie.ME;
                    michal['url'] = golfie;
                    golfie = true;
                    michal['oldFormErrors'] = golfie;
                    michal['body'] = offset;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=91);
 89:
                    return michal;
 91:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 100:
                    oscard = michal.body;
                    tangon = oscard.token;
                    if(!tangon) { _fun00002_ip = 276; continue _fun00001 }
 117:
                    yankee = oscard.token;
                    tangon = delete oscard.token;
                    golfie = _closure1_slot1;
                    tangon = _closure1_slot2;
                    option = 3;
                    tangon = tangon[option];
                    verify = golfie.bind(report)(tangon);
                    golfie = verify.dispatch;
                    tangon = {};
                    romeon = 'UPDATE_TOKEN';
                    tangon['type'] = romeon;
                    tangon['token'] = yankee;
                    yankee = oscard.id;
                    tangon['userId'] = yankee;
                    tangon = golfie.bind(verify)(tangon);
                    verify = null;
                    golfie = verify == offset;
                    tangon = undefined;
                    if(golfie) { _fun00002_ip = 199; continue _fun00001 }
 193:
                    tangon = offset.password;
 199:
                    tangon = verify != tangon;
                    if(!tangon) { _fun00002_ip = 225; continue _fun00001 }
 206:
                    yankee = verify == offset;
                    golfie = undefined;
                    if(yankee) { _fun00002_ip = 221; continue _fun00001 }
 215:
                    golfie = offset.new_password;
 221:
                    tangon = verify != golfie;
 225:
                    if(!tangon) { _fun00002_ip = 276; continue _fun00001 }
 228:
                    golfie = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[option];
                    option = golfie.bind(report)(tangon);
                    golfie = option.dispatch;
                    tangon = {};
                    verify = 'PASSWORD_UPDATED';
                    tangon['type'] = verify;
                    verify = oscard.id;
                    tangon['userId'] = verify;
                    tangon = golfie.bind(option)(tangon);
 276:
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 3;
                    zuuluu = golfie[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'CURRENT_USER_UPDATE';
                    zuuluu['type'] = golfie;
                    zuuluu['user'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 323:
                    return michal;
 326:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
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
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.Endpoints;
    var _closure1_slot4 = option;
    option = report.Routes;
    var _closure1_slot5 = option;
    option = report.DEVICE_TOKEN;
    var _closure1_slot6 = option;
    option = report.DEVICE_VOIP_TOKEN;
    var _closure1_slot7 = option;
    report = report.AnalyticEvents;
    var _closure1_slot8 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot9 = option;
    report = report.getDevicePushProvider;
    var _closure1_slot10 = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/UserSettingsAccountActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: accountDetailsInit
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_ACCOUNT_INIT';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['accountDetailsInit'] = report;
    report = function() { // Original name: accountDetailsClose
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_ACCOUNT_CLOSE';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['accountDetailsClose'] = report;
    report = function(argFoo, argBar) { // Original name: disableAccount
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argBar;
            michal = argFoo;
            var _closure2_slot0 = michal;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 4;
            golfie = verify[tangon];
            report = undefined;
            golfie = oscard.bind(report)(golfie);
            option = golfie.intl;
            golfie = option.string;
            tangon = verify[tangon];
            tangon = oscard.bind(report)(tangon);
            tangon = tangon.t;
            if(zuuluu) { _fun00004_ip = 77; continue _fun00003 }
 64:
            oscard = tangon.jf5GGR;
            oscard = golfie.bind(option)(oscard);
            _fun00004_ip = 88; continue _fun00003;
 77:
            tangon = tangon.8lQ2ra;
            oscard = golfie.bind(option)(tangon);
 88:
            tangon = _closure1_slot4;
            if(zuuluu) { _fun00004_ip = 103; continue _fun00003 }
 95:
            zuuluu = tangon.DISABLE_ACCOUNT;
            _fun00004_ip = 109; continue _fun00003;
 103:
            zuuluu = tangon.DELETE_ACCOUNT;
 109:
            var _closure2_slot1 = zuuluu;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 5;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = {};
            michal = {};
            michal['title'] = oscard;
            zuuluu['modalProps'] = michal;
            michal = false;
            zuuluu['checkEnabled'] = michal;
            michal = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                zuuluu = entity.HTTP;
                michal = zuuluu.post;
                entity = {};
                tangon = _closure2_slot1;
                entity['url'] = tangon;
                tangon = {};
                report = _closure2_slot0;
                tangon['password'] = report;
                oscard = argFoo;
                golfie = tangon;
                report = copyDataProperties(golfie, oscard);
                entity['body'] = tangon;
                tangon = true;
                entity['oldFormErrors'] = tangon;
                tangon = false;
                entity['rejectWithError'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = tangon.bind(report)(michal, zuuluu);
            michal = zuuluu.then;
            entity = function() {
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                entity = 7;
                zuuluu = report[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.logoutInternal;
                zuuluu = zuuluu.bind(tangon)();
                tangon = _closure1_slot0;
                zuuluu = 8;
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.transitionTo;
                michal = _closure1_slot5;
                michal = michal.DEFAULT_LOGGED_OUT;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['disableAccount'] = report;
    zuuluu['saveAccountRequest'] = tangon;
    tangon = function(argFoo) { // Original name: saveAccountChanges
        michal = argFoo;
        zuuluu = michal.username;
        var _closure2_slot0 = zuuluu;
        zuuluu = michal.discriminator;
        var _closure2_slot1 = zuuluu;
        zuuluu = michal.email;
        var _closure2_slot2 = zuuluu;
        zuuluu = michal.emailToken;
        var _closure2_slot3 = zuuluu;
        zuuluu = michal.password;
        var _closure2_slot4 = zuuluu;
        zuuluu = michal.avatar;
        var _closure2_slot5 = zuuluu;
        zuuluu = michal.avatarDescription;
        var _closure2_slot6 = zuuluu;
        zuuluu = michal.avatarId;
        var _closure2_slot7 = zuuluu;
        zuuluu = michal.avatarDecoration;
        var _closure2_slot8 = zuuluu;
        zuuluu = michal.newPassword;
        var _closure2_slot9 = zuuluu;
        michal = michal.globalName;
        var _closure2_slot10 = michal;
        zuuluu = _closure1_slot1;
        offset = _closure1_slot2;
        michal = 3;
        michal = offset[michal];
        report = undefined;
        golfie = zuuluu.bind(report)(michal);
        tangon = golfie.dispatch;
        michal = {};
        option = 'USER_SETTINGS_ACCOUNT_SUBMIT';
        michal['type'] = option;
        michal = tangon.bind(golfie)(michal);
        michal = 5;
        michal = offset[michal];
        tangon = zuuluu.bind(report)(michal);
        zuuluu = {};
        michal = false;
        zuuluu['checkEnabled'] = michal;
        michal = {};
        verify = _closure1_slot0;
        oscard = 4;
        golfie = offset[oscard];
        golfie = verify.bind(report)(golfie);
        option = golfie.intl;
        golfie = option.string;
        oscard = offset[oscard];
        oscard = verify.bind(report)(oscard);
        oscard = oscard.t;
        oscard = oscard.clQc1d;
        oscard = golfie.bind(option)(oscard);
        michal['title'] = oscard;
        zuuluu['modalProps'] = michal;
        michal = {};
        oscard = function() { // Original name: onEarlyClose
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE';
            entity['type'] = tangon;
            tangon = {};
            entity['errors'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal['onEarlyClose'] = oscard;
        zuuluu['hooks'] = michal;
        michal = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = {};
                michal = _closure2_slot0;
                zuuluu['username'] = michal;
                michal = _closure2_slot2;
                zuuluu['email'] = michal;
                michal = _closure2_slot3;
                zuuluu['email_token'] = michal;
                michal = _closure2_slot4;
                zuuluu['password'] = michal;
                michal = _closure2_slot5;
                zuuluu['avatar'] = michal;
                michal = _closure2_slot6;
                zuuluu['avatar_description'] = michal;
                michal = _closure2_slot7;
                zuuluu['avatar_id'] = michal;
                michal = _closure2_slot1;
                zuuluu['discriminator'] = michal;
                michal = _closure2_slot10;
                zuuluu['global_name'] = michal;
                michal = _closure2_slot9;
                zuuluu['new_password'] = michal;
                offset = argFoo;
                yankee = zuuluu;
                michal = copyDataProperties(yankee, offset);
                michal = _closure2_slot8;
                oscard = null;
                if(!(oscard === michal)) { _fun00006_ip = 120; continue _fun00005 }
 114:
                zuuluu['avatar_decoration_id'] = oscard;
 120:
                michal = _closure2_slot8;
                if(!(oscard != michal)) { _fun00006_ip = 155; continue _fun00005 }
 128:
                entity = _closure2_slot8;
                michal = entity.id;
                zuuluu['avatar_decoration_id'] = michal;
                entity = entity.skuId;
                zuuluu['avatar_decoration_sku_id'] = entity;
 155:
                report = _closure1_slot0;
                michal = _closure1_slot2;
                golfie = 9;
                tangon = michal[golfie];
                michal = undefined;
                tangon = report.bind(michal)(tangon);
                option = tangon.Storage;
                report = option.get;
                tangon = _closure1_slot6;
                tangon = report.bind(option)(tangon);
                report = _closure1_slot10;
                report = report.bind(michal)();
                option = oscard != report;
                if(!option) { _fun00006_ip = 219; continue _fun00005 }
 215:
                option = oscard != tangon;
 219:
                if(!option) { _fun00006_ip = 234; continue _fun00005 }
 222:
                zuuluu['push_provider'] = report;
                zuuluu['push_token'] = tangon;
 234:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                tangon = tangon[golfie];
                tangon = report.bind(michal)(tangon);
                golfie = tangon.Storage;
                report = golfie.get;
                tangon = _closure1_slot7;
                tangon = report.bind(golfie)(tangon);
                report = _closure1_slot9;
                report = oscard != report;
                if(!report) { _fun00006_ip = 286; continue _fun00005 }
 282:
                report = oscard != tangon;
 286:
                if(!report) { _fun00006_ip = 305; continue _fun00005 }
 289:
                report = _closure1_slot9;
                zuuluu['push_voip_provider'] = report;
                zuuluu['push_voip_token'] = tangon;
 305:
                entity = _closure1_slot11;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            }
        };
        tangon = tangon.bind(report)(michal, zuuluu);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            entity = argFoo;
            verify = entity.body;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            michal = 10;
            michal = report[michal];
            zuuluu = undefined;
            option = tangon.bind(zuuluu)(michal);
            golfie = option.track;
            michal = _closure1_slot8;
            oscard = michal.USER_AVATAR_UPDATED;
            michal = {};
            yankee = _closure1_slot0;
            offset = 11;
            offset = report[offset];
            yankee = yankee.bind(zuuluu)(offset);
            offset = yankee.isAnimatedIconHash;
            verify = verify.avatar;
            verify = offset.bind(yankee)(verify);
            michal['animated'] = verify;
            verify = false;
            michal['is_guild_profile'] = verify;
            michal = golfie.bind(option)(oscard, michal);
            michal = 3;
            michal = report[michal];
            tangon = tangon.bind(zuuluu)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS';
            michal['type'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = function(argFoo) {
            entity = argFoo;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE';
            michal['type'] = report;
            report = entity.body;
            michal['errors'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['saveAccountChanges'] = tangon;
    tangon = function() { // Original name: getHarvestStatus
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.get;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        tangon = _closure1_slot4;
        tangon = tangon.USER_HARVEST;
        entity['url'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getHarvestStatus'] = tangon;
    tangon = function(argFoo) { // Original name: requestHarvest
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        tangon = _closure1_slot4;
        tangon = tangon.USER_HARVEST;
        entity['url'] = tangon;
        tangon = {};
        report = argFoo;
        tangon['backends'] = report;
        entity['body'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['requestHarvest'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingAvatar
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            oscard = report.bind(entity)(zuuluu);
            report = oscard.dispatch;
            zuuluu = {};
            golfie = 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR';
            zuuluu['type'] = golfie;
            zuuluu['avatar'] = tangon;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00008_ip = 147; continue _fun00007 }
 61:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 12;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(entity)(zuuluu);
            report = zuuluu.AccessibilityAnnouncer;
            tangon = report.announce;
            zuuluu = 4;
            oscard = verify[zuuluu];
            oscard = option.bind(entity)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.NstziY;
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = tangon.bind(report)(zuuluu);
            _fun00008_ip = 231; continue _fun00007;
 147:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 12;
            michal = option[michal];
            michal = golfie.bind(entity)(michal);
            tangon = michal.AccessibilityAnnouncer;
            zuuluu = tangon.announce;
            michal = 4;
            report = option[michal];
            report = golfie.bind(entity)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = option[michal];
            michal = golfie.bind(entity)(michal);
            michal = michal.t;
            michal = michal.f1+oNj;
            michal = report.bind(oscard)(michal);
            michal = zuuluu.bind(tangon)(michal);
 231:
            return entity;
        }
    };
    zuuluu['setPendingAvatar'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingAvatarV2
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            oscard = report.bind(entity)(zuuluu);
            report = oscard.dispatch;
            zuuluu = {};
            golfie = 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_V2';
            zuuluu['type'] = golfie;
            zuuluu['avatar'] = tangon;
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00010_ip = 147; continue _fun00009 }
 61:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 12;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(entity)(zuuluu);
            report = zuuluu.AccessibilityAnnouncer;
            tangon = report.announce;
            zuuluu = 4;
            oscard = verify[zuuluu];
            oscard = option.bind(entity)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.NstziY;
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = tangon.bind(report)(zuuluu);
            _fun00010_ip = 231; continue _fun00009;
 147:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 12;
            michal = option[michal];
            michal = golfie.bind(entity)(michal);
            tangon = michal.AccessibilityAnnouncer;
            zuuluu = tangon.announce;
            michal = 4;
            report = option[michal];
            report = golfie.bind(entity)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = option[michal];
            michal = golfie.bind(entity)(michal);
            michal = michal.t;
            michal = michal.f1+oNj;
            michal = report.bind(oscard)(michal);
            michal = zuuluu.bind(tangon)(michal);
 231:
            return entity;
        }
    };
    zuuluu['setPendingAvatarV2'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingGlobalNameName
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME';
        michal['type'] = report;
        report = argFoo;
        michal['globalName'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingGlobalNameName'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingAvatarDecoration
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION';
        michal['type'] = report;
        report = argFoo;
        michal['avatarDecoration'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingAvatarDecoration'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingProfileEffectId
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID';
        michal['type'] = report;
        report = argFoo;
        michal['profileEffectId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingProfileEffectId'] = tangon;
    tangon = function(argFoo) { // Original name: setSingleTryItOutCollectiblesItem
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM';
        michal['type'] = report;
        report = argFoo;
        michal['item'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setSingleTryItOutCollectiblesItem'] = tangon;
    tangon = function() { // Original name: clearErrors
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_CLEAR_ERRORS';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearErrors'] = tangon;
    tangon = function() { // Original name: resetPendingAccountChanges
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetPendingAccountChanges'] = tangon;
    tangon = function() { // Original name: resetAllPending
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_RESET_ALL_PENDING';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetAllPending'] = tangon;
    tangon = function() { // Original name: resetAllTryItOut
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_RESET_ALL_TRY_IT_OUT';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetAllTryItOut'] = tangon;
    tangon = function() { // Original name: resetAndCloseUserProfileForm
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetAndCloseUserProfileForm'] = tangon;
    michal = function() { // Original name: resetPendingAvatarDecoration
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetPendingAvatarDecoration'] = michal;
    return entity;
})();