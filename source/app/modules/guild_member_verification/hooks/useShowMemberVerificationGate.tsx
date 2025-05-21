// app/modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: shouldShowMembershipVerificationGate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            michal = arguments[1];
            report = undefined;
            if(!(michal === report)) { _fun00002_ip = 46; continue _fun00001 }
 12:
            tangon = _closure1_slot3;
            entity = new Array(3);
            entity[0] = tangon;
            tangon = _closure1_slot4;
            entity[1] = tangon;
            zuuluu = _closure1_slot2;
            entity[2] = zuuluu;
            michal = entity;
 46:
            oscard = michal;
            entity = oscard[Symbol.iterator];
            oscard = entity().next;
            zuuluu = oscard().value;
            michal = entity;
            michal = michal === report;
            tangon = undefined;
            if(michal) { _fun00002_ip = 71; continue _fun00001 }
 68:
            tangon = zuuluu;
 71:
            zuuluu = undefined;
            if(michal) { _fun00002_ip = 101; continue _fun00001 }
 76:
            verify = oscard().value;
            golfie = entity;
            golfie = golfie === report;
            zuuluu = undefined;
            michal = golfie;
            if(golfie) { _fun00002_ip = 101; continue _fun00001 }
 95:
            zuuluu = verify;
            michal = golfie;
 101:
            golfie = undefined;
            if(michal) { _fun00002_ip = 131; continue _fun00001 }
 106:
            verify = oscard().value;
            oscard = entity;
            oscard = oscard === report;
            golfie = undefined;
            michal = oscard;
            if(oscard) { _fun00002_ip = 131; continue _fun00001 }
 125:
            golfie = verify;
            michal = oscard;
 131:
            if(michal) { _fun00002_ip = 137; continue _fun00001 }
 134:
            entity.return();
 137:
            michal = null;
            if(!(michal != option)) { _fun00002_ip = 261; continue _fun00001 }
 143:
            entity = tangon.getGuild;
            tangon = entity.bind(tangon)(option);
            entity = zuuluu.getCurrentUser;
            zuuluu = entity.bind(zuuluu)();
            oscard = michal != zuuluu;
            entity = false;
            if(!oscard) { _fun00002_ip = 216; continue _fun00001 }
 171:
            oscard = golfie.getMember;
            zuuluu = zuuluu.id;
            oscard = oscard.bind(golfie)(option, zuuluu);
            golfie = michal == oscard;
            zuuluu = undefined;
            if(golfie) { _fun00002_ip = 203; continue _fun00001 }
 197:
            zuuluu = oscard.isPending;
 203:
            michal = michal != zuuluu;
            if(!michal) { _fun00002_ip = 213; continue _fun00001 }
 210:
            michal = zuuluu;
 213:
            entity = michal;
 216:
            if(!entity) { _fun00002_ip = 259; continue _fun00001 }
 219:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 3;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.guildHasVerificationGate;
            michal = michal.bind(zuuluu)(tangon);
            michal = !michal;
            entity = !michal;
 259:
            return entity;
 261:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_member_verification/hooks/useShowMemberVerificationGate.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['shouldShowMembershipVerificationGate'] = tangon;
    michal = function(argFoo) { // Original name: useShowMemberVerificationGate
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        golfie = _closure1_slot3;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        golfie = _closure1_slot4;
        zuuluu[1] = golfie;
        michal = _closure1_slot2;
        zuuluu[2] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00004_ip = 63; continue _fun00003 }
 16:
                report = _closure1_slot5;
                tangon = _closure2_slot0;
                oscard = _closure1_slot3;
                zuuluu = new Array(3);
                zuuluu[0] = oscard;
                oscard = _closure1_slot4;
                zuuluu[1] = oscard;
                michal = _closure1_slot2;
                zuuluu[2] = michal;
                michal = undefined;
                entity = report.bind(michal)(tangon, zuuluu);
 63:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useShowMemberVerificationGate'] = michal;
    return entity;
})();