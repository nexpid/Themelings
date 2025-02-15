// app/modules/stickers/native/StickerPicker.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = oscar;
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
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot3 = tango;
    romeo = 1;
    golf = oscar[romeo];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.View;
    var _closure1_slot5 = options;
    tango = tango.ActivityIndicator;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    yankee = tango.STICKER_SEARCH_HEADER_HEIGHT;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.AnalyticEvents;
    var _closure1_slot9 = options;
    options = tango.AnalyticsPages;
    var _closure1_slot10 = options;
    options = tango.AnalyticsSections;
    var _closure1_slot11 = options;
    options = tango.UpsellTypes;
    var _closure1_slot12 = options;
    tango = tango.ChatInputComponentViewedTypes;
    var _closure1_slot13 = tango;
    tango = 7;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot14 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot15 = tango;
    tango = 8;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    offset['flex'] = romeo;
    tango['container'] = offset;
    offset = {};
    offset['flex'] = romeo;
    tango['list'] = offset;
    offset = {};
    romeo = 9;
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.spacing;
    romeo = romeo.PX_8;
    offset['paddingVertical'] = romeo;
    tango['header'] = offset;
    offset = {'position': 'absolute', 'bottom': 100};
    tango['popoutContainer'] = offset;
    offset = {'alignItems': 'center', 'justifyContent': 'center', 'flex': 1};
    tango['loadingIndicator'] = offset;
    offset = {'marginTop': null, 'alignItems': 'center', 'justifyContent': 'center', 'flex': 1};
    offset['marginTop'] = yankee;
    tango['emptyState'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot16 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: StickerPicker
        _fun84912: for(var _fun84912_ip = 0; ; ) switch(_fun84912_ip) {
 0:
            entity = argFoo;
            control = entity.channel;
            var _closure2_slot0 = control;
            vacuum = entity.paddingTop;
            golf = entity.onPressSticker;
            var _closure2_slot1 = golf;
            source = entity.stickerFormats;
            echo = entity.inActionSheet;
            output = entity.inPortalKeyboard;
            entity = _closure1_slot16;
            tango = undefined;
            result = entity.bind(tango)();
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 11;
            entity = oscar[entity];
            report = mike.bind(tango)(entity);
            entity = report.useFetchStickerPacks;
            entity = entity.bind(report)();
            entity = 12;
            entity = oscar[entity];
            report = mike.bind(tango)(entity);
            entity = report.useStickerCategories;
            backup = entity.bind(report)(control);
            entity = 13;
            entity = oscar[entity];
            offset = mike.bind(tango)(entity);
            options = offset.useStateFromStores;
            entity = _closure1_slot8;
            report = new Array(1);
            report[0] = entity;
            entity = function() {
                entity = _closure1_slot8;
                entity = entity.hasLoadedStickerPacks;
                return entity;
            };
            offset = options.bind(offset)(report, entity);
            sizing = _closure1_slot4;
            entity = sizing.useState;
            kilo = 0;
            entity = entity.bind(sizing)(kilo);
            config = _closure1_slot3;
            update = 2;
            entity = config.bind(tango)(entity, update);
            foxtrot = entity[kilo];
            sequence = 1;
            record = entity[sequence];
            var _closure2_slot2 = record;
            romeo = _closure1_slot1;
            entity = 14;
            report = oscar[entity];
            options = romeo.bind(tango)(report);
            report = 15;
            report = oscar[report];
            report = romeo.bind(tango)(report);
            report = report.STICKER_PICKER;
            report = options.bind(tango)(report);
            report = report.analyticsLocations;
            var _closure2_slot3 = report;
            options = sizing.useState;
            yankee = null;
            options = options.bind(sizing)(yankee);
            options = config.bind(tango)(options, update);
            update = options[kilo];
            options = options[sequence];
            var _closure2_slot4 = options;
            options = 16;
            options = oscar[options];
            romeo = romeo.bind(tango)(options);
            options = {};
            status = true;
            options['hasCategories'] = status;
            options = romeo.bind(tango)(options);
            romeo = options.safeAreaStyle;
            sequence = options.safeAreaBottomKeyboardAware;
            context = sizing.useCallback;
            config = function(argFoo) {
                _fun84914: for(var _fun84914_ip = 0; ; ) switch(_fun84914_ip) {
 0:
                    report = argFoo;
                    entity = '';
                    if(!(entity !== report)) { _fun84914_ip = 61; continue _fun84914 }
 11:
                    zulu = _closure2_slot4;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 18;
                    entity = mike[entity];
                    mike = undefined;
                    tango = tango.bind(mike)(entity);
                    entity = tango.searchAllStickers;
                    entity = entity.bind(tango)(report);
                    entity = zulu.bind(mike)(entity);
                    _fun84914_ip = 106; continue _fun84914;
 61:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 17;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.batchUpdates;
                    entity = function() {
                        tango = _closure2_slot2;
                        entity = undefined;
                        zulu = 0;
                        zulu = tango.bind(entity)(zulu);
                        zulu = _closure2_slot4;
                        mike = null;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 106:
                    entity = undefined;
                    return entity;
                }
            };
            options = new Array(0);
            lima = context.bind(sizing)(config, options);
            context = sizing.useEffect;
            options = control.id;
            config = new Array(2);
            config[0] = options;
            options = control.guild_id;
            config[1] = options;
            options = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.track;
                mike = _closure1_slot9;
                zulu = mike.CHAT_INPUT_COMPONENT_VIEWED;
                mike = {};
                oscar = _closure1_slot13;
                oscar = oscar.STICKER;
                mike['type'] = oscar;
                oscar = _closure2_slot0;
                golf = oscar.id;
                mike['channel_id'] = golf;
                oscar = oscar.guild_id;
                mike['guild_id'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            options = context.bind(sizing)(options, config);
            config = sizing.useCallback;
            options = new Array(3);
            options[0] = control;
            options[1] = golf;
            options[2] = report;
            golf = function(argFoo) {
                _fun84917: for(var _fun84917_ip = 0; ; ) switch(_fun84917_ip) {
 0:
                    zulu = argFoo;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    options = 19;
                    mike = tango[options];
                    entity = undefined;
                    yankee = oscar.bind(entity)(mike);
                    offset = yankee.getStickerSendability;
                    report = _closure1_slot7;
                    mike = report.getCurrentUser;
                    verify = mike.bind(report)();
                    report = _closure2_slot0;
                    report = offset.bind(yankee)(zulu, verify, report);
                    tango = tango[options];
                    tango = oscar.bind(entity)(tango);
                    tango = tango.StickerSendability;
                    tango = tango.SENDABLE;
                    if(!(report !== tango)) { _fun84917_ip = 465; continue _fun84917 }
 89:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[options];
                    tango = oscar.bind(entity)(tango);
                    tango = tango.StickerSendability;
                    tango = tango.SENDABLE_WITH_PREMIUM;
                    if(!(report === tango)) { _fun84917_ip = 474; continue _fun84917 }
 125:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    oscar = 20;
                    tango = tango[oscar];
                    report = report.bind(entity)(tango);
                    tango = report.isStandardSticker;
                    tango = tango.bind(report)(zulu);
                    if(tango) { _fun84917_ip = 321; continue _fun84917 }
 162:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    report = report.bind(entity)(tango);
                    tango = report.isGuildSticker;
                    tango = tango.bind(report)(zulu);
                    if(!tango) { _fun84917_ip = 474; continue _fun84917 }
 196:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 22;
                    tango = oscar[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.handleShowUpsellAlert;
                    tango = {};
                    options = _closure1_slot12;
                    options = options.GLOBAL_STICKER;
                    tango['initialUpsellKey'] = options;
                    options = {};
                    verify = _closure2_slot0;
                    offset = verify.guild_id;
                    verify = null;
                    if(!(verify == offset)) { _fun84917_ip = 268; continue _fun84917 }
 256:
                    verify = _closure1_slot10;
                    verify = verify.DM_CHANNEL;
                    _fun84917_ip = 278; continue _fun84917;
 268:
                    offset = _closure1_slot10;
                    verify = offset.GUILD_CHANNEL;
 278:
                    options['page'] = verify;
                    verify = _closure1_slot11;
                    verify = verify.STICKER_PICKER_UPSELL;
                    options['section'] = verify;
                    tango['analyticsLocation'] = options;
                    options = _closure2_slot3;
                    tango['analyticsLocations'] = options;
                    tango = report.bind(oscar)(tango);
                    _fun84917_ip = 474; continue _fun84917;
 321:
                    oscar = _closure1_slot8;
                    report = oscar.getStickerPack;
                    tango = zulu.pack_id;
                    oscar = report.bind(oscar)(tango);
                    yankee = null;
                    if(!(yankee != oscar)) { _fun84917_ip = 463; continue _fun84917 }
 348:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    verify = 21;
                    tango = tango[verify];
                    report = report.bind(entity)(tango);
                    tango = {};
                    options = {};
                    offset = _closure2_slot0;
                    offset = offset.guild_id;
                    if(!(yankee == offset)) { _fun84917_ip = 397; continue _fun84917 }
 385:
                    offset = _closure1_slot10;
                    offset = offset.DM_CHANNEL;
                    _fun84917_ip = 407; continue _fun84917;
 397:
                    yankee = _closure1_slot10;
                    offset = yankee.GUILD_CHANNEL;
 407:
                    options['page'] = offset;
                    tango['analyticsLocation'] = options;
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    golf = golf[verify];
                    golf = options.bind(entity)(golf);
                    golf = golf.AnalyticsPopoutType;
                    golf = golf.STICKER_PACK_DETAIL;
                    tango['analyticsPopoutType'] = golf;
                    tango['stickerPack'] = oscar;
                    tango = report.bind(entity)(tango);
                    _fun84917_ip = 474; continue _fun84917;
 463:
                    return entity;
 465:
                    mike = _closure2_slot1;
                    mike = mike.bind(entity)(zulu);
 474:
                    return entity;
                }
            };
            config = config.bind(sizing)(golf, options);
            options = sizing.useCallback;
            golf = new Array(1);
            golf[0] = control;
            zulu = function() {
                oscar = _closure2_slot0;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.track;
                mike = _closure1_slot9;
                zulu = mike.CHAT_INPUT_COMPONENT_VIEWED;
                mike = {};
                golf = _closure1_slot13;
                golf = golf.STICKER_SEARCH;
                mike['type'] = golf;
                golf = oscar.id;
                mike['channel_id'] = golf;
                oscar = oscar.guild_id;
                mike['guild_id'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            sierra = options.bind(sizing)(zulu, golf);
            zulu = _closure1_slot14;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golf = _closure1_slot15;
            oscar = _closure1_slot5;
            report = {};
            options = result.container;
            report['style'] = options;
            options = backup.length;
            if(!(kilo !== options)) { _fun84912_ip = 633; continue _fun84912 }
 495:
            context = _closure1_slot14;
            sizing = _closure1_slot5;
            options = {};
            papa = result.header;
            options['style'] = papa;
            variable36 = _closure1_slot0;
            variable37 = _closure1_slot2;
            papa = 23;
            papa = variable37[papa];
            papa = variable36.bind(tango)(papa);
            target = papa.SearchField;
            papa = {};
            whiskey = 'md';
            papa['size'] = whiskey;
            whiskey = 24;
            equality = variable37[whiskey];
            equality = variable36.bind(tango)(equality);
            quebec = equality.intl;
            equality = quebec.string;
            whiskey = variable37[whiskey];
            whiskey = variable36.bind(tango)(whiskey);
            whiskey = whiskey.t;
            whiskey = whiskey.dt5h1N;
            whiskey = equality.bind(quebec)(whiskey);
            papa['placeholder'] = whiskey;
            papa['onChange'] = lima;
            papa['onFocus'] = sierra;
            papa['isRound'] = status;
            papa = context.bind(tango)(target, papa);
            options['children'] = papa;
            yankee = context.bind(tango)(sizing, options);
 633:
            options = new Array(3);
            options[0] = yankee;
            if(offset) { _fun84912_ip = 687; continue _fun84912 }
 644:
            sizing = _closure1_slot14;
            yankee = _closure1_slot6;
            offset = {'animating': true, 'size': 'large'};
            context = result.loadingIndicator;
            offset['style'] = context;
            offset = sizing.bind(tango)(yankee, offset);
            _fun84912_ip = 835; continue _fun84912;
 687:
            yankee = backup.length;
            if(!(kilo !== yankee)) { _fun84912_ip = 774; continue _fun84912 }
 696:
            sizing = _closure1_slot14;
            kilo = _closure1_slot1;
            context = _closure1_slot2;
            yankee = 26;
            yankee = context[yankee];
            kilo = kilo.bind(tango)(yankee);
            yankee = {};
            yankee['setCategoryIndex'] = record;
            yankee['onPressSticker'] = config;
            yankee['insetBottom'] = sequence;
            yankee['insetTop'] = vacuum;
            yankee['channel'] = control;
            yankee['stickerFormats'] = source;
            yankee['searchResults'] = update;
            yankee['inActionSheet'] = echo;
            yankee['inPortalKeyboard'] = output;
            yankee = sizing.bind(tango)(kilo, yankee);
            _fun84912_ip = 832; continue _fun84912;
 774:
            output = _closure1_slot14;
            sizing = _closure1_slot5;
            kilo = {};
            result = result.emptyState;
            kilo['style'] = result;
            echo = _closure1_slot1;
            update = _closure1_slot2;
            result = 25;
            result = update[result];
            echo = echo.bind(tango)(result);
            result = {};
            result = output.bind(tango)(echo, result);
            kilo['children'] = result;
            yankee = output.bind(tango)(sizing, kilo);
 832:
            offset = yankee;
 835:
            options[1] = offset;
            yankee = _closure1_slot14;
            offset = _closure1_slot1;
            kilo = _closure1_slot2;
            verify = 27;
            verify = kilo[verify];
            offset = offset.bind(tango)(verify);
            verify = {};
            verify['categories'] = backup;
            verify['categoryIndex'] = foxtrot;
            verify['style'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            options[2] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 28;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stickers/native/StickerPicker.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();