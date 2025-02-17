// app/modules/activities/ActivitiesInTextUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    report = function(argFoo) { // Original name: isActivityInTextSupportedForChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            report = null;
            if(!(report != zulu)) { _fun00002_ip = 234; continue _fun00001 }
 12:
            oscar = _closure1_slot2;
            tango = oscar.getChannel;
            entity = zulu.parent_id;
            tango = tango.bind(oscar)(entity);
            entity = report == tango;
            if(entity) { _fun00002_ip = 94; continue _fun00001 }
 42:
            oscar = report == tango;
            golf = undefined;
            report = undefined;
            if(oscar) { _fun00002_ip = 58; continue _fun00001 }
 53:
            report = tango.type;
 58:
            oscar = _closure1_slot0;
            options = _closure1_slot1;
            tango = 3;
            tango = options[tango];
            tango = oscar.bind(golf)(tango);
            tango = tango.ChannelTypes;
            tango = tango.GUILD_CATEGORY;
            entity = report === tango;
 94:
            if(!entity) { _fun00002_ip = 232; continue _fun00001 }
 100:
            tango = zulu.type;
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            zulu = zulu.ChannelTypes;
            options = zulu.GUILD_TEXT;
            zulu = new Array(4);
            zulu[0] = options;
            options = golf[mike];
            options = oscar.bind(report)(options);
            options = options.ChannelTypes;
            options = options.GUILD_VOICE;
            zulu[1] = options;
            options = golf[mike];
            options = oscar.bind(report)(options);
            options = options.ChannelTypes;
            options = options.GROUP_DM;
            zulu[2] = options;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.ChannelTypes;
            mike = mike.DM;
            zulu[3] = mike;
            mike = zulu.includes;
            entity = mike.bind(zulu)(tango);
 232:
            return entity;
 234:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot5 = report;
    entity = function(argFoo, argBar) { // Original name: isActivitiesInTextEnabledForChannelWithPermissions
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            report = null;
            if(!(report != tango)) { _fun00004_ip = 79; continue _fun00003 }
 12:
            oscar = undefined;
            if(!(oscar !== tango)) { _fun00004_ip = 79; continue _fun00003 }
 18:
            mike = _closure1_slot5;
            mike = mike.bind(oscar)(tango);
            if(mike) { _fun00004_ip = 37; continue _fun00003 }
 33:
            mike = false;
            return mike;
 37:
            mike = tango.guild_id;
            if(!(report != mike)) { _fun00004_ip = 75; continue _fun00003 }
 46:
            mike = zulu.can;
            entity = _closure1_slot4;
            entity = entity.USE_EMBEDDED_ACTIVITIES;
            entity = mike.bind(zulu)(entity, tango);
            if(entity) { _fun00004_ip = 75; continue _fun00003 }
 71:
            entity = false;
            return entity;
 75:
            entity = true;
            return entity;
 79:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    tango = function(argFoo) { // Original name: getIsAppLauncherEnabled
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            mike = null;
            report = mike == tango;
            zulu = undefined;
            entity = undefined;
            if(report) { _fun00006_ip = 21; continue _fun00005 }
 16:
            entity = tango.guild_id;
 21:
            entity = mike != entity;
            if(entity) { _fun00006_ip = 40; continue _fun00005 }
 28:
            mike = _closure1_slot5;
            entity = mike.bind(zulu)(tango);
 40:
            return entity;
        }
    };
    var _closure1_slot7 = tango;
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
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.Permissions;
    var _closure1_slot4 = oscar;
    oscar = 6;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/activities/ActivitiesInTextUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['isActivityInTextSupportedForChannel'] = report;
    report = function(argFoo) { // Original name: isActivitiesInTextEnabled
        tango = _closure1_slot6;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = argFoo;
        entity = tango.bind(mike)(entity, zulu);
        return entity;
    };
    zulu['isActivitiesInTextEnabled'] = report;
    report = function(argFoo) { // Original name: useIsActivitiesInTextEnabled
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 4;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot2;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot3;
        mike[1] = report;
        entity = function() {
            tango = _closure1_slot6;
            report = _closure1_slot2;
            zulu = report.getChannel;
            mike = _closure2_slot0;
            zulu = zulu.bind(report)(mike);
            mike = _closure1_slot3;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIsActivitiesInTextEnabled'] = report;
    zulu['getIsAppLauncherEnabled'] = tango;
    tango = function(argFoo) { // Original name: useIsAppLauncherEnabled
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 4;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot2;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = _closure1_slot2;
                zulu = tango.getChannel;
                entity = _closure2_slot0;
                tango = zulu.bind(tango)(entity);
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun00008_ip = 44; continue _fun00007 }
 33:
                zulu = _closure1_slot7;
                mike = undefined;
                entity = zulu.bind(mike)(tango);
 44:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIsAppLauncherEnabled'] = tango;
    mike = function(argFoo, argBar) { // Original name: useShowActivitiesInOmniButtonMenu
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 4;
            golf = report[zulu];
            oscar = undefined;
            offset = tango.bind(oscar)(golf);
            verify = offset.useStateFromStores;
            golf = _closure1_slot2;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                zulu = _closure1_slot2;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = verify.bind(offset)(options, golf);
            var _closure2_slot1 = golf;
            zulu = report[zulu];
            report = tango.bind(oscar)(zulu);
            tango = report.useStateFromStores;
            options = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = options;
            mike = function() {
                tango = _closure1_slot3;
                zulu = tango.can;
                entity = _closure1_slot4;
                mike = entity.USE_EMBEDDED_ACTIVITIES;
                entity = _closure2_slot1;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            zulu = tango.bind(report)(zulu, mike);
            mike = _closure1_slot5;
            tango = mike.bind(oscar)(golf);
            report = null;
            options = report == golf;
            mike = undefined;
            if(options) { _fun00010_ip = 128; continue _fun00009 }
 123:
            mike = golf.guild_id;
 128:
            report = report != mike;
            mike = _closure1_slot0;
            golf = _closure1_slot1;
            entity = 5;
            entity = golf[entity];
            entity = mike.bind(oscar)(entity);
            golf = entity.AppLauncherDesktopExperiment;
            oscar = golf.useExperiment;
            mike = {};
            entity = argBar;
            mike['location'] = entity;
            entity = {};
            options = false;
            entity['autoTrackExposure'] = options;
            entity = oscar.bind(golf)(mike, entity);
            entity = entity.enabled;
            entity = !entity;
            if(!entity) { _fun00010_ip = 217; continue _fun00009 }
 199:
            mike = tango;
            if(!report) { _fun00010_ip = 214; continue _fun00009 }
 205:
            if(!zulu) { _fun00010_ip = 211; continue _fun00009 }
 208:
            zulu = tango;
 211:
            mike = zulu;
 214:
            entity = mike;
 217:
            return entity;
        }
    };
    zulu['useShowActivitiesInOmniButtonMenu'] = mike;
    return entity;
})();