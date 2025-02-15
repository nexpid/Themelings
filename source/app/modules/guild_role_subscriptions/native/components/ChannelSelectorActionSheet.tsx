// app/modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot16;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot16;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: ChannelRow
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            romeo = mike.channel;
            var _closure2_slot0 = romeo;
            options = mike.onChannelSelected;
            var _closure2_slot1 = options;
            oscar = mike.selected;
            mike = _closure1_slot14;
            tango = undefined;
            offset = mike.bind(tango)();
            report = _closure1_slot4;
            zulu = report.useCallback;
            mike = new Array(2);
            mike[0] = options;
            mike[1] = romeo;
            entity = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hideActionSheet;
                mike = mike.bind(zulu)();
                zulu = _closure2_slot1;
                mike = _closure2_slot0;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            yankee = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot13;
            mike = _closure1_slot12;
            entity = {};
            verify = _closure1_slot11;
            options = _closure1_slot1;
            foxtrot = _closure1_slot2;
            report = 13;
            report = foxtrot[report];
            options = options.bind(tango)(report);
            report = {};
            foxtrot = offset.channelRow;
            report['style'] = foxtrot;
            report['onPress'] = yankee;
            yankee = true;
            report['accessible'] = yankee;
            foxtrot = romeo.name;
            report['accessibilityLabel'] = foxtrot;
            report['channel'] = romeo;
            report['selected'] = oscar;
            report['disableHighlightOnPress'] = yankee;
            yankee = _closure1_slot10;
            yankee = yankee.ONLY_MENTIONS;
            report['resolvedUnreadSetting'] = yankee;
            options = verify.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            if(!oscar) { _fun00008_ip = 247; continue _fun00007 }
 189:
            verify = _closure1_slot11;
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            golf = 14;
            golf = romeo[golf];
            options = yankee.bind(tango)(golf);
            golf = {};
            offset = offset.selectedIcon;
            golf['style'] = offset;
            offset = 15;
            offset = romeo[offset];
            offset = yankee.bind(tango)(offset);
            golf['source'] = offset;
            oscar = verify.bind(tango)(options, golf);
 247:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
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
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Permissions;
    var _closure1_slot9 = golf;
    romeo = tango.Fonts;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot10 = tango;
    foxtrot = 8;
    tango = oscar[foxtrot];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot11 = tango;
    tango = oscar[foxtrot];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot12 = tango;
    tango = oscar[foxtrot];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot13 = tango;
    tango = 9;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'backgroundColor': null, 'padding': 16, 'width': '100%'};
    offset = 10;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = backup;
    sizing = 16;
    tango['titleContainer'] = verify;
    verify = {'backgroundColor': null, 'padding': 16, 'width': '100%'};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = backup;
    tango['searchContainer'] = verify;
    verify = {'alignItems': 'center', 'backgroundColor': null, 'flexDirection': 'row', 'padding': 16};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = backup;
    tango['createChannelButton'] = verify;
    verify = {};
    backup = 11;
    backup = oscar[backup];
    kilo = yankee.bind(entity)(backup);
    backup = romeo.PRIMARY_MEDIUM;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.TEXT_LINK;
    result = kilo.bind(entity)(backup, romeo, sizing);
    echo = verify;
    romeo = copyDataProperties(echo, result);
    romeo = 'marginStart';
    verify[romeo] = foxtrot;
    tango['createChannelLabel'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = offset;
    tango['bodyContainer'] = verify;
    verify = {'paddingHorizontal': 8, 'paddingVertical': 4};
    tango['channelRow'] = verify;
    verify = {'end': 16, 'top': 10, 'position': 'absolute'};
    tango['selectedIcon'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/native/components/ChannelSelectorActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ChannelSelectorActionSheet
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            yankee = entity.guildId;
            var _closure2_slot0 = yankee;
            mike = entity.onChannelSelected;
            var _closure2_slot1 = mike;
            mike = entity.selectedChannelId;
            var _closure2_slot2 = mike;
            update = entity.title;
            foxtrot = entity.hideCreateChannel;
            tango = undefined;
            if(!(foxtrot === tango)) { _fun00010_ip = 55; continue _fun00009 }
 53:
            foxtrot = false;
 55:
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            entity = _closure1_slot14;
            offset = entity.bind(tango)();
            zulu = _closure1_slot4;
            mike = zulu.useState;
            entity = '';
            zulu = mike.bind(zulu)(entity);
            mike = _closure1_slot3;
            entity = 2;
            zulu = mike.bind(tango)(zulu, entity);
            entity = 0;
            entity = zulu[entity];
            _closure2_slot3 = entity;
            mike = 1;
            control = zulu[mike];
            zulu = _closure1_slot4;
            mike = zulu.useRef;
            source = null;
            oscar = mike.bind(zulu)(source);
            _closure2_slot4 = oscar;
            output = _closure1_slot0;
            sizing = _closure1_slot2;
            mike = 16;
            mike = sizing[mike];
            verify = output.bind(tango)(mike);
            golf = verify.useStateFromStoresArray;
            mike = _closure1_slot7;
            zulu = new Array(2);
            zulu[0] = mike;
            mike = _closure1_slot8;
            zulu[1] = mike;
            mike = new Array(2);
            mike[0] = yankee;
            mike[1] = entity;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = new Array(0);
                    tango = _closure1_slot7;
                    zulu = tango.getCategories;
                    mike = _closure2_slot0;
                    options = zulu.bind(tango)(mike);
                    zulu = _closure1_slot15;
                    mike = options._categories;
                    golf = undefined;
                    oscar = zulu.bind(golf)(mike);
                    zulu = oscar.bind(golf)();
                    mike = zulu.done;
                    report = '';
                    tango = zulu;
                    zulu = undefined;
                    if(mike) { _fun00012_ip = 241; continue _fun00011 }
 70:
                    yankee = _closure1_slot15;
                    mike = tango.value;
                    mike = mike.channel;
                    mike = mike.id;
                    mike = options[mike];
                    romeo = yankee.bind(golf)(mike);
                    yankee = romeo.bind(golf)();
                    mike = yankee.done;
                    if(mike) { _fun00012_ip = 223; continue _fun00011 }
 110:
                    foxtrot = yankee.value;
                    sizing = _closure1_slot8;
                    kilo = sizing.can;
                    mike = _closure1_slot9;
                    backup = mike.VIEW_CHANNEL;
                    mike = foxtrot.channel;
                    mike = kilo.bind(sizing)(backup, mike);
                    if(!mike) { _fun00012_ip = 187; continue _fun00011 }
 149:
                    backup = _closure2_slot3;
                    backup = report === backup;
                    if(backup) { _fun00012_ip = 184; continue _fun00011 }
 160:
                    kilo = foxtrot.channel;
                    output = kilo.name;
                    sizing = output.includes;
                    kilo = _closure2_slot3;
                    backup = sizing.bind(output)(kilo);
 184:
                    mike = backup;
 187:
                    if(!mike) { _fun00012_ip = 205; continue _fun00011 }
 190:
                    backup = entity.push;
                    mike = foxtrot.channel;
                    mike = backup.bind(entity)(mike);
 205:
                    backup = romeo.bind(golf)();
                    mike = backup.done;
                    yankee = backup;
                    zulu = foxtrot;
                    if(!mike) { _fun00012_ip = 110; continue _fun00011 }
 223:
                    yankee = oscar.bind(golf)();
                    mike = yankee.done;
                    tango = yankee;
                    if(!mike) { _fun00012_ip = 70; continue _fun00011 }
 241:
                    return entity;
                }
            };
            verify = golf.bind(verify)(zulu, entity, mike);
            zulu = _closure1_slot11;
            entity = 17;
            entity = sizing[entity];
            entity = output.bind(tango)(entity);
            mike = entity.ActionSheet;
            entity = {};
            golf = true;
            entity['scrollable'] = golf;
            entity['ref'] = oscar;
            yankee = _closure1_slot13;
            golf = _closure1_slot12;
            oscar = {};
            kilo = _closure1_slot11;
            backup = _closure1_slot5;
            romeo = {};
            result = offset.titleContainer;
            romeo['style'] = result;
            echo = _closure1_slot11;
            result = 18;
            sizing = sizing[result];
            sizing = output.bind(tango)(sizing);
            output = sizing.Text;
            sizing = {'accessibilityRole': 'header', 'variant': 'text-md/bold', 'color': 'header-primary'};
            if(!(source == update)) { _fun00010_ip = 373; continue _fun00009 }
 318:
            record = _closure1_slot0;
            context = _closure1_slot2;
            vacuum = 19;
            sequence = context[vacuum];
            sequence = record.bind(tango)(sequence);
            config = sequence.intl;
            sequence = config.string;
            vacuum = context[vacuum];
            vacuum = record.bind(tango)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.PDn2fX;
            update = sequence.bind(config)(vacuum);
 373:
            sizing['children'] = update;
            sizing = echo.bind(tango)(output, sizing);
            romeo['children'] = sizing;
            backup = kilo.bind(tango)(backup, romeo);
            romeo = new Array(3);
            romeo[0] = backup;
            sizing = _closure1_slot11;
            kilo = _closure1_slot5;
            backup = {};
            output = offset.searchContainer;
            backup['style'] = output;
            update = _closure1_slot11;
            context = _closure1_slot0;
            vacuum = _closure1_slot2;
            output = 20;
            output = vacuum[output];
            output = context.bind(tango)(output);
            echo = output.SearchField;
            output = {};
            sequence = 'md';
            output['size'] = sequence;
            config = 19;
            sequence = vacuum[config];
            sequence = context.bind(tango)(sequence);
            record = sequence.intl;
            sequence = record.string;
            vacuum = vacuum[config];
            vacuum = context.bind(tango)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.UTYBjY;
            vacuum = sequence.bind(record)(vacuum);
            output['placeholder'] = vacuum;
            output['onChange'] = control;
            control = function() { // Original name: onFocus
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot4;
                    zulu = entity.current;
                    entity = null;
                    mike = entity == zulu;
                    entity = undefined;
                    if(mike) { _fun00014_ip = 33; continue _fun00013 }
 23:
                    mike = zulu.expandActionSheet;
                    entity = mike.bind(zulu)();
 33:
                    return entity;
                }
            };
            output['onFocus'] = control;
            output = update.bind(tango)(echo, output);
            backup['children'] = output;
            backup = sizing.bind(tango)(kilo, backup);
            romeo[1] = backup;
            foxtrot = !foxtrot;
            if(!foxtrot) { _fun00010_ip = 829; continue _fun00009 }
 559:
            sizing = _closure1_slot13;
            kilo = _closure1_slot0;
            control = _closure1_slot2;
            backup = 21;
            backup = control[backup];
            backup = kilo.bind(tango)(backup);
            kilo = backup.PressableOpacity;
            backup = {};
            output = offset.createChannelButton;
            backup['style'] = output;
            output = 'button';
            backup['accessibilityRole'] = output;
            output = function() { // Original name: onPress
                golf = _closure1_slot1;
                options = _closure1_slot2;
                entity = 12;
                zulu = options[entity];
                entity = undefined;
                tango = golf.bind(entity)(zulu);
                zulu = tango.hideActionSheet;
                zulu = zulu.bind(tango)();
                zulu = 22;
                zulu = options[zulu];
                oscar = golf.bind(entity)(zulu);
                report = oscar.pushLazy;
                verify = _closure1_slot0;
                mike = 24;
                mike = options[mike];
                tango = verify.bind(entity)(mike);
                mike = 23;
                zulu = options[mike];
                mike = options.paths;
                tango = tango.bind(entity)(zulu, mike);
                zulu = {};
                mike = _closure2_slot0;
                zulu['guildId'] = mike;
                mike = 25;
                mike = options[mike];
                mike = verify.bind(entity)(mike);
                mike = mike.CreateChannelMode;
                mike = mike.PREMIUM_CHANNEL;
                zulu['createMode'] = mike;
                mike = function(argFoo) { // Original name: onChannelCreated
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 26;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.close;
                        zulu = zulu.bind(tango)();
                        tango = _closure1_slot6;
                        zulu = tango.getChannel;
                        mike = argFoo;
                        zulu = zulu.bind(tango)(mike);
                        mike = null;
                        if(!(mike != zulu)) { _fun00016_ip = 70; continue _fun00015 }
 58:
                        mike = _closure2_slot1;
                        mike = mike.bind(entity)(zulu);
 70:
                        return entity;
                    }
                };
                zulu['onChannelCreated'] = mike;
                mike = 26;
                mike = options[mike];
                mike = golf.bind(entity)(mike);
                mike = mike.CREATE_CHANNEL_MODAL_KEY;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            backup['onPress'] = output;
            update = _closure1_slot11;
            echo = _closure1_slot1;
            output = 27;
            output = control[output];
            echo = echo.bind(tango)(output);
            output = {};
            control = offset.createChannelLabel;
            vacuum = control.color;
            control = source == vacuum;
            source = undefined;
            if(control) { _fun00010_ip = 671; continue _fun00009 }
 662:
            control = vacuum.toString;
            source = control.bind(vacuum)();
 671:
            output['color'] = source;
            vacuum = _closure1_slot1;
            source = _closure1_slot2;
            control = 28;
            control = source[control];
            control = vacuum.bind(tango)(control);
            output['source'] = control;
            echo = update.bind(tango)(echo, output);
            output = new Array(2);
            output[0] = echo;
            update = _closure1_slot11;
            sequence = _closure1_slot0;
            result = source[result];
            result = sequence.bind(tango)(result);
            echo = result.Text;
            result = {'style': null, 'variant': 'text-md/medium', 'color': 'text-link'};
            control = offset.createChannelLabel;
            result['style'] = control;
            control = source[config];
            control = sequence.bind(tango)(control);
            vacuum = control.intl;
            control = vacuum.string;
            source = source[config];
            source = sequence.bind(tango)(source);
            source = source.t;
            source = source.d7AN7e;
            source = control.bind(vacuum)(source);
            result['children'] = source;
            result = update.bind(tango)(echo, result);
            output[1] = result;
            backup['children'] = output;
            foxtrot = sizing.bind(tango)(kilo, backup);
 829:
            romeo[2] = foxtrot;
            oscar['children'] = romeo;
            oscar = yankee.bind(tango)(golf, oscar);
            entity['header'] = oscar;
            golf = _closure1_slot11;
            oscar = _closure1_slot0;
            yankee = _closure1_slot2;
            report = 29;
            report = yankee[report];
            report = oscar.bind(tango)(report);
            oscar = report.BottomSheetFlatList;
            report = {};
            offset = offset.bodyContainer;
            report['style'] = offset;
            report['data'] = verify;
            verify = function(argFoo) { // Original name: keyExtractor
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            report['keyExtractor'] = verify;
            options = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                report = entity.item;
                tango = _closure1_slot11;
                zulu = _closure1_slot17;
                mike = {};
                mike['channel'] = report;
                oscar = _closure2_slot1;
                mike['onChannelSelected'] = oscar;
                report = report.id;
                entity = _closure2_slot2;
                entity = report === entity;
                mike['selected'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            report['renderItem'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();