// app/modules/user_profile/native/UserProfileAboutMeCardCommand.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    yankee = 4;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.MENTION_FOREGROUND;
    offset['color'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.MENTION_BACKGROUND;
    offset['backgroundColor'] = foxtrot;
    foxtrot = oscar[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_12;
    offset['marginEnd'] = foxtrot;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_12;
    offset['marginBottom'] = yankee;
    tango['commandClickable'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot5 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: UserProfileAboutMeCardCommand
        entity = argFoo;
        mike = entity.application;
        var _closure2_slot0 = mike;
        report = entity.command;
        var _closure2_slot1 = report;
        entity = entity.channel;
        var _closure2_slot2 = entity;
        mike = _closure1_slot5;
        tango = undefined;
        oscar = mike.bind(tango)();
        zulu = _closure1_slot4;
        mike = _closure1_slot0;
        options = _closure1_slot2;
        entity = 5;
        entity = options[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.Text;
        entity = {};
        options = 'text-md/bold';
        entity['variant'] = options;
        options = function() { // Original name: onPress
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 6;
                mike = tango[entity];
                entity = undefined;
                oscar = zulu.bind(entity)(mike);
                mike = oscar.getBestActiveInput;
                offset = mike.bind(oscar)();
                var _closure3_slot0 = offset;
                mike = 7;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.handleTapCommandMention;
                mike = {};
                golf = _closure2_slot2;
                golf = golf.id;
                mike['channelId'] = golf;
                golf = null;
                verify = golf == offset;
                options = undefined;
                if(verify) { _fun00002_ip = 98; continue _fun00001 }
 88:
                verify = offset.getText;
                options = verify.bind(offset)();
 98:
                verify = golf != options;
                golf = '';
                if(!verify) { _fun00002_ip = 112; continue _fun00001 }
 109:
                golf = options;
 112:
                mike['currentText'] = golf;
                oscar = _closure2_slot1;
                golf = oscar.id;
                mike['commandId'] = golf;
                oscar = oscar.displayName;
                mike['commandName'] = oscar;
                oscar = function(argFoo) { // Original name: onOpenCustomKeyboard
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zulu = _closure3_slot0;
                        entity = null;
                        zulu = entity == zulu;
                        entity = undefined;
                        if(zulu) { _fun00004_ip = 36; continue _fun00003 }
 18:
                        tango = _closure3_slot0;
                        zulu = tango.openCustomKeyboard;
                        mike = argFoo;
                        entity = zulu.bind(tango)(mike);
 36:
                        return entity;
                    }
                };
                mike['onOpenCustomKeyboard'] = oscar;
                report = function() { // Original name: onSetCommand
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 8;
                        mike = mike[entity];
                        entity = undefined;
                        verify = zulu.bind(entity)(mike);
                        options = verify.track;
                        mike = _closure1_slot3;
                        zulu = mike.POPULAR_APPLICATION_COMMAND_CLICKED;
                        mike = {};
                        tango = _closure2_slot0;
                        oscar = null;
                        offset = oscar == tango;
                        tango = undefined;
                        if(offset) { _fun00006_ip = 69; continue _fun00005 }
 60:
                        offset = _closure2_slot0;
                        tango = offset.id;
 69:
                        mike['application_id'] = tango;
                        tango = _closure2_slot1;
                        tango = tango.id;
                        mike['command_id'] = tango;
                        romeo = _closure2_slot2;
                        tango = romeo.getGuildId;
                        tango = tango.bind(romeo)();
                        mike['guild_id'] = tango;
                        yankee = _closure1_slot0;
                        tango = _closure1_slot2;
                        offset = 9;
                        offset = tango[offset];
                        yankee = yankee.bind(entity)(offset);
                        offset = yankee.collectChannelAnalyticsMetadata;
                        foxtrot = offset.bind(yankee)(romeo);
                        backup = mike;
                        offset = copyDataProperties(backup, foxtrot);
                        mike = options.bind(verify)(zulu, mike);
                        zulu = _closure1_slot1;
                        mike = 10;
                        mike = tango[mike];
                        options = zulu.bind(entity)(mike);
                        mike = options.hideActionSheet;
                        mike = mike.bind(options)();
                        mike = 11;
                        mike = tango[mike];
                        mike = zulu.bind(entity)(mike);
                        mike = mike.bind(entity)();
                        mike = _closure3_slot0;
                        if(!(oscar != mike)) { _fun00006_ip = 217; continue _fun00005 }
 203:
                        tango = _closure3_slot0;
                        mike = tango.openSystemKeyboard;
                        mike = mike.bind(tango)();
 217:
                        mike = _closure3_slot0;
                        mike = oscar == mike;
                        tango = undefined;
                        if(mike) { _fun00006_ip = 251; continue _fun00005 }
 230:
                        options = _closure3_slot0;
                        zulu = options.getApplicationCommandManager;
                        zulu = zulu.bind(options)();
                        mike = oscar == zulu;
                        tango = zulu;
 251:
                        if(mike) { _fun00006_ip = 380; continue _fun00005 }
 257:
                        zulu = tango.setCommand;
                        mike = {};
                        options = _closure2_slot2;
                        options = options.id;
                        mike['channelId'] = options;
                        options = _closure2_slot1;
                        mike['command'] = options;
                        options = _closure2_slot0;
                        options = oscar != options;
                        oscar = null;
                        if(!options) { _fun00006_ip = 335; continue _fun00005 }
 300:
                        verify = _closure1_slot0;
                        offset = _closure1_slot2;
                        options = 12;
                        options = offset[options];
                        verify = verify.bind(entity)(options);
                        options = verify.getApplicationCommandSection;
                        golf = _closure2_slot0;
                        oscar = options.bind(verify)(golf);
 335:
                        mike['section'] = oscar;
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        report = 13;
                        report = golf[report];
                        report = oscar.bind(entity)(report);
                        report = report.ApplicationCommandTriggerLocations;
                        report = report.POPULAR_COMMANDS;
                        mike['location'] = report;
                        mike = zulu.bind(tango)(mike);
 380:
                        return entity;
                    }
                };
                mike['onSetCommand'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        entity['onPress'] = options;
        golf = function() { // Original name: onLongPress
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.handleLongPressCommandMention;
            entity = _closure2_slot1;
            mike = entity.displayName;
            entity = entity.id;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['onLongPress'] = golf;
        oscar = oscar.commandClickable;
        entity['style'] = oscar;
        oscar = report.displayName;
        report = ['/'];
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/UserProfileAboutMeCardCommand.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();