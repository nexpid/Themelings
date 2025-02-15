// app/modules/main_tabs_v2/native/tabs/gravity/EmojiReactionsRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    report = function(argFoo) { // Original name: AddEmojiButton
        _fun117496: for(var _fun117496_ip = 0; ; ) switch(_fun117496_ip) {
 0:
            mike = argFoo;
            romeo = mike.channel;
            var _closure2_slot0 = romeo;
            verify = mike.onOpenPicker;
            var _closure2_slot1 = verify;
            yankee = mike.onPressEmoji;
            var _closure2_slot2 = yankee;
            oscar = mike.showText;
            report = mike.disabled;
            mike = _closure1_slot18;
            tango = undefined;
            offset = mike.bind(tango)();
            options = _closure1_slot4;
            zulu = options.useCallback;
            mike = new Array(3);
            mike[0] = romeo;
            mike[1] = yankee;
            mike[2] = verify;
            entity = function() {
                _fun117497: for(var _fun117497_ip = 0; ; ) switch(_fun117497_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 15;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.openEmojiPickerActionSheet;
                    mike = {'pickerIntention': null, 'autoFocus': false, 'startExpanded': false};
                    report = _closure1_slot14;
                    report = report.REACTION;
                    mike['pickerIntention'] = report;
                    report = _closure2_slot2;
                    mike['onPressEmoji'] = report;
                    golf = _closure2_slot0;
                    mike['channel'] = golf;
                    report = null;
                    golf = report == golf;
                    report = undefined;
                    if(golf) { _fun117497_ip = 109; continue _fun117497 }
 100:
                    oscar = _closure2_slot0;
                    report = oscar.guild_id;
 109:
                    mike['guildId'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            options = zulu.bind(options)(entity, mike);
            zulu = _closure1_slot16;
            mike = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 16;
            entity = verify[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.PressableOpacity;
            entity = {};
            entity['onPress'] = options;
            verify = offset.emojiContainer;
            options = new Array(3);
            options[0] = verify;
            verify = offset.addEmojiContainer;
            options[1] = verify;
            verify = null;
            if(!report) { _fun117496_ip = 166; continue _fun117496 }
 161:
            verify = offset.disabled;
 166:
            options[2] = verify;
            entity['style'] = options;
            options = true;
            entity['accessible'] = options;
            options = _closure1_slot0;
            offset = _closure1_slot2;
            backup = 17;
            verify = offset[backup];
            verify = options.bind(tango)(verify);
            romeo = verify.intl;
            yankee = romeo.string;
            verify = offset[backup];
            verify = options.bind(tango)(verify);
            verify = verify.t;
            verify = verify.lfIHs7;
            verify = yankee.bind(romeo)(verify);
            entity['accessibilityLabel'] = verify;
            entity['disabled'] = report;
            verify = _closure1_slot15;
            report = 18;
            report = offset[report];
            report = options.bind(tango)(report);
            options = report.ReactionIcon;
            report = {};
            offset = 'sm';
            report['size'] = offset;
            options = verify.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            if(!oscar) { _fun117496_ip = 390; continue _fun117496 }
 293:
            verify = _closure1_slot15;
            foxtrot = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 19;
            golf = offset[golf];
            golf = foxtrot.bind(tango)(golf);
            options = golf.Text;
            golf = {'variant': 'text-sm/semibold', 'color': 'redesign-button-tertiary-text'};
            yankee = offset[backup];
            yankee = foxtrot.bind(tango)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            offset = offset[backup];
            offset = foxtrot.bind(tango)(offset);
            offset = offset.t;
            offset = offset.m9O1gY;
            offset = yankee.bind(romeo)(offset);
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 390:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot19 = report;
    entity = function(argFoo) { // Original name: EmojiReaction
        _fun117498: for(var _fun117498_ip = 0; ; ) switch(_fun117498_ip) {
 0:
            mike = argFoo;
            source = mike.messageId;
            var _closure2_slot0 = source;
            control = mike.channel;
            var _closure2_slot1 = control;
            echo = mike.reaction;
            var _closure2_slot2 = echo;
            kilo = mike.count;
            backup = mike.isBurstReaction;
            var _closure2_slot3 = backup;
            tango = undefined;
            var _closure2_slot4 = tango;
            mike = _closure1_slot18;
            output = mike.bind(tango)();
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 20;
            mike = report[mike];
            report = zulu.bind(tango)(mike);
            zulu = report.useEmojiColorPalette;
            mike = echo.burst_colors;
            romeo = null;
            if(!(romeo == mike)) { _fun117498_ip = 107; continue _fun117498 }
 103:
            mike = new Array(0);
 107:
            zulu = zulu.bind(report)(mike);
            report = control.type;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 21;
            mike = golf[mike];
            mike = oscar.bind(tango)(mike);
            mike = mike.ChannelTypes;
            mike = mike.GUILD_ANNOUNCEMENT;
            result = 'message';
            if(!(report === mike)) { _fun117498_ip = 161; continue _fun117498 }
 157:
            result = 'announcement';
 161:
            _closure2_slot4 = result;
            offset = {};
            report = romeo != zulu;
            golf = '';
            mike = golf;
            if(!report) { _fun117498_ip = 274; continue _fun117498 }
 181:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            report = 22;
            report = options[report];
            yankee = oscar.bind(tango)(report);
            options = yankee.hex2rgb;
            report = romeo == zulu;
            oscar = undefined;
            if(report) { _fun117498_ip = 221; continue _fun117498 }
 216:
            oscar = zulu.backgroundColor;
 221:
            report = romeo == zulu;
            foxtrot = undefined;
            if(report) { _fun117498_ip = 235; continue _fun117498 }
 230:
            foxtrot = zulu.opacity;
 235:
            sizing = romeo != foxtrot;
            report = 0.15;
            if(!sizing) { _fun117498_ip = 255; continue _fun117498 }
 252:
            report = foxtrot;
 255:
            report = options.bind(yankee)(oscar, report);
            oscar = romeo != report;
            mike = golf;
            if(!oscar) { _fun117498_ip = 274; continue _fun117498 }
 271:
            mike = report;
 274:
            offset['backgroundColor'] = mike;
            report = romeo == zulu;
            mike = undefined;
            if(report) { _fun117498_ip = 292; continue _fun117498 }
 287:
            mike = zulu.backgroundColor;
 292:
            offset['borderColor'] = mike;
            report = romeo == zulu;
            mike = undefined;
            if(report) { _fun117498_ip = 312; continue _fun117498 }
 306:
            mike = zulu.accentColor;
 312:
            mike = romeo != mike;
            foxtrot = null;
            if(!mike) { _fun117498_ip = 336; continue _fun117498 }
 321:
            mike = {};
            zulu = zulu.accentColor;
            mike['color'] = zulu;
            foxtrot = mike;
 336:
            update = echo.emoji;
            if(backup) { _fun117498_ip = 353; continue _fun117498 }
 345:
            yankee = echo.me;
            _fun117498_ip = 359; continue _fun117498;
 353:
            yankee = echo.me_burst;
 359:
            options = undefined;
            if(!yankee) { _fun117498_ip = 370; continue _fun117498 }
 364:
            options = output.selected;
 370:
            mike = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 23;
            zulu = golf[zulu];
            sizing = mike.bind(tango)(zulu);
            oscar = sizing.useStateFromStores;
            zulu = _closure1_slot8;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                _fun117499: for(var _fun117499_ip = 0; ; ) switch(_fun117499_ip) {
 0:
                    entity = _closure2_slot1;
                    zulu = entity.guild_id;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun117499_ip = 48; continue _fun117499 }
 21:
                    tango = _closure1_slot8;
                    zulu = tango.canChatInGuild;
                    mike = _closure2_slot1;
                    mike = mike.guild_id;
                    entity = zulu.bind(tango)(mike);
 48:
                    return entity;
                }
            };
            report = oscar.bind(sizing)(report, zulu);
            sizing = _closure1_slot4;
            oscar = sizing.useCallback;
            zulu = new Array(5);
            zulu[0] = control;
            zulu[1] = backup;
            zulu[2] = source;
            zulu[3] = echo;
            zulu[4] = result;
            entity = function() {
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 24;
                mike = offset[entity];
                entity = undefined;
                oscar = verify.bind(entity)(mike);
                report = oscar.trackItemInteraction;
                options = _closure2_slot0;
                tango = _closure2_slot4;
                zulu = 'press_reaction';
                zulu = report.bind(oscar)(options, tango, zulu);
                zulu = 25;
                zulu = offset[zulu];
                golf = verify.bind(entity)(zulu);
                oscar = golf.handleAddOrRemoveReaction;
                backup = _closure2_slot1;
                foxtrot = _closure2_slot2;
                romeo = _closure2_slot3;
                mike = 14;
                mike = offset[mike];
                mike = verify.bind(entity)(mike);
                mike = mike.ReactionLocations;
                yankee = mike.MESSAGE;
                sizing = golf;
                kilo = options;
                mike = sizing[oscar](kilo, backup, foxtrot, romeo, yankee, offset);
                return entity;
            };
            oscar = oscar.bind(sizing)(entity, zulu);
            zulu = _closure1_slot16;
            entity = 16;
            entity = golf[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.PressableOpacity;
            entity = {};
            sizing = output.emojiContainer;
            golf = new Array(3);
            golf[0] = sizing;
            golf[1] = options;
            options = backup;
            if(!options) { _fun117498_ip = 517; continue _fun117498 }
 514:
            options = offset;
 517:
            golf[2] = options;
            entity['style'] = golf;
            entity['onPress'] = oscar;
            sizing = true;
            entity['accessible'] = sizing;
            oscar = update.name;
            entity['accessibilityLabel'] = oscar;
            report = !report;
            entity['disabled'] = report;
            golf = _closure1_slot15;
            oscar = _closure1_slot5;
            report = {};
            offset = output.innerEmojiContainer;
            options = new Array(2);
            options[0] = offset;
            offset = yankee;
            if(!yankee) { _fun117498_ip = 588; continue _fun117498 }
 582:
            offset = output.selectedInnerEmojiContainer;
 588:
            options[1] = offset;
            report['style'] = options;
            options = update.id;
            if(!(romeo != options)) { _fun117498_ip = 722; continue _fun117498 }
 605:
            result = _closure1_slot15;
            offset = _closure1_slot6;
            options = {};
            source = output.defaultEmoji;
            echo = new Array(2);
            echo[0] = source;
            source = output.emojiImage;
            echo[1] = source;
            options['style'] = echo;
            echo = {};
            control = _closure1_slot1;
            vacuum = _closure1_slot2;
            source = 26;
            source = vacuum[source];
            vacuum = control.bind(tango)(source);
            control = vacuum.getEmojiURL;
            source = {};
            sequence = update.id;
            source['id'] = sequence;
            sequence = update.animated;
            source['animated'] = sequence;
            sequence = 48;
            source['size'] = sequence;
            source = control.bind(vacuum)(source);
            echo['uri'] = source;
            options['source'] = echo;
            options = result.bind(tango)(offset, options);
            _fun117498_ip = 810; continue _fun117498;
 722:
            echo = _closure1_slot15;
            result = _closure1_slot0;
            source = _closure1_slot2;
            offset = 19;
            offset = source[offset];
            offset = result.bind(tango)(offset);
            result = offset.Text;
            offset = {'variant': 'text-md/medium', 'color': 'interactive-normal', 'style': null, 'allowFontScaling': false};
            control = output.defaultEmoji;
            source = new Array(2);
            source[0] = control;
            control = output.emojiText;
            source[1] = control;
            offset['style'] = source;
            update = update.name;
            offset['children'] = update;
            options = echo.bind(tango)(result, offset);
 810:
            report['children'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot15;
            golf = _closure1_slot5;
            oscar = {};
            result = output.innerTextContainer;
            offset = new Array(2);
            offset[0] = result;
            if(!yankee) { _fun117498_ip = 861; continue _fun117498 }
 855:
            yankee = output.selectedInnerTextContainer;
 861:
            offset[1] = yankee;
            oscar['style'] = offset;
            yankee = _closure1_slot15;
            offset = _closure1_slot1;
            output = _closure1_slot2;
            verify = 27;
            verify = output[verify];
            offset = offset.bind(tango)(verify);
            verify = {};
            verify['animate'] = sizing;
            verify['count'] = kilo;
            romeo = null;
            if(!backup) { _fun117498_ip = 912; continue _fun117498 }
 909:
            romeo = foxtrot;
 912:
            verify['textStyle'] = romeo;
            romeo = 'text-md/semibold';
            verify['textVariant'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    tango = function(argFoo) { // Original name: ForwardButton
        _fun117501: for(var _fun117501_ip = 0; ; ) switch(_fun117501_ip) {
 0:
            entity = argFoo;
            golf = entity.onPress;
            oscar = entity.disabled;
            entity = _closure1_slot18;
            tango = undefined;
            verify = entity.bind(tango)();
            zulu = _closure1_slot15;
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 16;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.PressableOpacity;
            entity = {};
            entity['onPress'] = golf;
            options = verify.emojiContainer;
            golf = new Array(3);
            golf[0] = options;
            options = verify.addEmojiContainer;
            golf[1] = options;
            options = null;
            if(!oscar) { _fun117501_ip = 96; continue _fun117501 }
 91:
            options = verify.disabled;
 96:
            golf[2] = options;
            entity['style'] = golf;
            golf = true;
            entity['accessible'] = golf;
            entity['disabled'] = oscar;
            offset = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 17;
            golf = options[oscar];
            golf = offset.bind(tango)(golf);
            verify = golf.intl;
            golf = verify.string;
            oscar = options[oscar];
            oscar = offset.bind(tango)(oscar);
            oscar = oscar.t;
            oscar = oscar.xIUfJS;
            oscar = golf.bind(verify)(oscar);
            entity['accessibilityLabel'] = oscar;
            golf = _closure1_slot15;
            oscar = _closure1_slot1;
            report = 28;
            report = options[report];
            oscar = oscar.bind(tango)(report);
            report = {};
            options = 'sm';
            report['size'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot21 = tango;
    mike = function(argFoo) { // Original name: ReplyButton
        _fun117502: for(var _fun117502_ip = 0; ; ) switch(_fun117502_ip) {
 0:
            entity = argFoo;
            golf = entity.onPress;
            oscar = entity.disabled;
            entity = _closure1_slot18;
            tango = undefined;
            verify = entity.bind(tango)();
            zulu = _closure1_slot15;
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 16;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.PressableOpacity;
            entity = {};
            entity['onPress'] = golf;
            options = verify.emojiContainer;
            golf = new Array(3);
            golf[0] = options;
            options = verify.addEmojiContainer;
            golf[1] = options;
            options = null;
            if(!oscar) { _fun117502_ip = 96; continue _fun117502 }
 91:
            options = verify.disabled;
 96:
            golf[2] = options;
            entity['style'] = golf;
            golf = true;
            entity['accessible'] = golf;
            entity['disabled'] = oscar;
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            golf = 17;
            verify = options[golf];
            verify = oscar.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            golf = options[golf];
            golf = oscar.bind(tango)(golf);
            golf = golf.t;
            golf = golf.5NwaNT;
            golf = verify.bind(offset)(golf);
            entity['accessibilityLabel'] = golf;
            golf = _closure1_slot15;
            report = 29;
            report = options[report];
            report = oscar.bind(tango)(report);
            oscar = report.ArrowAngleLeftUpIcon;
            report = {};
            options = 'sm';
            report['size'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot22 = mike;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    yankee = verify[golf];
    golf = argCorge;
    golf = golf.bind(entity)(yankee);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    yankee = golf.View;
    var _closure1_slot5 = yankee;
    yankee = golf.Image;
    var _closure1_slot6 = yankee;
    golf = golf.ScrollView;
    var _closure1_slot7 = golf;
    golf = 3;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = 4;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot9 = golf;
    golf = 5;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.ICYMI_MARGIN;
    var _closure1_slot10 = offset;
    golf = golf.MESSAGE_CONTENT_INSET;
    var _closure1_slot11 = golf;
    golf = 6;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.HorizontalGradient;
    var _closure1_slot12 = offset;
    golf = golf.Permissions;
    var _closure1_slot13 = golf;
    golf = 7;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.EmojiIntention;
    var _closure1_slot14 = golf;
    golf = 8;
    offset = verify[golf];
    offset = options.bind(entity)(offset);
    offset = offset.jsx;
    var _closure1_slot15 = offset;
    offset = verify[golf];
    offset = options.bind(entity)(offset);
    offset = offset.jsxs;
    var _closure1_slot16 = offset;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot17 = golf;
    golf = 9;
    golf = verify[golf];
    yankee = options.bind(entity)(golf);
    offset = yankee.createStyles;
    golf = function() {
        _fun117503: for(var _fun117503_ip = 0; ; ) switch(_fun117503_ip) {
 0:
            entity = {};
            mike = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'justifyContent': 'space-between'};
            entity['container'] = mike;
            mike = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': 6};
            entity['replyForwardButtonContainer'] = mike;
            mike = {'position': 'relative', 'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': 6};
            entity['emojisRowContainer'] = mike;
            mike = {'position': 'relative', 'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': 6};
            entity['emojisContainer'] = mike;
            mike = {'flexDirection': 'row', 'backgroundColor': null, 'borderRadius': null, 'flexShrink': 3, 'paddingHorizontal': 8, 'gap': 6};
            tango = _closure1_slot1;
            verify = _closure1_slot2;
            options = 10;
            zulu = verify[options];
            golf = undefined;
            zulu = tango.bind(golf)(zulu);
            zulu = zulu.colors;
            zulu = zulu.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
            mike['backgroundColor'] = zulu;
            zulu = verify[options];
            zulu = tango.bind(golf)(zulu);
            zulu = zulu.radii;
            zulu = zulu.sm;
            mike['borderRadius'] = zulu;
            entity['emojiContainer'] = mike;
            mike = {};
            zulu = 5;
            mike['paddingVertical'] = zulu;
            entity['innerEmojiContainer'] = mike;
            mike = {};
            zulu = 4;
            mike['paddingVertical'] = zulu;
            entity['selectedInnerEmojiContainer'] = mike;
            mike = {'minHeight': 30, 'alignItems': 'center'};
            entity['addEmojiContainer'] = mike;
            mike = {};
            zulu = 0.4;
            mike['opacity'] = zulu;
            entity['disabled'] = mike;
            zulu = 20;
            mike = {'width': 20, 'height': 20};
            entity['defaultEmoji'] = mike;
            mike = {'lineHeight': null, 'fontSize': 16, 'textAlign': 'center', 'paddingTop': 2};
            oscar = _closure1_slot0;
            tango = 11;
            tango = verify[tango];
            oscar = oscar.bind(golf)(tango);
            tango = oscar.isAndroid;
            tango = tango.bind(oscar)();
            if(!tango) { _fun117503_ip = 292; continue _fun117503 }
 289:
            zulu = 16;
 292:
            mike['lineHeight'] = zulu;
            entity['emojiText'] = mike;
            mike = {};
            zulu = 3.5;
            mike['paddingBottom'] = zulu;
            entity['selectedInnerTextContainer'] = mike;
            mike = {'alignSelf': 'flex-end', 'paddingBottom': 4.5};
            entity['innerTextContainer'] = mike;
            mike = {'resizeMode': 'contain', 'width': 20, 'height': 20};
            entity['emojiImage'] = mike;
            mike = {'borderColor': null, 'borderWidth': 1, 'paddingHorizontal': 7};
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            oscar = zulu[options];
            oscar = tango.bind(golf)(oscar);
            oscar = oscar.unsafe_rawColors;
            oscar = oscar.BRAND_560;
            mike['borderColor'] = oscar;
            oscar = _closure1_slot0;
            report = 12;
            report = zulu[report];
            oscar = oscar.bind(golf)(report);
            report = oscar.hexWithOpacity;
            zulu = zulu[options];
            zulu = tango.bind(golf)(zulu);
            zulu = zulu.unsafe_rawColors;
            tango = zulu.BRAND_500;
            zulu = 0.3;
            zulu = report.bind(oscar)(tango, zulu);
            mike['backgroundColor'] = zulu;
            entity['selected'] = mike;
            zulu = 0;
            mike = {'position': 'absolute', 'right': 0, 'top': 0, 'bottom': 0, 'width': 48};
            entity['gradient'] = mike;
            mike = {'position': 'absolute', 'right': 0};
            entity['overflowChevron'] = mike;
            mike = {};
            mike['opacity'] = zulu;
            entity['chevronHidden'] = mike;
            return entity;
        }
    };
    golf = offset.bind(yankee)(golf);
    var _closure1_slot18 = golf;
    golf = 40;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/main_tabs_v2/native/tabs/gravity/EmojiReactionsRow.tsx';
    golf = options.bind(verify)(golf);
    oscar = function(argFoo) { // Original name: EmojiReactionsRow
        _fun117504: for(var _fun117504_ip = 0; ; ) switch(_fun117504_ip) {
 0:
            mike = argFoo;
            entity = mike.message;
            var _closure2_slot0 = entity;
            vacuum = mike.channel;
            var _closure2_slot1 = vacuum;
            golf = mike.hideAdditionalButtons;
            tango = undefined;
            if(!(golf === tango)) { _fun117504_ip = 37; continue _fun117504 }
 35:
            golf = false;
 37:
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            mike = _closure1_slot18;
            offset = mike.bind(tango)();
            report = vacuum.type;
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 21;
            mike = oscar[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.ChannelTypes;
            zulu = mike.GUILD_ANNOUNCEMENT;
            mike = 'message';
            if(!(report === zulu)) { _fun117504_ip = 105; continue _fun117504 }
 101:
            mike = 'announcement';
 105:
            _closure2_slot2 = mike;
            oscar = _closure1_slot4;
            report = oscar.useCallback;
            mike = vacuum.id;
            zulu = new Array(2);
            zulu[0] = mike;
            mike = entity.id;
            zulu[1] = mike;
            mike = function(argFoo, argBar) {
                _fun117505: for(var _fun117505_ip = 0; ; ) switch(_fun117505_ip) {
 0:
                    tango = argFoo;
                    mike = _closure2_slot1;
                    golf = mike.id;
                    entity = _closure2_slot0;
                    oscar = entity.id;
                    entity = null;
                    if(!(entity != tango)) { _fun117505_ip = 131; continue _fun117505 }
 30:
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    entity = 13;
                    entity = verify[entity];
                    mike = undefined;
                    zulu = options.bind(mike)(entity);
                    entity = zulu.toReactionEmoji;
                    romeo = entity.bind(zulu)(tango);
                    entity = 14;
                    zulu = verify[entity];
                    tango = options.bind(mike)(zulu);
                    zulu = tango.addReaction;
                    entity = verify[entity];
                    entity = options.bind(mike)(entity);
                    entity = entity.ReactionLocations;
                    yankee = entity.MESSAGE;
                    entity = {};
                    options = argBar;
                    entity['burst'] = options;
                    kilo = tango;
                    backup = golf;
                    foxtrot = oscar;
                    offset = entity;
                    entity = kilo[zulu](backup, foxtrot, romeo, yankee, offset, verify);
 131:
                    entity = undefined;
                    return entity;
                }
            };
            control = report.bind(oscar)(mike, zulu);
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 30;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            foxtrot = mike.bind(tango)(vacuum);
            zulu = _closure1_slot0;
            mike = 31;
            mike = report[mike];
            oscar = zulu.bind(tango)(mike);
            mike = oscar.useCanForwardMessage;
            backup = mike.bind(oscar)(entity);
            verify = _closure1_slot4;
            options = verify.useCallback;
            oscar = new Array(1);
            oscar[0] = entity;
            mike = function() {
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 24;
                mike = tango[entity];
                entity = undefined;
                verify = zulu.bind(entity)(mike);
                options = verify.trackItemInteraction;
                report = _closure2_slot0;
                golf = report.id;
                oscar = 'message';
                mike = 'press_forward';
                mike = options.bind(verify)(golf, oscar, mike);
                mike = 32;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.openForwardModal;
                mike = {};
                mike['message'] = report;
                report = 'icymi-tab';
                mike['source'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            kilo = options.bind(verify)(mike, oscar);
            verify = _closure1_slot4;
            options = verify.useCallback;
            oscar = new Array(2);
            oscar[0] = vacuum;
            oscar[1] = entity;
            mike = function() {
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                oscar = 24;
                mike = tango[oscar];
                entity = undefined;
                yankee = zulu.bind(entity)(mike);
                offset = yankee.trackItemInteraction;
                report = _closure2_slot0;
                verify = report.id;
                options = 'message';
                golf = 'press_reply';
                golf = offset.bind(yankee)(verify, options, golf);
                oscar = tango[oscar];
                offset = zulu.bind(entity)(oscar);
                verify = offset.navigateToPost;
                oscar = _closure2_slot1;
                options = oscar.id;
                golf = oscar.guild_id;
                mike = report.id;
                mike = verify.bind(offset)(options, golf, mike);
                mike = 33;
                mike = tango[mike];
                tango = zulu.bind(entity)(mike);
                zulu = tango.createPendingReply;
                mike = {};
                mike['channel'] = oscar;
                mike['message'] = report;
                report = true;
                mike['shouldMention'] = report;
                mike['showMentionToggle'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            output = options.bind(verify)(mike, oscar);
            mike = 23;
            mike = report[mike];
            oscar = zulu.bind(tango)(mike);
            report = oscar.useStateFromStores;
            mike = _closure1_slot9;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                tango = _closure1_slot9;
                zulu = tango.can;
                entity = _closure1_slot13;
                mike = entity.SEND_MESSAGES;
                entity = _closure2_slot1;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            sizing = report.bind(oscar)(zulu, mike);
            report = _closure1_slot4;
            zulu = report.useMemo;
            entity = entity.reactions;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                entity = new Array(0);
                var _closure3_slot0 = entity;
                zulu = _closure2_slot0;
                tango = zulu.reactions;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun117510: for(var _fun117510_ip = 0; ; ) switch(_fun117510_ip) {
 0:
                        tango = argFoo;
                        mike = tango.me_vote;
                        entity = null;
                        if(!(entity == mike)) { _fun117510_ip = 189; continue _fun117510 }
 18:
                        entity = tango.burst_count;
                        mike = 0;
                        if(!(entity > mike)) { _fun117510_ip = 105; continue _fun117510 }
 30:
                        report = _closure3_slot0;
                        zulu = report.push;
                        entity = {};
                        offset = entity;
                        verify = tango;
                        oscar = copyDataProperties(offset, verify);
                        options = _closure1_slot0;
                        golf = _closure1_slot2;
                        oscar = 34;
                        golf = golf[oscar];
                        oscar = undefined;
                        oscar = options.bind(oscar)(golf);
                        oscar = oscar.ReactionTypes;
                        golf = oscar.BURST;
                        oscar = 'type';
                        entity[oscar] = golf;
                        entity = zulu.bind(report)(entity);
 105:
                        entity = tango.count;
                        if(!(entity > mike)) { _fun117510_ip = 189; continue _fun117510 }
 114:
                        zulu = _closure3_slot0;
                        mike = zulu.push;
                        entity = {};
                        offset = entity;
                        verify = tango;
                        tango = copyDataProperties(offset, verify);
                        oscar = _closure1_slot0;
                        report = _closure1_slot2;
                        tango = 34;
                        report = report[tango];
                        tango = undefined;
                        tango = oscar.bind(tango)(report);
                        tango = tango.ReactionTypes;
                        report = tango.NORMAL;
                        tango = 'type';
                        entity[tango] = report;
                        entity = mike.bind(zulu)(entity);
 189:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            verify = zulu.bind(report)(entity, mike);
            entity = verify.length;
            zulu = 3;
            update = verify;
            if(!(entity > zulu)) { _fun117504_ip = 375; continue _fun117504 }
 362:
            mike = verify.slice;
            entity = 0;
            update = mike.bind(verify)(entity, zulu);
 375:
            entity = verify.length;
            mike = entity > zulu;
            source = 0;
            entity = 0;
            if(!mike) { _fun117504_ip = 400; continue _fun117504 }
 391:
            mike = verify.length;
            entity = mike - zulu;
 400:
            romeo = _closure1_slot0;
            echo = _closure1_slot2;
            mike = 35;
            mike = echo[mike];
            report = romeo.bind(tango)(mike);
            zulu = report.useToken;
            oscar = _closure1_slot1;
            mike = 10;
            mike = echo[mike];
            mike = oscar.bind(tango)(mike);
            mike = mike.colors;
            mike = mike.BG_BASE_PRIMARY;
            variable36 = zulu.bind(report)(mike);
            zulu = _closure1_slot4;
            mike = zulu.useState;
            oscar = true;
            zulu = mike.bind(zulu)(oscar);
            mike = _closure1_slot3;
            result = 2;
            zulu = mike.bind(tango)(zulu, result);
            papa = zulu[source];
            mike = 1;
            mike = zulu[mike];
            _closure2_slot3 = mike;
            options = _closure1_slot4;
            report = options.useCallback;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                mike = entity.contentOffset;
                tango = mike.x;
                mike = entity.contentSize;
                mike = mike.width;
                entity = entity.layoutMeasurement;
                entity = entity.width;
                zulu = _closure2_slot3;
                entity = tango + entity;
                mike = entity >= mike;
                entity = undefined;
                mike = !mike;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = new Array(0);
            report = report.bind(options)(zulu, mike);
            options = _closure1_slot4;
            zulu = options.useContext;
            mike = 36;
            mike = echo[mike];
            mike = romeo.bind(tango)(mike);
            mike = mike.ICYMIContext;
            mike = zulu.bind(options)(mike);
            romeo = mike.width;
            target = entity > source;
            if(target) { _fun117504_ip = 592; continue _fun117504 }
 573:
            mike = verify.map;
            entity = function(argFoo, argBar) {
                _fun117513: for(var _fun117513_ip = 0; ; ) switch(_fun117513_ip) {
 0:
                    options = argFoo;
                    report = _closure1_slot15;
                    tango = _closure1_slot5;
                    zulu = {};
                    oscar = _closure1_slot20;
                    entity = {};
                    verify = _closure2_slot0;
                    verify = verify.id;
                    entity['messageId'] = verify;
                    mike = _closure2_slot1;
                    entity['channel'] = mike;
                    entity['reaction'] = options;
                    yankee = options.type;
                    romeo = _closure1_slot0;
                    mike = _closure1_slot2;
                    offset = 34;
                    verify = mike[offset];
                    mike = undefined;
                    verify = romeo.bind(mike)(verify);
                    verify = verify.ReactionTypes;
                    verify = verify.BURST;
                    if(!(yankee !== verify)) { _fun117513_ip = 101; continue _fun117513 }
 94:
                    verify = options.count;
                    _fun117513_ip = 107; continue _fun117513;
 101:
                    verify = options.burst_count;
 107:
                    entity['count'] = verify;
                    options = options.type;
                    verify = _closure1_slot0;
                    golf = _closure1_slot2;
                    golf = golf[offset];
                    golf = verify.bind(mike)(golf);
                    golf = golf.ReactionTypes;
                    golf = golf.BURST;
                    golf = options === golf;
                    entity['isBurstReaction'] = golf;
                    entity = report.bind(mike)(oscar, entity);
                    zulu['children'] = entity;
                    entity = global;
                    entity = entity.HermesInternal;
                    golf = entity.concat;
                    oscar = 'reaction-';
                    entity = argBar;
                    entity = golf.bind(oscar)(entity);
                    entity = report.bind(mike)(tango, zulu, entity);
                    return entity;
                }
            };
            context = mike.bind(verify)(entity);
            _fun117504_ip = 704; continue _fun117504;
 592:
            zulu = _closure1_slot15;
            mike = _closure1_slot7;
            entity = {};
            entity['horizontal'] = oscar;
            entity['scrollEnabled'] = target;
            oscar = {};
            options = _closure1_slot10;
            options = result * options;
            romeo = romeo - options;
            options = _closure1_slot11;
            romeo = romeo - options;
            options = 120;
            options = romeo - options;
            oscar['maxWidth'] = options;
            entity['style'] = oscar;
            oscar = {};
            options = 6;
            oscar['gap'] = options;
            entity['contentContainerStyle'] = oscar;
            oscar = false;
            entity['showsHorizontalScrollIndicator'] = oscar;
            entity['onScroll'] = report;
            oscar = verify.map;
            report = function(argFoo, argBar) {
                _fun117512: for(var _fun117512_ip = 0; ; ) switch(_fun117512_ip) {
 0:
                    options = argFoo;
                    report = _closure1_slot15;
                    tango = _closure1_slot5;
                    zulu = {};
                    oscar = _closure1_slot20;
                    entity = {};
                    verify = _closure2_slot0;
                    verify = verify.id;
                    entity['messageId'] = verify;
                    mike = _closure2_slot1;
                    entity['channel'] = mike;
                    entity['reaction'] = options;
                    yankee = options.type;
                    romeo = _closure1_slot0;
                    mike = _closure1_slot2;
                    offset = 34;
                    verify = mike[offset];
                    mike = undefined;
                    verify = romeo.bind(mike)(verify);
                    verify = verify.ReactionTypes;
                    verify = verify.BURST;
                    if(!(yankee !== verify)) { _fun117512_ip = 101; continue _fun117512 }
 94:
                    verify = options.count;
                    _fun117512_ip = 107; continue _fun117512;
 101:
                    verify = options.burst_count;
 107:
                    entity['count'] = verify;
                    options = options.type;
                    verify = _closure1_slot0;
                    golf = _closure1_slot2;
                    golf = golf[offset];
                    golf = verify.bind(mike)(golf);
                    golf = golf.ReactionTypes;
                    golf = golf.BURST;
                    golf = options === golf;
                    entity['isBurstReaction'] = golf;
                    entity = report.bind(mike)(oscar, entity);
                    zulu['children'] = entity;
                    entity = global;
                    entity = entity.HermesInternal;
                    golf = entity.concat;
                    oscar = 'reaction-';
                    entity = argBar;
                    entity = golf.bind(oscar)(entity);
                    entity = report.bind(mike)(tango, zulu, entity);
                    return entity;
                }
            };
            report = oscar.bind(verify)(report);
            entity['children'] = report;
            context = zulu.bind(tango)(mike, entity);
 704:
            zulu = _closure1_slot16;
            mike = _closure1_slot5;
            entity = {};
            report = offset.container;
            entity['style'] = report;
            options = _closure1_slot16;
            oscar = _closure1_slot5;
            report = {};
            romeo = offset.emojisRowContainer;
            report['style'] = romeo;
            verify = verify.length;
            verify = verify > source;
            romeo = null;
            if(!verify) { _fun117504_ip = 1071; continue _fun117504 }
 760:
            config = _closure1_slot16;
            echo = _closure1_slot5;
            verify = {};
            status = offset.emojisContainer;
            record = new Array(1);
            record[0] = status;
            verify['style'] = record;
            record = new Array(2);
            record[0] = context;
            context = null;
            if(!target) { _fun117504_ip = 1057; continue _fun117504 }
 804:
            context = null;
            if(!papa) { _fun117504_ip = 1057; continue _fun117504 }
 812:
            status = _closure1_slot16;
            target = _closure1_slot17;
            papa = {};
            whiskey = _closure1_slot15;
            variable37 = _closure1_slot1;
            quebec = _closure1_slot2;
            sierra = 37;
            sierra = quebec[sierra];
            lima = variable37.bind(tango)(sierra);
            sierra = {};
            equality = offset.gradient;
            sierra['style'] = equality;
            equality = _closure1_slot12;
            variable38 = equality.START;
            sierra['start'] = variable38;
            equality = equality.END;
            sierra['end'] = equality;
            equality = 38;
            equality = quebec[equality];
            equality = variable37.bind(tango)(equality);
            variable37 = equality.bind(tango)(variable36);
            equality = variable37.alpha;
            variable37 = equality.bind(variable37)(source);
            equality = variable37.hex;
            variable37 = equality.bind(variable37)();
            equality = new Array(3);
            equality[0] = variable37;
            equality[1] = variable36;
            equality[2] = variable36;
            sierra['colors'] = equality;
            equality = [0, 0.8, 1];
            sierra['locations'] = equality;
            equality = 'none';
            sierra['pointerEvents'] = equality;
            lima = whiskey.bind(tango)(lima, sierra);
            sierra = new Array(2);
            sierra[0] = lima;
            equality = _closure1_slot15;
            whiskey = _closure1_slot0;
            lima = 39;
            lima = quebec[lima];
            lima = whiskey.bind(tango)(lima);
            whiskey = lima.ChevronSmallRightIcon;
            lima = {'style': null, 'size': 'xs', 'color': 'interactive-muted'};
            variable36 = offset.overflowChevron;
            quebec = new Array(1);
            quebec[0] = variable36;
            lima['style'] = quebec;
            lima = equality.bind(tango)(whiskey, lima);
            sierra[1] = lima;
            papa['children'] = sierra;
            context = status.bind(tango)(target, papa);
 1057:
            record[1] = context;
            verify['children'] = record;
            romeo = config.bind(tango)(echo, verify);
 1071:
            verify = new Array(2);
            verify[0] = romeo;
            romeo = null;
            if(golf) { _fun117504_ip = 1140; continue _fun117504 }
 1084:
            romeo = null;
            if(!foxtrot) { _fun117504_ip = 1140; continue _fun117504 }
 1089:
            echo = _closure1_slot15;
            result = _closure1_slot19;
            foxtrot = {};
            sequence = function() { // Original name: onOpenPicker
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 24;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.trackItemInteraction;
                mike = _closure2_slot0;
                zulu = mike.id;
                mike = _closure2_slot2;
                entity = 'press_reaction_picker';
                entity = tango.bind(report)(zulu, mike, entity);
                return entity;
            };
            foxtrot['onOpenPicker'] = sequence;
            foxtrot['channel'] = vacuum;
            foxtrot['onPressEmoji'] = control;
            update = update.length;
            update = source === update;
            foxtrot['showText'] = update;
            romeo = echo.bind(tango)(result, foxtrot);
 1140:
            verify[1] = romeo;
            report['children'] = verify;
            oscar = options.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            oscar = sizing;
            if(oscar) { _fun117504_ip = 1171; continue _fun117504 }
 1168:
            oscar = backup;
 1171:
            if(!oscar) { _fun117504_ip = 1177; continue _fun117504 }
 1174:
            oscar = !golf;
 1177:
            if(!oscar) { _fun117504_ip = 1276; continue _fun117504 }
 1180:
            verify = _closure1_slot16;
            options = _closure1_slot5;
            golf = {};
            offset = offset.replyForwardButtonContainer;
            golf['style'] = offset;
            foxtrot = _closure1_slot15;
            romeo = _closure1_slot22;
            offset = {};
            offset['onPress'] = output;
            sizing = !sizing;
            offset['disabled'] = sizing;
            romeo = foxtrot.bind(tango)(romeo, offset);
            offset = new Array(2);
            offset[0] = romeo;
            foxtrot = _closure1_slot15;
            romeo = _closure1_slot21;
            yankee = {};
            yankee['onPress'] = kilo;
            backup = !backup;
            yankee['disabled'] = backup;
            yankee = foxtrot.bind(tango)(romeo, yankee);
            offset[1] = yankee;
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 1276:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = oscar;
    zulu['AddEmojiButton'] = report;
    zulu['ForwardButton'] = tango;
    zulu['ReplyButton'] = mike;
    return entity;
})();