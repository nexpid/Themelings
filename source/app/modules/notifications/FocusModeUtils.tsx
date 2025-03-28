// app/modules/notifications/FocusModeUtils.tsx
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
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NotificationSettingsUpdateType;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot5 = golfie;
    tangon = tangon.StatusTypes;
    var _closure1_slot6 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/notifications/FocusModeUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useFocusModeEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 3;
            entity = tangon[michal];
            golfie = undefined;
            entity = zuuluu.bind(golfie)(entity);
            report = entity.FocusMode;
            entity = report.useSetting;
            entity = entity.bind(report)();
            michal = tangon[michal];
            michal = zuuluu.bind(golfie)(michal);
            zuuluu = michal.FocusModeExpiresAtSetting;
            michal = zuuluu.useSetting;
            report = michal.bind(zuuluu)();
            if(!entity) { _fun00002_ip = 180; continue _fun00001 }
 69:
            michal = '0';
            michal = michal === report;
            if(michal) { _fun00002_ip = 177; continue _fun00001 }
 82:
            zuuluu = global;
            oscard = zuuluu.Date;
            tangon = zuuluu.Number;
            option = tangon.bind(golfie)(report);
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            verify = report;
            tangon = new verify[oscard](option, golfie);
            report = tangon instanceof Object ? tangon : report;
            tangon = report.getTime;
            tangon = tangon.bind(report)();
            zuuluu = zuuluu.Date;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            verify = report;
            zuuluu = new verify[zuuluu](option);
            report = zuuluu instanceof Object ? zuuluu : report;
            zuuluu = report.getTime;
            zuuluu = zuuluu.bind(report)();
            tangon = tangon - zuuluu;
            zuuluu = 0;
            michal = tangon > zuuluu;
 177:
            entity = michal;
 180:
            return entity;
        }
    };
    zuuluu['useFocusModeEnabled'] = tangon;
    tangon = function() { // Original name: getFocusModeEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 3;
            entity = tangon[michal];
            oscard = undefined;
            entity = zuuluu.bind(oscard)(entity);
            report = entity.FocusMode;
            entity = report.getSetting;
            entity = entity.bind(report)();
            michal = tangon[michal];
            michal = zuuluu.bind(oscard)(michal);
            zuuluu = michal.FocusModeExpiresAtSetting;
            michal = zuuluu.getSetting;
            tangon = michal.bind(zuuluu)();
            if(!entity) { _fun00004_ip = 75; continue _fun00003 }
 69:
            michal = null;
            entity = michal != tangon;
 75:
            if(!entity) { _fun00004_ip = 173; continue _fun00003 }
 78:
            michal = global;
            report = michal.Date;
            zuuluu = michal.Number;
            golfie = zuuluu.bind(oscard)(tangon);
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            option = tangon;
            zuuluu = new option[report](golfie, oscard);
            tangon = zuuluu instanceof Object ? zuuluu : tangon;
            zuuluu = tangon.getTime;
            zuuluu = zuuluu.bind(tangon)();
            michal = michal.Date;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            option = tangon;
            michal = new option[michal](golfie);
            tangon = michal instanceof Object ? michal : tangon;
            michal = tangon.getTime;
            michal = michal.bind(tangon)();
            zuuluu = zuuluu - michal;
            michal = 0;
            entity = zuuluu > michal;
 173:
            return entity;
        }
    };
    zuuluu['getFocusModeEnabled'] = tangon;
    michal = function(argFoo, argBar) { // Original name: setFocusMode
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            var _closure2_slot0 = zuuluu;
            var _closure2_slot1 = tangon;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 3;
            michal = option[entity];
            entity = undefined;
            michal = golfie.bind(entity)(michal);
            verify = michal.FocusMode;
            michal = verify.getSetting;
            offset = michal.bind(verify)();
            michal = 4;
            verify = option[michal];
            verify = golfie.bind(entity)(verify);
            romeon = verify.PreloadedUserSettingsActionCreators;
            yankee = romeon.updateAsync;
            michal = option[michal];
            michal = golfie.bind(entity)(michal);
            michal = michal.UserSettingsDelay;
            verify = michal.INFREQUENT_USER_ACTION;
            golfie = 'notifications';
            michal = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    golfie = michal.BoolValue;
                    oscard = golfie.create;
                    michal = {};
                    tangon = _closure2_slot0;
                    michal['value'] = tangon;
                    michal = oscard.bind(golfie)(michal);
                    zuuluu['quietMode'] = michal;
                    oscard = '0';
                    michal = oscard;
                    if(!tangon) { _fun00008_ip = 136; continue _fun00007 }
 75:
                    golfie = _closure2_slot1;
                    tangon = null;
                    tangon = tangon != golfie;
                    michal = oscard;
                    if(!tangon) { _fun00008_ip = 136; continue _fun00007 }
 91:
                    tangon = global;
                    golfie = tangon.Date;
                    oscard = golfie.now;
                    oscard = oscard.bind(golfie)();
                    report = _closure2_slot1;
                    oscard = oscard + report;
                    tangon = tangon.HermesInternal;
                    report = tangon.concat;
                    tangon = '';
                    michal = report.bind(tangon)(oscard);
 136:
                    zuuluu['focusModeExpiresAtMs'] = michal;
                    return entity;
                }
            };
            michal = yankee.bind(romeon)(golfie, michal, verify);
            golfie = _closure1_slot1;
            michal = 6;
            michal = option[michal];
            verify = golfie.bind(entity)(michal);
            option = verify.track;
            michal = _closure1_slot5;
            golfie = michal.NOTIFICATION_SETTINGS_UPDATED;
            michal = {};
            yankee = _closure1_slot4;
            yankee = yankee.ACCOUNT;
            michal['update_type'] = yankee;
            michal['quiet_mode_enabled'] = zuuluu;
            michal['quiet_mode_enabled_old'] = offset;
            michal = option.bind(verify)(golfie, michal);
            golfie = _closure1_slot3;
            michal = golfie.getStatus;
            golfie = michal.bind(golfie)();
            michal = _closure1_slot6;
            michal = michal.DND;
            michal = golfie === michal;
            if(!michal) { _fun00006_ip = 216; continue _fun00005 }
 213:
            michal = zuuluu;
 216:
            if(!michal) { _fun00006_ip = 225; continue _fun00005 }
 219:
            zuuluu = null;
            michal = zuuluu == tangon;
 225:
            if(!michal) { _fun00006_ip = 479; continue _fun00005 }
 231:
            zuuluu = _closure1_slot1;
            offset = _closure1_slot2;
            michal = 7;
            michal = offset[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.show;
            michal = {};
            verify = _closure1_slot0;
            oscard = 8;
            golfie = offset[oscard];
            golfie = verify.bind(entity)(golfie);
            yankee = golfie.intl;
            option = yankee.string;
            golfie = offset[oscard];
            golfie = verify.bind(entity)(golfie);
            golfie = golfie.t;
            golfie = golfie.B+cbLS;
            golfie = option.bind(yankee)(golfie);
            michal['title'] = golfie;
            golfie = offset[oscard];
            golfie = verify.bind(entity)(golfie);
            yankee = golfie.intl;
            option = yankee.string;
            golfie = offset[oscard];
            golfie = verify.bind(entity)(golfie);
            golfie = golfie.t;
            golfie = golfie.CYVgLC;
            golfie = option.bind(yankee)(golfie);
            michal['body'] = golfie;
            golfie = offset[oscard];
            golfie = verify.bind(entity)(golfie);
            yankee = golfie.intl;
            option = yankee.string;
            golfie = offset[oscard];
            golfie = verify.bind(entity)(golfie);
            golfie = golfie.t;
            golfie = golfie.f3Pet7;
            golfie = option.bind(yankee)(golfie);
            michal['cancelText'] = golfie;
            golfie = offset[oscard];
            golfie = verify.bind(entity)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(entity)(oscard);
            oscard = oscard.t;
            oscard = oscard.BddRzc;
            oscard = golfie.bind(option)(oscard);
            michal['confirmText'] = oscard;
            report = function() { // Original name: onConfirm
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = {};
                tangon = _closure1_slot6;
                tangon = tangon.ONLINE;
                michal['nextStatus'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal['onConfirm'] = report;
            michal = zuuluu.bind(tangon)(michal);
 479:
            return entity;
        }
    };
    zuuluu['setFocusMode'] = michal;
    return entity;
})();