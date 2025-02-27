// app/modules/guild_profile/hooks/useGuildProfileCTA.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    romeon = 0;
    option = golfie[romeon];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(option);
    var _closure1_slot3 = michal;
    yankee = 1;
    michal = golfie[yankee];
    michal = report.bind(entity)(michal);
    var _closure1_slot4 = michal;
    offset = 2;
    michal = golfie[offset];
    michal = report.bind(entity)(michal);
    var _closure1_slot5 = michal;
    verify = 3;
    michal = golfie[verify];
    michal = report.bind(entity)(michal);
    var _closure1_slot6 = michal;
    option = 4;
    michal = golfie[option];
    michal = oscard.bind(entity)(michal);
    report = michal.InviteStates;
    var _closure1_slot7 = report;
    michal = michal.GuildFeatures;
    var _closure1_slot8 = michal;
    michal = {};
    michal['IS_MEMBER'] = romeon;
    report = 'IS_MEMBER';
    michal[romeon] = report;
    michal['HAS_APPLICATION'] = yankee;
    report = 'HAS_APPLICATION';
    michal[yankee] = report;
    michal['APPLY_TO_JOIN'] = offset;
    report = 'APPLY_TO_JOIN';
    michal[offset] = report;
    michal['LURK_DISCOVERABLE'] = verify;
    report = 'LURK_DISCOVERABLE';
    michal[verify] = report;
    michal['JOIN_VIA_INVITE'] = option;
    report = 'JOIN_VIA_INVITE';
    michal[option] = report;
    var _closure1_slot9 = michal;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_profile/hooks/useGuildProfileCTA.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useGuildProfileCTA
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        tangon = golfie.id;
        var _closure2_slot1 = tangon;
        offset = golfie.features;
        var _closure2_slot2 = offset;
        report = _closure1_slot0;
        yankee = _closure1_slot2;
        michal = 5;
        option = yankee[michal];
        oscard = undefined;
        foxtra = report.bind(oscard)(option);
        romeon = foxtra.useStateFromStores;
        option = _closure1_slot4;
        verify = new Array(1);
        verify[0] = option;
        option = function() {
            michal = _closure1_slot4;
            entity = michal.getId;
            entity = entity.bind(michal)();
            return entity;
        };
        option = romeon.bind(foxtra)(verify, option);
        var _closure2_slot3 = option;
        verify = yankee[michal];
        backup = report.bind(oscard)(verify);
        foxtra = backup.useStateFromStores;
        verify = _closure1_slot5;
        romeon = new Array(1);
        romeon[0] = verify;
        verify = new Array(2);
        verify[0] = tangon;
        verify[1] = option;
        option = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot1;
                michal = null;
                tangon = michal != zuuluu;
                zuuluu = null;
                if(!tangon) { _fun00002_ip = 45; continue _fun00001 }
 18:
                oscard = _closure1_slot5;
                report = oscard.getMember;
                tangon = _closure2_slot1;
                entity = _closure2_slot3;
                zuuluu = report.bind(oscard)(tangon, entity);
 45:
                tangon = michal == zuuluu;
                entity = undefined;
                if(tangon) { _fun00002_ip = 60; continue _fun00001 }
 54:
                entity = zuuluu.joinedAt;
 60:
                entity = michal != entity;
                return entity;
            }
        };
        verify = foxtra.bind(backup)(romeon, option, verify);
        var _closure2_slot4 = verify;
        michal = yankee[michal];
        romeon = report.bind(oscard)(michal);
        option = romeon.useStateFromStores;
        michal = _closure1_slot6;
        report = new Array(1);
        report[0] = michal;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot6;
                michal = tangon.getInviteKeyForGuildId;
                entity = _closure2_slot1;
                michal = michal.bind(tangon)(entity);
                report = null;
                entity = report != michal;
                tangon = null;
                if(!entity) { _fun00004_ip = 51; continue _fun00003 }
 36:
                oscard = _closure1_slot6;
                entity = oscard.getInvite;
                tangon = entity.bind(oscard)(michal);
 51:
                oscard = report == tangon;
                entity = null;
                if(oscard) { _fun00004_ip = 105; continue _fun00003 }
 60:
                golfie = tangon.state;
                oscard = _closure1_slot7;
                oscard = oscard.BANNED;
                entity = null;
                if(!(golfie !== oscard)) { _fun00004_ip = 105; continue _fun00003 }
 81:
                tangon = tangon.state;
                zuuluu = _closure1_slot7;
                zuuluu = zuuluu.EXPIRED;
                entity = null;
                if(!(tangon !== zuuluu)) { _fun00004_ip = 105; continue _fun00003 }
 102:
                entity = michal;
 105:
                return entity;
            }
        };
        michal = option.bind(romeon)(report, michal);
        var _closure2_slot5 = michal;
        option = _closure1_slot1;
        report = 6;
        report = yankee[report];
        report = option.bind(oscard)(report);
        option = report.bind(oscard)();
        var _closure2_slot6 = option;
        oscard = _closure1_slot3;
        report = oscard.useMemo;
        zuuluu = new Array(6);
        zuuluu[0] = offset;
        zuuluu[1] = tangon;
        zuuluu[2] = verify;
        zuuluu[3] = option;
        golfie = golfie.visibility;
        zuuluu[4] = golfie;
        zuuluu[5] = michal;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = _closure2_slot4;
                if(entity) { _fun00006_ip = 279; continue _fun00005 }
 13:
                zuuluu = _closure2_slot6;
                michal = zuuluu.includes;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                if(entity) { _fun00006_ip = 264; continue _fun00005 }
 37:
                michal = _closure2_slot2;
                entity = null;
                if(!(entity != michal)) { _fun00006_ip = 174; continue _fun00005 }
 50:
                oscard = _closure2_slot2;
                report = oscard.includes;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.MEMBER_VERIFICATION_GATE_ENABLED;
                zuuluu = report.bind(oscard)(zuuluu);
                if(!zuuluu) { _fun00006_ip = 174; continue _fun00005 }
 80:
                zuuluu = _closure2_slot2;
                if(!(entity != zuuluu)) { _fun00006_ip = 174; continue _fun00005 }
 88:
                oscard = _closure2_slot2;
                report = oscard.includes;
                zuuluu = _closure1_slot8;
                zuuluu = zuuluu.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                zuuluu = report.bind(oscard)(zuuluu);
                if(!zuuluu) { _fun00006_ip = 174; continue _fun00005 }
 115:
                zuuluu = _closure2_slot5;
                if(!(entity == zuuluu)) { _fun00006_ip = 252; continue _fun00005 }
 126:
                zuuluu = _closure2_slot0;
                report = zuuluu.visibility;
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 7;
                oscard = oscard[zuuluu];
                zuuluu = undefined;
                zuuluu = golfie.bind(zuuluu)(oscard);
                zuuluu = zuuluu.GuildProfileVisibility;
                zuuluu = zuuluu.PUBLIC_WITH_RECRUITMENT;
                if(!(report !== zuuluu)) { _fun00006_ip = 252; continue _fun00005 }
 174:
                zuuluu = _closure2_slot2;
                if(!(entity != zuuluu)) { _fun00006_ip = 212; continue _fun00005 }
 182:
                golfie = _closure2_slot2;
                oscard = golfie.includes;
                report = _closure1_slot8;
                report = report.DISCOVERABLE;
                report = oscard.bind(golfie)(report);
                if(report) { _fun00006_ip = 240; continue _fun00005 }
 212:
                tangon = _closure2_slot5;
                tangon = entity != tangon;
                entity = null;
                if(!tangon) { _fun00006_ip = 238; continue _fun00005 }
 225:
                tangon = _closure1_slot9;
                entity = tangon.JOIN_VIA_INVITE;
 238:
                _fun00006_ip = 250; continue _fun00005;
 240:
                zuuluu = _closure1_slot9;
                entity = zuuluu.LURK_DISCOVERABLE;
 250:
                _fun00006_ip = 262; continue _fun00005;
 252:
                michal = _closure1_slot9;
                entity = michal.APPLY_TO_JOIN;
 262:
                _fun00006_ip = 277; continue _fun00005;
 264:
                michal = _closure1_slot9;
                entity = michal.HAS_APPLICATION;
 277:
                _fun00006_ip = 292; continue _fun00005;
 279:
                michal = _closure1_slot9;
                entity = michal.IS_MEMBER;
 292:
                return entity;
            }
        };
        zuuluu = report.bind(oscard)(entity, zuuluu);
        entity = {};
        entity['guildId'] = tangon;
        entity['ctaType'] = zuuluu;
        entity['validInviteKey'] = michal;
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['CTATypes'] = michal;
    return entity;
})();