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
            michal = argFoo;
            var _closure2_slot0 = michal;
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
            tangon[0] = michal;
            zuuluu = function() {
                tangon = _closure1_slot2;
                zuuluu = tangon.can;
                entity = _closure1_slot4;
                michal = entity.KICK_MEMBERS;
                entity = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            tangon = oscard.bind(golfie)(report, zuuluu, tangon);
            zuuluu = null;
            report = zuuluu == michal;
            if(report) { _fun00002_ip = 111; continue _fun00001 }
 82:
            option = michal.features;
            golfie = option.has;
            oscard = _closure1_slot3;
            oscard = oscard.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            oscard = golfie.bind(option)(oscard);
            report = !oscard;
 111:
            if(report) { _fun00002_ip = 118; continue _fun00001 }
 114:
            report = zuuluu == michal;
 118:
            if(report) { _fun00002_ip = 150; continue _fun00001 }
 121:
            zuuluu = michal.features;
            michal = zuuluu.has;
            entity = _closure1_slot3;
            entity = entity.MEMBER_VERIFICATION_GATE_ENABLED;
            entity = michal.bind(zuuluu)(entity);
            report = !entity;
 150:
            michal = !report;
            entity = {};
            zuuluu = michal;
            if(report) { _fun00002_ip = 164; continue _fun00001 }
 161:
            zuuluu = tangon;
 164:
            entity['canCreateApplicationBypassInvites'] = zuuluu;
            entity['isManualApprovalGuild'] = michal;
            return entity;
        }
    };
    zuuluu['useInviteApplicationBypassInfo'] = michal;
    return entity;
})();