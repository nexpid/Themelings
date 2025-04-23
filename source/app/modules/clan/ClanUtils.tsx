// app/modules/clan/ClanUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: getUserPrimaryGuild
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
    var _closure1_slot8 = report;
    tangon = function(argFoo, argBar) { // Original name: getClanBadgeUrl
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            yankee = argBar;
            zuuluu = arguments[2];
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00004_ip = 25; continue _fun00003 }
 12:
            entity = _closure1_slot5;
            zuuluu = entity.SIZE_12;
 25:
            tangon = null;
            if(!(tangon != yankee)) { _fun00004_ip = 55; continue _fun00003 }
 31:
            entity = global;
            report = entity.window;
            report = report.GLOBAL_ENV;
            offset = report.CDN_HOST;
            if(!(tangon == offset)) { _fun00004_ip = 57; continue _fun00003 }
 55:
            return michal;
 57:
            michal = _closure1_slot7;
            romeon = michal[zuuluu];
            michal = entity.location;
            update = michal.protocol;
            entity = entity.HermesInternal;
            golfie = entity.concat;
            source = '';
            echoed = '//';
            output = '/clan-badges/';
            sizing = argFoo;
            kiloes = '/';
            foxtra = '.png?size=';
            result = offset;
            backup = yankee;
            entity = source[golfie](update, echoed, result, output, sizing, kiloes, backup, foxtra, romeon, yankee);
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.ClanTagBadgeSize;
    var _closure1_slot5 = verify;
    oscard = 3;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.GuildFeatures;
    var _closure1_slot6 = oscard;
    oscard = verify.SIZE_12;
    oscard = verify.SIZE_16;
    oscard = verify.SIZE_24;
    oscard = verify.SIZE_32;
    oscard = verify.SIZE_36;
    oscard = {};
    offset = verify.SIZE_12;
    yankee = 32;
    oscard[offset] = yankee;
    offset = verify.SIZE_16;
    oscard[offset] = yankee;
    yankee = verify.SIZE_24;
    offset = 48;
    oscard[yankee] = offset;
    yankee = verify.SIZE_32;
    offset = 64;
    oscard[yankee] = offset;
    offset = verify.SIZE_36;
    verify = 80;
    oscard[offset] = verify;
    var _closure1_slot7 = oscard;
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/clan/ClanUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo, argBar) { // Original name: stableSort
        entity = argBar;
        var _closure2_slot0 = entity;
        entity = global;
        tangon = entity.Array;
        zuuluu = tangon.from;
        entity = argFoo;
        entity = zuuluu.bind(tangon)(entity);
        zuuluu = entity.sort;
        michal = function(argFoo, argBar) {
            report = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 4;
            entity = option[zuuluu];
            tangon = undefined;
            offset = report.bind(tangon)(entity);
            verify = offset.v3;
            golfie = _closure2_slot0;
            entity = global;
            michal = entity.HermesInternal;
            yankee = michal.concat;
            oscard = '';
            michal = argFoo;
            michal = yankee.bind(oscard)(michal, golfie);
            michal = verify.bind(offset)(michal);
            zuuluu = option[zuuluu];
            tangon = report.bind(tangon)(zuuluu);
            zuuluu = tangon.v3;
            entity = entity.HermesInternal;
            report = entity.concat;
            entity = argBar;
            entity = report.bind(oscard)(entity, golfie);
            entity = zuuluu.bind(tangon)(entity);
            entity = michal - entity;
            return entity;
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['stableSort'] = oscard;
    zuuluu['getUserPrimaryGuild'] = report;
    report = function(argFoo) { // Original name: guildSupportsTags
        zuuluu = argFoo;
        michal = zuuluu.hasFeature;
        entity = _closure1_slot6;
        entity = entity.GUILD_TAGS;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['guildSupportsTags'] = report;
    report = function(argFoo) { // Original name: userHasAdoptedAnyClanIdentity
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00006_ip = 24; continue _fun00005 }
 12:
            michal = michal.identityEnabled;
            michal = !michal;
            entity = !michal;
 24:
            return entity;
        }
    };
    zuuluu['userHasAdoptedAnyClanIdentity'] = report;
    report = function(argFoo, argBar) { // Original name: isGuildAdoptedUserClanIdentity
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = null;
            entity = zuuluu != report;
            if(!entity) { _fun00008_ip = 19; continue _fun00007 }
 15:
            entity = zuuluu != tangon;
 19:
            if(!entity) { _fun00008_ip = 66; continue _fun00007 }
 22:
            michal = tangon.identityGuildId;
            michal = zuuluu != michal;
            if(!michal) { _fun00008_ip = 63; continue _fun00007 }
 35:
            zuuluu = tangon.identityGuildId;
            zuuluu = zuuluu === report;
            if(!zuuluu) { _fun00008_ip = 60; continue _fun00007 }
 48:
            tangon = tangon.identityEnabled;
            tangon = !tangon;
            zuuluu = !tangon;
 60:
            michal = zuuluu;
 63:
            entity = michal;
 66:
            return entity;
        }
    };
    zuuluu['isGuildAdoptedUserClanIdentity'] = report;
    report = function(argFoo, argBar) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            backup = argBar;
            zuuluu = michal.length;
            entity = 0;
            if(!(entity !== zuuluu)) { _fun00010_ip = 445; continue _fun00009 }
 20:
            zuuluu = michal.length;
            golfie = 1;
            if(!(golfie !== zuuluu)) { _fun00010_ip = 439; continue _fun00009 }
 35:
            tangon = michal.length;
            zuuluu = 2;
            if(!(zuuluu !== tangon)) { _fun00010_ip = 354; continue _fun00009 }
 50:
            zuuluu = null;
            if(!(zuuluu != backup)) { _fun00010_ip = 68; continue _fun00009 }
 56:
            zuuluu = michal.length;
            if(!(!(zuuluu > backup))) { _fun00010_ip = 189; continue _fun00009 }
 68:
            tangon = michal.slice;
            zuuluu = -1;
            report = tangon.bind(michal)(entity, zuuluu);
            tangon = report.join;
            zuuluu = ', ';
            verify = tangon.bind(report)(zuuluu);
            zuuluu = michal.length;
            zuuluu = zuuluu - golfie;
            option = michal[zuuluu];
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 5;
            report = yankee[zuuluu];
            tangon = undefined;
            report = offset.bind(tangon)(report);
            oscard = report.intl;
            report = oscard.formatToPlainString;
            zuuluu = yankee[zuuluu];
            zuuluu = offset.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.hZNSNz;
            zuuluu = {};
            zuuluu['items'] = verify;
            zuuluu['last'] = option;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            return zuuluu;
 189:
            zuuluu = michal.slice;
            report = zuuluu.bind(michal)(entity, backup);
            tangon = report.join;
            zuuluu = ', ';
            verify = tangon.bind(report)(zuuluu);
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 5;
            report = yankee[zuuluu];
            tangon = undefined;
            report = offset.bind(tangon)(report);
            romeon = report.intl;
            option = romeon.formatToPlainString;
            report = yankee[zuuluu];
            report = offset.bind(tangon)(report);
            report = report.t;
            oscard = report.+E2fNj;
            report = {};
            foxtra = michal.length;
            foxtra = foxtra - backup;
            report['n'] = foxtra;
            option = option.bind(romeon)(oscard, report);
            report = yankee[zuuluu];
            report = offset.bind(tangon)(report);
            oscard = report.intl;
            report = oscard.formatToPlainString;
            zuuluu = yankee[zuuluu];
            zuuluu = offset.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.hZNSNz;
            zuuluu = {};
            zuuluu['items'] = verify;
            zuuluu['last'] = option;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            return zuuluu;
 354:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 5;
            report = verify[zuuluu];
            tangon = undefined;
            report = option.bind(tangon)(report);
            oscard = report.intl;
            report = oscard.formatToPlainString;
            zuuluu = verify[zuuluu];
            zuuluu = option.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.+v1gGx;
            zuuluu = {};
            option = michal[entity];
            zuuluu['item1'] = option;
            golfie = michal[golfie];
            zuuluu['item2'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            return zuuluu;
 439:
            entity = michal[entity];
            return entity;
 445:
            entity = null;
            return entity;
        }
    };
    zuuluu['formatSelectionList'] = report;
    zuuluu['getClanBadgeUrl'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getClanBadgeUrlFromClan
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00012_ip = 19; continue _fun00011 }
 9:
            michal = entity.identityGuildId;
            if(!(zuuluu == michal)) { _fun00012_ip = 23; continue _fun00011 }
 19:
            michal = undefined;
            return michal;
 23:
            report = _closure1_slot9;
            tangon = entity.identityGuildId;
            zuuluu = entity.badge;
            michal = undefined;
            entity = argBar;
            entity = report.bind(michal)(tangon, zuuluu, entity);
            return entity;
        }
    };
    zuuluu['getClanBadgeUrlFromClan'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getClanBannerUrl
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            offset = argBar;
            michal = null;
            if(!(michal != offset)) { _fun00014_ip = 33; continue _fun00013 }
 9:
            entity = global;
            zuuluu = entity.window;
            zuuluu = zuuluu.GLOBAL_ENV;
            verify = zuuluu.CDN_HOST;
            if(!(michal == verify)) { _fun00014_ip = 37; continue _fun00013 }
 33:
            michal = undefined;
            return michal;
 37:
            michal = entity.location;
            result = michal.protocol;
            entity = entity.HermesInternal;
            golfie = entity.concat;
            echoed = '';
            output = '//';
            kiloes = '/clan-banners/';
            backup = argFoo;
            foxtra = '/';
            yankee = '.png?size=512';
            sizing = verify;
            romeon = offset;
            entity = echoed[golfie](result, output, sizing, kiloes, backup, foxtra, romeon, yankee, offset);
            return entity;
        }
    };
    zuuluu['getClanBannerUrl'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useShouldDisplayClanTag
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            verify = argFoo;
            offset = argBar;
            var _closure2_slot0 = verify;
            var _closure2_slot1 = offset;
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 6;
            oscard = golfie[zuuluu];
            report = undefined;
            foxtra = tangon.bind(report)(oscard);
            romeon = foxtra.useStateFromStores;
            oscard = _closure1_slot4;
            yankee = new Array(1);
            yankee[0] = oscard;
            option = new Array(1);
            option[0] = verify;
            oscard = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getUser;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = romeon.bind(foxtra)(yankee, oscard, option);
            zuuluu = golfie[zuuluu];
            option = tangon.bind(report)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot3;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = new Array(2);
            zuuluu[0] = offset;
            zuuluu[1] = verify;
            michal = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = null;
                    if(!(entity != michal)) { _fun00018_ip = 83; continue _fun00017 }
 13:
                    michal = _closure2_slot0;
                    if(!(entity != michal)) { _fun00018_ip = 83; continue _fun00017 }
 21:
                    oscard = _closure1_slot3;
                    report = oscard.getMember;
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot0;
                    tangon = report.bind(oscard)(tangon, zuuluu);
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 7;
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
            zuuluu = _closure1_slot8;
            tangon = null;
            golfie = tangon == oscard;
            entity = undefined;
            if(golfie) { _fun00016_ip = 149; continue _fun00015 }
 143:
            entity = oscard.primaryGuild;
 149:
            entity = zuuluu.bind(report)(entity);
            zuuluu = entity.tag;
            entity = entity.guildId;
            entity = tangon != entity;
            if(!entity) { _fun00016_ip = 175; continue _fun00015 }
 171:
            entity = tangon != zuuluu;
 175:
            if(!entity) { _fun00016_ip = 181; continue _fun00015 }
 178:
            entity = !michal;
 181:
            return entity;
        }
    };
    zuuluu['useShouldDisplayClanTag'] = tangon;
    michal = function(argFoo, argBar) { // Original name: shouldDisplayClanTag
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            option = argFoo;
            golfie = argBar;
            michal = _closure1_slot4;
            entity = michal.getUser;
            report = entity.bind(michal)(option);
            michal = _closure1_slot8;
            tangon = null;
            verify = tangon == report;
            oscard = undefined;
            entity = undefined;
            if(verify) { _fun00020_ip = 47; continue _fun00019 }
 41:
            entity = report.primaryGuild;
 47:
            entity = michal.bind(oscard)(entity);
            michal = entity.tag;
            entity = entity.guildId;
            entity = tangon != entity;
            if(!entity) { _fun00020_ip = 73; continue _fun00019 }
 69:
            entity = tangon != michal;
 73:
            if(!entity) { _fun00020_ip = 140; continue _fun00019 }
 76:
            michal = tangon != golfie;
            if(!michal) { _fun00020_ip = 87; continue _fun00019 }
 83:
            michal = tangon != option;
 87:
            if(!michal) { _fun00020_ip = 137; continue _fun00019 }
 90:
            report = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 7;
            tangon = verify[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.hasAutomodQuarantinedProfile;
            oscard = _closure1_slot3;
            zuuluu = oscard.getMember;
            zuuluu = zuuluu.bind(oscard)(golfie, option);
            michal = tangon.bind(report)(zuuluu);
 137:
            entity = !michal;
 140:
            return entity;
        }
    };
    zuuluu['shouldDisplayClanTag'] = michal;
    return entity;
})();