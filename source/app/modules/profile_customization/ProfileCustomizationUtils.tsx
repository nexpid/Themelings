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
            _fun63306: for(var _fun63306_ip = 0; ; ) switch(_fun63306_ip) {
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
                    if(backup) { _fun63306_ip = 74; continue _fun63306 }
 68:
                    yankee = romeo.avatar;
 74:
                    if(tango == yankee) { _fun63306_ip = 35; continue _fun63306 }
 78:
                    romeo = zulu[yankee];
                    if(!(tango == romeo)) { _fun63306_ip = 94; continue _fun63306 }
 86:
                    romeo = new Array(0);
                    zulu[yankee] = romeo;
 94:
                    romeo = zulu[yankee];
                    yankee = romeo.push;
                    yankee = yankee.bind(romeo)(foxtrot);
                    _fun63306_ip = 35; continue _fun63306;
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
        _fun63308: for(var _fun63308_ip = 0; ; ) switch(_fun63308_ip) {
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
                _fun63309: for(var _fun63309_ip = 0; ; ) switch(_fun63309_ip) {
 0:
                    tango = _closure2_slot1;
                    zulu = undefined;
                    entity = null;
                    if(!(zulu !== tango)) { _fun63309_ip = 52; continue _fun63309 }
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
            if(offset) { _fun63308_ip = 220; continue _fun63308 }
 214:
            options = verify.avatarDecoration;
 220:
            entity['guildAvatarDecoration'] = options;
            if(!(tango != report)) { _fun63308_ip = 234; continue _fun63308 }
 231:
            oscar = golf;
 234:
            entity['pendingAvatarDecoration'] = oscar;
            if(!(tango != report)) { _fun63308_ip = 246; continue _fun63308 }
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
            _fun63313: for(var _fun63313_ip = 0; ; ) switch(_fun63313_ip) {
 0:
                entity = _closure2_slot1;
                mike = null;
                if(!(mike != entity)) { _fun63313_ip = 67; continue _fun63313 }
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
                if(report) { _fun63313_ip = 65; continue _fun63313 }
 59:
                entity = tango.profileEffectId;
 65:
                _fun63313_ip = 112; continue _fun63313;
 67:
                report = _closure1_slot5;
                tango = report.getUserProfile;
                zulu = _closure2_slot0;
                zulu = zulu.id;
                zulu = tango.bind(report)(zulu);
                tango = mike == zulu;
                mike = undefined;
                if(tango) { _fun63313_ip = 109; continue _fun63313 }
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
            _fun63315: for(var _fun63315_ip = 0; ; ) switch(_fun63315_ip) {
 0:
                mike = _closure2_slot0;
                entity = null;
                if(!(entity != mike)) { _fun63315_ip = 60; continue _fun63315 }
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
                _fun63315_ip = 108; continue _fun63315;
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
        _fun63316: for(var _fun63316_ip = 0; ; ) switch(_fun63316_ip) {
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
            if(!(report !== oscar)) { _fun63316_ip = 46; continue _fun63316 }
 43:
            mike = report;
 46:
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['setNewPendingUserBio'] = tango;
    tango = function(argFoo, argBar) { // Original name: setNewPendingUserPronouns
        _fun63317: for(var _fun63317_ip = 0; ; ) switch(_fun63317_ip) {
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
            if(!(report !== oscar)) { _fun63317_ip = 46; continue _fun63317 }
 43:
            mike = report;
 46:
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['setNewPendingUserPronouns'] = tango;
    tango = function(argFoo, argBar) { // Original name: setNewPendingAvatar
        _fun63318: for(var _fun63318_ip = 0; ; ) switch(_fun63318_ip) {
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
            if(!(report !== oscar)) { _fun63318_ip = 46; continue _fun63318 }
 43:
            mike = report;
 46:
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['setNewPendingAvatar'] = tango;
    tango = function(argFoo, argBar) { // Original name: setNewPendingAvatarDecoration
        _fun63319: for(var _fun63319_ip = 0; ; ) switch(_fun63319_ip) {
 0:
            mike = null;
            entity = argFoo;
            if(!(mike == entity)) { _fun63319_ip = 42; continue _fun63319 }
 9:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.setPendingAvatarDecoration;
            _fun63319_ip = 73; continue _fun63319;
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
        _fun63320: for(var _fun63320_ip = 0; ; ) switch(_fun63320_ip) {
 0:
            zulu = argFoo;
            mike = argBaz;
            entity = argBar;
            if(!(zulu === entity)) { _fun63320_ip = 95; continue _fun63320 }
 13:
            entity = null;
            if(!(entity != mike)) { _fun63320_ip = 57; continue _fun63320 }
 19:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 9;
            entity = report[entity];
            report = undefined;
            tango = tango.bind(report)(entity);
            entity = tango.setPendingProfileEffectId;
            entity = entity.bind(tango)(report);
            _fun63320_ip = 175; continue _fun63320;
 57:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            report = undefined;
            tango = tango.bind(report)(entity);
            entity = tango.setPendingProfileEffectId;
            entity = entity.bind(tango)(report);
            _fun63320_ip = 175; continue _fun63320;
 95:
            entity = null;
            if(!(entity != mike)) { _fun63320_ip = 139; continue _fun63320 }
 101:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 9;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.setPendingProfileEffectId;
            entity = entity.bind(mike)(zulu);
            _fun63320_ip = 175; continue _fun63320;
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
        _fun63321: for(var _fun63321_ip = 0; ; ) switch(_fun63321_ip) {
 0:
            zulu = argFoo;
            golf = argBar;
            report = argBaz;
            oscar = arguments[3];
            entity = undefined;
            if(!(oscar === entity)) { _fun63321_ip = 20; continue _fun63321 }
 18:
            oscar = false;
 20:
            tango = null;
            if(!(tango == zulu)) { _fun63321_ip = 71; continue _fun63321 }
 26:
            if(!(tango != golf)) { _fun63321_ip = 38; continue _fun63321 }
 30:
            entity = '';
            if(!(entity === golf)) { _fun63321_ip = 53; continue _fun63321 }
 38:
            entity = {};
            entity['value'] = report;
            mike = false;
            entity['isUsingGuildValue'] = mike;
            _fun63321_ip = 69; continue _fun63321;
 53:
            mike = {};
            mike['value'] = golf;
            golf = true;
            mike['isUsingGuildValue'] = golf;
            entity = mike;
 69:
            _fun63321_ip = 119; continue _fun63321;
 71:
            mike = '';
            if(!(mike !== zulu)) { _fun63321_ip = 92; continue _fun63321 }
 79:
            mike = {};
            mike['value'] = zulu;
            mike['isUsingGuildValue'] = oscar;
            _fun63321_ip = 116; continue _fun63321;
 92:
            zulu = {};
            tango = null;
            if(!oscar) { _fun63321_ip = 102; continue _fun63321 }
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
        _fun63322: for(var _fun63322_ip = 0; ; ) switch(_fun63322_ip) {
 0:
            entity = argFoo;
            zulu = entity.pendingProfileEffectId;
            report = entity.displayProfile;
            oscar = null;
            mike = oscar == report;
            entity = undefined;
            if(mike) { _fun63322_ip = 47; continue _fun63322 }
 26:
            mike = report._userProfile;
            golf = oscar == mike;
            entity = undefined;
            if(golf) { _fun63322_ip = 47; continue _fun63322 }
 41:
            entity = mike.profileEffectId;
 47:
            golf = oscar == report;
            mike = undefined;
            if(golf) { _fun63322_ip = 77; continue _fun63322 }
 56:
            golf = report._guildMemberProfile;
            options = oscar == golf;
            mike = undefined;
            if(options) { _fun63322_ip = 77; continue _fun63322 }
 71:
            mike = golf.profileEffectId;
 77:
            golf = oscar === zulu;
            if(!golf) { _fun63322_ip = 88; continue _fun63322 }
 84:
            if(!(oscar == mike)) { _fun63322_ip = 121; continue _fun63322 }
 88:
            mike = null;
            if(golf) { _fun63322_ip = 118; continue _fun63322 }
 93:
            if(!(oscar == zulu)) { _fun63322_ip = 115; continue _fun63322 }
 97:
            oscar = oscar == report;
            tango = undefined;
            if(oscar) { _fun63322_ip = 112; continue _fun63322 }
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
        _fun63323: for(var _fun63323_ip = 0; ; ) switch(_fun63323_ip) {
 0:
            mike = argFoo;
            entity = undefined;
            if(!(entity !== mike)) { _fun63323_ip = 17; continue _fun63323 }
 9:
            entity = null;
            entity = entity != mike;
            _fun63323_ip = 26; continue _fun63323;
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
        _fun63324: for(var _fun63324_ip = 0; ; ) switch(_fun63324_ip) {
 0:
            mike = argFoo;
            entity = undefined;
            if(!(entity !== mike)) { _fun63324_ip = 17; continue _fun63324 }
 9:
            entity = null;
            entity = entity != mike;
            _fun63324_ip = 26; continue _fun63324;
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