// app/modules/chat_input/native/ChatInputAppCommandManager.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    backup = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
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
    tango = backup.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    var _closure1_slot5 = options;
    tango = 2;
    tango = oscar[tango];
    tango = backup.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = backup.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    offset = report.bind(entity)(tango);
    verify = offset.createStyles;
    golf = {};
    yankee = {};
    romeo = 5;
    tango = oscar[romeo];
    tango = report.bind(entity)(tango);
    tango = tango.DARK_PRIMARY_800_LIGHT_PRIMARY_300;
    yankee['backgroundColor'] = tango;
    foxtrot = 6;
    tango = oscar[foxtrot];
    tango = backup.bind(entity)(tango);
    tango = tango.colors;
    tango = tango.TEXT_NORMAL;
    yankee['color'] = tango;
    tango = oscar[foxtrot];
    tango = backup.bind(entity)(tango);
    tango = tango.radii;
    tango = tango.xs;
    yankee['borderRadius'] = tango;
    tango = 14;
    yankee['fontSize'] = tango;
    golf['commandOption'] = yankee;
    yankee = {};
    kilo = oscar[romeo];
    kilo = report.bind(entity)(kilo);
    kilo = kilo.DARK_PRIMARY_800_LIGHT_PRIMARY_300;
    yankee['backgroundColor'] = kilo;
    kilo = oscar[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.TEXT_DANGER;
    yankee['color'] = kilo;
    foxtrot = oscar[foxtrot];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.xs;
    yankee['borderRadius'] = foxtrot;
    yankee['fontSize'] = tango;
    golf['commandErrorOption'] = yankee;
    yankee = {};
    romeo = oscar[romeo];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.DARK_BRAND_260_LIGHT_BRAND_500;
    yankee['color'] = romeo;
    romeo = 'bold';
    yankee['fontWeight'] = romeo;
    golf['autocomplete'] = yankee;
    golf = verify.bind(offset)(golf);
    var _closure1_slot8 = golf;
    golf = options.forwardRef;
    mike = function(argFoo, argBar) {
        mike = argFoo;
        yankee = mike.chatInputRef;
        var _closure2_slot0 = yankee;
        offset = mike.chatInputStateRef;
        var _closure2_slot1 = offset;
        romeo = mike.channel;
        var _closure2_slot2 = romeo;
        verify = mike.commandsDisabled;
        var _closure2_slot3 = verify;
        mike = _closure1_slot8;
        report = undefined;
        mike = mike.bind(report)();
        var _closure2_slot4 = mike;
        output = _closure1_slot0;
        result = _closure1_slot3;
        tango = 7;
        tango = result[tango];
        golf = output.bind(report)(tango);
        oscar = golf.useApplicationCommandOptionValueParser;
        tango = {};
        tango['channel'] = romeo;
        golf = oscar.bind(golf)(tango);
        var _closure2_slot5 = golf;
        tango = 8;
        oscar = result[tango];
        backup = output.bind(report)(oscar);
        foxtrot = backup.useStateFromStores;
        oscar = _closure1_slot7;
        options = new Array(1);
        options[0] = oscar;
        oscar = function() {
            zulu = _closure1_slot7;
            mike = zulu.getActiveCommand;
            entity = _closure2_slot2;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        foxtrot = foxtrot.bind(backup)(options, oscar);
        var _closure2_slot6 = foxtrot;
        tango = result[tango];
        backup = output.bind(report)(tango);
        options = backup.useStateFromStores;
        tango = _closure1_slot6;
        oscar = new Array(1);
        oscar[0] = tango;
        tango = function() {
            zulu = _closure1_slot6;
            mike = zulu.getLastResponseNonce;
            entity = _closure2_slot2;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        options = options.bind(backup)(oscar, tango);
        var _closure2_slot7 = options;
        tango = _closure1_slot5;
        kilo = tango.useRef;
        oscar = 9;
        oscar = result[oscar];
        sizing = output.bind(report)(oscar);
        backup = sizing.getTextBeforeFirstOption;
        oscar = offset.current;
        oscar = oscar.text;
        oscar = backup.bind(sizing)(oscar);
        sizing = oscar.text;
        oscar = sizing.slice;
        backup = 1;
        sizing = oscar.bind(sizing)(backup);
        oscar = sizing.trimEnd;
        oscar = oscar.bind(sizing)();
        oscar = kilo.bind(tango)(oscar);
        var _closure2_slot8 = oscar;
        kilo = tango.useState;
        oscar = oscar.current;
        sizing = kilo.bind(tango)(oscar);
        kilo = _closure1_slot4;
        oscar = 2;
        oscar = kilo.bind(report)(sizing, oscar);
        kilo = 0;
        sizing = oscar[kilo];
        oscar = oscar[backup];
        var _closure2_slot9 = oscar;
        oscar = _closure1_slot2;
        zulu = 10;
        zulu = result[zulu];
        kilo = oscar.bind(report)(zulu);
        backup = kilo.useCachedResults;
        oscar = {};
        zulu = 'channel';
        oscar['type'] = zulu;
        oscar['channel'] = romeo;
        zulu = 11;
        zulu = result[zulu];
        zulu = output.bind(report)(zulu);
        zulu = zulu.ApplicationCommandType;
        zulu = zulu.CHAT;
        zulu = backup.bind(kilo)(oscar, zulu, sizing);
        oscar = zulu.commands;
        var _closure2_slot10 = oscar;
        zulu = tango.useRef;
        zulu = zulu.bind(tango)(report);
        var _closure2_slot11 = zulu;
        report = tango.useCallback;
        zulu = new Array(9);
        zulu[0] = foxtrot;
        zulu[1] = romeo;
        zulu[2] = yankee;
        zulu[3] = offset;
        zulu[4] = verify;
        zulu[5] = options;
        zulu[6] = golf;
        zulu[7] = oscar;
        zulu[8] = mike;
        mike = function() {
            _fun101010: for(var _fun101010_ip = 0; ; ) switch(_fun101010_ip) {
 0:
                entity = _closure2_slot1;
                tango = entity.current;
                options = tango.editId;
                oscar = tango.focused;
                zulu = tango.selectionStart;
                entity = tango.selectionEnd;
                report = tango.text;
                tango = {};
                verify = _closure2_slot6;
                tango['activeCommand'] = verify;
                verify = _closure2_slot2;
                tango['channel'] = verify;
                verify = _closure2_slot3;
                tango['commandsDisabled'] = verify;
                tango['editId'] = options;
                tango['focused'] = oscar;
                oscar = _closure2_slot7;
                tango['lastCommandAutocompleteResponseNonce'] = oscar;
                oscar = _closure2_slot10;
                tango['queryCommands'] = oscar;
                tango['selectionStart'] = zulu;
                tango['selectionEnd'] = entity;
                tango['text'] = report;
                entity = _closure2_slot11;
                zulu = entity.current;
                entity = null;
                if(!(entity != zulu)) { _fun101010_ip = 160; continue _fun101010 }
 128:
                entity = _closure2_slot11;
                oscar = entity.current;
                zulu = oscar.updateApplicationCommandManagerState;
                entity = {};
                entity['newState'] = tango;
                entity = zulu.bind(oscar)(entity);
                _fun101010_ip = 284; continue _fun101010;
 160:
                zulu = _closure2_slot11;
                options = _closure1_slot1;
                oscar = _closure1_slot3;
                entity = 12;
                oscar = oscar[entity];
                entity = undefined;
                oscar = options.bind(entity)(oscar);
                entity = {};
                entity['props'] = tango;
                tango = _closure2_slot0;
                entity['ref'] = tango;
                tango = _closure2_slot5;
                entity['optionValueParser'] = tango;
                tango = {};
                options = function() { // Original name: commandOption
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.convertToNativeStyle;
                    entity = _closure2_slot4;
                    entity = entity.commandOption;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                tango['commandOption'] = options;
                options = function() { // Original name: commandErrorOption
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.convertToNativeStyle;
                    entity = _closure2_slot4;
                    entity = entity.commandErrorOption;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                tango['commandErrorOption'] = options;
                golf = function(argFoo) { // Original name: autocomplete
                    _fun101013: for(var _fun101013_ip = 0; ; ) switch(_fun101013_ip) {
 0:
                        report = argFoo;
                        entity = null;
                        if(!(entity != report)) { _fun101013_ip = 78; continue _fun101013 }
 9:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.convertToNativeStyle;
                        entity = {};
                        tango = _closure2_slot4;
                        oscar = tango.autocomplete;
                        golf = entity;
                        tango = copyDataProperties(golf, oscar);
                        tango = 'color';
                        entity[tango] = report;
                        entity = mike.bind(zulu)(entity);
                        _fun101013_ip = 127; continue _fun101013;
 78:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot3;
                        mike = 13;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.convertToNativeStyle;
                        mike = _closure2_slot4;
                        mike = mike.autocomplete;
                        entity = zulu.bind(tango)(mike);
 127:
                        return entity;
                    }
                };
                tango['autocomplete'] = golf;
                entity['styles'] = tango;
                tango = oscar.prototype;
                tango = Object.create(tango, {constructor: {value: oscar}});
                yankee = tango;
                offset = entity;
                entity = new yankee[oscar](offset, verify);
                entity = entity instanceof Object ? entity : tango;
                zulu['current'] = entity;
 284:
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 9;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.getTextBeforeFirstOption;
                zulu = zulu.bind(tango)(report);
                report = zulu.text;
                tango = report.slice;
                zulu = 1;
                tango = tango.bind(report)(zulu);
                zulu = tango.trimEnd;
                zulu = zulu.bind(tango)();
                tango = _closure2_slot8;
                tango = tango.current;
                if(!(tango !== zulu)) { _fun101010_ip = 380; continue _fun101010 }
 361:
                tango = _closure2_slot9;
                tango = tango.bind(entity)(zulu);
                mike = _closure2_slot8;
                mike['current'] = zulu;
 380:
                return entity;
            }
        };
        mike = report.bind(tango)(mike, zulu);
        var _closure2_slot12 = mike;
        report = tango.useEffect;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            mike = _closure2_slot12;
            entity = undefined;
            mike = mike.bind(entity)();
            return entity;
        };
        mike = report.bind(tango)(mike, zulu);
        zulu = tango.useImperativeHandle;
        mike = argBar;
        entity = function() {
            entity = {};
            zulu = function() { // Original name: getApplicationCommandManager
                entity = _closure2_slot11;
                entity = entity.current;
                return entity;
            };
            entity['getApplicationCommandManager'] = zulu;
            mike = function() { // Original name: updateState
                mike = _closure2_slot12;
                entity = undefined;
                entity = mike.bind(entity)();
                return entity;
            };
            entity['updateState'] = mike;
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        entity = null;
        return entity;
    };
    golf = golf.bind(options)(mike);
    mike = 'ChatInputAppCommandManager';
    golf['displayName'] = mike;
    mike = options.memo;
    mike = mike.bind(options)(golf);
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/chat_input/native/ChatInputAppCommandManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();