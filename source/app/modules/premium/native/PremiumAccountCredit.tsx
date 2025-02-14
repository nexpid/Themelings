// app/modules/premium/native/PremiumAccountCredit.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: AccountCreditTier
        _fun95934: for(var _fun95934_ip = 0; ; ) switch(_fun95934_ip) {
 0:
            entity = argFoo;
            update = entity.planId;
            foxtrot = entity.months;
            echo = entity.currentSubscription;
            options = entity.shouldAddDivider;
            report = entity.unconsumedFractionalPremiumUnits;
            entity = _closure1_slot8;
            tango = undefined;
            yankee = entity.bind(tango)();
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            oscar = 7;
            mike = entity[oscar];
            offset = zulu.bind(tango)(mike);
            verify = offset.castPremiumSubscriptionAsSkuId;
            mike = _closure1_slot1;
            zulu = entity[oscar];
            romeo = mike.bind(tango)(zulu);
            zulu = romeo.getSkuIdForPlan;
            zulu = zulu.bind(romeo)(update);
            verify = verify.bind(offset)(zulu);
            entity = entity[oscar];
            mike = mike.bind(tango)(entity);
            entity = mike.getDisplayPremiumType;
            vacuum = entity.bind(mike)(update);
            sequence = null;
            entity = sequence != echo;
            config = undefined;
            if(!entity) { _fun95934_ip = 263; continue _fun95934 }
 135:
            mike = echo.status;
            entity = _closure1_slot5;
            entity = entity.PAUSED;
            if(!(mike === entity)) { _fun95934_ip = 164; continue _fun95934 }
 154:
            entity = echo.pauseEndsAt;
            if(!(sequence == entity)) { _fun95934_ip = 200; continue _fun95934 }
 164:
            entity = global;
            zulu = entity.Date;
            papa = echo.currentPeriodEnd;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            target = mike;
            entity = new target[zulu](papa, context);
            zulu = entity instanceof Object ? entity : mike;
            _fun95934_ip = 234; continue _fun95934;
 200:
            entity = global;
            offset = entity.Date;
            papa = echo.pauseEndsAt;
            mike = offset.prototype;
            mike = Object.create(mike, {constructor: {value: offset}});
            target = mike;
            entity = new target[offset](papa, context);
            zulu = entity instanceof Object ? entity : mike;
 234:
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscar];
            mike = mike.bind(tango)(entity);
            entity = mike.extendDateWithUnconsumedFractionalPremium;
            config = entity.bind(mike)(zulu, report);
 263:
            zulu = _closure1_slot7;
            mike = _closure1_slot3;
            entity = {};
            oscar = yankee.creditItem;
            report = new Array(2);
            report[0] = oscar;
            oscar = null;
            if(!options) { _fun95934_ip = 298; continue _fun95934 }
 292:
            oscar = yankee.divider;
 298:
            report[1] = oscar;
            entity['style'] = report;
            options = _closure1_slot6;
            romeo = _closure1_slot1;
            output = _closure1_slot2;
            offset = 8;
            report = output[offset];
            oscar = romeo.bind(tango)(report);
            report = {};
            offset = output[offset];
            offset = romeo.bind(tango)(offset);
            offset = offset.Sizes;
            offset = offset.SMALL;
            report['size'] = offset;
            report['skuId'] = verify;
            oscar = options.bind(tango)(oscar, report);
            report = new Array(3);
            report[0] = oscar;
            offset = _closure1_slot7;
            verify = _closure1_slot3;
            options = {};
            oscar = yankee.textContainer;
            options['style'] = oscar;
            sizing = _closure1_slot6;
            result = _closure1_slot0;
            oscar = 9;
            romeo = output[oscar];
            romeo = result.bind(tango)(romeo);
            kilo = romeo.Text;
            romeo = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            backup = yankee.headerText;
            romeo['style'] = backup;
            backup = 10;
            source = output[backup];
            source = result.bind(tango)(source);
            control = source.intl;
            source = control.format;
            output = output[backup];
            output = result.bind(tango)(output);
            output = output.t;
            result = output.LzobT0;
            output = {};
            output['planName'] = vacuum;
            output = source.bind(control)(result, output);
            romeo['children'] = output;
            kilo = sizing.bind(tango)(kilo, romeo);
            romeo = new Array(2);
            romeo[0] = kilo;
            if(!(sequence != echo)) { _fun95934_ip = 538; continue _fun95934 }
 524:
            sizing = echo.isPurchasedExternally;
            kilo = null;
            if(sizing) { _fun95934_ip = 748; continue _fun95934 }
 538:
            result = _closure1_slot6;
            output = _closure1_slot0;
            sizing = _closure1_slot2;
            sizing = sizing[oscar];
            sizing = output.bind(tango)(sizing);
            output = sizing.Text;
            sizing = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            source = yankee.subText;
            sizing['style'] = source;
            if(!(sequence != echo)) { _fun95934_ip = 604; continue _fun95934 }
 594:
            echo = echo.planId;
            if(!(echo !== update)) { _fun95934_ip = 666; continue _fun95934 }
 604:
            update = _closure1_slot0;
            echo = _closure1_slot2;
            source = echo[backup];
            source = update.bind(tango)(source);
            control = source.intl;
            source = control.formatToPlainString;
            echo = echo[backup];
            echo = update.bind(tango)(echo);
            echo = echo.t;
            update = echo.eNXZ5O;
            echo = {};
            echo['planName'] = vacuum;
            echo = source.bind(control)(update, echo);
            _fun95934_ip = 738; continue _fun95934;
 666:
            source = _closure1_slot0;
            update = _closure1_slot2;
            control = update[backup];
            control = source.bind(tango)(control);
            vacuum = control.intl;
            control = vacuum.formatToPlainString;
            update = update[backup];
            update = source.bind(tango)(update);
            update = update.t;
            source = update.5CNRRE;
            update = {};
            record = sequence != config;
            sequence = 0;
            if(!record) { _fun95934_ip = 727; continue _fun95934 }
 724:
            sequence = config;
 727:
            update['date'] = sequence;
            echo = control.bind(vacuum)(source, update);
 738:
            sizing['children'] = echo;
            kilo = result.bind(tango)(output, sizing);
 748:
            romeo[1] = kilo;
            options['children'] = romeo;
            options = offset.bind(tango)(verify, options);
            report[1] = options;
            options = _closure1_slot6;
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            oscar = verify[oscar];
            oscar = offset.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            yankee = yankee.timeText;
            oscar['style'] = yankee;
            yankee = verify[backup];
            yankee = offset.bind(tango)(yankee);
            romeo = yankee.intl;
            yankee = romeo.format;
            verify = verify[backup];
            verify = offset.bind(tango)(verify);
            verify = verify.t;
            offset = verify.ess/xs;
            verify = {};
            verify['count'] = foxtrot;
            verify = yankee.bind(romeo)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tango = tango.bind(entity)(golf);
    romeo = 1;
    tango = oscar[romeo];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SubscriptionStatusTypes;
    var _closure1_slot5 = tango;
    tango = 4;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 12;
    verify['marginBottom'] = offset;
    tango['title'] = verify;
    verify = {};
    offset = 6;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.xs;
    verify['borderRadius'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = foxtrot;
    tango['creditList'] = verify;
    foxtrot = 16;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'padding': 16};
    tango['creditItem'] = verify;
    verify = {'marginLeft': 16, 'marginRight': 16, 'flexDirection': 'column', 'flex': 1};
    tango['textContainer'] = verify;
    verify = {};
    backup = 20;
    verify['lineHeight'] = backup;
    tango['headerText'] = verify;
    verify = {};
    verify['lineHeight'] = foxtrot;
    tango['subText'] = verify;
    verify = {'lineHeight': 20, 'alignSelf': 'flex-start'};
    tango['timeText'] = verify;
    verify = {};
    verify['borderBottomWidth'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_MODIFIER_ACCENT;
    verify['borderBottomColor'] = offset;
    tango['divider'] = verify;
    verify = {};
    offset = 8;
    verify['marginTop'] = offset;
    tango['creditDescription'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/native/PremiumAccountCredit.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        _fun95935: for(var _fun95935_ip = 0; ; ) switch(_fun95935_ip) {
 0:
            entity = argFoo;
            offset = entity.currentSubscription;
            var _closure2_slot0 = offset;
            golf = entity.entitlements;
            oscar = entity.style;
            source = entity.creditListContainerStyle;
            report = undefined;
            var _closure2_slot2 = report;
            entity = _closure1_slot8;
            foxtrot = entity.bind(report)();
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 11;
            entity = zulu[entity];
            tango = mike.bind(report)(entity);
            zulu = tango.useStateFromStoresArray;
            entity = _closure1_slot4;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                mike = _closure1_slot4;
                entity = mike.getUnactivatedFractionalPremiumUnits;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = zulu.bind(tango)(mike, entity);
            var _closure2_slot1 = entity;
            entity = null;
            if(!(entity != golf)) { _fun95935_ip = 677; continue _fun95935 }
 113:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 7;
            mike = tango[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.hasAccountCredit;
            mike = mike.bind(zulu)(golf);
            if(!mike) { _fun95935_ip = 677; continue _fun95935 }
 150:
            zulu = _closure1_slot1;
            sizing = _closure1_slot2;
            mike = 12;
            mike = sizing[mike];
            zulu = zulu.bind(report)(mike);
            output = global;
            tango = output.Array;
            mike = tango.from;
            mike = mike.bind(tango)(golf);
            tango = zulu.bind(report)(mike);
            zulu = tango.filter;
            mike = function(argFoo) {
                _fun95937: for(var _fun95937_ip = 0; ; ) switch(_fun95937_ip) {
 0:
                    mike = argFoo;
                    entity = mike.subscriptionPlanId;
                    tango = mike.parentId;
                    mike = mike.consumed;
                    zulu = null;
                    entity = zulu != entity;
                    if(!entity) { _fun95937_ip = 34; continue _fun95937 }
 30:
                    entity = zulu != tango;
 34:
                    if(!entity) { _fun95937_ip = 40; continue _fun95937 }
 37:
                    entity = !mike;
 40:
                    return entity;
                }
            };
            tango = zulu.bind(tango)(mike);
            zulu = tango.groupBy;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.subscriptionPlanId;
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = zulu.value;
            update = mike.bind(zulu)();
            _closure2_slot2 = update;
            tango = _closure1_slot7;
            zulu = _closure1_slot3;
            mike = {};
            mike['style'] = oscar;
            yankee = _closure1_slot6;
            echo = _closure1_slot0;
            options = 9;
            oscar = sizing[options];
            oscar = echo.bind(report)(oscar);
            golf = oscar.Text;
            oscar = {'style': null, 'accessibilityRole': 'header', 'variant': 'eyebrow', 'color': 'header-secondary'};
            romeo = foxtrot.title;
            oscar['style'] = romeo;
            kilo = 10;
            romeo = sizing[kilo];
            romeo = echo.bind(report)(romeo);
            control = romeo.intl;
            result = control.string;
            romeo = sizing[kilo];
            romeo = echo.bind(report)(romeo);
            romeo = romeo.t;
            romeo = romeo.YugZY2;
            romeo = result.bind(control)(romeo);
            oscar['children'] = romeo;
            golf = yankee.bind(report)(golf, oscar);
            oscar = new Array(4);
            oscar[0] = golf;
            romeo = _closure1_slot6;
            yankee = _closure1_slot3;
            golf = {};
            control = foxtrot.creditList;
            result = new Array(2);
            result[0] = control;
            result[1] = source;
            golf['style'] = result;
            result = output.Object;
            output = result.keys;
            result = output.bind(result)(update);
            output = result.map;
            backup = function(argFoo) {
                report = argFoo;
                mike = global;
                oscar = mike.Object;
                tango = oscar.keys;
                zulu = _closure2_slot2;
                zulu = tango.bind(oscar)(zulu);
                oscar = mike.Object;
                tango = oscar.keys;
                mike = _closure2_slot2;
                mike = tango.bind(oscar)(mike);
                tango = mike.length;
                mike = 1;
                mike = tango - mike;
                oscar = zulu[mike];
                tango = _closure1_slot6;
                zulu = _closure1_slot9;
                mike = {};
                mike['planId'] = report;
                golf = _closure2_slot2;
                golf = golf[report];
                golf = golf.length;
                mike['months'] = golf;
                golf = _closure2_slot0;
                mike['currentSubscription'] = golf;
                oscar = report === oscar;
                oscar = !oscar;
                mike['shouldAddDivider'] = oscar;
                entity = _closure2_slot1;
                mike['unconsumedFractionalPremiumUnits'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike, report);
                return entity;
            };
            backup = output.bind(result)(backup);
            golf['children'] = backup;
            golf = romeo.bind(report)(yankee, golf);
            oscar[1] = golf;
            backup = _closure1_slot6;
            golf = sizing[options];
            golf = echo.bind(report)(golf);
            yankee = golf.Text;
            golf = {};
            romeo = foxtrot.creditDescription;
            golf['style'] = romeo;
            romeo = 'text-sm/medium';
            golf['variant'] = romeo;
            output = sizing[kilo];
            output = echo.bind(report)(output);
            result = output.intl;
            output = result.string;
            sizing = sizing[kilo];
            sizing = echo.bind(report)(sizing);
            sizing = sizing.t;
            sizing = sizing.kNEjGh;
            sizing = output.bind(result)(sizing);
            golf['children'] = sizing;
            golf = backup.bind(report)(yankee, golf);
            oscar[2] = golf;
            yankee = entity != offset;
            golf = null;
            if(!yankee) { _fun95935_ip = 661; continue _fun95935 }
 554:
            offset = offset.isPurchasedExternally;
            golf = null;
            if(!offset) { _fun95935_ip = 661; continue _fun95935 }
 565:
            offset = _closure1_slot6;
            backup = _closure1_slot0;
            yankee = _closure1_slot2;
            options = yankee[options];
            options = backup.bind(report)(options);
            verify = options.Text;
            options = {};
            foxtrot = foxtrot.creditDescription;
            options['style'] = foxtrot;
            options['variant'] = romeo;
            romeo = yankee[kilo];
            romeo = backup.bind(report)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            yankee = yankee[kilo];
            yankee = backup.bind(report)(yankee);
            yankee = yankee.t;
            yankee = yankee.azRP0N;
            yankee = romeo.bind(foxtrot)(yankee);
            options['children'] = yankee;
            golf = offset.bind(report)(verify, options);
 661:
            oscar[3] = golf;
            mike['children'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 677:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();