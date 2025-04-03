// app/modules/guild_tag/GuildTagCoachmarkUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = verify;
    oscard = function(argFoo, argBar, argBaz) { // Original name: shouldShowAvailableCoachmark
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = argBar;
            michal = argBaz;
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            report = 4;
            oscard = oscard[report];
            report = undefined;
            oscard = golfie.bind(report)(oscard);
            report = oscard.guildSupportsTags;
            report = report.bind(oscard)(zuuluu);
            if(report) { _fun00002_ip = 52; continue _fun00001 }
 48:
            report = false;
            return report;
 52:
            report = zuuluu.profile;
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00002_ip = 216; continue _fun00001 }
 67:
            report = michal.isPending;
            if(report) { _fun00002_ip = 212; continue _fun00001 }
 79:
            report = entity.primaryGuild;
            if(!(zuuluu != report)) { _fun00002_ip = 208; continue _fun00001 }
 89:
            report = michal.joinedAt;
            report = zuuluu != report;
            golfie = null;
            if(!report) { _fun00002_ip = 138; continue _fun00001 }
 104:
            report = global;
            oscard = report.Date;
            option = michal.joinedAt;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            verify = report;
            michal = new verify[oscard](option, golfie);
            golfie = michal instanceof Object ? michal : report;
 138:
            michal = zuuluu != golfie;
            if(!michal) { _fun00002_ip = 184; continue _fun00001 }
 145:
            report = global;
            oscard = report.Date;
            report = oscard.now;
            oscard = report.bind(oscard)();
            report = golfie.getTime;
            report = report.bind(golfie)();
            report = oscard - report;
            tangon = _closure1_slot6;
            michal = report <= tangon;
 184:
            entity = entity.primaryGuild;
            entity = entity.identityGuildId;
            entity = zuuluu == entity;
            if(!entity) { _fun00002_ip = 206; continue _fun00001 }
 203:
            entity = !michal;
 206:
            return entity;
 208:
            entity = true;
            return entity;
 212:
            entity = false;
            return entity;
 216:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot7 = oscard;
    report = function(argFoo) { // Original name: useShouldShowAvailableCoachmark
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            var _closure2_slot0 = golfie;
            tangon = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 5;
            michal = verify[michal];
            oscard = undefined;
            option = tangon.bind(oscard)(michal);
            report = option.useIsContentDismissed;
            michal = 6;
            michal = verify[michal];
            michal = tangon.bind(oscard)(michal);
            michal = michal.DismissibleGuildContent;
            tangon = michal.ADOPT_CLAN_IDENTITY_NOTICE;
            verify = null;
            michal = golfie;
            if(!(verify == michal)) { _fun00004_ip = 77; continue _fun00003 }
 73:
            michal = _closure1_slot5;
 77:
            michal = report.bind(option)(tangon, michal);
            var _closure2_slot1 = michal;
            report = _closure1_slot0;
            option = _closure1_slot1;
            tangon = 7;
            tangon = option[tangon];
            oscard = report.bind(oscard)(tangon);
            report = oscard.useStateFromStores;
            option = _closure1_slot3;
            tangon = new Array(3);
            tangon[0] = option;
            option = _closure1_slot4;
            tangon[1] = option;
            zuuluu = _closure1_slot2;
            tangon[2] = zuuluu;
            zuuluu = new Array(2);
            zuuluu[0] = michal;
            zuuluu[1] = golfie;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot1;
                    if(entity) { _fun00006_ip = 117; continue _fun00005 }
 10:
                    michal = _closure2_slot0;
                    entity = null;
                    if(!(entity !== michal)) { _fun00006_ip = 117; continue _fun00005 }
 20:
                    oscard = _closure1_slot3;
                    report = oscard.getGuild;
                    tangon = _closure2_slot0;
                    oscard = report.bind(oscard)(tangon);
                    report = undefined;
                    if(!(report !== oscard)) { _fun00006_ip = 113; continue _fun00005 }
 47:
                    golfie = _closure1_slot4;
                    tangon = golfie.getCurrentUser;
                    tangon = tangon.bind(golfie)();
                    if(!(report !== tangon)) { _fun00006_ip = 109; continue _fun00005 }
 64:
                    verify = _closure1_slot2;
                    option = verify.getMember;
                    golfie = _closure2_slot0;
                    zuuluu = tangon.id;
                    zuuluu = option.bind(verify)(golfie, zuuluu);
                    entity = entity != zuuluu;
                    if(!entity) { _fun00006_ip = 107; continue _fun00005 }
 96:
                    michal = _closure1_slot7;
                    entity = michal.bind(report)(oscard, tangon, zuuluu);
 107:
                    return entity;
 109:
                    entity = false;
                    return entity;
 113:
                    entity = false;
                    return entity;
 117:
                    entity = false;
                    return entity;
                }
            };
            entity = report.bind(oscard)(tangon, entity, zuuluu);
            if(!entity) { _fun00004_ip = 172; continue _fun00003 }
 169:
            entity = !michal;
 172:
            return entity;
        }
    };
    var _closure1_slot8 = report;
    tangon = function(argFoo) { // Original name: useGuildTagCoachmarkType
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot8;
            michal = undefined;
            entity = argFoo;
            michal = zuuluu.bind(michal)(entity);
            entity = null;
            if(!michal) { _fun00008_ip = 26; continue _fun00007 }
 22:
            entity = 'available';
 26:
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot5 = golfie;
    golfie = 259200000;
    var _closure1_slot6 = golfie;
    golfie = 8;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/guild_tag/GuildTagCoachmarkUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['shouldShowAvailableCoachmark'] = oscard;
    zuuluu['useShouldShowAvailableCoachmark'] = report;
    zuuluu['useGuildTagCoachmarkType'] = tangon;
    michal = function(argFoo) { // Original name: useCanSeeGuildTagCoachmark
        zuuluu = _closure1_slot9;
        michal = undefined;
        entity = argFoo;
        michal = zuuluu.bind(michal)(entity);
        entity = null;
        entity = entity !== michal;
        return entity;
    };
    zuuluu['useCanSeeGuildTagCoachmark'] = michal;
    return entity;
})();