// app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: PendingCancellationWarning
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = entity.slot;
            entity = _closure1_slot20;
            report = undefined;
            offset = entity.bind(report)();
            mike = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 12;
            entity = tango[entity];
            verify = mike.bind(report)(entity);
            options = verify.useStateFromStores;
            entity = _closure1_slot12;
            oscar = new Array(1);
            oscar[0] = entity;
            entity = function() {
                mike = _closure1_slot12;
                entity = mike.getPremiumTypeSubscription;
                entity = entity.bind(mike)();
                return entity;
            };
            backup = options.bind(verify)(oscar, entity);
            entity = 13;
            entity = tango[entity];
            mike = mike.bind(report)(entity);
            entity = mike.isGuildBoostSlotCanceled;
            mike = entity.bind(mike)(zulu);
            zulu = null;
            entity = null;
            if(!mike) { _fun00002_ip = 339; continue _fun00001 }
 107:
            mike = zulu != backup;
            entity = null;
            if(!mike) { _fun00002_ip = 339; continue _fun00001 }
 119:
            tango = _closure1_slot18;
            zulu = _closure1_slot7;
            mike = {};
            oscar = offset.pendingCancellation;
            mike['style'] = oscar;
            verify = _closure1_slot17;
            options = _closure1_slot6;
            oscar = {};
            yankee = offset.pendingCancellationIcon;
            oscar['style'] = yankee;
            romeo = _closure1_slot1;
            kilo = _closure1_slot2;
            yankee = 14;
            yankee = kilo[yankee];
            yankee = romeo.bind(report)(yankee);
            oscar['source'] = yankee;
            options = verify.bind(report)(options, oscar);
            oscar = new Array(2);
            oscar[0] = options;
            verify = _closure1_slot17;
            yankee = _closure1_slot0;
            golf = 15;
            golf = kilo[golf];
            golf = yankee.bind(report)(golf);
            options = golf.Text;
            golf = {};
            offset = offset.pendingCancellationMessage;
            golf['style'] = offset;
            offset = 'text-sm/medium';
            golf['variant'] = offset;
            offset = 16;
            romeo = kilo[offset];
            romeo = yankee.bind(report)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.format;
            offset = kilo[offset];
            offset = yankee.bind(report)(offset);
            offset = offset.t;
            yankee = offset.SFpsCA;
            offset = {};
            backup = backup.currentPeriodEnd;
            offset['date'] = backup;
            backup = 1;
            offset['canceledCount'] = backup;
            offset = romeo.bind(foxtrot)(yankee, offset);
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 339:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: SubscribeConfirmation
        entity = argFoo;
        echo = entity.guild;
        verify = entity.isModifyingSubscription;
        result = entity.slot;
        entity = entity.onPremiumGuildSubscribe;
        var _closure2_slot0 = entity;
        entity = _closure1_slot20;
        tango = undefined;
        foxtrot = entity.bind(tango)();
        zulu = _closure1_slot18;
        mike = _closure1_slot19;
        entity = {};
        yankee = _closure1_slot17;
        options = _closure1_slot6;
        report = {};
        golf = foxtrot.subscribeImage;
        report['style'] = golf;
        golf = _closure1_slot1;
        sizing = _closure1_slot2;
        romeo = 17;
        romeo = sizing[romeo];
        romeo = golf.bind(tango)(romeo);
        report['source'] = romeo;
        options = yankee.bind(tango)(options, report);
        report = new Array(6);
        report[0] = options;
        output = _closure1_slot17;
        romeo = _closure1_slot0;
        options = 15;
        yankee = sizing[options];
        yankee = romeo.bind(tango)(yankee);
        kilo = yankee.Text;
        backup = {'style': null, 'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
        yankee = foxtrot.header;
        backup['style'] = yankee;
        yankee = 16;
        update = sizing[yankee];
        update = romeo.bind(tango)(update);
        control = update.intl;
        source = control.string;
        update = sizing[yankee];
        update = romeo.bind(tango)(update);
        update = update.t;
        update = update.yTlZV1;
        update = source.bind(control)(update);
        backup['children'] = update;
        backup = output.bind(tango)(kilo, backup);
        report[1] = backup;
        output = _closure1_slot17;
        backup = 18;
        backup = sizing[backup];
        kilo = golf.bind(tango)(backup);
        backup = {};
        update = foxtrot.guildPreview;
        backup['style'] = update;
        backup['guild'] = echo;
        backup = output.bind(tango)(kilo, backup);
        report[2] = backup;
        output = _closure1_slot17;
        options = sizing[options];
        options = romeo.bind(tango)(options);
        backup = options.Text;
        options = {};
        echo = foxtrot.blurb;
        kilo = new Array(2);
        kilo[0] = echo;
        echo = foxtrot.warning;
        kilo[1] = echo;
        options['style'] = kilo;
        kilo = 'text-sm/medium';
        options['variant'] = kilo;
        kilo = sizing[yankee];
        kilo = romeo.bind(tango)(kilo);
        control = kilo.intl;
        source = control.format;
        kilo = sizing[yankee];
        kilo = romeo.bind(tango)(kilo);
        kilo = kilo.t;
        update = kilo.KPnDlp;
        echo = {};
        kilo = _closure1_slot16;
        echo['days'] = kilo;
        kilo = 1;
        echo['slotCount'] = kilo;
        echo = source.bind(control)(update, echo);
        options['children'] = echo;
        options = output.bind(tango)(backup, options);
        report[3] = options;
        output = _closure1_slot17;
        backup = _closure1_slot21;
        options = {};
        options['slot'] = result;
        options = output.bind(tango)(backup, options);
        report[4] = options;
        options = _closure1_slot17;
        oscar = 19;
        oscar = sizing[oscar];
        golf = golf.bind(tango)(oscar);
        oscar = {};
        foxtrot = foxtrot.confirmButton;
        oscar['style'] = foxtrot;
        foxtrot = sizing[yankee];
        foxtrot = romeo.bind(tango)(foxtrot);
        backup = foxtrot.intl;
        foxtrot = backup.formatToPlainString;
        yankee = sizing[yankee];
        yankee = romeo.bind(tango)(yankee);
        yankee = yankee.t;
        romeo = yankee.ZU5x5+;
        yankee = {};
        yankee['slotCount'] = kilo;
        yankee = foxtrot.bind(backup)(romeo, yankee);
        oscar['text'] = yankee;
        offset = function() { // Original name: onPress
            zulu = _closure2_slot0;
            entity = undefined;
            mike = false;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        oscar['onPress'] = offset;
        oscar['loading'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[5] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: TransferConfirmation
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            record = entity.guild;
            yankee = entity.isModifyingSubscription;
            sizing = entity.previousGuildSubscriptionSlot;
            var _closure2_slot0 = sizing;
            entity = entity.onPremiumGuildSubscribe;
            var _closure2_slot1 = entity;
            entity = _closure1_slot20;
            report = undefined;
            oscar = entity.bind(report)();
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 20;
            entity = tango[entity];
            golf = zulu.bind(report)(entity);
            entity = golf.useGuildSubscriptionRemovalSource;
            offset = entity.bind(golf)();
            entity = 12;
            entity = tango[entity];
            golf = zulu.bind(report)(entity);
            tango = golf.useStateFromStores;
            entity = _closure1_slot10;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot0;
                    zulu = entity.premiumGuildSubscription;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00006_ip = 54; continue _fun00005 }
 22:
                    tango = _closure1_slot10;
                    zulu = tango.getGuild;
                    mike = _closure2_slot0;
                    mike = mike.premiumGuildSubscription;
                    mike = mike.guildId;
                    entity = zulu.bind(tango)(mike);
 54:
                    return entity;
                }
            };
            config = tango.bind(golf)(zulu, entity);
            entity = null;
            if(!(entity != config)) { _fun00004_ip = 1027; continue _fun00003 }
 130:
            tango = _closure1_slot18;
            zulu = _closure1_slot19;
            entity = {};
            verify = _closure1_slot17;
            options = _closure1_slot6;
            golf = {};
            foxtrot = oscar.transferImage;
            golf['style'] = foxtrot;
            golf['source'] = offset;
            options = verify.bind(report)(options, golf);
            golf = new Array(6);
            golf[0] = options;
            offset = _closure1_slot17;
            backup = _closure1_slot0;
            result = _closure1_slot2;
            update = 15;
            options = result[update];
            options = backup.bind(report)(options);
            verify = options.Text;
            options = {'style': null, 'variant': 'heading-lg/extrabold', 'color': 'header-primary'};
            foxtrot = oscar.header;
            options['style'] = foxtrot;
            foxtrot = 16;
            kilo = result[foxtrot];
            kilo = backup.bind(report)(kilo);
            echo = kilo.intl;
            output = echo.string;
            kilo = result[foxtrot];
            kilo = backup.bind(report)(kilo);
            kilo = kilo.t;
            kilo = kilo.h92jfX;
            kilo = output.bind(echo)(kilo);
            options['children'] = kilo;
            options = offset.bind(report)(verify, options);
            golf[1] = options;
            offset = _closure1_slot17;
            options = result[update];
            options = backup.bind(report)(options);
            verify = options.Text;
            options = {};
            kilo = oscar.blurb;
            options['style'] = kilo;
            kilo = 'text-sm/medium';
            options['variant'] = kilo;
            kilo = result[foxtrot];
            kilo = backup.bind(report)(kilo);
            control = kilo.intl;
            source = control.format;
            kilo = result[foxtrot];
            kilo = backup.bind(report)(kilo);
            kilo = kilo.t;
            echo = kilo.SSA2lp;
            output = 1;
            kilo = {'slotCount': 1, 'guildCount': 1};
            kilo = source.bind(control)(echo, kilo);
            options['children'] = kilo;
            options = offset.bind(report)(verify, options);
            golf[2] = options;
            kilo = _closure1_slot18;
            offset = _closure1_slot7;
            options = {};
            verify = oscar.transferPreviews;
            options['style'] = verify;
            source = _closure1_slot17;
            verify = result[update];
            verify = backup.bind(report)(verify);
            echo = verify.Text;
            verify = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
            control = oscar.previewHeader;
            verify['style'] = control;
            control = result[foxtrot];
            control = backup.bind(report)(control);
            context = control.intl;
            sequence = context.format;
            control = result[foxtrot];
            control = backup.bind(report)(control);
            control = control.t;
            vacuum = control.5zQYEx;
            control = {};
            control['guildCount'] = output;
            control = sequence.bind(context)(vacuum, control);
            verify['children'] = control;
            verify = source.bind(report)(echo, verify);
            echo = new Array(4);
            echo[0] = verify;
            sequence = _closure1_slot17;
            verify = _closure1_slot1;
            vacuum = 18;
            source = result[vacuum];
            control = verify.bind(report)(source);
            source = {};
            context = oscar.guildPreview;
            source['style'] = context;
            source['guild'] = config;
            source = sequence.bind(report)(control, source);
            echo[1] = source;
            control = _closure1_slot17;
            update = result[update];
            update = backup.bind(report)(update);
            source = update.Text;
            update = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
            sequence = oscar.previewHeader;
            update['style'] = sequence;
            sequence = result[foxtrot];
            sequence = backup.bind(report)(sequence);
            papa = sequence.intl;
            context = papa.format;
            sequence = result[foxtrot];
            sequence = backup.bind(report)(sequence);
            sequence = sequence.t;
            config = sequence.ct6oxM;
            sequence = {};
            sequence['slotCount'] = output;
            sequence = context.bind(papa)(config, sequence);
            update['children'] = sequence;
            update = control.bind(report)(source, update);
            echo[2] = update;
            control = _closure1_slot17;
            update = 21;
            update = result[update];
            source = verify.bind(report)(update);
            update = {};
            config = oscar.guildPreview;
            sequence = new Array(2);
            sequence[0] = config;
            config = oscar.activeTransferGuildCardBorder;
            sequence[1] = config;
            update['style'] = sequence;
            sequence = 22;
            config = result[sequence];
            config = backup.bind(report)(config);
            config = config.HorizontalGradient;
            config = config.START;
            update['start'] = config;
            config = result[sequence];
            config = backup.bind(report)(config);
            config = config.HorizontalGradient;
            config = config.END;
            update['end'] = config;
            sequence = result[sequence];
            sequence = backup.bind(report)(sequence);
            sequence = sequence.Gradients;
            sequence = sequence.PREMIUM_GUILD;
            update['colors'] = sequence;
            config = _closure1_slot17;
            vacuum = result[vacuum];
            sequence = verify.bind(report)(vacuum);
            vacuum = {};
            vacuum['guild'] = record;
            vacuum = config.bind(report)(sequence, vacuum);
            update['children'] = vacuum;
            update = control.bind(report)(source, update);
            echo[3] = update;
            options['children'] = echo;
            options = kilo.bind(report)(offset, options);
            golf[3] = options;
            kilo = _closure1_slot17;
            offset = _closure1_slot21;
            options = {};
            options['slot'] = sizing;
            options = kilo.bind(report)(offset, options);
            golf[4] = options;
            offset = _closure1_slot17;
            options = 19;
            options = result[options];
            verify = verify.bind(report)(options);
            options = {};
            kilo = oscar.confirmButton;
            options['style'] = kilo;
            kilo = result[foxtrot];
            kilo = backup.bind(report)(kilo);
            sizing = kilo.intl;
            kilo = sizing.formatToPlainString;
            foxtrot = result[foxtrot];
            foxtrot = backup.bind(report)(foxtrot);
            foxtrot = foxtrot.t;
            backup = foxtrot.Oh6mxc;
            foxtrot = {};
            foxtrot['slotCount'] = output;
            foxtrot = kilo.bind(sizing)(backup, foxtrot);
            options['text'] = foxtrot;
            romeo = function() { // Original name: onPress
                zulu = _closure2_slot1;
                mike = undefined;
                entity = true;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            options['onPress'] = romeo;
            options['loading'] = yankee;
            options = offset.bind(report)(verify, options);
            golf[5] = options;
            entity['children'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun00004_ip = 1053; continue _fun00003;
 1027:
            tango = _closure1_slot17;
            zulu = _closure1_slot5;
            mike = {};
            oscar = oscar.loading;
            mike['style'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1053:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
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
    romeo = 2;
    tango = oscar[romeo];
    tango = report.bind(entity)(tango);
    golf = tango.ActivityIndicator;
    var _closure1_slot5 = golf;
    golf = tango.Image;
    var _closure1_slot6 = golf;
    kilo = tango.StyleSheet;
    golf = tango.View;
    var _closure1_slot7 = golf;
    tango = tango.ScrollView;
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
    golf = tango.AnalyticEvents;
    var _closure1_slot13 = golf;
    golf = tango.AnalyticsObjects;
    var _closure1_slot14 = golf;
    golf = tango.AnalyticsSections;
    var _closure1_slot15 = golf;
    tango = tango.GUILD_BOOST_APPLY_COOLDOWN_DAYS;
    var _closure1_slot16 = tango;
    tango = 8;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot17 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot18 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot19 = tango;
    tango = 9;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'paddingHorizontal': 24, 'marginBottom': 24};
    tango['content'] = verify;
    backup = '100%';
    verify = {'alignItems': 'center', 'width': '100%'};
    tango['scrollableContent'] = verify;
    verify = {'marginTop': 105, 'alignSelf': 'center'};
    tango['subscribeImage'] = verify;
    verify = {'marginTop': 65, 'alignSelf': 'center'};
    tango['transferImage'] = verify;
    foxtrot = 32;
    verify = {'marginTop': 32, 'marginBottom': 8};
    tango['header'] = verify;
    offset = 16;
    verify = {'marginTop': 16, 'width': '100%'};
    tango['transferPreviews'] = verify;
    verify = {'lineHeight': 16, 'marginTop': 16, 'letterSpacing': 0.2};
    tango['previewHeader'] = verify;
    verify = {'marginTop': 8, 'width': '100%'};
    tango['guildPreview'] = verify;
    verify = {'lineHeight': 18, 'textAlign': 'center'};
    tango['blurb'] = verify;
    verify = {};
    verify['marginTop'] = offset;
    tango['warning'] = verify;
    verify = {'marginTop': 16, 'padding': 16, 'backgroundColor': null, 'alignItems': 'center', 'flexDirection': 'row'};
    offset = 10;
    offset = oscar[offset];
    echo = report.bind(entity)(offset);
    result = echo.hexWithOpacity;
    offset = 11;
    sizing = oscar[offset];
    sizing = yankee.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    output = sizing.YELLOW_300;
    sizing = 0.1;
    sizing = result.bind(echo)(output, sizing);
    verify['backgroundColor'] = sizing;
    sizing = oscar[offset];
    sizing = yankee.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.xs;
    verify['borderRadius'] = sizing;
    sizing = oscar[offset];
    sizing = yankee.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    sizing = sizing.YELLOW_300;
    verify['borderColor'] = sizing;
    kilo = kilo.hairlineWidth;
    verify['borderWidth'] = kilo;
    verify['width'] = backup;
    tango['pendingCancellation'] = verify;
    verify = {'marginLeft': 10, 'flexShrink': 1};
    tango['pendingCancellationMessage'] = verify;
    verify = {'flexShrink': 0, 'width': 20, 'height': 20};
    tango['pendingCancellationIcon'] = verify;
    verify = {};
    verify['marginTop'] = foxtrot;
    tango['loading'] = verify;
    verify = {};
    verify['marginTop'] = foxtrot;
    tango['confirmButton'] = verify;
    verify = {};
    verify['padding'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.xs;
    verify['borderRadius'] = offset;
    tango['activeTransferGuildCardBorder'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot20 = tango;
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'components_native/premium/premium_guild_subscribe_modal/SubscribeModalConfirmation.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: SubscribeModalConfirmation
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            zulu = mike.guildId;
            var _closure2_slot0 = zulu;
            offset = mike.previousGuildSubscriptionSlot;
            var _closure2_slot1 = offset;
            zulu = mike.location;
            var _closure2_slot2 = zulu;
            tango = _closure1_slot20;
            report = undefined;
            oscar = tango.bind(report)();
            options = _closure1_slot4;
            tango = options.useRef;
            tango = tango.bind(options)(zulu);
            var _closure2_slot3 = tango;
            golf = options.useEffect;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                mike = _closure2_slot3;
                entity = _closure2_slot2;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            zulu = golf.bind(options)(zulu, tango);
            golf = options.useEffect;
            tango = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 23;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.track;
                mike = _closure1_slot13;
                zulu = mike.OPEN_MODAL;
                mike = {};
                oscar = _closure1_slot15;
                oscar = oscar.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL;
                mike['type'] = oscar;
                oscar = _closure2_slot3;
                oscar = oscar.current;
                mike['location'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            zulu = new Array(0);
            zulu = golf.bind(options)(tango, zulu);
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 24;
            zulu = golf[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.bind(report)();
            tango = _closure1_slot0;
            zulu = 12;
            options = golf[zulu];
            romeo = tango.bind(report)(options);
            yankee = romeo.useStateFromStores;
            options = _closure1_slot10;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                zulu = _closure1_slot10;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sizing = yankee.bind(romeo)(verify, options);
            var _closure2_slot4 = sizing;
            options = golf[zulu];
            romeo = tango.bind(report)(options);
            yankee = romeo.useStateFromStores;
            options = _closure1_slot9;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                entity = _closure1_slot9;
                entity = entity.isModifyingAppliedBoost;
                return entity;
            };
            foxtrot = yankee.bind(romeo)(verify, options);
            zulu = golf[zulu];
            options = tango.bind(report)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot11;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tango = _closure2_slot1;
                    mike = null;
                    if(!(mike == tango)) { _fun00010_ip = 122; continue _fun00009 }
 15:
                    tango = _closure1_slot11;
                    tango = tango.hasFetched;
                    if(tango) { _fun00010_ip = 37; continue _fun00009 }
 31:
                    tango = new Array(0);
                    _fun00010_ip = 100; continue _fun00009;
 37:
                    oscar = global;
                    golf = oscar.Object;
                    oscar = golf.values;
                    report = _closure1_slot11;
                    report = report.boostSlots;
                    golf = oscar.bind(golf)(report);
                    oscar = golf.filter;
                    report = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            mike = argFoo;
                            entity = mike.isOnCooldown;
                            entity = entity.bind(mike)();
                            entity = !entity;
                            if(!entity) { _fun00012_ip = 31; continue _fun00011 }
 19:
                            zulu = mike.premiumGuildSubscription;
                            mike = null;
                            entity = mike == zulu;
 31:
                            return entity;
                        }
                    };
                    oscar = oscar.bind(golf)(report);
                    report = oscar.sort;
                    zulu = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 13;
                            mike = mike[entity];
                            entity = undefined;
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.isGuildBoostSlotCanceled;
                            entity = argFoo;
                            mike = mike.bind(zulu)(entity);
                            entity = -1;
                            if(!mike) { _fun00014_ip = 51; continue _fun00013 }
 48:
                            entity = 1;
 51:
                            return entity;
                        }
                    };
                    tango = report.bind(oscar)(zulu);
 100:
                    report = tango.length;
                    zulu = 0;
                    report = report > zulu;
                    mike = null;
                    if(!report) { _fun00010_ip = 120; continue _fun00009 }
 116:
                    mike = tango[zulu];
 120:
                    return mike;
 122:
                    entity = _closure2_slot1;
                    return entity;
                }
            };
            backup = golf.bind(options)(tango, zulu);
            var _closure2_slot5 = backup;
            entity = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00016_ip = 570; continue _fun00015 }
 10:
                            report = argFoo;
                            mike = undefined;
                            zulu = undefined;
                            golf = _closure1_slot1;
                            options = _closure1_slot2;
                            tango = 25;
                            tango = options[tango];
                            offset = golf.bind(mike)(tango);
                            verify = _closure2_slot5;
                            golf = null;
                            verify = golf != verify;
                            options = verify;
                            if(!verify) { _fun00016_ip = 145; continue _fun00015 }
 59:
                            verify = _closure2_slot5;
                            verify = verify.cooldownEndsAt;
                            verify = golf == verify;
                            if(verify) { _fun00016_ip = 142; continue _fun00015 }
 76:
                            yankee = global;
                            backup = yankee.Date;
                            romeo = _closure2_slot5;
                            sizing = romeo.cooldownEndsAt;
                            foxtrot = backup.prototype;
                            foxtrot = Object.create(foxtrot, {constructor: {value: backup}});
                            output = foxtrot;
                            romeo = new output[backup](sizing, kilo);
                            foxtrot = romeo instanceof Object ? romeo : foxtrot;
                            romeo = foxtrot.valueOf;
                            romeo = romeo.bind(foxtrot)();
                            foxtrot = yankee.Date;
                            yankee = foxtrot.now;
                            yankee = yankee.bind(foxtrot)();
                            verify = romeo < yankee;
 142:
                            options = verify;
 145:
                            verify = options;
                            options = 'Cannot use a premium guild subscription slot while on cooldown';
                            options = offset.bind(mike)(verify, options);
 160: // try_start_0
                            if(!report) { _fun00016_ip = 235; continue _fun00015 }
 163:
                            report = _closure2_slot5;
                            report = report.premiumGuildSubscription;
                            zulu = report;
                            if(!(golf != report)) { _fun00016_ip = 235; continue _fun00015 }
 180:
                            golf = _closure1_slot0;
                            options = _closure1_slot2;
                            report = 26;
                            report = options[report];
                            options = golf.bind(mike)(report);
                            golf = options.unapplyFromGuild;
                            report = zulu.guildId;
                            zulu = zulu.id;
                            zulu = golf.bind(options)(report, zulu);
                            SaveGenerator(address=226);
 224:
                            return zulu;
 226:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(report) { _fun00016_ip = 422; continue _fun00015 }
 235:
                            golf = _closure1_slot0;
                            options = _closure1_slot2;
                            report = 26;
                            report = options[report];
                            options = golf.bind(mike)(report);
                            golf = options.applyToGuild;
                            report = _closure2_slot4;
                            report = report.id;
                            tango = _closure2_slot5;
                            verify = tango.id;
                            tango = new Array(1);
                            tango[0] = verify;
                            tango = golf.bind(options)(report, tango);
                            SaveGenerator(address=297);
 295:
                            return tango;
 297:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(report) { _fun00016_ip = 419; continue _fun00015 }
 303:
                            golf = _closure1_slot1;
                            options = _closure1_slot2;
                            report = 27;
                            report = options[report];
                            offset = golf.bind(mike)(report);
                            verify = offset.openLazy;
                            report = {};
                            yankee = function() { // Original name: importer
                                zulu = _closure1_slot0;
                                entity = _closure1_slot2;
                                mike = 29;
                                mike = entity[mike];
                                tango = undefined;
                                zulu = zulu.bind(tango)(mike);
                                mike = 28;
                                mike = entity[mike];
                                entity = entity.paths;
                                zulu = zulu.bind(tango)(mike, entity);
                                mike = zulu.then;
                                entity = function(argFoo) {
                                    mike = argFoo;
                                    mike = mike.default;
                                    var _closure7_slot0 = mike;
                                    entity = function(argFoo) {
                                        tango = _closure1_slot17;
                                        zulu = _closure7_slot0;
                                        mike = {};
                                        golf = argFoo;
                                        options = mike;
                                        entity = copyDataProperties(options, golf);
                                        oscar = _closure2_slot0;
                                        report = 'guildId';
                                        mike[report] = oscar;
                                        report = _closure2_slot1;
                                        entity = 'previousGuildSubscriptionSlot';
                                        mike[entity] = report;
                                        entity = undefined;
                                        entity = tango.bind(entity)(zulu, mike);
                                        return entity;
                                    };
                                    return entity;
                                };
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            };
                            report['importer'] = yankee;
                            report = verify.bind(offset)(report);
                            report = 23;
                            report = options[report];
                            verify = golf.bind(mike)(report);
                            options = verify.track;
                            report = _closure1_slot13;
                            golf = report.MODAL_DISMISSED;
                            report = {};
                            offset = _closure1_slot15;
                            offset = offset.PREMIUM_GUILD_SUBSCRIBE_CONFIRMATION_MODAL;
                            report['type'] = offset;
                            offset = _closure1_slot14;
                            offset = offset.BUTTON_CTA;
                            report['location_object'] = offset;
                            report = options.bind(verify)(golf, report);
 414: // try_end0
                            _fun00016_ip = 567; continue _fun00015;
 419:
                            return tango;
 422:
                            return zulu;
 425: // catch_target0
                            CatchBlockStart(arg_register=2);
                            tango = _closure1_slot1;
                            offset = _closure1_slot2;
                            zulu = 27;
                            zulu = offset[zulu];
                            report = tango.bind(mike)(zulu);
                            tango = report.show;
                            zulu = {};
                            verify = _closure1_slot0;
                            oscar = 16;
                            golf = offset[oscar];
                            golf = verify.bind(mike)(golf);
                            yankee = golf.intl;
                            options = yankee.string;
                            golf = offset[oscar];
                            golf = verify.bind(mike)(golf);
                            golf = golf.t;
                            golf = golf.Kx5W0d;
                            golf = options.bind(yankee)(golf);
                            zulu['title'] = golf;
                            golf = offset[oscar];
                            golf = verify.bind(mike)(golf);
                            options = golf.intl;
                            golf = options.string;
                            oscar = offset[oscar];
                            oscar = verify.bind(mike)(oscar);
                            oscar = oscar.t;
                            oscar = oscar.XueBVV;
                            oscar = golf.bind(options)(oscar);
                            zulu['body'] = oscar;
                            zulu = tango.bind(report)(zulu);
 567:
                            return mike;
 570:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure3_slot0 = mike;
                entity = function() {
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            kilo = entity.bind(report)();
            verify = null;
            if(!(verify != backup)) { _fun00008_ip = 422; continue _fun00007 }
 288:
            tango = _closure1_slot17;
            zulu = _closure1_slot7;
            entity = {};
            options = _closure1_slot8;
            golf = {};
            yankee = oscar.scrollableContent;
            golf['contentContainerStyle'] = yankee;
            yankee = oscar.content;
            golf['style'] = yankee;
            if(!(verify == offset)) { _fun00008_ip = 365; continue _fun00007 }
 328:
            yankee = _closure1_slot17;
            offset = _closure1_slot22;
            verify = {};
            verify['guild'] = sizing;
            verify['slot'] = backup;
            verify['isModifyingSubscription'] = foxtrot;
            verify['onPremiumGuildSubscribe'] = kilo;
            verify = yankee.bind(report)(offset, verify);
            _fun00008_ip = 400; continue _fun00007;
 365:
            romeo = _closure1_slot17;
            yankee = _closure1_slot23;
            offset = {};
            offset['guild'] = sizing;
            offset['onPremiumGuildSubscribe'] = kilo;
            offset['previousGuildSubscriptionSlot'] = backup;
            offset['isModifyingSubscription'] = foxtrot;
            verify = romeo.bind(report)(yankee, offset);
 400:
            golf['children'] = verify;
            golf = tango.bind(report)(options, golf);
            entity['children'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun00008_ip = 448; continue _fun00007;
 422:
            tango = _closure1_slot17;
            zulu = _closure1_slot5;
            mike = {};
            oscar = oscar.loading;
            mike['style'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 448:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();