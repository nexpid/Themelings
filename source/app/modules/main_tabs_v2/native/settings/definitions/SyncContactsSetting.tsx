// app/modules/main_tabs_v2/native/settings/definitions/SyncContactsSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.RendererType;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.PlatformTypes;
    var _closure1_slot4 = michal;
    michal = {};
    option = option.TOGGLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 7;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.uSvEy8;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    golfie = golfie.CONTENT_AND_SOCIAL;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useContactSyncSettingValue
        tangon = _closure1_slot0;
        report = _closure1_slot1;
        entity = 5;
        zuuluu = report[entity];
        michal = undefined;
        oscard = tangon.bind(michal)(zuuluu);
        zuuluu = oscard.useContactSyncAccount;
        zuuluu = zuuluu.bind(oscard)();
        entity = report[entity];
        michal = tangon.bind(michal)(entity);
        entity = michal.isContactSyncEnabled;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal['useValue'] = golfie;
    tangon = function(argFoo) { // Original name: onContactSyncSettingValueChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot2;
            zuuluu = tangon.getLocalAccount;
            entity = _closure1_slot4;
            entity = entity.CONTACTS;
            oscard = zuuluu.bind(tangon)(entity);
            zuuluu = _closure1_slot3;
            entity = zuuluu.getCurrentUser;
            zuuluu = entity.bind(zuuluu)();
            entity = null;
            tangon = entity == zuuluu;
            entity = undefined;
            report = undefined;
            if(tangon) { _fun00002_ip = 60; continue _fun00001 }
 54:
            report = zuuluu.phone;
 60:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 6;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.handleSyncContacts;
            michal = argFoo;
            michal = zuuluu.bind(tangon)(oscard, report, michal);
            return entity;
        }
    };
    michal['onValueChange'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/SyncContactsSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();