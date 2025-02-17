// app/modules/user_profile/native/UserProfileEditTheme.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ColorSwatch
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            update = entity.color;
            verify = entity.label;
            foxtrot = entity.accessibilityLabel;
            romeo = entity.onPress;
            backup = entity.style;
            entity = _closure1_slot6;
            tango = undefined;
            kilo = entity.bind(tango)();
            golf = _closure1_slot0;
            entity = _closure1_slot2;
            result = 5;
            mike = entity[result];
            report = golf.bind(tango)(mike);
            zulu = report.getContrast;
            mike = entity[result];
            offset = golf.bind(tango)(mike);
            options = offset.hex2int;
            mike = _closure1_slot7;
            mike = options.bind(offset)(mike);
            mike = zulu.bind(report)(update, mike);
            zulu = entity[result];
            report = golf.bind(tango)(zulu);
            zulu = report.getContrast;
            entity = entity[result];
            options = golf.bind(tango)(entity);
            golf = options.hex2int;
            entity = _closure1_slot8;
            entity = golf.bind(options)(entity);
            entity = zulu.bind(report)(update, entity);
            if(!(!(mike > entity))) { _fun00002_ip = 152; continue _fun00001 }
 146:
            sizing = _closure1_slot8;
            _fun00002_ip = 156; continue _fun00001;
 152:
            sizing = _closure1_slot7;
 156:
            zulu = _closure1_slot5;
            mike = _closure1_slot3;
            entity = {};
            report = kilo.colorSwatchContainer;
            entity['style'] = report;
            yankee = _closure1_slot4;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            report = 6;
            report = offset[report];
            report = golf.bind(tango)(report);
            options = report.PressableOpacity;
            report = {};
            output = 'button';
            report['accessibilityRole'] = output;
            report['accessibilityLabel'] = foxtrot;
            foxtrot = 7;
            output = offset[foxtrot];
            output = golf.bind(tango)(output);
            echo = output.intl;
            output = echo.string;
            foxtrot = offset[foxtrot];
            foxtrot = golf.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.Qp04hI;
            foxtrot = output.bind(echo)(foxtrot);
            report['accessibilityHint'] = foxtrot;
            output = kilo.colorSwatch;
            foxtrot = new Array(3);
            foxtrot[0] = output;
            output = {};
            result = offset[result];
            echo = golf.bind(tango)(result);
            result = echo.int2hex;
            result = result.bind(echo)(update);
            output['backgroundColor'] = result;
            foxtrot[1] = output;
            foxtrot[2] = backup;
            report['style'] = foxtrot;
            report['onPress'] = romeo;
            backup = _closure1_slot4;
            romeo = 8;
            romeo = offset[romeo];
            romeo = golf.bind(tango)(romeo);
            foxtrot = romeo.PencilIcon;
            romeo = {};
            output = 'xs';
            romeo['size'] = output;
            romeo['color'] = sizing;
            kilo = kilo.dropperIcon;
            romeo['style'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            report['children'] = romeo;
            options = yankee.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            options = _closure1_slot4;
            oscar = 9;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {'variant': 'text-sm/normal', 'color': 'header-secondary'};
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot4 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    offset = report.bind(entity)(tango);
    verify = offset.createStyles;
    options = {};
    tango = {};
    yankee = 6;
    tango['gap'] = yankee;
    options['container'] = tango;
    tango = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    options['sectionHeader'] = tango;
    tango = {'flexDirection': 'row', 'gap': 12, 'justifyContent': 'center'};
    options['themeColorContainer'] = tango;
    tango = 4;
    yankee = {'position': 'relative', 'flex': 1, 'flexDirection': 'column', 'alignItems': 'center', 'gap': 4};
    options['colorSwatchContainer'] = yankee;
    yankee = {'height': 50, 'width': '100%'};
    romeo = oscar[tango];
    romeo = golf.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    yankee['borderRadius'] = romeo;
    options['colorSwatch'] = yankee;
    yankee = {'position': 'absolute', 'top': 10, 'right': 10};
    options['dropperIcon'] = yankee;
    yankee = {};
    romeo = oscar[tango];
    romeo = golf.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.HEADER_SECONDARY;
    yankee['tintColor'] = romeo;
    options['overflowMenu'] = yankee;
    options = verify.bind(offset)(options);
    var _closure1_slot6 = options;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    options = options.unsafe_rawColors;
    options = options.WHITE_500;
    var _closure1_slot7 = options;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.unsafe_rawColors;
    tango = tango.PRIMARY_530;
    var _closure1_slot8 = tango;
    tango = 21;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/UserProfileEditTheme.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: UserProfileEditTheme
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscar = entity.user;
            mike = entity.onProfileThemeColorsChanged;
            var _closure2_slot0 = mike;
            options = entity.pendingThemeColors;
            tango = entity.guildId;
            golf = entity.pendingAvatar;
            romeo = entity.showResetMenu;
            report = undefined;
            if(!(romeo === report)) { _fun00004_ip = 51; continue _fun00003 }
 49:
            romeo = false;
 51:
            zulu = entity.isTryItOut;
            if(!(zulu === report)) { _fun00004_ip = 63; continue _fun00003 }
 61:
            zulu = false;
 63:
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            entity = _closure1_slot6;
            offset = entity.bind(report)();
            mike = _closure1_slot1;
            foxtrot = _closure1_slot2;
            entity = 10;
            entity = foxtrot[entity];
            verify = mike.bind(report)(entity);
            entity = oscar.id;
            verify = verify.bind(report)(entity, tango);
            _closure2_slot1 = verify;
            entity = 11;
            entity = foxtrot[entity];
            mike = mike.bind(report)(entity);
            entity = {};
            entity['user'] = oscar;
            entity['displayProfile'] = verify;
            entity['pendingThemeColors'] = options;
            entity['isPreview'] = zulu;
            entity = mike.bind(report)(entity);
            context = entity.primaryColor;
            _closure2_slot2 = context;
            update = entity.secondaryColor;
            _closure2_slot3 = update;
            entity = null;
            if(!(entity == golf)) { _fun00004_ip = 208; continue _fun00003 }
 193:
            zulu = oscar.getAvatarURL;
            mike = 80;
            golf = zulu.bind(oscar)(tango, mike);
 208:
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 12;
            mike = options[mike];
            oscar = zulu.bind(report)(mike);
            tango = oscar.useAvatarColors;
            zulu = _closure1_slot1;
            mike = 4;
            mike = options[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.unsafe_rawColors;
            zulu = mike.PRIMARY_530;
            mike = false;
            mike = tango.bind(oscar)(golf, zulu, mike);
            _closure2_slot4 = mike;
            if(!(entity != context)) { _fun00004_ip = 1029; continue _fun00003 }
 281:
            if(!(entity != update)) { _fun00004_ip = 1029; continue _fun00003 }
 288:
            mike = function(argFoo) { // Original name: handleProfileThemeColorsChanged
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 13;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    oscar = _closure2_slot1;
                    zulu = null;
                    oscar = zulu == oscar;
                    zulu = undefined;
                    if(oscar) { _fun00006_ip = 56; continue _fun00005 }
 46:
                    oscar = _closure2_slot1;
                    zulu = oscar.themeColors;
 56:
                    report = report.bind(entity)(tango, zulu);
                    zulu = _closure2_slot0;
                    mike = undefined;
                    if(report) { _fun00006_ip = 74; continue _fun00005 }
 71:
                    mike = tango;
 74:
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            _closure2_slot5 = mike;
            sizing = function(argFoo, argBar) { // Original name: makeOnPress
                mike = argFoo;
                var _closure3_slot0 = mike;
                mike = argBar;
                var _closure3_slot1 = mike;
                entity = function() {
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 14;
                    zulu = tango[entity];
                    entity = undefined;
                    oscar = golf.bind(entity)(zulu);
                    report = oscar.markDismissibleContentAsDismissed;
                    zulu = 15;
                    zulu = tango[zulu];
                    zulu = golf.bind(entity)(zulu);
                    zulu = zulu.DismissibleContent;
                    zulu = zulu.PROFILE_THEMES_SETTINGS_VIEWED_V2;
                    zulu = report.bind(oscar)(zulu);
                    zulu = _closure1_slot1;
                    mike = 16;
                    mike = tango[mike];
                    zulu = zulu.bind(entity)(mike);
                    mike = {};
                    report = _closure3_slot0;
                    mike['color'] = report;
                    tango = _closure3_slot1;
                    mike['onSelect'] = tango;
                    tango = _closure2_slot4;
                    mike['suggestedColors'] = tango;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                return entity;
            };
            tango = _closure1_slot5;
            zulu = _closure1_slot3;
            mike = {};
            oscar = offset.container;
            mike['style'] = oscar;
            options = _closure1_slot5;
            golf = _closure1_slot3;
            oscar = {};
            verify = offset.sectionHeader;
            oscar['style'] = verify;
            output = _closure1_slot4;
            control = _closure1_slot0;
            result = _closure1_slot2;
            verify = 9;
            verify = result[verify];
            verify = control.bind(report)(verify);
            foxtrot = verify.Text;
            verify = {'variant': 'text-sm/semibold', 'color': 'text-secondary'};
            backup = 7;
            echo = result[backup];
            echo = control.bind(report)(echo);
            source = echo.intl;
            echo = source.string;
            result = result[backup];
            result = control.bind(report)(result);
            result = result.t;
            result = result.DMeO2d;
            result = echo.bind(source)(result);
            verify['children'] = result;
            foxtrot = output.bind(report)(foxtrot, verify);
            verify = new Array(2);
            verify[0] = foxtrot;
            if(!romeo) { _fun00004_ip = 612; continue _fun00003 }
 455:
            result = _closure1_slot4;
            source = _closure1_slot0;
            vacuum = _closure1_slot2;
            foxtrot = 6;
            foxtrot = vacuum[foxtrot];
            foxtrot = source.bind(report)(foxtrot);
            output = foxtrot.PressableOpacity;
            foxtrot = {};
            echo = 'button';
            foxtrot['accessibilityRole'] = echo;
            echo = vacuum[backup];
            echo = source.bind(report)(echo);
            sequence = echo.intl;
            control = sequence.string;
            echo = vacuum[backup];
            echo = source.bind(report)(echo);
            echo = echo.t;
            echo = echo.+1H47u;
            echo = control.bind(sequence)(echo);
            foxtrot['accessibilityLabel'] = echo;
            echo = function() { // Original name: onPress
                report = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 17;
                tango = mike[entity];
                entity = undefined;
                oscar = report.bind(entity)(tango);
                report = oscar.openLazy;
                tango = _closure1_slot0;
                zulu = 19;
                zulu = mike[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = 18;
                zulu = mike[zulu];
                mike = mike.paths;
                tango = tango.bind(entity)(zulu, mike);
                zulu = {};
                mike = function() { // Original name: onResetTheme
                    zulu = _closure2_slot5;
                    mike = undefined;
                    entity = [null, null];
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                zulu['onResetTheme'] = mike;
                mike = 'Profile Theme';
                mike = report.bind(oscar)(tango, mike, zulu);
                return entity;
            };
            foxtrot['onPress'] = echo;
            control = _closure1_slot4;
            echo = 20;
            echo = vacuum[echo];
            echo = source.bind(report)(echo);
            source = echo.MoreHorizontalIcon;
            echo = {};
            vacuum = offset.overflowMenu;
            vacuum = vacuum.tintColor;
            echo['color'] = vacuum;
            echo = control.bind(report)(source, echo);
            foxtrot['children'] = echo;
            romeo = result.bind(report)(output, foxtrot);
 612:
            verify[1] = romeo;
            oscar['children'] = verify;
            golf = options.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            verify = _closure1_slot5;
            options = _closure1_slot3;
            golf = {};
            offset = offset.themeColorContainer;
            golf['style'] = offset;
            romeo = _closure1_slot4;
            foxtrot = _closure1_slot9;
            offset = {};
            output = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = argFoo;
                    mike = _closure2_slot2;
                    if(!(tango !== mike)) { _fun00008_ip = 41; continue _fun00007 }
 14:
                    zulu = _closure2_slot5;
                    mike = new Array(2);
                    mike[0] = tango;
                    entity = _closure2_slot3;
                    mike[1] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 41:
                    entity = undefined;
                    return entity;
                }
            };
            output = sizing.bind(report)(context, output);
            offset['onPress'] = output;
            offset['color'] = context;
            echo = _closure1_slot0;
            source = _closure1_slot2;
            output = source[backup];
            output = echo.bind(report)(output);
            control = output.intl;
            result = control.string;
            output = source[backup];
            output = echo.bind(report)(output);
            output = output.t;
            output = output.C3KTQk;
            output = result.bind(control)(output);
            offset['label'] = output;
            output = source[backup];
            output = echo.bind(report)(output);
            sequence = output.intl;
            vacuum = sequence.formatToPlainString;
            output = source[backup];
            output = echo.bind(report)(output);
            output = output.t;
            control = output.v4X2kZ;
            output = {};
            result = 5;
            config = source[result];
            record = echo.bind(report)(config);
            config = record.int2hex;
            config = config.bind(record)(context);
            output['colorHex'] = config;
            output = vacuum.bind(sequence)(control, output);
            offset['accessibilityLabel'] = output;
            romeo = romeo.bind(report)(foxtrot, offset);
            offset = new Array(2);
            offset[0] = romeo;
            romeo = _closure1_slot4;
            yankee = {};
            yankee['color'] = update;
            kilo = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    zulu = _closure2_slot3;
                    if(!(entity !== zulu)) { _fun00010_ip = 41; continue _fun00009 }
 14:
                    zulu = _closure2_slot5;
                    tango = _closure2_slot2;
                    mike = new Array(2);
                    mike[0] = tango;
                    mike[1] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 41:
                    entity = undefined;
                    return entity;
                }
            };
            kilo = sizing.bind(report)(update, kilo);
            yankee['onPress'] = kilo;
            kilo = source[backup];
            kilo = echo.bind(report)(kilo);
            output = kilo.intl;
            sizing = output.string;
            kilo = source[backup];
            kilo = echo.bind(report)(kilo);
            kilo = kilo.t;
            kilo = kilo.8elvy8;
            kilo = sizing.bind(output)(kilo);
            yankee['label'] = kilo;
            kilo = source[backup];
            kilo = echo.bind(report)(kilo);
            output = kilo.intl;
            sizing = output.formatToPlainString;
            backup = source[backup];
            backup = echo.bind(report)(backup);
            backup = backup.t;
            kilo = backup.I0tmrq;
            backup = {};
            result = source[result];
            echo = echo.bind(report)(result);
            result = echo.int2hex;
            result = result.bind(echo)(update);
            backup['colorHex'] = result;
            backup = sizing.bind(output)(kilo, backup);
            yankee['accessibilityLabel'] = backup;
            yankee = romeo.bind(report)(foxtrot, yankee);
            offset[1] = yankee;
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 1029:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();