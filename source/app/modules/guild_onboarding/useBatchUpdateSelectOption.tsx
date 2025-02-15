// app/modules/guild_onboarding/useBatchUpdateSelectOption.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: resetStoreState
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot8 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.ChannelNotificationSettingsFlags;
    var _closure1_slot6 = tango;
    tango = {};
    var _closure1_slot7 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/useBatchUpdateSelectOption.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useBatchUpdateSelectOption
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 8;
        tango = tango[entity];
        entity = undefined;
        options = report.bind(entity)(tango);
        golf = options.useStateFromStores;
        entity = _closure1_slot5;
        report = new Array(1);
        report[0] = entity;
        tango = new Array(1);
        tango[0] = oscar;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = _closure1_slot5;
                zulu = tango.getPendingResponseOptions;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(entity);
                zulu = null;
                if(!(zulu == entity)) { _fun00002_ip = 37; continue _fun00001 }
 33:
                entity = _closure1_slot7;
 37:
                return entity;
            }
        };
        entity = golf.bind(options)(report, entity, tango);
        var _closure2_slot1 = entity;
        report = _closure1_slot3;
        golf = report.useEffect;
        tango = new Array(1);
        tango[0] = oscar;
        zulu = function() {
            zulu = _closure1_slot8;
            mike = _closure2_slot0;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = function() {
                zulu = _closure1_slot8;
                mike = _closure2_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            return entity;
        };
        zulu = golf.bind(report)(zulu, tango);
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = oscar;
        zulu[1] = entity;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure2_slot1;
                mike = null;
                mike = mike != zulu;
                if(!mike) { _fun00004_ip = 49; continue _fun00003 }
 16:
                zulu = global;
                report = zulu.Object;
                tango = report.keys;
                zulu = _closure2_slot1;
                zulu = tango.bind(report)(zulu);
                tango = zulu.length;
                zulu = 0;
                mike = zulu !== tango;
 49:
                if(!mike) { _fun00004_ip = 92; continue _fun00003 }
 52:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.updateOnboardingResponses;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
 92:
                entity = undefined;
                return entity;
            }
        };
        entity = tango.bind(report)(entity, zulu);
        entity = {};
        tango = report.useCallback;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function(argFoo, argBar, argBaz) {
            verify = argFoo;
            options = argBar;
            foxtrot = argBaz;
            tango = _closure1_slot5;
            entity = tango.getOnboardingResponses;
            oscar = _closure2_slot0;
            golf = entity.bind(tango)(oscar);
            tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: getRoles
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = argFoo;
                    entity = argBar;
                    mike = argBaz;
                    var _closure4_slot0 = entity;
                    zulu = argCorge;
                    var _closure4_slot1 = zulu;
                    zulu = report.singleSelect;
                    if(!zulu) { _fun00006_ip = 37; continue _fun00005 }
 31:
                    if(mike) { _fun00006_ip = 267; continue _fun00005 }
 37:
                    if(mike) { _fun00006_ip = 239; continue _fun00005 }
 43:
                    oscar = report.options;
                    zulu = oscar.filter;
                    mike = function(argFoo) {
                        zulu = _closure4_slot1;
                        mike = zulu.includes;
                        entity = argFoo;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    oscar = zulu.bind(oscar)(mike);
                    zulu = oscar.filter;
                    mike = function(argFoo) {
                        entity = _closure4_slot0;
                        mike = entity.id;
                        entity = argFoo;
                        entity = entity.id;
                        entity = mike !== entity;
                        return entity;
                    };
                    romeo = zulu.bind(oscar)(mike);
                    zulu = oscar.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.roleIds;
                        return entity;
                    };
                    zulu = zulu.bind(oscar)(mike);
                    mike = zulu.flat;
                    options = mike.bind(zulu)();
                    golf = options.filter;
                    yankee = _closure1_slot0;
                    offset = _closure1_slot2;
                    zulu = 6;
                    oscar = offset[zulu];
                    verify = undefined;
                    oscar = yankee.bind(verify)(oscar);
                    oscar = oscar.isNotNullish;
                    options = golf.bind(options)(oscar);
                    golf = romeo.map;
                    oscar = function(argFoo) {
                        entity = argFoo;
                        entity = entity.roleIds;
                        return entity;
                    };
                    golf = golf.bind(romeo)(oscar);
                    oscar = golf.flat;
                    golf = oscar.bind(golf)();
                    oscar = golf.filter;
                    zulu = offset[zulu];
                    zulu = yankee.bind(verify)(zulu);
                    zulu = zulu.isNotNullish;
                    golf = oscar.bind(golf)(zulu);
                    zulu = new Array(0);
                    oscar = _closure1_slot1;
                    mike = 5;
                    mike = offset[mike];
                    oscar = oscar.bind(verify)(mike);
                    mike = oscar.difference;
                    mike = mike.bind(oscar)(options, golf);
                    _fun00006_ip = 434; continue _fun00005;
 239:
                    golf = entity.roleIds;
                    oscar = null;
                    if(!(oscar == golf)) { _fun00006_ip = 255; continue _fun00005 }
 251:
                    golf = new Array(0);
 255:
                    mike = new Array(0);
                    zulu = golf;
                    _fun00006_ip = 434; continue _fun00005;
 267:
                    oscar = report.options;
                    report = oscar.find;
                    tango = function(argFoo) {
                        zulu = _closure4_slot1;
                        mike = zulu.includes;
                        entity = argFoo;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    verify = report.bind(oscar)(tango);
                    golf = _closure1_slot1;
                    tango = _closure1_slot2;
                    offset = 5;
                    tango = tango[offset];
                    report = undefined;
                    romeo = golf.bind(report)(tango);
                    yankee = romeo.difference;
                    golf = entity.roleIds;
                    options = null;
                    if(!(options == golf)) { _fun00006_ip = 336; continue _fun00005 }
 332:
                    golf = new Array(0);
 336:
                    foxtrot = options == verify;
                    tango = undefined;
                    if(foxtrot) { _fun00006_ip = 351; continue _fun00005 }
 345:
                    tango = verify.roleIds;
 351:
                    if(!(options == tango)) { _fun00006_ip = 359; continue _fun00005 }
 355:
                    tango = new Array(0);
 359:
                    tango = yankee.bind(romeo)(golf, tango);
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[offset];
                    golf = golf.bind(report)(oscar);
                    oscar = golf.difference;
                    offset = options == verify;
                    report = undefined;
                    if(offset) { _fun00006_ip = 403; continue _fun00005 }
 397:
                    report = verify.roleIds;
 403:
                    if(!(options == report)) { _fun00006_ip = 411; continue _fun00005 }
 407:
                    report = new Array(0);
 411:
                    entity = entity.roleIds;
                    if(!(options == entity)) { _fun00006_ip = 425; continue _fun00005 }
 421:
                    entity = new Array(0);
 425:
                    mike = oscar.bind(golf)(report, entity);
                    zulu = tango;
 434:
                    entity = {};
                    entity['addedRoleIds'] = zulu;
                    entity['removedRoleIds'] = mike;
                    return entity;
                }
            };
            entity = undefined;
            update = undefined;
            echo = verify;
            result = options;
            output = foxtrot;
            sizing = golf;
            tango = update[tango](echo, result, output, sizing, kilo);
            report = tango.addedRoleIds;
            tango = tango.removedRoleIds;
            offset = {};
            offset['guildId'] = oscar;
            offset['prompt'] = verify;
            offset['option'] = options;
            offset['selected'] = foxtrot;
            offset['responses'] = golf;
            golf = function(argFoo) { // Original name: getChannels
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = argFoo;
                    oscar = zulu.guildId;
                    report = zulu.prompt;
                    entity = zulu.option;
                    var _closure4_slot0 = entity;
                    mike = zulu.selected;
                    zulu = zulu.responses;
                    var _closure4_slot1 = zulu;
                    zulu = report.singleSelect;
                    if(!zulu) { _fun00008_ip = 57; continue _fun00007 }
 51:
                    if(mike) { _fun00008_ip = 287; continue _fun00007 }
 57:
                    if(mike) { _fun00008_ip = 259; continue _fun00007 }
 63:
                    golf = report.options;
                    zulu = golf.filter;
                    mike = function(argFoo) {
                        zulu = _closure4_slot1;
                        mike = zulu.includes;
                        entity = argFoo;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    golf = zulu.bind(golf)(mike);
                    zulu = golf.filter;
                    mike = function(argFoo) {
                        entity = _closure4_slot0;
                        mike = entity.id;
                        entity = argFoo;
                        entity = entity.id;
                        entity = mike !== entity;
                        return entity;
                    };
                    foxtrot = zulu.bind(golf)(mike);
                    zulu = golf.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.channelIds;
                        return entity;
                    };
                    zulu = zulu.bind(golf)(mike);
                    mike = zulu.flat;
                    verify = mike.bind(zulu)();
                    options = verify.filter;
                    romeo = _closure1_slot0;
                    yankee = _closure1_slot2;
                    zulu = 6;
                    golf = yankee[zulu];
                    offset = undefined;
                    golf = romeo.bind(offset)(golf);
                    golf = golf.isNotNullish;
                    verify = options.bind(verify)(golf);
                    options = foxtrot.map;
                    golf = function(argFoo) {
                        entity = argFoo;
                        entity = entity.channelIds;
                        return entity;
                    };
                    options = options.bind(foxtrot)(golf);
                    golf = options.flat;
                    options = golf.bind(options)();
                    golf = options.filter;
                    zulu = yankee[zulu];
                    zulu = romeo.bind(offset)(zulu);
                    zulu = zulu.isNotNullish;
                    options = golf.bind(options)(zulu);
                    zulu = new Array(0);
                    golf = _closure1_slot1;
                    mike = 5;
                    mike = yankee[mike];
                    golf = golf.bind(offset)(mike);
                    mike = golf.difference;
                    mike = mike.bind(golf)(verify, options);
                    _fun00008_ip = 454; continue _fun00007;
 259:
                    options = entity.channelIds;
                    golf = null;
                    if(!(golf == options)) { _fun00008_ip = 275; continue _fun00007 }
 271:
                    options = new Array(0);
 275:
                    mike = new Array(0);
                    zulu = options;
                    _fun00008_ip = 454; continue _fun00007;
 287:
                    golf = report.options;
                    report = golf.find;
                    tango = function(argFoo) {
                        zulu = _closure4_slot1;
                        mike = zulu.includes;
                        entity = argFoo;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    offset = report.bind(golf)(tango);
                    options = _closure1_slot1;
                    tango = _closure1_slot2;
                    yankee = 5;
                    tango = tango[yankee];
                    report = undefined;
                    foxtrot = options.bind(report)(tango);
                    romeo = foxtrot.difference;
                    options = entity.channelIds;
                    verify = null;
                    if(!(verify == options)) { _fun00008_ip = 356; continue _fun00007 }
 352:
                    options = new Array(0);
 356:
                    backup = verify == offset;
                    tango = undefined;
                    if(backup) { _fun00008_ip = 371; continue _fun00007 }
 365:
                    tango = offset.channelIds;
 371:
                    if(!(verify == tango)) { _fun00008_ip = 379; continue _fun00007 }
 375:
                    tango = new Array(0);
 379:
                    tango = romeo.bind(foxtrot)(options, tango);
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[yankee];
                    options = options.bind(report)(golf);
                    golf = options.difference;
                    yankee = verify == offset;
                    report = undefined;
                    if(yankee) { _fun00008_ip = 423; continue _fun00007 }
 417:
                    report = offset.channelIds;
 423:
                    if(!(verify == report)) { _fun00008_ip = 431; continue _fun00007 }
 427:
                    report = new Array(0);
 431:
                    entity = entity.channelIds;
                    if(!(verify == entity)) { _fun00008_ip = 445; continue _fun00007 }
 441:
                    entity = new Array(0);
 445:
                    mike = golf.bind(options)(report, entity);
                    zulu = tango;
 454:
                    golf = _closure1_slot0;
                    report = _closure1_slot2;
                    tango = 7;
                    report = report[tango];
                    tango = undefined;
                    report = golf.bind(tango)(report);
                    tango = report.hasNotSetUpChannelOptIn;
                    tango = tango.bind(report)(oscar);
                    if(!tango) { _fun00008_ip = 539; continue _fun00007 }
 493:
                    tango = zulu.push;
                    report = _closure1_slot5;
                    entity = report.getDefaultChannelIds;
                    sizing = entity.bind(report)(oscar);
                    entity = new Array(0);
                    kilo = 0;
                    output = entity;
                    report = arraySpread(output, sizing, kilo);
                    output = tango;
                    sizing = entity;
                    kilo = zulu;
                    entity = apply(output, sizing, kilo);
 539:
                    entity = {};
                    entity['addedChannelIds'] = zulu;
                    entity['removedChannelIds'] = mike;
                    return entity;
                }
            };
            golf = golf.bind(entity)(offset);
            kilo = golf.addedChannelIds;
            romeo = golf.removedChannelIds;
            yankee = {};
            backup = kilo.reduce;
            offset = function(argFoo, argBar) {
                entity = argFoo;
                zulu = argBar;
                oscar = _closure1_slot4;
                report = oscar.getChannelIdFlags;
                mike = _closure2_slot0;
                options = report.bind(oscar)(mike, zulu);
                mike = {};
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                report = 10;
                oscar = oscar[report];
                report = undefined;
                golf = golf.bind(report)(oscar);
                oscar = golf.setFlag;
                tango = _closure1_slot6;
                report = tango.OPT_IN_ENABLED;
                tango = true;
                tango = oscar.bind(golf)(options, report, tango);
                mike['flags'] = tango;
                entity[zulu] = mike;
                return entity;
            };
            golf = {};
            result = backup.bind(kilo)(offset, golf);
            echo = yankee;
            golf = copyDataProperties(echo, result);
            offset = romeo.reduce;
            golf = function(argFoo, argBar) {
                entity = argFoo;
                zulu = argBar;
                oscar = _closure1_slot4;
                report = oscar.getChannelIdFlags;
                mike = _closure2_slot0;
                options = report.bind(oscar)(mike, zulu);
                mike = {};
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                report = 10;
                oscar = oscar[report];
                report = undefined;
                golf = golf.bind(report)(oscar);
                oscar = golf.setFlag;
                tango = _closure1_slot6;
                report = tango.OPT_IN_ENABLED;
                tango = false;
                tango = oscar.bind(golf)(options, report, tango);
                mike['flags'] = tango;
                entity[zulu] = mike;
                return entity;
            };
            zulu = {};
            result = offset.bind(romeo)(golf, zulu);
            echo = yankee;
            zulu = copyDataProperties(echo, result);
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 9;
            offset = golf[mike];
            romeo = zulu.bind(entity)(offset);
            offset = romeo.selectOption;
            result = verify.id;
            output = options.id;
            update = romeo;
            echo = oscar;
            sizing = foxtrot;
            options = update[offset](echo, result, output, sizing, kilo);
            options = 4;
            options = golf[options];
            offset = zulu.bind(entity)(options);
            verify = offset.dispatch;
            options = {};
            romeo = 'USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK';
            options['type'] = romeo;
            options['guildId'] = oscar;
            options['overrides'] = yankee;
            options = verify.bind(offset)(options);
            mike = golf[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.updateRolesLocal;
            mike = mike.bind(zulu)(oscar, report, tango);
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        entity['handleSelectOption'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();