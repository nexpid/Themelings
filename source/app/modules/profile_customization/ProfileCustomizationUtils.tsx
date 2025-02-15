// app/modules/profile_customization/ProfileCustomizationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/profile_customization/ProfileCustomizationUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useAvatarsWithGuilds
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = _closure1_slot6;
                entity = mike.getMutableAllGuildsAndMembers;
                offset = entity.bind(mike)();
                zulu = {};
                options = offset;
                tango = null;
                for(report in options)
 35:
                {
 44:
                    foxtrot = report;
                    romeo = offset[foxtrot];
                    yankee = _closure2_slot0;
                    romeo = romeo[yankee];
                    backup = tango == romeo;
                    yankee = undefined;
                    if(backup) { _fun00002_ip = 74; continue _fun00001 }
 68:
                    yankee = romeo.avatar;
 74:
                    if(tango == yankee) { _fun00002_ip = 35; continue _fun00001 }
 78:
                    romeo = zulu[yankee];
                    if(!(tango == romeo)) { _fun00002_ip = 94; continue _fun00001 }
 86:
                    romeo = new Array(0);
                    zulu[yankee] = romeo;
 94:
                    romeo = zulu[yankee];
                    yankee = romeo.push;
                    yankee = yankee.bind(romeo)(foxtrot);
                    _fun00002_ip = 35; continue _fun00001;
                }
 110:
                entity = global;
                mike = entity.Object;
                entity = mike.entries;
                zulu = entity.bind(mike)(zulu);
                mike = zulu.map;
                entity = function(argFoo) {
                    mike = argFoo;
                    entity = 1;
                    mike = mike[entity];
                    entity = 0;
                    entity = mike[entity];
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useAvatarsWithGuilds'] = tango;
    tango = function(argFoo, argBar) { // Original name: useGuildMemberAndUserPendingAvatarDecoration
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            report = argBar;
            var _closure2_slot0 = mike;
            var _closure2_slot1 = report;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            golf = 5;
            tango = yankee[golf];
            options = undefined;
            romeo = offset.bind(options)(tango);
            verify = romeo.useStateFromStores;
            tango = _closure1_slot6;
            oscar = new Array(1);
            oscar[0] = tango;
            tango = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = _closure2_slot1;
                    zulu = undefined;
                    entity = null;
                    if(!(zulu !== tango)) { _fun00006_ip = 52; continue _fun00005 }
 15:
                    report = _closure1_slot6;
                    tango = report.getMember;
                    zulu = _closure2_slot1;
                    zulu = zulu.id;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = tango.bind(report)(zulu, mike);
 52:
                    return entity;
                }
            };
            verify = verify.bind(romeo)(oscar, tango);
            oscar = _closure1_slot1;
            tango = 6;
            tango = yankee[tango];
            tango = oscar.bind(options)(tango);
            mike = mike.avatarDecoration;
            tango = tango.bind(options)(mike);
            mike = yankee[golf];
            foxtrot = offset.bind(options)(mike);
            romeo = foxtrot.useStateFromStoresObject;
            mike = _closure1_slot7;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                entity = {};
                zulu = _closure1_slot7;
                mike = zulu.getPendingAvatarDecoration;
                mike = mike.bind(zulu)();
                entity['pendingUserAvatarDecoration'] = mike;
                mike = zulu.getErrors;
                mike = mike.bind(zulu)();
                mike = mike.avatarDecoration;
                entity['userErrors'] = mike;
                return entity;
            };
            mike = romeo.bind(foxtrot)(oscar, mike);
            oscar = mike.pendingUserAvatarDecoration;
            mike = mike.userErrors;
            golf = yankee[golf];
            offset = offset.bind(options)(golf);
            golf = offset.useStateFromStoresObject;
            yankee = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = yankee;
            entity = function() {
                entity = {};
                zulu = _closure1_slot4;
                mike = zulu.getPendingAvatarDecoration;
                mike = mike.bind(zulu)();
                entity['pendingGuildAvatarDecoration'] = mike;
                mike = zulu.getErrors;
                mike = mike.bind(zulu)();
                mike = mike.avatarDecoration;
                entity['guildErrors'] = mike;
                return entity;
            };
            entity = golf.bind(offset)(zulu, entity);
            golf = entity.pendingGuildAvatarDecoration;
            zulu = entity.guildErrors;
            entity = {};
            entity['userAvatarDecoration'] = tango;
            tango = null;
            offset = tango == verify;
            if(offset) { _fun00004_ip = 220; continue _fun00003 }
 214:
            options = verify.avatarDecoration;
 220:
            entity['guildAvatarDecoration'] = options;
            if(!(tango != report)) { _fun00004_ip = 234; continue _fun00003 }
 231:
            oscar = golf;
 234:
            entity['pendingAvatarDecoration'] = oscar;
            if(!(tango != report)) { _fun00004_ip = 246; continue _fun00003 }
 243:
            mike = zulu;
 246:
            entity['pendingErrors'] = mike;
            return entity;
        }
    };
    zulu['useGuildMemberAndUserPendingAvatarDecoration'] = tango;
    tango = function(argFoo, argBar) { // Original name: useGlobalOrGuildIdentityProfileEffect
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 5;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot5;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure2_slot1;
                mike = null;
                if(!(mike != entity)) { _fun00008_ip = 67; continue _fun00007 }
 13:
                oscar = _closure1_slot5;
                report = oscar.getGuildMemberProfile;
                entity = _closure2_slot0;
                tango = entity.id;
                entity = _closure2_slot1;
                entity = entity.id;
                tango = report.bind(oscar)(tango, entity);
                report = mike == tango;
                entity = undefined;
                if(report) { _fun00008_ip = 65; continue _fun00007 }
 59:
                entity = tango.profileEffectId;
 65:
                _fun00008_ip = 112; continue _fun00007;
 67:
                report = _closure1_slot5;
                tango = report.getUserProfile;
                zulu = _closure2_slot0;
                zulu = zulu.id;
                zulu = tango.bind(report)(zulu);
                tango = mike == zulu;
                mike = undefined;
                if(tango) { _fun00008_ip = 109; continue _fun00007 }
 103:
                mike = zulu.profileEffectId;
 109:
                entity = mike;
 112:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useGlobalOrGuildIdentityProfileEffect'] = tango;
    tango = function(argFoo) { // Original name: useGlobalOrGuildIdentityPendingProfileEffect
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 5;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresObject;
        golf = _closure1_slot7;
        zulu = new Array(2);
        zulu[0] = golf;
        mike = _closure1_slot4;
        zulu[1] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = _closure2_slot0;
                entity = null;
                if(!(entity != mike)) { _fun00010_ip = 60; continue _fun00009 }
 13:
                entity = {};
                zulu = _closure1_slot4;
                mike = zulu.getPendingProfileEffectId;
                mike = mike.bind(zulu)();
                entity['pendingProfileEffectId'] = mike;
                mike = zulu.getErrors;
                mike = mike.bind(zulu)();
                mike = mike.profileEffect;
                entity['errors'] = mike;
                _fun00010_ip = 108; continue _fun00009;
 60:
                mike = {};
                tango = _closure1_slot7;
                zulu = tango.getPendingProfileEffectId;
                zulu = zulu.bind(tango)();
                mike['pendingProfileEffectId'] = zulu;
                zulu = tango.getErrors;
                zulu = zulu.bind(tango)();
                zulu = zulu.profileEffect;
                mike['errors'] = zulu;
                entity = mike;
 108:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useGlobalOrGuildIdentityPendingProfileEffect'] = tango;
    tango = function(argFoo, argBar) { // Original name: setNewPendingUserBio
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.setPendingBio;
            oscar = argBar;
            mike = undefined;
            if(!(report !== oscar)) { _fun00012_ip = 46; continue _fun00011 }
 43:
            mike = report;
 46:
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['setNewPendingUserBio'] = tango;
    tango = function(argFoo, argBar) { // Original name: setNewPendingUserPronouns
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.setPendingPronouns;
            oscar = argBar;
            mike = undefined;
            if(!(report !== oscar)) { _fun00014_ip = 46; continue _fun00013 }
 43:
            mike = report;
 46:
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['setNewPendingUserPronouns'] = tango;
    tango = function(argFoo, argBar) { // Original name: setNewPendingAvatar
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.setPendingAvatar;
            oscar = argBar;
            mike = undefined;
            if(!(report !== oscar)) { _fun00016_ip = 46; continue _fun00015 }
 43:
            mike = report;
 46:
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['setNewPendingAvatar'] = tango;
    tango = function(argFoo, argBar) { // Original name: setNewPendingAvatarDecoration
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            mike = null;
            entity = argFoo;
            if(!(mike == entity)) { _fun00018_ip = 42; continue _fun00017 }
 9:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.setPendingAvatarDecoration;
            _fun00018_ip = 73; continue _fun00017;
 42:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            entity = tango.bind(entity)(mike);
            zulu = entity.setPendingAvatarDecoration;
 73:
            entity = undefined;
            mike = argBar;
            mike = zulu.bind(entity)(mike);
            mike = !mike;
            return entity;
        }
    };
    zulu['setNewPendingAvatarDecoration'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: setNewPendingProfileEffectId
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zulu = argFoo;
            mike = argBaz;
            entity = argBar;
            if(!(zulu === entity)) { _fun00020_ip = 95; continue _fun00019 }
 13:
            entity = null;
            if(!(entity != mike)) { _fun00020_ip = 57; continue _fun00019 }
 19:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 9;
            entity = report[entity];
            report = undefined;
            tango = tango.bind(report)(entity);
            entity = tango.setPendingProfileEffectId;
            entity = entity.bind(tango)(report);
            _fun00020_ip = 175; continue _fun00019;
 57:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            report = undefined;
            tango = tango.bind(report)(entity);
            entity = tango.setPendingProfileEffectId;
            entity = entity.bind(tango)(report);
            _fun00020_ip = 175; continue _fun00019;
 95:
            entity = null;
            if(!(entity != mike)) { _fun00020_ip = 139; continue _fun00019 }
 101:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.setPendingProfileEffectId;
            entity = entity.bind(mike)(zulu);
            _fun00020_ip = 175; continue _fun00019;
 139:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.setPendingProfileEffectId;
            entity = entity.bind(mike)(zulu);
 175:
            entity = undefined;
            return entity;
        }
    };
    zulu['setNewPendingProfileEffectId'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: getProfilePreviewField
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zulu = argFoo;
            golf = argBar;
            report = argBaz;
            oscar = arguments[3];
            entity = undefined;
            if(!(oscar === entity)) { _fun00022_ip = 20; continue _fun00021 }
 18:
            oscar = false;
 20:
            tango = null;
            if(!(tango == zulu)) { _fun00022_ip = 71; continue _fun00021 }
 26:
            if(!(tango != golf)) { _fun00022_ip = 38; continue _fun00021 }
 30:
            entity = '';
            if(!(entity === golf)) { _fun00022_ip = 53; continue _fun00021 }
 38:
            entity = {};
            entity['value'] = report;
            mike = false;
            entity['isUsingGuildValue'] = mike;
            _fun00022_ip = 69; continue _fun00021;
 53:
            mike = {};
            mike['value'] = golf;
            golf = true;
            mike['isUsingGuildValue'] = golf;
            entity = mike;
 69:
            _fun00022_ip = 119; continue _fun00021;
 71:
            mike = '';
            if(!(mike !== zulu)) { _fun00022_ip = 92; continue _fun00021 }
 79:
            mike = {};
            mike['value'] = zulu;
            mike['isUsingGuildValue'] = oscar;
            _fun00022_ip = 116; continue _fun00021;
 92:
            zulu = {};
            tango = null;
            if(!oscar) { _fun00022_ip = 102; continue _fun00021 }
 99:
            tango = report;
 102:
            zulu['value'] = tango;
            tango = false;
            zulu['isUsingGuildValue'] = tango;
            mike = zulu;
 116:
            entity = mike;
 119:
            return entity;
        }
    };
    zulu['getProfilePreviewField'] = tango;
    tango = function(argFoo) { // Original name: getPreviewProfileEffectId
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            zulu = entity.pendingProfileEffectId;
            report = entity.displayProfile;
            oscar = null;
            mike = oscar == report;
            entity = undefined;
            if(mike) { _fun00024_ip = 47; continue _fun00023 }
 26:
            mike = report._userProfile;
            golf = oscar == mike;
            entity = undefined;
            if(golf) { _fun00024_ip = 47; continue _fun00023 }
 41:
            entity = mike.profileEffectId;
 47:
            golf = oscar == report;
            mike = undefined;
            if(golf) { _fun00024_ip = 77; continue _fun00023 }
 56:
            golf = report._guildMemberProfile;
            options = oscar == golf;
            mike = undefined;
            if(options) { _fun00024_ip = 77; continue _fun00023 }
 71:
            mike = golf.profileEffectId;
 77:
            golf = oscar === zulu;
            if(!golf) { _fun00024_ip = 88; continue _fun00023 }
 84:
            if(!(oscar == mike)) { _fun00024_ip = 121; continue _fun00023 }
 88:
            mike = null;
            if(golf) { _fun00024_ip = 118; continue _fun00023 }
 93:
            if(!(oscar == zulu)) { _fun00024_ip = 115; continue _fun00023 }
 97:
            oscar = oscar == report;
            tango = undefined;
            if(oscar) { _fun00024_ip = 112; continue _fun00023 }
 106:
            tango = report.profileEffectId;
 112:
            zulu = tango;
 115:
            mike = zulu;
 118:
            entity = mike;
 121:
            return entity;
        }
    };
    zulu['getPreviewProfileEffectId'] = tango;
    tango = function(argFoo, argBar) { // Original name: showRemoveAvatar
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            mike = argFoo;
            entity = undefined;
            if(!(entity !== mike)) { _fun00026_ip = 17; continue _fun00025 }
 9:
            entity = null;
            entity = entity != mike;
            _fun00026_ip = 26; continue _fun00025;
 17:
            zulu = null;
            mike = argBar;
            entity = zulu != mike;
 26:
            return entity;
        }
    };
    zulu['showRemoveAvatar'] = tango;
    mike = function(argFoo, argBar) { // Original name: showRemoveBanner
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            mike = argFoo;
            entity = undefined;
            if(!(entity !== mike)) { _fun00028_ip = 17; continue _fun00027 }
 9:
            entity = null;
            entity = entity != mike;
            _fun00028_ip = 26; continue _fun00027;
 17:
            zulu = null;
            mike = argBar;
            entity = zulu != mike;
 26:
            return entity;
        }
    };
    zulu['showRemoveBanner'] = mike;
    return entity;
})();