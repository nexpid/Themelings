// app/modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: isCreatorMonetizationEnabledGuild
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            michal = report.hasFeature;
            entity = _closure1_slot3;
            entity = entity.CREATOR_MONETIZABLE_DISABLED;
            entity = michal.bind(report)(entity);
            entity = !entity;
            if(!entity) { _fun00002_ip = 81; continue _fun00001 }
 33:
            tangon = report.hasFeature;
            michal = _closure1_slot3;
            michal = michal.CREATOR_MONETIZABLE;
            michal = tangon.bind(report)(michal);
            if(michal) { _fun00002_ip = 78; continue _fun00001 }
 57:
            tangon = report.hasFeature;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.CREATOR_MONETIZABLE_PROVISIONAL;
            michal = tangon.bind(report)(zuuluu);
 78:
            entity = michal;
 81:
            return entity;
        }
    };
    var _closure1_slot4 = michal;
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
    report = report.GuildFeatures;
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useIsCreatorMonetizationEnabledGuild
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot2;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot2;
                zuuluu = tangon.getGuild;
                entity = _closure2_slot0;
                tangon = zuuluu.bind(tangon)(entity);
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00004_ip = 44; continue _fun00003 }
 33:
                zuuluu = _closure1_slot4;
                michal = undefined;
                entity = zuuluu.bind(michal)(tangon);
 44:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['isCreatorMonetizationEnabledGuild'] = michal;
    return entity;
})();