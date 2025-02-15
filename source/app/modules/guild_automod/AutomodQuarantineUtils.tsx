// app/modules/guild_automod/AutomodQuarantineUtils.tsx
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
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Permissions;
    var _closure1_slot9 = golf;
    tango = tango.UserSettingsSections;
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildMemberFlags;
    var _closure1_slot11 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ProfileCustomizationSubsection;
    var _closure1_slot12 = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_automod/AutomodQuarantineUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useCurrentUserHasAutomodQuarantinedProfile
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 9;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        golf = _closure1_slot4;
        zulu = new Array(2);
        zulu[0] = golf;
        mike = _closure1_slot5;
        zulu[1] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot0;
                mike = null;
                if(!(mike != zulu)) { _fun00002_ip = 85; continue _fun00001 }
 13:
                zulu = _closure1_slot4;
                mike = zulu.getId;
                oscar = mike.bind(zulu)();
                report = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 10;
                zulu = zulu[mike];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                mike = zulu.hasAutomodQuarantinedProfile;
                report = _closure1_slot5;
                tango = report.getMember;
                entity = _closure2_slot0;
                entity = tango.bind(report)(entity, oscar);
                entity = mike.bind(zulu)(entity);
                return entity;
 85:
                entity = false;
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useCurrentUserHasAutomodQuarantinedProfile'] = tango;
    tango = function(argFoo) { // Original name: useGuildAutomodProfileQuarantineErrors
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 9;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresObject;
        golf = _closure1_slot4;
        zulu = new Array(4);
        zulu[0] = golf;
        golf = _closure1_slot5;
        zulu[1] = golf;
        golf = _closure1_slot8;
        zulu[2] = golf;
        mike = _closure1_slot6;
        zulu[3] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = {};
                oscar = undefined;
                entity['nick'] = oscar;
                entity['bio'] = oscar;
                tango = _closure1_slot8;
                zulu = tango.getGuildId;
                tango = zulu.bind(tango)();
                report = _closure2_slot0;
                offset = null;
                if(!(offset != report)) { _fun00004_ip = 48; continue _fun00003 }
 44:
                tango = _closure2_slot0;
 48:
                golf = _closure1_slot6;
                report = golf.getGuild;
                yankee = report.bind(golf)(tango);
                options = tango;
                if(!(offset != yankee)) { _fun00004_ip = 462; continue _fun00003 }
 72:
                if(!(offset != options)) { _fun00004_ip = 462; continue _fun00003 }
 79:
                report = _closure1_slot4;
                tango = report.getId;
                golf = tango.bind(report)();
                report = _closure1_slot5;
                tango = report.getMember;
                options = tango.bind(report)(options, golf);
                report = _closure1_slot0;
                golf = _closure1_slot2;
                tango = 10;
                tango = golf[tango];
                golf = report.bind(oscar)(tango);
                report = golf.getAutomodQuarantinedProfileFlags;
                verify = offset == options;
                tango = undefined;
                if(verify) { _fun00004_ip = 149; continue _fun00003 }
 144:
                tango = options.flags;
 149:
                report = report.bind(golf)(tango);
                golf = report.size;
                tango = 0;
                if(!(tango !== golf)) { _fun00004_ip = 460; continue _fun00003 }
 168:
                golf = report.has;
                tango = _closure1_slot11;
                tango = tango.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
                tango = golf.bind(report)(tango);
                if(!tango) { _fun00004_ip = 366; continue _fun00003 }
 194:
                zulu = _closure2_slot0;
                if(!(offset != zulu)) { _fun00004_ip = 267; continue _fun00003 }
 202:
                options = _closure1_slot0;
                verify = _closure1_slot2;
                zulu = 11;
                tango = verify[zulu];
                tango = options.bind(oscar)(tango);
                golf = tango.intl;
                tango = golf.string;
                zulu = verify[zulu];
                zulu = options.bind(oscar)(zulu);
                zulu = zulu.t;
                zulu = zulu.EPZCrK;
                tango = tango.bind(golf)(zulu);
                zulu = new Array(1);
                zulu[0] = tango;
                _fun00004_ip = 360; continue _fun00003;
 267:
                golf = _closure1_slot0;
                romeo = _closure1_slot2;
                tango = 11;
                options = romeo[tango];
                options = golf.bind(oscar)(options);
                verify = options.intl;
                options = verify.formatToPlainString;
                tango = romeo[tango];
                tango = golf.bind(oscar)(tango);
                tango = tango.t;
                golf = tango.WBUh3N;
                tango = {};
                yankee = yankee.name;
                romeo = offset != yankee;
                offset = '';
                if(!romeo) { _fun00004_ip = 338; continue _fun00003 }
 335:
                offset = yankee;
 338:
                tango['guildName'] = offset;
                golf = options.bind(verify)(golf, tango);
                tango = new Array(1);
                tango[0] = golf;
                zulu = tango;
 360:
                entity['nick'] = zulu;
 366:
                tango = report.has;
                zulu = _closure1_slot11;
                zulu = zulu.AUTOMOD_QUARANTINED_BIO;
                zulu = tango.bind(report)(zulu);
                if(!zulu) { _fun00004_ip = 458; continue _fun00003 }
 389:
                report = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 11;
                zulu = golf[mike];
                zulu = report.bind(oscar)(zulu);
                tango = zulu.intl;
                zulu = tango.string;
                mike = golf[mike];
                mike = report.bind(oscar)(mike);
                mike = mike.t;
                mike = mike.dZh1v7;
                zulu = zulu.bind(tango)(mike);
                mike = new Array(1);
                mike[0] = zulu;
                entity['bio'] = mike;
 458:
                return entity;
 460:
                return entity;
 462:
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useGuildAutomodProfileQuarantineErrors'] = tango;
    mike = function(argFoo) { // Original name: useOpenFixQuarantinedProfileModal
        mike = argFoo;
        golf = mike.guildId;
        var _closure2_slot0 = golf;
        yankee = mike.scrollPosition;
        offset = mike.analyticsLocation;
        verify = mike.analyticsLocations;
        var _closure2_slot1 = verify;
        options = mike.openWithoutBackstack;
        tango = _closure1_slot1;
        romeo = _closure1_slot2;
        mike = 12;
        mike = romeo[mike];
        report = undefined;
        mike = tango.bind(report)(mike);
        mike = mike.bind(report)();
        oscar = mike.analyticsLocations;
        var _closure2_slot2 = oscar;
        tango = _closure1_slot0;
        mike = 9;
        foxtrot = romeo[mike];
        sizing = tango.bind(report)(foxtrot);
        kilo = sizing.useStateFromStores;
        foxtrot = _closure1_slot6;
        backup = new Array(1);
        backup[0] = foxtrot;
        foxtrot = new Array(1);
        foxtrot[0] = golf;
        golf = function() {
            zulu = _closure1_slot6;
            mike = zulu.getGuild;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        golf = kilo.bind(sizing)(backup, golf, foxtrot);
        var _closure2_slot3 = golf;
        mike = romeo[mike];
        foxtrot = tango.bind(report)(mike);
        romeo = foxtrot.useStateFromStores;
        mike = _closure1_slot7;
        report = new Array(1);
        report[0] = mike;
        tango = new Array(1);
        tango[0] = golf;
        mike = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = _closure2_slot3;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun00006_ip = 49; continue _fun00005 }
 16:
                report = _closure1_slot7;
                tango = report.can;
                zulu = _closure1_slot9;
                zulu = zulu.CHANGE_NICKNAME;
                mike = _closure2_slot3;
                entity = tango.bind(report)(zulu, mike);
 49:
                return entity;
            }
        };
        mike = romeo.bind(foxtrot)(report, mike, tango);
        var _closure2_slot4 = mike;
        report = _closure1_slot3;
        tango = report.useCallback;
        zulu = new Array(7);
        zulu[0] = mike;
        zulu[1] = yankee;
        zulu[2] = offset;
        zulu[3] = verify;
        zulu[4] = options;
        zulu[5] = golf;
        zulu[6] = oscar;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure2_slot3;
                offset = null;
                if(!(offset != entity)) { _fun00008_ip = 162; continue _fun00007 }
 16:
                mike = _closure1_slot10;
                report = mike.PROFILE_CUSTOMIZATION;
                mike = _closure1_slot12;
                mike = mike.GUILD;
                zulu = _closure2_slot4;
                if(zulu) { _fun00008_ip = 58; continue _fun00007 }
 46:
                zulu = _closure1_slot12;
                tango = zulu.USER_PROFILE;
                _fun00008_ip = 117; continue _fun00007;
 58:
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 13;
                oscar = oscar[zulu];
                zulu = undefined;
                options = golf.bind(zulu)(oscar);
                golf = options.initGuildIdentitySettings;
                oscar = _closure2_slot3;
                zulu = _closure2_slot1;
                if(!(offset == zulu)) { _fun00008_ip = 104; continue _fun00007 }
 98:
                zulu = _closure2_slot2;
                _fun00008_ip = 108; continue _fun00007;
 104:
                zulu = _closure2_slot1;
 108:
                zulu = golf.bind(options)(oscar, zulu);
                tango = mike;
 117:
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 14;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.openUserSettings;
                entity = {};
                entity['screen'] = report;
                entity['subsection'] = tango;
                entity = mike.bind(zulu)(entity);
 162:
                entity = undefined;
                return entity;
            }
        };
        zulu = tango.bind(report)(entity, zulu);
        entity = new Array(2);
        entity[0] = zulu;
        entity[1] = mike;
        return entity;
    };
    zulu['useOpenFixQuarantinedProfileModal'] = mike;
    return entity;
})();