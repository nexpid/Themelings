// app/modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MFALevels;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/creator_monetization_eligibility/guild_settings/useIsMFAEnabled.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useIsMFAEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 3;
            tangon = golfie[zuuluu];
            report = undefined;
            offset = oscard.bind(report)(tangon);
            verify = offset.useStateFromStores;
            tangon = _closure1_slot3;
            option = new Array(1);
            option[0] = tangon;
            tangon = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = verify.bind(offset)(option, tangon);
            zuuluu = golfie[zuuluu];
            golfie = oscard.bind(report)(zuuluu);
            oscard = golfie.useStateFromStores;
            option = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            entity = function() {
                michal = _closure1_slot2;
                entity = michal.getProps;
                entity = entity.bind(michal)();
                entity = entity.mfaLevel;
                return entity;
            };
            zuuluu = oscard.bind(golfie)(zuuluu, entity);
            entity = {};
            oscard = null;
            oscard = oscard == tangon;
            if(oscard) { _fun00002_ip = 113; continue _fun00001 }
 107:
            report = tangon.mfaEnabled;
 113:
            tangon = true;
            tangon = tangon === report;
            entity['isUserMFAEnabled'] = tangon;
            michal = _closure1_slot4;
            michal = michal.ELEVATED;
            michal = zuuluu === michal;
            entity['isModerationMFAEnabled'] = michal;
            return entity;
        }
    };
    zuuluu['useIsMFAEnabled'] = michal;
    return entity;
})();