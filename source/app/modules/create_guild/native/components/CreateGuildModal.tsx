// app/modules/create_guild/native/components/CreateGuildModal.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: getScreens
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = argBaz;
            var _closure2_slot1 = entity;
            entity = {};
            mike = _closure1_slot6;
            zulu = mike.GUILD_TEMPLATES;
            mike = {};
            verify = _closure1_slot0;
            options = _closure1_slot2;
            offset = 11;
            report = options[offset];
            golf = undefined;
            report = verify.bind(golf)(report);
            report = report.ImpressionNames;
            report = report.GUILD_ADD_LANDING;
            mike['impressionName'] = report;
            report = _closure1_slot11;
            mike['impressionProperties'] = report;
            report = true;
            mike['fullscreen'] = report;
            yankee = function() { // Original name: headerTitle
                entity = null;
                return entity;
            };
            mike['headerTitle'] = yankee;
            yankee = 12;
            yankee = options[yankee];
            foxtrot = verify.bind(golf)(yankee);
            romeo = foxtrot.getHeaderCloseButton;
            backup = _closure1_slot1;
            yankee = 10;
            yankee = options[yankee];
            yankee = backup.bind(golf)(yankee);
            yankee = yankee.closeCreateGuildModal;
            yankee = romeo.bind(foxtrot)(yankee);
            mike['headerLeft'] = yankee;
            yankee = function() { // Original name: render
                tango = _closure1_slot10;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 13;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                report = _closure1_slot7;
                report = report.IN_APP;
                entity['trigger'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            mike['render'] = yankee;
            entity[zulu] = mike;
            mike = _closure1_slot6;
            zulu = mike.CREATION_INTENT;
            mike = {};
            yankee = options[offset];
            yankee = verify.bind(golf)(yankee);
            yankee = yankee.ImpressionNames;
            yankee = yankee.GUILD_ADD_INTENT_SELECTION;
            mike['impressionName'] = yankee;
            yankee = _closure1_slot11;
            mike['impressionProperties'] = yankee;
            mike['fullscreen'] = report;
            yankee = function() { // Original name: headerTitle
                entity = null;
                return entity;
            };
            mike['headerTitle'] = yankee;
            yankee = function(argFoo) { // Original name: render
                entity = argFoo;
                oscar = entity.guildTemplate;
                tango = _closure1_slot10;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 14;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                entity['guildTemplate'] = oscar;
                report = _closure1_slot7;
                report = report.IN_APP;
                entity['trigger'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            mike['render'] = yankee;
            entity[zulu] = mike;
            mike = _closure1_slot6;
            zulu = mike.CREATE_SERVER;
            mike = {};
            yankee = options[offset];
            yankee = verify.bind(golf)(yankee);
            yankee = yankee.ImpressionNames;
            yankee = yankee.GUILD_ADD_CUSTOMIZE;
            mike['impressionName'] = yankee;
            yankee = _closure1_slot11;
            mike['impressionProperties'] = yankee;
            mike['fullscreen'] = report;
            yankee = function() { // Original name: headerTitle
                entity = null;
                return entity;
            };
            mike['headerTitle'] = yankee;
            yankee = function(argFoo, argBar) { // Original name: render
                entity = argBar;
                var _closure3_slot0 = entity;
                tango = _closure1_slot10;
                mike = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 15;
                entity = verify[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                offset = argFoo;
                yankee = entity;
                golf = copyDataProperties(yankee, offset);
                golf = function(argFoo) { // Original name: onCreate
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        entity = entity.guild;
                        verify = entity.id;
                        options = _closure3_slot0;
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 6;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.createGuildProgress;
                        mike = mike.bind(zulu)(verify);
                        zulu = _closure1_slot5;
                        mike = zulu.getDefaultChannel;
                        mike = mike.bind(zulu)(verify);
                        zulu = null;
                        if(!(zulu != mike)) { _fun00004_ip = 237; continue _fun00003 }
 80:
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        report = 7;
                        report = tango[report];
                        offset = zulu.bind(entity)(report);
                        golf = offset.init;
                        report = mike.id;
                        mike = {};
                        yankee = 'Guild Create Flow';
                        mike['location'] = yankee;
                        mike = golf.bind(offset)(verify, report, mike);
                        golf = options.push;
                        mike = _closure1_slot6;
                        report = mike.GUILD_INVITE;
                        mike = {};
                        mike['guildId'] = verify;
                        mike = golf.bind(options)(report, mike);
                        mike = 8;
                        mike = tango[mike];
                        report = zulu.bind(entity)(mike);
                        tango = report.track;
                        mike = _closure1_slot8;
                        zulu = mike.USER_FLOW_TRANSITION;
                        mike = {};
                        golf = _closure1_slot9;
                        golf = golf.GUILD_CREATE_MODAL;
                        mike['flow_type'] = golf;
                        golf = _closure1_slot6;
                        golf = golf.CREATE_SERVER;
                        mike['from_step'] = golf;
                        oscar = _closure1_slot6;
                        oscar = oscar.GUILD_INVITE;
                        mike['to_step'] = oscar;
                        mike = tango.bind(report)(zulu, mike);
 237:
                        return entity;
                    }
                };
                oscar = 'onCreate';
                entity[oscar] = golf;
                options = _closure1_slot0;
                report = 16;
                oscar = verify[report];
                oscar = options.bind(zulu)(oscar);
                golf = oscar.intl;
                oscar = golf.string;
                report = verify[report];
                report = options.bind(zulu)(report);
                report = report.t;
                report = report.5HZu09;
                oscar = oscar.bind(golf)(report);
                report = 'customTitle';
                entity[report] = oscar;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            mike['render'] = yankee;
            entity[zulu] = mike;
            mike = _closure1_slot6;
            zulu = mike.GUILD_INVITE;
            mike = {};
            yankee = options[offset];
            yankee = verify.bind(golf)(yankee);
            yankee = yankee.ImpressionNames;
            yankee = yankee.GUILD_ADD_GUILD_INVITE;
            mike['impressionName'] = yankee;
            yankee = _closure1_slot11;
            mike['impressionProperties'] = yankee;
            mike['fullscreen'] = report;
            yankee = function() { // Original name: headerTitle
                entity = null;
                return entity;
            };
            mike['headerTitle'] = yankee;
            yankee = function(argFoo) { // Original name: render
                entity = argFoo;
                entity = entity.guildId;
                var _closure3_slot0 = entity;
                tango = _closure1_slot10;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 17;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                oscar = false;
                entity['closeOnEditInviteLink'] = oscar;
                report = function() { // Original name: onClose
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zulu = _closure3_slot0;
                        mike = _closure2_slot1;
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        entity = 9;
                        tango = oscar[entity];
                        entity = undefined;
                        golf = report.bind(entity)(tango);
                        tango = golf.transitionToGuildSync;
                        tango = tango.bind(golf)(zulu);
                        tango = 10;
                        tango = oscar[tango];
                        report = report.bind(entity)(tango);
                        tango = report.closeCreateGuildModal;
                        tango = tango.bind(report)();
                        tango = null;
                        if(!(tango != mike)) { _fun00006_ip = 83; continue _fun00005 }
 78:
                        mike = mike.bind(entity)(zulu);
 83:
                        return entity;
                    }
                };
                entity['onClose'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            mike['render'] = yankee;
            entity[zulu] = mike;
            mike = _closure1_slot6;
            zulu = mike.JOIN_SERVER;
            mike = {};
            options = options[offset];
            options = verify.bind(golf)(options);
            options = options.ImpressionNames;
            options = options.GUILD_ADD_JOIN;
            mike['impressionName'] = options;
            options = _closure1_slot11;
            mike['impressionProperties'] = options;
            mike['fullscreen'] = report;
            options = argFoo;
            if(options) { _fun00002_ip = 477; continue _fun00001 }
 468:
            options = function() {
                entity = null;
                return entity;
            };
            _fun00002_ip = 484; continue _fun00001;
 477:
            options = function() {
                tango = _closure1_slot10;
                options = _closure1_slot0;
                verify = _closure1_slot2;
                entity = 18;
                entity = verify[entity];
                zulu = undefined;
                entity = options.bind(zulu)(entity);
                mike = entity.GenericHeaderTitle;
                entity = {};
                report = 16;
                oscar = verify[report];
                oscar = options.bind(zulu)(oscar);
                golf = oscar.intl;
                oscar = golf.string;
                report = verify[report];
                report = options.bind(zulu)(report);
                report = report.t;
                report = report.jlfuFR;
                report = oscar.bind(golf)(report);
                entity['title'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
 484:
            mike['headerTitle'] = options;
            options = function(argFoo) { // Original name: render
                tango = _closure1_slot10;
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                entity = 19;
                entity = golf[entity];
                zulu = undefined;
                mike = oscar.bind(zulu)(entity);
                entity = {};
                report = _closure2_slot0;
                entity['initialRoute'] = report;
                options = argFoo;
                verify = entity;
                report = copyDataProperties(verify, options);
                report = 10;
                report = golf[report];
                report = oscar.bind(zulu)(report);
                oscar = report.closeCreateGuildModal;
                report = 'onClose';
                entity[report] = oscar;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            mike['render'] = options;
            entity[zulu] = mike;
            mike = _closure1_slot6;
            zulu = mike.ACCEPT_INVITE;
            mike = {};
            verify = _closure1_slot0;
            options = _closure1_slot2;
            options = options[offset];
            options = verify.bind(golf)(options);
            options = options.ImpressionNames;
            options = options.GUILD_ADD_ACCEPT_INVITE;
            mike['impressionName'] = options;
            options = _closure1_slot11;
            mike['impressionProperties'] = options;
            mike['fullscreen'] = report;
            options = function() { // Original name: headerTitle
                entity = null;
                return entity;
            };
            mike['headerTitle'] = options;
            options = function() { // Original name: headerLeft
                entity = null;
                return entity;
            };
            mike['headerLeft'] = options;
            options = function(argFoo) { // Original name: render
                entity = argFoo;
                options = entity.code;
                tango = _closure1_slot10;
                mike = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 20;
                entity = offset[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                entity = entity.RedesignCompatContext;
                mike = entity.Provider;
                entity = {};
                oscar = false;
                entity['value'] = oscar;
                golf = _closure1_slot10;
                verify = _closure1_slot1;
                report = 21;
                report = offset[report];
                oscar = verify.bind(zulu)(report);
                report = {};
                report['code'] = options;
                options = 10;
                options = offset[options];
                options = verify.bind(zulu)(options);
                options = options.closeCreateGuildModal;
                report['onPressClose'] = options;
                report = golf.bind(zulu)(oscar, report);
                entity['children'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            mike['render'] = options;
            entity[zulu] = mike;
            mike = _closure1_slot6;
            zulu = mike.JOIN_STUDENT_HUB;
            mike = {};
            mike['impressionName'] = golf;
            oscar = _closure1_slot11;
            mike['impressionProperties'] = oscar;
            mike['fullscreen'] = report;
            mike['ignoreKeyboard'] = report;
            report = function() { // Original name: headerTitle
                entity = null;
                return entity;
            };
            mike['headerTitle'] = report;
            report = function() { // Original name: headerLeft
                entity = null;
                return entity;
            };
            mike['headerLeft'] = report;
            tango = function() { // Original name: render
                tango = _closure1_slot10;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 22;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                report = true;
                entity['isNestedNavigator'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            mike['render'] = tango;
            entity[zulu] = mike;
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Keyboard;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.CreateGuildModalStates;
    var _closure1_slot6 = golf;
    tango = tango.GuildTemplateTriggers;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot8 = golf;
    tango = tango.AnalyticsSections;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot10 = tango;
    tango = {};
    golf = 11;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.ImpressionGroups;
    golf = golf.GUILD_ADD_FLOW;
    tango['impression_group'] = golf;
    var _closure1_slot11 = tango;
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/create_guild/native/components/CreateGuildModal.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: CreateGuildModal
        mike = argFoo;
        entity = mike.channel;
        var _closure2_slot0 = entity;
        result = mike.initialState;
        var _closure2_slot1 = result;
        sizing = mike.onSuccess;
        var _closure2_slot2 = sizing;
        kilo = _closure1_slot3;
        zulu = kilo.useMemo;
        mike = new Array(2);
        mike[0] = entity;
        mike[1] = result;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = _closure2_slot1;
                entity = _closure1_slot6;
                entity = entity.JOIN_SERVER;
                if(!(mike !== entity)) { _fun00008_ip = 137; continue _fun00007 }
 24:
                mike = _closure2_slot0;
                entity = null;
                if(!(entity != mike)) { _fun00008_ip = 108; continue _fun00007 }
 34:
                mike = {};
                entity = _closure1_slot6;
                entity = entity.GUILD_INVITE;
                mike['name'] = entity;
                entity = {};
                zulu = _closure2_slot0;
                entity['channel'] = zulu;
                oscar = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 10;
                report = report[zulu];
                zulu = undefined;
                zulu = oscar.bind(zulu)(report);
                zulu = zulu.closeCreateGuildModal;
                entity['onClose'] = zulu;
                mike['param'] = entity;
                entity = new Array(1);
                entity[0] = mike;
                _fun00008_ip = 135; continue _fun00007;
 108:
                zulu = {};
                mike = _closure1_slot6;
                mike = mike.GUILD_TEMPLATES;
                zulu['name'] = mike;
                mike = new Array(1);
                mike[0] = zulu;
                entity = mike;
 135:
                _fun00008_ip = 186; continue _fun00007;
 137:
                zulu = {};
                mike = _closure1_slot6;
                mike = mike.JOIN_SERVER;
                zulu['name'] = mike;
                mike = {};
                tango = _closure1_slot6;
                tango = tango.JOIN_SERVER;
                mike['initialRoute'] = tango;
                zulu['param'] = mike;
                mike = new Array(1);
                mike[0] = zulu;
                entity = mike;
 186:
                return entity;
            }
        };
        verify = zulu.bind(kilo)(entity, mike);
        romeo = _closure1_slot0;
        foxtrot = _closure1_slot2;
        entity = 23;
        entity = foxtrot[entity];
        tango = undefined;
        mike = romeo.bind(tango)(entity);
        entity = mike.useIsWindowSmall;
        output = entity.bind(mike)();
        var _closure2_slot3 = output;
        zulu = _closure1_slot10;
        entity = 20;
        entity = foxtrot[entity];
        entity = romeo.bind(tango)(entity);
        mike = entity.RedesignCompat;
        entity = {};
        golf = _closure1_slot10;
        report = 24;
        report = foxtrot[report];
        report = romeo.bind(tango)(report);
        oscar = report.Navigator;
        report = {};
        backup = kilo.useMemo;
        yankee = new Array(3);
        yankee[0] = result;
        yankee[1] = output;
        yankee[2] = sizing;
        offset = function() {
            report = _closure1_slot12;
            tango = _closure2_slot3;
            zulu = _closure2_slot1;
            mike = _closure2_slot2;
            entity = undefined;
            entity = report.bind(entity)(tango, zulu, mike);
            return entity;
        };
        offset = backup.bind(kilo)(offset, yankee);
        report['screens'] = offset;
        report['initialRouteStack'] = verify;
        verify = 16;
        offset = foxtrot[verify];
        offset = romeo.bind(tango)(offset);
        yankee = offset.intl;
        offset = yankee.string;
        verify = foxtrot[verify];
        verify = romeo.bind(tango)(verify);
        verify = verify.t;
        verify = verify.13/7kZ;
        verify = offset.bind(yankee)(verify);
        report['headerBackTitle'] = verify;
        options = _closure1_slot4;
        options = options.dismiss;
        report['onWillFocus'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();