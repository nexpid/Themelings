// app/modules/main_tabs_v2/native/settings/definitions/AccountEnable2faSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    golfie = true;
    michal['value'] = golfie;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.MobileSetting;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    verify = michal.RendererType;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    offset = michal.AbortCodes;
    var _closure1_slot4 = offset;
    michal = michal.NOOP_NULL;
    var _closure1_slot5 = michal;
    michal = {};
    verify = verify.PRESSABLE;
    michal['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 6;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.cDgKtb;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = verify;
    option = option.ACCOUNT;
    michal['parent'] = option;
    option = function() { // Original name: onAccountEnable2FASettingPress
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot3;
            entity = michal.getCurrentUser;
            tangon = entity.bind(michal)();
            zuuluu = null;
            oscard = zuuluu == tangon;
            entity = undefined;
            michal = undefined;
            if(oscard) { _fun00002_ip = 35; continue _fun00001 }
 29:
            michal = tangon.verified;
 35:
            if(!(zuuluu != michal)) { _fun00002_ip = 45; continue _fun00001 }
 39:
            if(michal) { _fun00002_ip = 183; continue _fun00001 }
 45:
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 5;
            michal = verify[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.show;
            michal = {};
            option = _closure1_slot0;
            report = 6;
            oscard = verify[report];
            oscard = option.bind(entity)(oscard);
            offset = oscard.intl;
            golfie = offset.string;
            oscard = verify[report];
            oscard = option.bind(entity)(oscard);
            oscard = oscard.t;
            oscard = oscard.v740sr;
            oscard = golfie.bind(offset)(oscard);
            michal['title'] = oscard;
            oscard = verify[report];
            oscard = option.bind(entity)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = verify[report];
            report = option.bind(entity)(report);
            report = report.t;
            report = report.uggF7u;
            report = oscard.bind(golfie)(report);
            michal['body'] = report;
            michal = zuuluu.bind(tangon)(michal);
            _fun00002_ip = 196; continue _fun00001;
 183:
            michal = function() { // Original name: goToAdd2FA
                michal = null;
                var _closure3_slot0 = michal;
                zuuluu = {};
                michal = function(argFoo) { // Original name: onSubmit
                    zuuluu = argFoo;
                    _closure3_slot0 = zuuluu;
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    entity = michal.enableMFAStart;
                    entity = entity.bind(michal)(zuuluu);
                    return entity;
                };
                zuuluu['onSubmit'] = michal;
                entity = function(argFoo) { // Original name: onError
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        entity = entity.body;
                        zuuluu = entity.code;
                        michal = _closure1_slot4;
                        michal = michal.MFA_INVALID_SECRET;
                        michal = zuuluu === michal;
                        if(!michal) { _fun00004_ip = 46; continue _fun00003 }
 33:
                        tangon = _closure3_slot0;
                        zuuluu = null;
                        michal = zuuluu != tangon;
 46:
                        if(!michal) { _fun00004_ip = 118; continue _fun00003 }
 49:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        entity = 8;
                        entity = tangon[entity];
                        michal = undefined;
                        oscard = zuuluu.bind(michal)(entity);
                        report = oscard.open;
                        entity = {};
                        golfie = _closure3_slot0;
                        entity['password'] = golfie;
                        entity = report.bind(oscard)(entity);
                        entity = 5;
                        entity = tangon[entity];
                        michal = zuuluu.bind(michal)(entity);
                        entity = michal.close;
                        entity = entity.bind(michal)();
 118:
                        entity = undefined;
                        return entity;
                    }
                };
                zuuluu['onError'] = entity;
                entity = _closure1_slot5;
                zuuluu['onSuccess'] = entity;
                option = _closure1_slot0;
                report = _closure1_slot2;
                tangon = 6;
                oscard = report[tangon];
                entity = undefined;
                oscard = option.bind(entity)(oscard);
                verify = oscard.intl;
                golfie = verify.string;
                oscard = report[tangon];
                oscard = option.bind(entity)(oscard);
                oscard = oscard.t;
                oscard = oscard.CIGa+/;
                oscard = golfie.bind(verify)(oscard);
                zuuluu['placeholder'] = oscard;
                oscard = report[tangon];
                oscard = option.bind(entity)(oscard);
                golfie = oscard.intl;
                oscard = golfie.string;
                tangon = report[tangon];
                tangon = option.bind(entity)(tangon);
                tangon = tangon.t;
                tangon = tangon.cDgKtb;
                oscard = oscard.bind(golfie)(tangon);
                tangon = oscard.toUpperCase;
                tangon = tangon.bind(oscard)();
                zuuluu['title'] = tangon;
                tangon = true;
                zuuluu['closeOnSuccess'] = tangon;
                tangon = _closure1_slot1;
                oscard = 9;
                oscard = report[oscard];
                oscard = tangon.bind(entity)(oscard);
                oscard = oscard.Colors;
                oscard = oscard.BRAND;
                zuuluu['confirmColor'] = oscard;
                michal = _closure1_slot4;
                michal = michal.MFA_INVALID_SECRET;
                zuuluu['skipErrorMsgAbortCode'] = michal;
                michal = 10;
                michal = report[michal];
                michal = tangon.bind(entity)(michal);
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            michal = michal.bind(entity)();
 196:
            return entity;
        }
    };
    michal['onPress'] = option;
    michal['withArrow'] = golfie;
    tangon = function() { // Original name: useHasAccountEnable2FASetting
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        entity = michal.useIsTOTPEnabled;
        entity = entity.bind(michal)();
        entity = !entity;
        return entity;
    };
    michal['usePredicate'] = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/AccountEnable2faSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();