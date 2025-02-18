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
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/instant_invite/useInviteApplicationBypassInfo.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useInviteApplicationBypassInfo
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot1;
            tangon = 2;
            tangon = golfie[tangon];
            oscard = undefined;
            offset = zuuluu.bind(oscard)(tangon);
            verify = offset.useStateFromStores;
            tangon = _closure1_slot2;
            option = new Array(1);
            option[0] = tangon;
            tangon = new Array(1);
            tangon[0] = report;
            entity = function() {
                tangon = _closure1_slot2;
                zuuluu = tangon.can;
                entity = _closure1_slot4;
                michal = entity.KICK_MEMBERS;
                entity = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            tangon = verify.bind(offset)(option, entity, tangon);
            entity = 3;
            entity = golfie[entity];
            option = zuuluu.bind(oscard)(entity);
            golfie = option.useMemberVerificationRolloutEnabled;
            zuuluu = null;
            entity = zuuluu == report;
            if(entity) { _fun00002_ip = 105; continue _fun00001 }
 100:
            oscard = report.id;
 105:
            entity = 'AdvancedInstantInvite';
            entity = golfie.bind(option)(oscard, entity);
            if(!entity) { _fun00002_ip = 124; continue _fun00001 }
 120:
            entity = zuuluu != report;
 124:
            if(!entity) { _fun00002_ip = 148; continue _fun00001 }
 127:
            golfie = report.hasFeature;
            oscard = _closure1_slot3;
            oscard = oscard.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            entity = golfie.bind(report)(oscard);
 148:
            if(!entity) { _fun00002_ip = 155; continue _fun00001 }
 151:
            entity = zuuluu != report;
 155:
            if(!entity) { _fun00002_ip = 179; continue _fun00001 }
 158:
            zuuluu = report.hasFeature;
            michal = _closure1_slot3;
            michal = michal.MEMBER_VERIFICATION_GATE_ENABLED;
            entity = zuuluu.bind(report)(michal);
 179:
            report = !entity;
            michal = !report;
            entity = {};
            zuuluu = michal;
            if(report) { _fun00002_ip = 196; continue _fun00001 }
 193:
            zuuluu = tangon;
 196:
            entity['canCreateApplicationBypassInvites'] = zuuluu;
            entity['isManualApprovalGuild'] = michal;
            return entity;
        }
    };
    zuuluu['useInviteApplicationBypassInfo'] = michal;
    return entity;
})();