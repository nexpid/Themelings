// app/modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = function(argFoo) { // Original name: HeaderStatus
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = entity.isCancelled;
            mike = entity.isTrial;
            entity = entity.isPastDue;
            tango = _closure1_slot15;
            report = undefined;
            golf = tango.bind(report)();
            if(zulu) { _fun00002_ip = 194; continue _fun00001 }
 40:
            if(mike) { _fun00002_ip = 127; continue _fun00001 }
 43:
            verify = '';
            options = undefined;
            yankee = true;
            if(!entity) { _fun00002_ip = 259; continue _fun00001 }
 57:
            tango = _closure1_slot0;
            offset = _closure1_slot3;
            entity = 9;
            mike = offset[entity];
            mike = tango.bind(report)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = offset[entity];
            entity = tango.bind(report)(entity);
            entity = entity.t;
            entity = entity.uENdgY;
            verify = mike.bind(zulu)(entity);
            options = golf.headerStatusPastDue;
            yankee = false;
            _fun00002_ip = 259; continue _fun00001;
 127:
            tango = _closure1_slot0;
            offset = _closure1_slot3;
            entity = 9;
            mike = offset[entity];
            mike = tango.bind(report)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = offset[entity];
            entity = tango.bind(report)(entity);
            entity = entity.t;
            entity = entity.6antoq;
            verify = mike.bind(zulu)(entity);
            options = golf.headerStatusTrial;
            yankee = true;
            _fun00002_ip = 259; continue _fun00001;
 194:
            tango = _closure1_slot0;
            offset = _closure1_slot3;
            entity = 9;
            mike = offset[entity];
            mike = tango.bind(report)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = offset[entity];
            entity = tango.bind(report)(entity);
            entity = entity.t;
            entity = entity.7uFZGh;
            verify = mike.bind(zulu)(entity);
            options = golf.headerStatusCancel;
            yankee = true;
 259:
            mike = '';
            entity = null;
            if(!(mike !== verify)) { _fun00002_ip = 377; continue _fun00001 }
 269:
            tango = _closure1_slot12;
            zulu = _closure1_slot7;
            mike = {};
            offset = golf.headerStatusContainer;
            golf = new Array(2);
            golf[0] = offset;
            golf[1] = options;
            mike['style'] = golf;
            options = _closure1_slot12;
            golf = _closure1_slot0;
            offset = _closure1_slot3;
            oscar = 10;
            oscar = offset[oscar];
            oscar = golf.bind(report)(oscar);
            golf = oscar.Text;
            oscar = {};
            offset = 'text-xs/semibold';
            oscar['variant'] = offset;
            offset = 'black';
            if(!yankee) { _fun00002_ip = 353; continue _fun00001 }
 349:
            offset = 'white';
 353:
            oscar['color'] = offset;
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 377:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: Header
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            sizing = entity.expanded;
            control = entity.guild;
            offset = entity.isCancelled;
            verify = entity.isTrial;
            options = entity.isPastDue;
            config = entity.listing;
            report = entity.onToggleExpanded;
            entity = _closure1_slot15;
            tango = undefined;
            output = entity.bind(tango)();
            zulu = _closure1_slot13;
            result = _closure1_slot0;
            update = _closure1_slot3;
            entity = 11;
            entity = update[entity];
            entity = result.bind(tango)(entity);
            mike = entity.PressableHighlight;
            entity = {};
            oscar = output.header;
            entity['style'] = oscar;
            entity['onPress'] = report;
            golf = _closure1_slot12;
            oscar = _closure1_slot16;
            report = {};
            report['isCancelled'] = offset;
            report['isTrial'] = verify;
            report['isPastDue'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot13;
            golf = _closure1_slot7;
            oscar = {};
            verify = output.headerContent;
            oscar['style'] = verify;
            yankee = _closure1_slot12;
            source = _closure1_slot1;
            verify = 12;
            verify = update[verify];
            offset = source.bind(tango)(verify);
            verify = {};
            verify['guild'] = control;
            offset = yankee.bind(tango)(offset, verify);
            verify = new Array(3);
            verify[0] = offset;
            romeo = _closure1_slot13;
            yankee = _closure1_slot7;
            offset = {};
            foxtrot = output.headerTitlesContainer;
            offset['style'] = foxtrot;
            vacuum = _closure1_slot12;
            backup = 10;
            foxtrot = update[backup];
            foxtrot = result.bind(tango)(foxtrot);
            echo = foxtrot.Text;
            foxtrot = {'ellipsizeMode': 'tail', 'lineClamp': 2, 'variant': 'text-md/semibold', 'color': 'interactive-active'};
            sequence = 2;
            config = config.name;
            foxtrot['children'] = config;
            echo = vacuum.bind(tango)(echo, foxtrot);
            foxtrot = new Array(3);
            foxtrot[0] = echo;
            vacuum = _closure1_slot12;
            echo = 13;
            echo = update[echo];
            source = source.bind(tango)(echo);
            echo = {};
            echo['size'] = sequence;
            echo = vacuum.bind(tango)(source, echo);
            foxtrot[1] = echo;
            echo = _closure1_slot12;
            backup = update[backup];
            backup = result.bind(tango)(backup);
            result = backup.Text;
            backup = {'variant': 'text-sm/medium', 'color': 'interactive-normal'};
            source = null;
            vacuum = source == control;
            update = undefined;
            if(vacuum) { _fun00004_ip = 362; continue _fun00003 }
 357:
            update = control.name;
 362:
            if(!(source == update)) { _fun00004_ip = 423; continue _fun00003 }
 366:
            sequence = _closure1_slot0;
            config = _closure1_slot3;
            source = 9;
            control = config[source];
            control = sequence.bind(tango)(control);
            vacuum = control.intl;
            control = vacuum.string;
            source = config[source];
            source = sequence.bind(tango)(source);
            source = source.t;
            source = source.He+cmZ;
            update = control.bind(vacuum)(source);
 423:
            backup['children'] = update;
            backup = echo.bind(tango)(result, backup);
            foxtrot[2] = backup;
            offset['children'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            verify[1] = offset;
            romeo = _closure1_slot12;
            yankee = _closure1_slot1;
            offset = _closure1_slot3;
            foxtrot = 14;
            offset = offset[foxtrot];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            result = output.expandIcon;
            backup = new Array(2);
            backup[0] = result;
            if(!sizing) { _fun00004_ip = 500; continue _fun00003 }
 494:
            sizing = output.expandIconExpanded;
 500:
            backup[1] = sizing;
            offset['style'] = backup;
            backup = _closure1_slot1;
            kilo = _closure1_slot3;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.Sizes;
            foxtrot = foxtrot.MEDIUM;
            offset['size'] = foxtrot;
            foxtrot = 15;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            offset['source'] = foxtrot;
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
    var _closure1_slot17 = entity;
    entity = function() { // Original name: Separator
        mike = _closure1_slot15;
        tango = undefined;
        report = mike.bind(tango)();
        zulu = _closure1_slot12;
        mike = _closure1_slot1;
        oscar = _closure1_slot3;
        entity = 16;
        entity = oscar[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        report = report.separator;
        entity['style'] = report;
        report = true;
        entity['withoutMargins'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: CardBody
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            output = mike.isCancelled;
            romeo = mike.isTrial;
            var _closure2_slot0 = romeo;
            report = mike.isPastDue;
            foxtrot = mike.memberSince;
            kilo = mike.nextRenewalDate;
            sizing = mike.nextRenewalLabel;
            result = mike.onCancelSubscription;
            entity = mike.subscription;
            var _closure2_slot1 = entity;
            verify = mike.subscriptionPrice;
            mike = mike.guildId;
            var _closure2_slot2 = mike;
            mike = _closure1_slot15;
            tango = undefined;
            update = mike.bind(tango)();
            var _closure2_slot3 = update;
            mike = _closure1_slot1;
            zulu = _closure1_slot3;
            oscar = 20;
            oscar = zulu[oscar];
            golf = mike.bind(tango)(oscar);
            oscar = golf.useResubscribeSubscription;
            entity = entity.id;
            entity = oscar.bind(golf)(entity);
            oscar = entity.resubscribeSubscription;
            var _closure2_slot4 = oscar;
            sequence = entity.nativePaymentsConnected;
            golf = _closure1_slot6;
            oscar = golf.useState;
            entity = false;
            golf = oscar.bind(golf)(entity);
            oscar = _closure1_slot5;
            entity = 2;
            oscar = oscar.bind(tango)(golf, entity);
            entity = 0;
            vacuum = oscar[entity];
            entity = 1;
            entity = oscar[entity];
            var _closure2_slot5 = entity;
            entity = 21;
            entity = zulu[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.bind(tango)();
            entity = entity.analyticsLocations;
            var _closure2_slot6 = entity;
            entity = function() {
                tango = _closure1_slot4;
                zulu = undefined;
                mike = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun00008_ip = 372; continue _fun00007 }
 10:
                            mike = undefined;
                            zulu = undefined;
                            oscar = _closure2_slot1;
                            report = null;
                            report = report == oscar;
                            golf = undefined;
                            if(report) { _fun00008_ip = 42; continue _fun00007 }
 32:
                            report = _closure2_slot1;
                            golf = report.paymentGateway;
 42:
                            report = _closure1_slot8;
                            report = report.APPLE_PARTNER;
                            zulu = golf === report;
                            report = _closure2_slot0;
                            if(report) { _fun00008_ip = 223; continue _fun00007 }
 69: // try_start_0
                            golf = _closure2_slot5;
                            report = true;
                            report = golf.bind(mike)(report);
                            if(zulu) { _fun00008_ip = 147; continue _fun00007 }
 83:
                            report = _closure1_slot2;
                            golf = _closure1_slot3;
                            zulu = 22;
                            zulu = golf[zulu];
                            options = report.bind(mike)(zulu);
                            golf = options.resubscribeToSubscription;
                            report = _closure2_slot1;
                            zulu = _closure2_slot6;
                            zulu = golf.bind(options)(report, zulu);
                            SaveGenerator(address=127);
 125:
                            return zulu;
 127:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(!report) { _fun00008_ip = 165; continue _fun00007 }
 133: // try_end0
                            golf = _closure2_slot5;
                            report = false;
                            report = golf.bind(mike)(report);
                            return zulu;
 147: // try_start_1
                            zulu = _closure2_slot4;
                            zulu = zulu.bind(mike)();
                            SaveGenerator(address=159);
 157:
                            return zulu;
 159:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(report) { _fun00008_ip = 194; continue _fun00007 }
 165:
                            report = function() { // Original name: openResubsribedAlert
                                zulu = _closure1_slot1;
                                mike = _closure1_slot3;
                                entity = 17;
                                mike = mike[entity];
                                entity = undefined;
                                tango = zulu.bind(entity)(mike);
                                zulu = tango.openLazy;
                                mike = {};
                                report = function() { // Original name: importer
                                    zulu = _closure1_slot0;
                                    entity = _closure1_slot3;
                                    mike = 19;
                                    mike = entity[mike];
                                    tango = undefined;
                                    zulu = zulu.bind(tango)(mike);
                                    mike = 18;
                                    mike = entity[mike];
                                    entity = entity.paths;
                                    zulu = zulu.bind(tango)(mike, entity);
                                    mike = zulu.then;
                                    entity = function(argFoo) {
                                        mike = argFoo;
                                        mike = mike.default;
                                        var _closure8_slot0 = mike;
                                        entity = function(argFoo) {
                                            tango = _closure1_slot12;
                                            zulu = _closure8_slot0;
                                            mike = {};
                                            report = argFoo;
                                            oscar = mike;
                                            entity = copyDataProperties(oscar, report);
                                            entity = undefined;
                                            entity = tango.bind(entity)(zulu, mike);
                                            return entity;
                                        };
                                        return entity;
                                    };
                                    entity = mike.bind(zulu)(entity);
                                    return entity;
                                };
                                mike['importer'] = report;
                                mike = zulu.bind(tango)(mike);
                                return entity;
                            };
                            report = report.bind(mike)();
 178: // try_end1
                            golf = _closure2_slot5;
                            report = false;
                            report = golf.bind(mike)(report);
                            _fun00008_ip = 369; continue _fun00007;
 194:
                            golf = _closure2_slot5;
                            report = false;
                            report = golf.bind(mike)(report);
                            return zulu;
 208: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=2);
                            report = _closure2_slot5;
                            tango = false;
                            tango = report.bind(mike)(tango);
                            throw zulu;
 223:
                            tango = _closure1_slot1;
                            offset = _closure1_slot3;
                            zulu = 17;
                            zulu = offset[zulu];
                            report = tango.bind(mike)(zulu);
                            tango = report.show;
                            zulu = {};
                            verify = _closure1_slot0;
                            oscar = 9;
                            golf = offset[oscar];
                            golf = verify.bind(mike)(golf);
                            yankee = golf.intl;
                            options = yankee.string;
                            golf = offset[oscar];
                            golf = verify.bind(mike)(golf);
                            golf = golf.t;
                            golf = golf.NL7DFh;
                            golf = options.bind(yankee)(golf);
                            zulu['body'] = golf;
                            golf = offset[oscar];
                            golf = verify.bind(mike)(golf);
                            options = golf.intl;
                            golf = options.string;
                            oscar = offset[oscar];
                            oscar = verify.bind(mike)(oscar);
                            oscar = oscar.t;
                            oscar = oscar.NX+WJC;
                            oscar = golf.bind(options)(oscar);
                            zulu['confirmText'] = oscar;
                            oscar = true;
                            zulu['isDismissable'] = oscar;
                            zulu = tango.bind(report)(zulu);
 369:
                            return mike;
 372:
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
            config = entity.bind(tango)();
            zulu = _closure1_slot13;
            mike = _closure1_slot7;
            entity = {};
            oscar = update.cardContent;
            entity['style'] = oscar;
            oscar = null;
            if(!report) { _fun00006_ip = 555; continue _fun00005 }
 258:
            options = _closure1_slot13;
            golf = _closure1_slot14;
            report = {};
            echo = _closure1_slot7;
            offset = {};
            yankee = update.paymentOverDueWarning;
            offset['style'] = yankee;
            papa = _closure1_slot12;
            backup = _closure1_slot1;
            source = _closure1_slot3;
            yankee = 23;
            yankee = source[yankee];
            control = backup.bind(tango)(yankee);
            yankee = {'color': null, 'width': 16, 'height': 16};
            sierra = 8;
            target = source[sierra];
            target = backup.bind(tango)(target);
            target = target.unsafe_rawColors;
            target = target.YELLOW_300;
            yankee['color'] = target;
            yankee = papa.bind(tango)(control, yankee);
            control = new Array(3);
            control[0] = yankee;
            status = _closure1_slot12;
            yankee = 13;
            papa = source[yankee];
            target = backup.bind(tango)(papa);
            papa = {};
            papa['size'] = sierra;
            papa = status.bind(tango)(target, papa);
            control[1] = papa;
            status = _closure1_slot12;
            equality = _closure1_slot0;
            papa = 10;
            papa = source[papa];
            papa = equality.bind(tango)(papa);
            target = papa.Text;
            papa = {'variant': 'text-sm/medium', 'color': 'interactive-active'};
            sierra = 9;
            lima = source[sierra];
            lima = equality.bind(tango)(lima);
            whiskey = lima.intl;
            lima = whiskey.string;
            sierra = source[sierra];
            sierra = equality.bind(tango)(sierra);
            sierra = sierra.t;
            sierra = sierra.eaqlam;
            sierra = lima.bind(whiskey)(sierra);
            papa['children'] = sierra;
            papa = status.bind(tango)(target, papa);
            control[2] = papa;
            offset['children'] = control;
            echo = options.bind(tango)(echo, offset);
            offset = new Array(2);
            offset[0] = echo;
            echo = _closure1_slot12;
            yankee = source[yankee];
            backup = backup.bind(tango)(yankee);
            yankee = {};
            source = 12;
            yankee['size'] = source;
            yankee = echo.bind(tango)(backup, yankee);
            offset[1] = yankee;
            report['children'] = offset;
            oscar = options.bind(tango)(golf, report);
 555:
            report = new Array(5);
            report[0] = oscar;
            options = _closure1_slot12;
            golf = _closure1_slot1;
            yankee = _closure1_slot3;
            offset = 24;
            oscar = yankee[offset];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            source = _closure1_slot0;
            status = 9;
            backup = yankee[status];
            backup = source.bind(tango)(backup);
            echo = backup.intl;
            backup = echo.string;
            yankee = yankee[status];
            yankee = source.bind(tango)(yankee);
            yankee = yankee.t;
            yankee = yankee.dltUMD;
            yankee = backup.bind(echo)(yankee);
            oscar['title'] = yankee;
            yankee = undefined;
            if(!romeo) { _fun00006_ip = 671; continue _fun00005 }
 651:
            echo = _closure1_slot1;
            source = _closure1_slot3;
            backup = 25;
            backup = source[backup];
            yankee = echo.bind(tango)(backup);
 671:
            oscar['icon'] = yankee;
            yankee = undefined;
            if(!romeo) { _fun00006_ip = 706; continue _fun00005 }
 680:
            backup = _closure1_slot0;
            echo = _closure1_slot3;
            romeo = 26;
            romeo = echo[romeo];
            romeo = backup.bind(tango)(romeo);
            yankee = romeo.presentGuildRoleSubscriptionTrialTierMonthCost;
 706:
            oscar['onPressIcon'] = yankee;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            options = _closure1_slot12;
            source = _closure1_slot1;
            papa = _closure1_slot3;
            yankee = 13;
            oscar = papa[yankee];
            golf = source.bind(tango)(oscar);
            oscar = {};
            verify = 16;
            oscar['size'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            options = _closure1_slot13;
            golf = _closure1_slot7;
            oscar = {};
            verify = update.cardRow;
            oscar['style'] = verify;
            backup = _closure1_slot12;
            verify = papa[offset];
            romeo = source.bind(tango)(verify);
            verify = {};
            verify['title'] = sizing;
            verify['children'] = kilo;
            romeo = backup.bind(tango)(romeo, verify);
            verify = new Array(3);
            verify[0] = romeo;
            backup = _closure1_slot12;
            yankee = papa[yankee];
            romeo = source.bind(tango)(yankee);
            yankee = {};
            kilo = 8;
            yankee['size'] = kilo;
            yankee = backup.bind(tango)(romeo, yankee);
            verify[1] = yankee;
            romeo = _closure1_slot12;
            offset = papa[offset];
            yankee = source.bind(tango)(offset);
            offset = {};
            lima = _closure1_slot0;
            backup = papa[status];
            backup = lima.bind(tango)(backup);
            sizing = backup.intl;
            kilo = sizing.string;
            backup = papa[status];
            backup = lima.bind(tango)(backup);
            backup = backup.t;
            backup = backup.AOcwWF;
            backup = kilo.bind(sizing)(backup);
            offset['title'] = backup;
            offset['children'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            verify[2] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[3] = oscar;
            options = _closure1_slot12;
            oscar = 27;
            oscar = papa[oscar];
            oscar = lima.bind(tango)(oscar);
            golf = oscar.FormSection;
            oscar = {};
            verify = true;
            oscar['inset'] = verify;
            verify = update.manageSection;
            oscar['titleViewStyle'] = verify;
            verify = papa[status];
            verify = lima.bind(tango)(verify);
            yankee = verify.intl;
            offset = yankee.string;
            verify = papa[status];
            verify = lima.bind(tango)(verify);
            verify = verify.t;
            verify = verify.4neDMz;
            verify = offset.bind(yankee)(verify);
            oscar['title'] = verify;
            yankee = _closure1_slot12;
            offset = _closure1_slot7;
            verify = {};
            romeo = update.buttonsContainer;
            verify['style'] = romeo;
            backup = _closure1_slot13;
            romeo = 28;
            romeo = papa[romeo];
            romeo = lima.bind(tango)(romeo);
            foxtrot = romeo.GappedList;
            romeo = {};
            kilo = function() { // Original name: renderGap
                tango = _closure1_slot12;
                zulu = _closure1_slot7;
                mike = {};
                entity = _closure2_slot3;
                entity = entity.buttonDivider;
                mike['style'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            romeo['renderGap'] = kilo;
            control = _closure1_slot12;
            sizing = 29;
            kilo = papa[sizing];
            echo = source.bind(tango)(kilo);
            kilo = {};
            target = papa[status];
            target = lima.bind(tango)(target);
            whiskey = target.intl;
            sierra = whiskey.string;
            target = papa[status];
            target = lima.bind(tango)(target);
            target = target.t;
            target = target.7spYfn;
            target = sierra.bind(whiskey)(target);
            kilo['text'] = target;
            target = function() { // Original name: onPress
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun00010_ip = 271; continue _fun00009 }
 16:
                    mike = _closure2_slot1;
                    zulu = mike.paymentGateway;
                    mike = _closure1_slot8;
                    mike = mike.APPLE_PARTNER;
                    if(!(zulu !== mike)) { _fun00010_ip = 196; continue _fun00009 }
 46:
                    zulu = _closure1_slot1;
                    yankee = _closure1_slot3;
                    mike = 17;
                    mike = yankee[mike];
                    offset = undefined;
                    report = zulu.bind(offset)(mike);
                    zulu = report.show;
                    mike = {};
                    verify = _closure1_slot0;
                    oscar = 9;
                    golf = yankee[oscar];
                    golf = verify.bind(offset)(golf);
                    romeo = golf.intl;
                    options = romeo.string;
                    golf = yankee[oscar];
                    golf = verify.bind(offset)(golf);
                    golf = golf.t;
                    golf = golf.fmm9jo;
                    golf = options.bind(romeo)(golf);
                    mike['body'] = golf;
                    golf = yankee[oscar];
                    golf = verify.bind(offset)(golf);
                    options = golf.intl;
                    golf = options.string;
                    oscar = yankee[oscar];
                    oscar = verify.bind(offset)(oscar);
                    oscar = oscar.t;
                    oscar = oscar.NX+WJC;
                    oscar = golf.bind(options)(oscar);
                    mike['confirmText'] = oscar;
                    oscar = true;
                    mike['isDismissable'] = oscar;
                    mike = zulu.bind(report)(mike);
                    _fun00010_ip = 271; continue _fun00009;
 196:
                    zulu = _closure1_slot1;
                    golf = _closure1_slot3;
                    mike = 30;
                    mike = golf[mike];
                    oscar = undefined;
                    zulu = zulu.bind(oscar)(mike);
                    mike = zulu.openURL;
                    report = _closure1_slot0;
                    tango = 31;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.getExternalSubscriptionMethodUrl;
                    entity = _closure2_slot1;
                    tango = entity.paymentGateway;
                    entity = 'PAYMENT_SOURCE_MANAGEMENT';
                    entity = report.bind(oscar)(tango, entity);
                    entity = mike.bind(zulu)(entity);
 271:
                    entity = undefined;
                    return entity;
                }
            };
            kilo['onPress'] = target;
            echo = control.bind(tango)(echo, kilo);
            kilo = new Array(3);
            kilo[0] = echo;
            control = _closure1_slot12;
            echo = papa[sizing];
            source = source.bind(tango)(echo);
            echo = {};
            target = papa[status];
            target = lima.bind(tango)(target);
            sierra = target.intl;
            target = sierra.string;
            papa = papa[status];
            papa = lima.bind(tango)(papa);
            papa = papa.t;
            papa = papa.FRbWR0;
            papa = target.bind(sierra)(papa);
            echo['text'] = papa;
            record = function() { // Original name: onPress
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 32;
                zulu = zulu[entity];
                entity = undefined;
                tango = tango.bind(entity)(zulu);
                zulu = tango.transitionTo;
                golf = _closure1_slot9;
                oscar = golf.CHANNEL;
                report = _closure2_slot2;
                mike = _closure1_slot11;
                mike = mike.ROLE_SUBSCRIPTIONS;
                mike = oscar.bind(golf)(report, mike);
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            echo['onPress'] = record;
            echo = control.bind(tango)(source, echo);
            kilo[1] = echo;
            echo = _closure1_slot12;
            if(output) { _fun00006_ip = 1376; continue _fun00005 }
 1288:
            output = _closure1_slot1;
            source = _closure1_slot3;
            sizing = source[sizing];
            output = output.bind(tango)(sizing);
            sizing = {};
            papa = _closure1_slot0;
            control = source[status];
            control = papa.bind(tango)(control);
            record = control.intl;
            control = record.string;
            source = source[status];
            source = papa.bind(tango)(source);
            source = source.t;
            source = source.Dx0lFx;
            source = control.bind(record)(source);
            sizing['text'] = source;
            sizing['onPress'] = result;
            sizing = echo.bind(tango)(output, sizing);
            _fun00006_ip = 1503; continue _fun00005;
 1376:
            result = _closure1_slot7;
            output = {};
            update = update.resubscribeButtonContainer;
            output['style'] = update;
            control = _closure1_slot12;
            source = _closure1_slot1;
            record = _closure1_slot3;
            update = 33;
            update = record[update];
            source = source.bind(tango)(update);
            update = {};
            target = _closure1_slot0;
            context = record[status];
            context = target.bind(tango)(context);
            papa = context.intl;
            context = papa.string;
            record = record[status];
            record = target.bind(tango)(record);
            record = record.t;
            record = record.iIvF29;
            record = context.bind(papa)(record);
            update['text'] = record;
            update['onPress'] = config;
            if(vacuum) { _fun00006_ip = 1482; continue _fun00005 }
 1479:
            vacuum = !sequence;
 1482:
            update['loading'] = vacuum;
            update = control.bind(tango)(source, update);
            output['children'] = update;
            sizing = echo.bind(tango)(result, output);
 1503:
            kilo[2] = sizing;
            romeo['children'] = kilo;
            romeo = backup.bind(tango)(foxtrot, romeo);
            verify['children'] = romeo;
            verify = yankee.bind(tango)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[4] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = yankee.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.PaymentGateways;
    var _closure1_slot8 = golf;
    golf = tango.Routes;
    var _closure1_slot9 = golf;
    tango = tango.UserSettingsSections;
    var _closure1_slot10 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StaticChannelRoute;
    var _closure1_slot11 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot12 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot13 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot14 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 8;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    verify['borderRadius'] = romeo;
    tango['container'] = verify;
    verify = {};
    romeo = 16;
    verify['padding'] = romeo;
    tango['cardContent'] = verify;
    verify = {};
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_SECONDARY_ALT;
    verify['backgroundColor'] = foxtrot;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    verify['borderRadius'] = foxtrot;
    foxtrot = 'hidden';
    verify['overflow'] = foxtrot;
    tango['buttonsContainer'] = verify;
    verify = {'width': '100%', 'borderBottomWidth': 1, 'borderColor': null, 'marginLeft': 16, 'marginTop': 4294967295};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MODIFIER_ACCENT;
    verify['borderColor'] = backup;
    tango['buttonDivider'] = verify;
    verify = {};
    verify['padding'] = romeo;
    tango['resubscribeButtonContainer'] = verify;
    verify = {};
    verify['paddingHorizontal'] = romeo;
    tango['separator'] = verify;
    verify = {};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    verify['borderRadius'] = backup;
    verify['overflow'] = foxtrot;
    tango['header'] = verify;
    foxtrot = 'row';
    verify = {'padding': 16, 'alignItems': 'center', 'flexDirection': 'row'};
    tango['headerContent'] = verify;
    verify = {'alignSelf': 'stretch', 'flexGrow': 1, 'flexShrink': 1, 'paddingHorizontal': 16};
    tango['headerTitlesContainer'] = verify;
    verify = {};
    backup = oscar[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.INTERACTIVE_NORMAL;
    verify['tintColor'] = backup;
    tango['expandIcon'] = verify;
    verify = {};
    kilo = {};
    backup = '180deg';
    kilo['rotate'] = backup;
    backup = new Array(1);
    backup[0] = kilo;
    verify['transform'] = backup;
    tango['expandIconExpanded'] = verify;
    verify = {};
    verify['flexDirection'] = foxtrot;
    tango['cardRow'] = verify;
    verify = {};
    verify['paddingTop'] = romeo;
    tango['manageSection'] = verify;
    verify = {'flexDirection': 'row', 'width': '90%'};
    tango['paymentOverDueWarning'] = verify;
    verify = {'paddingVertical': 4, 'paddingHorizontal': 18, 'flexDirection': 'row', 'alignItems': 'center'};
    tango['headerStatusContainer'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.STATUS_DANGER;
    verify['backgroundColor'] = romeo;
    tango['headerStatusCancel'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_BRAND;
    verify['backgroundColor'] = romeo;
    tango['headerStatusTrial'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.STATUS_WARNING;
    verify['backgroundColor'] = offset;
    tango['headerStatusPastDue'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot15 = tango;
    tango = 36;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ManageSubscriptionCard
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            output = entity.subscription;
            var _closure2_slot0 = output;
            entity = _closure1_slot15;
            report = undefined;
            oscar = entity.bind(report)();
            mike = _closure1_slot1;
            tango = _closure1_slot3;
            entity = 34;
            entity = tango[entity];
            entity = mike.bind(report)(entity);
            mike = entity.bind(report)(output);
            yankee = mike.listing;
            entity = mike.groupListing;
            sizing = mike.guild;
            golf = mike.expanded;
            offset = mike.handleToggleExpanded;
            echo = mike.subscriptionInfo;
            zulu = _closure1_slot0;
            mike = 35;
            mike = tango[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.useNavigation;
            mike = mike.bind(zulu)();
            var _closure2_slot1 = mike;
            result = null;
            mike = result == entity;
            entity = null;
            if(mike) { _fun00012_ip = 395; continue _fun00011 }
 132:
            mike = result == yankee;
            entity = null;
            if(mike) { _fun00012_ip = 395; continue _fun00011 }
 144:
            mike = result == echo;
            entity = null;
            if(mike) { _fun00012_ip = 395; continue _fun00011 }
 156:
            tango = _closure1_slot13;
            zulu = _closure1_slot7;
            mike = {};
            oscar = oscar.container;
            mike['style'] = oscar;
            verify = _closure1_slot12;
            options = _closure1_slot17;
            oscar = {};
            oscar['expanded'] = golf;
            oscar['guild'] = sizing;
            foxtrot = echo.isCancelled;
            oscar['isCancelled'] = foxtrot;
            foxtrot = echo.isTrial;
            oscar['isTrial'] = foxtrot;
            foxtrot = echo.isPastDue;
            oscar['isPastDue'] = foxtrot;
            oscar['listing'] = yankee;
            oscar['onToggleExpanded'] = offset;
            options = verify.bind(report)(options, oscar);
            oscar = new Array(2);
            oscar[0] = options;
            if(!golf) { _fun00012_ip = 381; continue _fun00011 }
 257:
            offset = _closure1_slot13;
            verify = _closure1_slot14;
            options = {};
            backup = _closure1_slot12;
            foxtrot = _closure1_slot18;
            yankee = {};
            foxtrot = backup.bind(report)(foxtrot, yankee);
            yankee = new Array(2);
            yankee[0] = foxtrot;
            backup = _closure1_slot12;
            foxtrot = _closure1_slot19;
            romeo = {};
            source = romeo;
            update = echo;
            echo = copyDataProperties(source, update);
            echo = result == sizing;
            result = undefined;
            if(echo) { _fun00012_ip = 325; continue _fun00011 }
 320:
            result = sizing.id;
 325:
            sizing = 'guildId';
            romeo[sizing] = result;
            sizing = 'subscription';
            romeo[sizing] = output;
            sizing = function() { // Original name: onCancelSubscription
                tango = _closure2_slot1;
                zulu = tango.push;
                entity = _closure1_slot10;
                mike = entity.GUILD_ROLE_SUBSCRIPTIONS_CANCEL;
                entity = {};
                report = _closure2_slot0;
                report = report.id;
                entity['subscriptionId'] = report;
                report = function() { // Original name: onClose
                    mike = _closure2_slot1;
                    entity = mike.pop;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity['onClose'] = report;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            kilo = 'onCancelSubscription';
            romeo[kilo] = sizing;
            romeo = backup.bind(report)(foxtrot, romeo);
            yankee[1] = romeo;
            options['children'] = yankee;
            golf = offset.bind(report)(verify, options);
 381:
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 395:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();