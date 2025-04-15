// app/modules/instant_invite/useInviteApplicationBypassInfo.tsx
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
    golfie = tangon.GuildFeatures;
    var _closure1_slot3 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/instant_invite/useInviteApplicationBypassInfo.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useInviteApplicationBypassInfo
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 2;
            report = report[tangon];
            tangon = undefined;
            golfie = oscard.bind(tangon)(report);
            oscard = golfie.useStateFromStores;
            tangon = _closure1_slot2;
            report = new Array(1);
            report[0] = tangon;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            michal = function() {
                tangon = _closure1_slot2;
                zuuluu = tangon.can;
                entity = _closure1_slot4;
                michal = entity.KICK_MEMBERS;
                entity = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            tangon = oscard.bind(golfie)(report, michal, tangon);
            michal = null;
            report = michal == zuuluu;
            if(report) { _fun00002_ip = 106; continue _fun00001 }
 82:
            golfie = zuuluu.hasFeature;
            oscard = _closure1_slot3;
            oscard = oscard.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            oscard = golfie.bind(zuuluu)(oscard);
            report = !oscard;
 106:
            if(report) { _fun00002_ip = 113; continue _fun00001 }
 109:
            report = michal == zuuluu;
 113:
            if(report) { _fun00002_ip = 140; continue _fun00001 }
 116:
            michal = zuuluu.hasFeature;
            entity = _closure1_slot3;
            entity = entity.MEMBER_VERIFICATION_GATE_ENABLED;
            entity = michal.bind(zuuluu)(entity);
            report = !entity;
 140:
            michal = !report;
            entity = {};
            zuuluu = michal;
            if(report) { _fun00002_ip = 154; continue _fun00001 }
 151:
            zuuluu = tangon;
 154:
            entity['canCreateApplicationBypassInvites'] = zuuluu;
            entity['isManualApprovalGuild'] = michal;
            return entity;
        }
    };
    zuuluu['useInviteApplicationBypassInfo'] = michal;
    return entity;
})();