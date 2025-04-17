// app/modules/main_tabs_v2/native/settings/definitions/AccountEnable2faSetting.tsx
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
    michal = {};
    verify = 2;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.RendererType;
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
            zuuluu = _closure1_slot3;
            entity = zuuluu.getCurrentUser;
            report = entity.bind(zuuluu)();
            tangon = null;
            oscard = tangon == report;
            entity = undefined;
            zuuluu = undefined;
            if(oscard) { _fun00002_ip = 35; continue _fun00001 }
 29:
            zuuluu = report.verified;
 35:
            if(!(tangon != zuuluu)) { _fun00002_ip = 45; continue _fun00001 }
 39:
            if(zuuluu) { _fun00002_ip = 183; continue _fun00001 }
 45:
            tangon = _closure1_slot1;
            offset = _closure1_slot2;
            zuuluu = 5;
            zuuluu = offset[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.show;
            zuuluu = {};
            verify = _closure1_slot0;
            oscard = 6;
            golfie = offset[oscard];
            golfie = verify.bind(entity)(golfie);
            yankee = golfie.intl;
            option = yankee.string;
            golfie = offset[oscard];
            golfie = verify.bind(entity)(golfie);
            golfie = golfie.t;
            golfie = golfie.v740sr;
            golfie = option.bind(yankee)(golfie);
            zuuluu['title'] = golfie;
            golfie = offset[oscard];
            golfie = verify.bind(entity)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(entity)(oscard);
            oscard = oscard.t;
            oscard = oscard.uggF7u;
            oscard = golfie.bind(option)(oscard);
            zuuluu['body'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            _fun00002_ip = 213; continue _fun00001;
 183:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 4;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.open;
            michal = michal.bind(zuuluu)();
 213:
            return entity;
        }
    };
    michal['onPress'] = option;
    michal['withArrow'] = golfie;
    tangon = function() { // Original name: useHasAccountEnable2FASetting
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        entity = michal.useIsTOTPEnabled;
        entity = entity.bind(michal)();
        entity = !entity;
        return entity;
    };
    michal['usePredicate'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/AccountEnable2faSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();