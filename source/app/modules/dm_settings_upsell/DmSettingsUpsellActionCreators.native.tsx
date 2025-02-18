// app/modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.DM_SETTINGS_UPSELL_LAST_SHOWN_KEY;
    var _closure1_slot3 = golfie;
    michal = michal.DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS;
    var _closure1_slot4 = michal;
    michal = {};
    tangon = function(argFoo) { // Original name: openDmSettingsUpsellModal
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 1;
            zuuluu = entity[oscard];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            report = zuuluu.Storage;
            tangon = report.get;
            zuuluu = _closure1_slot3;
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = global;
            report = tangon.Date;
            tangon = report.now;
            report = tangon.bind(report)();
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00002_ip = 138; continue _fun00001 }
 71:
            tangon = report - zuuluu;
            zuuluu = _closure1_slot4;
            if(!(!(tangon > zuuluu))) { _fun00002_ip = 138; continue _fun00001 }
 83:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 5;
            tangon = offset[zuuluu];
            option = verify.bind(entity)(tangon);
            tangon = option.trackEvent;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(entity)(zuuluu);
            zuuluu = zuuluu.DmUpsellActionTypes;
            zuuluu = zuuluu.SUPPRESSED_BY_COOLDOWN;
            zuuluu = tangon.bind(option)(zuuluu, golfie);
            _fun00002_ip = 247; continue _fun00001;
 138:
            option = _closure1_slot1;
            zuuluu = _closure1_slot2;
            tangon = 2;
            tangon = zuuluu[tangon];
            yankee = option.bind(entity)(tangon);
            offset = yankee.openLazy;
            tangon = _closure1_slot0;
            option = 4;
            option = zuuluu[option];
            romeon = tangon.bind(entity)(option);
            option = 3;
            verify = zuuluu[option];
            option = zuuluu.paths;
            verify = romeon.bind(entity)(verify, option);
            option = {};
            option['guildId'] = golfie;
            golfie = 'dm_settings_upsell_modal';
            golfie = offset.bind(yankee)(verify, golfie, option);
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = zuuluu.Storage;
            zuuluu = tangon.set;
            michal = _closure1_slot3;
            michal = zuuluu.bind(tangon)(michal, report);
 247:
            return entity;
        }
    };
    michal['openDmSettingsUpsellModal'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();