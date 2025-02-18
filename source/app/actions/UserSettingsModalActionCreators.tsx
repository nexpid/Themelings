// app/actions/UserSettingsModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.Endpoints;
    var _closure1_slot4 = golfie;
    golfie = michal.AnalyticEvents;
    var _closure1_slot5 = golfie;
    golfie = michal.DEVICE_TOKEN;
    var _closure1_slot6 = golfie;
    golfie = michal.DEVICE_VOIP_TOKEN;
    var _closure1_slot7 = golfie;
    michal = michal.Layers;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.DEVICE_PUSH_VOIP_PROVIDER;
    var _closure1_slot8 = golfie;
    michal = michal.getDevicePushProvider;
    var _closure1_slot9 = michal;
    michal = {};
    golfie = function() { // Original name: open
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = arguments[0];
            oscard = arguments[1];
            report = arguments[2];
            entity = undefined;
            if(!(golfie === entity)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            golfie = null;
 17:
            if(!(oscard === entity)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            oscard = null;
 23:
            if(!(report === entity)) { _fun00002_ip = 39; continue _fun00001 }
 27:
            michal = {};
            zuuluu = false;
            michal['openWithoutBackstack'] = zuuluu;
            report = michal;
 39:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 3;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            option = 'USER_SETTINGS_MODAL_OPEN';
            michal['type'] = option;
            michal['section'] = golfie;
            michal['subsection'] = oscard;
            offset = michal;
            verify = report;
            report = copyDataProperties(offset, verify);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['open'] = golfie;
    golfie = function(argFoo) { // Original name: init
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = arguments[1];
            entity = undefined;
            if(!(report === entity)) { _fun00004_ip = 11; continue _fun00003 }
 9:
            report = null;
 11:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 3;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'USER_SETTINGS_MODAL_INIT';
            michal['type'] = oscard;
            oscard = argFoo;
            michal['section'] = oscard;
            michal['subsection'] = report;
            golfie = arguments[2];
            option = michal;
            report = copyDataProperties(option, golfie);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['init'] = golfie;
    golfie = function() { // Original name: close
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = _closure1_slot3;
            michal = michal.onClose;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.dispatch;
            zuuluu = {};
            oscard = 'USER_SETTINGS_MODAL_CLOSE';
            zuuluu['type'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00006_ip = 65; continue _fun00005 }
 61:
            michal = michal.bind(entity)();
 65:
            return entity;
        }
    };
    michal['close'] = golfie;
    golfie = function(argFoo) { // Original name: setSection
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = arguments[1];
            report = arguments[2];
            entity = undefined;
            if(!(oscard === entity)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            oscard = null;
 14:
            if(!(report === entity)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            report = {};
 20:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 3;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            golfie = 'USER_SETTINGS_MODAL_SET_SECTION';
            michal['type'] = golfie;
            golfie = argFoo;
            michal['section'] = golfie;
            michal['subsection'] = oscard;
            verify = michal;
            option = report;
            report = copyDataProperties(verify, option);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['setSection'] = golfie;
    golfie = function(argFoo) { // Original name: clearSubsection
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_MODAL_CLEAR_SUBSECTION';
        michal['type'] = report;
        report = argFoo;
        michal['forSection'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['clearSubsection'] = golfie;
    golfie = function(argFoo) { // Original name: clearScrollPosition
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION';
        michal['type'] = report;
        report = argFoo;
        michal['forSection'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['clearScrollPosition'] = golfie;
    golfie = function(argFoo) { // Original name: updateAccount
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_MODAL_UPDATE_ACCOUNT';
        michal['type'] = report;
        report = argFoo;
        michal['settings'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['updateAccount'] = golfie;
    golfie = function() { // Original name: submitComplete
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_MODAL_SUBMIT_COMPLETE';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['submitComplete'] = golfie;
    golfie = function() { // Original name: reset
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_MODAL_RESET';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['reset'] = golfie;
    tangon = function(argFoo, argBar) { // Original name: saveAccountChanges
        michal = argFoo;
        zuuluu = this;
        var _closure2_slot0 = zuuluu;
        zuuluu = _closure1_slot1;
        offset = _closure1_slot2;
        tangon = 3;
        tangon = offset[tangon];
        report = undefined;
        option = zuuluu.bind(report)(tangon);
        golfie = option.dispatch;
        tangon = {};
        verify = 'USER_SETTINGS_MODAL_SUBMIT';
        tangon['type'] = verify;
        tangon = golfie.bind(option)(tangon);
        tangon = michal.username;
        var _closure2_slot1 = tangon;
        tangon = michal.email;
        var _closure2_slot2 = tangon;
        tangon = michal.emailToken;
        var _closure2_slot3 = tangon;
        tangon = michal.password;
        var _closure2_slot4 = tangon;
        tangon = michal.avatar;
        var _closure2_slot5 = tangon;
        tangon = michal.newPassword;
        var _closure2_slot6 = tangon;
        michal = michal.discriminator;
        var _closure2_slot7 = michal;
        michal = argBar;
        michal = michal.close;
        var _closure2_slot8 = michal;
        michal = 4;
        michal = offset[michal];
        tangon = zuuluu.bind(report)(michal);
        zuuluu = {};
        michal = false;
        zuuluu['checkEnabled'] = michal;
        michal = {};
        verify = _closure1_slot0;
        oscard = 7;
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
            tangon = 'USER_SETTINGS_MODAL_SUBMIT_FAILURE';
            entity['type'] = tangon;
            tangon = {};
            entity['errors'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal['onEarlyClose'] = oscard;
        zuuluu['hooks'] = michal;
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = {};
                michal = _closure2_slot1;
                tangon['username'] = michal;
                michal = _closure2_slot2;
                tangon['email'] = michal;
                michal = _closure2_slot3;
                tangon['email_token'] = michal;
                michal = _closure2_slot4;
                tangon['password'] = michal;
                michal = _closure2_slot5;
                tangon['avatar'] = michal;
                michal = _closure2_slot6;
                tangon['new_password'] = michal;
                offset = argFoo;
                yankee = tangon;
                michal = copyDataProperties(yankee, offset);
                michal = _closure2_slot7;
                oscard = null;
                report = oscard != michal;
                zuuluu = undefined;
                michal = undefined;
                if(!report) { _fun00010_ip = 103; continue _fun00009 }
 85:
                golfie = _closure2_slot7;
                report = '';
                michal = undefined;
                if(!(report !== golfie)) { _fun00010_ip = 103; continue _fun00009 }
 99:
                michal = _closure2_slot7;
 103:
                entity = 'discriminator';
                tangon[entity] = michal;
                michal = _closure1_slot0;
                entity = _closure1_slot2;
                golfie = 5;
                entity = entity[golfie];
                entity = michal.bind(zuuluu)(entity);
                option = entity.Storage;
                michal = option.get;
                entity = _closure1_slot6;
                entity = michal.bind(option)(entity);
                michal = _closure1_slot9;
                michal = michal.bind(zuuluu)();
                option = oscard != michal;
                if(!option) { _fun00010_ip = 174; continue _fun00009 }
 170:
                option = oscard != entity;
 174:
                if(!option) { _fun00010_ip = 189; continue _fun00009 }
 177:
                tangon['push_provider'] = michal;
                tangon['push_token'] = entity;
 189:
                michal = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golfie];
                entity = michal.bind(zuuluu)(entity);
                golfie = entity.Storage;
                michal = golfie.get;
                entity = _closure1_slot7;
                entity = michal.bind(golfie)(entity);
                michal = _closure1_slot8;
                michal = oscard != michal;
                if(!michal) { _fun00010_ip = 241; continue _fun00009 }
 237:
                michal = oscard != entity;
 241:
                if(!michal) { _fun00010_ip = 260; continue _fun00009 }
 244:
                michal = _closure1_slot8;
                tangon['push_voip_provider'] = michal;
                tangon['push_voip_token'] = entity;
 260:
                michal = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 6;
                entity = oscard[entity];
                entity = michal.bind(zuuluu)(entity);
                zuuluu = entity.HTTP;
                michal = zuuluu.patch;
                entity = {};
                report = _closure1_slot4;
                report = report.ME;
                entity['url'] = report;
                report = true;
                entity['oldFormErrors'] = report;
                entity['body'] = tangon;
                tangon = false;
                entity['rejectWithError'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        tangon = tangon.bind(report)(michal, zuuluu);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                oscard = entity.body;
                yankee = oscard.token;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                report = 8;
                golfie = zuuluu[report];
                report = undefined;
                offset = tangon.bind(report)(golfie);
                verify = offset.track;
                golfie = _closure1_slot5;
                option = golfie.USER_AVATAR_UPDATED;
                golfie = {};
                foxtra = _closure1_slot0;
                romeon = 9;
                romeon = zuuluu[romeon];
                backup = foxtra.bind(report)(romeon);
                foxtra = backup.isAnimatedIconHash;
                romeon = oscard.avatar;
                romeon = foxtra.bind(backup)(romeon);
                golfie['animated'] = romeon;
                golfie = verify.bind(offset)(option, golfie);
                golfie = delete oscard.token;
                golfie = 3;
                option = zuuluu[golfie];
                offset = tangon.bind(report)(option);
                verify = offset.dispatch;
                option = {};
                romeon = 'UPDATE_TOKEN';
                option['type'] = romeon;
                option['token'] = yankee;
                yankee = oscard.id;
                option['userId'] = yankee;
                option = verify.bind(offset)(option);
                zuuluu = zuuluu[golfie];
                option = tangon.bind(report)(zuuluu);
                tangon = option.dispatch;
                zuuluu = {};
                verify = 'CURRENT_USER_UPDATE';
                zuuluu['type'] = verify;
                zuuluu['user'] = oscard;
                zuuluu = tangon.bind(option)(zuuluu);
                tangon = _closure2_slot6;
                verify = null;
                if(!(verify != tangon)) { _fun00012_ip = 249; continue _fun00011 }
 197:
                option = _closure1_slot1;
                tangon = _closure1_slot2;
                tangon = tangon[golfie];
                offset = option.bind(report)(tangon);
                option = offset.dispatch;
                tangon = {};
                yankee = 'USER_PASSWORD_UPDATE';
                tangon['type'] = yankee;
                tangon['user'] = oscard;
                yankee = _closure2_slot6;
                tangon['newPassword'] = yankee;
                tangon = option.bind(offset)(tangon);
 249:
                tangon = _closure2_slot4;
                tangon = verify != tangon;
                if(!tangon) { _fun00012_ip = 268; continue _fun00011 }
 260:
                option = _closure2_slot6;
                tangon = verify != option;
 268:
                if(!tangon) { _fun00012_ip = 319; continue _fun00011 }
 271:
                tangon = _closure1_slot1;
                michal = _closure1_slot2;
                michal = michal[golfie];
                report = tangon.bind(report)(michal);
                tangon = report.dispatch;
                michal = {};
                golfie = 'PASSWORD_UPDATED';
                michal['type'] = golfie;
                oscard = oscard.id;
                michal['userId'] = oscard;
                michal = tangon.bind(report)(michal);
 319:
                michal = _closure2_slot8;
                zuuluu = _closure2_slot0;
                if(michal) { _fun00012_ip = 342; continue _fun00011 }
 330:
                michal = zuuluu.submitComplete;
                michal = michal.bind(zuuluu)();
                _fun00012_ip = 352; continue _fun00011;
 342:
                michal = zuuluu.close;
                michal = michal.bind(zuuluu)();
 352:
                return entity;
            }
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
            report = 'USER_SETTINGS_MODAL_SUBMIT_FAILURE';
            michal['type'] = report;
            report = entity.body;
            michal['errors'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['saveAccountChanges'] = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/UserSettingsModalActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();