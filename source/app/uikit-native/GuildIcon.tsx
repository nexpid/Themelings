// app/uikit-native/GuildIcon.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    backup = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = options;
    sizing = function(argFoo) { // Original name: makeSizeStyle
        zulu = argFoo;
        entity = {};
        entity['width'] = zulu;
        entity['height'] = zulu;
        mike = 3;
        mike = zulu / mike;
        entity['borderRadius'] = mike;
        return entity;
    };
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: getGuildIconSource
        _fun64910: for(var _fun64910_ip = 0; ; ) switch(_fun64910_ip) {
 0:
            report = argFoo;
            zulu = argCorge;
            entity = null;
            if(!(entity != report)) { _fun64910_ip = 21; continue _fun64910 }
 12:
            mike = report.icon;
            if(!(entity == mike)) { _fun64910_ip = 41; continue _fun64910 }
 21:
            mike = entity != zulu;
            entity = null;
            if(!mike) { _fun64910_ip = 39; continue _fun64910 }
 30:
            mike = {};
            mike['uri'] = zulu;
            entity = mike;
 39:
            _fun64910_ip = 70; continue _fun64910;
 41:
            tango = report.getIconSource;
            zulu = _closure1_slot8;
            mike = argBar;
            zulu = zulu[mike];
            mike = argBaz;
            entity = tango.bind(report)(zulu, mike);
 70:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: coerceStableAsset
        _fun64911: for(var _fun64911_ip = 0; ; ) switch(_fun64911_ip) {
 0:
            tango = argFoo;
            entity = global;
            mike = entity.Array;
            entity = mike.isArray;
            entity = entity.bind(mike)(tango);
            mike = null;
            if(entity) { _fun64911_ip = 59; continue _fun64911 }
 26:
            zulu = mike != tango;
            entity = undefined;
            if(!zulu) { _fun64911_ip = 57; continue _fun64911 }
 35:
            oscar = 'number';
            report = typeof tango;
            zulu = tango;
            if(!(oscar !== report)) { _fun64911_ip = 54; continue _fun64911 }
 49:
            zulu = tango.uri;
 54:
            entity = zulu;
 57:
            _fun64911_ip = 82; continue _fun64911;
 59:
            zulu = 0;
            zulu = tango[zulu];
            tango = mike == zulu;
            mike = undefined;
            if(tango) { _fun64911_ip = 79; continue _fun64911 }
 74:
            mike = zulu.uri;
 79:
            entity = mike;
 82:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    oscar = entity.Object;
    tango = oscar.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(oscar)(zulu, entity, mike);
    entity = 0;
    mike = options[entity];
    entity = undefined;
    mike = backup.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    tango = options[mike];
    mike = argCorge;
    verify = mike.bind(entity)(tango);
    var _closure1_slot4 = verify;
    mike = 2;
    mike = options[mike];
    mike = golf.bind(entity)(mike);
    kilo = mike.Fonts;
    mike = 3;
    mike = options[mike];
    mike = golf.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot5 = mike;
    tango = {};
    mike = 'XXXSMALL';
    tango['XXXSMALL'] = mike;
    mike = 'XXSMALL_12';
    tango['XXSMALL_12'] = mike;
    mike = 'XXSMALL';
    tango['XXSMALL'] = mike;
    mike = 'XSMALL_20';
    tango['XSMALL_20'] = mike;
    mike = 'XSMALL';
    tango['XSMALL'] = mike;
    mike = 'SMALL';
    tango['SMALL'] = mike;
    mike = 'SMALL_32';
    tango['SMALL_32'] = mike;
    mike = 'SMALL_36';
    tango['SMALL_36'] = mike;
    mike = 'NORMAL';
    tango['NORMAL'] = mike;
    mike = 'LARGE';
    tango['LARGE'] = mike;
    mike = 'XLARGE';
    tango['XLARGE'] = mike;
    mike = 'XXLARGE';
    tango['XXLARGE'] = mike;
    var _closure1_slot6 = tango;
    mike = {};
    offset = tango.XXXSMALL;
    oscar = [6, 4, 4, 4, 2, 1];
    mike[offset] = oscar;
    offset = tango.XXSMALL_12;
    oscar = [8, 6, 6, 4, 4, 2];
    mike[offset] = oscar;
    offset = tango.XXSMALL;
    oscar = [10, 8, 8, 6, 6, 4];
    mike[offset] = oscar;
    offset = tango.XSMALL_20;
    oscar = [12, 10, 10, 8, 8, 6];
    mike[offset] = oscar;
    offset = tango.XSMALL;
    oscar = [16, 16, 16, 14, 14, 12];
    mike[offset] = oscar;
    offset = tango.SMALL;
    oscar = [16, 16, 16, 14, 14, 12];
    mike[offset] = oscar;
    offset = tango.SMALL_32;
    oscar = [16, 16, 16, 14, 14, 12];
    mike[offset] = oscar;
    offset = tango.SMALL_36;
    oscar = [16, 16, 16, 14, 14, 12];
    mike[offset] = oscar;
    offset = tango.NORMAL;
    oscar = [16, 16, 16, 14, 14, 12];
    mike[offset] = oscar;
    offset = tango.LARGE;
    oscar = [16, 16, 16, 14, 14, 12];
    mike[offset] = oscar;
    offset = tango.XLARGE;
    oscar = [16, 16, 16, 14, 14, 12];
    mike[offset] = oscar;
    offset = tango.XXLARGE;
    oscar = [16, 16, 16, 14, 14, 12];
    mike[offset] = oscar;
    var _closure1_slot7 = mike;
    mike = {};
    oscar = tango.XXXSMALL;
    record = 10;
    mike[oscar] = record;
    oscar = tango.XXSMALL_12;
    config = 12;
    mike[oscar] = config;
    oscar = tango.XXSMALL;
    sequence = 16;
    mike[oscar] = sequence;
    oscar = tango.XSMALL_20;
    vacuum = 20;
    mike[oscar] = vacuum;
    oscar = tango.XSMALL;
    control = 24;
    mike[oscar] = control;
    oscar = tango.SMALL;
    source = 30;
    mike[oscar] = source;
    oscar = tango.SMALL_32;
    update = 32;
    mike[oscar] = update;
    oscar = tango.SMALL_36;
    echo = 36;
    mike[oscar] = echo;
    oscar = tango.NORMAL;
    result = 40;
    mike[oscar] = result;
    oscar = tango.LARGE;
    output = 48;
    mike[oscar] = output;
    oscar = tango.XLARGE;
    foxtrot = 64;
    mike[oscar] = foxtrot;
    oscar = tango.XXLARGE;
    romeo = 80;
    mike[oscar] = romeo;
    var _closure1_slot8 = mike;
    oscar = 4;
    oscar = options[oscar];
    yankee = golf.bind(entity)(oscar);
    offset = yankee.createStyles;
    oscar = {};
    context = {'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    oscar['guildIcon'] = context;
    context = tango.XXXSMALL;
    record = sizing.bind(entity)(record);
    oscar[context] = record;
    record = tango.XXSMALL_12;
    config = sizing.bind(entity)(config);
    oscar[record] = config;
    config = tango.XXSMALL;
    sequence = sizing.bind(entity)(sequence);
    oscar[config] = sequence;
    sequence = tango.XSMALL_20;
    vacuum = sizing.bind(entity)(vacuum);
    oscar[sequence] = vacuum;
    vacuum = tango.XSMALL;
    control = sizing.bind(entity)(control);
    oscar[vacuum] = control;
    control = tango.SMALL;
    source = sizing.bind(entity)(source);
    oscar[control] = source;
    source = tango.SMALL_32;
    update = sizing.bind(entity)(update);
    oscar[source] = update;
    update = tango.SMALL_36;
    echo = sizing.bind(entity)(echo);
    oscar[update] = echo;
    echo = tango.NORMAL;
    result = sizing.bind(entity)(result);
    oscar[echo] = result;
    result = tango.LARGE;
    output = sizing.bind(entity)(output);
    oscar[result] = output;
    output = tango.XLARGE;
    foxtrot = sizing.bind(entity)(foxtrot);
    oscar[output] = foxtrot;
    foxtrot = tango.XXLARGE;
    romeo = sizing.bind(entity)(romeo);
    oscar[foxtrot] = romeo;
    sizing = {};
    romeo = 5;
    foxtrot = options[romeo];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BG_BRAND;
    sizing['backgroundColor'] = foxtrot;
    foxtrot = 'guildTextContainer';
    oscar[foxtrot] = sizing;
    sizing = {};
    foxtrot = options[romeo];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BG_BASE_SECONDARY;
    sizing['backgroundColor'] = foxtrot;
    foxtrot = 'guildTextContainerInactive';
    oscar[foxtrot] = sizing;
    sizing = {};
    foxtrot = options[romeo];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BG_BASE_PRIMARY;
    sizing['backgroundColor'] = foxtrot;
    foxtrot = 'guildTextContainerInactiveNested';
    oscar[foxtrot] = sizing;
    sizing = {};
    foxtrot = options[romeo];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.INTERACTIVE_NORMAL;
    sizing['color'] = foxtrot;
    foxtrot = kilo.PRIMARY_SEMIBOLD;
    sizing['fontFamily'] = foxtrot;
    foxtrot = 'guildText';
    oscar[foxtrot] = sizing;
    foxtrot = {};
    kilo = kilo.PRIMARY_SEMIBOLD;
    foxtrot['fontFamily'] = kilo;
    romeo = options[romeo];
    romeo = backup.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.WHITE;
    foxtrot['color'] = romeo;
    romeo = 'guildTextActive';
    oscar[romeo] = foxtrot;
    foxtrot = {};
    romeo = 'transparent';
    foxtrot['backgroundColor'] = romeo;
    romeo = 'guildTextContainerInactiveAlt';
    oscar[romeo] = foxtrot;
    oscar = offset.bind(yankee)(oscar);
    var _closure1_slot9 = oscar;
    oscar = verify.memo;
    report = function(argFoo) { // Original name: GuildIconInner
        _fun64912: for(var _fun64912_ip = 0; ; ) switch(_fun64912_ip) {
 0:
            entity = argFoo;
            zulu = entity.guild;
            var _closure2_slot0 = zulu;
            config = entity.icon;
            report = undefined;
            if(!(config === report)) { _fun64912_ip = 27; continue _fun64912 }
 25:
            config = null;
 27:
            var _closure2_slot1 = config;
            context = entity.animate;
            if(!(context === report)) { _fun64912_ip = 43; continue _fun64912 }
 41:
            context = false;
 43:
            var _closure2_slot2 = context;
            kilo = entity.loadingStyle;
            update = entity.size;
            if(!(update === report)) { _fun64912_ip = 75; continue _fun64912 }
 62:
            tango = _closure1_slot6;
            update = tango.NORMAL;
 75:
            var _closure2_slot3 = update;
            offset = entity.selected;
            var _closure2_slot4 = offset;
            tango = entity.TABS_altDefaultBackground;
            if(!(tango === report)) { _fun64912_ip = 101; continue _fun64912 }
 99:
            tango = false;
 101:
            golf = entity.nested;
            if(!(golf === report)) { _fun64912_ip = 113; continue _fun64912 }
 111:
            golf = false;
 113:
            verify = entity.textStyle;
            var _closure2_slot5 = verify;
            output = entity.preloadAnimation;
            var _closure2_slot6 = output;
            options = entity.value;
            if(!(options === report)) { _fun64912_ip = 148; continue _fun64912 }
 144:
            options = '';
 148:
            source = entity.style;
            var _closure2_slot7 = source;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            var _closure2_slot12 = report;
            var _closure2_slot13 = report;
            var _closure2_slot14 = report;
            var _closure2_slot15 = report;
            var _closure2_slot16 = report;
            var _closure2_slot17 = report;
            var _closure2_slot18 = report;
            entity = _closure1_slot9;
            echo = entity.bind(report)();
            _closure2_slot8 = echo;
            entity = _closure1_slot10;
            whiskey = undefined;
            lima = zulu;
            sierra = update;
            status = context;
            target = config;
            entity = whiskey[entity](lima, sierra, status, target, papa);
            result = _closure1_slot4;
            yankee = result.useRef;
            sizing = yankee.bind(result)(entity);
            _closure2_slot9 = sizing;
            romeo = result.useState;
            yankee = {};
            yankee = romeo.bind(result)(yankee);
            backup = _closure1_slot3;
            foxtrot = 2;
            yankee = backup.bind(report)(yankee, foxtrot);
            control = 1;
            yankee = yankee[control];
            _closure2_slot10 = yankee;
            romeo = result.useState;
            yankee = false;
            romeo = romeo.bind(result)(yankee);
            romeo = backup.bind(report)(romeo, foxtrot);
            foxtrot = 0;
            backup = romeo[foxtrot];
            romeo = romeo[control];
            _closure2_slot11 = romeo;
            foxtrot = result.useRef;
            romeo = true;
            foxtrot = foxtrot.bind(result)(romeo);
            _closure2_slot12 = foxtrot;
            result = _closure1_slot1;
            vacuum = _closure1_slot2;
            foxtrot = 7;
            foxtrot = vacuum[foxtrot];
            foxtrot = result.bind(report)(foxtrot);
            sizing = foxtrot.bind(report)(sizing);
            result = _closure1_slot11;
            foxtrot = result.bind(report)(sizing);
            sequence = result.bind(report)(entity);
            record = foxtrot !== sequence;
            _closure2_slot13 = record;
            foxtrot = !record;
            if(!record) { _fun64912_ip = 410; continue _fun64912 }
 393:
            result = output;
            if(!result) { _fun64912_ip = 407; continue _fun64912 }
 399:
            vacuum = 'string';
            result = vacuum === sequence;
 407:
            foxtrot = result;
 410:
            foxtrot = !foxtrot;
            _closure2_slot14 = foxtrot;
            sequence = _closure1_slot4;
            papa = sequence.useEffect;
            vacuum = function() {
                entity = function() {
                    mike = _closure2_slot12;
                    entity = false;
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                return entity;
            };
            result = new Array(0);
            result = papa.bind(sequence)(vacuum, result);
            vacuum = sequence.useEffect;
            result = new Array(7);
            result[0] = foxtrot;
            result[1] = context;
            result[2] = record;
            result[3] = zulu;
            result[4] = config;
            result[5] = output;
            result[6] = update;
            output = function() {
                _fun64915: for(var _fun64915_ip = 0; ; ) switch(_fun64915_ip) {
 0:
                    verify = _closure1_slot10;
                    foxtrot = _closure2_slot0;
                    romeo = _closure2_slot3;
                    yankee = _closure2_slot2;
                    offset = _closure2_slot1;
                    entity = undefined;
                    backup = undefined;
                    zulu = backup[verify](foxtrot, romeo, yankee, offset, verify);
                    var _closure3_slot0 = zulu;
                    oscar = _closure1_slot11;
                    golf = oscar.bind(entity)(zulu);
                    oscar = _closure2_slot14;
                    if(oscar) { _fun64915_ip = 129; continue _fun64915 }
 56:
                    oscar = _closure2_slot13;
                    if(!oscar) { _fun64915_ip = 129; continue _fun64915 }
 63:
                    oscar = _closure2_slot6;
                    if(!oscar) { _fun64915_ip = 129; continue _fun64915 }
 70:
                    options = 'string';
                    oscar = typeof golf;
                    if(!(options === oscar)) { _fun64915_ip = 129; continue _fun64915 }
 81:
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 8;
                    report = options[report];
                    oscar = oscar.bind(entity)(report);
                    report = oscar.preload;
                    oscar = report.bind(oscar)(golf);
                    report = oscar.then;
                    tango = function() {
                        entity = global;
                        tango = entity.setTimeout;
                        entity = undefined;
                        zulu = function() {
                            _fun64917: for(var _fun64917_ip = 0; ; ) switch(_fun64917_ip) {
 0:
                                mike = _closure2_slot12;
                                mike = mike.current;
                                if(!mike) { _fun64917_ip = 45; continue _fun64917 }
 15:
                                zulu = _closure2_slot9;
                                mike = _closure3_slot0;
                                zulu['current'] = mike;
                                zulu = _closure2_slot10;
                                mike = undefined;
                                entity = {};
                                entity = zulu.bind(mike)(entity);
 45:
                                entity = undefined;
                                return entity;
                            }
                        };
                        mike = 0;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    tango = report.bind(oscar)(tango);
                    _fun64915_ip = 146; continue _fun64915;
 129:
                    tango = _closure2_slot13;
                    if(!tango) { _fun64915_ip = 146; continue _fun64915 }
 136:
                    mike = _closure2_slot9;
                    mike['current'] = zulu;
 146:
                    return entity;
                }
            };
            output = vacuum.bind(sequence)(output, result);
            if(!foxtrot) { _fun64912_ip = 495; continue _fun64912 }
 492:
            sizing = entity;
 495:
            foxtrot = null;
            entity = foxtrot == sizing;
            _closure2_slot15 = entity;
            result = undefined;
            if(entity) { _fun64912_ip = 527; continue _fun64912 }
 510:
            result = undefined;
            if(backup) { _fun64912_ip = 527; continue _fun64912 }
 515:
            backup = foxtrot == kilo;
            result = undefined;
            if(backup) { _fun64912_ip = 527; continue _fun64912 }
 524:
            result = kilo;
 527:
            _closure2_slot16 = result;
            output = undefined;
            if(!entity) { _fun64912_ip = 579; continue _fun64912 }
 536:
            output = undefined;
            if(!(yankee === offset)) { _fun64912_ip = 579; continue _fun64912 }
 542:
            if(golf) { _fun64912_ip = 568; continue _fun64912 }
 545:
            if(tango) { _fun64912_ip = 558; continue _fun64912 }
 548:
            tango = echo.guildTextContainerInactive;
            _fun64912_ip = 566; continue _fun64912;
 558:
            tango = echo.guildTextContainerInactiveAlt;
 566:
            _fun64912_ip = 576; continue _fun64912;
 568:
            tango = echo.guildTextContainerInactiveNested;
 576:
            output = tango;
 579:
            _closure2_slot17 = output;
            if(!(foxtrot == zulu)) { _fun64912_ip = 620; continue _fun64912 }
 587:
            golf = _closure1_slot0;
            backup = _closure1_slot2;
            tango = 6;
            tango = backup[tango];
            golf = golf.bind(report)(tango);
            tango = golf.getAcronym;
            options = tango.bind(golf)(options);
            _fun64912_ip = 626; continue _fun64912;
 620:
            options = zulu.acronym;
 626:
            backup = undefined;
            if(!entity) { _fun64912_ip = 677; continue _fun64912 }
 631:
            zulu = _closure1_slot7;
            golf = zulu[update];
            tango = undefined;
            if(!(report !== options)) { _fun64912_ip = 654; continue _fun64912 }
 645:
            zulu = options.length;
            tango = golf[zulu];
 654:
            zulu = golf.length;
            zulu = zulu - control;
            zulu = golf[zulu];
            if(!(foxtrot != tango)) { _fun64912_ip = 674; continue _fun64912 }
 671:
            zulu = tango;
 674:
            backup = zulu;
 677:
            _closure2_slot18 = backup;
            golf = _closure1_slot4;
            tango = golf.useMemo;
            zulu = new Array(9);
            zulu[0] = source;
            zulu[1] = update;
            zulu[2] = echo;
            zulu[3] = result;
            zulu[4] = output;
            zulu[5] = backup;
            zulu[6] = offset;
            zulu[7] = verify;
            zulu[8] = entity;
            mike = function() {
                _fun64918: for(var _fun64918_ip = 0; ; ) switch(_fun64918_ip) {
 0:
                    entity = _closure2_slot8;
                    entity = entity.guildIcon;
                    mike = new Array(3);
                    mike[0] = entity;
                    zulu = _closure2_slot8;
                    entity = _closure2_slot3;
                    entity = zulu[entity];
                    mike[1] = entity;
                    entity = _closure2_slot7;
                    mike[2] = entity;
                    entity = _closure2_slot16;
                    zulu = null;
                    if(!(zulu != entity)) { _fun64918_ip = 69; continue _fun64918 }
 55:
                    report = mike.push;
                    entity = _closure2_slot16;
                    entity = report.bind(mike)(entity);
 69:
                    entity = _closure2_slot15;
                    if(!entity) { _fun64918_ip = 99; continue _fun64918 }
 76:
                    report = mike.unshift;
                    entity = _closure2_slot8;
                    entity = entity.guildTextContainer;
                    entity = report.bind(mike)(entity);
 99:
                    entity = _closure2_slot17;
                    if(!(zulu != entity)) { _fun64918_ip = 121; continue _fun64918 }
 107:
                    zulu = mike.push;
                    entity = _closure2_slot17;
                    entity = zulu.bind(mike)(entity);
 121:
                    entity = {};
                    zulu = function() { // Original name: handleLoaded
                        zulu = _closure2_slot11;
                        mike = undefined;
                        entity = true;
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    };
                    entity['handleLoaded'] = zulu;
                    entity['wrapperStyle'] = mike;
                    zulu = _closure2_slot15;
                    mike = undefined;
                    if(!zulu) { _fun64918_ip = 219; continue _fun64918 }
 149:
                    report = _closure2_slot4;
                    zulu = false;
                    if(!(zulu !== report)) { _fun64918_ip = 173; continue _fun64918 }
 159:
                    zulu = _closure2_slot8;
                    report = zulu.guildTextActive;
                    _fun64918_ip = 185; continue _fun64918;
 173:
                    zulu = _closure2_slot8;
                    report = zulu.guildText;
 185:
                    zulu = new Array(3);
                    zulu[0] = report;
                    report = {};
                    oscar = _closure2_slot18;
                    report['fontSize'] = oscar;
                    zulu[1] = report;
                    tango = _closure2_slot5;
                    zulu[2] = tango;
                    mike = zulu;
 219:
                    entity['textComponentStyle'] = mike;
                    return entity;
                }
            };
            mike = tango.bind(golf)(mike, zulu);
            backup = mike.handleLoaded;
            golf = mike.wrapperStyle;
            verify = mike.textComponentStyle;
            tango = _closure1_slot5;
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            if(entity) { _fun64912_ip = 831; continue _fun64912 }
 774:
            entity = 8;
            entity = offset[entity];
            mike = zulu.bind(report)(entity);
            entity = {};
            entity['style'] = golf;
            entity['source'] = sizing;
            kilo = foxtrot != kilo;
            foxtrot = undefined;
            if(!kilo) { _fun64912_ip = 808; continue _fun64912 }
 805:
            foxtrot = backup;
 808:
            entity['onLoadEnd'] = foxtrot;
            entity['progressiveRenderingEnabled'] = romeo;
            entity['fade'] = yankee;
            entity = tango.bind(report)(mike, entity);
            _fun64912_ip = 915; continue _fun64912;
 831:
            mike = 9;
            mike = offset[mike];
            zulu = zulu.bind(report)(mike);
            mike = {'shouldRasterizeIOS': true, 'style': null, 'collapsable': false};
            mike['style'] = golf;
            golf = _closure1_slot0;
            oscar = 10;
            oscar = offset[oscar];
            oscar = golf.bind(report)(oscar);
            golf = oscar.NativeText;
            oscar = {'numberOfLines': 1, 'ellipsizeMode': 'tail', 'accessible': false, 'accessibilityRole': 'none', 'accessibilityElementsHidden': true, 'experimental_useNativeText': true};
            oscar['style'] = verify;
            oscar['children'] = options;
            oscar = tango.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 915:
            return entity;
        }
    };
    report = oscar.bind(verify)(report);
    oscar = 11;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'uikit-native/GuildIcon.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['GuildIconSizes'] = tango;
    zulu['ImageSizes'] = mike;
    return entity;
})();