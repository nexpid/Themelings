// app/modules/guild_onboarding/native/GuildOnboardingPrompt.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: PromptHeader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.currentPrompt;
            result = entity.numberOfPrompts;
            update = entity.currentPromptIndex;
            entity = _closure1_slot18;
            tango = undefined;
            offset = entity.bind(tango)();
            zulu = _closure1_slot16;
            mike = _closure1_slot17;
            entity = {};
            golf = _closure1_slot6;
            report = {};
            options = offset.promptHeader;
            report['style'] = options;
            foxtrot = _closure1_slot15;
            kilo = _closure1_slot0;
            backup = _closure1_slot2;
            yankee = 23;
            options = backup[yankee];
            options = kilo.bind(tango)(options);
            romeo = options.Text;
            options = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-muted'};
            sizing = offset.countText;
            options['style'] = sizing;
            sequence = 24;
            sizing = backup[sequence];
            sizing = kilo.bind(tango)(sizing);
            output = sizing.intl;
            sizing = output.format;
            backup = backup[sequence];
            backup = kilo.bind(tango)(backup);
            backup = backup.t;
            kilo = backup.isV0NT;
            backup = {};
            echo = 1;
            echo = update + echo;
            backup['currentQuestion'] = echo;
            backup['questionCount'] = result;
            backup = sizing.bind(output)(kilo, backup);
            options['children'] = backup;
            romeo = foxtrot.bind(tango)(romeo, options);
            options = new Array(2);
            options[0] = romeo;
            backup = null;
            foxtrot = backup != verify;
            romeo = null;
            if(!foxtrot) { _fun00002_ip = 388; continue _fun00001 }
 220:
            foxtrot = verify.required;
            romeo = null;
            if(!foxtrot) { _fun00002_ip = 388; continue _fun00001 }
 234:
            kilo = _closure1_slot16;
            backup = _closure1_slot17;
            foxtrot = {};
            result = _closure1_slot15;
            output = _closure1_slot6;
            sizing = {};
            echo = offset.requiredSeparator;
            sizing['style'] = echo;
            output = result.bind(tango)(output, sizing);
            sizing = new Array(2);
            sizing[0] = output;
            echo = _closure1_slot15;
            vacuum = _closure1_slot0;
            update = _closure1_slot2;
            output = update[yankee];
            output = vacuum.bind(tango)(output);
            result = output.Text;
            output = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            source = update[sequence];
            source = vacuum.bind(tango)(source);
            control = source.intl;
            source = control.string;
            update = update[sequence];
            update = vacuum.bind(tango)(update);
            update = update.t;
            update = update.Ur8Vrq;
            update = source.bind(control)(update);
            output['children'] = update;
            output = echo.bind(tango)(result, output);
            sizing[1] = output;
            foxtrot['children'] = sizing;
            romeo = kilo.bind(tango)(backup, foxtrot);
 388:
            options[1] = romeo;
            report['children'] = options;
            golf = zulu.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot15;
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[yankee];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/semibold', 'color': 'header-primary'};
            offset = offset.title;
            oscar['style'] = offset;
            verify = verify.title;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: PromptFooter
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            mike = zulu.guildId;
            var _closure2_slot0 = mike;
            options = zulu.currentPrompt;
            mike = zulu.selectedOptionIds;
            var _closure2_slot1 = mike;
            foxtrot = zulu.handleOnPress;
            echo = zulu.lastPrompt;
            tango = undefined;
            var _closure2_slot2 = tango;
            zulu = _closure1_slot18;
            output = zulu.bind(tango)();
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 17;
            zulu = oscar[zulu];
            golf = report.bind(tango)(zulu);
            oscar = golf.useStateFromStores;
            zulu = _closure1_slot11;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot11;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = oscar.bind(golf)(report, zulu);
            zulu = mike.length;
            verify = 0;
            result = verify === zulu;
            if(!result) { _fun00004_ip = 139; continue _fun00003 }
 121:
            zulu = null;
            zulu = zulu != options;
            if(!zulu) { _fun00004_ip = 136; continue _fun00003 }
 130:
            zulu = options.required;
 136:
            result = !zulu;
 139:
            golf = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 24;
            report = yankee[zulu];
            report = golf.bind(tango)(report);
            oscar = report.intl;
            report = oscar.string;
            zulu = yankee[zulu];
            zulu = golf.bind(tango)(zulu);
            zulu = zulu.t;
            if(echo) { _fun00004_ip = 215; continue _fun00003 }
 186:
            if(result) { _fun00004_ip = 202; continue _fun00003 }
 189:
            golf = zulu.PDTjLC;
            backup = report.bind(oscar)(golf);
            _fun00004_ip = 213; continue _fun00003;
 202:
            golf = zulu.5WxrcX;
            backup = report.bind(oscar)(golf);
 213:
            _fun00004_ip = 255; continue _fun00003;
 215:
            zulu = zulu.8SuVoK;
            golf = report.bind(oscar)(zulu);
            zulu = global;
            zulu = zulu.HermesInternal;
            oscar = zulu.concat;
            report = '';
            zulu = ' 🎉';
            backup = oscar.bind(report)(golf, zulu);
 255:
            mike = mike.length;
            sizing = verify === mike;
            if(!sizing) { _fun00004_ip = 287; continue _fun00003 }
 267:
            mike = null;
            zulu = mike == options;
            mike = undefined;
            if(zulu) { _fun00004_ip = 284; continue _fun00003 }
 278:
            mike = options.required;
 284:
            sizing = mike;
 287:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 19;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            zulu = mike.bind(tango)();
            yankee = null;
            mike = yankee == options;
            kilo = undefined;
            if(mike) { _fun00004_ip = 351; continue _fun00003 }
 322:
            oscar = options.options;
            mike = yankee == oscar;
            kilo = undefined;
            if(mike) { _fun00004_ip = 351; continue _fun00003 }
 336:
            report = oscar.filter;
            mike = function(argFoo) {
                zulu = _closure2_slot1;
                mike = zulu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            kilo = report.bind(oscar)(mike);
 351:
            _closure2_slot2 = kilo;
            golf = _closure1_slot4;
            oscar = golf.useMemo;
            report = new Array(1);
            report[0] = kilo;
            mike = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = null;
                    if(!(entity == zulu)) { _fun00006_ip = 43; continue _fun00005 }
 13:
                    entity = global;
                    entity = entity.Set;
                    zulu = entity.prototype;
                    zulu = Object.create(zulu, {constructor: {value: entity}});
                    golf = zulu;
                    entity = new golf[entity](oscar);
                    entity = entity instanceof Object ? entity : zulu;
                    _fun00006_ip = 83; continue _fun00005;
 43:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 29;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.getSelectedRoleIds;
                    mike = _closure2_slot2;
                    entity = zulu.bind(tango)(mike);
 83:
                    return entity;
                }
            };
            golf = oscar.bind(golf)(mike, report);
            oscar = _closure1_slot4;
            report = oscar.useMemo;
            mike = new Array(1);
            mike[0] = kilo;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = null;
                    if(!(entity == zulu)) { _fun00008_ip = 43; continue _fun00007 }
 13:
                    entity = global;
                    entity = entity.Set;
                    zulu = entity.prototype;
                    zulu = Object.create(zulu, {constructor: {value: entity}});
                    golf = zulu;
                    entity = new golf[entity](oscar);
                    entity = entity instanceof Object ? entity : zulu;
                    _fun00008_ip = 83; continue _fun00007;
 43:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 29;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.getSelectedChannelIds;
                    mike = _closure2_slot2;
                    entity = zulu.bind(tango)(mike);
 83:
                    return entity;
                }
            };
            oscar = report.bind(oscar)(entity, mike);
            mike = _closure1_slot1;
            report = _closure1_slot2;
            entity = 30;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['guild'] = romeo;
            entity['prompt'] = options;
            entity['selectedRoleIds'] = golf;
            entity['selectedChannelIds'] = oscar;
            oscar = _closure1_slot21;
            entity['itemHook'] = oscar;
            entity = mike.bind(tango)(entity);
            control = entity.helpText;
            source = entity.helpTextAdditional;
            mike = _closure1_slot0;
            entity = 20;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.isThemeDark;
            options = entity.bind(mike)(zulu);
            mike = _closure1_slot0;
            report = _closure1_slot2;
            entity = 15;
            entity = report[entity];
            golf = mike.bind(tango)(entity);
            oscar = golf.hexWithOpacity;
            zulu = _closure1_slot1;
            mike = 13;
            entity = report[mike];
            entity = zulu.bind(tango)(entity);
            entity = entity.unsafe_rawColors;
            if(options) { _fun00004_ip = 601; continue _fun00003 }
 555:
            options = entity.PRIMARY_130;
            romeo = oscar.bind(golf)(options, verify);
            options = new Array(2);
            options[0] = romeo;
            romeo = report[mike];
            romeo = zulu.bind(tango)(romeo);
            romeo = romeo.unsafe_rawColors;
            romeo = romeo.PRIMARY_130;
            options[1] = romeo;
            _fun00004_ip = 648; continue _fun00003;
 601:
            entity = entity.PRIMARY_600;
            oscar = oscar.bind(golf)(entity, verify);
            entity = new Array(2);
            entity[0] = oscar;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.unsafe_rawColors;
            mike = mike.PRIMARY_600;
            entity[1] = mike;
            options = entity;
 648:
            zulu = _closure1_slot16;
            mike = _closure1_slot6;
            entity = {};
            report = output.footer;
            entity['style'] = report;
            golf = _closure1_slot15;
            oscar = _closure1_slot1;
            kilo = _closure1_slot2;
            report = 27;
            report = kilo[report];
            oscar = oscar.bind(tango)(report);
            report = {};
            romeo = output.scrollContainerGradient;
            verify = new Array(1);
            verify[0] = romeo;
            report['style'] = verify;
            romeo = _closure1_slot0;
            verify = 28;
            update = kilo[verify];
            update = romeo.bind(tango)(update);
            update = update.VerticalGradient;
            update = update.START;
            report['start'] = update;
            verify = kilo[verify];
            verify = romeo.bind(tango)(verify);
            verify = verify.VerticalGradient;
            verify = verify.END;
            report['end'] = verify;
            report['colors'] = options;
            options = 'none';
            report['pointerEvents'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot16;
            golf = _closure1_slot6;
            oscar = {};
            verify = output.footerContent;
            oscar['style'] = verify;
            verify = '';
            if(!(verify === control)) { _fun00004_ip = 830; continue _fun00003 }
 824:
            yankee = null;
            if(!(verify !== source)) { _fun00004_ip = 911; continue _fun00003 }
 830:
            kilo = _closure1_slot16;
            romeo = _closure1_slot0;
            update = _closure1_slot2;
            verify = 23;
            verify = update[verify];
            verify = romeo.bind(tango)(verify);
            romeo = verify.Text;
            verify = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            update = output.helpText;
            verify['style'] = update;
            update = new Array(3);
            update[0] = control;
            control = ' ';
            update[1] = control;
            update[2] = source;
            verify['children'] = update;
            yankee = kilo.bind(tango)(romeo, verify);
 911:
            verify = new Array(2);
            verify[0] = yankee;
            romeo = _closure1_slot15;
            yankee = _closure1_slot1;
            kilo = _closure1_slot2;
            offset = 25;
            offset = kilo[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            update = output.footerButtonText;
            kilo = new Array(2);
            kilo[0] = update;
            update = sizing;
            if(!sizing) { _fun00004_ip = 971; continue _fun00003 }
 965:
            update = output.buttonTextDisabled;
 971:
            kilo[1] = update;
            offset['textStyle'] = kilo;
            update = output.footerButton;
            kilo = new Array(3);
            kilo[0] = update;
            if(!result) { _fun00004_ip = 1000; continue _fun00003 }
 997:
            result = !echo;
 1000:
            if(!result) { _fun00004_ip = 1009; continue _fun00003 }
 1003:
            result = output.buttonSkip;
 1009:
            kilo[1] = result;
            if(!sizing) { _fun00004_ip = 1022; continue _fun00003 }
 1016:
            sizing = output.buttonDisabled;
 1022:
            kilo[2] = sizing;
            offset['style'] = kilo;
            offset['text'] = backup;
            offset['onPress'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: formattedNameHighlight
        report = _closure1_slot15;
        mike = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 23;
        entity = zulu[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        zulu = entity.Text;
        mike = {'variant': 'text-xs/medium', 'color': 'header-primary'};
        entity = argFoo;
        mike['children'] = entity;
        entity = argBar;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: DropdownOption
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            verify = mike.option;
            var _closure2_slot0 = verify;
            mike = _closure1_slot18;
            tango = undefined;
            foxtrot = mike.bind(tango)();
            zulu = _closure1_slot0;
            backup = _closure1_slot2;
            mike = 17;
            mike = backup[mike];
            report = zulu.bind(tango)(mike);
            zulu = report.useStateFromStores;
            golf = _closure1_slot9;
            mike = new Array(1);
            mike[0] = golf;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot0;
                    mike = entity.emoji;
                    oscar = null;
                    zulu = oscar == mike;
                    entity = undefined;
                    if(zulu) { _fun00012_ip = 29; continue _fun00011 }
 24:
                    entity = mike.id;
 29:
                    mike = oscar != entity;
                    entity = null;
                    if(!mike) { _fun00012_ip = 80; continue _fun00011 }
 38:
                    zulu = _closure1_slot9;
                    mike = zulu.getUsableCustomEmojiById;
                    report = _closure2_slot0;
                    report = report.emoji;
                    oscar = oscar == report;
                    tango = undefined;
                    if(oscar) { _fun00012_ip = 75; continue _fun00011 }
 70:
                    tango = report.id;
 75:
                    entity = mike.bind(zulu)(tango);
 80:
                    return entity;
                }
            };
            result = zulu.bind(report)(mike, entity);
            zulu = _closure1_slot16;
            mike = _closure1_slot6;
            entity = {};
            report = foxtrot.dropdownPill;
            entity['style'] = report;
            options = _closure1_slot15;
            golf = _closure1_slot6;
            report = {};
            offset = foxtrot.emojiContainer;
            report['style'] = offset;
            romeo = _closure1_slot15;
            yankee = _closure1_slot1;
            offset = 32;
            offset = backup[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            backup = foxtrot.optionTextEmoji;
            offset['textEmojiStyle'] = backup;
            foxtrot = foxtrot.optionImageEmoji;
            offset['fastImageStyle'] = foxtrot;
            foxtrot = null;
            kilo = foxtrot != result;
            backup = undefined;
            if(!kilo) { _fun00010_ip = 232; continue _fun00009 }
 171:
            sizing = _closure1_slot1;
            output = _closure1_slot2;
            kilo = 33;
            kilo = output[kilo];
            output = sizing.bind(tango)(kilo);
            sizing = output.getEmojiURL;
            kilo = {};
            echo = result.id;
            kilo['id'] = echo;
            result = result.animated;
            kilo['animated'] = result;
            result = _closure1_slot14;
            kilo['size'] = result;
            backup = sizing.bind(output)(kilo);
 232:
            offset['src'] = backup;
            kilo = verify.emoji;
            sizing = foxtrot == kilo;
            backup = undefined;
            if(sizing) { _fun00010_ip = 257; continue _fun00009 }
 252:
            backup = kilo.name;
 257:
            kilo = foxtrot != backup;
            foxtrot = '';
            if(!kilo) { _fun00010_ip = 271; continue _fun00009 }
 268:
            foxtrot = backup;
 271:
            offset['name'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            report['children'] = offset;
            golf = options.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot15;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 23;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {};
            offset = 'text-md/semibold';
            oscar['variant'] = offset;
            verify = verify.title;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
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
    offset = 1;
    golf = oscar[offset];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Image;
    var _closure1_slot5 = golf;
    golf = tango.View;
    var _closure1_slot6 = golf;
    golf = tango.ScrollView;
    var _closure1_slot7 = golf;
    tango = tango.FlatList;
    var _closure1_slot8 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildOnboardingModalStates;
    var _closure1_slot13 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EMOJI_URL_BASE_SIZE;
    var _closure1_slot14 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    foxtrot = tango.Fonts;
    tango = 10;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot15 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot16 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot17 = tango;
    tango = 11;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['flex'] = offset;
    tango['flex'] = verify;
    verify = {'display': 'flex', 'flex': 1, 'flexGrow': 1, 'marginTop': null, 'marginBottom': 16};
    offset = 12;
    offset = oscar[offset];
    offset = report.bind(entity)(offset);
    offset = offset.NAV_BAR_HEIGHT;
    verify['marginTop'] = offset;
    romeo = 16;
    offset = 13;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MOBILE_PRIMARY;
    verify['backgroundColor'] = backup;
    tango['container'] = verify;
    verify = {'display': 'flex', 'flexGrow': 1, 'justifyContent': 'center', 'paddingHorizontal': 16, 'paddingTop': 0};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MOBILE_PRIMARY;
    verify['backgroundColor'] = backup;
    tango['scrollContainer'] = verify;
    verify = {'position': 'absolute', 'height': 48, 'width': '100%', 'left': 0, 'top': 4294967248};
    tango['scrollContainerGradient'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'marginBottom': 8};
    tango['promptHeader'] = verify;
    verify = {'flexShrink': 0, 'marginHorizontal': 8, 'color': null, 'backgroundColor': null, 'width': 4, 'height': 4};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MODIFIER_ACCENT;
    verify['color'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MODIFIER_ACCENT;
    verify['backgroundColor'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    verify['borderRadius'] = backup;
    tango['requiredSeparator'] = verify;
    verify = {};
    tango['countText'] = verify;
    verify = {};
    backup = 32;
    verify['marginBottom'] = backup;
    tango['title'] = verify;
    verify = {'marginTop': 8, 'marginBottom': 8, 'textAlign': 'center'};
    tango['helpText'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'bottom': 0, 'paddingBottom': 8, 'position': 'absolute', 'width': '100%'};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MOBILE_PRIMARY;
    verify['backgroundColor'] = backup;
    tango['footer'] = verify;
    verify = {};
    verify['flexGrow'] = entity;
    backup = 44;
    verify['height'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    verify['borderRadius'] = backup;
    tango['footerButton'] = verify;
    verify = {};
    backup = 14;
    backup = oscar[backup];
    kilo = yankee.bind(entity)(backup);
    backup = foxtrot.PRIMARY_SEMIBOLD;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.unsafe_rawColors;
    foxtrot = foxtrot.WHITE_500;
    result = kilo.bind(entity)(backup, foxtrot, romeo);
    echo = verify;
    foxtrot = copyDataProperties(echo, result);
    tango['footerButtonText'] = verify;
    verify = {'paddingHorizontal': 16, 'paddingBottom': 8, 'paddingTop': 8};
    tango['footerText'] = verify;
    verify = {'width': '100%', 'paddingHorizontal': 16};
    tango['footerContent'] = verify;
    verify = {};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_ACCENT;
    verify['backgroundColor'] = foxtrot;
    tango['buttonSkip'] = verify;
    verify = {};
    foxtrot = 15;
    foxtrot = oscar[foxtrot];
    sizing = report.bind(entity)(foxtrot);
    kilo = sizing.hexWithOpacity;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.unsafe_rawColors;
    backup = foxtrot.BRAND_500;
    foxtrot = 0.6;
    backup = kilo.bind(sizing)(backup, foxtrot);
    verify['backgroundColor'] = backup;
    tango['buttonDisabled'] = verify;
    verify = {};
    verify['opacity'] = foxtrot;
    tango['buttonTextDisabled'] = verify;
    verify = {'fontSize': 18, 'lineHeight': 22, 'marginRight': 6};
    tango['optionTextEmoji'] = verify;
    verify = {'height': 22, 'width': 22, 'marginRight': 6};
    tango['optionImageEmoji'] = verify;
    verify = {'display': 'flex', 'alignItems': 'center'};
    tango['emojiContainer'] = verify;
    verify = {'borderRadius': null, 'backgroundColor': null, 'padding': 8, 'paddingRight': 32, 'minHeight': 48, 'display': 'flex', 'flexDirection': 'row', 'flexWrap': 'wrap', 'alignItems': 'center', 'position': 'relative'};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    verify['borderRadius'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = foxtrot;
    tango['dropdownContainer'] = verify;
    verify = {};
    verify['marginTop'] = romeo;
    tango['emptyDropdownText'] = verify;
    verify = {'borderRadius': null, 'backgroundColor': null, 'padding': 6, 'marginRight': 8, 'marginTop': 8, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    verify['borderRadius'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = offset;
    tango['dropdownPill'] = verify;
    verify = {'position': 'absolute', 'right': 4, 'top': 8};
    tango['dropdownIconContainer'] = verify;
    verify = {'height': 32, 'width': 32};
    tango['dropdownIcon'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot18 = tango;
    tango = 39;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/native/GuildOnboardingPrompt.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: RulesPrompt
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            entity = entity.guildId;
            var _closure2_slot0 = entity;
            entity = _closure1_slot18;
            report = undefined;
            yankee = entity.bind(report)();
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 16;
            entity = oscar[entity];
            mike = zulu.bind(report)(entity);
            entity = mike.useNavigation;
            entity = entity.bind(mike)();
            var _closure2_slot1 = entity;
            options = 17;
            entity = oscar[options];
            offset = zulu.bind(report)(entity);
            verify = offset.useStateFromStores;
            entity = _closure1_slot10;
            tango = new Array(1);
            tango[0] = entity;
            mike = function() {
                zulu = _closure1_slot10;
                mike = zulu.getRulesPrompt;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = verify.bind(offset)(tango, mike);
            var _closure2_slot2 = mike;
            tango = oscar[options];
            romeo = zulu.bind(report)(tango);
            offset = romeo.useStateFromStores;
            tango = _closure1_slot11;
            verify = new Array(1);
            verify[0] = tango;
            tango = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = _closure1_slot11;
                    mike = zulu.getGuild;
                    entity = _closure2_slot0;
                    mike = mike.bind(zulu)(entity);
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun00016_ip = 41; continue _fun00015 }
 35:
                    entity = mike.rulesChannelId;
 41:
                    return entity;
                }
            };
            tango = offset.bind(romeo)(verify, tango);
            var _closure2_slot3 = tango;
            tango = _closure1_slot1;
            verify = 18;
            verify = oscar[verify];
            verify = tango.bind(report)(verify);
            verify = verify.bind(report)();
            control = verify.bottom;
            verify = 64;
            offset = verify + control;
            verify = 8;
            kilo = offset + verify;
            options = oscar[options];
            offset = zulu.bind(report)(options);
            verify = offset.useStateFromStores;
            options = new Array(1);
            options[0] = entity;
            entity = function() {
                zulu = _closure1_slot10;
                mike = zulu.get;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = verify.bind(offset)(options, entity);
            var _closure2_slot4 = entity;
            verify = _closure1_slot4;
            options = verify.useState;
            entity = false;
            verify = options.bind(verify)(entity);
            options = _closure1_slot3;
            entity = 2;
            options = options.bind(report)(verify, entity);
            foxtrot = 0;
            romeo = options[foxtrot];
            entity = 1;
            entity = options[entity];
            var _closure2_slot5 = entity;
            entity = 19;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            tango = entity.bind(report)();
            entity = 20;
            entity = oscar[entity];
            zulu = zulu.bind(report)(entity);
            entity = zulu.isThemeDark;
            offset = entity.bind(zulu)(tango);
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 15;
            entity = oscar[entity];
            verify = zulu.bind(report)(entity);
            options = verify.hexWithOpacity;
            tango = _closure1_slot1;
            zulu = 13;
            entity = oscar[zulu];
            entity = tango.bind(report)(entity);
            entity = entity.unsafe_rawColors;
            if(offset) { _fun00014_ip = 403; continue _fun00013 }
 357:
            offset = entity.PRIMARY_130;
            backup = options.bind(verify)(offset, foxtrot);
            offset = new Array(2);
            offset[0] = backup;
            backup = oscar[zulu];
            backup = tango.bind(report)(backup);
            backup = backup.unsafe_rawColors;
            backup = backup.PRIMARY_130;
            offset[1] = backup;
            _fun00014_ip = 450; continue _fun00013;
 403:
            entity = entity.PRIMARY_600;
            options = options.bind(verify)(entity, foxtrot);
            entity = new Array(2);
            entity[0] = options;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.unsafe_rawColors;
            zulu = zulu.PRIMARY_600;
            entity[1] = zulu;
            offset = entity;
 450:
            entity = null;
            mike = entity == mike;
            if(mike) { _fun00014_ip = 1115; continue _fun00013 }
 462:
            tango = _closure1_slot16;
            foxtrot = _closure1_slot0;
            source = _closure1_slot2;
            mike = 21;
            mike = source[mike];
            mike = foxtrot.bind(report)(mike);
            zulu = mike.SafeAreaPaddingView;
            mike = {};
            oscar = true;
            mike['top'] = oscar;
            options = yankee.flex;
            oscar = new Array(2);
            oscar[0] = options;
            options = yankee.container;
            oscar[1] = options;
            mike['style'] = oscar;
            backup = _closure1_slot16;
            verify = _closure1_slot6;
            oscar = {};
            options = yankee.flex;
            oscar['style'] = options;
            output = _closure1_slot15;
            sizing = _closure1_slot8;
            options = {};
            echo = yankee.scrollContainer;
            result = new Array(2);
            result[0] = echo;
            echo = {};
            echo['paddingBottom'] = kilo;
            result[1] = echo;
            options['contentContainerStyle'] = result;
            result = [0];
            options['data'] = result;
            result = function() { // Original name: renderItem
                tango = _closure1_slot15;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 22;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                oscar = _closure2_slot2;
                oscar = oscar.values;
                entity['rules'] = oscar;
                report = _closure2_slot3;
                entity['rulesChannelId'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            options['renderItem'] = result;
            result = function() { // Original name: onEndReached
                zulu = _closure2_slot5;
                mike = undefined;
                entity = true;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            options['onEndReached'] = result;
            options = output.bind(report)(sizing, options);
            sizing = new Array(2);
            sizing[0] = options;
            echo = _closure1_slot16;
            result = _closure1_slot6;
            output = {};
            update = yankee.footer;
            options = new Array(3);
            options[0] = update;
            update = yankee.footerContent;
            options[1] = update;
            update = {};
            update['paddingBottom'] = control;
            options[2] = update;
            output['style'] = options;
            update = _closure1_slot15;
            options = 23;
            options = source[options];
            options = foxtrot.bind(report)(options);
            foxtrot = options.Text;
            options = {};
            source = yankee.footerText;
            options['style'] = source;
            source = 'text-xs/medium';
            options['variant'] = source;
            control = _closure1_slot0;
            source = _closure1_slot2;
            config = 24;
            vacuum = source[config];
            vacuum = control.bind(report)(vacuum);
            record = vacuum.intl;
            vacuum = record.string;
            source = source[config];
            source = control.bind(report)(source);
            control = source.t;
            if(romeo) { _fun00014_ip = 785; continue _fun00013 }
 770:
            source = control.D0CVAQ;
            source = vacuum.bind(record)(source);
            _fun00014_ip = 798; continue _fun00013;
 785:
            control = control.arAe3N;
            source = vacuum.bind(record)(control);
 798:
            options['children'] = source;
            options = update.bind(report)(foxtrot, options);
            update = new Array(2);
            update[0] = options;
            vacuum = _closure1_slot15;
            options = _closure1_slot1;
            foxtrot = _closure1_slot2;
            source = 25;
            source = foxtrot[source];
            control = options.bind(report)(source);
            source = {};
            romeo = !romeo;
            source['disabled'] = romeo;
            record = yankee.footerButtonText;
            romeo = new Array(1);
            romeo[0] = record;
            source['textStyle'] = romeo;
            romeo = yankee.footerButton;
            source['style'] = romeo;
            romeo = _closure1_slot0;
            record = foxtrot[config];
            record = romeo.bind(report)(record);
            context = record.intl;
            record = context.string;
            config = foxtrot[config];
            config = romeo.bind(report)(config);
            config = config.t;
            config = config.0KL0oq;
            config = record.bind(context)(config);
            source['text'] = config;
            sequence = function() { // Original name: onPress
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zulu = _closure2_slot4;
                    entity = null;
                    if(!(entity != zulu)) { _fun00018_ip = 132; continue _fun00017 }
 13:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 26;
                    tango = tango[zulu];
                    zulu = undefined;
                    oscar = report.bind(zulu)(tango);
                    report = oscar.submitVerificationForm;
                    tango = _closure2_slot0;
                    zulu = {};
                    offset = _closure2_slot4;
                    yankee = zulu;
                    golf = copyDataProperties(yankee, offset);
                    golf = {};
                    offset = _closure2_slot2;
                    yankee = golf;
                    options = copyDataProperties(yankee, offset);
                    verify = true;
                    options = 'response';
                    golf[options] = verify;
                    options = new Array(1);
                    options[0] = golf;
                    golf = 'formFields';
                    zulu[golf] = options;
                    zulu = report.bind(oscar)(tango, zulu);
                    zulu = _closure2_slot1;
                    mike = zulu.push;
                    entity = _closure1_slot13;
                    entity = entity.COMPLETED;
                    entity = mike.bind(zulu)(entity);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            source['onPress'] = sequence;
            source = vacuum.bind(report)(control, source);
            update[1] = source;
            output['children'] = update;
            output = echo.bind(report)(result, output);
            sizing[1] = output;
            oscar['children'] = sizing;
            verify = backup.bind(report)(verify, oscar);
            oscar = new Array(2);
            oscar[0] = verify;
            verify = _closure1_slot15;
            golf = 27;
            golf = foxtrot[golf];
            options = options.bind(report)(golf);
            golf = {};
            backup = yankee.scrollContainerGradient;
            yankee = new Array(2);
            yankee[0] = backup;
            backup = {};
            backup['bottom'] = kilo;
            yankee[1] = backup;
            golf['style'] = yankee;
            yankee = 28;
            backup = foxtrot[yankee];
            backup = romeo.bind(report)(backup);
            backup = backup.VerticalGradient;
            backup = backup.START;
            golf['start'] = backup;
            yankee = foxtrot[yankee];
            yankee = romeo.bind(report)(yankee);
            yankee = yankee.VerticalGradient;
            yankee = yankee.END;
            golf['end'] = yankee;
            golf['colors'] = offset;
            offset = 'none';
            golf['pointerEvents'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1115:
            return entity;
        }
    };
    zulu['RulesPrompt'] = tango;
    tango = function(argFoo) { // Original name: MultipleChoicePrompt
        entity = argFoo;
        foxtrot = entity.guildId;
        var _closure2_slot0 = foxtrot;
        romeo = entity.currentPrompt;
        var _closure2_slot1 = romeo;
        verify = entity.lastPrompt;
        sizing = entity.currentPromptIndex;
        result = entity.numberOfPrompts;
        mike = entity.selectOption;
        var _closure2_slot2 = mike;
        offset = entity.handleOnPress;
        entity = _closure1_slot18;
        tango = undefined;
        options = entity.bind(tango)();
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 18;
        entity = zulu[entity];
        entity = mike.bind(tango)(entity);
        entity = entity.bind(tango)();
        echo = entity.bottom;
        mike = _closure1_slot0;
        entity = 17;
        entity = zulu[entity];
        golf = mike.bind(tango)(entity);
        report = golf.useStateFromStoresArray;
        entity = _closure1_slot12;
        zulu = new Array(1);
        zulu[0] = entity;
        mike = new Array(2);
        mike[0] = foxtrot;
        mike[1] = romeo;
        entity = function() {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zulu = _closure2_slot1;
                entity = null;
                if(!(entity == zulu)) { _fun00020_ip = 19; continue _fun00019 }
 13:
                entity = new Array(0);
                _fun00020_ip = 51; continue _fun00019;
 19:
                report = _closure1_slot12;
                tango = report.getOnboardingResponsesForPrompt;
                zulu = _closure2_slot0;
                mike = _closure2_slot1;
                mike = mike.id;
                entity = tango.bind(report)(zulu, mike);
 51:
                return entity;
            }
        };
        yankee = report.bind(golf)(zulu, entity, mike);
        var _closure2_slot3 = yankee;
        zulu = _closure1_slot16;
        mike = _closure1_slot17;
        entity = {};
        golf = _closure1_slot7;
        report = {};
        backup = options.scrollContainer;
        options = new Array(2);
        options[0] = backup;
        backup = {};
        kilo = 64;
        kilo = kilo + echo;
        echo = 48;
        kilo = kilo + echo;
        kilo = kilo + echo;
        backup['paddingBottom'] = kilo;
        kilo = 'relative';
        backup['position'] = kilo;
        options[1] = backup;
        report['contentContainerStyle'] = options;
        kilo = _closure1_slot15;
        backup = _closure1_slot19;
        options = {};
        options['currentPrompt'] = romeo;
        options['numberOfPrompts'] = result;
        options['currentPromptIndex'] = sizing;
        backup = kilo.bind(tango)(backup, options);
        options = new Array(2);
        options[0] = backup;
        sizing = _closure1_slot15;
        kilo = _closure1_slot6;
        backup = {};
        echo = romeo.options;
        result = echo.map;
        output = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                report = _closure1_slot15;
                zulu = _closure1_slot1;
                tango = _closure1_slot2;
                mike = 31;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = {};
                mike['option'] = entity;
                options = _closure2_slot0;
                mike['guildId'] = options;
                golf = function(argFoo) { // Original name: onSelect
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        entity = argFoo;
                        report = _closure2_slot2;
                        mike = _closure2_slot1;
                        tango = mike.id;
                        mike = _closure3_slot0;
                        zulu = mike.id;
                        mike = null;
                        mike = mike != entity;
                        if(!mike) { _fun00024_ip = 43; continue _fun00023 }
 40:
                        mike = entity;
 43:
                        entity = undefined;
                        entity = report.bind(entity)(tango, zulu, mike);
                        return entity;
                    }
                };
                mike['onSelect'] = golf;
                options = _closure2_slot3;
                golf = options.includes;
                oscar = entity.id;
                golf = golf.bind(options)(oscar);
                oscar = null;
                oscar = oscar != golf;
                if(!oscar) { _fun00022_ip = 97; continue _fun00021 }
 94:
                oscar = golf;
 97:
                mike['selected'] = oscar;
                entity = entity.id;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            }
        };
        output = result.bind(echo)(output);
        backup['children'] = output;
        backup = sizing.bind(tango)(kilo, backup);
        options[1] = backup;
        report['children'] = options;
        golf = zulu.bind(tango)(golf, report);
        report = new Array(2);
        report[0] = golf;
        options = _closure1_slot15;
        golf = _closure1_slot20;
        oscar = {};
        oscar['guildId'] = foxtrot;
        oscar['currentPrompt'] = romeo;
        oscar['selectedOptionIds'] = yankee;
        oscar['handleOnPress'] = offset;
        oscar['lastPrompt'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['MultipleChoicePrompt'] = tango;
    mike = function(argFoo) { // Original name: DropdownPrompt
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            mike = argFoo;
            foxtrot = mike.guildId;
            var _closure2_slot0 = foxtrot;
            romeo = mike.currentPrompt;
            var _closure2_slot1 = romeo;
            verify = mike.lastPrompt;
            sizing = mike.currentPromptIndex;
            output = mike.numberOfPrompts;
            entity = mike.selectOption;
            var _closure2_slot2 = entity;
            offset = mike.handleOnPress;
            mike = _closure1_slot18;
            tango = undefined;
            context = mike.bind(tango)();
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 18;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.bind(tango)();
            result = mike.bottom;
            zulu = _closure1_slot0;
            mike = 17;
            mike = report[mike];
            options = zulu.bind(tango)(mike);
            golf = options.useStateFromStoresArray;
            mike = _closure1_slot12;
            report = new Array(1);
            report[0] = mike;
            zulu = new Array(2);
            zulu[0] = foxtrot;
            zulu[1] = romeo;
            mike = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    zulu = _closure2_slot1;
                    entity = null;
                    if(!(entity == zulu)) { _fun00028_ip = 19; continue _fun00027 }
 13:
                    entity = new Array(0);
                    _fun00028_ip = 51; continue _fun00027;
 19:
                    report = _closure1_slot12;
                    tango = report.getOnboardingResponsesForPrompt;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = mike.id;
                    entity = tango.bind(report)(zulu, mike);
 51:
                    return entity;
                }
            };
            yankee = golf.bind(options)(report, mike, zulu);
            var _closure2_slot3 = yankee;
            mike = null;
            zulu = mike == romeo;
            vacuum = undefined;
            if(zulu) { _fun00026_ip = 202; continue _fun00025 }
 173:
            report = romeo.options;
            mike = mike == report;
            vacuum = undefined;
            if(mike) { _fun00026_ip = 202; continue _fun00025 }
 187:
            zulu = report.filter;
            mike = function(argFoo) {
                zulu = _closure2_slot3;
                mike = zulu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            vacuum = zulu.bind(report)(mike);
 202:
            report = _closure1_slot4;
            zulu = report.useCallback;
            mike = new Array(3);
            mike[0] = foxtrot;
            golf = romeo.id;
            mike[1] = golf;
            mike[2] = entity;
            entity = function() {
                report = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 34;
                tango = mike[entity];
                entity = undefined;
                oscar = report.bind(entity)(tango);
                report = oscar.openLazy;
                tango = _closure1_slot0;
                zulu = 36;
                zulu = mike[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = 35;
                zulu = mike[zulu];
                mike = mike.paths;
                tango = tango.bind(entity)(zulu, mike);
                zulu = {};
                golf = _closure2_slot0;
                zulu['guildId'] = golf;
                mike = _closure2_slot1;
                mike = mike.id;
                zulu['promptId'] = mike;
                mike = function(argFoo, argBar) { // Original name: onSelect
                    _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                        entity = argBar;
                        report = _closure2_slot2;
                        mike = _closure2_slot1;
                        tango = mike.id;
                        mike = argFoo;
                        zulu = mike.id;
                        mike = null;
                        mike = mike != entity;
                        if(!mike) { _fun00030_ip = 39; continue _fun00029 }
 36:
                        mike = entity;
 39:
                        entity = undefined;
                        entity = report.bind(entity)(tango, zulu, mike);
                        return entity;
                    }
                };
                zulu['onSelect'] = mike;
                mike = 'DropdownOptions';
                mike = report.bind(oscar)(tango, mike, zulu);
                return entity;
            };
            update = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot16;
            mike = _closure1_slot17;
            entity = {};
            golf = _closure1_slot7;
            report = {};
            backup = context.scrollContainer;
            options = new Array(2);
            options[0] = backup;
            backup = {};
            kilo = 64;
            kilo = kilo + result;
            result = 48;
            kilo = kilo + result;
            kilo = kilo + result;
            backup['paddingBottom'] = kilo;
            kilo = 'relative';
            backup['position'] = kilo;
            options[1] = backup;
            report['contentContainerStyle'] = options;
            kilo = _closure1_slot15;
            backup = _closure1_slot19;
            options = {};
            options['currentPrompt'] = romeo;
            options['numberOfPrompts'] = output;
            options['currentPromptIndex'] = sizing;
            backup = kilo.bind(tango)(backup, options);
            options = new Array(2);
            options[0] = backup;
            sizing = _closure1_slot15;
            kilo = _closure1_slot6;
            backup = {};
            echo = _closure1_slot16;
            result = _closure1_slot0;
            control = _closure1_slot2;
            output = 37;
            output = control[output];
            output = result.bind(tango)(output);
            result = output.PressableHighlight;
            output = {};
            control = context.dropdownContainer;
            output['style'] = control;
            output['onPress'] = update;
            control = vacuum.length;
            update = 0;
            control = update === control;
            if(!control) { _fun00026_ip = 485; continue _fun00025 }
 424:
            config = _closure1_slot15;
            sequence = _closure1_slot0;
            record = _closure1_slot2;
            update = 23;
            update = record[update];
            update = sequence.bind(tango)(update);
            sequence = update.Text;
            update = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-muted', 'children': 'No answers selected.'};
            record = context.emptyDropdownText;
            update['style'] = record;
            control = config.bind(tango)(sequence, update);
 485:
            update = new Array(3);
            update[0] = control;
            control = vacuum.map;
            source = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot15;
                tango = _closure1_slot22;
                zulu = {};
                zulu['option'] = entity;
                mike = entity.id;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            source = control.bind(vacuum)(source);
            update[1] = source;
            vacuum = _closure1_slot15;
            control = _closure1_slot6;
            source = {};
            sequence = context.dropdownIconContainer;
            source['style'] = sequence;
            record = _closure1_slot15;
            config = _closure1_slot5;
            sequence = {};
            context = context.dropdownIcon;
            sequence['style'] = context;
            papa = _closure1_slot1;
            target = _closure1_slot2;
            context = 38;
            context = target[context];
            context = papa.bind(tango)(context);
            sequence['source'] = context;
            sequence = record.bind(tango)(config, sequence);
            source['children'] = sequence;
            source = vacuum.bind(tango)(control, source);
            update[2] = source;
            output['children'] = update;
            output = echo.bind(tango)(result, output);
            backup['children'] = output;
            backup = sizing.bind(tango)(kilo, backup);
            options[1] = backup;
            report['children'] = options;
            golf = zulu.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot15;
            golf = _closure1_slot20;
            oscar = {};
            oscar['guildId'] = foxtrot;
            oscar['currentPrompt'] = romeo;
            oscar['selectedOptionIds'] = yankee;
            oscar['handleOnPress'] = offset;
            oscar['lastPrompt'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['DropdownPrompt'] = mike;
    return entity;
})();