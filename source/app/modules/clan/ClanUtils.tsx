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
    var _closure1_slot9 = report;
    tangon = function(argFoo, argBar) { // Original name: getClanBadgeUrl
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            yankee = argBar;
            zuuluu = arguments[2];
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00004_ip = 25; continue _fun00003 }
 12:
            entity = _closure1_slot6;
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
            michal = _closure1_slot8;
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
    var _closure1_slot10 = tangon;
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
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.ClanTagBadgeSize;
    var _closure1_slot6 = verify;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.GuildFeatures;
    var _closure1_slot7 = oscard;
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
    var _closure1_slot8 = oscard;
    oscard = 9;
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
            zuuluu = 5;
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
    report = function(argFoo) { // Original name: isGuildAClan
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00006_ip = 36; continue _fun00005 }
 12:
            zuuluu = tangon.hasFeature;
            michal = _closure1_slot7;
            michal = michal.CLAN;
            entity = zuuluu.bind(tangon)(michal);
 36:
            return entity;
        }
    };
    zuuluu['isGuildAClan'] = report;
    report = function(argFoo) { // Original name: guildSupportsTags
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            zuuluu = tangon.hasFeature;
            entity = _closure1_slot7;
            entity = entity.CLAN;
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 30:
            zuuluu = tangon.hasFeature;
            michal = _closure1_slot7;
            michal = michal.GUILD_TAGS;
            entity = zuuluu.bind(tangon)(michal);
 51:
            return entity;
        }
    };
    zuuluu['guildSupportsTags'] = report;
    report = function(argFoo) { // Original name: userHasAdoptedAnyClanIdentity
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00010_ip = 24; continue _fun00009 }
 12:
            michal = michal.identityEnabled;
            michal = !michal;
            entity = !michal;
 24:
            return entity;
        }
    };
    zuuluu['userHasAdoptedAnyClanIdentity'] = report;
    report = function(argFoo, argBar) { // Original name: isGuildAdoptedUserClanIdentityChanged
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscard = argFoo;
            tangon = argBar;
            report = null;
            entity = report != tangon;
            if(!entity) { _fun00012_ip = 135; continue _fun00011 }
 15:
            zuuluu = tangon.identityGuildId;
            golfie = report == oscard;
            michal = undefined;
            if(golfie) { _fun00012_ip = 35; continue _fun00011 }
 30:
            michal = oscard.id;
 35:
            michal = zuuluu === michal;
            if(!michal) { _fun00012_ip = 132; continue _fun00011 }
 42:
            golfie = report == oscard;
            zuuluu = undefined;
            if(golfie) { _fun00012_ip = 71; continue _fun00011 }
 51:
            golfie = oscard.profile;
            option = report == golfie;
            zuuluu = undefined;
            if(option) { _fun00012_ip = 71; continue _fun00011 }
 66:
            zuuluu = golfie.tag;
 71:
            zuuluu = report != zuuluu;
            if(!zuuluu) { _fun00012_ip = 116; continue _fun00011 }
 78:
            option = report == oscard;
            golfie = undefined;
            if(option) { _fun00012_ip = 107; continue _fun00011 }
 87:
            oscard = oscard.profile;
            option = report == oscard;
            golfie = undefined;
            if(option) { _fun00012_ip = 107; continue _fun00011 }
 102:
            golfie = oscard.tag;
 107:
            oscard = tangon.tag;
            zuuluu = golfie !== oscard;
 116:
            if(zuuluu) { _fun00012_ip = 129; continue _fun00011 }
 119:
            tangon = tangon.identityEnabled;
            zuuluu = report == tangon;
 129:
            michal = zuuluu;
 132:
            entity = michal;
 135:
            return entity;
        }
    };
    zuuluu['isGuildAdoptedUserClanIdentityChanged'] = report;
    report = function(argFoo, argBar) { // Original name: isGuildAdoptedUserClanIdentity
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = null;
            entity = zuuluu != report;
            if(!entity) { _fun00014_ip = 19; continue _fun00013 }
 15:
            entity = zuuluu != tangon;
 19:
            if(!entity) { _fun00014_ip = 66; continue _fun00013 }
 22:
            michal = tangon.identityGuildId;
            michal = zuuluu != michal;
            if(!michal) { _fun00014_ip = 63; continue _fun00013 }
 35:
            zuuluu = tangon.identityGuildId;
            zuuluu = zuuluu === report;
            if(!zuuluu) { _fun00014_ip = 60; continue _fun00013 }
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
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            backup = argBar;
            zuuluu = michal.length;
            entity = 0;
            if(!(entity !== zuuluu)) { _fun00016_ip = 449; continue _fun00015 }
 20:
            zuuluu = michal.length;
            golfie = 1;
            if(!(golfie !== zuuluu)) { _fun00016_ip = 443; continue _fun00015 }
 35:
            tangon = michal.length;
            zuuluu = 2;
            if(!(zuuluu !== tangon)) { _fun00016_ip = 354; continue _fun00015 }
 50:
            zuuluu = null;
            if(!(zuuluu != backup)) { _fun00016_ip = 68; continue _fun00015 }
 56:
            zuuluu = michal.length;
            if(!(!(zuuluu > backup))) { _fun00016_ip = 189; continue _fun00015 }
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
            zuuluu = 6;
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
            zuuluu = 6;
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
            zuuluu = 6;
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
 443:
            entity = michal[entity];
            return entity;
 449:
            entity = null;
            return entity;
        }
    };
    zuuluu['formatSelectionList'] = report;
    zuuluu['getClanBadgeUrl'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getClanBadgeUrlFromClan
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00018_ip = 19; continue _fun00017 }
 9:
            michal = entity.identityGuildId;
            if(!(zuuluu == michal)) { _fun00018_ip = 23; continue _fun00017 }
 19:
            michal = undefined;
            return michal;
 23:
            report = _closure1_slot10;
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
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            offset = argBar;
            michal = null;
            if(!(michal != offset)) { _fun00020_ip = 33; continue _fun00019 }
 9:
            entity = global;
            zuuluu = entity.window;
            zuuluu = zuuluu.GLOBAL_ENV;
            verify = zuuluu.CDN_HOST;
            if(!(michal == verify)) { _fun00020_ip = 37; continue _fun00019 }
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
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            offset = argFoo;
            yankee = argBar;
            var _closure2_slot0 = offset;
            var _closure2_slot1 = yankee;
            report = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 7;
            entity = option[tangon];
            oscard = undefined;
            romeon = report.bind(oscard)(entity);
            verify = romeon.useStateFromStores;
            entity = _closure1_slot3;
            golfie = new Array(1);
            golfie[0] = entity;
            entity = function() {
                entity = _closure1_slot3;
                entity = entity.hideTags;
                return entity;
            };
            entity = verify.bind(romeon)(golfie, entity);
            golfie = option[tangon];
            backup = report.bind(oscard)(golfie);
            foxtra = backup.useStateFromStores;
            golfie = _closure1_slot5;
            romeon = new Array(1);
            romeon[0] = golfie;
            verify = new Array(1);
            verify[0] = offset;
            golfie = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getUser;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = foxtra.bind(backup)(romeon, golfie, verify);
            tangon = option[tangon];
            verify = report.bind(oscard)(tangon);
            option = verify.useStateFromStores;
            tangon = _closure1_slot4;
            report = new Array(1);
            report[0] = tangon;
            tangon = new Array(2);
            tangon[0] = yankee;
            tangon[1] = offset;
            zuuluu = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = null;
                    if(!(entity != michal)) { _fun00024_ip = 83; continue _fun00023 }
 13:
                    michal = _closure2_slot0;
                    if(!(entity != michal)) { _fun00024_ip = 83; continue _fun00023 }
 21:
                    oscard = _closure1_slot4;
                    report = oscard.getMember;
                    tangon = _closure2_slot1;
                    zuuluu = _closure2_slot0;
                    tangon = report.bind(oscard)(tangon, zuuluu);
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 8;
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
            zuuluu = option.bind(verify)(report, zuuluu, tangon);
            tangon = _closure1_slot9;
            report = null;
            option = report == golfie;
            michal = undefined;
            if(option) { _fun00022_ip = 186; continue _fun00021 }
 180:
            michal = golfie.primaryGuild;
 186:
            michal = tangon.bind(oscard)(michal);
            tangon = michal.tag;
            michal = michal.guildId;
            entity = !entity;
            if(!entity) { _fun00022_ip = 227; continue _fun00021 }
 207:
            michal = report != michal;
            if(!michal) { _fun00022_ip = 218; continue _fun00021 }
 214:
            michal = report != tangon;
 218:
            if(!michal) { _fun00022_ip = 224; continue _fun00021 }
 221:
            michal = !zuuluu;
 224:
            entity = michal;
 227:
            return entity;
        }
    };
    zuuluu['useShouldDisplayClanTag'] = tangon;
    michal = function(argFoo, argBar) { // Original name: shouldDisplayClanTag
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            option = argFoo;
            golfie = argBar;
            entity = _closure1_slot3;
            entity = entity.hideTags;
            if(entity) { _fun00026_ip = 158; continue _fun00025 }
 25:
            michal = _closure1_slot5;
            entity = michal.getUser;
            report = entity.bind(michal)(option);
            michal = _closure1_slot9;
            tangon = null;
            verify = tangon == report;
            oscard = undefined;
            entity = undefined;
            if(verify) { _fun00026_ip = 63; continue _fun00025 }
 57:
            entity = report.primaryGuild;
 63:
            entity = michal.bind(oscard)(entity);
            michal = entity.tag;
            entity = entity.guildId;
            entity = tangon != entity;
            if(!entity) { _fun00026_ip = 89; continue _fun00025 }
 85:
            entity = tangon != michal;
 89:
            if(!entity) { _fun00026_ip = 156; continue _fun00025 }
 92:
            michal = tangon != golfie;
            if(!michal) { _fun00026_ip = 103; continue _fun00025 }
 99:
            michal = tangon != option;
 103:
            if(!michal) { _fun00026_ip = 153; continue _fun00025 }
 106:
            report = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 8;
            tangon = verify[tangon];
            report = report.bind(oscard)(tangon);
            tangon = report.hasAutomodQuarantinedProfile;
            oscard = _closure1_slot4;
            zuuluu = oscard.getMember;
            zuuluu = zuuluu.bind(oscard)(golfie, option);
            michal = tangon.bind(report)(zuuluu);
 153:
            entity = !michal;
 156:
            return entity;
 158:
            entity = false;
            return entity;
        }
    };
    zuuluu['shouldDisplayClanTag'] = michal;
    return entity;
})();