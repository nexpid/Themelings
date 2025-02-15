// app/modules/emoji_picker/native/components/EmojiPickerListRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        foxtrot = argBaz;
        zulu = argFred;
        oscar = argPlugh;
        var _closure1_slot0 = report;
        var _closure1_slot1 = foxtrot;
        var _closure1_slot2 = oscar;
        entity = function(argFoo, argBar) { // Original name: getEmojiItemUrl
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = argFoo;
                golf = argBar;
                entity = zulu.id;
                mike = null;
                if(!(mike != entity)) { _fun00004_ip = 88; continue _fun00003 }
 17:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                entity = 10;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.getEmojiURL;
                entity = {};
                options = zulu.id;
                entity['id'] = options;
                if(!golf) { _fun00004_ip = 68; continue _fun00003 }
 62:
                golf = zulu.animated;
 68:
                entity['animated'] = golf;
                oscar = _closure1_slot5;
                entity['size'] = oscar;
                entity = tango.bind(report)(entity);
                _fun00004_ip = 110; continue _fun00003;
 88:
                zulu = zulu.url;
                tango = mike != zulu;
                mike = '';
                if(!tango) { _fun00004_ip = 107; continue _fun00003 }
 104:
                mike = zulu;
 107:
                entity = mike;
 110:
                return entity;
            }
        };
        var _closure1_slot12 = entity;
        entity = function() { // Original name: EmojiItemLockedOverlay
            entity = _closure1_slot9;
            tango = undefined;
            options = entity.bind(tango)();
            zulu = _closure1_slot7;
            mike = _closure1_slot3;
            entity = {};
            oscar = options.lockContainer;
            entity['style'] = oscar;
            golf = _closure1_slot7;
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            report = 11;
            report = verify[report];
            report = oscar.bind(tango)(report);
            oscar = report.LockIcon;
            report = {};
            options = options.lock;
            report['style'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        var _closure1_slot13 = entity;
        entity = function(argFoo) { // Original name: EmojiItem
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                offset = entity.emoji;
                var _closure2_slot0 = offset;
                mike = entity.category;
                var _closure2_slot1 = mike;
                oscar = entity.disabled;
                mike = entity.onPressEmoji;
                var _closure2_slot2 = mike;
                mike = entity.onLongPressEmoji;
                var _closure2_slot3 = mike;
                zulu = entity.animateEmoji;
                entity = entity.isSectionNitroLocked;
                mike = _closure1_slot9;
                tango = undefined;
                yankee = mike.bind(tango)();
                mike = _closure1_slot12;
                romeo = mike.bind(tango)(offset, zulu);
                if(!oscar) { _fun00006_ip = 90; continue _fun00005 }
 87:
                oscar = !entity;
 90:
                zulu = _closure1_slot8;
                mike = _closure1_slot0;
                options = _closure1_slot2;
                entity = 12;
                entity = options[entity];
                entity = mike.bind(tango)(entity);
                mike = entity.PressableOpacity;
                entity = {};
                options = 'button';
                entity['accessibilityRole'] = options;
                options = offset.name;
                entity['accessibilityLabel'] = options;
                verify = yankee.surrogatesFrame;
                options = new Array(2);
                options[0] = verify;
                verify = oscar;
                if(!oscar) { _fun00006_ip = 165; continue _fun00005 }
 159:
                verify = yankee.disabledOverlay;
 165:
                options[1] = verify;
                entity['style'] = options;
                options = function() { // Original name: onPress
                    tango = _closure2_slot2;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                entity['onPress'] = options;
                report = function() { // Original name: onLongPress
                    zulu = _closure2_slot3;
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    return entity;
                };
                entity['onLongPress'] = report;
                options = offset.id;
                report = null;
                if(!(report == options)) { _fun00006_ip = 275; continue _fun00005 }
 207:
                verify = _closure1_slot7;
                options = _closure1_slot0;
                foxtrot = _closure1_slot2;
                report = 17;
                report = foxtrot[report];
                report = options.bind(tango)(report);
                options = report.LegacyText;
                report = {};
                foxtrot = false;
                report['allowFontScaling'] = foxtrot;
                foxtrot = yankee.surrogates;
                report['style'] = foxtrot;
                offset = offset.surrogates;
                report['children'] = offset;
                options = verify.bind(tango)(options, report);
                _fun00006_ip = 423; continue _fun00005;
 275:
                offset = _closure1_slot7;
                verify = _closure1_slot1;
                backup = _closure1_slot2;
                report = 13;
                report = backup[report];
                verify = verify.bind(tango)(report);
                report = {};
                foxtrot = 'contain';
                report['resizeMode'] = foxtrot;
                yankee = yankee.image;
                report['style'] = yankee;
                foxtrot = _closure1_slot0;
                yankee = 14;
                yankee = backup[yankee];
                backup = foxtrot.bind(tango)(yankee);
                foxtrot = backup.isThemeDark;
                yankee = _closure1_slot4;
                yankee = yankee.theme;
                yankee = foxtrot.bind(backup)(yankee);
                backup = _closure1_slot1;
                kilo = _closure1_slot2;
                if(yankee) { _fun00006_ip = 382; continue _fun00005 }
 368:
                yankee = 16;
                yankee = kilo[yankee];
                yankee = backup.bind(tango)(yankee);
                _fun00006_ip = 394; continue _fun00005;
 382:
                foxtrot = 15;
                foxtrot = kilo[foxtrot];
                yankee = backup.bind(tango)(foxtrot);
 394:
                report['placeholder'] = yankee;
                yankee = {};
                yankee['uri'] = romeo;
                report['source'] = yankee;
                yankee = true;
                report['usesSmallCache'] = yankee;
                options = offset.bind(tango)(verify, report);
 423:
                report = new Array(2);
                report[0] = options;
                if(!oscar) { _fun00006_ip = 450; continue _fun00005 }
 434:
                verify = _closure1_slot7;
                options = _closure1_slot13;
                golf = {};
                oscar = verify.bind(tango)(options, golf);
 450:
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
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
        golf = oscar[entity];
        tango = argCorge;
        entity = undefined;
        golf = tango.bind(entity)(golf);
        tango = 1;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        options = tango.View;
        var _closure1_slot3 = options;
        yankee = tango.StyleSheet;
        tango = 2;
        tango = oscar[tango];
        tango = foxtrot.bind(entity)(tango);
        var _closure1_slot4 = tango;
        tango = 3;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        backup = tango.IMAGE_SIZE;
        var _closure1_slot5 = backup;
        romeo = tango.ROW_HEIGHT;
        tango = 4;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.PADDING_VERTICAL;
        var _closure1_slot6 = tango;
        tango = 5;
        options = oscar[tango];
        options = report.bind(entity)(options);
        options = options.jsx;
        var _closure1_slot7 = options;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.jsxs;
        var _closure1_slot8 = tango;
        tango = 6;
        tango = oscar[tango];
        verify = report.bind(entity)(tango);
        options = verify.createStyles;
        tango = {};
        offset = {};
        offset['height'] = backup;
        offset['width'] = backup;
        tango['image'] = offset;
        offset = {};
        offset['height'] = backup;
        offset['width'] = backup;
        backup = 'center';
        offset['alignItems'] = backup;
        offset['justifyContent'] = backup;
        tango['surrogatesFrame'] = offset;
        offset = {};
        backup = 7;
        backup = oscar[backup];
        backup = foxtrot.bind(entity)(backup);
        backup = backup.radii;
        backup = backup.sm;
        offset['borderRadius'] = backup;
        backup = 'hidden';
        offset['overflow'] = backup;
        tango['disabledOverlay'] = offset;
        offset = {};
        backup = 8;
        backup = oscar[backup];
        kilo = report.bind(entity)(backup);
        backup = kilo.isAndroid;
        kilo = backup.bind(kilo)();
        backup = 30;
        if(!kilo) { _fun00002_ip = 375; continue _fun00001 }
 372:
        backup = 26;
 375:
        offset['fontSize'] = backup;
        tango['surrogates'] = offset;
        offset = {'height': null, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
        offset['height'] = romeo;
        tango['row'] = offset;
        offset = {'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
        romeo = 9;
        romeo = oscar[romeo];
        foxtrot = foxtrot.bind(entity)(romeo);
        romeo = '#000000';
        backup = foxtrot.bind(entity)(romeo);
        foxtrot = backup.alpha;
        romeo = 0.2;
        foxtrot = foxtrot.bind(backup)(romeo);
        romeo = foxtrot.hex;
        romeo = romeo.bind(foxtrot)();
        offset['backgroundColor'] = romeo;
        output = yankee.absoluteFillObject;
        result = offset;
        yankee = copyDataProperties(result, output);
        tango['lockContainer'] = offset;
        offset = {'width': 16, 'height': 16, 'tintColor': 'white'};
        tango['lock'] = offset;
        tango = options.bind(verify)(tango);
        var _closure1_slot9 = tango;
        options = golf.memo;
        tango = function(argFoo) {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = argFoo;
                echo = mike.emojis;
                var _closure2_slot0 = echo;
                result = mike.emojisDisabled;
                entity = mike.category;
                var _closure2_slot1 = entity;
                output = mike.rowSize;
                offset = mike.containerWidth;
                entity = mike.row;
                zulu = mike.onPressEmoji;
                var _closure2_slot2 = zulu;
                zulu = mike.onLongPressEmoji;
                var _closure2_slot3 = zulu;
                sizing = mike.animateEmoji;
                golf = mike.isSectionNitroLocked;
                mike = _closure1_slot9;
                tango = undefined;
                oscar = mike.bind(tango)();
                options = new Array(0);
                kilo = entity * output;
                entity = kilo + output;
                backup = null;
                foxtrot = '';
                romeo = true;
                yankee = undefined;
                zulu = undefined;
                mike = kilo;
                if(!(mike < entity)) { _fun00008_ip = 311; continue _fun00007 }
 127:
                sequence = echo[mike];
                if(!(tango !== sequence)) { _fun00008_ip = 261; continue _fun00007 }
 138:
                control = options.push;
                entity = {};
                source = sequence.id;
                vacuum = backup != source;
                update = null;
                if(!vacuum) { _fun00008_ip = 162; continue _fun00007 }
 159:
                update = source;
 162:
                entity['id'] = update;
                update = sequence.name;
                config = backup != update;
                vacuum = foxtrot;
                if(!config) { _fun00008_ip = 184; continue _fun00007 }
 181:
                vacuum = update;
 184:
                entity['name'] = vacuum;
                vacuum = _closure1_slot12;
                vacuum = vacuum.bind(tango)(sequence, sizing);
                entity['url'] = vacuum;
                vacuum = sequence.animated;
                vacuum = romeo === vacuum;
                if(!vacuum) { _fun00008_ip = 218; continue _fun00007 }
 215:
                vacuum = sizing;
 218:
                entity['animated'] = vacuum;
                vacuum = sequence.id;
                vacuum = backup != vacuum;
                if(!vacuum) { _fun00008_ip = 250; continue _fun00007 }
 235:
                config = result.has;
                sequence = sequence.id;
                vacuum = config.bind(result)(sequence);
 250:
                entity['disabled'] = vacuum;
                entity = control.bind(options)(entity);
                _fun00008_ip = 291; continue _fun00007;
 261:
                control = options.push;
                entity = {'id': null, 'name': '', 'url': '', 'animated': false, 'disabled': false};
                entity = control.bind(options)(entity);
                source = yankee;
                update = zulu;
 291:
                mike = mike + 1;
                entity = kilo + output;
                yankee = source;
                zulu = update;
                if(mike < entity) { _fun00008_ip = 127; continue _fun00007 }
 311:
                zulu = _closure1_slot7;
                mike = _closure1_slot1;
                yankee = _closure1_slot2;
                entity = 18;
                entity = yankee[entity];
                mike = mike.bind(tango)(entity);
                entity = {};
                oscar = oscar.row;
                entity['style'] = oscar;
                oscar = {};
                oscar['rowContentWidth'] = offset;
                offset = _closure1_slot6;
                oscar['rowContentPaddingVertical'] = offset;
                verify = _closure1_slot5;
                oscar['itemSize'] = verify;
                oscar['items'] = options;
                oscar['isSectionNitroLocked'] = golf;
                entity['rowData'] = oscar;
                oscar = function(argFoo) { // Original name: onPressEmoji
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        entity = argFoo;
                        var _closure3_slot0 = entity;
                        tango = _closure2_slot0;
                        zulu = tango.find;
                        mike = function(argFoo) {
                            entity = argFoo;
                            mike = entity.name;
                            entity = _closure3_slot0;
                            entity = entity.nativeEvent;
                            entity = entity.emojiName;
                            entity = mike === entity;
                            return entity;
                        };
                        tango = zulu.bind(tango)(mike);
                        mike = null;
                        if(!(mike != tango)) { _fun00010_ip = 55; continue _fun00009 }
 39:
                        zulu = _closure2_slot2;
                        mike = _closure2_slot1;
                        entity = undefined;
                        entity = zulu.bind(entity)(tango, mike);
 55:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onPressEmoji'] = oscar;
                report = function(argFoo) { // Original name: onLongPressEmoji
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        var _closure3_slot0 = entity;
                        tango = _closure2_slot0;
                        zulu = tango.find;
                        mike = function(argFoo) {
                            entity = argFoo;
                            mike = entity.name;
                            entity = _closure3_slot0;
                            entity = entity.nativeEvent;
                            entity = entity.emojiName;
                            entity = mike === entity;
                            return entity;
                        };
                        zulu = zulu.bind(tango)(mike);
                        mike = null;
                        if(!(mike != zulu)) { _fun00012_ip = 50; continue _fun00011 }
 39:
                        mike = _closure2_slot3;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
 50:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['onLongPressEmoji'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        tango = options.bind(golf)(tango);
        var _closure1_slot10 = tango;
        options = golf.memo;
        tango = function(argFoo) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                sizing = entity.emojis;
                kilo = entity.emojisDisabled;
                backup = entity.category;
                foxtrot = entity.rowSize;
                mike = entity.row;
                romeo = entity.onPressEmoji;
                yankee = entity.onLongPressEmoji;
                offset = entity.animateEmoji;
                verify = entity.isSectionNitroLocked;
                zulu = _closure1_slot9;
                tango = undefined;
                oscar = zulu.bind(tango)();
                report = new Array(0);
                options = mike * foxtrot;
                mike = options + foxtrot;
                golf = null;
                zulu = options;
                if(!(zulu < mike)) { _fun00014_ip = 241; continue _fun00013 }
 93:
                source = sizing[zulu];
                if(!(tango !== source)) { _fun00014_ip = 190; continue _fun00013 }
 101:
                output = report.push;
                echo = _closure1_slot7;
                result = _closure1_slot14;
                mike = {};
                mike['emoji'] = source;
                mike['category'] = backup;
                mike['animateEmoji'] = offset;
                update = source.id;
                update = golf != update;
                if(!update) { _fun00014_ip = 157; continue _fun00013 }
 142:
                control = kilo.has;
                source = source.id;
                update = control.bind(kilo)(source);
 157:
                mike['disabled'] = update;
                mike['onPressEmoji'] = romeo;
                mike['onLongPressEmoji'] = yankee;
                mike['isSectionNitroLocked'] = verify;
                mike = echo.bind(tango)(result, mike, zulu);
                mike = output.bind(report)(mike);
                _fun00014_ip = 227; continue _fun00013;
 190:
                output = report.push;
                echo = _closure1_slot7;
                result = _closure1_slot3;
                mike = {};
                update = oscar.image;
                mike['style'] = update;
                mike = echo.bind(tango)(result, mike, zulu);
                mike = output.bind(report)(mike);
 227:
                zulu = zulu + 1;
                mike = options + foxtrot;
                if(zulu < mike) { _fun00014_ip = 93; continue _fun00013 }
 241:
                zulu = _closure1_slot7;
                mike = _closure1_slot3;
                entity = {};
                oscar = oscar.row;
                entity['style'] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        tango = options.bind(golf)(tango);
        var _closure1_slot11 = tango;
        tango = golf.memo;
        mike = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                report = argFoo;
                mike = report.nativeRow;
                tango = undefined;
                if(!(mike === tango)) { _fun00016_ip = 47; continue _fun00015 }
 15:
                zulu = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 8;
                entity = oscar[entity];
                zulu = zulu.bind(tango)(entity);
                entity = zulu.isAndroid;
                mike = entity.bind(zulu)();
 47:
                entity = null;
                zulu = Object.create(entity);
                entity = 0;
                zulu['nativeRow'] = entity;
                verify = {};
                options = report;
                golf = zulu;
                report = copyDataProperties(verify, options, golf);
                zulu = _closure1_slot7;
                if(mike) { _fun00016_ip = 87; continue _fun00015 }
 81:
                mike = _closure1_slot11;
                _fun00016_ip = 91; continue _fun00015;
 87:
                mike = _closure1_slot10;
 91:
                entity = {};
                verify = entity;
                options = report;
                report = copyDataProperties(verify, options);
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        mike = tango.bind(golf)(mike);
        tango = 19;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/emoji_picker/native/components/EmojiPickerListRow.tsx';
        tango = report.bind(oscar)(tango);
        zulu['EmojiPickerListRow'] = mike;
        return entity;
    }
})();