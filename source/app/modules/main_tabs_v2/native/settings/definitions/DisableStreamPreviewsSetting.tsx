// app/modules/main_tabs_v2/native/settings/definitions/DisableStreamPreviewsSetting.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
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
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = {};
    option = 1;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.RendererType;
    option = option.TOGGLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 3;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.1CzWUF;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    option = function() { // Original name: useDescription
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 3;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.jTNPHB;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['useDescription'] = option;
    golfie = golfie.VOICE;
    michal['parent'] = golfie;
    tangon = function() { // Original name: useValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            michal = entity.DisableStreamPreviews;
            entity = michal.useSetting;
            michal = entity.bind(michal)();
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 53; continue _fun00001 }
 50:
            entity = michal;
 53:
            return entity;
        }
    };
    michal['useValue'] = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DisableStreamPreviews;
    tangon = tangon.updateSetting;
    michal['onValueChange'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/DisableStreamPreviewsSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();