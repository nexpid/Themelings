// app/modules/profile_customization/ProfileCustomizationUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/profile_customization/ProfileCustomizationUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useAvatarsWithGuilds
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure1_slot6;
                entity = michal.getMutableAllGuildsAndMembers;
                offset = entity.bind(michal)();
                zuuluu = {};
                option = offset;
                tangon = null;
                for(report in option)
 35:
                {
 44:
                    foxtra = report;
                    romeon = offset[foxtra];
                    yankee = _closure2_slot0;
                    romeon = romeon[yankee];
                    backup = tangon == romeon;
                    yankee = undefined;
                    if(backup) { _fun00002_ip = 74; continue _fun00001 }
 68:
                    yankee = romeon.avatar;
 74:
                    if(tangon == yankee) { _fun00002_ip = 35; continue _fun00001 }
 78:
                    romeon = zuuluu[yankee];
                    if(!(tangon == romeon)) { _fun00002_ip = 94; continue _fun00001 }
 86:
                    romeon = new Array(0);
                    zuuluu[yankee] = romeon;
 94:
                    romeon = zuuluu[yankee];
                    yankee = romeon.push;
                    yankee = yankee.bind(romeon)(foxtra);
                    _fun00002_ip = 35; continue _fun00001;
                }
 110:
                entity = global;
                michal = entity.Object;
                entity = michal.entries;
                zuuluu = entity.bind(michal)(zuuluu);
                michal = zuuluu.map;
                entity = function(argFoo) {
                    michal = argFoo;
                    entity = 1;
                    michal = michal[entity];
                    entity = 0;
                    entity = michal[entity];
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useAvatarsWithGuilds'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useGuildMemberAndUserPendingAvatarDecoration
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = argBar;
            var _closure2_slot0 = michal;
            var _closure2_slot1 = report;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 5;
            tangon = yankee[golfie];
            option = undefined;
            romeon = offset.bind(option)(tangon);
            verify = romeon.useStateFromStores;
            tangon = _closure1_slot6;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure2_slot1;
                    zuuluu = undefined;
                    entity = null;
                    if(!(zuuluu !== tangon)) { _fun00006_ip = 52; continue _fun00005 }
 15:
                    report = _closure1_slot6;
                    tangon = report.getMember;
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.id;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = tangon.bind(report)(zuuluu, michal);
 52:
                    return entity;
                }
            };
            verify = verify.bind(romeon)(oscard, tangon);
            oscard = _closure1_slot1;
            tangon = 6;
            tangon = yankee[tangon];
            tangon = oscard.bind(option)(tangon);
            michal = michal.avatarDecoration;
            tangon = tangon.bind(option)(michal);
            michal = yankee[golfie];
            foxtra = offset.bind(option)(michal);
            romeon = foxtra.useStateFromStoresObject;
            michal = _closure1_slot7;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                entity = {};
                zuuluu = _closure1_slot7;
                michal = zuuluu.getPendingAvatarDecoration;
                michal = michal.bind(zuuluu)();
                entity['pendingUserAvatarDecoration'] = michal;
                michal = zuuluu.getErrors;
                michal = michal.bind(zuuluu)();
                michal = michal.avatarDecoration;
                entity['userErrors'] = michal;
                return entity;
            };
            michal = romeon.bind(foxtra)(oscard, michal);
            oscard = michal.pendingUserAvatarDecoration;
            michal = michal.userErrors;
            golfie = yankee[golfie];
            offset = offset.bind(option)(golfie);
            golfie = offset.useStateFromStoresObject;
            yankee = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = yankee;
            entity = function() {
                entity = {};
                zuuluu = _closure1_slot4;
                michal = zuuluu.getPendingAvatarDecoration;
                michal = michal.bind(zuuluu)();
                entity['pendingGuildAvatarDecoration'] = michal;
                michal = zuuluu.getErrors;
                michal = michal.bind(zuuluu)();
                michal = michal.avatarDecoration;
                entity['guildErrors'] = michal;
                return entity;
            };
            entity = golfie.bind(offset)(zuuluu, entity);
            golfie = entity.pendingGuildAvatarDecoration;
            zuuluu = entity.guildErrors;
            entity = {};
            entity['userAvatarDecoration'] = tangon;
            tangon = null;
            offset = tangon == verify;
            if(offset) { _fun00004_ip = 218; continue _fun00003 }
 212:
            option = verify.avatarDecoration;
 218:
            entity['guildAvatarDecoration'] = option;
            if(!(tangon != report)) { _fun00004_ip = 232; continue _fun00003 }
 229:
            oscard = golfie;
 232:
            entity['pendingAvatarDecoration'] = oscard;
            if(!(tangon != report)) { _fun00004_ip = 244; continue _fun00003 }
 241:
            michal = zuuluu;
 244:
            entity['pendingErrors'] = michal;
            return entity;
        }
    };
    zuuluu['useGuildMemberAndUserPendingAvatarDecoration'] = tangon;
    tangon = function() { // Original name: useGlobalPendingNameplate
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 5;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStoresObject;
        entity = _closure1_slot7;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            entity = {};
            zuuluu = _closure1_slot7;
            michal = zuuluu.getPendingNameplate;
            michal = michal.bind(zuuluu)();
            entity['pendingUserNameplate'] = michal;
            michal = zuuluu.getErrors;
            michal = michal.bind(zuuluu)();
            michal = michal.nameplate;
            entity['userErrors'] = michal;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal, entity);
        entity = {};
        zuuluu = michal.pendingUserNameplate;
        entity['pendingNameplate'] = zuuluu;
        michal = michal.userErrors;
        entity['pendingErrors'] = michal;
        return entity;
    };
    zuuluu['useGlobalPendingNameplate'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useGlobalOrGuildIdentityProfileEffect
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 5;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot5;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure2_slot1;
                michal = null;
                if(!(michal != entity)) { _fun00008_ip = 67; continue _fun00007 }
 13:
                oscard = _closure1_slot5;
                report = oscard.getGuildMemberProfile;
                entity = _closure2_slot0;
                tangon = entity.id;
                entity = _closure2_slot1;
                entity = entity.id;
                tangon = report.bind(oscard)(tangon, entity);
                report = michal == tangon;
                entity = undefined;
                if(report) { _fun00008_ip = 65; continue _fun00007 }
 59:
                entity = tangon.profileEffectId;
 65:
                _fun00008_ip = 112; continue _fun00007;
 67:
                report = _closure1_slot5;
                tangon = report.getUserProfile;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.id;
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = michal == zuuluu;
                michal = undefined;
                if(tangon) { _fun00008_ip = 109; continue _fun00007 }
 103:
                michal = zuuluu.profileEffectId;
 109:
                entity = michal;
 112:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useGlobalOrGuildIdentityProfileEffect'] = tangon;
    tangon = function(argFoo) { // Original name: useGlobalOrGuildIdentityPendingProfileEffect
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 5;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        golfie = _closure1_slot7;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        michal = _closure1_slot4;
        zuuluu[1] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                if(!(entity != michal)) { _fun00010_ip = 60; continue _fun00009 }
 13:
                entity = {};
                zuuluu = _closure1_slot4;
                michal = zuuluu.getPendingProfileEffectId;
                michal = michal.bind(zuuluu)();
                entity['pendingProfileEffectId'] = michal;
                michal = zuuluu.getErrors;
                michal = michal.bind(zuuluu)();
                michal = michal.profileEffect;
                entity['errors'] = michal;
                _fun00010_ip = 108; continue _fun00009;
 60:
                michal = {};
                tangon = _closure1_slot7;
                zuuluu = tangon.getPendingProfileEffectId;
                zuuluu = zuuluu.bind(tangon)();
                michal['pendingProfileEffectId'] = zuuluu;
                zuuluu = tangon.getErrors;
                zuuluu = zuuluu.bind(tangon)();
                zuuluu = zuuluu.profileEffect;
                michal['errors'] = zuuluu;
                entity = michal;
 108:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useGlobalOrGuildIdentityPendingProfileEffect'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: setNewPendingUserBio
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.setPendingBio;
            oscard = argBar;
            michal = undefined;
            if(!(report !== oscard)) { _fun00012_ip = 46; continue _fun00011 }
 43:
            michal = report;
 46:
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['setNewPendingUserBio'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: setNewPendingUserPronouns
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.setPendingPronouns;
            oscard = argBar;
            michal = undefined;
            if(!(report !== oscard)) { _fun00014_ip = 46; continue _fun00013 }
 43:
            michal = report;
 46:
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['setNewPendingUserPronouns'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: setNewPendingAvatar
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.setPendingAvatar;
            michal = null;
            michal = michal == report;
            golfie = undefined;
            if(michal) { _fun00016_ip = 51; continue _fun00015 }
 45:
            golfie = report.imageUri;
 51:
            oscard = argBar;
            michal = undefined;
            if(!(golfie !== oscard)) { _fun00016_ip = 63; continue _fun00015 }
 60:
            michal = report;
 63:
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['setNewPendingAvatar'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: setNewPendingAvatarDecoration
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = null;
            entity = argFoo;
            if(!(michal == entity)) { _fun00018_ip = 42; continue _fun00017 }
 9:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.setPendingAvatarDecoration;
            _fun00018_ip = 73; continue _fun00017;
 42:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            entity = tangon.bind(entity)(michal);
            zuuluu = entity.setPendingAvatarDecoration;
 73:
            entity = undefined;
            michal = argBar;
            michal = zuuluu.bind(entity)(michal);
            michal = !michal;
            return entity;
        }
    };
    zuuluu['setNewPendingAvatarDecoration'] = tangon;
    tangon = function(argFoo) { // Original name: setNewPendingNameplate
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        zuuluu = michal.setPendingNameplate;
        michal = argFoo;
        michal = zuuluu.bind(entity)(michal);
        michal = !michal;
        return entity;
    };
    zuuluu['setNewPendingNameplate'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: setNewPendingProfileEffectId
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = argFoo;
            michal = argBaz;
            entity = argBar;
            if(!(zuuluu === entity)) { _fun00020_ip = 95; continue _fun00019 }
 13:
            entity = null;
            if(!(entity != michal)) { _fun00020_ip = 57; continue _fun00019 }
 19:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 9;
            entity = report[entity];
            report = undefined;
            tangon = tangon.bind(report)(entity);
            entity = tangon.setPendingProfileEffectId;
            entity = entity.bind(tangon)(report);
            _fun00020_ip = 175; continue _fun00019;
 57:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 8;
            entity = report[entity];
            report = undefined;
            tangon = tangon.bind(report)(entity);
            entity = tangon.setPendingProfileEffectId;
            entity = entity.bind(tangon)(report);
            _fun00020_ip = 175; continue _fun00019;
 95:
            entity = null;
            if(!(entity != michal)) { _fun00020_ip = 139; continue _fun00019 }
 101:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.setPendingProfileEffectId;
            entity = entity.bind(michal)(zuuluu);
            _fun00020_ip = 175; continue _fun00019;
 139:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.setPendingProfileEffectId;
            entity = entity.bind(michal)(zuuluu);
 175:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['setNewPendingProfileEffectId'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getProfilePreviewField
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zuuluu = argFoo;
            golfie = argBar;
            report = argBaz;
            oscard = arguments[3];
            entity = undefined;
            if(!(oscard === entity)) { _fun00022_ip = 20; continue _fun00021 }
 18:
            oscard = false;
 20:
            tangon = null;
            if(!(tangon == zuuluu)) { _fun00022_ip = 71; continue _fun00021 }
 26:
            if(!(tangon != golfie)) { _fun00022_ip = 38; continue _fun00021 }
 30:
            entity = '';
            if(!(entity === golfie)) { _fun00022_ip = 53; continue _fun00021 }
 38:
            entity = {};
            entity['value'] = report;
            michal = false;
            entity['isUsingGuildValue'] = michal;
            _fun00022_ip = 69; continue _fun00021;
 53:
            michal = {};
            michal['value'] = golfie;
            golfie = true;
            michal['isUsingGuildValue'] = golfie;
            entity = michal;
 69:
            _fun00022_ip = 119; continue _fun00021;
 71:
            michal = '';
            if(!(michal !== zuuluu)) { _fun00022_ip = 92; continue _fun00021 }
 79:
            michal = {};
            michal['value'] = zuuluu;
            michal['isUsingGuildValue'] = oscard;
            _fun00022_ip = 116; continue _fun00021;
 92:
            zuuluu = {};
            tangon = null;
            if(!oscard) { _fun00022_ip = 102; continue _fun00021 }
 99:
            tangon = report;
 102:
            zuuluu['value'] = tangon;
            tangon = false;
            zuuluu['isUsingGuildValue'] = tangon;
            michal = zuuluu;
 116:
            entity = michal;
 119:
            return entity;
        }
    };
    zuuluu['getProfilePreviewField'] = tangon;
    tangon = function(argFoo) { // Original name: getPreviewProfileEffectId
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.pendingProfileEffectId;
            report = entity.displayProfile;
            oscard = null;
            michal = oscard == report;
            entity = undefined;
            if(michal) { _fun00024_ip = 47; continue _fun00023 }
 26:
            michal = report._userProfile;
            golfie = oscard == michal;
            entity = undefined;
            if(golfie) { _fun00024_ip = 47; continue _fun00023 }
 41:
            entity = michal.profileEffectId;
 47:
            golfie = oscard == report;
            michal = undefined;
            if(golfie) { _fun00024_ip = 77; continue _fun00023 }
 56:
            golfie = report._guildMemberProfile;
            option = oscard == golfie;
            michal = undefined;
            if(option) { _fun00024_ip = 77; continue _fun00023 }
 71:
            michal = golfie.profileEffectId;
 77:
            golfie = oscard === zuuluu;
            if(!golfie) { _fun00024_ip = 88; continue _fun00023 }
 84:
            if(!(oscard == michal)) { _fun00024_ip = 121; continue _fun00023 }
 88:
            michal = null;
            if(golfie) { _fun00024_ip = 118; continue _fun00023 }
 93:
            if(!(oscard == zuuluu)) { _fun00024_ip = 115; continue _fun00023 }
 97:
            oscard = oscard == report;
            tangon = undefined;
            if(oscard) { _fun00024_ip = 112; continue _fun00023 }
 106:
            tangon = report.profileEffectId;
 112:
            zuuluu = tangon;
 115:
            michal = zuuluu;
 118:
            entity = michal;
 121:
            return entity;
        }
    };
    zuuluu['getPreviewProfileEffectId'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: showRemoveAvatar
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            michal = argFoo;
            entity = undefined;
            if(!(entity !== michal)) { _fun00026_ip = 17; continue _fun00025 }
 9:
            entity = null;
            entity = entity != michal;
            _fun00026_ip = 26; continue _fun00025;
 17:
            zuuluu = null;
            michal = argBar;
            entity = zuuluu != michal;
 26:
            return entity;
        }
    };
    zuuluu['showRemoveAvatar'] = tangon;
    michal = function(argFoo, argBar) { // Original name: showRemoveBanner
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            michal = argFoo;
            entity = undefined;
            if(!(entity !== michal)) { _fun00028_ip = 17; continue _fun00027 }
 9:
            entity = null;
            entity = entity != michal;
            _fun00028_ip = 26; continue _fun00027;
 17:
            zuuluu = null;
            michal = argBar;
            entity = zuuluu != michal;
 26:
            return entity;
        }
    };
    zuuluu['showRemoveBanner'] = michal;
    return entity;
})();