// app/modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.USERS_LIST_SECTION_HEIGHT;
    var _closure1_slot2 = golfie;
    tangon = tangon.USERS_LIST_SECTION_TEXT_HEIGHT;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/user_list/useScaledSectionHeight.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useScaledSectionHeight
        tangon = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        michal = tangon.bind(entity)(michal);
        entity = michal.useFontScale;
        option = entity.bind(michal)();
        michal = _closure1_slot2;
        entity = global;
        report = entity.Math;
        tangon = report.max;
        golfie = entity.Math;
        oscard = golfie.min;
        entity = 2;
        entity = oscard.bind(golfie)(option, entity);
        zuuluu = _closure1_slot3;
        entity = entity * zuuluu;
        zuuluu = entity - zuuluu;
        entity = 0;
        entity = tangon.bind(report)(zuuluu, entity);
        entity = michal + entity;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();