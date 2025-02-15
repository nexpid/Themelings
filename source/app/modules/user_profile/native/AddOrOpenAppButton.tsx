// app/modules/user_profile/native/AddOrOpenAppButton.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: AddAppButton
        zulu = argFoo;
        backup = zulu.application;
        var _closure2_slot0 = backup;
        mike = zulu.guildId;
        var _closure2_slot1 = mike;
        foxtrot = zulu.style;
        zulu = _closure1_slot12;
        tango = undefined;
        romeo = zulu.bind(tango)();
        var _closure2_slot2 = romeo;
        oscar = _closure1_slot5;
        report = oscar.useCallback;
        golf = backup.customInstallUrl;
        zulu = new Array(5);
        zulu[0] = golf;
        golf = backup.id;
        zulu[1] = golf;
        golf = backup.installParams;
        zulu[2] = golf;
        golf = backup.integrationTypesConfig;
        zulu[3] = golf;
        zulu[4] = mike;
        mike = function() {
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 11;
            zulu = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(zulu);
            report = oscar.installApplication;
            zulu = {};
            options = _closure2_slot0;
            verify = options.id;
            zulu['applicationId'] = verify;
            verify = options.customInstallUrl;
            zulu['customInstallUrl'] = verify;
            verify = options.installParams;
            zulu['installParams'] = verify;
            options = options.integrationTypesConfig;
            zulu['integrationTypesConfig'] = options;
            golf = _closure2_slot1;
            zulu['guildId'] = golf;
            zulu = report.bind(oscar)(zulu);
            zulu = _closure1_slot1;
            mike = 12;
            mike = tango[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.hideActionSheet;
            mike = mike.bind(zulu)();
            return entity;
        };
        offset = report.bind(oscar)(mike, zulu);
        oscar = _closure1_slot5;
        report = oscar.useCallback;
        zulu = new Array(1);
        zulu[0] = backup;
        mike = function() {
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 13;
            mike = tango[entity];
            entity = undefined;
            oscar = zulu.bind(entity)(mike);
            report = oscar.copy;
            mike = 14;
            mike = tango[mike];
            options = zulu.bind(entity)(mike);
            golf = options.getApplicationInstallURL;
            mike = _closure2_slot0;
            mike = golf.bind(options)(mike);
            mike = report.bind(oscar)(mike);
            mike = 15;
            mike = tango[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.presentLinkCopied;
            mike = mike.bind(zulu)();
            return entity;
        };
        verify = report.bind(oscar)(mike, zulu);
        oscar = _closure1_slot5;
        report = oscar.useCallback;
        mike = romeo.applicationInstallButtonIcon;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            tango = _closure1_slot11;
            mike = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 16;
            entity = golf[entity];
            zulu = undefined;
            entity = mike.bind(zulu)(entity);
            mike = entity.CirclePlusIcon;
            entity = {};
            oscar = _closure1_slot1;
            report = 17;
            report = golf[report];
            report = oscar.bind(zulu)(report);
            report = report.colors;
            report = report.WHITE;
            entity['color'] = report;
            report = 'sm';
            entity['size'] = report;
            report = _closure2_slot2;
            report = report.applicationInstallButtonIcon;
            entity['style'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        };
        oscar = report.bind(oscar)(mike, zulu);
        golf = _closure1_slot5;
        report = golf.useCallback;
        mike = backup.customInstallUrl;
        zulu = new Array(2);
        zulu[0] = mike;
        mike = romeo.launchIcon;
        zulu[1] = mike;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                entity = entity.customInstallUrl;
                tango = null;
                mike = tango == entity;
                entity = null;
                if(mike) { _fun00002_ip = 173; continue _fun00001 }
 27:
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 18;
                zulu = report[zulu];
                report = undefined;
                golf = oscar.bind(report)(zulu);
                oscar = golf.isDiscordUrl;
                zulu = _closure2_slot0;
                zulu = zulu.customInstallUrl;
                zulu = oscar.bind(golf)(zulu);
                entity = null;
                if(zulu) { _fun00002_ip = 173; continue _fun00001 }
 78:
                tango = _closure1_slot11;
                golf = _closure1_slot1;
                options = _closure1_slot2;
                oscar = 19;
                mike = options[oscar];
                zulu = golf.bind(report)(mike);
                mike = {};
                verify = _closure2_slot2;
                verify = verify.launchIcon;
                mike['style'] = verify;
                oscar = options[oscar];
                oscar = golf.bind(report)(oscar);
                oscar = oscar.Sizes;
                oscar = oscar.SMALL;
                mike['size'] = oscar;
                oscar = 20;
                oscar = options[oscar];
                oscar = golf.bind(report)(oscar);
                mike['source'] = oscar;
                oscar = 'white';
                mike['color'] = oscar;
                entity = tango.bind(report)(zulu, mike);
 173:
                return entity;
            }
        };
        report = report.bind(golf)(mike, zulu);
        options = _closure1_slot5;
        golf = options.useMemo;
        zulu = function() {
            mike = {};
            entity = 'longpress';
            mike['name'] = entity;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 21;
            zulu = golf[entity];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            entity = golf[entity];
            entity = oscar.bind(report)(entity);
            entity = entity.t;
            entity = entity.XWDiho;
            entity = zulu.bind(tango)(entity);
            mike['label'] = entity;
            entity = new Array(1);
            entity[0] = mike;
            return entity;
        };
        mike = new Array(0);
        options = golf.bind(options)(zulu, mike);
        golf = _closure1_slot5;
        zulu = golf.useCallback;
        mike = new Array(1);
        mike[0] = backup;
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                entity = entity.nativeEvent;
                mike = entity.actionName;
                entity = 'longPress';
                if(!(entity === mike)) { _fun00004_ip = 112; continue _fun00003 }
 24:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 13;
                entity = tango[entity];
                mike = undefined;
                oscar = zulu.bind(mike)(entity);
                report = oscar.copy;
                entity = 14;
                entity = tango[entity];
                options = zulu.bind(mike)(entity);
                golf = options.getApplicationInstallURL;
                entity = _closure2_slot0;
                entity = golf.bind(options)(entity);
                entity = report.bind(oscar)(entity);
                entity = 15;
                entity = tango[entity];
                mike = zulu.bind(mike)(entity);
                entity = mike.presentLinkCopied;
                entity = entity.bind(mike)();
 112:
                entity = undefined;
                return entity;
            }
        };
        golf = zulu.bind(golf)(entity, mike);
        zulu = _closure1_slot11;
        sizing = _closure1_slot1;
        kilo = _closure1_slot2;
        backup = 22;
        entity = kilo[backup];
        mike = sizing.bind(tango)(entity);
        entity = {};
        output = kilo[backup];
        output = sizing.bind(tango)(output);
        output = output.Looks;
        output = output.FILLED;
        entity['look'] = output;
        backup = kilo[backup];
        backup = sizing.bind(tango)(backup);
        backup = backup.Sizes;
        backup = backup.SMALL;
        entity['size'] = backup;
        backup = romeo.applicationInstallButton;
        romeo = new Array(2);
        romeo[0] = backup;
        romeo[1] = foxtrot;
        entity['style'] = romeo;
        backup = _closure1_slot0;
        yankee = 21;
        romeo = kilo[yankee];
        romeo = backup.bind(tango)(romeo);
        foxtrot = romeo.intl;
        romeo = foxtrot.string;
        yankee = kilo[yankee];
        yankee = backup.bind(tango)(yankee);
        yankee = yankee.t;
        yankee = yankee.NgXl3N;
        yankee = romeo.bind(foxtrot)(yankee);
        entity['text'] = yankee;
        entity['onPress'] = offset;
        entity['onLongPress'] = verify;
        entity['accessibilityActions'] = options;
        entity['onAccessibilityAction'] = golf;
        entity['renderIcon'] = oscar;
        entity['renderRightIcon'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: AddOrOpenAppButtonWithRequiredChannel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            offset = entity.application;
            verify = entity.botUserId;
            options = entity.context;
            golf = entity.style;
            oscar = entity.onOpenApp;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 23;
            entity = tango[entity];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = {};
            entity['context'] = options;
            entity = zulu.bind(report)(entity);
            tango = _closure1_slot11;
            if(entity) { _fun00006_ip = 109; continue _fun00005 }
 73:
            zulu = _closure1_slot13;
            entity = {};
            entity['application'] = offset;
            yankee = options.channel;
            yankee = yankee.guild_id;
            entity['guildId'] = yankee;
            entity['style'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun00006_ip = 149; continue _fun00005;
 109:
            zulu = _closure1_slot15;
            mike = {};
            mike['profileApplication'] = offset;
            mike['botUserId'] = verify;
            options = options.channel;
            mike['channel'] = options;
            mike['style'] = golf;
            mike['onOpenApp'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 149:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: OpenAppButton
        mike = argFoo;
        yankee = mike.profileApplication;
        var _closure2_slot0 = yankee;
        romeo = mike.channel;
        var _closure2_slot1 = romeo;
        verify = mike.style;
        offset = mike.onOpenApp;
        var _closure2_slot2 = offset;
        mike = _closure1_slot12;
        tango = undefined;
        options = mike.bind(tango)();
        report = _closure1_slot5;
        zulu = report.useState;
        mike = false;
        report = zulu.bind(report)(mike);
        zulu = _closure1_slot4;
        mike = 2;
        zulu = zulu.bind(tango)(report, mike);
        mike = 0;
        oscar = zulu[mike];
        mike = 1;
        mike = zulu[mike];
        var _closure2_slot3 = mike;
        report = _closure1_slot5;
        zulu = report.useCallback;
        mike = _closure1_slot3;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00008_ip = 368; continue _fun00007 }
 10:
                    golf = _closure1_slot6;
                    oscar = _closure2_slot1;
                    mike = _closure2_slot0;
                    tango = mike.id;
                    mike = undefined;
                    offset = golf.bind(mike)(oscar, tango);
                    golf = offset.descriptor;
                    tango = null;
                    options = tango == golf;
                    oscar = undefined;
                    if(options) { _fun00008_ip = 63; continue _fun00007 }
 58:
                    oscar = golf.application;
 63:
                    if(!(tango == oscar)) { _fun00008_ip = 78; continue _fun00007 }
 67:
                    golf = _closure2_slot3;
                    oscar = true;
                    oscar = golf.bind(mike)(oscar);
 78:
                    oscar = offset.descriptor;
                    options = tango == oscar;
                    golf = undefined;
                    if(options) { _fun00008_ip = 98; continue _fun00007 }
 93:
                    golf = oscar.application;
 98:
                    if(!(tango == golf)) { _fun00008_ip = 158; continue _fun00007 }
 102:
                    options = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscar = 24;
                    oscar = verify[oscar];
                    verify = options.bind(mike)(oscar);
                    options = verify.fetchApplication;
                    oscar = _closure2_slot0;
                    oscar = oscar.id;
                    oscar = options.bind(verify)(oscar);
                    SaveGenerator(address=146);
 144:
                    return oscar;
 146:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    golf = oscar;
                    if(!options) { _fun00008_ip = 158; continue _fun00007 }
 155:
                    return oscar;
 158:
                    options = _closure2_slot3;
                    oscar = false;
                    oscar = options.bind(mike)(oscar);
                    if(!(tango != offset)) { _fun00008_ip = 365; continue _fun00007 }
 176:
                    oscar = _closure2_slot2;
                    if(!(tango != oscar)) { _fun00008_ip = 192; continue _fun00007 }
 184:
                    report = _closure2_slot2;
                    report = report.bind(mike)();
 192:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 25;
                    report = options[report];
                    oscar = oscar.bind(mike)(report);
                    report = oscar.getBestActiveInput;
                    oscar = report.bind(oscar)();
                    if(!(tango != oscar)) { _fun00008_ip = 312; continue _fun00007 }
 226:
                    report = oscar.openCustomKeyboard;
                    tango = {};
                    options = _closure1_slot10;
                    options = options.APP_LAUNCHER;
                    tango['keyboardType'] = options;
                    options = {};
                    verify = _closure1_slot9;
                    verify = verify.APPLICATION_VIEW;
                    options['initialRouteName'] = verify;
                    verify = true;
                    options['initiallyExpanded'] = verify;
                    options['application'] = golf;
                    verify = offset.isGuildInstalled;
                    verify = !verify;
                    if(!verify) { _fun00008_ip = 298; continue _fun00007 }
 289:
                    offset = offset.isUserInstalled;
                    verify = !offset;
 298:
                    options['installOnDemand'] = verify;
                    tango['context'] = options;
                    tango = report.bind(oscar)(tango);
 312:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 26;
                    tango = oscar[tango];
                    oscar = report.bind(mike)(tango);
                    report = oscar.track;
                    zulu = _closure1_slot8;
                    tango = zulu.APP_PROFILE_OPEN_APP_BUTTON_CLICKED;
                    zulu = {};
                    golf = golf.id;
                    zulu['application_id'] = golf;
                    zulu = report.bind(oscar)(tango, zulu);
 365:
                    return mike;
 368:
                    return entity;
                }
            };
            return entity;
        };
        mike = mike.bind(tango)(entity);
        entity = new Array(3);
        entity[0] = romeo;
        yankee = yankee.id;
        entity[1] = yankee;
        entity[2] = offset;
        report = zulu.bind(report)(mike, entity);
        zulu = _closure1_slot11;
        romeo = _closure1_slot1;
        yankee = _closure1_slot2;
        offset = 22;
        entity = yankee[offset];
        mike = romeo.bind(tango)(entity);
        entity = {};
        foxtrot = yankee[offset];
        foxtrot = romeo.bind(tango)(foxtrot);
        foxtrot = foxtrot.Looks;
        foxtrot = foxtrot.FILLED;
        entity['look'] = foxtrot;
        offset = yankee[offset];
        offset = romeo.bind(tango)(offset);
        offset = offset.Sizes;
        offset = offset.SMALL;
        entity['size'] = offset;
        offset = options.applicationInstallButton;
        options = new Array(2);
        options[0] = offset;
        options[1] = verify;
        entity['style'] = options;
        offset = _closure1_slot0;
        golf = 21;
        options = yankee[golf];
        options = offset.bind(tango)(options);
        verify = options.intl;
        options = verify.string;
        golf = yankee[golf];
        golf = offset.bind(tango)(golf);
        golf = golf.t;
        golf = golf.Cia+Aw;
        golf = options.bind(verify)(golf);
        entity['text'] = golf;
        entity['loading'] = oscar;
        entity['onPress'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.getSectionFromChannel;
    var _closure1_slot6 = tango;
    yankee = 4;
    tango = oscar[yankee];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AppLauncherRouteName;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KeyboardTypes;
    var _closure1_slot10 = tango;
    offset = 8;
    tango = oscar[offset];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'marginRight': 8, 'marginTop': 16};
    tango['applicationInstallButton'] = verify;
    verify = {};
    verify['marginRight'] = yankee;
    tango['applicationInstallButtonIcon'] = verify;
    verify = {};
    verify['marginLeft'] = offset;
    tango['launchIcon'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot12 = tango;
    tango = 27;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/AddOrOpenAppButton.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: AddOrOpenAppButton
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            options = mike.application;
            offset = mike.botUserId;
            zulu = mike.channelId;
            var _closure2_slot0 = zulu;
            golf = mike.guildId;
            oscar = mike.style;
            verify = mike.onOpenApp;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 10;
            zulu = report[zulu];
            report = undefined;
            yankee = tango.bind(report)(zulu);
            tango = yankee.useStateFromStores;
            romeo = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = romeo;
            entity = function() {
                zulu = _closure1_slot7;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            yankee = tango.bind(yankee)(zulu, entity);
            entity = null;
            if(!(entity != yankee)) { _fun00010_ip = 156; continue _fun00009 }
 102:
            tango = _closure1_slot11;
            zulu = _closure1_slot14;
            entity = {};
            entity['application'] = options;
            entity['botUserId'] = offset;
            offset = {};
            offset['channel'] = yankee;
            yankee = 'channel';
            offset['type'] = yankee;
            entity['context'] = offset;
            entity['style'] = oscar;
            entity['onOpenApp'] = verify;
            entity = tango.bind(report)(zulu, entity);
            _fun00010_ip = 184; continue _fun00009;
 156:
            tango = _closure1_slot11;
            zulu = _closure1_slot13;
            mike = {};
            mike['application'] = options;
            mike['guildId'] = golf;
            mike['style'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 184:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();