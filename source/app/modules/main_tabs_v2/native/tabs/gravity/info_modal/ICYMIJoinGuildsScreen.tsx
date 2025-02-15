// app/modules/main_tabs_v2/native/tabs/gravity/info_modal/ICYMIJoinGuildsScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: SelectedServerIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeo = entity.guild;
            mike = entity.index;
            entity = _closure1_slot17;
            tango = undefined;
            foxtrot = entity.bind(tango)();
            entity = _closure1_slot16;
            oscar = mike < entity;
            zulu = _closure1_slot12;
            mike = _closure1_slot6;
            entity = {};
            report = foxtrot.selectedServerIcon;
            golf = new Array(3);
            golf[0] = report;
            report = null;
            options = report == romeo;
            if(!options) { _fun00002_ip = 73; continue _fun00001 }
 67:
            options = foxtrot.noServerContainer;
 73:
            golf[1] = options;
            options = report == romeo;
            if(!options) { _fun00002_ip = 87; continue _fun00001 }
 84:
            options = !oscar;
 87:
            if(!options) { _fun00002_ip = 96; continue _fun00001 }
 90:
            options = foxtrot.noServerExtraContainer;
 96:
            golf[2] = options;
            entity['style'] = golf;
            if(!(report == romeo)) { _fun00002_ip = 192; continue _fun00001 }
 108:
            report = null;
            if(!oscar) { _fun00002_ip = 190; continue _fun00001 }
 113:
            options = _closure1_slot12;
            golf = _closure1_slot0;
            backup = _closure1_slot2;
            oscar = 13;
            oscar = backup[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.ServerIcon;
            oscar = {};
            verify = 'md';
            oscar['size'] = verify;
            yankee = _closure1_slot1;
            verify = 11;
            verify = backup[verify];
            verify = yankee.bind(tango)(verify);
            verify = verify.colors;
            verify = verify.INTERACTIVE_MUTED;
            oscar['color'] = verify;
            report = options.bind(tango)(golf, oscar);
 190:
            _fun00002_ip = 267; continue _fun00001;
 192:
            options = _closure1_slot12;
            golf = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 12;
            oscar = yankee[verify];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            foxtrot = foxtrot.guildIconBorder;
            oscar['style'] = foxtrot;
            oscar['guild'] = romeo;
            offset = _closure1_slot0;
            verify = yankee[verify];
            verify = offset.bind(tango)(verify);
            verify = verify.GuildIconSizes;
            verify = verify.LARGE;
            oscar['size'] = verify;
            report = options.bind(tango)(golf, oscar);
 267:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: SelectedServersRow
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            options = entity.selectedGuilds;
            var _closure2_slot0 = options;
            entity = _closure1_slot17;
            tango = undefined;
            report = entity.bind(tango)();
            golf = _closure1_slot5;
            oscar = golf.useCallback;
            zulu = new Array(1);
            zulu[0] = options;
            entity = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = argBar;
                    tango = _closure1_slot12;
                    zulu = _closure1_slot19;
                    mike = {};
                    entity = _closure2_slot0;
                    entity = entity.length;
                    options = report < entity;
                    entity = undefined;
                    oscar = undefined;
                    if(!options) { _fun00006_ip = 47; continue _fun00005 }
 39:
                    golf = _closure2_slot0;
                    oscar = golf[report];
 47:
                    mike['guild'] = oscar;
                    mike['index'] = report;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                }
            };
            romeo = oscar.bind(golf)(entity, zulu);
            oscar = _closure1_slot5;
            zulu = oscar.useState;
            entity = options.length;
            oscar = zulu.bind(oscar)(entity);
            zulu = _closure1_slot4;
            entity = 2;
            zulu = zulu.bind(tango)(oscar, entity);
            entity = 0;
            entity = zulu[entity];
            var _closure2_slot1 = entity;
            foxtrot = 1;
            zulu = zulu[foxtrot];
            var _closure2_slot2 = zulu;
            golf = _closure1_slot5;
            oscar = golf.useRef;
            zulu = null;
            offset = oscar.bind(golf)(zulu);
            var _closure2_slot3 = offset;
            golf = _closure1_slot5;
            oscar = golf.useEffect;
            zulu = new Array(2);
            zulu[0] = entity;
            entity = options.length;
            zulu[1] = entity;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = _closure2_slot0;
                    mike = mike.length;
                    if(!(!(zulu < mike))) { _fun00008_ip = 59; continue _fun00007 }
 20:
                    zulu = _closure2_slot1;
                    mike = _closure2_slot0;
                    mike = mike.length;
                    if(!(zulu !== mike)) { _fun00008_ip = 132; continue _fun00007 }
 37:
                    tango = _closure2_slot2;
                    mike = _closure2_slot0;
                    zulu = mike.length;
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    _fun00008_ip = 132; continue _fun00007;
 59:
                    mike = _closure2_slot3;
                    tango = mike.current;
                    mike = null;
                    if(!(mike != tango)) { _fun00008_ip = 112; continue _fun00007 }
 74:
                    zulu = tango.scrollToLocation;
                    mike = {'animated': true, 'section': 0};
                    report = _closure2_slot0;
                    report = report.length;
                    mike['item'] = report;
                    mike = zulu.bind(tango)(mike);
 112:
                    zulu = _closure2_slot2;
                    entity = _closure2_slot0;
                    mike = entity.length;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            entity = oscar.bind(golf)(entity, zulu);
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 14;
            zulu = backup[entity];
            golf = yankee.bind(tango)(zulu);
            zulu = golf.useAnimatedStyle;
            mike = function() { // Original name: I
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = {};
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    options = 15;
                    mike = mike[options];
                    golf = undefined;
                    verify = zulu.bind(golf)(mike);
                    zulu = verify.withTiming;
                    mike = _closure2_slot0;
                    mike = mike.length;
                    tango = 0;
                    offset = mike > tango;
                    mike = 0;
                    if(!offset) { _fun00010_ip = 58; continue _fun00009 }
 55:
                    mike = 1;
 58:
                    mike = zulu.bind(verify)(mike);
                    entity['opacity'] = mike;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[options];
                    verify = zulu.bind(golf)(mike);
                    zulu = verify.withTiming;
                    mike = _closure2_slot0;
                    mike = mike.length;
                    offset = mike > tango;
                    mike = 0;
                    if(!offset) { _fun00010_ip = 111; continue _fun00009 }
 107:
                    mike = _closure1_slot15;
 111:
                    mike = zulu.bind(verify)(mike);
                    entity['height'] = mike;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[options];
                    zulu = zulu.bind(golf)(mike);
                    mike = zulu.withTiming;
                    oscar = _closure2_slot0;
                    oscar = oscar.length;
                    oscar = oscar > tango;
                    tango = 0;
                    if(!oscar) { _fun00010_ip = 191; continue _fun00009 }
 160:
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 11;
                    report = options[report];
                    report = oscar.bind(golf)(report);
                    report = report.spacing;
                    tango = report.PX_24;
 191:
                    mike = mike.bind(zulu)(tango);
                    entity['marginTop'] = mike;
                    return entity;
                }
            };
            kilo = {};
            oscar = 15;
            oscar = backup[oscar];
            oscar = yankee.bind(tango)(oscar);
            oscar = oscar.withTiming;
            kilo['withTiming'] = oscar;
            kilo['selectedGuilds'] = options;
            oscar = _closure1_slot15;
            kilo['SELECTED_SERVER_SIZE_WITH_BORDER'] = oscar;
            oscar = _closure1_slot1;
            yankee = 11;
            sizing = backup[yankee];
            sizing = oscar.bind(tango)(sizing);
            kilo['tokens'] = sizing;
            mike['__closure'] = kilo;
            kilo = 12491491924402.0;
            mike['__workletHash'] = kilo;
            kilo = _closure1_slot18;
            mike['__initData'] = kilo;
            golf = zulu.bind(golf)(mike);
            zulu = _closure1_slot12;
            entity = backup[entity];
            entity = oscar.bind(tango)(entity);
            mike = entity.View;
            entity = {};
            kilo = report.selectedServersRowContainer;
            report = new Array(2);
            report[0] = kilo;
            report[1] = golf;
            entity['style'] = report;
            golf = _closure1_slot12;
            report = 16;
            report = backup[report];
            oscar = oscar.bind(tango)(report);
            report = {};
            report['ref'] = offset;
            backup = options.length;
            offset = _closure1_slot16;
            if(!(!(backup >= offset))) { _fun00004_ip = 383; continue _fun00003 }
 377:
            offset = _closure1_slot16;
            _fun00004_ip = 392; continue _fun00003;
 383:
            options = options.length;
            offset = options + foxtrot;
 392:
            options = new Array(1);
            options[0] = offset;
            report['sections'] = options;
            offset = _closure1_slot1;
            options = _closure1_slot2;
            foxtrot = options[yankee];
            foxtrot = offset.bind(tango)(foxtrot);
            foxtrot = foxtrot.spacing;
            foxtrot = foxtrot.PX_24;
            report['insetStart'] = foxtrot;
            foxtrot = options[yankee];
            foxtrot = offset.bind(tango)(foxtrot);
            foxtrot = foxtrot.spacing;
            foxtrot = foxtrot.PX_12;
            report['insetEnd'] = foxtrot;
            report['renderItem'] = romeo;
            romeo = 'windowSize';
            report['estimatedListSize'] = romeo;
            verify = _closure1_slot15;
            options = options[yankee];
            options = offset.bind(tango)(options);
            options = options.spacing;
            options = options.PX_12;
            options = verify + options;
            report['itemSize'] = options;
            options = true;
            report['horizontal'] = options;
            options = 'selected-servers-list';
            report['listId'] = options;
            options = false;
            report['showsHorizontalScrollIndicator'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: CutoutGuildBanner
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            foxtrot = mike.guild;
            var _closure2_slot0 = foxtrot;
            mike = _closure1_slot17;
            tango = undefined;
            kilo = mike.bind(tango)();
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 17;
            mike = report[mike];
            oscar = zulu.bind(tango)(mike);
            report = oscar.useStateFromStores;
            mike = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                entity = _closure1_slot7;
                entity = entity.useReducedMotion;
                return entity;
            };
            verify = report.bind(oscar)(zulu, mike);
            report = !verify;
            if(!report) { _fun00012_ip = 104; continue _fun00011 }
 83:
            zulu = foxtrot.hasFeature;
            mike = _closure1_slot11;
            mike = mike.ANIMATED_BANNER;
            report = zulu.bind(foxtrot)(mike);
 104:
            mike = foxtrot.banner;
            offset = null;
            mike = offset != mike;
            sizing = undefined;
            if(!mike) { _fun00012_ip = 160; continue _fun00011 }
 121:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 18;
            mike = oscar[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.getAnimatableSourceWithFallback;
            entity = function(argFoo) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 18;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.getGuildBannerSource;
                mike = {};
                entity = _closure2_slot0;
                report = entity.id;
                mike['id'] = report;
                entity = entity.banner;
                mike['banner'] = entity;
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            sizing = mike.bind(zulu)(report, entity);
 160:
            zulu = _closure1_slot13;
            mike = _closure1_slot6;
            entity = {};
            report = kilo.bannerImage;
            entity['style'] = report;
            golf = _closure1_slot12;
            oscar = _closure1_slot1;
            output = _closure1_slot2;
            options = 19;
            report = output[options];
            oscar = oscar.bind(tango)(report);
            report = {};
            romeo = {'shape': null, 'x': 8, 'y': 46, 'width': 56, 'height': 56, 'cornerRadius': 20};
            backup = _closure1_slot0;
            options = output[options];
            options = backup.bind(tango)(options);
            options = options.CutoutShape;
            options = options.RoundedRect;
            romeo['shape'] = options;
            output = 20;
            options = new Array(1);
            options[0] = romeo;
            report['cutouts'] = options;
            options = foxtrot.banner;
            if(!(offset == options)) { _fun00012_ip = 323; continue _fun00011 }
 277:
            romeo = _closure1_slot12;
            offset = _closure1_slot6;
            options = {};
            result = kilo.bannerImage;
            backup = new Array(2);
            backup[0] = result;
            result = kilo.emptyBanner;
            backup[1] = result;
            options['style'] = backup;
            options = romeo.bind(tango)(offset, options);
            _fun00012_ip = 375; continue _fun00011;
 323:
            backup = _closure1_slot12;
            romeo = _closure1_slot1;
            offset = _closure1_slot2;
            offset = offset[output];
            romeo = romeo.bind(tango)(offset);
            offset = {};
            output = kilo.bannerImage;
            offset['style'] = output;
            offset['source'] = sizing;
            sizing = 'cover';
            offset['resizeMode'] = sizing;
            options = backup.bind(tango)(romeo, offset);
 375:
            report['children'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot12;
            golf = _closure1_slot1;
            romeo = _closure1_slot2;
            offset = 12;
            oscar = romeo[offset];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            sizing = kilo.guildIcon;
            backup = new Array(2);
            backup[0] = sizing;
            kilo = kilo.guildIconBorder;
            backup[1] = kilo;
            oscar['style'] = backup;
            oscar['guild'] = foxtrot;
            yankee = _closure1_slot0;
            offset = romeo[offset];
            offset = yankee.bind(tango)(offset);
            offset = offset.GuildIconSizes;
            offset = offset.LARGE;
            oscar['size'] = offset;
            verify = !verify;
            oscar['animate'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: FeaturedServer
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = argFoo;
            kilo = mike.guild;
            var _closure2_slot0 = kilo;
            output = mike.selected;
            echo = mike.loading;
            oscar = mike.handlePress;
            var _closure2_slot1 = oscar;
            mike = _closure1_slot17;
            tango = undefined;
            foxtrot = mike.bind(tango)();
            backup = _closure1_slot0;
            source = _closure1_slot2;
            mike = 17;
            mike = source[mike];
            golf = backup.bind(tango)(mike);
            report = golf.useStateFromStores;
            mike = _closure1_slot9;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot9;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = entity.id;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                return entity;
            };
            sizing = report.bind(golf)(zulu, mike);
            report = _closure1_slot5;
            zulu = report.useCallback;
            mike = new Array(2);
            mike[0] = kilo;
            mike[1] = oscar;
            entity = function() {
                zulu = _closure2_slot1;
                mike = _closure2_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            result = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot13;
            entity = 21;
            entity = source[entity];
            entity = backup.bind(tango)(entity);
            mike = entity.PressableHighlight;
            entity = {};
            report = foxtrot.pressableUnderlayColor;
            report = report.backgroundColor;
            entity['underlayColor'] = report;
            report = 50;
            entity['unstable_pressDelay'] = report;
            report = foxtrot.featuredServerContainer;
            entity['style'] = report;
            entity['onPress'] = result;
            golf = _closure1_slot12;
            oscar = _closure1_slot21;
            report = {};
            report['guild'] = kilo;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot13;
            golf = _closure1_slot6;
            oscar = {};
            verify = foxtrot.featuredServerInnerContainer;
            oscar['style'] = verify;
            romeo = _closure1_slot12;
            offset = 22;
            verify = source[offset];
            verify = backup.bind(tango)(verify);
            yankee = verify.Text;
            verify = {'maxFontSizeMultiplier': 1, 'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            control = foxtrot.featuredServerTitle;
            verify['style'] = control;
            control = kilo.name;
            verify['children'] = control;
            yankee = romeo.bind(tango)(yankee, verify);
            verify = new Array(3);
            verify[0] = yankee;
            romeo = _closure1_slot12;
            offset = source[offset];
            offset = backup.bind(tango)(offset);
            yankee = offset.Text;
            offset = {'maxFontSizeMultiplier': 1, 'lineClamp': 2, 'variant': 'text-xs/normal', 'color': 'header-secondary'};
            kilo = kilo.description;
            offset['children'] = kilo;
            offset = romeo.bind(tango)(yankee, offset);
            verify[1] = offset;
            romeo = _closure1_slot12;
            yankee = _closure1_slot6;
            offset = {};
            foxtrot = foxtrot.buttonContainer;
            offset['style'] = foxtrot;
            kilo = _closure1_slot12;
            foxtrot = 23;
            foxtrot = source[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            backup = foxtrot.Button;
            foxtrot = {};
            source = 'checkbox';
            foxtrot['accessibilityHint'] = source;
            source = {};
            source['checked'] = output;
            foxtrot['accessibilityState'] = source;
            foxtrot['disabled'] = sizing;
            source = undefined;
            if(!output) { _fun00014_ip = 515; continue _fun00013 }
 438:
            sequence = _closure1_slot12;
            vacuum = _closure1_slot0;
            context = _closure1_slot2;
            control = 24;
            control = context[control];
            control = vacuum.bind(tango)(control);
            vacuum = control.CircleCheckIcon;
            control = {};
            config = 'sm';
            control['size'] = config;
            record = _closure1_slot1;
            config = 11;
            config = context[config];
            config = record.bind(tango)(config);
            config = config.colors;
            config = config.REDESIGN_BUTTON_ACTIVE_TEXT;
            control['color'] = config;
            source = sequence.bind(tango)(vacuum, control);
 515:
            foxtrot['icon'] = source;
            if(!sizing) { _fun00014_ip = 582; continue _fun00013 }
 522:
            if(echo) { _fun00014_ip = 582; continue _fun00013 }
 525:
            vacuum = _closure1_slot0;
            sequence = _closure1_slot2;
            echo = 25;
            source = sequence[echo];
            source = vacuum.bind(tango)(source);
            control = source.intl;
            source = control.string;
            echo = sequence[echo];
            echo = vacuum.bind(tango)(echo);
            echo = echo.t;
            echo = echo.cEnaW1;
            echo = source.bind(control)(echo);
            _fun00014_ip = 656; continue _fun00013;
 582:
            source = _closure1_slot0;
            sequence = _closure1_slot2;
            update = 25;
            control = sequence[update];
            control = source.bind(tango)(control);
            vacuum = control.intl;
            control = vacuum.string;
            update = sequence[update];
            update = source.bind(tango)(update);
            source = update.t;
            if(output) { _fun00014_ip = 642; continue _fun00013 }
 629:
            update = source.XqMe3N;
            update = control.bind(vacuum)(update);
            _fun00014_ip = 653; continue _fun00013;
 642:
            source = source.TwueCw;
            update = control.bind(vacuum)(source);
 653:
            echo = update;
 656:
            foxtrot['text'] = echo;
            echo = 'sm';
            foxtrot['size'] = echo;
            foxtrot['onPress'] = result;
            if(sizing) { _fun00014_ip = 682; continue _fun00013 }
 675:
            sizing = 'active';
            if(output) { _fun00014_ip = 686; continue _fun00013 }
 682:
            sizing = 'secondary';
 686:
            foxtrot['variant'] = sizing;
            sizing = true;
            foxtrot['grow'] = sizing;
            foxtrot = kilo.bind(tango)(backup, foxtrot);
            offset['children'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            verify[2] = offset;
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
    romeo = 1;
    tango = oscar[romeo];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot5 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    options = golf.View;
    var _closure1_slot6 = options;
    backup = golf.StyleSheet;
    golf = 4;
    golf = oscar[golf];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 5;
    golf = oscar[golf];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = 6;
    golf = oscar[golf];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot9 = golf;
    golf = 7;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    foxtrot = golf.ICYMI_MARGIN;
    golf = 8;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    options = golf.AnalyticEvents;
    var _closure1_slot10 = options;
    golf = golf.GuildFeatures;
    var _closure1_slot11 = golf;
    golf = 9;
    options = oscar[golf];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot12 = options;
    options = oscar[golf];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot13 = options;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot14 = golf;
    golf = 50;
    var _closure1_slot15 = golf;
    var _closure1_slot16 = tango;
    tango = 10;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'backgroundColor': null, 'position': 'relative', 'flex': 1};
    offset = 11;
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BG_BASE_SECONDARY;
    verify['backgroundColor'] = kilo;
    verify['marginHorizontal'] = foxtrot;
    tango['container'] = verify;
    verify = {};
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_8;
    verify['paddingTop'] = kilo;
    tango['scrollContentContainer'] = verify;
    verify = {'position': 'absolute', 'bottom': 0};
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_24;
    verify['left'] = kilo;
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_24;
    verify['right'] = kilo;
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_8;
    verify['paddingBottom'] = kilo;
    tango['footer'] = verify;
    verify = {};
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_24;
    verify['marginTop'] = kilo;
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_8;
    verify['marginBottom'] = kilo;
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_24;
    verify['marginHorizontal'] = kilo;
    tango['title'] = verify;
    verify = {};
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_24;
    verify['marginHorizontal'] = kilo;
    tango['subtitle'] = verify;
    verify = {};
    backup = backup.hairlineWidth;
    verify['height'] = backup;
    backup = '100%';
    verify['width'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BORDER_SUBTLE;
    verify['backgroundColor'] = backup;
    tango['separator'] = verify;
    verify = {};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    verify['borderRadius'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.CARD_PRIMARY_BG;
    verify['backgroundColor'] = backup;
    backup = 'hidden';
    verify['overflow'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_8;
    verify['marginHorizontal'] = backup;
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_8;
    verify['marginVertical'] = backup;
    tango['featuredServerContainer'] = verify;
    verify = {};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_12;
    verify['marginHorizontal'] = backup;
    backup = 36;
    verify['marginTop'] = backup;
    tango['featuredServerInnerContainer'] = verify;
    verify = {};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_12;
    verify['marginBottom'] = backup;
    verify['marginTop'] = foxtrot;
    tango['buttonContainer'] = verify;
    verify = {};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_8;
    verify['marginBottom'] = foxtrot;
    tango['featuredServerTitle'] = verify;
    verify = {'position': 'absolute', 'top': 50, 'left': 12};
    tango['guildIcon'] = verify;
    verify = {'height': 73, 'width': '100%'};
    tango['bannerImage'] = verify;
    verify = {};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BG_MOD_SUBTLE;
    verify['backgroundColor'] = foxtrot;
    tango['emptyBanner'] = verify;
    verify = {};
    verify['flex'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_8;
    verify['marginHorizontal'] = romeo;
    tango['guildsScrollContainer'] = verify;
    verify = {'flex': 1, 'flexDirection': 'column'};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_16;
    verify['gap'] = romeo;
    tango['guildsColumn'] = verify;
    verify = {'height': 50, 'width': '100%'};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_24;
    verify['marginBottom'] = romeo;
    tango['selectedServersRowContainer'] = verify;
    verify = {'flex': 1, 'width': 50, 'height': 50, 'alignItems': 'center', 'justifyContent': 'center', 'borderColor': null, 'borderRadius': null, 'borderWidth': 1};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BORDER_STRONG;
    verify['borderColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.md;
    verify['borderRadius'] = romeo;
    tango['selectedServerIcon'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_MOD_FAINT;
    verify['backgroundColor'] = romeo;
    romeo = 'dashed';
    verify['borderStyle'] = romeo;
    tango['noServerContainer'] = verify;
    verify = {};
    romeo = 0.4;
    verify['opacity'] = romeo;
    tango['noServerExtraContainer'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_MODIFIER_ACTIVE;
    verify['backgroundColor'] = romeo;
    tango['pressableUnderlayColor'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.md;
    verify['borderRadius'] = offset;
    tango['guildIconBorder'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot17 = tango;
    tango = {};
    golf = 'function ICYMIJoinGuildsScreenTsx1(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.spacing.PX_24:0)};}';
    tango['code'] = golf;
    var _closure1_slot18 = tango;
    tango = 33;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/tabs/gravity/info_modal/ICYMIJoinGuildsScreen.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: ICYMIJoinGuildsScreen
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            mike = _closure1_slot17;
            tango = undefined;
            romeo = mike.bind(tango)();
            record = _closure1_slot1;
            context = _closure1_slot2;
            mike = 26;
            mike = context[mike];
            mike = record.bind(tango)(mike);
            mike = mike.bind(tango)();
            yankee = mike.bottom;
            output = _closure1_slot0;
            zulu = 17;
            mike = context[zulu];
            options = output.bind(tango)(mike);
            golf = options.useStateFromStoresArray;
            mike = _closure1_slot8;
            oscar = new Array(1);
            oscar[0] = mike;
            report = function() {
                mike = _closure1_slot8;
                entity = mike.getOnboardingGuilds;
                entity = entity.bind(mike)();
                return entity;
            };
            sequence = golf.bind(options)(oscar, report);
            var _closure2_slot0 = sequence;
            report = context[zulu];
            options = output.bind(tango)(report);
            golf = options.useStateFromStoresArray;
            oscar = new Array(1);
            oscar[0] = mike;
            report = function() {
                mike = _closure1_slot8;
                entity = mike.getOnboardingCategoryIds;
                entity = entity.bind(mike)();
                return entity;
            };
            result = golf.bind(options)(oscar, report);
            var _closure2_slot1 = result;
            zulu = context[zulu];
            oscar = output.bind(tango)(zulu);
            report = oscar.useStateFromStores;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                mike = _closure1_slot8;
                entity = mike.getCurrentOnboardingGuildOffset;
                entity = entity.bind(mike)();
                return entity;
            };
            backup = report.bind(oscar)(zulu, mike);
            var _closure2_slot2 = backup;
            report = _closure1_slot5;
            zulu = report.useState;
            mike = global;
            mike = mike.Set;
            oscar = mike.prototype;
            oscar = Object.create(oscar, {constructor: {value: mike}});
            sierra = oscar;
            mike = new sierra[mike](status);
            mike = mike instanceof Object ? mike : oscar;
            zulu = zulu.bind(report)(mike);
            mike = _closure1_slot4;
            vacuum = 2;
            mike = mike.bind(tango)(zulu, vacuum);
            report = 0;
            oscar = mike[report];
            var _closure2_slot3 = oscar;
            golf = 1;
            mike = mike[golf];
            var _closure2_slot4 = mike;
            options = _closure1_slot5;
            zulu = options.useState;
            mike = new Array(0);
            zulu = zulu.bind(options)(mike);
            mike = _closure1_slot4;
            mike = mike.bind(tango)(zulu, vacuum);
            sizing = mike[report];
            mike = mike[golf];
            var _closure2_slot5 = mike;
            zulu = _closure1_slot5;
            mike = zulu.useState;
            zulu = mike.bind(zulu)(report);
            mike = _closure1_slot4;
            zulu = mike.bind(tango)(zulu, vacuum);
            mike = zulu[report];
            var _closure2_slot6 = mike;
            zulu = zulu[golf];
            var _closure2_slot7 = zulu;
            foxtrot = _closure1_slot5;
            verify = foxtrot.useCallback;
            options = new Array(1);
            options[0] = oscar;
            zulu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tango = argFoo;
                    var _closure3_slot0 = tango;
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 27;
                    report = report[entity];
                    entity = undefined;
                    verify = oscar.bind(entity)(report);
                    options = verify.track;
                    zulu = _closure1_slot10;
                    golf = zulu.ICYMI_ONBOARDING_GUILD_TOGGLED;
                    report = {};
                    zulu = tango.id;
                    report['guild_id'] = zulu;
                    oscar = _closure2_slot3;
                    yankee = oscar.has;
                    offset = tango.id;
                    offset = yankee.bind(oscar)(offset);
                    offset = !offset;
                    report['toggled'] = offset;
                    report = options.bind(verify)(golf, report);
                    report = oscar.has;
                    tango = tango.id;
                    tango = report.bind(oscar)(tango);
                    report = _closure2_slot4;
                    if(tango) { _fun00018_ip = 148; continue _fun00017 }
 118:
                    tango = function(argFoo) {
                        zulu = argFoo;
                        mike = zulu.add;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
                        entity = global;
                        entity = entity.Set;
                        mike = entity.prototype;
                        mike = Object.create(mike, {constructor: {value: entity}});
                        report = mike;
                        tango = zulu;
                        entity = new report[entity](tango, zulu);
                        entity = entity instanceof Object ? entity : mike;
                        return entity;
                    };
                    tango = report.bind(entity)(tango);
                    oscar = _closure2_slot5;
                    tango = function(argFoo) {
                        entity = new Array(1);
                        report = argFoo;
                        tango = 0;
                        oscar = entity;
                        zulu = arraySpread(oscar, report, tango);
                        mike = _closure3_slot0;
                        entity[zulu] = mike;
                        mike = 1;
                        mike = zulu + mike;
                        return entity;
                    };
                    tango = oscar.bind(entity)(tango);
                    _fun00018_ip = 176; continue _fun00017;
 148:
                    tango = function(argFoo) {
                        zulu = argFoo;
                        mike = zulu.delete;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = mike.bind(zulu)(entity);
                        entity = global;
                        entity = entity.Set;
                        mike = entity.prototype;
                        mike = Object.create(mike, {constructor: {value: entity}});
                        report = mike;
                        tango = zulu;
                        entity = new report[entity](tango, zulu);
                        entity = entity instanceof Object ? entity : mike;
                        return entity;
                    };
                    tango = report.bind(entity)(tango);
                    zulu = _closure2_slot5;
                    mike = function(argFoo) {
                        zulu = argFoo;
                        mike = zulu.filter;
                        entity = function(argFoo) {
                            entity = _closure3_slot0;
                            mike = entity.id;
                            entity = argFoo;
                            entity = entity.id;
                            entity = mike !== entity;
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    mike = zulu.bind(entity)(mike);
 176:
                    return entity;
                }
            };
            options = verify.bind(foxtrot)(zulu, options);
            var _closure2_slot8 = options;
            verify = _closure1_slot5;
            zulu = verify.useState;
            source = false;
            verify = zulu.bind(verify)(source);
            zulu = _closure1_slot4;
            zulu = zulu.bind(tango)(verify, vacuum);
            kilo = zulu[report];
            var _closure2_slot9 = kilo;
            zulu = zulu[golf];
            var _closure2_slot10 = zulu;
            foxtrot = _closure1_slot5;
            verify = foxtrot.useCallback;
            report = _closure1_slot3;
            zulu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun00020_ip = 496; continue _fun00019 }
 10:
                        tango = _closure2_slot10;
                        report = undefined;
                        zulu = true;
                        zulu = tango.bind(report)(zulu);
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        golf = 28;
                        zulu = zulu[golf];
                        options = tango.bind(report)(zulu);
                        tango = options.gravityJoinGuild;
                        zulu = global;
                        verify = zulu.Array;
                        zulu = verify.from;
                        mike = _closure2_slot3;
                        zulu = zulu.bind(verify)(mike);
                        mike = 'icymi_info_modal';
                        mike = tango.bind(options)(zulu, mike);
                        SaveGenerator(address=93);
 91:
                        return mike;
 93:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun00020_ip = 493; continue _fun00019 }
 102:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        if(mike) { _fun00020_ip = 309; continue _fun00019 }
 116:
                        options = 29;
                        options = zulu[options];
                        offset = tango.bind(report)(options);
                        verify = offset.open;
                        options = {};
                        yankee = 'ICYMIInfoModal';
                        options['key'] = yankee;
                        yankee = _closure1_slot0;
                        romeo = 25;
                        foxtrot = zulu[romeo];
                        foxtrot = yankee.bind(report)(foxtrot);
                        backup = foxtrot.intl;
                        foxtrot = backup.string;
                        romeo = zulu[romeo];
                        romeo = yankee.bind(report)(romeo);
                        romeo = romeo.t;
                        romeo = romeo.CG4Hkp;
                        romeo = foxtrot.bind(backup)(romeo);
                        options['content'] = romeo;
                        options = verify.bind(offset)(options);
                        options = zulu[golf];
                        verify = tango.bind(report)(options);
                        options = verify.fetchDehydrated;
                        options = options.bind(verify)();
                        options = zulu[golf];
                        verify = tango.bind(report)(options);
                        options = verify.getGuildChannelScores;
                        options = options.bind(verify)();
                        options = zulu[golf];
                        verify = tango.bind(report)(options);
                        options = verify.getRecommendedGuilds;
                        options = options.bind(verify)();
                        options = 30;
                        options = zulu[options];
                        offset = tango.bind(report)(options);
                        verify = offset.popWithKey;
                        options = 31;
                        options = zulu[options];
                        options = yankee.bind(report)(options);
                        options = options.ICYMI_INFO_MODAL_KEY;
                        options = verify.bind(offset)(options);
                        options = undefined;
                        return options;
 309:
                        zulu = zulu[golf];
                        options = tango.bind(report)(zulu);
                        tango = options.fetchDehydrated;
                        zulu = {'isReloading': true, 'forceRefresh': true};
                        zulu = tango.bind(options)(zulu);
                        SaveGenerator(address=347);
 345:
                        return zulu;
 347:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tango) { _fun00020_ip = 490; continue _fun00019 }
 356:
                        options = _closure1_slot1;
                        tango = _closure1_slot2;
                        tango = tango[golf];
                        options = options.bind(report)(tango);
                        tango = options.reloadICYMITab;
                        tango = tango.bind(options)();
                        SaveGenerator(address=387);
 385:
                        return tango;
 387:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(options) { _fun00020_ip = 487; continue _fun00019 }
 393:
                        options = _closure1_slot1;
                        offset = _closure1_slot2;
                        verify = offset[golf];
                        yankee = options.bind(report)(verify);
                        verify = yankee.getGuildChannelScores;
                        verify = verify.bind(yankee)();
                        golf = offset[golf];
                        verify = options.bind(report)(golf);
                        golf = verify.getRecommendedGuilds;
                        golf = golf.bind(verify)();
                        golf = 30;
                        golf = offset[golf];
                        options = options.bind(report)(golf);
                        golf = options.popWithKey;
                        verify = _closure1_slot0;
                        oscar = 31;
                        oscar = offset[oscar];
                        oscar = verify.bind(report)(oscar);
                        oscar = oscar.ICYMI_INFO_MODAL_KEY;
                        oscar = golf.bind(options)(oscar);
                        return report;
 487:
                        return tango;
 490:
                        return zulu;
 493:
                        return mike;
 496:
                        return entity;
                    }
                };
                return entity;
            };
            report = report.bind(tango)(zulu);
            zulu = new Array(1);
            zulu[0] = oscar;
            foxtrot = verify.bind(foxtrot)(report, zulu);
            verify = _closure1_slot5;
            report = verify.useCallback;
            zulu = new Array(4);
            zulu[0] = result;
            zulu[1] = backup;
            zulu[2] = mike;
            mike = sequence.length;
            zulu[3] = mike;
            mike = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zulu = _closure2_slot6;
                    mike = _closure2_slot2;
                    if(!(!(zulu > mike))) { _fun00022_ip = 111; continue _fun00021 }
 15:
                    mike = _closure2_slot0;
                    zulu = mike.length;
                    mike = 150;
                    if(!(!(zulu >= mike))) { _fun00022_ip = 111; continue _fun00021 }
 31:
                    tango = _closure2_slot2;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 31;
                    zulu = oscar[zulu];
                    report = undefined;
                    zulu = golf.bind(report)(zulu);
                    zulu = zulu.ICYMI_DISCOVERABLE_GUILDS_PAGE_SIZE;
                    tango = tango + zulu;
                    zulu = _closure2_slot7;
                    zulu = zulu.bind(report)(tango);
                    zulu = _closure1_slot1;
                    mike = 28;
                    mike = oscar[mike];
                    zulu = zulu.bind(report)(mike);
                    mike = zulu.fetchPopularGuildsFromCategories;
                    entity = _closure2_slot1;
                    entity = mike.bind(zulu)(entity, tango);
 111:
                    entity = undefined;
                    return entity;
                }
            };
            control = report.bind(verify)(mike, zulu);
            report = _closure1_slot5;
            zulu = report.useCallback;
            mike = new Array(3);
            mike[0] = kilo;
            mike[1] = oscar;
            mike[2] = options;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.item;
                report = _closure1_slot12;
                tango = _closure1_slot22;
                zulu = {};
                zulu['guild'] = entity;
                oscar = _closure2_slot9;
                zulu['loading'] = oscar;
                options = _closure2_slot3;
                golf = options.has;
                oscar = entity.id;
                oscar = golf.bind(options)(oscar);
                zulu['selected'] = oscar;
                mike = _closure2_slot8;
                zulu['handlePress'] = mike;
                mike = entity.id;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            update = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot13;
            mike = _closure1_slot14;
            entity = {};
            backup = _closure1_slot12;
            options = 22;
            report = context[options];
            report = output.bind(tango)(report);
            verify = report.Text;
            report = {'variant': 'heading-xl/semibold', 'color': 'header-primary'};
            result = romeo.title;
            report['style'] = result;
            result = 25;
            echo = context[result];
            echo = output.bind(tango)(echo);
            papa = echo.intl;
            config = papa.string;
            echo = context[result];
            echo = output.bind(tango)(echo);
            echo = echo.t;
            echo = echo.19ldCA;
            echo = config.bind(papa)(echo);
            report['children'] = echo;
            verify = backup.bind(tango)(verify, report);
            report = new Array(6);
            report[0] = verify;
            backup = _closure1_slot12;
            options = context[options];
            options = output.bind(tango)(options);
            verify = options.Text;
            options = {'variant': 'text-sm/normal', 'color': 'header-muted'};
            echo = romeo.subtitle;
            options['style'] = echo;
            echo = context[result];
            echo = output.bind(tango)(echo);
            papa = echo.intl;
            config = papa.string;
            echo = context[result];
            echo = output.bind(tango)(echo);
            echo = echo.t;
            echo = echo.u0KPUV;
            echo = config.bind(papa)(echo);
            options['children'] = echo;
            options = backup.bind(tango)(verify, options);
            report[1] = options;
            backup = _closure1_slot12;
            verify = _closure1_slot20;
            options = {};
            options['selectedGuilds'] = sizing;
            options = backup.bind(tango)(verify, options);
            report[2] = options;
            backup = _closure1_slot12;
            verify = _closure1_slot6;
            options = {};
            sizing = romeo.separator;
            options['style'] = sizing;
            options = backup.bind(tango)(verify, options);
            report[3] = options;
            backup = _closure1_slot12;
            verify = _closure1_slot6;
            options = {};
            sizing = romeo.guildsScrollContainer;
            options['style'] = sizing;
            echo = _closure1_slot12;
            sizing = 32;
            sizing = context[sizing];
            sizing = output.bind(tango)(sizing);
            output = sizing.MasonryFlashList;
            sizing = {};
            sizing['data'] = sequence;
            sizing['extraData'] = oscar;
            sequence = romeo.scrollContentContainer;
            sizing['contentContainerStyle'] = sequence;
            sequence = {};
            config = 11;
            config = context[config];
            config = record.bind(tango)(config);
            config = config.spacing;
            config = config.PX_72;
            config = config + yankee;
            sequence['bottom'] = config;
            sizing['contentInset'] = sequence;
            sizing['numColumns'] = vacuum;
            sizing['onEndReached'] = control;
            control = 0.5;
            sizing['onEndReachedThreshold'] = control;
            sizing['showsHorizontalScrollIndicator'] = source;
            sizing['showsVerticalScrollIndicator'] = source;
            sizing['renderItem'] = update;
            update = 229;
            sizing['estimatedItemSize'] = update;
            sizing = echo.bind(tango)(output, sizing);
            options['children'] = sizing;
            options = backup.bind(tango)(verify, options);
            report[4] = options;
            oscar = oscar.size;
            oscar = oscar >= golf;
            if(!oscar) { _fun00016_ip = 1140; continue _fun00015 }
 989:
            verify = _closure1_slot12;
            options = _closure1_slot6;
            golf = {};
            backup = {};
            backup['marginBottom'] = yankee;
            yankee = new Array(2);
            yankee[0] = backup;
            romeo = romeo.footer;
            yankee[1] = romeo;
            golf['style'] = yankee;
            romeo = _closure1_slot12;
            output = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 23;
            offset = backup[offset];
            offset = output.bind(tango)(offset);
            yankee = offset.Button;
            offset = {};
            offset['loading'] = kilo;
            kilo = 'lg';
            offset['size'] = kilo;
            kilo = backup[result];
            kilo = output.bind(tango)(kilo);
            sizing = kilo.intl;
            kilo = sizing.string;
            backup = backup[result];
            backup = output.bind(tango)(backup);
            backup = backup.t;
            backup = backup.i4jeWV;
            backup = kilo.bind(sizing)(backup);
            offset['text'] = backup;
            offset['onPress'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 1140:
            report[5] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();