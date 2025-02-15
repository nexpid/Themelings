// app/modules/premium/native/PremiumPlanSelect.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getPlanDescription
        _fun95956: for(var _fun95956_ip = 0; ; ) switch(_fun95956_ip) {
 0:
            oscar = argFoo;
            mike = oscar.premiumTier;
            entity = null;
            if(!(entity != mike)) { _fun95956_ip = 211; continue _fun95956 }
 18:
            mike = oscar.numPremiumGuild;
            entity = 0;
            if(!(entity !== mike)) { _fun95956_ip = 167; continue _fun95956 }
 33:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            options = 15;
            mike = mike[options];
            golf = undefined;
            mike = zulu.bind(golf)(mike);
            tango = mike.intl;
            zulu = tango.formatToPlainString;
            report = oscar.premiumTier;
            mike = _closure1_slot16;
            mike = mike.TIER_1;
            if(!(report !== mike)) { _fun95956_ip = 118; continue _fun95956 }
 88:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[options];
            mike = report.bind(golf)(mike);
            mike = mike.t;
            mike = mike.u6dBsL;
            _fun95956_ip = 146; continue _fun95956;
 118:
            report = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[options];
            entity = report.bind(golf)(entity);
            entity = entity.t;
            mike = entity.sexoHh;
 146:
            entity = {};
            report = oscar.numPremiumGuild;
            entity['num'] = report;
            entity = zulu.bind(tango)(mike, entity);
            _fun95956_ip = 209; continue _fun95956;
 167:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 16;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.getPremiumTypeDisplayName;
            mike = oscar.premiumTier;
            entity = zulu.bind(tango)(mike);
 209:
            _fun95956_ip = 285; continue _fun95956;
 211:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 15;
            tango = options[mike];
            zulu = undefined;
            tango = golf.bind(zulu)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = options[mike];
            mike = golf.bind(zulu)(mike);
            mike = mike.t;
            zulu = mike.gDsyBw;
            mike = {};
            oscar = oscar.numPremiumGuild;
            mike['numSubscriptions'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 285:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo) { // Original name: PlanRow
        _fun95957: for(var _fun95957_ip = 0; ; ) switch(_fun95957_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.plan;
            var _closure2_slot0 = foxtrot;
            mike = entity.purchase;
            var _closure2_slot1 = mike;
            verify = entity.style;
            yankee = entity.subscription;
            var _closure2_slot2 = yankee;
            oscar = entity.disabled;
            tango = undefined;
            if(!(oscar === tango)) { _fun95957_ip = 53; continue _fun95957 }
 51:
            oscar = false;
 53:
            kilo = entity.hasBackground;
            if(!(kilo === tango)) { _fun95957_ip = 65; continue _fun95957 }
 63:
            kilo = false;
 65:
            var _closure2_slot3 = tango;
            entity = _closure1_slot27;
            echo = entity.bind(tango)();
            mike = _closure1_slot14;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.isPurchasing;
                return entity;
            };
            options = mike.bind(tango)(entity);
            mike = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 23;
            entity = offset[entity];
            golf = mike.bind(tango)(entity);
            zulu = golf.useStateFromStoresArray;
            entity = _closure1_slot12;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                tango = _closure1_slot12;
                zulu = tango.getProduct;
                entity = _closure2_slot0;
                entity = entity.productId;
                zulu = zulu.bind(tango)(entity);
                entity = new Array(2);
                entity[0] = zulu;
                zulu = _closure1_slot12;
                mike = zulu.isBusy;
                mike = mike.bind(zulu)();
                entity[1] = mike;
                return entity;
            };
            zulu = zulu.bind(golf)(mike, entity);
            mike = _closure1_slot4;
            entity = 2;
            zulu = mike.bind(tango)(zulu, entity);
            mike = 0;
            result = zulu[mike];
            entity = 1;
            golf = zulu[entity];
            zulu = _closure1_slot1;
            entity = 24;
            entity = offset[entity];
            entity = zulu.bind(tango)(entity);
            update = entity.bind(tango)();
            zulu = foxtrot.premiumTier;
            entity = _closure1_slot16;
            entity = entity.TIER_2;
            sizing = null;
            offset = null;
            if(!(zulu === entity)) { _fun95957_ip = 364; continue _fun95957 }
 220:
            entity = foxtrot.numPremiumGuild;
            offset = null;
            if(!(mike === entity)) { _fun95957_ip = 364; continue _fun95957 }
 235:
            backup = _closure1_slot24;
            source = _closure1_slot0;
            sequence = _closure1_slot2;
            entity = 25;
            entity = sequence[entity];
            entity = source.bind(tango)(entity);
            zulu = entity.LegacyText;
            entity = {};
            control = echo.rowText;
            output = new Array(2);
            output[0] = control;
            control = echo.rowPlanDescriptionSubtext;
            output[1] = control;
            entity['style'] = output;
            output = 15;
            control = sequence[output];
            control = source.bind(tango)(control);
            vacuum = control.intl;
            control = vacuum.format;
            output = sequence[output];
            output = source.bind(tango)(output);
            output = output.t;
            source = output.he52LC;
            output = {};
            sequence = _closure1_slot15;
            output['num'] = sequence;
            output = control.bind(vacuum)(source, output);
            entity['children'] = output;
            offset = backup.bind(tango)(zulu, entity);
 364:
            entity = foxtrot.premiumTier;
            if(!(sizing != entity)) { _fun95957_ip = 568; continue _fun95957 }
 377:
            entity = foxtrot.numPremiumGuild;
            if(!(mike === entity)) { _fun95957_ip = 438; continue _fun95957 }
 387:
            mike = foxtrot.premiumTier;
            entity = _closure1_slot16;
            entity = entity.TIER_0;
            if(!(entity !== mike)) { _fun95957_ip = 546; continue _fun95957 }
 410:
            entity = _closure1_slot16;
            entity = entity.TIER_1;
            if(!(entity !== mike)) { _fun95957_ip = 524; continue _fun95957 }
 424:
            entity = _closure1_slot16;
            entity = entity.TIER_2;
            if(!(entity !== mike)) { _fun95957_ip = 502; continue _fun95957 }
 438:
            mike = foxtrot.premiumTier;
            entity = _closure1_slot16;
            entity = entity.TIER_1;
            if(!(mike !== entity)) { _fun95957_ip = 480; continue _fun95957 }
 458:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 22;
            entity = zulu[entity];
            backup = mike.bind(tango)(entity);
            _fun95957_ip = 500; continue _fun95957;
 480:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 21;
            entity = zulu[entity];
            backup = mike.bind(tango)(entity);
 500:
            _fun95957_ip = 588; continue _fun95957;
 502:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 20;
            entity = zulu[entity];
            backup = mike.bind(tango)(entity);
            _fun95957_ip = 588; continue _fun95957;
 524:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 19;
            entity = zulu[entity];
            backup = mike.bind(tango)(entity);
            _fun95957_ip = 588; continue _fun95957;
 546:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 18;
            entity = zulu[entity];
            backup = mike.bind(tango)(entity);
            _fun95957_ip = 588; continue _fun95957;
 568:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 17;
            entity = zulu[entity];
            backup = mike.bind(tango)(entity);
 588:
            mike = sizing != yankee;
            entity = null;
            if(!mike) { _fun95957_ip = 628; continue _fun95957 }
 597:
            zulu = _closure1_slot0;
            output = _closure1_slot2;
            mike = 16;
            mike = output[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.getPremiumTypeFromSubscription;
            entity = mike.bind(zulu)(yankee);
 628:
            _closure2_slot3 = entity;
            zulu = _closure1_slot24;
            output = _closure1_slot0;
            source = _closure1_slot2;
            entity = 26;
            entity = source[entity];
            entity = output.bind(tango)(entity);
            mike = entity.TouchableHighlight;
            entity = {'activeOpacity': 0.6, 'underlayColor': null, 'accessibilityRole': 'button'};
            yankee = 27;
            yankee = source[yankee];
            output = output.bind(tango)(yankee);
            yankee = output.isThemeDark;
            update = yankee.bind(output)(update);
            output = 'none';
            yankee = output;
            if(update) { _fun95957_ip = 742; continue _fun95957 }
 705:
            yankee = output;
            if(!kilo) { _fun95957_ip = 742; continue _fun95957 }
 711:
            output = _closure1_slot1;
            update = _closure1_slot2;
            kilo = 14;
            kilo = update[kilo];
            kilo = output.bind(tango)(kilo);
            kilo = kilo.unsafe_rawColors;
            yankee = kilo.PRIMARY_230;
 742:
            entity['underlayColor'] = yankee;
            if(oscar) { _fun95957_ip = 754; continue _fun95957 }
 751:
            oscar = options;
 754:
            if(oscar) { _fun95957_ip = 760; continue _fun95957 }
 757:
            oscar = golf;
 760:
            entity['disabled'] = oscar;
            report = function() { // Original name: onPress
                _fun95960: for(var _fun95960_ip = 0; ; ) switch(_fun95960_ip) {
 0:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike != zulu)) { _fun95960_ip = 165; continue _fun95960 }
 16:
                    zulu = _closure2_slot3;
                    mike = _closure1_slot16;
                    mike = mike.TIER_2;
                    if(!(zulu !== mike)) { _fun95960_ip = 55; continue _fun95960 }
 37:
                    zulu = _closure2_slot3;
                    mike = _closure1_slot16;
                    mike = mike.TIER_1;
                    if(!(zulu === mike)) { _fun95960_ip = 165; continue _fun95960 }
 55:
                    mike = _closure2_slot0;
                    zulu = mike.premiumTier;
                    mike = _closure1_slot16;
                    mike = mike.TIER_0;
                    if(!(zulu === mike)) { _fun95960_ip = 165; continue _fun95960 }
 79:
                    zulu = _closure1_slot1;
                    golf = _closure1_slot2;
                    mike = 28;
                    mike = golf[mike];
                    tango = undefined;
                    zulu = zulu.bind(tango)(mike);
                    mike = {};
                    oscar = _closure2_slot2;
                    mike['subscription'] = oscar;
                    oscar = _closure1_slot0;
                    report = 29;
                    report = golf[report];
                    report = oscar.bind(tango)(report);
                    report = report.WhatYouLoseMode;
                    report = report.DOWNGRADE;
                    mike['mode'] = report;
                    report = function() { // Original name: onContinue
                        zulu = _closure2_slot1;
                        entity = _closure2_slot0;
                        mike = entity.productId;
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike['onContinue'] = report;
                    mike = zulu.bind(tango)(mike);
                    _fun95960_ip = 186; continue _fun95960;
 165:
                    zulu = _closure2_slot1;
                    entity = _closure2_slot0;
                    mike = entity.productId;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 186:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onPress'] = report;
            golf = _closure1_slot25;
            oscar = _closure1_slot8;
            report = {};
            yankee = echo.row;
            options = new Array(2);
            options[0] = yankee;
            options[1] = verify;
            report['style'] = options;
            yankee = _closure1_slot24;
            verify = _closure1_slot7;
            options = {};
            kilo = _closure1_slot28;
            kilo = kilo[backup];
            kilo = echo[kilo];
            options['style'] = kilo;
            options['source'] = backup;
            verify = yankee.bind(tango)(verify, options);
            options = new Array(4);
            options[0] = verify;
            update = _closure1_slot24;
            kilo = _closure1_slot0;
            backup = _closure1_slot2;
            verify = 25;
            yankee = backup[verify];
            yankee = kilo.bind(tango)(yankee);
            output = yankee.LegacyText;
            yankee = {};
            control = echo.rowText;
            source = new Array(2);
            source[0] = control;
            control = echo.rowPlanDescription;
            source[1] = control;
            yankee['style'] = source;
            source = _closure1_slot30;
            source = source.bind(tango)(foxtrot);
            yankee['children'] = source;
            yankee = update.bind(tango)(output, yankee);
            options[1] = yankee;
            options[2] = offset;
            yankee = _closure1_slot24;
            verify = backup[verify];
            verify = kilo.bind(tango)(verify);
            offset = verify.LegacyText;
            verify = {};
            update = echo.rowText;
            output = new Array(2);
            output[0] = update;
            echo = echo.rowPrice;
            output[1] = echo;
            verify['style'] = output;
            echo = 15;
            backup = backup[echo];
            backup = kilo.bind(tango)(backup);
            kilo = backup.intl;
            backup = kilo.format;
            output = foxtrot.interval;
            foxtrot = _closure1_slot17;
            foxtrot = foxtrot.MONTH;
            if(!(output !== foxtrot)) { _fun95957_ip = 1059; continue _fun95957 }
 1029:
            output = _closure1_slot0;
            foxtrot = _closure1_slot2;
            foxtrot = foxtrot[echo];
            foxtrot = output.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.rS8FAw;
            _fun95957_ip = 1087; continue _fun95957;
 1059:
            output = _closure1_slot0;
            romeo = _closure1_slot2;
            romeo = romeo[echo];
            romeo = output.bind(tango)(romeo);
            romeo = romeo.t;
            foxtrot = romeo.AbOLNj;
 1087:
            romeo = {};
            echo = sizing == result;
            output = undefined;
            if(echo) { _fun95957_ip = 1104; continue _fun95957 }
 1098:
            output = result.priceString;
 1104:
            result = sizing != output;
            sizing = '$...';
            if(!result) { _fun95957_ip = 1120; continue _fun95957 }
 1117:
            sizing = output;
 1120:
            romeo['price'] = sizing;
            romeo = backup.bind(kilo)(foxtrot, romeo);
            verify['children'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            options[3] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: PlanSection
        mike = argFoo;
        oscar = mike.plans;
        zulu = mike.purchase;
        var _closure2_slot0 = zulu;
        zulu = mike.analyticsLoadId;
        var _closure2_slot1 = zulu;
        zulu = mike.trackNewPaymentFlow;
        var _closure2_slot2 = zulu;
        zulu = mike.trackPaymentFlowStep;
        var _closure2_slot3 = zulu;
        mike = mike.subscription;
        var _closure2_slot4 = mike;
        tango = _closure1_slot24;
        zulu = _closure1_slot8;
        mike = {};
        report = oscar.map;
        entity = function(argFoo) {
            entity = argFoo;
            report = _closure1_slot24;
            tango = _closure1_slot31;
            zulu = {};
            zulu['plan'] = entity;
            mike = _closure2_slot4;
            zulu['subscription'] = mike;
            mike = function(argFoo) { // Original name: purchase
                _fun95964: for(var _fun95964_ip = 0; ; ) switch(_fun95964_ip) {
 0:
                    tango = argFoo;
                    var _closure4_slot0 = tango;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 30;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = mike.getToggledIntervalProduct;
                    options = entity.bind(mike)(tango);
                    var _closure4_slot1 = options;
                    mike = null;
                    if(!(mike != options)) { _fun95964_ip = 218; continue _fun95964 }
 58:
                    report = _closure1_slot12;
                    entity = report.getProduct;
                    entity = entity.bind(report)(options);
                    if(!(mike != entity)) { _fun95964_ip = 218; continue _fun95964 }
 80:
                    mike = _closure2_slot3;
                    entity = {};
                    verify = _closure1_slot0;
                    report = _closure1_slot2;
                    options = 31;
                    offset = report[options];
                    offset = verify.bind(zulu)(offset);
                    offset = offset.PaymentFlowStep;
                    offset = offset.PLAN_SELECT;
                    entity['fromStep'] = offset;
                    options = report[options];
                    options = verify.bind(zulu)(options);
                    options = options.PaymentFlowStep;
                    options = options.YEARLY_UPSELL;
                    entity['toStep'] = options;
                    entity['productId'] = tango;
                    entity = mike.bind(zulu)(entity);
                    mike = _closure1_slot1;
                    entity = 32;
                    entity = report[entity];
                    report = mike.bind(zulu)(entity);
                    mike = report.openLazy;
                    entity = {'importer': null, 'hideActionSheet': true, 'isDismissable': true};
                    golf = function() { // Original name: importer
                        zulu = _closure1_slot0;
                        entity = _closure1_slot2;
                        mike = 34;
                        mike = entity[mike];
                        tango = undefined;
                        zulu = zulu.bind(tango)(mike);
                        mike = 33;
                        mike = entity[mike];
                        entity = entity.paths;
                        zulu = zulu.bind(tango)(mike, entity);
                        mike = zulu.then;
                        entity = function(argFoo) {
                            mike = argFoo;
                            mike = mike.default;
                            var _closure6_slot0 = mike;
                            entity = function(argFoo) {
                                tango = _closure1_slot24;
                                zulu = _closure6_slot0;
                                mike = {};
                                verify = argFoo;
                                offset = mike;
                                entity = copyDataProperties(offset, verify);
                                golf = _closure4_slot1;
                                entity = 'productId';
                                mike[entity] = golf;
                                options = _closure1_slot3;
                                entity = undefined;
                                golf = function* () {
                                    entity = function* () { // Original name: ?anon_0_
                                        _fun95969: for(var _fun95969_ip = 0; ; ) switch(_fun95969_ip) {
 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(mike) { _fun95969_ip = 134; continue _fun95969 }
 10:
                                            oscar = _closure2_slot3;
                                            tango = {};
                                            golf = _closure1_slot0;
                                            options = _closure1_slot2;
                                            report = 31;
                                            verify = options[report];
                                            zulu = undefined;
                                            verify = golf.bind(zulu)(verify);
                                            verify = verify.PaymentFlowStep;
                                            verify = verify.YEARLY_UPSELL;
                                            tango['fromStep'] = verify;
                                            report = options[report];
                                            report = golf.bind(zulu)(report);
                                            report = report.PaymentFlowStep;
                                            report = report.EXTERNAL_PAYMENT;
                                            tango['toStep'] = report;
                                            report = _closure4_slot0;
                                            tango['productId'] = report;
                                            tango = oscar.bind(zulu)(tango);
                                            tango = _closure2_slot0;
                                            mike = _closure2_slot1;
                                            mike = tango.bind(zulu)(report, mike);
                                            SaveGenerator(address=122);
 120:
                                            return mike;
 122:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(tango) { _fun95969_ip = 131; continue _fun95969 }
 128:
                                            return zulu;
 131:
                                            return mike;
 134:
                                            return entity;
                                        }
                                    };
                                    return entity;
                                };
                                options = options.bind(entity)(golf);
                                golf = 'continueWithDefault';
                                mike[golf] = options;
                                oscar = _closure1_slot3;
                                report = function* () {
                                    entity = function* () { // Original name: ?anon_0_
                                        _fun95971: for(var _fun95971_ip = 0; ; ) switch(_fun95971_ip) {
 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(mike) { _fun95971_ip = 99; continue _fun95971 }
 7:
                                            tango = _closure1_slot0;
                                            zulu = _closure1_slot2;
                                            mike = 31;
                                            mike = zulu[mike];
                                            zulu = undefined;
                                            tango = tango.bind(zulu)(mike);
                                            mike = tango.getNewAnalyticsLoadId;
                                            report = mike.bind(tango)();
                                            golf = _closure2_slot2;
                                            oscar = {};
                                            oscar['newFlowAnalyticsLoadId'] = report;
                                            tango = _closure4_slot1;
                                            oscar['productId'] = tango;
                                            oscar = golf.bind(zulu)(oscar);
                                            mike = _closure2_slot0;
                                            mike = mike.bind(zulu)(tango, report);
                                            SaveGenerator(address=87);
 85:
                                            return mike;
 87:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(tango) { _fun95971_ip = 96; continue _fun95971 }
 93:
                                            return zulu;
 96:
                                            return mike;
 99:
                                            return entity;
                                        }
                                    };
                                    return entity;
                                };
                                oscar = oscar.bind(entity)(report);
                                report = 'continueWithUpsell';
                                mike[report] = oscar;
                                entity = tango.bind(entity)(zulu, mike);
                                return entity;
                            };
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity['importer'] = golf;
                    entity = mike.bind(report)(entity);
                    return zulu;
 218:
                    report = _closure2_slot3;
                    mike = {};
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    oscar = 31;
                    verify = options[oscar];
                    verify = golf.bind(zulu)(verify);
                    verify = verify.PaymentFlowStep;
                    verify = verify.PLAN_SELECT;
                    mike['fromStep'] = verify;
                    oscar = options[oscar];
                    oscar = golf.bind(zulu)(oscar);
                    oscar = oscar.PaymentFlowStep;
                    oscar = oscar.EXTERNAL_PAYMENT;
                    mike['toStep'] = oscar;
                    mike['productId'] = tango;
                    mike = report.bind(zulu)(mike);
                    mike = _closure2_slot0;
                    entity = _closure2_slot1;
                    entity = mike.bind(zulu)(tango, entity);
                    return entity;
                }
            };
            zulu['purchase'] = mike;
            mike = entity.productId;
            entity = undefined;
            entity = report.bind(entity)(tango, zulu, mike);
            return entity;
        };
        entity = report.bind(oscar)(entity);
        mike['children'] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: CurrentPlanRow
        _fun95972: for(var _fun95972_ip = 0; ; ) switch(_fun95972_ip) {
 0:
            entity = argFoo;
            romeo = entity.subscription;
            var _closure2_slot0 = romeo;
            mike = entity.trackPaymentFlowStep;
            var _closure2_slot1 = mike;
            mike = entity.trackNewPaymentFlow;
            var _closure2_slot2 = mike;
            mike = entity.purchase;
            var _closure2_slot3 = mike;
            mike = entity.analyticsLoadId;
            var _closure2_slot4 = mike;
            entity = entity.showCurrentPlan;
            tango = undefined;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            mike = _closure1_slot27;
            options = mike.bind(tango)();
            if(!entity) { _fun95972_ip = 437; continue _fun95972 }
 88:
            foxtrot = null;
            if(!(foxtrot != romeo)) { _fun95972_ip = 437; continue _fun95972 }
 97:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 30;
            mike = mike[entity];
            report = zulu.bind(tango)(mike);
            zulu = report.makeExternalPaymentGatewayPlanIdOrThrow;
            oscar = romeo.renewalMutations;
            golf = foxtrot == oscar;
            mike = undefined;
            if(golf) { _fun95972_ip = 144; continue _fun95972 }
 138:
            mike = oscar.paymentGatewayPlanId;
 144:
            if(!(foxtrot == mike)) { _fun95972_ip = 154; continue _fun95972 }
 148:
            mike = romeo.paymentGatewayPlanId;
 154:
            zulu = zulu.bind(report)(mike);
            _closure2_slot5 = zulu;
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[entity];
            report = report.bind(tango)(mike);
            mike = report.getPremiumBundledItemsFromProductId;
            backup = mike.bind(report)(zulu);
            golf = backup.premiumTier;
            if(!(foxtrot == golf)) { _fun95972_ip = 213; continue _fun95972 }
 201:
            mike = _closure1_slot21;
            report = mike.PREMIUM_GUILD;
            _fun95972_ip = 244; continue _fun95972;
 213:
            oscar = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 16;
            mike = offset[mike];
            oscar = oscar.bind(tango)(mike);
            mike = oscar.getPremiumGradientColor;
            report = mike.bind(oscar)(golf);
 244:
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = oscar[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.getToggledIntervalProduct;
            offset = entity.bind(mike)(zulu);
            _closure2_slot6 = offset;
            zulu = _closure1_slot24;
            mike = _closure1_slot1;
            entity = 35;
            entity = oscar[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            oscar = options.currentPlanGradient;
            entity['style'] = oscar;
            entity['colors'] = report;
            report = _closure1_slot22;
            report = report.START;
            entity['start'] = report;
            report = _closure1_slot22;
            report = report.END;
            entity['end'] = report;
            golf = _closure1_slot24;
            oscar = _closure1_slot31;
            report = {};
            report['plan'] = backup;
            report['subscription'] = romeo;
            offset = foxtrot == offset;
            if(!offset) { _fun95972_ip = 386; continue _fun95972 }
 367:
            romeo = romeo.status;
            yankee = _closure1_slot23;
            yankee = yankee.CANCELED;
            offset = romeo !== yankee;
 386:
            report['disabled'] = offset;
            offset = true;
            report['hasBackground'] = offset;
            verify = function() { // Original name: purchase
                _fun95973: for(var _fun95973_ip = 0; ; ) switch(_fun95973_ip) {
 0:
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 30;
                    entity = zulu[entity];
                    oscar = undefined;
                    tango = mike.bind(oscar)(entity);
                    mike = tango.getProductIdsForBothIntervals;
                    entity = _closure2_slot5;
                    entity = mike.bind(tango)(entity);
                    mike = entity.monthly;
                    var _closure3_slot0 = mike;
                    tango = entity.yearly;
                    var _closure3_slot1 = tango;
                    entity = _closure2_slot0;
                    mike = null;
                    entity = mike == entity;
                    report = undefined;
                    if(entity) { _fun95973_ip = 89; continue _fun95973 }
 80:
                    entity = _closure2_slot0;
                    report = entity.status;
 89:
                    entity = _closure1_slot23;
                    entity = entity.CANCELED;
                    if(!(report !== entity)) { _fun95973_ip = 256; continue _fun95973 }
 106:
                    entity = _closure2_slot6;
                    report = mike != entity;
                    entity = undefined;
                    if(!report) { _fun95973_ip = 251; continue _fun95973 }
 122:
                    offset = _closure1_slot12;
                    verify = offset.getProduct;
                    report = _closure2_slot6;
                    report = verify.bind(offset)(report);
                    report = mike != report;
                    entity = undefined;
                    if(!report) { _fun95973_ip = 251; continue _fun95973 }
 150:
                    verify = _closure2_slot1;
                    report = {};
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    offset = 31;
                    foxtrot = romeo[offset];
                    foxtrot = yankee.bind(oscar)(foxtrot);
                    foxtrot = foxtrot.PaymentFlowStep;
                    foxtrot = foxtrot.PLAN_SELECT;
                    report['fromStep'] = foxtrot;
                    offset = romeo[offset];
                    offset = yankee.bind(oscar)(offset);
                    offset = offset.PaymentFlowStep;
                    offset = offset.EXTERNAL_PAYMENT;
                    report['toStep'] = offset;
                    offset = _closure2_slot6;
                    report['productId'] = offset;
                    report = verify.bind(oscar)(report);
                    offset = _closure2_slot3;
                    verify = _closure2_slot6;
                    report = _closure2_slot4;
                    entity = offset.bind(oscar)(verify, report);
 251:
                    _fun95973_ip = 508; continue _fun95973;
 256:
                    if(!(mike != tango)) { _fun95973_ip = 404; continue _fun95973 }
 263:
                    tango = _closure2_slot1;
                    mike = {};
                    offset = _closure1_slot0;
                    report = _closure1_slot2;
                    verify = 31;
                    yankee = report[verify];
                    yankee = offset.bind(oscar)(yankee);
                    yankee = yankee.PaymentFlowStep;
                    yankee = yankee.PLAN_SELECT;
                    mike['fromStep'] = yankee;
                    verify = report[verify];
                    verify = offset.bind(oscar)(verify);
                    verify = verify.PaymentFlowStep;
                    verify = verify.YEARLY_UPSELL;
                    mike['toStep'] = verify;
                    verify = _closure2_slot5;
                    mike['productId'] = verify;
                    mike = tango.bind(oscar)(mike);
                    tango = _closure1_slot1;
                    mike = 32;
                    mike = report[mike];
                    report = tango.bind(oscar)(mike);
                    tango = report.openLazy;
                    mike = {'importer': null, 'hideActionSheet': true, 'isDismissable': true};
                    options = function() { // Original name: importer
                        zulu = _closure1_slot0;
                        entity = _closure1_slot2;
                        mike = 34;
                        mike = entity[mike];
                        tango = undefined;
                        zulu = zulu.bind(tango)(mike);
                        mike = 33;
                        mike = entity[mike];
                        entity = entity.paths;
                        zulu = zulu.bind(tango)(mike, entity);
                        mike = zulu.then;
                        entity = function(argFoo) {
                            mike = argFoo;
                            mike = mike.default;
                            var _closure5_slot0 = mike;
                            entity = function(argFoo) {
                                tango = _closure1_slot24;
                                zulu = _closure5_slot0;
                                mike = {};
                                verify = argFoo;
                                offset = mike;
                                entity = copyDataProperties(offset, verify);
                                golf = _closure3_slot1;
                                entity = 'productId';
                                mike[entity] = golf;
                                options = _closure1_slot3;
                                entity = undefined;
                                golf = function* () {
                                    entity = function* () { // Original name: ?anon_0_
                                        _fun95978: for(var _fun95978_ip = 0; ; ) switch(_fun95978_ip) {
 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(mike) { _fun95978_ip = 99; continue _fun95978 }
 7:
                                            tango = _closure1_slot0;
                                            zulu = _closure1_slot2;
                                            mike = 31;
                                            mike = zulu[mike];
                                            zulu = undefined;
                                            tango = tango.bind(zulu)(mike);
                                            mike = tango.getNewAnalyticsLoadId;
                                            report = mike.bind(tango)();
                                            golf = _closure2_slot2;
                                            oscar = {};
                                            oscar['newFlowAnalyticsLoadId'] = report;
                                            tango = _closure3_slot1;
                                            oscar['productId'] = tango;
                                            oscar = golf.bind(zulu)(oscar);
                                            mike = _closure2_slot3;
                                            mike = mike.bind(zulu)(tango, report);
                                            SaveGenerator(address=87);
 85:
                                            return mike;
 87:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(tango) { _fun95978_ip = 96; continue _fun95978 }
 93:
                                            return zulu;
 96:
                                            return mike;
 99:
                                            return entity;
                                        }
                                    };
                                    return entity;
                                };
                                options = options.bind(entity)(golf);
                                golf = 'continueWithUpsell';
                                mike[golf] = options;
                                oscar = _closure1_slot3;
                                report = function* () {
                                    entity = function* () { // Original name: ?anon_0_
                                        _fun95980: for(var _fun95980_ip = 0; ; ) switch(_fun95980_ip) {
 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(mike) { _fun95980_ip = 134; continue _fun95980 }
 10:
                                            oscar = _closure2_slot1;
                                            tango = {};
                                            golf = _closure1_slot0;
                                            options = _closure1_slot2;
                                            report = 31;
                                            verify = options[report];
                                            zulu = undefined;
                                            verify = golf.bind(zulu)(verify);
                                            verify = verify.PaymentFlowStep;
                                            verify = verify.YEARLY_UPSELL;
                                            tango['fromStep'] = verify;
                                            report = options[report];
                                            report = golf.bind(zulu)(report);
                                            report = report.PaymentFlowStep;
                                            report = report.EXTERNAL_PAYMENT;
                                            tango['toStep'] = report;
                                            report = _closure3_slot0;
                                            tango['productId'] = report;
                                            tango = oscar.bind(zulu)(tango);
                                            tango = _closure2_slot3;
                                            mike = _closure2_slot4;
                                            mike = tango.bind(zulu)(report, mike);
                                            SaveGenerator(address=122);
 120:
                                            return mike;
 122:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(tango) { _fun95980_ip = 131; continue _fun95980 }
 128:
                                            return zulu;
 131:
                                            return mike;
 134:
                                            return entity;
                                        }
                                    };
                                    return entity;
                                };
                                oscar = oscar.bind(entity)(report);
                                report = 'continueWithDefault';
                                mike[report] = oscar;
                                entity = tango.bind(entity)(zulu, mike);
                                return entity;
                            };
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    mike['importer'] = options;
                    mike = tango.bind(report)(mike);
                    mike = undefined;
                    _fun95973_ip = 505; continue _fun95973;
 404:
                    report = _closure2_slot1;
                    tango = {};
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    golf = 31;
                    offset = verify[golf];
                    offset = options.bind(oscar)(offset);
                    offset = offset.PaymentFlowStep;
                    offset = offset.PLAN_SELECT;
                    tango['fromStep'] = offset;
                    golf = verify[golf];
                    golf = options.bind(oscar)(golf);
                    golf = golf.PaymentFlowStep;
                    golf = golf.EXTERNAL_PAYMENT;
                    tango['toStep'] = golf;
                    golf = _closure2_slot5;
                    tango['productId'] = golf;
                    tango = report.bind(oscar)(tango);
                    report = _closure2_slot3;
                    tango = _closure2_slot5;
                    zulu = _closure2_slot4;
                    mike = report.bind(oscar)(tango, zulu);
 505:
                    entity = mike;
 508:
                    return entity;
                }
            };
            report['purchase'] = verify;
            options = options.currentPlanRow;
            report['style'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 437:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: PlanSectionHeader
        entity = argFoo;
        report = entity.string;
        mike = _closure1_slot27;
        tango = undefined;
        oscar = mike.bind(tango)();
        zulu = _closure1_slot24;
        mike = _closure1_slot0;
        golf = _closure1_slot2;
        entity = 25;
        entity = golf[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.LegacyText;
        entity = {};
        oscar = oscar.header;
        entity['style'] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: PlanSections
        _fun95982: for(var _fun95982_ip = 0; ; ) switch(_fun95982_ip) {
 0:
            entity = argFoo;
            mike = entity.plans;
            var _closure2_slot0 = mike;
            kilo = entity.subscription;
            var _closure2_slot1 = kilo;
            offset = entity.showCurrentPlan;
            backup = entity.analyticsLoadId;
            var _closure2_slot2 = backup;
            romeo = entity.trackPaymentFlowStep;
            var _closure2_slot3 = romeo;
            yankee = entity.trackNewPaymentFlow;
            var _closure2_slot4 = yankee;
            foxtrot = entity.purchase;
            var _closure2_slot5 = foxtrot;
            tango = undefined;
            var _closure2_slot6 = tango;
            entity = _closure1_slot27;
            report = entity.bind(tango)();
            entity = null;
            mike = entity != kilo;
            if(!mike) { _fun95982_ip = 134; continue _fun95982 }
 97:
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 30;
            mike = options[mike];
            options = zulu.bind(tango)(mike);
            zulu = options.makeExternalPaymentGatewayPlanIdOrThrow;
            mike = kilo.paymentGatewayPlanId;
            entity = zulu.bind(options)(mike);
 134:
            _closure2_slot6 = entity;
            zulu = _closure1_slot25;
            mike = _closure1_slot8;
            entity = {};
            report = report.container;
            entity['style'] = report;
            verify = _closure1_slot24;
            options = _closure1_slot33;
            report = {};
            report['subscription'] = kilo;
            report['analyticsLoadId'] = backup;
            report['purchase'] = foxtrot;
            report['trackPaymentFlowStep'] = romeo;
            report['trackNewPaymentFlow'] = yankee;
            report['showCurrentPlan'] = offset;
            options = verify.bind(tango)(options, report);
            report = new Array(2);
            report[0] = options;
            options = _closure1_slot29;
            golf = options.map;
            oscar = function(argFoo) {
                _fun95983: for(var _fun95983_ip = 0; ; ) switch(_fun95983_ip) {
 0:
                    zulu = argFoo;
                    entity = zulu.getLabel;
                    zulu = zulu.predicate;
                    var _closure3_slot0 = zulu;
                    tango = _closure2_slot0;
                    zulu = tango.filter;
                    mike = function(argFoo) {
                        _fun95984: for(var _fun95984_ip = 0; ; ) switch(_fun95984_ip) {
 0:
                            mike = argFoo;
                            tango = mike.productId;
                            entity = _closure2_slot6;
                            entity = tango !== entity;
                            if(!entity) { _fun95984_ip = 73; continue _fun95984 }
 23:
                            oscar = _closure1_slot0;
                            report = _closure1_slot2;
                            tango = 30;
                            report = report[tango];
                            tango = undefined;
                            oscar = oscar.bind(tango)(report);
                            report = oscar.productsHaveSamePerks;
                            tango = mike.productId;
                            zulu = _closure2_slot6;
                            zulu = report.bind(oscar)(tango, zulu);
                            entity = !zulu;
 73:
                            if(!entity) { _fun95984_ip = 90; continue _fun95984 }
 76:
                            tango = _closure3_slot0;
                            zulu = undefined;
                            entity = tango.bind(zulu)(mike);
 90:
                            if(!entity) { _fun95984_ip = 116; continue _fun95984 }
 93:
                            zulu = mike.premiumTier;
                            mike = _closure1_slot16;
                            mike = mike.TIER_1;
                            entity = zulu !== mike;
 116:
                            return entity;
                        }
                    };
                    yankee = zulu.bind(tango)(mike);
                    zulu = yankee.length;
                    mike = 0;
                    if(!(mike !== zulu)) { _fun95983_ip = 189; continue _fun95983 }
 59:
                    report = undefined;
                    tango = entity.bind(report)();
                    zulu = _closure1_slot25;
                    mike = _closure1_slot8;
                    entity = {};
                    verify = _closure1_slot24;
                    options = _closure1_slot34;
                    oscar = {};
                    oscar['string'] = tango;
                    options = verify.bind(report)(options, oscar);
                    oscar = new Array(2);
                    oscar[0] = options;
                    verify = _closure1_slot24;
                    options = _closure1_slot32;
                    golf = {};
                    romeo = _closure2_slot3;
                    golf['trackPaymentFlowStep'] = romeo;
                    romeo = _closure2_slot4;
                    golf['trackNewPaymentFlow'] = romeo;
                    romeo = _closure2_slot2;
                    golf['analyticsLoadId'] = romeo;
                    golf['plans'] = yankee;
                    yankee = _closure2_slot5;
                    golf['purchase'] = yankee;
                    offset = _closure2_slot1;
                    golf['subscription'] = offset;
                    golf = verify.bind(report)(options, golf);
                    oscar[1] = golf;
                    entity['children'] = oscar;
                    entity = zulu.bind(report)(mike, entity, tango);
                    return entity;
 189:
                    entity = null;
                    return entity;
                }
            };
            oscar = golf.bind(options)(oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot35 = entity;
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
    tango = verify.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot5 = golf;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.ActivityIndicator;
    var _closure1_slot6 = options;
    options = tango.Image;
    var _closure1_slot7 = options;
    options = tango.View;
    var _closure1_slot8 = options;
    tango = tango.ScrollView;
    var _closure1_slot9 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = verify.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.setIsPurchasing;
    var _closure1_slot13 = options;
    tango = tango.usePremiumPlanSelectStore;
    var _closure1_slot14 = tango;
    foxtrot = 8;
    tango = oscar[foxtrot];
    tango = report.bind(entity)(tango);
    options = tango.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot15 = options;
    options = tango.PremiumTypes;
    var _closure1_slot16 = options;
    tango = tango.SubscriptionIntervalTypes;
    var _closure1_slot17 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.AnalyticEvents;
    var _closure1_slot18 = options;
    options = tango.AnalyticsObjects;
    var _closure1_slot19 = options;
    options = tango.AnalyticsObjectTypes;
    var _closure1_slot20 = options;
    sizing = tango.Fonts;
    options = tango.Gradients;
    var _closure1_slot21 = options;
    options = tango.HorizontalGradient;
    var _closure1_slot22 = options;
    options = tango.SubscriptionStatusTypes;
    var _closure1_slot23 = options;
    backup = tango.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    tango = 10;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot24 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot25 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot26 = tango;
    tango = 11;
    tango = oscar[tango];
    yankee = report.bind(entity)(tango);
    offset = yankee.createStyles;
    tango = {};
    options = {};
    romeo = 12;
    romeo = oscar[romeo];
    output = verify.bind(entity)(romeo);
    kilo = sizing.DISPLAY_EXTRABOLD;
    romeo = 24;
    update = output.bind(entity)(kilo, entity, romeo);
    source = options;
    romeo = copyDataProperties(source, update);
    output = 16;
    romeo = 'marginTop';
    options[romeo] = output;
    romeo = 13;
    kilo = oscar[romeo];
    kilo = report.bind(entity)(kilo);
    result = kilo.DARK_WHITE_500_LIGHT_BLACK_500;
    kilo = 'color';
    options[kilo] = result;
    tango['header'] = options;
    options = {'marginTop': 7, 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'paddingVertical': 12, 'paddingHorizontal': 12, 'flexWrap': 'wrap'};
    kilo = 14;
    result = oscar[kilo];
    result = verify.bind(entity)(result);
    result = result.radii;
    result = result.sm;
    options['borderRadius'] = result;
    result = oscar[romeo];
    result = report.bind(entity)(result);
    result = result.DARK_PRIMARY_630_LIGHT_PRIMARY_230;
    options['backgroundColor'] = result;
    tango['row'] = options;
    options = {'height': 40, 'width': 40};
    tango['imgWumpusNitro'] = options;
    options = {'height': 40, 'width': 40};
    tango['imgBoost'] = options;
    options = {'width': 32, 'height': 32};
    tango['imgWumpusNitroBoost'] = options;
    options = {'width': 40, 'height': 40};
    tango['imgWumpusNitroClassic'] = options;
    options = {'width': 32, 'height': 32};
    tango['imgWumpusNitroClassicBoost'] = options;
    options = {'width': 40, 'height': 40};
    tango['imgWumpusNitroTier0'] = options;
    options = {};
    options['fontSize'] = output;
    romeo = oscar[romeo];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.DARK_WHITE_500_LIGHT_BLACK_500;
    options['color'] = romeo;
    tango['rowText'] = options;
    romeo = {'marginLeft': 12, 'fontFamily': null, 'lineHeight': 20};
    options = sizing.PRIMARY_SEMIBOLD;
    romeo['fontFamily'] = options;
    options = 20;
    tango['rowPlanDescription'] = romeo;
    romeo = {'fontSize': 12, 'marginLeft': 5, 'fontFamily': null, 'fontWeight': '400'};
    sizing = sizing.PRIMARY_MEDIUM;
    romeo['fontFamily'] = sizing;
    tango['rowPlanDescriptionSubtext'] = romeo;
    romeo = {};
    sizing = 'auto';
    romeo['marginLeft'] = sizing;
    tango['rowPrice'] = romeo;
    romeo = {'marginHorizontal': 14.5, 'paddingBottom': 10};
    tango['container'] = romeo;
    romeo = {};
    romeo['marginTop'] = options;
    kilo = oscar[kilo];
    kilo = verify.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.sm;
    romeo['borderRadius'] = kilo;
    tango['currentPlanGradient'] = romeo;
    romeo = {'marginTop': 0.5, 'marginRight': 0.5, 'marginLeft': 0.5, 'marginBottom': 0.5};
    tango['currentPlanRow'] = romeo;
    romeo = {'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'height': '100%'};
    tango['loadingSpinnerContainer'] = romeo;
    romeo = {'lineHeight': 20, 'marginTop': 40};
    romeo['margin'] = backup;
    tango['offPlatformSubscriptionMessage'] = romeo;
    romeo = {};
    romeo['paddingHorizontal'] = backup;
    romeo['marginTop'] = foxtrot;
    tango['premiumHeaderLabel'] = romeo;
    tango = offset.bind(yankee)(tango);
    var _closure1_slot27 = tango;
    tango = {};
    options = oscar[options];
    offset = verify.bind(entity)(options);
    options = 'imgWumpusNitro';
    tango[offset] = options;
    options = 22;
    options = oscar[options];
    offset = verify.bind(entity)(options);
    options = 'imgWumpusNitroBoost';
    tango[offset] = options;
    options = 19;
    options = oscar[options];
    offset = verify.bind(entity)(options);
    options = 'imgWumpusNitroClassic';
    tango[offset] = options;
    options = 21;
    options = oscar[options];
    offset = verify.bind(entity)(options);
    options = 'imgWumpusNitroClassicBoost';
    tango[offset] = options;
    options = 18;
    options = oscar[options];
    offset = verify.bind(entity)(options);
    options = 'imgWumpusNitroTier0';
    tango[offset] = options;
    options = 17;
    options = oscar[options];
    verify = verify.bind(entity)(options);
    options = 'imgBoost';
    tango[verify] = options;
    var _closure1_slot28 = tango;
    options = {};
    tango = function() { // Original name: getLabel
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 15;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.A4BfLi;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options['getLabel'] = tango;
    tango = function(argFoo) { // Original name: predicate
        _fun95986: for(var _fun95986_ip = 0; ; ) switch(_fun95986_ip) {
 0:
            mike = argFoo;
            zulu = mike.premiumTier;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun95986_ip = 30; continue _fun95986 }
 18:
            zulu = mike.numPremiumGuild;
            mike = 0;
            entity = mike === zulu;
 30:
            return entity;
        }
    };
    options['predicate'] = tango;
    tango = new Array(3);
    tango[0] = options;
    options = {};
    verify = function() { // Original name: getLabel
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 15;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.lyXyDw;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options['getLabel'] = verify;
    verify = function(argFoo) { // Original name: predicate
        _fun95988: for(var _fun95988_ip = 0; ; ) switch(_fun95988_ip) {
 0:
            mike = argFoo;
            zulu = mike.premiumTier;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun95988_ip = 30; continue _fun95988 }
 18:
            zulu = mike.numPremiumGuild;
            mike = 0;
            entity = mike !== zulu;
 30:
            return entity;
        }
    };
    options['predicate'] = verify;
    tango[1] = options;
    options = {};
    verify = function() { // Original name: getLabel
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 15;
        mike = oscar[entity];
        tango = undefined;
        mike = report.bind(tango)(mike);
        zulu = mike.intl;
        mike = zulu.string;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        entity = entity.t;
        entity = entity.rPoOQU;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options['getLabel'] = verify;
    verify = function(argFoo) { // Original name: predicate
        _fun95990: for(var _fun95990_ip = 0; ; ) switch(_fun95990_ip) {
 0:
            mike = argFoo;
            zulu = mike.premiumTier;
            entity = null;
            entity = entity == zulu;
            if(!entity) { _fun95990_ip = 30; continue _fun95990 }
 18:
            zulu = mike.numPremiumGuild;
            mike = 0;
            entity = mike !== zulu;
 30:
            return entity;
        }
    };
    options['predicate'] = verify;
    tango[2] = options;
    var _closure1_slot29 = tango;
    tango = golf.forwardRef;
    mike = function(argFoo, argBar) { // Original name: PremiumPlanSelect
        _fun95991: for(var _fun95991_ip = 0; ; ) switch(_fun95991_ip) {
 0:
            entity = argFoo;
            verify = argBar;
            echo = entity.predicate;
            sizing = entity.showCurrentPlan;
            golf = undefined;
            if(!(sizing === golf)) { _fun95991_ip = 28; continue _fun95991 }
 26:
            sizing = true;
 28:
            output = entity.analyticsLocation;
            yankee = entity.planId;
            entity = entity.applicationId;
            var _closure2_slot0 = entity;
            var _closure2_slot1 = golf;
            var _closure2_slot2 = golf;
            var _closure2_slot3 = golf;
            var _closure2_slot4 = golf;
            var _closure2_slot5 = golf;
            entity = _closure1_slot27;
            result = entity.bind(golf)();
            foxtrot = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 36;
            entity = offset[entity];
            entity = foxtrot.bind(golf)(entity);
            entity = entity.bind(golf)();
            source = entity.analyticsLocations;
            oscar = _closure1_slot0;
            entity = 23;
            mike = offset[entity];
            report = oscar.bind(golf)(mike);
            tango = report.useStateFromStoresArray;
            mike = _closure1_slot11;
            zulu = new Array(2);
            zulu[0] = mike;
            mike = _closure1_slot10;
            zulu[1] = mike;
            mike = function() {
                zulu = _closure1_slot11;
                entity = zulu.hasFetchedSubscriptions;
                zulu = entity.bind(zulu)();
                entity = new Array(2);
                entity[0] = zulu;
                zulu = _closure1_slot10;
                mike = zulu.isLoadedForPremiumSKUs;
                mike = mike.bind(zulu)();
                entity[1] = mike;
                return entity;
            };
            tango = tango.bind(report)(zulu, mike);
            zulu = _closure1_slot4;
            mike = 2;
            mike = zulu.bind(golf)(tango, mike);
            report = 0;
            tango = mike[report];
            _closure2_slot1 = tango;
            romeo = 1;
            mike = mike[romeo];
            _closure2_slot2 = mike;
            control = _closure1_slot5;
            update = control.useEffect;
            kilo = new Array(1);
            kilo[0] = mike;
            zulu = function() {
                _fun95993: for(var _fun95993_ip = 0; ; ) switch(_fun95993_ip) {
 0:
                    entity = _closure2_slot2;
                    if(entity) { _fun95993_ip = 45; continue _fun95993 }
 10:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 37;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.fetchPremiumSubscriptionPlans;
                    entity = entity.bind(mike)();
 45:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = update.bind(control)(zulu, kilo);
            update = control.useEffect;
            kilo = new Array(1);
            kilo[0] = tango;
            zulu = function() {
                _fun95994: for(var _fun95994_ip = 0; ; ) switch(_fun95994_ip) {
 0:
                    entity = _closure2_slot1;
                    if(entity) { _fun95994_ip = 45; continue _fun95994 }
 10:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 38;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.fetchSubscriptions;
                    entity = entity.bind(mike)();
 45:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = update.bind(control)(zulu, kilo);
            zulu = 39;
            zulu = offset[zulu];
            foxtrot = foxtrot.bind(golf)(zulu);
            zulu = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 31;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.getNewAnalyticsLoadId;
                entity = entity.bind(mike)();
                return entity;
            };
            kilo = foxtrot.bind(golf)(zulu);
            zulu = 31;
            zulu = offset[zulu];
            offset = oscar.bind(golf)(zulu);
            oscar = offset.getBasePurchaseFlowAnalyticsFields;
            zulu = {};
            zulu['analyticsLoadId'] = kilo;
            foxtrot = {};
            update = _closure1_slot19;
            update = update.BUTTON_CTA;
            foxtrot['object'] = update;
            update = _closure1_slot20;
            update = update.BUY;
            foxtrot['object_type'] = update;
            status = foxtrot;
            target = output;
            output = copyDataProperties(status, target);
            zulu['analyticsLocation'] = foxtrot;
            zulu['analyticsLocations'] = source;
            zulu = oscar.bind(offset)(zulu);
            _closure2_slot3 = zulu;
            oscar = null;
            if(!(oscar == yankee)) { _fun95991_ip = 375; continue _fun95991 }
 371:
            zulu = {};
            _fun95991_ip = 385; continue _fun95991;
 375:
            offset = {};
            offset['subscription_plan_id'] = yankee;
            zulu = offset;
 385:
            _closure2_slot4 = zulu;
            zulu = _closure1_slot1;
            foxtrot = _closure1_slot2;
            offset = 40;
            yankee = foxtrot[offset];
            output = zulu.bind(golf)(yankee);
            yankee = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 41;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.trackPaymentFlowStartedAnalyticsAndCTP;
                mike = {};
                golf = _closure2_slot3;
                options = mike;
                oscar = copyDataProperties(options, golf);
                golf = _closure2_slot4;
                options = mike;
                oscar = copyDataProperties(options, golf);
                oscar = _closure2_slot0;
                report = 'application_id';
                mike[report] = oscar;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            yankee = output.bind(golf)(yankee);
            yankee = _closure1_slot0;
            entity = foxtrot[entity];
            control = yankee.bind(golf)(entity);
            update = control.useStateFromStores;
            entity = _closure1_slot11;
            output = new Array(1);
            output[0] = entity;
            entity = function() {
                mike = _closure1_slot11;
                entity = mike.getPremiumTypeSubscription;
                entity = entity.bind(mike)();
                return entity;
            };
            output = update.bind(control)(output, entity);
            entity = 42;
            entity = foxtrot[entity];
            update = yankee.bind(golf)(entity);
            entity = update.useHandlePremiumPurchase;
            entity = entity.bind(update)();
            _closure2_slot5 = entity;
            entity = 43;
            entity = foxtrot[entity];
            control = zulu.bind(golf)(entity);
            update = control.useExperiment;
            zulu = {};
            entity = 'dd3e49_2';
            zulu['location'] = entity;
            entity = {};
            vacuum = false;
            entity['autoTrackExposure'] = vacuum;
            entity = update.bind(control)(zulu, entity);
            zulu = entity.paymentsBlocked;
            entity = 44;
            entity = foxtrot[entity];
            foxtrot = yankee.bind(golf)(entity);
            yankee = foxtrot.useSubscriptionInvoicePreview;
            if(!(oscar == output)) { _fun95991_ip = 567; continue _fun95991 }
 563:
            entity = {};
            _fun95991_ip = 625; continue _fun95991;
 567:
            update = {};
            control = output.id;
            update['subscriptionId'] = control;
            control = true;
            update['renewal'] = control;
            update['analyticsLocations'] = source;
            control = _closure1_slot1;
            vacuum = _closure1_slot2;
            source = 45;
            source = vacuum[source];
            source = control.bind(golf)(source);
            source = source.PREMIUM_PLAN_SELECT;
            update['analyticsLocation'] = source;
            entity = update;
 625:
            yankee = yankee.bind(foxtrot)(entity);
            entity = _closure1_slot4;
            entity = entity.bind(golf)(yankee, romeo);
            sequence = entity[report];
            report = oscar == echo;
            entity = null;
            if(report) { _fun95991_ip = 1338; continue _fun95991 }
 656:
            if(!tango) { _fun95991_ip = 662; continue _fun95991 }
 659:
            if(mike) { _fun95991_ip = 725; continue _fun95991 }
 662:
            report = _closure1_slot24;
            tango = _closure1_slot8;
            mike = {};
            yankee = result.loadingSpinnerContainer;
            mike['style'] = yankee;
            foxtrot = _closure1_slot24;
            romeo = _closure1_slot6;
            yankee = {'animating': true, 'size': 'large'};
            yankee = foxtrot.bind(golf)(romeo, yankee);
            mike['children'] = yankee;
            mike = report.bind(golf)(tango, mike);
            _fun95991_ip = 1335; continue _fun95991;
 725:
            if(zulu) { _fun95991_ip = 1265; continue _fun95991 }
 731:
            if(!(oscar != output)) { _fun95991_ip = 1132; continue _fun95991 }
 738:
            zulu = output.isOnPlatformMatchingExternalPaymentGateway;
            if(!zulu) { _fun95991_ip = 819; continue _fun95991 }
 747:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 30;
            tango = romeo[zulu];
            report = yankee.bind(golf)(tango);
            tango = report.isValidBundleProductId;
            zulu = romeo[zulu];
            romeo = yankee.bind(golf)(zulu);
            yankee = romeo.makeExternalPaymentGatewayPlanIdOrThrow;
            foxtrot = oscar == output;
            zulu = undefined;
            if(foxtrot) { _fun95991_ip = 803; continue _fun95991 }
 797:
            zulu = output.paymentGatewayPlanId;
 803:
            zulu = yankee.bind(romeo)(zulu);
            zulu = tango.bind(report)(zulu);
            if(zulu) { _fun95991_ip = 1132; continue _fun95991 }
 819:
            report = _closure1_slot25;
            tango = _closure1_slot9;
            zulu = {};
            yankee = oscar != sequence;
            if(!yankee) { _fun95991_ip = 1023; continue _fun95991 }
 839:
            foxtrot = _closure1_slot25;
            romeo = _closure1_slot26;
            oscar = {};
            vacuum = _closure1_slot24;
            control = _closure1_slot0;
            config = _closure1_slot2;
            update = 47;
            update = config[update];
            update = control.bind(golf)(update);
            source = update.Text;
            update = {'style': null, 'variant': 'eyebrow', 'color': 'header-secondary'};
            record = result.premiumHeaderLabel;
            update['style'] = record;
            record = 15;
            context = config[record];
            context = control.bind(golf)(context);
            papa = context.intl;
            context = papa.string;
            record = config[record];
            record = control.bind(golf)(record);
            record = record.t;
            record = record.ITurwc;
            record = context.bind(papa)(record);
            update['children'] = record;
            source = vacuum.bind(golf)(source, update);
            update = new Array(2);
            update[0] = source;
            vacuum = _closure1_slot24;
            source = 48;
            source = config[source];
            source = control.bind(golf)(source);
            control = source.PremiumSubscriptionHeader;
            source = {};
            source['subscription'] = output;
            source['renewalInvoicePreview'] = sequence;
            source = vacuum.bind(golf)(control, source);
            update[1] = source;
            oscar['children'] = update;
            yankee = foxtrot.bind(golf)(romeo, oscar);
 1023:
            oscar = new Array(2);
            oscar[0] = yankee;
            foxtrot = _closure1_slot24;
            update = _closure1_slot0;
            source = _closure1_slot2;
            yankee = 47;
            yankee = source[yankee];
            yankee = update.bind(golf)(yankee);
            romeo = yankee.Text;
            yankee = {};
            result = result.offPlatformSubscriptionMessage;
            yankee['style'] = result;
            result = 'text-md/semibold';
            yankee['variant'] = result;
            result = 49;
            result = source[result];
            update = update.bind(golf)(result);
            result = update.getExternalManagementMessage;
            result = result.bind(update)(output);
            yankee['children'] = result;
            yankee = foxtrot.bind(golf)(romeo, yankee);
            oscar[1] = yankee;
            zulu['children'] = oscar;
            zulu = report.bind(golf)(tango, zulu);
            _fun95991_ip = 1263; continue _fun95991;
 1132:
            oscar = _closure1_slot24;
            report = _closure1_slot9;
            tango = {};
            tango['ref'] = verify;
            foxtrot = _closure1_slot24;
            romeo = _closure1_slot35;
            yankee = {};
            yankee['subscription'] = output;
            result = _closure1_slot0;
            update = _closure1_slot2;
            output = 30;
            output = update[output];
            result = result.bind(golf)(output);
            output = result.getPremiumBundlesWithPredicate;
            output = output.bind(result)(echo);
            yankee['plans'] = output;
            yankee['showCurrentPlan'] = sizing;
            yankee['analyticsLoadId'] = kilo;
            kilo = function(argFoo) { // Original name: trackPaymentFlowStep
                entity = argFoo;
                offset = entity.productId;
                romeo = entity.fromStep;
                yankee = entity.toStep;
                zulu = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 50;
                mike = verify[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.track;
                mike = _closure1_slot18;
                zulu = mike.PAYMENT_FLOW_STEP;
                mike = {};
                options = _closure2_slot0;
                mike['application_id'] = options;
                options = _closure1_slot0;
                golf = 31;
                golf = verify[golf];
                verify = options.bind(entity)(golf);
                options = verify.getPaymentFlowStepAnalyticsFields;
                golf = _closure2_slot3;
                oscar = {};
                oscar['from_step'] = romeo;
                oscar['to_step'] = yankee;
                oscar['subscription_plan_gateway_plan_id'] = offset;
                foxtrot = options.bind(verify)(golf, oscar);
                backup = mike;
                oscar = copyDataProperties(backup, foxtrot);
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            yankee['trackPaymentFlowStep'] = kilo;
            kilo = function(argFoo) { // Original name: trackNewPaymentFlow
                entity = argFoo;
                golf = entity.newFlowAnalyticsLoadId;
                options = entity.productId;
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 41;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.trackPaymentFlowStartedAnalyticsAndCTP;
                mike = {};
                verify = _closure2_slot3;
                offset = mike;
                oscar = copyDataProperties(offset, verify);
                oscar = 'subscription_plan_gateway_plan_id';
                mike[oscar] = options;
                oscar = 'load_id';
                mike[oscar] = golf;
                oscar = _closure2_slot0;
                report = 'application_id';
                mike[report] = oscar;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            yankee['trackNewPaymentFlow'] = kilo;
            backup = function() {
                tango = _closure1_slot3;
                zulu = undefined;
                mike = function* (argFoo, argBar) {
                    entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                        _fun96002: for(var _fun96002_ip = 0; ; ) switch(_fun96002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun96002_ip = 300; continue _fun96002 }
 10:
                            options = argFoo;
                            golf = argBar;
                            report = _closure1_slot13;
                            mike = undefined;
                            tango = true;
                            tango = report.bind(mike)(tango);
 32: // try_start_0
                            report = _closure2_slot5;
                            tango = {};
                            tango['productId'] = options;
                            options = _closure2_slot3;
                            options = options.location;
                            tango['analyticsLocation'] = options;
                            tango['analyticsLoadId'] = golf;
                            oscar = _closure2_slot0;
                            tango['applicationId'] = oscar;
                            tango = report.bind(mike)(tango);
                            SaveGenerator(address=82);
 80:
                            return tango;
 82:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(report) { _fun96002_ip = 93; continue _fun96002 }
 88: // try_end0
                            _fun96002_ip = 286; continue _fun96002;
 93:
                            return tango;
 96: // catch_target0
                            CatchBlockStart(arg_register=4);
                            oscar = _closure1_slot1;
                            golf = _closure1_slot2;
                            tango = 51;
                            tango = golf[tango];
                            tango = oscar.bind(mike)(tango);
                            tango = report instanceof tango;
                            if(!tango) { _fun96002_ip = 286; continue _fun96002 }
 128:
                            offset = _closure1_slot0;
                            yankee = _closure1_slot2;
                            tango = 38;
                            tango = yankee[tango];
                            report = offset.bind(mike)(tango);
                            tango = report.fetchSubscriptions;
                            tango = tango.bind(report)();
                            report = _closure1_slot1;
                            tango = 32;
                            tango = yankee[tango];
                            oscar = report.bind(mike)(tango);
                            report = oscar.show;
                            tango = {};
                            golf = 15;
                            options = yankee[golf];
                            options = offset.bind(mike)(options);
                            romeo = options.intl;
                            verify = romeo.string;
                            options = yankee[golf];
                            options = offset.bind(mike)(options);
                            options = options.t;
                            options = options.U+H+kZ;
                            options = verify.bind(romeo)(options);
                            tango['title'] = options;
                            options = yankee[golf];
                            options = offset.bind(mike)(options);
                            verify = options.intl;
                            options = verify.string;
                            golf = yankee[golf];
                            golf = offset.bind(mike)(golf);
                            golf = golf.t;
                            golf = golf.yyDkbG;
                            golf = options.bind(verify)(golf);
                            tango['body'] = golf;
                            tango = report.bind(oscar)(tango);
 286:
                            tango = _closure1_slot13;
                            zulu = false;
                            zulu = tango.bind(mike)(zulu);
                            return mike;
 300:
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
            backup = backup.bind(golf)();
            yankee['purchase'] = backup;
            yankee = foxtrot.bind(golf)(romeo, yankee);
            tango['children'] = yankee;
            zulu = oscar.bind(golf)(report, tango);
 1263:
            _fun95991_ip = 1332; continue _fun95991;
 1265:
            oscar = _closure1_slot24;
            report = _closure1_slot9;
            tango = {};
            tango['ref'] = verify;
            verify = {};
            verify['top'] = offset;
            tango['contentInset'] = verify;
            offset = _closure1_slot24;
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            options = 46;
            options = yankee[options];
            verify = verify.bind(golf)(options);
            options = {};
            options = offset.bind(golf)(verify, options);
            tango['children'] = options;
            zulu = oscar.bind(golf)(report, tango);
 1332:
            mike = zulu;
 1335:
            entity = mike;
 1338:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 52;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/native/PremiumPlanSelect.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();