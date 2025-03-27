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
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    romeon = 0;
    option = golfie[romeon];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    yankee = 1;
    tangon = golfie[yankee];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    offset = 2;
    tangon = golfie[offset];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    verify = 3;
    tangon = golfie[verify];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    option = 4;
    tangon = golfie[option];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.InviteStates;
    var _closure1_slot7 = report;
    tangon = tangon.GuildFeatures;
    var _closure1_slot8 = tangon;
    tangon = {};
    tangon['IS_MEMBER'] = romeon;
    report = 'IS_MEMBER';
    tangon[romeon] = report;
    tangon['HAS_APPLICATION'] = yankee;
    report = 'HAS_APPLICATION';
    tangon[yankee] = report;
    tangon['APPLY_TO_JOIN'] = offset;
    report = 'APPLY_TO_JOIN';
    tangon[offset] = report;
    tangon['LURK_DISCOVERABLE'] = verify;
    report = 'LURK_DISCOVERABLE';
    tangon[verify] = report;
    tangon['JOIN_VIA_INVITE'] = option;
    report = 'JOIN_VIA_INVITE';
    tangon[option] = report;
    var _closure1_slot9 = tangon;
    report = 10;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_profile/hooks/useGuildProfileCTA.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: useGuildProfileCTA
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        tangon = golfie.id;
        var _closure2_slot1 = tangon;
        yankee = golfie.features;
        var _closure2_slot2 = yankee;
        report = _closure1_slot0;
        romeon = _closure1_slot2;
        michal = 5;
        option = romeon[michal];
        oscard = undefined;
        foxtra = report.bind(oscard)(option);
        offset = foxtra.useStateFromStores;
        option = _closure1_slot4;
        verify = new Array(1);
        verify[0] = option;
        option = function() {
            michal = _closure1_slot4;
            entity = michal.getId;
            entity = entity.bind(michal)();
            return entity;
        };
        option = offset.bind(foxtra)(verify, option);
        var _closure2_slot3 = option;
        verify = romeon[michal];
        backup = report.bind(oscard)(verify);
        foxtra = backup.useStateFromStores;
        verify = _closure1_slot5;
        offset = new Array(1);
        offset[0] = verify;
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
        verify = foxtra.bind(backup)(offset, option, verify);
        var _closure2_slot4 = verify;
        michal = romeon[michal];
        offset = report.bind(oscard)(michal);
        option = offset.useStateFromStoresObject;
        michal = _closure1_slot6;
        report = new Array(1);
        report[0] = michal;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot6;
                zuuluu = tangon.getInviteKeyForGuildId;
                entity = _closure2_slot1;
                tangon = zuuluu.bind(tangon)(entity);
                zuuluu = null;
                entity = zuuluu != tangon;
                oscard = null;
                if(!entity) { _fun00004_ip = 51; continue _fun00003 }
 36:
                report = _closure1_slot6;
                entity = report.getInvite;
                oscard = entity.bind(report)(tangon);
 51:
                if(!(zuuluu != oscard)) { _fun00004_ip = 193; continue _fun00003 }
 58:
                report = oscard.state;
                entity = _closure1_slot7;
                entity = entity.BANNED;
                if(!(report !== entity)) { _fun00004_ip = 193; continue _fun00003 }
 77:
                report = oscard.state;
                entity = _closure1_slot7;
                entity = entity.EXPIRED;
                if(!(report !== entity)) { _fun00004_ip = 193; continue _fun00003 }
 96:
                entity = {};
                entity['validInviteKey'] = tangon;
                report = _closure1_slot0;
                golfie = _closure1_slot2;
                tangon = 6;
                tangon = golfie[tangon];
                golfie = undefined;
                report = report.bind(golfie)(tangon);
                tangon = report.hasFlag;
                oscard = oscard.flags;
                option = zuuluu != oscard;
                zuuluu = 0;
                if(!option) { _fun00004_ip = 148; continue _fun00003 }
 145:
                zuuluu = oscard;
 148:
                oscard = _closure1_slot0;
                option = _closure1_slot2;
                michal = 7;
                michal = option[michal];
                michal = oscard.bind(golfie)(michal);
                michal = michal.GuildInviteFlags;
                michal = michal.IS_APPLICATION_BYPASS;
                michal = tangon.bind(report)(zuuluu, michal);
                entity['isBypassInvite'] = michal;
                _fun00004_ip = 207; continue _fun00003;
 193:
                entity = {'validInviteKey': null, 'isBypassInvite': false};
 207:
                return entity;
            }
        };
        report = option.bind(offset)(report, michal);
        michal = report.validInviteKey;
        var _closure2_slot5 = michal;
        offset = report.isBypassInvite;
        var _closure2_slot6 = offset;
        option = _closure1_slot1;
        report = 8;
        report = romeon[report];
        report = option.bind(oscard)(report);
        option = report.bind(oscard)();
        var _closure2_slot7 = option;
        oscard = _closure1_slot3;
        report = oscard.useMemo;
        zuuluu = new Array(7);
        zuuluu[0] = yankee;
        zuuluu[1] = tangon;
        zuuluu[2] = offset;
        zuuluu[3] = verify;
        zuuluu[4] = option;
        golfie = golfie.visibility;
        zuuluu[5] = golfie;
        zuuluu[6] = michal;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = _closure2_slot4;
                if(entity) { _fun00006_ip = 288; continue _fun00005 }
 13:
                tangon = _closure2_slot7;
                michal = tangon.includes;
                entity = _closure2_slot1;
                entity = michal.bind(tangon)(entity);
                if(entity) { _fun00006_ip = 273; continue _fun00005 }
 37:
                entity = _closure2_slot2;
                report = null;
                if(!(report != entity)) { _fun00006_ip = 190; continue _fun00005 }
 50:
                oscard = _closure2_slot2;
                tangon = oscard.includes;
                michal = _closure1_slot8;
                michal = michal.MEMBER_VERIFICATION_GATE_ENABLED;
                michal = tangon.bind(oscard)(michal);
                if(!michal) { _fun00006_ip = 190; continue _fun00005 }
 80:
                michal = _closure2_slot2;
                if(!(report != michal)) { _fun00006_ip = 190; continue _fun00005 }
 88:
                oscard = _closure2_slot2;
                tangon = oscard.includes;
                michal = _closure1_slot8;
                michal = michal.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                michal = tangon.bind(oscard)(michal);
                if(!michal) { _fun00006_ip = 190; continue _fun00005 }
 115:
                michal = _closure2_slot5;
                if(!(report == michal)) { _fun00006_ip = 171; continue _fun00005 }
 123:
                michal = _closure2_slot0;
                tangon = michal.visibility;
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 9;
                oscard = oscard[michal];
                michal = undefined;
                michal = golfie.bind(michal)(oscard);
                michal = michal.GuildProfileVisibility;
                michal = michal.PUBLIC_WITH_RECRUITMENT;
                if(!(tangon === michal)) { _fun00006_ip = 190; continue _fun00005 }
 171:
                michal = _closure2_slot6;
                if(michal) { _fun00006_ip = 190; continue _fun00005 }
 178:
                entity = _closure1_slot9;
                entity = entity.APPLY_TO_JOIN;
                _fun00006_ip = 271; continue _fun00005;
 190:
                michal = _closure2_slot5;
                if(!(report == michal)) { _fun00006_ip = 255; continue _fun00005 }
 198:
                michal = _closure2_slot2;
                tangon = report != michal;
                michal = null;
                if(!tangon) { _fun00006_ip = 253; continue _fun00005 }
 211:
                golfie = _closure2_slot2;
                oscard = golfie.includes;
                tangon = _closure1_slot8;
                tangon = tangon.DISCOVERABLE;
                tangon = oscard.bind(golfie)(tangon);
                michal = null;
                if(!tangon) { _fun00006_ip = 253; continue _fun00005 }
 243:
                zuuluu = _closure1_slot9;
                michal = zuuluu.LURK_DISCOVERABLE;
 253:
                _fun00006_ip = 268; continue _fun00005;
 255:
                zuuluu = _closure1_slot9;
                michal = zuuluu.JOIN_VIA_INVITE;
 268:
                entity = michal;
 271:
                _fun00006_ip = 286; continue _fun00005;
 273:
                michal = _closure1_slot9;
                entity = michal.HAS_APPLICATION;
 286:
                _fun00006_ip = 301; continue _fun00005;
 288:
                michal = _closure1_slot9;
                entity = michal.IS_MEMBER;
 301:
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
    zuuluu['default'] = report;
    zuuluu['CTATypes'] = tangon;
    michal = function(argFoo) { // Original name: getGuildProfileCTAType
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            offset = tangon.id;
            golfie = tangon.features;
            zuuluu = _closure1_slot4;
            entity = zuuluu.getId;
            option = entity.bind(zuuluu)();
            report = null;
            entity = report != offset;
            zuuluu = null;
            if(!entity) { _fun00008_ip = 58; continue _fun00007 }
 42:
            oscard = _closure1_slot5;
            entity = oscard.getMember;
            zuuluu = entity.bind(oscard)(offset, option);
 58:
            oscard = report == zuuluu;
            verify = undefined;
            entity = undefined;
            if(oscard) { _fun00008_ip = 75; continue _fun00007 }
 69:
            entity = zuuluu.joinedAt;
 75:
            oscard = report != entity;
            zuuluu = _closure1_slot6;
            entity = zuuluu.getInviteKeyForGuildId;
            yankee = entity.bind(zuuluu)(offset);
            entity = report != yankee;
            option = null;
            if(!entity) { _fun00008_ip = 118; continue _fun00007 }
 103:
            zuuluu = _closure1_slot6;
            entity = zuuluu.getInvite;
            option = entity.bind(zuuluu)(yankee);
 118:
            romeon = report == option;
            zuuluu = null;
            entity = false;
            if(romeon) { _fun00008_ip = 262; continue _fun00007 }
 132:
            foxtra = option.state;
            romeon = _closure1_slot7;
            romeon = romeon.BANNED;
            zuuluu = null;
            entity = false;
            if(!(foxtra !== romeon)) { _fun00008_ip = 262; continue _fun00007 }
 155:
            foxtra = option.state;
            romeon = _closure1_slot7;
            romeon = romeon.EXPIRED;
            zuuluu = null;
            entity = false;
            if(!(foxtra !== romeon)) { _fun00008_ip = 262; continue _fun00007 }
 178:
            foxtra = _closure1_slot0;
            backup = _closure1_slot2;
            romeon = 6;
            romeon = backup[romeon];
            backup = foxtra.bind(verify)(romeon);
            foxtra = backup.hasFlag;
            option = option.flags;
            kiloes = report != option;
            romeon = 0;
            if(!kiloes) { _fun00008_ip = 221; continue _fun00007 }
 218:
            romeon = option;
 221:
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            option = 7;
            option = sizing[option];
            option = kiloes.bind(verify)(option);
            option = option.GuildInviteFlags;
            option = option.IS_APPLICATION_BYPASS;
            entity = foxtra.bind(backup)(romeon, option);
            zuuluu = yankee;
 262:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 8;
            option = romeon[option];
            yankee = yankee.bind(verify)(option);
            option = yankee.getPendingFolderGuildIds;
            option = option.bind(yankee)();
            if(oscard) { _fun00008_ip = 506; continue _fun00007 }
 298:
            oscard = option.includes;
            oscard = oscard.bind(option)(offset);
            if(oscard) { _fun00008_ip = 494; continue _fun00007 }
 314:
            if(!(report != golfie)) { _fun00008_ip = 429; continue _fun00007 }
 318:
            option = golfie.includes;
            oscard = _closure1_slot8;
            oscard = oscard.MEMBER_VERIFICATION_GATE_ENABLED;
            oscard = option.bind(golfie)(oscard);
            if(!oscard) { _fun00008_ip = 429; continue _fun00007 }
 341:
            if(!(report != golfie)) { _fun00008_ip = 429; continue _fun00007 }
 345:
            option = golfie.includes;
            oscard = _closure1_slot8;
            oscard = oscard.MEMBER_VERIFICATION_MANUAL_APPROVAL;
            oscard = option.bind(golfie)(oscard);
            if(!oscard) { _fun00008_ip = 429; continue _fun00007 }
 368:
            if(!(report == zuuluu)) { _fun00008_ip = 414; continue _fun00007 }
 372:
            oscard = tangon.visibility;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            tangon = 9;
            tangon = offset[tangon];
            tangon = option.bind(verify)(tangon);
            tangon = tangon.GuildProfileVisibility;
            tangon = tangon.PUBLIC_WITH_RECRUITMENT;
            if(!(oscard === tangon)) { _fun00008_ip = 429; continue _fun00007 }
 414:
            if(entity) { _fun00008_ip = 429; continue _fun00007 }
 417:
            entity = _closure1_slot9;
            entity = entity.APPLY_TO_JOIN;
            _fun00008_ip = 492; continue _fun00007;
 429:
            if(!(report == zuuluu)) { _fun00008_ip = 479; continue _fun00007 }
 433:
            tangon = report != golfie;
            zuuluu = null;
            if(!tangon) { _fun00008_ip = 477; continue _fun00007 }
 442:
            oscard = golfie.includes;
            tangon = _closure1_slot8;
            tangon = tangon.DISCOVERABLE;
            tangon = oscard.bind(golfie)(tangon);
            zuuluu = null;
            if(!tangon) { _fun00008_ip = 477; continue _fun00007 }
 467:
            tangon = _closure1_slot9;
            zuuluu = tangon.LURK_DISCOVERABLE;
 477:
            _fun00008_ip = 489; continue _fun00007;
 479:
            tangon = _closure1_slot9;
            zuuluu = tangon.JOIN_VIA_INVITE;
 489:
            entity = zuuluu;
 492:
            _fun00008_ip = 504; continue _fun00007;
 494:
            zuuluu = _closure1_slot9;
            entity = zuuluu.HAS_APPLICATION;
 504:
            _fun00008_ip = 516; continue _fun00007;
 506:
            michal = _closure1_slot9;
            entity = michal.IS_MEMBER;
 516:
            return entity;
        }
    };
    zuuluu['getGuildProfileCTAType'] = michal;
    return entity;
})();