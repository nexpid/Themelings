// app/modules/guild_onboarding_home/OnboardingHomeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: canSeeOnboardingHomeInPreview
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            oscar = report.id;
            zulu = _closure1_slot6;
            entity = zulu.getNewMemberActions;
            entity = entity.bind(zulu)(oscar);
            zulu = null;
            if(!(zulu == entity)) { _fun00002_ip = 36; continue _fun00001 }
 32:
            entity = new Array(0);
 36:
            zulu = entity.length;
            entity = 0;
            entity = zulu > entity;
            tango = _closure1_slot6;
            zulu = tango.getEnabled;
            zulu = zulu.bind(tango)(oscar);
            if(!entity) { _fun00002_ip = 86; continue _fun00001 }
 65:
            oscar = report.hasFeature;
            tango = _closure1_slot8;
            tango = tango.COMMUNITY;
            entity = oscar.bind(report)(tango);
 86:
            if(!entity) { _fun00002_ip = 119; continue _fun00001 }
 89:
            tango = report.hasFeature;
            mike = _closure1_slot8;
            mike = mike.GUILD_ONBOARDING;
            mike = tango.bind(report)(mike);
            if(!mike) { _fun00002_ip = 116; continue _fun00001 }
 113:
            mike = !zulu;
 116:
            entity = !mike;
 119:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: hasResourceChannels
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argBar;
            mike = zulu.getMutableGuildChannelsForGuild;
            entity = argFoo;
            options = mike.bind(zulu)(entity);
            oscar = options;
            for(zulu in oscar)
 31:
            {
 40:
                entity = zulu;
                offset = options[entity];
                verify = offset.hasFlag;
                entity = _closure1_slot10;
                entity = entity.IS_GUILD_RESOURCE_CHANNEL;
                entity = verify.bind(offset)(entity);
                if(!entity) { _fun00004_ip = 31; continue _fun00003 }
 71:
                entity = true;
                return entity;
            }
 75:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
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
    tango = report.bind(entity)(tango);
    golf = tango.FAVORITES;
    var _closure1_slot7 = golf;
    golf = tango.GuildFeatures;
    var _closure1_slot8 = golf;
    tango = tango.ME;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelFlags;
    var _closure1_slot10 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding_home/OnboardingHomeUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useCanSeeOnboardingHome
        golf = argFoo;
        var _closure2_slot0 = golf;
        tango = _closure1_slot1;
        options = _closure1_slot2;
        zulu = 6;
        zulu = options[zulu];
        report = undefined;
        zulu = tango.bind(report)(zulu);
        oscar = zulu.bind(report)(golf);
        var _closure2_slot1 = oscar;
        tango = _closure1_slot0;
        zulu = 7;
        zulu = options[zulu];
        report = tango.bind(report)(zulu);
        tango = report.useStateFromStores;
        options = _closure1_slot4;
        zulu = new Array(3);
        zulu[0] = options;
        options = _closure1_slot5;
        zulu[1] = options;
        mike = _closure1_slot3;
        zulu[2] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = _closure2_slot0;
                entity = _closure1_slot9;
                if(!(mike !== entity)) { _fun00006_ip = 238; continue _fun00005 }
 21:
                mike = _closure2_slot0;
                entity = _closure1_slot7;
                if(!(mike !== entity)) { _fun00006_ip = 238; continue _fun00005 }
 36:
                tango = _closure1_slot5;
                mike = tango.getGuild;
                entity = _closure2_slot0;
                report = mike.bind(tango)(entity);
                entity = null;
                mike = entity == report;
                if(mike) { _fun00006_ip = 87; continue _fun00005 }
 63:
                tango = report.hasFeature;
                entity = _closure1_slot8;
                entity = entity.COMMUNITY;
                entity = tango.bind(report)(entity);
                mike = !entity;
 87:
                entity = !mike;
                if(mike) { _fun00006_ip = 236; continue _fun00005 }
 96:
                golf = _closure1_slot3;
                tango = golf.isFullServerPreview;
                mike = _closure2_slot0;
                mike = tango.bind(golf)(mike);
                if(mike) { _fun00006_ip = 222; continue _fun00005 }
 118:
                tango = _closure1_slot0;
                golf = _closure1_slot2;
                mike = 8;
                mike = golf[mike];
                verify = undefined;
                golf = tango.bind(verify)(mike);
                tango = golf.isGuildOnboardingSettingsAvailable;
                mike = _closure2_slot0;
                mike = tango.bind(golf)(mike);
                if(mike) { _fun00006_ip = 189; continue _fun00005 }
 158:
                golf = _closure1_slot1;
                options = _closure1_slot2;
                tango = 9;
                tango = options[tango];
                tango = golf.bind(verify)(tango);
                tango = tango.bind(verify)(report);
                tango = !tango;
                mike = !tango;
 189:
                if(!mike) { _fun00006_ip = 220; continue _fun00005 }
 192:
                tango = _closure2_slot1;
                if(tango) { _fun00006_ip = 217; continue _fun00005 }
 199:
                options = _closure1_slot12;
                golf = _closure2_slot0;
                oscar = _closure1_slot4;
                tango = options.bind(verify)(golf, oscar);
 217:
                mike = tango;
 220:
                _fun00006_ip = 233; continue _fun00005;
 222:
                tango = _closure1_slot11;
                zulu = undefined;
                mike = tango.bind(zulu)(report);
 233:
                entity = mike;
 236:
                return entity;
 238:
                entity = false;
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useCanSeeOnboardingHome'] = tango;
    mike = function(argFoo) { // Original name: canSeeOnboardingHome
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot5;
            mike = zulu.getGuild;
            zulu = mike.bind(zulu)(report);
            tango = _closure1_slot3;
            mike = tango.isFullServerPreview;
            mike = mike.bind(tango)(report);
            tango = null;
            if(!(tango != zulu)) { _fun00008_ip = 247; continue _fun00007 }
 44:
            tango = _closure1_slot9;
            if(!(report !== tango)) { _fun00008_ip = 243; continue _fun00007 }
 55:
            tango = _closure1_slot7;
            if(!(report !== tango)) { _fun00008_ip = 243; continue _fun00007 }
 66:
            if(mike) { _fun00008_ip = 230; continue _fun00007 }
 72:
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 8;
            tango = tango[mike];
            mike = undefined;
            tango = oscar.bind(mike)(tango);
            mike = tango.isGuildOnboardingSettingsAvailable;
            tango = mike.bind(tango)(report);
            if(!tango) { _fun00008_ip = 129; continue _fun00007 }
 108:
            report = zulu.hasFeature;
            mike = _closure1_slot8;
            mike = mike.GUILD_ONBOARDING;
            tango = report.bind(zulu)(mike);
 129:
            if(!tango) { _fun00008_ip = 153; continue _fun00007 }
 132:
            report = zulu.hasFeature;
            mike = _closure1_slot8;
            mike = mike.GUILD_SERVER_GUIDE;
            tango = report.bind(zulu)(mike);
 153:
            report = zulu.hasFeature;
            mike = _closure1_slot8;
            mike = mike.GUILD_ONBOARDING;
            mike = report.bind(zulu)(mike);
            if(!mike) { _fun00008_ip = 198; continue _fun00007 }
 177:
            oscar = zulu.hasFeature;
            report = _closure1_slot8;
            report = report.GUILD_SERVER_GUIDE;
            mike = oscar.bind(zulu)(report);
 198:
            if(mike) { _fun00008_ip = 204; continue _fun00007 }
 201:
            mike = tango;
 204:
            if(!mike) { _fun00008_ip = 228; continue _fun00007 }
 207:
            report = zulu.hasFeature;
            tango = _closure1_slot8;
            tango = tango.COMMUNITY;
            mike = report.bind(zulu)(tango);
 228:
            return mike;
 230:
            mike = _closure1_slot11;
            entity = undefined;
            entity = mike.bind(entity)(zulu);
            return entity;
 243:
            entity = false;
            return entity;
 247:
            entity = false;
            return entity;
        }
    };
    zulu['canSeeOnboardingHome'] = mike;
    return entity;
})();