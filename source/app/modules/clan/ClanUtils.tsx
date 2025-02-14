// app/modules/clan/ClanUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    report = function(argFoo) { // Original name: getUserPrimaryGuild
        _fun72651: for(var _fun72651_ip = 0; ; ) switch(_fun72651_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity != zulu)) { _fun72651_ip = 18; continue _fun72651 }
 9:
            entity = zulu.identityEnabled;
            if(entity) { _fun72651_ip = 22; continue _fun72651 }
 18:
            entity = {};
            _fun72651_ip = 57; continue _fun72651;
 22:
            mike = {};
            tango = zulu.identityGuildId;
            mike['guildId'] = tango;
            tango = zulu.tag;
            mike['tag'] = tango;
            zulu = zulu.badge;
            mike['badge'] = zulu;
            entity = mike;
 57:
            return entity;
        }
    };
    var _closure1_slot9 = report;
    tango = function(argFoo, argBar) { // Original name: getClanBadgeUrl
        _fun72652: for(var _fun72652_ip = 0; ; ) switch(_fun72652_ip) {
 0:
            yankee = argBar;
            zulu = arguments[2];
            mike = undefined;
            if(!(zulu === mike)) { _fun72652_ip = 25; continue _fun72652 }
 12:
            entity = _closure1_slot6;
            zulu = entity.SIZE_12;
 25:
            tango = null;
            if(!(tango != yankee)) { _fun72652_ip = 55; continue _fun72652 }
 31:
            entity = global;
            report = entity.window;
            report = report.GLOBAL_ENV;
            offset = report.CDN_HOST;
            if(!(tango == offset)) { _fun72652_ip = 57; continue _fun72652 }
 55:
            return mike;
 57:
            mike = _closure1_slot8;
            romeo = mike[zulu];
            mike = entity.location;
            update = mike.protocol;
            entity = entity.HermesInternal;
            golf = entity.concat;
            source = '';
            echo = '//';
            output = '/clan-badges/';
            sizing = argFoo;
            kilo = '/';
            foxtrot = '.png?size=';
            result = offset;
            backup = yankee;
            entity = source[golf](update, echo, result, output, sizing, kilo, backup, foxtrot, romeo, yankee);
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.ClanTagBadgeSize;
    var _closure1_slot6 = verify;
    oscar = 4;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.GuildFeatures;
    var _closure1_slot7 = oscar;
    oscar = verify.SIZE_12;
    oscar = verify.SIZE_16;
    oscar = verify.SIZE_24;
    oscar = verify.SIZE_32;
    oscar = verify.SIZE_36;
    oscar = {};
    offset = verify.SIZE_12;
    yankee = 32;
    oscar[offset] = yankee;
    offset = verify.SIZE_16;
    oscar[offset] = yankee;
    yankee = verify.SIZE_24;
    offset = 48;
    oscar[yankee] = offset;
    yankee = verify.SIZE_32;
    offset = 64;
    oscar[yankee] = offset;
    offset = verify.SIZE_36;
    verify = 80;
    oscar[offset] = verify;
    var _closure1_slot8 = oscar;
    oscar = 9;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/clan/ClanUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo, argBar) { // Original name: stableSort
        entity = argBar;
        var _closure2_slot0 = entity;
        entity = global;
        tango = entity.Array;
        zulu = tango.from;
        entity = argFoo;
        entity = zulu.bind(tango)(entity);
        zulu = entity.sort;
        mike = function(argFoo, argBar) {
            report = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 5;
            entity = options[zulu];
            tango = undefined;
            offset = report.bind(tango)(entity);
            verify = offset.v3;
            golf = _closure2_slot0;
            entity = global;
            mike = entity.HermesInternal;
            yankee = mike.concat;
            oscar = '';
            mike = argFoo;
            mike = yankee.bind(oscar)(mike, golf);
            mike = verify.bind(offset)(mike);
            zulu = options[zulu];
            tango = report.bind(tango)(zulu);
            zulu = tango.v3;
            entity = entity.HermesInternal;
            report = entity.concat;
            entity = argBar;
            entity = report.bind(oscar)(entity, golf);
            entity = zulu.bind(tango)(entity);
            entity = mike - entity;
            return entity;
        };
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['stableSort'] = oscar;
    zulu['getUserPrimaryGuild'] = report;
    report = function(argFoo) { // Original name: isGuildAClan
        _fun72655: for(var _fun72655_ip = 0; ; ) switch(_fun72655_ip) {
 0:
            tango = argFoo;
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun72655_ip = 36; continue _fun72655 }
 12:
            zulu = tango.hasFeature;
            mike = _closure1_slot7;
            mike = mike.CLAN;
            entity = zulu.bind(tango)(mike);
 36:
            return entity;
        }
    };
    zulu['isGuildAClan'] = report;
    report = function(argFoo) { // Original name: userHasAdoptedAnyClanIdentity
        _fun72656: for(var _fun72656_ip = 0; ; ) switch(_fun72656_ip) {
 0:
            mike = argFoo;
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun72656_ip = 24; continue _fun72656 }
 12:
            mike = mike.identityEnabled;
            mike = !mike;
            entity = !mike;
 24:
            return entity;
        }
    };
    zulu['userHasAdoptedAnyClanIdentity'] = report;
    report = function(argFoo, argBar) { // Original name: isGuildAdoptedUserClanIdentityChanged
        _fun72657: for(var _fun72657_ip = 0; ; ) switch(_fun72657_ip) {
 0:
            oscar = argFoo;
            tango = argBar;
            report = null;
            entity = report != tango;
            if(!entity) { _fun72657_ip = 135; continue _fun72657 }
 15:
            zulu = tango.identityGuildId;
            golf = report == oscar;
            mike = undefined;
            if(golf) { _fun72657_ip = 35; continue _fun72657 }
 30:
            mike = oscar.id;
 35:
            mike = zulu === mike;
            if(!mike) { _fun72657_ip = 132; continue _fun72657 }
 42:
            golf = report == oscar;
            zulu = undefined;
            if(golf) { _fun72657_ip = 71; continue _fun72657 }
 51:
            golf = oscar.profile;
            options = report == golf;
            zulu = undefined;
            if(options) { _fun72657_ip = 71; continue _fun72657 }
 66:
            zulu = golf.tag;
 71:
            zulu = report != zulu;
            if(!zulu) { _fun72657_ip = 116; continue _fun72657 }
 78:
            options = report == oscar;
            golf = undefined;
            if(options) { _fun72657_ip = 107; continue _fun72657 }
 87:
            oscar = oscar.profile;
            options = report == oscar;
            golf = undefined;
            if(options) { _fun72657_ip = 107; continue _fun72657 }
 102:
            golf = oscar.tag;
 107:
            oscar = tango.tag;
            zulu = golf !== oscar;
 116:
            if(zulu) { _fun72657_ip = 129; continue _fun72657 }
 119:
            tango = tango.identityEnabled;
            zulu = report == tango;
 129:
            mike = zulu;
 132:
            entity = mike;
 135:
            return entity;
        }
    };
    zulu['isGuildAdoptedUserClanIdentityChanged'] = report;
    report = function(argFoo, argBar) { // Original name: isGuildAdoptedUserClanIdentity
        _fun72658: for(var _fun72658_ip = 0; ; ) switch(_fun72658_ip) {
 0:
            report = argFoo;
            tango = argBar;
            zulu = null;
            entity = zulu != report;
            if(!entity) { _fun72658_ip = 19; continue _fun72658 }
 15:
            entity = zulu != tango;
 19:
            if(!entity) { _fun72658_ip = 66; continue _fun72658 }
 22:
            mike = tango.identityGuildId;
            mike = zulu != mike;
            if(!mike) { _fun72658_ip = 63; continue _fun72658 }
 35:
            zulu = tango.identityGuildId;
            zulu = zulu === report;
            if(!zulu) { _fun72658_ip = 60; continue _fun72658 }
 48:
            tango = tango.identityEnabled;
            tango = !tango;
            zulu = !tango;
 60:
            mike = zulu;
 63:
            entity = mike;
 66:
            return entity;
        }
    };
    zulu['isGuildAdoptedUserClanIdentity'] = report;
    report = function(argFoo, argBar) {
        _fun72659: for(var _fun72659_ip = 0; ; ) switch(_fun72659_ip) {
 0:
            mike = argFoo;
            backup = argBar;
            zulu = mike.length;
            entity = 0;
            if(!(entity !== zulu)) { _fun72659_ip = 445; continue _fun72659 }
 20:
            zulu = mike.length;
            golf = 1;
            if(!(golf !== zulu)) { _fun72659_ip = 439; continue _fun72659 }
 35:
            tango = mike.length;
            zulu = 2;
            if(!(zulu !== tango)) { _fun72659_ip = 352; continue _fun72659 }
 50:
            zulu = null;
            if(!(zulu != backup)) { _fun72659_ip = 68; continue _fun72659 }
 56:
            zulu = mike.length;
            if(!(!(zulu > backup))) { _fun72659_ip = 189; continue _fun72659 }
 68:
            tango = mike.slice;
            zulu = -1;
            report = tango.bind(mike)(entity, zulu);
            tango = report.join;
            zulu = ', ';
            verify = tango.bind(report)(zulu);
            zulu = mike.length;
            zulu = zulu - golf;
            options = mike[zulu];
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 6;
            report = yankee[zulu];
            tango = undefined;
            report = offset.bind(tango)(report);
            oscar = report.intl;
            report = oscar.formatToPlainString;
            zulu = yankee[zulu];
            zulu = offset.bind(tango)(zulu);
            zulu = zulu.t;
            tango = zulu.hZNSNz;
            zulu = {};
            zulu['items'] = verify;
            zulu['last'] = options;
            zulu = report.bind(oscar)(tango, zulu);
            return zulu;
 189:
            zulu = mike.slice;
            report = zulu.bind(mike)(entity, backup);
            tango = report.join;
            zulu = ', ';
            verify = tango.bind(report)(zulu);
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 6;
            report = yankee[zulu];
            tango = undefined;
            report = offset.bind(tango)(report);
            romeo = report.intl;
            options = romeo.formatToPlainString;
            report = yankee[zulu];
            report = offset.bind(tango)(report);
            report = report.t;
            oscar = report.+E2fNj;
            report = {};
            foxtrot = mike.length;
            foxtrot = foxtrot - backup;
            report['n'] = foxtrot;
            options = options.bind(romeo)(oscar, report);
            report = yankee[zulu];
            report = offset.bind(tango)(report);
            oscar = report.intl;
            report = oscar.formatToPlainString;
            zulu = yankee[zulu];
            zulu = offset.bind(tango)(zulu);
            zulu = zulu.t;
            tango = zulu.hZNSNz;
            zulu = {};
            zulu['items'] = verify;
            zulu['last'] = options;
            zulu = report.bind(oscar)(tango, zulu);
            return zulu;
 352:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 6;
            report = verify[zulu];
            tango = undefined;
            report = options.bind(tango)(report);
            oscar = report.intl;
            report = oscar.formatToPlainString;
            zulu = verify[zulu];
            zulu = options.bind(tango)(zulu);
            zulu = zulu.t;
            tango = zulu.+v1gGx;
            zulu = {};
            options = mike[entity];
            zulu['item1'] = options;
            golf = mike[golf];
            zulu['item2'] = golf;
            zulu = report.bind(oscar)(tango, zulu);
            return zulu;
 439:
            entity = mike[entity];
            return entity;
 445:
            entity = null;
            return entity;
        }
    };
    zulu['formatSelectionList'] = report;
    zulu['getClanBadgeUrl'] = tango;
    tango = function(argFoo, argBar) { // Original name: getClanBadgeUrlFromClan
        _fun72660: for(var _fun72660_ip = 0; ; ) switch(_fun72660_ip) {
 0:
            entity = argFoo;
            zulu = null;
            if(!(zulu != entity)) { _fun72660_ip = 19; continue _fun72660 }
 9:
            mike = entity.identityGuildId;
            if(!(zulu == mike)) { _fun72660_ip = 23; continue _fun72660 }
 19:
            mike = undefined;
            return mike;
 23:
            report = _closure1_slot10;
            tango = entity.identityGuildId;
            zulu = entity.badge;
            mike = undefined;
            entity = argBar;
            entity = report.bind(mike)(tango, zulu, entity);
            return entity;
        }
    };
    zulu['getClanBadgeUrlFromClan'] = tango;
    tango = function(argFoo, argBar) { // Original name: getClanBannerUrl
        _fun72661: for(var _fun72661_ip = 0; ; ) switch(_fun72661_ip) {
 0:
            offset = argBar;
            mike = null;
            if(!(mike != offset)) { _fun72661_ip = 33; continue _fun72661 }
 9:
            entity = global;
            zulu = entity.window;
            zulu = zulu.GLOBAL_ENV;
            verify = zulu.CDN_HOST;
            if(!(mike == verify)) { _fun72661_ip = 37; continue _fun72661 }
 33:
            mike = undefined;
            return mike;
 37:
            mike = entity.location;
            result = mike.protocol;
            entity = entity.HermesInternal;
            golf = entity.concat;
            echo = '';
            output = '//';
            kilo = '/clan-banners/';
            backup = argFoo;
            foxtrot = '/';
            yankee = '.png?size=512';
            sizing = verify;
            romeo = offset;
            entity = echo[golf](result, output, sizing, kilo, backup, foxtrot, romeo, yankee, offset);
            return entity;
        }
    };
    zulu['getClanBannerUrl'] = tango;
    tango = function(argFoo, argBar) { // Original name: useShouldDisplayClanTag
        _fun72662: for(var _fun72662_ip = 0; ; ) switch(_fun72662_ip) {
 0:
            offset = argFoo;
            yankee = argBar;
            var _closure2_slot0 = offset;
            var _closure2_slot1 = yankee;
            report = _closure1_slot0;
            options = _closure1_slot2;
            tango = 7;
            entity = options[tango];
            oscar = undefined;
            romeo = report.bind(oscar)(entity);
            verify = romeo.useStateFromStores;
            entity = _closure1_slot3;
            golf = new Array(1);
            golf[0] = entity;
            entity = function() {
                entity = _closure1_slot3;
                entity = entity.hideTags;
                return entity;
            };
            entity = verify.bind(romeo)(golf, entity);
            golf = options[tango];
            backup = report.bind(oscar)(golf);
            foxtrot = backup.useStateFromStores;
            golf = _closure1_slot5;
            romeo = new Array(1);
            romeo[0] = golf;
            verify = new Array(1);
            verify[0] = offset;
            golf = function() {
                zulu = _closure1_slot5;
                mike = zulu.getUser;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = foxtrot.bind(backup)(romeo, golf, verify);
            tango = options[tango];
            verify = report.bind(oscar)(tango);
            options = verify.useStateFromStores;
            tango = _closure1_slot4;
            report = new Array(1);
            report[0] = tango;
            tango = new Array(2);
            tango[0] = yankee;
            tango[1] = offset;
            zulu = function() {
                _fun72665: for(var _fun72665_ip = 0; ; ) switch(_fun72665_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = null;
                    if(!(entity != mike)) { _fun72665_ip = 83; continue _fun72665 }
 13:
                    mike = _closure2_slot0;
                    if(!(entity != mike)) { _fun72665_ip = 83; continue _fun72665 }
 21:
                    oscar = _closure1_slot4;
                    report = oscar.getMember;
                    tango = _closure2_slot1;
                    zulu = _closure2_slot0;
                    tango = report.bind(oscar)(tango, zulu);
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 8;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.hasAutomodQuarantinedProfile;
                    mike = mike.bind(zulu)(tango);
                    return mike;
 83:
                    return entity;
                }
            };
            zulu = options.bind(verify)(report, zulu, tango);
            tango = _closure1_slot9;
            report = null;
            options = report == golf;
            mike = undefined;
            if(options) { _fun72662_ip = 192; continue _fun72662 }
 186:
            mike = golf.primaryGuild;
 192:
            mike = tango.bind(oscar)(mike);
            tango = mike.tag;
            mike = mike.guildId;
            entity = !entity;
            if(!entity) { _fun72662_ip = 233; continue _fun72662 }
 213:
            mike = report != mike;
            if(!mike) { _fun72662_ip = 224; continue _fun72662 }
 220:
            mike = report != tango;
 224:
            if(!mike) { _fun72662_ip = 230; continue _fun72662 }
 227:
            mike = !zulu;
 230:
            entity = mike;
 233:
            return entity;
        }
    };
    zulu['useShouldDisplayClanTag'] = tango;
    mike = function(argFoo, argBar) { // Original name: shouldDisplayClanTag
        _fun72666: for(var _fun72666_ip = 0; ; ) switch(_fun72666_ip) {
 0:
            options = argFoo;
            golf = argBar;
            entity = _closure1_slot3;
            entity = entity.hideTags;
            if(entity) { _fun72666_ip = 158; continue _fun72666 }
 25:
            mike = _closure1_slot5;
            entity = mike.getUser;
            report = entity.bind(mike)(options);
            mike = _closure1_slot9;
            tango = null;
            verify = tango == report;
            oscar = undefined;
            entity = undefined;
            if(verify) { _fun72666_ip = 63; continue _fun72666 }
 57:
            entity = report.primaryGuild;
 63:
            entity = mike.bind(oscar)(entity);
            mike = entity.tag;
            entity = entity.guildId;
            entity = tango != entity;
            if(!entity) { _fun72666_ip = 89; continue _fun72666 }
 85:
            entity = tango != mike;
 89:
            if(!entity) { _fun72666_ip = 156; continue _fun72666 }
 92:
            mike = tango != golf;
            if(!mike) { _fun72666_ip = 103; continue _fun72666 }
 99:
            mike = tango != options;
 103:
            if(!mike) { _fun72666_ip = 153; continue _fun72666 }
 106:
            report = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 8;
            tango = verify[tango];
            report = report.bind(oscar)(tango);
            tango = report.hasAutomodQuarantinedProfile;
            oscar = _closure1_slot4;
            zulu = oscar.getMember;
            zulu = zulu.bind(oscar)(golf, options);
            mike = tango.bind(report)(zulu);
 153:
            entity = !mike;
 156:
            return entity;
 158:
            entity = false;
            return entity;
        }
    };
    zulu['shouldDisplayClanTag'] = mike;
    return entity;
})();