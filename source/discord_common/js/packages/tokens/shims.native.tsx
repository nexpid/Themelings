// discord_common/js/packages/tokens/shims.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/tokens/shims.native.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: unsafe_getRawColor
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        michal = entity.unsafe_rawColors;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    zuuluu['unsafe_getRawColor'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getResolvedSemanticColor
        report = argBar;
        golfie = _closure1_slot0;
        option = _closure1_slot1;
        entity = 0;
        michal = option[entity];
        oscard = undefined;
        michal = golfie.bind(oscard)(michal);
        tangon = michal.internal;
        zuuluu = tangon.resolveSemanticColor;
        michal = report.theme;
        entity = option[entity];
        entity = golfie.bind(oscard)(entity);
        oscard = entity.colors;
        entity = argFoo;
        entity = oscard[entity];
        entity = zuuluu.bind(tangon)(michal, entity, report);
        return entity;
    };
    zuuluu['getResolvedSemanticColor'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: unsafe_getResolvedRawColor
        zuuluu = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 0;
        tangon = oscard[entity];
        michal = undefined;
        tangon = zuuluu.bind(michal)(tangon);
        report = tangon.internal;
        tangon = report.adjustColorSaturation;
        entity = oscard[entity];
        entity = zuuluu.bind(michal)(entity);
        michal = entity.unsafe_rawColors;
        entity = argFoo;
        zuuluu = michal[entity];
        entity = argBar;
        michal = entity.saturation;
        entity = 'generic';
        entity = tangon.bind(report)(zuuluu, michal, entity);
        return entity;
    };
    zuuluu['unsafe_getResolvedRawColor'] = tangon;
    tangon = function() { // Original name: getThemes
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.themes;
        return entity;
    };
    zuuluu['getThemes'] = tangon;
    michal = function() { // Original name: getRadii
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.radii;
        return entity;
    };
    zuuluu['getRadii'] = michal;
    return entity;
})();