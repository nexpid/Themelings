// app/modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    kilo = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = kilo;
    var _closure1_slot2 = verify;
    report = function(argFoo) { // Original name: useEmojiPickerPremiumSearchUpsellViewed
        mike = argFoo;
        golf = mike.guildId;
        var _closure2_slot0 = golf;
        options = mike.analyticsLocations;
        var _closure2_slot1 = options;
        oscar = mike.useTier0UpsellContent;
        var _closure2_slot2 = oscar;
        report = _closure1_slot3;
        tango = report.useRef;
        zulu = false;
        report = tango.bind(report)(zulu);
        var _closure2_slot3 = report;
        tango = _closure1_slot3;
        zulu = tango.useEffect;
        mike = new Array(4);
        mike[0] = options;
        mike[1] = golf;
        mike[2] = oscar;
        mike[3] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot3;
                entity = entity.current;
                if(entity) { _fun00002_ip = 188; continue _fun00001 }
 18:
                mike = _closure2_slot3;
                entity = true;
                mike['current'] = entity;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.track;
                entity = _closure1_slot6;
                mike = entity.PREMIUM_UPSELL_VIEWED;
                entity = {};
                golf = _closure1_slot10;
                golf = golf.EMOJI_PICKER_SEARCH;
                entity['type'] = golf;
                golf = {};
                verify = _closure2_slot0;
                options = null;
                if(!(options == verify)) { _fun00002_ip = 110; continue _fun00001 }
 98:
                options = _closure1_slot7;
                options = options.DM_CHANNEL;
                _fun00002_ip = 120; continue _fun00001;
 110:
                verify = _closure1_slot7;
                options = verify.GUILD_CHANNEL;
 120:
                golf['page'] = options;
                options = _closure1_slot8;
                options = options.EMOJI_PICKER_POPOUT;
                golf['section'] = options;
                entity['location'] = golf;
                golf = _closure2_slot1;
                entity['location_stack'] = golf;
                report = _closure2_slot2;
                oscar = _closure1_slot9;
                if(report) { _fun00002_ip = 171; continue _fun00001 }
 163:
                report = oscar.TIER_2;
                _fun00002_ip = 177; continue _fun00001;
 171:
                report = oscar.TIER_0;
 177:
                entity['sku_id'] = report;
                entity = zulu.bind(tango)(mike, entity);
 188:
                entity = undefined;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        entity = undefined;
        return entity;
    };
    var _closure1_slot15 = report;
    tango = function(argFoo) { // Original name: useEmojiPickerPremiumSearchUpsellClick
        mike = argFoo;
        oscar = mike.analyticsLocations;
        var _closure2_slot0 = oscar;
        report = mike.useTier0UpsellContent;
        var _closure2_slot1 = report;
        tango = _closure1_slot3;
        zulu = tango.useCallback;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = _closure1_slot5;
                entity = mike.getCurrentUser;
                tango = entity.bind(mike)();
                entity = null;
                entity = entity == tango;
                if(entity) { _fun00004_ip = 58; continue _fun00003 }
 25:
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                mike = zulu.canUseEmojisEverywhere;
                entity = mike.bind(zulu)(tango);
 58:
                if(entity) { _fun00004_ip = 220; continue _fun00003 }
 64:
                zulu = _closure1_slot1;
                entity = _closure1_slot2;
                mike = 10;
                mike = entity[mike];
                options = undefined;
                tango = zulu.bind(options)(mike);
                mike = tango.hideActionSheet;
                mike = mike.bind(tango)();
                mike = 11;
                mike = entity[mike];
                tango = zulu.bind(options)(mike);
                zulu = tango.pushLazy;
                report = _closure1_slot0;
                mike = 13;
                mike = entity[mike];
                report = report.bind(options)(mike);
                mike = 12;
                mike = entity[mike];
                entity = entity.paths;
                mike = report.bind(options)(mike, entity);
                entity = {};
                golf = _closure2_slot0;
                entity['analyticsLocations'] = golf;
                report = _closure2_slot1;
                golf = _closure1_slot0;
                verify = _closure1_slot2;
                oscar = 14;
                oscar = verify[oscar];
                oscar = golf.bind(options)(oscar);
                oscar = oscar.PremiumFeatureCardOrder;
                if(report) { _fun00004_ip = 203; continue _fun00003 }
 195:
                report = oscar.TIER_2_LEADING;
                _fun00004_ip = 209; continue _fun00003;
 203:
                report = oscar.TIER_0_LEADING;
 209:
                entity['premiumFeatureCardOrder'] = report;
                entity = zulu.bind(tango)(mike, entity);
 220:
                entity = undefined;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = tango;
    entity = global;
    offset = entity.Object;
    golf = offset.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(offset)(zulu, entity, oscar);
    entity = 0;
    golf = verify[entity];
    oscar = argCorge;
    entity = undefined;
    offset = oscar.bind(entity)(golf);
    var _closure1_slot3 = offset;
    oscar = 1;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.View;
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = verify[oscar];
    oscar = kilo.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    golf = oscar.AnalyticEvents;
    var _closure1_slot6 = golf;
    golf = oscar.AnalyticsPages;
    var _closure1_slot7 = golf;
    oscar = oscar.AnalyticsSections;
    var _closure1_slot8 = oscar;
    oscar = 4;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    golf = oscar.PremiumSubscriptionSKUs;
    var _closure1_slot9 = golf;
    golf = oscar.PremiumUpsellTypes;
    var _closure1_slot10 = golf;
    oscar = oscar.SubscriptionPlans;
    var _closure1_slot11 = oscar;
    oscar = 5;
    golf = verify[oscar];
    golf = options.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot12 = golf;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.jsxs;
    var _closure1_slot13 = oscar;
    oscar = 6;
    oscar = verify[oscar];
    romeo = options.bind(entity)(oscar);
    yankee = romeo.createStyles;
    golf = {};
    oscar = {};
    backup = 7;
    foxtrot = verify[backup];
    foxtrot = kilo.bind(entity)(foxtrot);
    foxtrot = foxtrot.spacing;
    foxtrot = foxtrot.PX_8;
    oscar['paddingTop'] = foxtrot;
    golf['container'] = oscar;
    foxtrot = {'height': 56, 'padding': null, 'borderRadius': null, 'backgroundColor': null, 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'alignContent': 'center'};
    oscar = 56;
    sizing = verify[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.spacing;
    sizing = sizing.PX_8;
    foxtrot['padding'] = sizing;
    sizing = verify[backup];
    sizing = kilo.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.xs;
    foxtrot['borderRadius'] = sizing;
    backup = verify[backup];
    backup = kilo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_TERTIARY;
    foxtrot['backgroundColor'] = backup;
    golf['premiumSearchUpsell'] = foxtrot;
    foxtrot = {'flex': 0.8, 'flexDirection': 'row'};
    golf['premiumSearchUpsellContent'] = foxtrot;
    foxtrot = {'marginRight': 8, 'alignSelf': 'center'};
    golf['nitroIcon'] = foxtrot;
    golf = yankee.bind(romeo)(golf);
    var _closure1_slot14 = golf;
    golf = offset.memo;
    mike = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            yankee = argFoo;
            mike = _closure1_slot14;
            tango = undefined;
            oscar = mike.bind(tango)();
            mike = _closure1_slot16;
            golf = mike.bind(tango)(yankee);
            mike = _closure1_slot15;
            mike = mike.bind(tango)(yankee);
            report = _closure1_slot13;
            zulu = _closure1_slot4;
            mike = {};
            options = oscar.premiumSearchUpsellContent;
            mike['style'] = options;
            foxtrot = _closure1_slot12;
            backup = _closure1_slot1;
            verify = _closure1_slot2;
            romeo = 15;
            options = verify[romeo];
            offset = backup.bind(tango)(options);
            options = {};
            kilo = oscar.nitroIcon;
            options['style'] = kilo;
            kilo = 16;
            kilo = verify[kilo];
            kilo = backup.bind(tango)(kilo);
            options['source'] = kilo;
            kilo = true;
            options['disableColor'] = kilo;
            romeo = verify[romeo];
            romeo = backup.bind(tango)(romeo);
            romeo = romeo.Sizes;
            romeo = romeo.MEDIUM;
            options['size'] = romeo;
            offset = foxtrot.bind(tango)(offset, options);
            options = new Array(2);
            options[0] = offset;
            offset = _closure1_slot0;
            romeo = 17;
            verify = verify[romeo];
            verify = offset.bind(tango)(verify);
            offset = verify.Text;
            verify = {'lineClamp': 2, 'variant': 'text-sm/medium', 'color': 'interactive-active'};
            backup = yankee.useTier0UpsellContent;
            source = _closure1_slot0;
            control = _closure1_slot2;
            sizing = 18;
            kilo = control[sizing];
            kilo = source.bind(tango)(kilo);
            echo = kilo.intl;
            if(backup) { _fun00006_ip = 253; continue _fun00005 }
 221:
            kilo = echo.string;
            backup = control[sizing];
            backup = source.bind(tango)(backup);
            backup = backup.t;
            backup = backup.5t3lw8;
            backup = kilo.bind(echo)(backup);
            _fun00006_ip = 324; continue _fun00005;
 253:
            result = echo.formatToPlainString;
            kilo = control[sizing];
            kilo = source.bind(tango)(kilo);
            kilo = kilo.t;
            output = kilo.kWBwlJ;
            kilo = {};
            update = 9;
            update = control[update];
            control = source.bind(tango)(update);
            source = control.getTierDisplayName;
            update = _closure1_slot11;
            update = update.PREMIUM_MONTH_TIER_0;
            update = source.bind(control)(update);
            kilo['planName'] = update;
            backup = result.bind(echo)(output, kilo);
 324:
            verify['children'] = backup;
            verify = foxtrot.bind(tango)(offset, verify);
            options[1] = verify;
            mike['children'] = options;
            offset = report.bind(tango)(zulu, mike);
            report = _closure1_slot13;
            verify = _closure1_slot0;
            options = _closure1_slot2;
            mike = 19;
            mike = options[mike];
            mike = verify.bind(tango)(mike);
            zulu = mike.PressableOpacity;
            mike = {};
            foxtrot = oscar.premiumSearchUpsell;
            mike['style'] = foxtrot;
            foxtrot = 'button';
            mike['accessibilityRole'] = foxtrot;
            mike['onPress'] = golf;
            golf = new Array(2);
            golf[0] = offset;
            offset = _closure1_slot12;
            options = options[romeo];
            options = verify.bind(tango)(options);
            verify = options.Text;
            options = {'variant': 'text-sm/medium', 'color': 'text-link'};
            yankee = yankee.useTier0UpsellContent;
            kilo = _closure1_slot0;
            romeo = _closure1_slot2;
            foxtrot = romeo[sizing];
            foxtrot = kilo.bind(tango)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            romeo = romeo[sizing];
            romeo = kilo.bind(tango)(romeo);
            romeo = romeo.t;
            if(yankee) { _fun00006_ip = 505; continue _fun00005 }
 492:
            yankee = romeo.pj0XBA;
            yankee = foxtrot.bind(backup)(yankee);
            _fun00006_ip = 516; continue _fun00005;
 505:
            romeo = romeo.9CM5v7;
            yankee = foxtrot.bind(backup)(romeo);
 516:
            options['children'] = yankee;
            options = offset.bind(tango)(verify, options);
            golf[1] = options;
            mike['children'] = golf;
            report = report.bind(tango)(zulu, mike);
            zulu = _closure1_slot12;
            mike = _closure1_slot4;
            entity = {};
            oscar = oscar.container;
            entity['style'] = oscar;
            oscar = false;
            entity['collapsable'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = golf.bind(offset)(mike);
    golf = 20;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx';
    golf = options.bind(verify)(golf);
    zulu['EMOJI_PICKER_PREMIUM_UPSELL_HEIGHT'] = oscar;
    zulu['useEmojiPickerPremiumSearchUpsellViewed'] = report;
    zulu['useEmojiPickerPremiumSearchUpsellClick'] = tango;
    zulu['PremiumSearchUpsell'] = mike;
    return entity;
})();