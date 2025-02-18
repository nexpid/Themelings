// app/modules/main_tabs_v2/native/settings/definitions/AccountPhoneSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    tangon = true;
    michal['value'] = tangon;
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
    michal = michal.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot4 = michal;
    michal = {};
    verify = verify.PRESSABLE;
    michal['type'] = verify;
    verify = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 9;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.dEYpSk;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = verify;
    option = option.ACCOUNT;
    michal['parent'] = option;
    option = function() { // Original name: useAccountPhoneSettingTrailing
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 4;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot3;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                michal = entity.bind(michal)();
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00002_ip = 33; continue _fun00001 }
 27:
                entity = michal.phone;
 33:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['useTrailing'] = option;
    golfie = function() { // Original name: onAccountPhoneSettingPress
        tangon = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 5;
        zuuluu = verify[entity];
        entity = undefined;
        oscard = tangon.bind(entity)(zuuluu);
        report = oscard.pushLazy;
        option = _closure1_slot0;
        zuuluu = 7;
        zuuluu = verify[zuuluu];
        golfie = option.bind(entity)(zuuluu);
        zuuluu = 6;
        tangon = verify[zuuluu];
        zuuluu = verify.paths;
        tangon = golfie.bind(entity)(tangon, zuuluu);
        zuuluu = {};
        golfie = true;
        zuuluu['allowDeletePhone'] = golfie;
        golfie = 8;
        golfie = verify[golfie];
        golfie = option.bind(entity)(golfie);
        golfie = golfie.ChangePhoneReason;
        golfie = golfie.USER_SETTINGS_UPDATE;
        zuuluu['reason'] = golfie;
        michal = _closure1_slot4;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    michal['onPress'] = golfie;
    michal['withArrow'] = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/AccountPhoneSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();