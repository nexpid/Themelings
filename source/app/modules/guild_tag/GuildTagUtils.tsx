// app/modules/guild_tag/GuildTagUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: getUserPrimaryGuild
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity != zuuluu)) { _fun00002_ip = 18; continue _fun00001 }
 9:
            entity = zuuluu.identityEnabled;
            if(entity) { _fun00002_ip = 22; continue _fun00001 }
 18:
            entity = {};
            _fun00002_ip = 57; continue _fun00001;
 22:
            michal = {};
            tangon = zuuluu.identityGuildId;
            michal['guildId'] = tangon;
            tangon = zuuluu.tag;
            michal['tag'] = tangon;
            zuuluu = zuuluu.badge;
            michal['badge'] = zuuluu;
            entity = michal;
 57:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
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
    report = oscard.bind(entity)(report);
    option = report.GuildTagBadgeMediaProxySizes;
    option = report.GuildTagBadgeMediaProxySizesMobile;
    var _closure1_slot4 = option;
    report = report.GuildTagBadgeSize;
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.GuildFeatures;
    var _closure1_slot6 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_tag/GuildTagUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: guildHasTag
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = null;
            tangon = michal == zuuluu;
            entity = undefined;
            if(tangon) { _fun00004_ip = 34; continue _fun00003 }
 14:
            zuuluu = zuuluu.profile;
            tangon = michal == zuuluu;
            entity = undefined;
            if(tangon) { _fun00004_ip = 34; continue _fun00003 }
 29:
            entity = zuuluu.tag;
 34:
            entity = michal != entity;
            return entity;
        }
    };
    zuuluu['guildHasTag'] = report;
    report = function(argFoo) { // Original name: guildSupportsTags
        entity = argFoo;
        zuuluu = entity.features;
        michal = zuuluu.has;
        entity = _closure1_slot6;
        entity = entity.GUILD_TAGS;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['guildSupportsTags'] = report;
    report = function(argFoo, argBar) { // Original name: getGuildTagBadgeUrl
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argBar;
            zuuluu = arguments[2];
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00006_ip = 25; continue _fun00005 }
 12:
            entity = _closure1_slot5;
            zuuluu = entity.SIZE_12;
 25:
            tangon = null;
            if(!(tangon != verify)) { _fun00006_ip = 55; continue _fun00005 }
 31:
            entity = global;
            report = entity.window;
            report = report.GLOBAL_ENV;
            option = report.CDN_HOST;
            if(!(tangon == option)) { _fun00006_ip = 57; continue _fun00005 }
 55:
            return michal;
 57:
            michal = _closure1_slot4;
            offset = michal[zuuluu];
            entity = entity.HermesInternal;
            oscard = entity.concat;
            output = 'https://';
            kiloes = '/clan-badges/';
            backup = argFoo;
            foxtra = '/';
            yankee = '.png?size=';
            sizing = option;
            romeon = verify;
            entity = output[oscard](sizing, kiloes, backup, foxtra, romeon, yankee, offset, verify);
            return entity;
        }
    };
    zuuluu['getGuildTagBadgeUrl'] = report;
    zuuluu['getUserPrimaryGuild'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useShouldDisplayGuildTag
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            verify = argFoo;
            offset = argBar;
            var _closure2_slot0 = verify;
            var _closure2_slot1 = offset;
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 4;
            oscard = golfie[zuuluu];
            report = undefined;
            foxtra = tangon.bind(report)(oscard);
            romeon = foxtra.useStateFromStores;
            oscard = _closure1_slot3;
            yankee = new Array(1);
            yankee[0] = oscard;
            option = new Array(1);
            option[0] = verify;
            oscard = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getUser;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = romeon.bind(foxtra)(yankee, oscard, option);
            zuuluu = golfie[zuuluu];
            option = tangon.bind(report)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot2;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = new Array(2);
            zuuluu[0] = offset;
            zuuluu[1] = verify;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = null;
                    if(!(entity != michal)) { _fun00010_ip = 83; continue _fun00009 }
 13:
                    michal = _closure2_slot0;
                    if(!(entity != michal)) { _fun00010_ip = 83; continue _fun00009 }
 21:
                    oscard = _closure1_slot2;
                    report = oscard.getMember;
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot0;
                    tangon = report.bind(oscard)(tangon, zuuluu);
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    michal = zuuluu.hasAutomodQuarantinedProfile;
                    michal = michal.bind(zuuluu)(tangon);
                    return michal;
 83:
                    return entity;
                }
            };
            michal = golfie.bind(option)(tangon, michal, zuuluu);
            zuuluu = _closure1_slot7;
            tangon = null;
            golfie = tangon == oscard;
            entity = undefined;
            if(golfie) { _fun00008_ip = 149; continue _fun00007 }
 143:
            entity = oscard.primaryGuild;
 149:
            entity = zuuluu.bind(report)(entity);
            zuuluu = entity.tag;
            entity = entity.guildId;
            entity = tangon != entity;
            if(!entity) { _fun00008_ip = 175; continue _fun00007 }
 171:
            entity = tangon != zuuluu;
 175:
            if(!entity) { _fun00008_ip = 181; continue _fun00007 }
 178:
            entity = !michal;
 181:
            return entity;
        }
    };
    zuuluu['useShouldDisplayGuildTag'] = tangon;
    michal = function(argFoo, argBar) { // Original name: shouldDisplayGuildTag
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            option = argFoo;
            golfie = argBar;
            michal = _closure1_slot3;
            entity = michal.getUser;
            report = entity.bind(michal)(option);
            michal = _closure1_slot7;
            tangon = null;
            verify = tangon == report;
            oscard = undefined;
            entity = undefined;
            if(verify) { _fun00012_ip = 47; continue _fun00011 }
 41:
            entity = report.primaryGuild;
 47:
            entity = michal.bind(oscard)(entity);
            michal = entity.tag;
            entity = entity.guildId;
            entity = tangon != entity;
            if(!entity) { _fun00012_ip = 73; continue _fun00011 }
 69:
            entity = tangon != michal;
 73:
            if(!entity) { _fun00012_ip = 140; continue _fun00011 }
 76:
            michal = tangon != golfie;
            if(!michal) { _fun00012_ip = 87; continue _fun00011 }
 83:
            michal = tangon != option;
 87:
            if(!michal) { _fun00012_ip = 137; continue _fun00011 }
 90:
            report = _closure1_slot0;
            verify = _closure1_slot1;
            tangon = 5;
            tangon = verify[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.hasAutomodQuarantinedProfile;
            oscard = _closure1_slot2;
            zuuluu = oscard.getMember;
            zuuluu = zuuluu.bind(oscard)(golfie, option);
            michal = tangon.bind(report)(zuuluu);
 137:
            entity = !michal;
 140:
            return entity;
        }
    };
    zuuluu['shouldDisplayGuildTag'] = michal;
    return entity;
})();