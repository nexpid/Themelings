// app/modules/main_tabs_v2/native/settings/definitions/DataSavingModeSetting.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    golfie = oscard[entity];
    michal = argBaz;
    entity = undefined;
    michal = michal.bind(entity)(golfie);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = {};
    option = 2;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.RendererType;
    option = option.TOGGLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 6;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.ix8XIi;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    golfie = golfie.CHAT;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useDataSavingModeSettingValue
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        entity = _closure1_slot2;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            entity = _closure1_slot2;
            entity = entity.dataSavingMode;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['useValue'] = golfie;
    tangon = function(argFoo) { // Original name: onDataSavingModeSettingValueChange
        golfie = _closure1_slot0;
        option = _closure1_slot1;
        entity = 4;
        michal = option[entity];
        entity = undefined;
        tangon = golfie.bind(entity)(michal);
        zuuluu = tangon.setDataSavingMode;
        michal = {};
        report = _closure1_slot2;
        oscard = report.videoUploadQuality;
        michal['videoUploadQuality'] = oscard;
        oscard = 5;
        oscard = option[oscard];
        oscard = golfie.bind(entity)(oscard);
        golfie = oscard.ViewImageDescriptions;
        oscard = golfie.getSetting;
        oscard = oscard.bind(golfie)();
        michal['viewImageDescriptions'] = oscard;
        report = report.lowQualityImageMode;
        michal['lowQualityImageMode'] = report;
        report = argFoo;
        michal['dataSavingMode'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['onValueChange'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/DataSavingModeSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();