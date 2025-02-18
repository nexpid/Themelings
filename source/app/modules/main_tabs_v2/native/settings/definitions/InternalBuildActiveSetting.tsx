// app/modules/main_tabs_v2/native/settings/definitions/InternalBuildActiveSetting.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
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
    michal = {'type': null, 'title': 'Internal Build Active', 'parent': null};
    golfie = 1;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.RendererType;
    golfie = golfie.STATIC;
    michal['type'] = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.MobilePhoneSettingsIcon;
    michal['IconComponent'] = golfie;
    golfie = function() { // Original name: useInternalBuildActiveDescription
        entity = 'Build installed from builds.discord.tools';
        return entity;
    };
    michal['useDescription'] = golfie;
    tangon = function() { // Original name: useHasCheckNativeUpdateSetting
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.useStaffOrDevEnvSettingPredicate;
            michal = michal.bind(zuuluu)();
            entity = _closure1_slot2;
            entity = entity.hasUpdatesConfigured;
            if(!entity) { _fun00002_ip = 51; continue _fun00001 }
 48:
            entity = michal;
 51:
            return entity;
        }
    };
    michal['usePredicate'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/InternalBuildActiveSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();