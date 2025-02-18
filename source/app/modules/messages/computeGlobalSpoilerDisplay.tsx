// app/modules/messages/computeGlobalSpoilerDisplay.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo, argBar) { // Original name: computeGlobalSpoilerDisplay
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot4;
            michal = michal.ALWAYS;
            if(!(michal !== zuuluu)) { _fun00002_ip = 53; continue _fun00001 }
 20:
            michal = _closure1_slot4;
            michal = michal.IF_MODERATOR;
            if(!(michal !== zuuluu)) { _fun00002_ip = 48; continue _fun00001 }
 34:
            entity = _closure1_slot4;
            entity = entity.ON_CLICK;
            entity = false;
            return entity;
 48:
            entity = argBar;
            return entity;
 53:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.Permissions;
    var _closure1_slot3 = option;
    report = report.SpoilerRenderSetting;
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/computeGlobalSpoilerDisplay.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: useShouldDisplaySpoilerObscurity
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        zuuluu = 2;
        zuuluu = oscard[zuuluu];
        tangon = undefined;
        option = report.bind(tangon)(zuuluu);
        golfie = option.useStateFromStores;
        verify = _closure1_slot2;
        zuuluu = new Array(1);
        zuuluu[0] = verify;
        michal = function() {
            tangon = _closure1_slot2;
            zuuluu = tangon.can;
            entity = _closure1_slot3;
            michal = entity.MANAGE_MESSAGES;
            entity = _closure2_slot0;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        zuuluu = golfie.bind(option)(zuuluu, michal);
        michal = _closure1_slot5;
        entity = 3;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        report = entity.RenderSpoilers;
        entity = report.useSetting;
        entity = entity.bind(report)();
        entity = michal.bind(tangon)(entity, zuuluu);
        entity = !entity;
        return entity;
    };
    zuuluu['useShouldDisplaySpoilerObscurity'] = michal;
    return entity;
})();