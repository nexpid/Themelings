// app/modules/main_tabs_v2/native/settings/definitions/AndroidViewNsfwDmCommandsSetting.tsx
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
        entity = 7;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.VGWIAg;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    option = function() { // Original name: useDescription
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
        entity = entity.J4zza2;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['useDescription'] = option;
    golfie = golfie.CONTENT_AND_SOCIAL_DISCORD;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useViewNsfwDmCommandsSettingValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            zuuluu = undefined;
            golfie = tangon.bind(zuuluu)(michal);
            oscard = golfie.useStateFromStores;
            entity = _closure1_slot2;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot2;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = oscard.bind(golfie)(michal, entity);
            michal = 4;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            tangon = michal.ViewNsfwCommands;
            michal = tangon.useSetting;
            michal = michal.bind(tangon)();
            tangon = null;
            tangon = tangon == entity;
            if(tangon) { _fun00002_ip = 100; continue _fun00001 }
 94:
            zuuluu = entity.nsfwAllowed;
 100:
            entity = true;
            entity = entity === zuuluu;
            if(!entity) { _fun00002_ip = 112; continue _fun00001 }
 109:
            entity = michal;
 112:
            return entity;
        }
    };
    michal['useValue'] = golfie;
    golfie = 4;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.ViewNsfwCommands;
    golfie = golfie.updateSetting;
    michal['onValueChange'] = golfie;
    tangon = function() { // Original name: usePredicate
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 5;
            entity = tangon[entity];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.useNSFWAllowed;
            zuuluu = entity.bind(zuuluu)();
            entity = null;
            entity = entity == zuuluu;
            if(entity) { _fun00004_ip = 47; continue _fun00003 }
 44:
            entity = zuuluu;
 47:
            if(!entity) { _fun00004_ip = 79; continue _fun00003 }
 50:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 6;
            michal = report[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.isAndroid;
            entity = michal.bind(zuuluu)();
 79:
            return entity;
        }
    };
    michal['usePredicate'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/AndroidViewNsfwDmCommandsSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    zuuluu['AndroidViewNsfwDmCommandsSettingV2'] = michal;
    return entity;
})();