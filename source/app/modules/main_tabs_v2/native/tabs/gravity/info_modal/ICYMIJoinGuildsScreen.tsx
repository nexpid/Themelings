// app/modules/main_tabs_v2/native/tabs/gravity/info_modal/ICYMIJoinGuildsScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: SelectedServerIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeon = entity.guild;
            michal = entity.index;
            entity = _closure1_slot16;
            tangon = undefined;
            foxtra = entity.bind(tangon)();
            entity = 3;
            oscard = michal < entity;
            zuuluu = _closure1_slot12;
            michal = _closure1_slot6;
            entity = {};
            report = foxtra.selectedServerIcon;
            golfie = new Array(3);
            golfie[0] = report;
            report = null;
            option = report == romeon;
            if(!option) { _fun00002_ip = 72; continue _fun00001 }
 66:
            option = foxtra.noServerContainer;
 72:
            golfie[1] = option;
            option = report == romeon;
            if(!option) { _fun00002_ip = 86; continue _fun00001 }
 83:
            option = !oscard;
 86:
            if(!option) { _fun00002_ip = 95; continue _fun00001 }
 89:
            option = foxtra.noServerExtraContainer;
 95:
            golfie[2] = option;
            entity['style'] = golfie;
            if(!(report == romeon)) { _fun00002_ip = 191; continue _fun00001 }
 107:
            report = null;
            if(!oscard) { _fun00002_ip = 189; continue _fun00001 }
 112:
            option = _closure1_slot12;
            golfie = _closure1_slot0;
            backup = _closure1_slot2;
            oscard = 13;
            oscard = backup[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.ServerIcon;
            oscard = {};
            verify = 'md';
            oscard['size'] = verify;
            yankee = _closure1_slot1;
            verify = 11;
            verify = backup[verify];
            verify = yankee.bind(tangon)(verify);
            verify = verify.colors;
            verify = verify.INTERACTIVE_MUTED;
            oscard['color'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 189:
            _fun00002_ip = 266; continue _fun00001;
 191:
            option = _closure1_slot12;
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 12;
            oscard = yankee[verify];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            foxtra = foxtra.guildIconBorder;
            oscard['style'] = foxtra;
            oscard['guild'] = romeon;
            offset = _closure1_slot0;
            verify = yankee[verify];
            verify = offset.bind(tangon)(verify);
            verify = verify.GuildIconSizes;
            verify = verify.LARGE;
            oscard['size'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 266:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: SelectedServersRow
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            option = entity.selectedGuilds;
            var _closure2_slot0 = option;
            entity = _closure1_slot16;
            tangon = undefined;
            report = entity.bind(tangon)();
            golfie = _closure1_slot5;
            oscard = golfie.useCallback;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            entity = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = argBar;
                    tangon = _closure1_slot12;
                    zuuluu = _closure1_slot18;
                    michal = {};
                    entity = _closure2_slot0;
                    entity = entity.length;
                    option = report < entity;
                    entity = undefined;
                    oscard = undefined;
                    if(!option) { _fun00006_ip = 47; continue _fun00005 }
 39:
                    golfie = _closure2_slot0;
                    oscard = golfie[report];
 47:
                    michal['guild'] = oscard;
                    michal['index'] = report;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            romeon = oscard.bind(golfie)(entity, zuuluu);
            oscard = _closure1_slot5;
            zuuluu = oscard.useState;
            entity = option.length;
            oscard = zuuluu.bind(oscard)(entity);
            zuuluu = _closure1_slot4;
            entity = 2;
            zuuluu = zuuluu.bind(tangon)(oscard, entity);
            entity = 0;
            entity = zuuluu[entity];
            var _closure2_slot1 = entity;
            foxtra = 1;
            zuuluu = zuuluu[foxtra];
            var _closure2_slot2 = zuuluu;
            golfie = _closure1_slot5;
            oscard = golfie.useRef;
            zuuluu = null;
            offset = oscard.bind(golfie)(zuuluu);
            var _closure2_slot3 = offset;
            golfie = _closure1_slot5;
            oscard = golfie.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = entity;
            entity = option.length;
            zuuluu[1] = entity;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    michal = michal.length;
                    if(!(!(zuuluu < michal))) { _fun00008_ip = 59; continue _fun00007 }
 20:
                    zuuluu = _closure2_slot1;
                    michal = _closure2_slot0;
                    michal = michal.length;
                    if(!(zuuluu !== michal)) { _fun00008_ip = 132; continue _fun00007 }
 37:
                    tangon = _closure2_slot2;
                    michal = _closure2_slot0;
                    zuuluu = michal.length;
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    _fun00008_ip = 132; continue _fun00007;
 59:
                    michal = _closure2_slot3;
                    tangon = michal.current;
                    michal = null;
                    if(!(michal != tangon)) { _fun00008_ip = 112; continue _fun00007 }
 74:
                    zuuluu = tangon.scrollToLocation;
                    michal = {'animated': true, 'section': 0};
                    report = _closure2_slot0;
                    report = report.length;
                    michal['item'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 112:
                    zuuluu = _closure2_slot2;
                    entity = _closure2_slot0;
                    michal = entity.length;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 132:
                    entity = undefined;
                    return entity;
                }
            };
            entity = oscard.bind(golfie)(entity, zuuluu);
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            entity = 14;
            zuuluu = backup[entity];
            golfie = yankee.bind(tangon)(zuuluu);
            zuuluu = golfie.useAnimatedStyle;
            michal = function() { // Original name: I
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = {};
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    option = 15;
                    michal = michal[option];
                    golfie = undefined;
                    verify = zuuluu.bind(golfie)(michal);
                    zuuluu = verify.withTiming;
                    michal = _closure2_slot0;
                    michal = michal.length;
                    tangon = 0;
                    offset = michal > tangon;
                    michal = 0;
                    if(!offset) { _fun00010_ip = 58; continue _fun00009 }
 55:
                    michal = 1;
 58:
                    michal = zuuluu.bind(verify)(michal);
                    entity['opacity'] = michal;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    verify = zuuluu.bind(golfie)(michal);
                    zuuluu = verify.withTiming;
                    michal = _closure2_slot0;
                    michal = michal.length;
                    offset = michal > tangon;
                    michal = 0;
                    if(!offset) { _fun00010_ip = 111; continue _fun00009 }
 107:
                    michal = _closure1_slot15;
 111:
                    michal = zuuluu.bind(verify)(michal);
                    entity['height'] = michal;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    michal = michal[option];
                    zuuluu = zuuluu.bind(golfie)(michal);
                    michal = zuuluu.withTiming;
                    oscard = _closure2_slot0;
                    oscard = oscard.length;
                    oscard = oscard > tangon;
                    tangon = 0;
                    if(!oscard) { _fun00010_ip = 191; continue _fun00009 }
 160:
                    oscard = _closure1_slot1;
                    option = _closure1_slot2;
                    report = 11;
                    report = option[report];
                    report = oscard.bind(golfie)(report);
                    report = report.spacing;
                    tangon = report.PX_24;
 191:
                    michal = michal.bind(zuuluu)(tangon);
                    entity['marginTop'] = michal;
                    return entity;
                }
            };
            kiloes = {};
            oscard = 15;
            oscard = backup[oscard];
            oscard = yankee.bind(tangon)(oscard);
            oscard = oscard.withTiming;
            kiloes['withTiming'] = oscard;
            kiloes['selectedGuilds'] = option;
            oscard = _closure1_slot15;
            kiloes['SELECTED_SERVER_SIZE_WITH_BORDER'] = oscard;
            oscard = _closure1_slot1;
            yankee = 11;
            sizing = backup[yankee];
            sizing = oscard.bind(tangon)(sizing);
            kiloes['tokens'] = sizing;
            michal['__closure'] = kiloes;
            kiloes = 12491491924402.0;
            michal['__workletHash'] = kiloes;
            kiloes = _closure1_slot17;
            michal['__initData'] = kiloes;
            golfie = zuuluu.bind(golfie)(michal);
            zuuluu = _closure1_slot12;
            entity = backup[entity];
            entity = oscard.bind(tangon)(entity);
            michal = entity.View;
            entity = {};
            kiloes = report.selectedServersRowContainer;
            report = new Array(2);
            report[0] = kiloes;
            report[1] = golfie;
            entity['style'] = report;
            golfie = _closure1_slot12;
            report = 16;
            report = backup[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['ref'] = offset;
            backup = option.length;
            offset = 3;
            backup = backup >= offset;
            if(!backup) { _fun00004_ip = 388; continue _fun00003 }
 379:
            option = option.length;
            offset = option + foxtra;
 388:
            option = new Array(1);
            option[0] = offset;
            report['sections'] = option;
            offset = _closure1_slot1;
            option = _closure1_slot2;
            foxtra = option[yankee];
            foxtra = offset.bind(tangon)(foxtra);
            foxtra = foxtra.spacing;
            foxtra = foxtra.PX_24;
            report['insetStart'] = foxtra;
            foxtra = option[yankee];
            foxtra = offset.bind(tangon)(foxtra);
            foxtra = foxtra.spacing;
            foxtra = foxtra.PX_12;
            report['insetEnd'] = foxtra;
            report['renderItem'] = romeon;
            romeon = 'windowSize';
            report['estimatedListSize'] = romeon;
            verify = _closure1_slot15;
            option = option[yankee];
            option = offset.bind(tangon)(option);
            option = option.spacing;
            option = option.PX_12;
            option = verify + option;
            report['itemSize'] = option;
            option = true;
            report['horizontal'] = option;
            option = 'selected-servers-list';
            report['listId'] = option;
            option = false;
            report['showsHorizontalScrollIndicator'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: CutoutGuildBanner
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            foxtra = michal.guild;
            var _closure2_slot0 = foxtra;
            michal = _closure1_slot16;
            tangon = undefined;
            kiloes = michal.bind(tangon)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 17;
            michal = report[michal];
            oscard = zuuluu.bind(tangon)(michal);
            report = oscard.useStateFromStores;
            michal = _closure1_slot7;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                entity = _closure1_slot7;
                entity = entity.useReducedMotion;
                return entity;
            };
            verify = report.bind(oscard)(zuuluu, michal);
            report = !verify;
            if(!report) { _fun00012_ip = 104; continue _fun00011 }
 83:
            zuuluu = foxtra.hasFeature;
            michal = _closure1_slot11;
            michal = michal.ANIMATED_BANNER;
            report = zuuluu.bind(foxtra)(michal);
 104:
            michal = foxtra.banner;
            offset = null;
            michal = offset != michal;
            sizing = undefined;
            if(!michal) { _fun00012_ip = 160; continue _fun00011 }
 121:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 18;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.getAnimatableSourceWithFallback;
            entity = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 18;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.getGuildBannerSource;
                michal = {};
                entity = _closure2_slot0;
                report = entity.id;
                michal['id'] = report;
                entity = entity.banner;
                michal['banner'] = entity;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            sizing = michal.bind(zuuluu)(report, entity);
 160:
            zuuluu = _closure1_slot13;
            michal = _closure1_slot6;
            entity = {};
            report = kiloes.bannerImage;
            entity['style'] = report;
            golfie = _closure1_slot12;
            oscard = _closure1_slot1;
            output = _closure1_slot2;
            option = 19;
            report = output[option];
            oscard = oscard.bind(tangon)(report);
            report = {};
            romeon = {'shape': null, 'x': 8, 'y': 46, 'width': 56, 'height': 56, 'cornerRadius': 20};
            backup = _closure1_slot0;
            option = output[option];
            option = backup.bind(tangon)(option);
            option = option.CutoutShape;
            option = option.RoundedRect;
            romeon['shape'] = option;
            output = 20;
            option = new Array(1);
            option[0] = romeon;
            report['cutouts'] = option;
            option = foxtra.banner;
            if(!(offset == option)) { _fun00012_ip = 323; continue _fun00011 }
 277:
            romeon = _closure1_slot12;
            offset = _closure1_slot6;
            option = {};
            result = kiloes.bannerImage;
            backup = new Array(2);
            backup[0] = result;
            result = kiloes.emptyBanner;
            backup[1] = result;
            option['style'] = backup;
            option = romeon.bind(tangon)(offset, option);
            _fun00012_ip = 375; continue _fun00011;
 323:
            backup = _closure1_slot12;
            romeon = _closure1_slot1;
            offset = _closure1_slot2;
            offset = offset[output];
            romeon = romeon.bind(tangon)(offset);
            offset = {};
            output = kiloes.bannerImage;
            offset['style'] = output;
            offset['source'] = sizing;
            sizing = 'cover';
            offset['resizeMode'] = sizing;
            option = backup.bind(tangon)(romeon, offset);
 375:
            report['children'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot12;
            golfie = _closure1_slot1;
            romeon = _closure1_slot2;
            offset = 12;
            oscard = romeon[offset];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            sizing = kiloes.guildIcon;
            backup = new Array(2);
            backup[0] = sizing;
            kiloes = kiloes.guildIconBorder;
            backup[1] = kiloes;
            oscard['style'] = backup;
            oscard['guild'] = foxtra;
            yankee = _closure1_slot0;
            offset = romeon[offset];
            offset = yankee.bind(tangon)(offset);
            offset = offset.GuildIconSizes;
            offset = offset.LARGE;
            oscard['size'] = offset;
            verify = !verify;
            oscard['animate'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: FeaturedServer
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            kiloes = michal.guild;
            var _closure2_slot0 = kiloes;
            output = michal.selected;
            echoed = michal.loading;
            oscard = michal.handlePress;
            var _closure2_slot1 = oscard;
            michal = _closure1_slot16;
            tangon = undefined;
            foxtra = michal.bind(tangon)();
            backup = _closure1_slot0;
            source = _closure1_slot2;
            michal = 17;
            michal = source[michal];
            golfie = backup.bind(tangon)(michal);
            report = golfie.useStateFromStores;
            michal = _closure1_slot9;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot9;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = entity.id;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != michal;
                return entity;
            };
            sizing = report.bind(golfie)(zuuluu, michal);
            report = _closure1_slot5;
            zuuluu = report.useCallback;
            michal = new Array(2);
            michal[0] = kiloes;
            michal[1] = oscard;
            entity = function() {
                zuuluu = _closure2_slot1;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            result = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot13;
            entity = 21;
            entity = source[entity];
            entity = backup.bind(tangon)(entity);
            michal = entity.PressableHighlight;
            entity = {};
            report = foxtra.pressableUnderlayColor;
            report = report.backgroundColor;
            entity['underlayColor'] = report;
            report = 50;
            entity['unstable_pressDelay'] = report;
            report = foxtra.featuredServerContainer;
            entity['style'] = report;
            entity['onPress'] = result;
            golfie = _closure1_slot12;
            oscard = _closure1_slot20;
            report = {};
            report['guild'] = kiloes;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot13;
            golfie = _closure1_slot6;
            oscard = {};
            verify = foxtra.featuredServerInnerContainer;
            oscard['style'] = verify;
            romeon = _closure1_slot12;
            offset = 22;
            verify = source[offset];
            verify = backup.bind(tangon)(verify);
            yankee = verify.Text;
            verify = {'maxFontSizeMultiplier': 1, 'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            ctrled = foxtra.featuredServerTitle;
            verify['style'] = ctrled;
            ctrled = kiloes.name;
            verify['children'] = ctrled;
            yankee = romeon.bind(tangon)(yankee, verify);
            verify = new Array(3);
            verify[0] = yankee;
            romeon = _closure1_slot12;
            offset = source[offset];
            offset = backup.bind(tangon)(offset);
            yankee = offset.Text;
            offset = {'maxFontSizeMultiplier': 1, 'lineClamp': 2, 'variant': 'text-xs/normal', 'color': 'header-secondary'};
            kiloes = kiloes.description;
            offset['children'] = kiloes;
            offset = romeon.bind(tangon)(yankee, offset);
            verify[1] = offset;
            romeon = _closure1_slot12;
            yankee = _closure1_slot6;
            offset = {};
            foxtra = foxtra.buttonContainer;
            offset['style'] = foxtra;
            kiloes = _closure1_slot12;
            foxtra = 23;
            foxtra = source[foxtra];
            foxtra = backup.bind(tangon)(foxtra);
            backup = foxtra.Button;
            foxtra = {};
            source = 'checkbox';
            foxtra['accessibilityHint'] = source;
            source = {};
            source['checked'] = output;
            foxtra['accessibilityState'] = source;
            foxtra['disabled'] = sizing;
            source = undefined;
            if(!output) { _fun00014_ip = 515; continue _fun00013 }
 438:
            sequen = _closure1_slot12;
            vacuum = _closure1_slot0;
            cntext = _closure1_slot2;
            ctrled = 24;
            ctrled = cntext[ctrled];
            ctrled = vacuum.bind(tangon)(ctrled);
            vacuum = ctrled.CircleCheckIcon;
            ctrled = {};
            config = 'sm';
            ctrled['size'] = config;
            record = _closure1_slot1;
            config = 11;
            config = cntext[config];
            config = record.bind(tangon)(config);
            config = config.colors;
            config = config.REDESIGN_BUTTON_ACTIVE_TEXT;
            ctrled['color'] = config;
            source = sequen.bind(tangon)(vacuum, ctrled);
 515:
            foxtra['icon'] = source;
            if(!sizing) { _fun00014_ip = 582; continue _fun00013 }
 522:
            if(echoed) { _fun00014_ip = 582; continue _fun00013 }
 525:
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            echoed = 25;
            source = sequen[echoed];
            source = vacuum.bind(tangon)(source);
            ctrled = source.intl;
            source = ctrled.string;
            echoed = sequen[echoed];
            echoed = vacuum.bind(tangon)(echoed);
            echoed = echoed.t;
            echoed = echoed.cEnaW1;
            echoed = source.bind(ctrled)(echoed);
            _fun00014_ip = 658; continue _fun00013;
 582:
            source = _closure1_slot0;
            sequen = _closure1_slot2;
            update = 25;
            ctrled = sequen[update];
            ctrled = source.bind(tangon)(ctrled);
            vacuum = ctrled.intl;
            ctrled = vacuum.string;
            update = sequen[update];
            update = source.bind(tangon)(update);
            source = update.t;
            if(output) { _fun00014_ip = 642; continue _fun00013 }
 629:
            update = source.XqMe3N;
            update = ctrled.bind(vacuum)(update);
            _fun00014_ip = 655; continue _fun00013;
 642:
            source = source.TwueCw;
            update = ctrled.bind(vacuum)(source);
 655:
            echoed = update;
 658:
            foxtra['text'] = echoed;
            echoed = 'sm';
            foxtra['size'] = echoed;
            foxtra['onPress'] = result;
            if(sizing) { _fun00014_ip = 684; continue _fun00013 }
 677:
            sizing = 'active';
            if(output) { _fun00014_ip = 688; continue _fun00013 }
 684:
            sizing = 'secondary';
 688:
            foxtra['variant'] = sizing;
            sizing = true;
            foxtra['grow'] = sizing;
            foxtra = kiloes.bind(tangon)(backup, foxtra);
            offset['children'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            verify[2] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    romeon = 1;
    tangon = oscard[romeon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot6 = golfie;
    backup = tangon.StyleSheet;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.ICYMI_MARGIN;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot10 = golfie;
    tangon = tangon.GuildFeatures;
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot12 = golfie;
    golfie = tangon.jsxs;
    var _closure1_slot13 = golfie;
    tangon = tangon.Fragment;
    var _closure1_slot14 = tangon;
    tangon = 50;
    var _closure1_slot15 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'backgroundColor': null, 'position': 'relative', 'flex': 1};
    offset = 11;
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BG_BASE_SECONDARY;
    verify['backgroundColor'] = kiloes;
    verify['marginHorizontal'] = foxtra;
    tangon['container'] = verify;
    verify = {};
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_8;
    verify['paddingTop'] = kiloes;
    tangon['scrollContentContainer'] = verify;
    verify = {'position': 'absolute', 'bottom': 0};
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_24;
    verify['left'] = kiloes;
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_24;
    verify['right'] = kiloes;
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_8;
    verify['paddingBottom'] = kiloes;
    tangon['footer'] = verify;
    verify = {};
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_24;
    verify['marginTop'] = kiloes;
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_8;
    verify['marginBottom'] = kiloes;
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_24;
    verify['marginHorizontal'] = kiloes;
    tangon['title'] = verify;
    verify = {};
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_24;
    verify['marginHorizontal'] = kiloes;
    tangon['subtitle'] = verify;
    verify = {};
    backup = backup.hairlineWidth;
    verify['height'] = backup;
    backup = '100%';
    verify['width'] = backup;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BORDER_SUBTLE;
    verify['backgroundColor'] = backup;
    tangon['separator'] = verify;
    verify = {};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.lg;
    verify['borderRadius'] = backup;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.CARD_PRIMARY_BG;
    verify['backgroundColor'] = backup;
    backup = 'hidden';
    verify['overflow'] = backup;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_8;
    verify['marginHorizontal'] = backup;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_8;
    verify['marginVertical'] = backup;
    tangon['featuredServerContainer'] = verify;
    verify = {};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_12;
    verify['marginHorizontal'] = backup;
    backup = 36;
    verify['marginTop'] = backup;
    tangon['featuredServerInnerContainer'] = verify;
    verify = {};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_12;
    verify['marginBottom'] = backup;
    verify['marginTop'] = foxtra;
    tangon['buttonContainer'] = verify;
    verify = {};
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_8;
    verify['marginBottom'] = foxtra;
    tangon['featuredServerTitle'] = verify;
    verify = {'position': 'absolute', 'top': 50, 'left': 12};
    tangon['guildIcon'] = verify;
    verify = {'height': 73, 'width': '100%'};
    tangon['bannerImage'] = verify;
    verify = {};
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_MOD_SUBTLE;
    verify['backgroundColor'] = foxtra;
    tangon['emptyBanner'] = verify;
    verify = {};
    verify['flex'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_8;
    verify['marginHorizontal'] = romeon;
    tangon['guildsScrollContainer'] = verify;
    verify = {'flex': 1, 'flexDirection': 'column'};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['gap'] = romeon;
    tangon['guildsColumn'] = verify;
    verify = {'height': 50, 'width': '100%'};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_24;
    verify['marginBottom'] = romeon;
    tangon['selectedServersRowContainer'] = verify;
    verify = {'flex': 1, 'width': 50, 'height': 50, 'alignItems': 'center', 'justifyContent': 'center', 'borderColor': null, 'borderRadius': null, 'borderWidth': 1};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BORDER_STRONG;
    verify['borderColor'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.md;
    verify['borderRadius'] = romeon;
    tangon['selectedServerIcon'] = verify;
    verify = {};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_MOD_FAINT;
    verify['backgroundColor'] = romeon;
    romeon = 'dashed';
    verify['borderStyle'] = romeon;
    tangon['noServerContainer'] = verify;
    verify = {};
    romeon = 0.4;
    verify['opacity'] = romeon;
    tangon['noServerExtraContainer'] = verify;
    verify = {};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_MODIFIER_ACTIVE;
    verify['backgroundColor'] = romeon;
    tangon['pressableUnderlayColor'] = verify;
    verify = {};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.md;
    verify['borderRadius'] = offset;
    tangon['guildIconBorder'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot16 = tangon;
    tangon = {};
    golfie = 'function ICYMIJoinGuildsScreenTsx1(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.spacing.PX_24:0)};}';
    tangon['code'] = golfie;
    var _closure1_slot17 = tangon;
    tangon = 33;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/tabs/gravity/info_modal/ICYMIJoinGuildsScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: ICYMIJoinGuildsScreen
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = _closure1_slot16;
            tangon = undefined;
            romeon = michal.bind(tangon)();
            record = _closure1_slot1;
            cntext = _closure1_slot2;
            michal = 26;
            michal = cntext[michal];
            michal = record.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            yankee = michal.bottom;
            output = _closure1_slot0;
            zuuluu = 17;
            michal = cntext[zuuluu];
            option = output.bind(tangon)(michal);
            golfie = option.useStateFromStoresArray;
            michal = _closure1_slot8;
            oscard = new Array(1);
            oscard[0] = michal;
            report = function() {
                michal = _closure1_slot8;
                entity = michal.getOnboardingGuilds;
                entity = entity.bind(michal)();
                return entity;
            };
            sequen = golfie.bind(option)(oscard, report);
            var _closure2_slot0 = sequen;
            report = cntext[zuuluu];
            option = output.bind(tangon)(report);
            golfie = option.useStateFromStoresArray;
            oscard = new Array(1);
            oscard[0] = michal;
            report = function() {
                michal = _closure1_slot8;
                entity = michal.getOnboardingCategoryIds;
                entity = entity.bind(michal)();
                return entity;
            };
            result = golfie.bind(option)(oscard, report);
            var _closure2_slot1 = result;
            zuuluu = cntext[zuuluu];
            oscard = output.bind(tangon)(zuuluu);
            report = oscard.useStateFromStores;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot8;
                entity = michal.getCurrentOnboardingGuildOffset;
                entity = entity.bind(michal)();
                return entity;
            };
            backup = report.bind(oscard)(zuuluu, michal);
            var _closure2_slot2 = backup;
            report = _closure1_slot5;
            zuuluu = report.useState;
            michal = global;
            michal = michal.Set;
            oscard = michal.prototype;
            oscard = Object.create(oscard, {constructor: {value: michal}});
            sierra = oscard;
            michal = new sierra[michal](status);
            michal = michal instanceof Object ? michal : oscard;
            zuuluu = zuuluu.bind(report)(michal);
            michal = _closure1_slot4;
            vacuum = 2;
            michal = michal.bind(tangon)(zuuluu, vacuum);
            report = 0;
            oscard = michal[report];
            var _closure2_slot3 = oscard;
            golfie = 1;
            michal = michal[golfie];
            var _closure2_slot4 = michal;
            option = _closure1_slot5;
            zuuluu = option.useState;
            michal = new Array(0);
            zuuluu = zuuluu.bind(option)(michal);
            michal = _closure1_slot4;
            michal = michal.bind(tangon)(zuuluu, vacuum);
            sizing = michal[report];
            michal = michal[golfie];
            var _closure2_slot5 = michal;
            zuuluu = _closure1_slot5;
            michal = zuuluu.useState;
            zuuluu = michal.bind(zuuluu)(report);
            michal = _closure1_slot4;
            zuuluu = michal.bind(tangon)(zuuluu, vacuum);
            michal = zuuluu[report];
            var _closure2_slot6 = michal;
            zuuluu = zuuluu[golfie];
            var _closure2_slot7 = zuuluu;
            foxtra = _closure1_slot5;
            verify = foxtra.useCallback;
            option = new Array(1);
            option[0] = oscard;
            zuuluu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = argFoo;
                    var _closure3_slot0 = tangon;
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 27;
                    report = report[entity];
                    entity = undefined;
                    verify = oscard.bind(entity)(report);
                    option = verify.track;
                    zuuluu = _closure1_slot10;
                    golfie = zuuluu.ICYMI_ONBOARDING_GUILD_TOGGLED;
                    report = {};
                    zuuluu = tangon.id;
                    report['guild_id'] = zuuluu;
                    oscard = _closure2_slot3;
                    yankee = oscard.has;
                    offset = tangon.id;
                    offset = yankee.bind(oscard)(offset);
                    offset = !offset;
                    report['toggled'] = offset;
                    report = option.bind(verify)(golfie, report);
                    report = oscard.has;
                    tangon = tangon.id;
                    tangon = report.bind(oscard)(tangon);
                    report = _closure2_slot4;
                    if(tangon) { _fun00018_ip = 148; continue _fun00017 }
 118:
                    tangon = function(argFoo) {
                        zuuluu = argFoo;
                        michal = zuuluu.add;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = michal.bind(zuuluu)(entity);
                        entity = global;
                        entity = entity.Set;
                        michal = entity.prototype;
                        michal = Object.create(michal, {constructor: {value: entity}});
                        report = michal;
                        tangon = zuuluu;
                        entity = new report[entity](tangon, zuuluu);
                        entity = entity instanceof Object ? entity : michal;
                        return entity;
                    };
                    tangon = report.bind(entity)(tangon);
                    oscard = _closure2_slot5;
                    tangon = function(argFoo) {
                        entity = new Array(1);
                        report = argFoo;
                        tangon = 0;
                        oscard = entity;
                        zuuluu = arraySpread(oscard, report, tangon);
                        michal = _closure3_slot0;
                        entity[zuuluu] = michal;
                        michal = 1;
                        michal = zuuluu + michal;
                        return entity;
                    };
                    tangon = oscard.bind(entity)(tangon);
                    _fun00018_ip = 176; continue _fun00017;
 148:
                    tangon = function(argFoo) {
                        zuuluu = argFoo;
                        michal = zuuluu.delete;
                        entity = _closure3_slot0;
                        entity = entity.id;
                        entity = michal.bind(zuuluu)(entity);
                        entity = global;
                        entity = entity.Set;
                        michal = entity.prototype;
                        michal = Object.create(michal, {constructor: {value: entity}});
                        report = michal;
                        tangon = zuuluu;
                        entity = new report[entity](tangon, zuuluu);
                        entity = entity instanceof Object ? entity : michal;
                        return entity;
                    };
                    tangon = report.bind(entity)(tangon);
                    zuuluu = _closure2_slot5;
                    michal = function(argFoo) {
                        zuuluu = argFoo;
                        michal = zuuluu.filter;
                        entity = function(argFoo) {
                            entity = _closure3_slot0;
                            michal = entity.id;
                            entity = argFoo;
                            entity = entity.id;
                            entity = michal !== entity;
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    michal = zuuluu.bind(entity)(michal);
 176:
                    return entity;
                }
            };
            option = verify.bind(foxtra)(zuuluu, option);
            var _closure2_slot8 = option;
            verify = _closure1_slot5;
            zuuluu = verify.useState;
            source = false;
            verify = zuuluu.bind(verify)(source);
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(tangon)(verify, vacuum);
            kiloes = zuuluu[report];
            var _closure2_slot9 = kiloes;
            zuuluu = zuuluu[golfie];
            var _closure2_slot10 = zuuluu;
            foxtra = _closure1_slot5;
            verify = foxtra.useCallback;
            report = _closure1_slot3;
            zuuluu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00020_ip = 492; continue _fun00019 }
 10:
                        tangon = _closure2_slot10;
                        report = undefined;
                        zuuluu = true;
                        zuuluu = tangon.bind(report)(zuuluu);
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        golfie = 28;
                        zuuluu = zuuluu[golfie];
                        option = tangon.bind(report)(zuuluu);
                        tangon = option.gravityJoinGuild;
                        zuuluu = global;
                        verify = zuuluu.Array;
                        zuuluu = verify.from;
                        michal = _closure2_slot3;
                        zuuluu = zuuluu.bind(verify)(michal);
                        michal = 'icymi_info_modal';
                        michal = tangon.bind(option)(zuuluu, michal);
                        SaveGenerator(address=93);
 91:
                        return michal;
 93:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00020_ip = 489; continue _fun00019 }
 102:
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        if(michal) { _fun00020_ip = 309; continue _fun00019 }
 116:
                        option = 29;
                        option = zuuluu[option];
                        offset = tangon.bind(report)(option);
                        verify = offset.open;
                        option = {};
                        yankee = 'ICYMIInfoModal';
                        option['key'] = yankee;
                        yankee = _closure1_slot0;
                        romeon = 25;
                        foxtra = zuuluu[romeon];
                        foxtra = yankee.bind(report)(foxtra);
                        backup = foxtra.intl;
                        foxtra = backup.string;
                        romeon = zuuluu[romeon];
                        romeon = yankee.bind(report)(romeon);
                        romeon = romeon.t;
                        romeon = romeon.CG4Hkp;
                        romeon = foxtra.bind(backup)(romeon);
                        option['content'] = romeon;
                        option = verify.bind(offset)(option);
                        option = zuuluu[golfie];
                        verify = tangon.bind(report)(option);
                        option = verify.fetchDehydrated;
                        option = option.bind(verify)();
                        option = zuuluu[golfie];
                        verify = tangon.bind(report)(option);
                        option = verify.getGuildChannelScores;
                        option = option.bind(verify)();
                        option = zuuluu[golfie];
                        verify = tangon.bind(report)(option);
                        option = verify.getRecommendedGuilds;
                        option = option.bind(verify)();
                        option = 30;
                        option = zuuluu[option];
                        offset = tangon.bind(report)(option);
                        verify = offset.popWithKey;
                        option = 31;
                        option = zuuluu[option];
                        option = yankee.bind(report)(option);
                        option = option.ICYMI_INFO_MODAL_KEY;
                        option = verify.bind(offset)(option);
                        option = undefined;
                        return option;
 309:
                        zuuluu = zuuluu[golfie];
                        option = tangon.bind(report)(zuuluu);
                        tangon = option.fetchDehydrated;
                        zuuluu = {'isReloading': true, 'forceRefresh': true};
                        zuuluu = tangon.bind(option)(zuuluu);
                        SaveGenerator(address=343);
 341:
                        return zuuluu;
 343:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tangon) { _fun00020_ip = 486; continue _fun00019 }
 352:
                        option = _closure1_slot1;
                        tangon = _closure1_slot2;
                        tangon = tangon[golfie];
                        option = option.bind(report)(tangon);
                        tangon = option.reloadICYMITab;
                        tangon = tangon.bind(option)();
                        SaveGenerator(address=383);
 381:
                        return tangon;
 383:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(option) { _fun00020_ip = 483; continue _fun00019 }
 389:
                        option = _closure1_slot1;
                        offset = _closure1_slot2;
                        verify = offset[golfie];
                        yankee = option.bind(report)(verify);
                        verify = yankee.getGuildChannelScores;
                        verify = verify.bind(yankee)();
                        golfie = offset[golfie];
                        verify = option.bind(report)(golfie);
                        golfie = verify.getRecommendedGuilds;
                        golfie = golfie.bind(verify)();
                        golfie = 30;
                        golfie = offset[golfie];
                        option = option.bind(report)(golfie);
                        golfie = option.popWithKey;
                        verify = _closure1_slot0;
                        oscard = 31;
                        oscard = offset[oscard];
                        oscard = verify.bind(report)(oscard);
                        oscard = oscard.ICYMI_INFO_MODAL_KEY;
                        oscard = golfie.bind(option)(oscard);
                        return report;
 483:
                        return tangon;
 486:
                        return zuuluu;
 489:
                        return michal;
 492:
                        return entity;
                    }
                };
                return entity;
            };
            report = report.bind(tangon)(zuuluu);
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            foxtra = verify.bind(foxtra)(report, zuuluu);
            verify = _closure1_slot5;
            report = verify.useCallback;
            zuuluu = new Array(4);
            zuuluu[0] = result;
            zuuluu[1] = backup;
            zuuluu[2] = michal;
            michal = sequen.length;
            zuuluu[3] = michal;
            michal = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = _closure2_slot6;
                    michal = _closure2_slot2;
                    if(!(!(zuuluu > michal))) { _fun00022_ip = 111; continue _fun00021 }
 15:
                    michal = _closure2_slot0;
                    zuuluu = michal.length;
                    michal = 150;
                    if(!(!(zuuluu >= michal))) { _fun00022_ip = 111; continue _fun00021 }
 31:
                    tangon = _closure2_slot2;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 31;
                    zuuluu = oscard[zuuluu];
                    report = undefined;
                    zuuluu = golfie.bind(report)(zuuluu);
                    zuuluu = zuuluu.ICYMI_DISCOVERABLE_GUILDS_PAGE_SIZE;
                    tangon = tangon + zuuluu;
                    zuuluu = _closure2_slot7;
                    zuuluu = zuuluu.bind(report)(tangon);
                    zuuluu = _closure1_slot1;
                    michal = 28;
                    michal = oscard[michal];
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = zuuluu.fetchPopularGuildsFromCategories;
                    entity = _closure2_slot1;
                    entity = michal.bind(zuuluu)(entity, tangon);
 111:
                    entity = undefined;
                    return entity;
                }
            };
            ctrled = report.bind(verify)(michal, zuuluu);
            report = _closure1_slot5;
            zuuluu = report.useCallback;
            michal = new Array(3);
            michal[0] = kiloes;
            michal[1] = oscard;
            michal[2] = option;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.item;
                report = _closure1_slot12;
                tangon = _closure1_slot21;
                zuuluu = {};
                zuuluu['guild'] = entity;
                oscard = _closure2_slot9;
                zuuluu['loading'] = oscard;
                option = _closure2_slot3;
                golfie = option.has;
                oscard = entity.id;
                oscard = golfie.bind(option)(oscard);
                zuuluu['selected'] = oscard;
                michal = _closure2_slot8;
                zuuluu['handlePress'] = michal;
                michal = entity.id;
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            update = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot13;
            michal = _closure1_slot14;
            entity = {};
            backup = _closure1_slot12;
            option = 22;
            report = cntext[option];
            report = output.bind(tangon)(report);
            verify = report.Text;
            report = {'variant': 'heading-xl/semibold', 'color': 'header-primary'};
            result = romeon.title;
            report['style'] = result;
            result = 25;
            echoed = cntext[result];
            echoed = output.bind(tangon)(echoed);
            papara = echoed.intl;
            config = papara.string;
            echoed = cntext[result];
            echoed = output.bind(tangon)(echoed);
            echoed = echoed.t;
            echoed = echoed.19ldCA;
            echoed = config.bind(papara)(echoed);
            report['children'] = echoed;
            verify = backup.bind(tangon)(verify, report);
            report = new Array(6);
            report[0] = verify;
            backup = _closure1_slot12;
            option = cntext[option];
            option = output.bind(tangon)(option);
            verify = option.Text;
            option = {'variant': 'text-sm/normal', 'color': 'header-muted'};
            echoed = romeon.subtitle;
            option['style'] = echoed;
            echoed = cntext[result];
            echoed = output.bind(tangon)(echoed);
            papara = echoed.intl;
            config = papara.string;
            echoed = cntext[result];
            echoed = output.bind(tangon)(echoed);
            echoed = echoed.t;
            echoed = echoed.u0KPUV;
            echoed = config.bind(papara)(echoed);
            option['children'] = echoed;
            option = backup.bind(tangon)(verify, option);
            report[1] = option;
            backup = _closure1_slot12;
            verify = _closure1_slot19;
            option = {};
            option['selectedGuilds'] = sizing;
            option = backup.bind(tangon)(verify, option);
            report[2] = option;
            backup = _closure1_slot12;
            verify = _closure1_slot6;
            option = {};
            sizing = romeon.separator;
            option['style'] = sizing;
            option = backup.bind(tangon)(verify, option);
            report[3] = option;
            backup = _closure1_slot12;
            verify = _closure1_slot6;
            option = {};
            sizing = romeon.guildsScrollContainer;
            option['style'] = sizing;
            echoed = _closure1_slot12;
            sizing = 32;
            sizing = cntext[sizing];
            sizing = output.bind(tangon)(sizing);
            output = sizing.MasonryFlashList;
            sizing = {};
            sizing['data'] = sequen;
            sizing['extraData'] = oscard;
            sequen = romeon.scrollContentContainer;
            sizing['contentContainerStyle'] = sequen;
            sequen = {};
            config = 11;
            config = cntext[config];
            config = record.bind(tangon)(config);
            config = config.spacing;
            config = config.PX_72;
            config = config + yankee;
            sequen['bottom'] = config;
            sizing['contentInset'] = sequen;
            sizing['numColumns'] = vacuum;
            sizing['onEndReached'] = ctrled;
            ctrled = 0.5;
            sizing['onEndReachedThreshold'] = ctrled;
            sizing['showsHorizontalScrollIndicator'] = source;
            sizing['showsVerticalScrollIndicator'] = source;
            sizing['renderItem'] = update;
            update = 229;
            sizing['estimatedItemSize'] = update;
            sizing = echoed.bind(tangon)(output, sizing);
            option['children'] = sizing;
            option = backup.bind(tangon)(verify, option);
            report[4] = option;
            oscard = oscard.size;
            oscard = oscard >= golfie;
            if(!oscard) { _fun00016_ip = 1144; continue _fun00015 }
 993:
            verify = _closure1_slot12;
            option = _closure1_slot6;
            golfie = {};
            backup = {};
            backup['marginBottom'] = yankee;
            yankee = new Array(2);
            yankee[0] = backup;
            romeon = romeon.footer;
            yankee[1] = romeon;
            golfie['style'] = yankee;
            romeon = _closure1_slot12;
            output = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 23;
            offset = backup[offset];
            offset = output.bind(tangon)(offset);
            yankee = offset.Button;
            offset = {};
            offset['loading'] = kiloes;
            kiloes = 'lg';
            offset['size'] = kiloes;
            kiloes = backup[result];
            kiloes = output.bind(tangon)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.string;
            backup = backup[result];
            backup = output.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.K50GHR;
            backup = kiloes.bind(sizing)(backup);
            offset['text'] = backup;
            offset['onPress'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 1144:
            report[5] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();