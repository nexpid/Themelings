// app/modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: Item
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            tango = mike.item;
            zulu = mike.index;
            var _closure2_slot0 = zulu;
            zulu = mike.choices;
            var _closure2_slot1 = zulu;
            mike = mike.onChoiceSelect;
            var _closure2_slot2 = mike;
            oscar = undefined;
            var _closure2_slot3 = oscar;
            var _closure2_slot4 = oscar;
            var _closure2_slot5 = oscar;
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 17;
            mike = golf[mike];
            golf = zulu.bind(oscar)(mike);
            zulu = tango.type;
            mike = _closure1_slot8;
            mike = mike.CHOICE;
            zulu = zulu === mike;
            if(zulu) { _fun00002_ip = 117; continue _fun00001 }
 98:
            options = tango.type;
            mike = _closure1_slot8;
            mike = mike.CHOICE_LOADING;
            zulu = options === mike;
 117:
            if(zulu) { _fun00002_ip = 139; continue _fun00001 }
 120:
            options = tango.type;
            mike = _closure1_slot8;
            mike = mike.LABEL;
            zulu = options === mike;
 139:
            mike = 'Invalid autocomplete result type';
            mike = golf.bind(oscar)(zulu, mike);
            mike = _closure1_slot12;
            mike = mike.bind(oscar)();
            _closure2_slot3 = mike;
            options = _closure1_slot4;
            golf = options.useMemo;
            zulu = function() {
                entity = global;
                mike = entity.Math;
                entity = mike.random;
                mike = entity.bind(mike)();
                entity = 100;
                mike = entity * mike;
                entity = 50;
                entity = mike + entity;
                return entity;
            };
            mike = new Array(0);
            mike = golf.bind(options)(zulu, mike);
            _closure2_slot4 = mike;
            mike = function(argFoo) { // Original name: ListItem
                entity = argFoo;
                oscar = entity.label;
                report = entity.onPress;
                tango = _closure1_slot9;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 18;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.TableRow;
                entity = {};
                entity['label'] = oscar;
                entity['onPress'] = report;
                oscar = _closure2_slot0;
                golf = 0;
                golf = golf === oscar;
                entity['start'] = golf;
                report = _closure2_slot1;
                golf = report.length;
                report = 1;
                report = golf - report;
                report = oscar === report;
                entity['end'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            _closure2_slot5 = mike;
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 19;
            mike = golf[mike];
            zulu = zulu.bind(oscar)(mike);
            mike = zulu.match;
            oscar = mike.bind(zulu)(tango);
            tango = oscar.with;
            zulu = {};
            mike = _closure1_slot8;
            mike = mike.CHOICE;
            zulu['type'] = mike;
            mike = function(argFoo) {
                options = argFoo;
                var _closure3_slot0 = options;
                tango = _closure1_slot9;
                zulu = _closure2_slot5;
                mike = {};
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 20;
                oscar = oscar[entity];
                entity = undefined;
                oscar = golf.bind(entity)(oscar);
                golf = oscar.Text;
                oscar = {'lineClamp': 1, 'variant': 'text-md/normal', 'color': 'header-primary'};
                options = options.choice;
                options = options.displayName;
                oscar['children'] = options;
                oscar = tango.bind(entity)(golf, oscar);
                mike['label'] = oscar;
                report = function() { // Original name: onPress
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zulu = _closure2_slot2;
                        mike = null;
                        if(!(mike != zulu)) { _fun00004_ip = 37; continue _fun00003 }
 13:
                        zulu = _closure2_slot2;
                        entity = _closure3_slot0;
                        mike = entity.choice;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
 37:
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.hideActionSheet;
                        mike = mike.bind(zulu)();
                        return entity;
                    }
                };
                mike['onPress'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            oscar = tango.bind(oscar)(zulu, mike);
            tango = oscar.with;
            zulu = {};
            mike = _closure1_slot8;
            mike = mike.LABEL;
            zulu['type'] = mike;
            mike = function(argFoo) {
                verify = argFoo;
                var _closure3_slot0 = verify;
                tango = _closure1_slot9;
                zulu = _closure2_slot5;
                mike = {};
                options = _closure1_slot10;
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 20;
                oscar = oscar[entity];
                entity = undefined;
                oscar = golf.bind(entity)(oscar);
                golf = oscar.Text;
                oscar = {'lineClamp': 1, 'variant': 'text-md/normal', 'color': 'header-primary'};
                offset = verify.label;
                verify = ['"'];
                verify[1] = offset;
                offset = '"';
                verify[2] = offset;
                oscar['children'] = verify;
                oscar = options.bind(entity)(golf, oscar);
                mike['label'] = oscar;
                report = function() { // Original name: onPress
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zulu = _closure2_slot2;
                        mike = null;
                        if(!(mike != zulu)) { _fun00006_ip = 60; continue _fun00005 }
 13:
                        zulu = _closure2_slot2;
                        mike = {};
                        entity = _closure3_slot0;
                        tango = entity.label;
                        mike['name'] = tango;
                        tango = entity.label;
                        mike['value'] = tango;
                        entity = entity.label;
                        mike['displayName'] = entity;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
 60:
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.hideActionSheet;
                        mike = mike.bind(zulu)();
                        return entity;
                    }
                };
                mike['onPress'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            tango = tango.bind(oscar)(zulu, mike);
            zulu = tango.with;
            mike = {};
            report = _closure1_slot8;
            report = report.CHOICE_LOADING;
            mike['type'] = report;
            entity = function() {
                tango = _closure1_slot9;
                zulu = _closure2_slot5;
                mike = {};
                oscar = _closure1_slot5;
                report = {};
                golf = _closure2_slot3;
                golf = golf.commandChoiceLoadingContainer;
                report['style'] = golf;
                verify = _closure1_slot9;
                options = _closure1_slot5;
                golf = {};
                entity = _closure2_slot3;
                offset = entity.commandChoiceLoadingItem;
                entity = new Array(2);
                entity[0] = offset;
                offset = {};
                yankee = _closure2_slot4;
                offset['width'] = yankee;
                entity[1] = offset;
                golf['style'] = entity;
                entity = undefined;
                golf = verify.bind(entity)(options, golf);
                report['children'] = golf;
                report = tango.bind(entity)(oscar, report);
                mike['label'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike, entity);
            entity = mike.exhaustive;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: AutocompleteFailedEmptyState
        entity = _closure1_slot12;
        tango = undefined;
        oscar = entity.bind(tango)();
        zulu = _closure1_slot9;
        golf = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 21;
        entity = verify[entity];
        mike = golf.bind(tango)(entity);
        entity = {};
        oscar = oscar.emptyState;
        entity['style'] = oscar;
        oscar = 22;
        options = verify[oscar];
        options = golf.bind(tango)(options);
        entity['lightSource'] = options;
        oscar = verify[oscar];
        oscar = golf.bind(tango)(oscar);
        entity['darkSource'] = oscar;
        options = _closure1_slot0;
        report = 16;
        oscar = verify[report];
        oscar = options.bind(tango)(oscar);
        golf = oscar.intl;
        oscar = golf.string;
        report = verify[report];
        report = options.bind(tango)(report);
        report = report.t;
        report = report.rTAbPj;
        report = oscar.bind(golf)(report);
        entity['title'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AutoCompleteResultTypes;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    offset = tango.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME;
    tango = 7;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    verify = yankee.bind(entity)(tango);
    options = verify.debounce;
    tango = 9;
    tango = oscar[tango];
    golf = yankee.bind(entity)(tango);
    tango = {'leading': true, 'trailing': true};
    tango = options.bind(verify)(golf, offset, tango);
    var _closure1_slot11 = tango;
    tango = 10;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flex': 1, 'justifyContent': 'center'};
    tango['commandChoiceLoadingContainer'] = verify;
    verify = {};
    offset = 11;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_ACCENT;
    verify['backgroundColor'] = romeo;
    romeo = 16;
    verify['height'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.lg;
    verify['borderRadius'] = offset;
    offset = 'flex-start';
    verify['alignSelf'] = offset;
    tango['commandChoiceLoadingItem'] = verify;
    verify = {};
    offset = 'transparent';
    verify['backgroundColor'] = offset;
    tango['emptyState'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot12 = tango;
    tango = 23;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_launcher/native/options/autocomplete/AppLauncherAutocompleteActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: AppLauncherAutocompleteActionSheet
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            verify = mike.option;
            var _closure2_slot0 = verify;
            entity = mike.initChoice;
            sizing = mike.onChoiceSelect;
            var _closure2_slot1 = sizing;
            report = mike.onDismissAutocompleteSheet;
            result = mike.channel;
            var _closure2_slot2 = result;
            output = mike.activeCommand;
            var _closure2_slot3 = output;
            mike = mike.optionValues;
            var _closure2_slot4 = mike;
            tango = undefined;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            oscar = _closure1_slot4;
            zulu = oscar.useState;
            offset = null;
            yankee = offset == entity;
            options = undefined;
            if(yankee) { _fun00008_ip = 116; continue _fun00007 }
 111:
            options = entity.name;
 116:
            yankee = offset != options;
            entity = '';
            if(!yankee) { _fun00008_ip = 130; continue _fun00007 }
 127:
            entity = options;
 130:
            oscar = zulu.bind(oscar)(entity);
            zulu = _closure1_slot3;
            entity = 2;
            oscar = zulu.bind(tango)(oscar, entity);
            options = 0;
            entity = oscar[options];
            _closure2_slot5 = entity;
            zulu = 1;
            yankee = oscar[zulu];
            oscar = _closure1_slot4;
            zulu = oscar.useRef;
            kilo = zulu.bind(oscar)(offset);
            _closure2_slot6 = kilo;
            oscar = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 12;
            zulu = offset[zulu];
            foxtrot = oscar.bind(tango)(zulu);
            romeo = foxtrot.useStateFromStoresObject;
            zulu = _closure1_slot6;
            offset = new Array(1);
            offset[0] = zulu;
            zulu = result.id;
            oscar = new Array(3);
            oscar[0] = zulu;
            zulu = verify.name;
            oscar[1] = zulu;
            oscar[2] = entity;
            zulu = function() {
                entity = {};
                tango = _closure1_slot6;
                golf = tango.getAutocompleteChoices;
                mike = _closure2_slot2;
                oscar = mike.id;
                report = _closure2_slot0;
                report = report.name;
                zulu = _closure2_slot5;
                zulu = golf.bind(tango)(oscar, report, zulu);
                entity['autocompleteResults'] = zulu;
                zulu = tango.getLastErrored;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                entity['lastErrored'] = mike;
                return entity;
            };
            oscar = romeo.bind(foxtrot)(offset, zulu, oscar);
            zulu = oscar.autocompleteResults;
            _closure2_slot7 = zulu;
            oscar = oscar.lastErrored;
            _closure2_slot8 = oscar;
            foxtrot = _closure1_slot4;
            romeo = foxtrot.useMemo;
            offset = new Array(3);
            offset[0] = entity;
            offset[1] = zulu;
            offset[2] = oscar;
            zulu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = new Array(0);
                    tango = _closure2_slot5;
                    zulu = '';
                    if(!(zulu !== tango)) { _fun00010_ip = 56; continue _fun00009 }
 19:
                    tango = entity.push;
                    zulu = {};
                    report = _closure1_slot8;
                    report = report.LABEL;
                    zulu['type'] = report;
                    report = _closure2_slot5;
                    zulu['label'] = report;
                    zulu = tango.bind(entity)(zulu);
 56:
                    zulu = _closure2_slot7;
                    tango = null;
                    if(!(tango == zulu)) { _fun00010_ip = 167; continue _fun00009 }
 66:
                    zulu = _closure2_slot8;
                    if(zulu) { _fun00010_ip = 167; continue _fun00009 }
 73:
                    report = entity.push;
                    zulu = global;
                    golf = zulu.Array;
                    zulu = golf.prototype;
                    oscar = Object.create(zulu, {constructor: {value: golf}});
                    yankee = 4;
                    romeo = oscar;
                    zulu = new romeo[golf](yankee, offset);
                    golf = zulu instanceof Object ? zulu : oscar;
                    oscar = golf.fill;
                    zulu = {};
                    options = _closure1_slot8;
                    options = options.CHOICE_LOADING;
                    zulu['type'] = options;
                    offset = oscar.bind(golf)(zulu);
                    zulu = new Array(0);
                    verify = 0;
                    yankee = zulu;
                    oscar = arraySpread(yankee, offset, verify);
                    yankee = report;
                    offset = zulu;
                    verify = entity;
                    zulu = apply(yankee, offset, verify);
                    _fun00010_ip = 229; continue _fun00009;
 167:
                    zulu = _closure2_slot7;
                    if(!(tango != zulu)) { _fun00010_ip = 229; continue _fun00009 }
 175:
                    zulu = entity.push;
                    report = _closure2_slot7;
                    tango = report.map;
                    mike = function(argFoo) {
                        entity = {};
                        mike = _closure1_slot8;
                        mike = mike.CHOICE;
                        entity['type'] = mike;
                        mike = argFoo;
                        entity['choice'] = mike;
                        return entity;
                    };
                    offset = tango.bind(report)(mike);
                    mike = new Array(0);
                    verify = 0;
                    yankee = mike;
                    tango = arraySpread(yankee, offset, verify);
                    yankee = zulu;
                    offset = mike;
                    verify = entity;
                    mike = apply(yankee, offset, verify);
 229:
                    return entity;
                }
            };
            foxtrot = romeo.bind(foxtrot)(zulu, offset);
            _closure2_slot9 = foxtrot;
            zulu = foxtrot.length;
            options = options === zulu;
            if(!options) { _fun00008_ip = 338; continue _fun00007 }
 335:
            options = !oscar;
 338:
            romeo = _closure1_slot4;
            offset = romeo.useEffect;
            zulu = new Array(5);
            zulu[0] = result;
            result = verify.name;
            zulu[1] = result;
            zulu[2] = output;
            zulu[3] = mike;
            zulu[4] = entity;
            mike = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    report = _closure1_slot7;
                    tango = report.getGuild;
                    oscar = _closure2_slot2;
                    zulu = oscar.guild_id;
                    report = tango.bind(report)(zulu);
                    tango = _closure1_slot11;
                    zulu = {};
                    entity = _closure2_slot3;
                    zulu['command'] = entity;
                    entity = _closure2_slot4;
                    zulu['optionValues'] = entity;
                    entity = {};
                    entity['channel'] = oscar;
                    entity['guild'] = report;
                    report = {};
                    oscar = _closure2_slot0;
                    oscar = oscar.name;
                    report['name'] = oscar;
                    oscar = _closure2_slot5;
                    report['query'] = oscar;
                    entity['autocomplete'] = report;
                    zulu['context'] = entity;
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    mike = _closure2_slot6;
                    tango = mike.current;
                    mike = null;
                    if(!(mike != tango)) { _fun00012_ip = 138; continue _fun00011 }
 117:
                    zulu = tango.scrollToOffset;
                    mike = {'offset': 0, 'animated': false};
                    mike = zulu.bind(tango)(mike);
 138:
                    return entity;
                }
            };
            mike = offset.bind(romeo)(mike, zulu);
            romeo = _closure1_slot4;
            offset = romeo.useCallback;
            zulu = new Array(2);
            zulu[0] = sizing;
            zulu[1] = foxtrot;
            mike = function(argFoo) {
                entity = argFoo;
                report = entity.item;
                entity = entity.index;
                tango = _closure1_slot9;
                zulu = _closure1_slot13;
                mike = {};
                mike['item'] = report;
                mike['index'] = entity;
                report = _closure2_slot1;
                mike['onChoiceSelect'] = report;
                entity = _closure2_slot9;
                mike['choices'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            romeo = offset.bind(romeo)(mike, zulu);
            offset = _closure1_slot4;
            zulu = offset.useCallback;
            mike = new Array(2);
            mike[0] = sizing;
            mike[1] = entity;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot5;
                    mike = '';
                    if(!(mike !== zulu)) { _fun00014_ip = 97; continue _fun00013 }
 15:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun00014_ip = 62; continue _fun00013 }
 25:
                    zulu = _closure2_slot1;
                    mike = {};
                    tango = _closure2_slot5;
                    mike['name'] = tango;
                    tango = _closure2_slot5;
                    mike['value'] = tango;
                    entity = _closure2_slot5;
                    mike['displayName'] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 62:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.hideActionSheet;
                    entity = entity.bind(mike)();
 97:
                    entity = undefined;
                    return entity;
                }
            };
            output = zulu.bind(offset)(entity, mike);
            zulu = _closure1_slot10;
            source = _closure1_slot0;
            control = _closure1_slot2;
            entity = 14;
            entity = control[entity];
            entity = source.bind(tango)(entity);
            mike = entity.AppLauncherCommandOptionActionSheet;
            entity = {};
            entity['option'] = verify;
            entity['onDismiss'] = report;
            offset = _closure1_slot9;
            sizing = 15;
            report = control[sizing];
            report = source.bind(tango)(report);
            verify = report.AppLauncherListSearchBar;
            report = {};
            result = 16;
            echo = control[result];
            echo = source.bind(tango)(echo);
            update = echo.intl;
            echo = update.string;
            result = control[result];
            result = source.bind(tango)(result);
            result = result.t;
            result = result.Wuie9P;
            result = echo.bind(update)(result);
            report['placeholder'] = result;
            report['onChange'] = yankee;
            yankee = true;
            report['autoFocus'] = yankee;
            result = 'done';
            report['returnKeyType'] = result;
            report['onSubmitEditing'] = output;
            verify = offset.bind(tango)(verify, report);
            report = new Array(4);
            report[0] = verify;
            if(!options) { _fun00008_ip = 655; continue _fun00007 }
 620:
            output = _closure1_slot9;
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            verify = verify[sizing];
            verify = offset.bind(tango)(verify);
            offset = verify.AppLauncherListEmptyState;
            verify = {};
            options = output.bind(tango)(offset, verify);
 655:
            report[1] = options;
            offset = _closure1_slot9;
            verify = _closure1_slot0;
            options = _closure1_slot2;
            options = options[sizing];
            options = verify.bind(tango)(options);
            verify = options.AppLauncherList;
            options = {};
            options['ref'] = kilo;
            backup = function(argFoo, argBar) { // Original name: keyExtractor
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.type;
                    mike = _closure1_slot8;
                    mike = mike.CHOICE;
                    report = 'placeholder';
                    if(!(zulu === mike)) { _fun00016_ip = 40; continue _fun00015 }
 29:
                    entity = entity.choice;
                    report = entity.name;
 40:
                    entity = global;
                    entity = entity.HermesInternal;
                    tango = entity.concat;
                    zulu = '';
                    mike = '_';
                    entity = argBar;
                    entity = tango.bind(zulu)(report, mike, entity);
                    return entity;
                }
            };
            options['keyExtractor'] = backup;
            options['data'] = foxtrot;
            options['renderItem'] = romeo;
            options['scrollEnabled'] = yankee;
            options = offset.bind(tango)(verify, options);
            report[2] = options;
            if(!oscar) { _fun00008_ip = 747; continue _fun00007 }
 731:
            verify = _closure1_slot9;
            options = _closure1_slot14;
            golf = {};
            oscar = verify.bind(tango)(options, golf);
 747:
            report[3] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();