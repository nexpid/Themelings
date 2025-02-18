// app/utils/web/WindowIdUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    tangon = function(argFoo) { // Original name: getWindowId
        entity = argFoo;
        entity = entity.__DISCORD_WINDOW_ID;
        return entity;
    };
    var _closure1_slot2 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 1;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/web/WindowIdUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getWindowId'] = tangon;
    tangon = function(argFoo) { // Original name: setupWindowId
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.uniqueId;
        entity = 'window-';
        entity = michal.bind(zuuluu)(entity);
        michal = argFoo;
        michal['__DISCORD_WINDOW_ID'] = entity;
        return entity;
    };
    zuuluu['setupWindowId'] = tangon;
    michal = function() { // Original name: getMainWindowId
        zuuluu = _closure1_slot2;
        entity = global;
        michal = entity.window;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['getMainWindowId'] = michal;
    return entity;
})();