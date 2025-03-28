// app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SafetyWarningTypes;
    var _closure1_slot3 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationsTiers.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 2;
            entity = oscard[entity];
            tangon = undefined;
            option = report.bind(tangon)(entity);
            michal = option.useIsEligibleForInappropriateConversationWarning;
            entity = {};
            verify = 'context-menu-item';
            entity['location'] = verify;
            michal = michal.bind(option)(entity);
            entity = 3;
            entity = oscard[entity];
            yankee = report.bind(tangon)(entity);
            offset = yankee.useStateFromStores;
            entity = _closure1_slot2;
            option = new Array(1);
            option[0] = entity;
            entity = function() {
                michal = _closure1_slot2;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            option = offset.bind(yankee)(option, entity);
            entity = 4;
            entity = oscard[entity];
            oscard = report.bind(tangon)(entity);
            report = oscard.useInappropriateConversationBannerForChannel;
            entity = golfie.id;
            report = report.bind(oscard)(entity, verify);
            oscard = null;
            entity = oscard == option;
            verify = undefined;
            if(entity) { _fun00002_ip = 143; continue _fun00001 }
 133:
            entity = option.isStaff;
            verify = entity.bind(option)();
 143:
            option = true;
            entity = null;
            if(!(option === verify)) { _fun00002_ip = 242; continue _fun00001 }
 151:
            entity = null;
            if(!michal) { _fun00002_ip = 242; continue _fun00001 }
 156:
            michal = golfie.isDM;
            michal = michal.bind(golfie)();
            entity = null;
            if(!michal) { _fun00002_ip = 242; continue _fun00001 }
 171:
            michal = {};
            golfie = oscard == report;
            option = undefined;
            if(golfie) { _fun00002_ip = 187; continue _fun00001 }
 182:
            option = report.type;
 187:
            golfie = _closure1_slot3;
            golfie = golfie.INAPPROPRIATE_CONVERSATION_TIER_1;
            golfie = option === golfie;
            michal['isTier1'] = golfie;
            oscard = oscard == report;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 220; continue _fun00001 }
 215:
            tangon = report.type;
 220:
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.INAPPROPRIATE_CONVERSATION_TIER_2;
            zuuluu = tangon === zuuluu;
            michal['isTier2'] = zuuluu;
            entity = michal;
 242:
            return entity;
        }
    };
    zuuluu['useInappropriateConversationsTiers'] = michal;
    return entity;
})();