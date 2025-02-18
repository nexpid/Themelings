// app/modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = function(argFoo) { // Original name: HeaderStatus
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.isCancelled;
            michal = entity.isTrial;
            entity = entity.isPastDue;
            tangon = _closure1_slot15;
            report = undefined;
            golfie = tangon.bind(report)();
            if(zuuluu) { _fun00002_ip = 194; continue _fun00001 }
 40:
            if(michal) { _fun00002_ip = 127; continue _fun00001 }
 43:
            verify = '';
            option = undefined;
            yankee = true;
            if(!entity) { _fun00002_ip = 259; continue _fun00001 }
 57:
            tangon = _closure1_slot0;
            offset = _closure1_slot3;
            entity = 9;
            michal = offset[entity];
            michal = tangon.bind(report)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = offset[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.t;
            entity = entity.uENdgY;
            verify = michal.bind(zuuluu)(entity);
            option = golfie.headerStatusPastDue;
            yankee = false;
            _fun00002_ip = 259; continue _fun00001;
 127:
            tangon = _closure1_slot0;
            offset = _closure1_slot3;
            entity = 9;
            michal = offset[entity];
            michal = tangon.bind(report)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = offset[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.t;
            entity = entity.6antoq;
            verify = michal.bind(zuuluu)(entity);
            option = golfie.headerStatusTrial;
            yankee = true;
            _fun00002_ip = 259; continue _fun00001;
 194:
            tangon = _closure1_slot0;
            offset = _closure1_slot3;
            entity = 9;
            michal = offset[entity];
            michal = tangon.bind(report)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = offset[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.t;
            entity = entity.7uFZGh;
            verify = michal.bind(zuuluu)(entity);
            option = golfie.headerStatusCancel;
            yankee = true;
 259:
            michal = '';
            entity = null;
            if(!(michal !== verify)) { _fun00002_ip = 377; continue _fun00001 }
 269:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot7;
            michal = {};
            offset = golfie.headerStatusContainer;
            golfie = new Array(2);
            golfie[0] = offset;
            golfie[1] = option;
            michal['style'] = golfie;
            option = _closure1_slot12;
            golfie = _closure1_slot0;
            offset = _closure1_slot3;
            oscard = 10;
            oscard = offset[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.Text;
            oscard = {};
            offset = 'text-xs/semibold';
            oscard['variant'] = offset;
            offset = 'black';
            if(!yankee) { _fun00002_ip = 353; continue _fun00001 }
 349:
            offset = 'white';
 353:
            oscard['color'] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
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
            ctrled = entity.guild;
            offset = entity.isCancelled;
            verify = entity.isTrial;
            option = entity.isPastDue;
            config = entity.listing;
            report = entity.onToggleExpanded;
            entity = _closure1_slot15;
            tangon = undefined;
            output = entity.bind(tangon)();
            zuuluu = _closure1_slot13;
            result = _closure1_slot0;
            update = _closure1_slot3;
            entity = 11;
            entity = update[entity];
            entity = result.bind(tangon)(entity);
            michal = entity.PressableHighlight;
            entity = {};
            oscard = output.header;
            entity['style'] = oscard;
            entity['onPress'] = report;
            golfie = _closure1_slot12;
            oscard = _closure1_slot16;
            report = {};
            report['isCancelled'] = offset;
            report['isTrial'] = verify;
            report['isPastDue'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot13;
            golfie = _closure1_slot7;
            oscard = {};
            verify = output.headerContent;
            oscard['style'] = verify;
            yankee = _closure1_slot12;
            source = _closure1_slot1;
            verify = 12;
            verify = update[verify];
            offset = source.bind(tangon)(verify);
            verify = {};
            verify['guild'] = ctrled;
            offset = yankee.bind(tangon)(offset, verify);
            verify = new Array(3);
            verify[0] = offset;
            romeon = _closure1_slot13;
            yankee = _closure1_slot7;
            offset = {};
            foxtra = output.headerTitlesContainer;
            offset['style'] = foxtra;
            vacuum = _closure1_slot12;
            backup = 10;
            foxtra = update[backup];
            foxtra = result.bind(tangon)(foxtra);
            echoed = foxtra.Text;
            foxtra = {'ellipsizeMode': 'tail', 'lineClamp': 2, 'variant': 'text-md/semibold', 'color': 'interactive-active'};
            sequen = 2;
            config = config.name;
            foxtra['children'] = config;
            echoed = vacuum.bind(tangon)(echoed, foxtra);
            foxtra = new Array(3);
            foxtra[0] = echoed;
            vacuum = _closure1_slot12;
            echoed = 13;
            echoed = update[echoed];
            source = source.bind(tangon)(echoed);
            echoed = {};
            echoed['size'] = sequen;
            echoed = vacuum.bind(tangon)(source, echoed);
            foxtra[1] = echoed;
            echoed = _closure1_slot12;
            backup = update[backup];
            backup = result.bind(tangon)(backup);
            result = backup.Text;
            backup = {'variant': 'text-sm/medium', 'color': 'interactive-normal'};
            source = null;
            vacuum = source == ctrled;
            update = undefined;
            if(vacuum) { _fun00004_ip = 362; continue _fun00003 }
 357:
            update = ctrled.name;
 362:
            if(!(source == update)) { _fun00004_ip = 423; continue _fun00003 }
 366:
            sequen = _closure1_slot0;
            config = _closure1_slot3;
            source = 9;
            ctrled = config[source];
            ctrled = sequen.bind(tangon)(ctrled);
            vacuum = ctrled.intl;
            ctrled = vacuum.string;
            source = config[source];
            source = sequen.bind(tangon)(source);
            source = source.t;
            source = source.He+cmZ;
            update = ctrled.bind(vacuum)(source);
 423:
            backup['children'] = update;
            backup = echoed.bind(tangon)(result, backup);
            foxtra[2] = backup;
            offset['children'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            verify[1] = offset;
            romeon = _closure1_slot12;
            yankee = _closure1_slot1;
            offset = _closure1_slot3;
            foxtra = 14;
            offset = offset[foxtra];
            yankee = yankee.bind(tangon)(offset);
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
            kiloes = _closure1_slot3;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.Sizes;
            foxtra = foxtra.MEDIUM;
            offset['size'] = foxtra;
            foxtra = 15;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(tangon)(foxtra);
            offset['source'] = foxtra;
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
    var _closure1_slot17 = entity;
    entity = function() { // Original name: Separator
        michal = _closure1_slot15;
        tangon = undefined;
        report = michal.bind(tangon)();
        zuuluu = _closure1_slot12;
        michal = _closure1_slot1;
        oscard = _closure1_slot3;
        entity = 16;
        entity = oscard[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        report = report.separator;
        entity['style'] = report;
        report = true;
        entity['withoutMargins'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: CardBody
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            output = michal.isCancelled;
            romeon = michal.isTrial;
            var _closure2_slot0 = romeon;
            report = michal.isPastDue;
            foxtra = michal.memberSince;
            kiloes = michal.nextRenewalDate;
            sizing = michal.nextRenewalLabel;
            result = michal.onCancelSubscription;
            entity = michal.subscription;
            var _closure2_slot1 = entity;
            verify = michal.subscriptionPrice;
            michal = michal.guildId;
            var _closure2_slot2 = michal;
            michal = _closure1_slot15;
            tangon = undefined;
            update = michal.bind(tangon)();
            var _closure2_slot3 = update;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot3;
            oscard = 20;
            oscard = zuuluu[oscard];
            golfie = michal.bind(tangon)(oscard);
            oscard = golfie.useResubscribeSubscription;
            entity = entity.id;
            entity = oscard.bind(golfie)(entity);
            oscard = entity.resubscribeSubscription;
            var _closure2_slot4 = oscard;
            sequen = entity.nativePaymentsConnected;
            golfie = _closure1_slot6;
            oscard = golfie.useState;
            entity = false;
            golfie = oscard.bind(golfie)(entity);
            oscard = _closure1_slot5;
            entity = 2;
            oscard = oscard.bind(tangon)(golfie, entity);
            entity = 0;
            vacuum = oscard[entity];
            entity = 1;
            entity = oscard[entity];
            var _closure2_slot5 = entity;
            entity = 21;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            entity = entity.analyticsLocations;
            var _closure2_slot6 = entity;
            entity = function() {
                tangon = _closure1_slot4;
                zuuluu = undefined;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00008_ip = 372; continue _fun00007 }
 10:
                            michal = undefined;
                            zuuluu = undefined;
                            oscard = _closure2_slot1;
                            report = null;
                            report = report == oscard;
                            golfie = undefined;
                            if(report) { _fun00008_ip = 42; continue _fun00007 }
 32:
                            report = _closure2_slot1;
                            golfie = report.paymentGateway;
 42:
                            report = _closure1_slot8;
                            report = report.APPLE_PARTNER;
                            zuuluu = golfie === report;
                            report = _closure2_slot0;
                            if(report) { _fun00008_ip = 223; continue _fun00007 }
 69: // try_start_0
                            golfie = _closure2_slot5;
                            report = true;
                            report = golfie.bind(michal)(report);
                            if(zuuluu) { _fun00008_ip = 147; continue _fun00007 }
 83:
                            report = _closure1_slot2;
                            golfie = _closure1_slot3;
                            zuuluu = 22;
                            zuuluu = golfie[zuuluu];
                            option = report.bind(michal)(zuuluu);
                            golfie = option.resubscribeToSubscription;
                            report = _closure2_slot1;
                            zuuluu = _closure2_slot6;
                            zuuluu = golfie.bind(option)(report, zuuluu);
                            SaveGenerator(address=127);
 125:
                            return zuuluu;
 127:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(!report) { _fun00008_ip = 165; continue _fun00007 }
 133: // try_end0
                            golfie = _closure2_slot5;
                            report = false;
                            report = golfie.bind(michal)(report);
                            return zuuluu;
 147: // try_start_1
                            zuuluu = _closure2_slot4;
                            zuuluu = zuuluu.bind(michal)();
                            SaveGenerator(address=159);
 157:
                            return zuuluu;
 159:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                            if(report) { _fun00008_ip = 194; continue _fun00007 }
 165:
                            report = function() { // Original name: openResubsribedAlert
                                zuuluu = _closure1_slot1;
                                michal = _closure1_slot3;
                                entity = 17;
                                michal = michal[entity];
                                entity = undefined;
                                tangon = zuuluu.bind(entity)(michal);
                                zuuluu = tangon.openLazy;
                                michal = {};
                                report = function() { // Original name: importer
                                    zuuluu = _closure1_slot0;
                                    entity = _closure1_slot3;
                                    michal = 19;
                                    michal = entity[michal];
                                    tangon = undefined;
                                    zuuluu = zuuluu.bind(tangon)(michal);
                                    michal = 18;
                                    michal = entity[michal];
                                    entity = entity.paths;
                                    zuuluu = zuuluu.bind(tangon)(michal, entity);
                                    michal = zuuluu.then;
                                    entity = function(argFoo) {
                                        michal = argFoo;
                                        michal = michal.default;
                                        var _closure8_slot0 = michal;
                                        entity = function(argFoo) {
                                            tangon = _closure1_slot12;
                                            zuuluu = _closure8_slot0;
                                            michal = {};
                                            report = argFoo;
                                            oscard = michal;
                                            entity = copyDataProperties(oscard, report);
                                            entity = undefined;
                                            entity = tangon.bind(entity)(zuuluu, michal);
                                            return entity;
                                        };
                                        return entity;
                                    };
                                    entity = michal.bind(zuuluu)(entity);
                                    return entity;
                                };
                                michal['importer'] = report;
                                michal = zuuluu.bind(tangon)(michal);
                                return entity;
                            };
                            report = report.bind(michal)();
 178: // try_end1
                            golfie = _closure2_slot5;
                            report = false;
                            report = golfie.bind(michal)(report);
                            _fun00008_ip = 369; continue _fun00007;
 194:
                            golfie = _closure2_slot5;
                            report = false;
                            report = golfie.bind(michal)(report);
                            return zuuluu;
 208: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=2);
                            report = _closure2_slot5;
                            tangon = false;
                            tangon = report.bind(michal)(tangon);
                            throw zuuluu;
 223:
                            tangon = _closure1_slot1;
                            offset = _closure1_slot3;
                            zuuluu = 17;
                            zuuluu = offset[zuuluu];
                            report = tangon.bind(michal)(zuuluu);
                            tangon = report.show;
                            zuuluu = {};
                            verify = _closure1_slot0;
                            oscard = 9;
                            golfie = offset[oscard];
                            golfie = verify.bind(michal)(golfie);
                            yankee = golfie.intl;
                            option = yankee.string;
                            golfie = offset[oscard];
                            golfie = verify.bind(michal)(golfie);
                            golfie = golfie.t;
                            golfie = golfie.NL7DFh;
                            golfie = option.bind(yankee)(golfie);
                            zuuluu['body'] = golfie;
                            golfie = offset[oscard];
                            golfie = verify.bind(michal)(golfie);
                            option = golfie.intl;
                            golfie = option.string;
                            oscard = offset[oscard];
                            oscard = verify.bind(michal)(oscard);
                            oscard = oscard.t;
                            oscard = oscard.NX+WJC;
                            oscard = golfie.bind(option)(oscard);
                            zuuluu['confirmText'] = oscard;
                            oscard = true;
                            zuuluu['isDismissable'] = oscard;
                            zuuluu = tangon.bind(report)(zuuluu);
 369:
                            return michal;
 372:
                            return entity;
                        }
                    };
                    return entity;
                };
                michal = tangon.bind(zuuluu)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    entity = undefined;
                    tangon = _closure3_slot0;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                return entity;
            };
            config = entity.bind(tangon)();
            zuuluu = _closure1_slot13;
            michal = _closure1_slot7;
            entity = {};
            oscard = update.cardContent;
            entity['style'] = oscard;
            oscard = null;
            if(!report) { _fun00006_ip = 555; continue _fun00005 }
 258:
            option = _closure1_slot13;
            golfie = _closure1_slot14;
            report = {};
            echoed = _closure1_slot7;
            offset = {};
            yankee = update.paymentOverDueWarning;
            offset['style'] = yankee;
            papara = _closure1_slot12;
            backup = _closure1_slot1;
            source = _closure1_slot3;
            yankee = 23;
            yankee = source[yankee];
            ctrled = backup.bind(tangon)(yankee);
            yankee = {'color': null, 'width': 16, 'height': 16};
            sierra = 8;
            target = source[sierra];
            target = backup.bind(tangon)(target);
            target = target.unsafe_rawColors;
            target = target.YELLOW_300;
            yankee['color'] = target;
            yankee = papara.bind(tangon)(ctrled, yankee);
            ctrled = new Array(3);
            ctrled[0] = yankee;
            status = _closure1_slot12;
            yankee = 13;
            papara = source[yankee];
            target = backup.bind(tangon)(papara);
            papara = {};
            papara['size'] = sierra;
            papara = status.bind(tangon)(target, papara);
            ctrled[1] = papara;
            status = _closure1_slot12;
            equals = _closure1_slot0;
            papara = 10;
            papara = source[papara];
            papara = equals.bind(tangon)(papara);
            target = papara.Text;
            papara = {'variant': 'text-sm/medium', 'color': 'interactive-active'};
            sierra = 9;
            limora = source[sierra];
            limora = equals.bind(tangon)(limora);
            whisks = limora.intl;
            limora = whisks.string;
            sierra = source[sierra];
            sierra = equals.bind(tangon)(sierra);
            sierra = sierra.t;
            sierra = sierra.eaqlam;
            sierra = limora.bind(whisks)(sierra);
            papara['children'] = sierra;
            papara = status.bind(tangon)(target, papara);
            ctrled[2] = papara;
            offset['children'] = ctrled;
            echoed = option.bind(tangon)(echoed, offset);
            offset = new Array(2);
            offset[0] = echoed;
            echoed = _closure1_slot12;
            yankee = source[yankee];
            backup = backup.bind(tangon)(yankee);
            yankee = {};
            source = 12;
            yankee['size'] = source;
            yankee = echoed.bind(tangon)(backup, yankee);
            offset[1] = yankee;
            report['children'] = offset;
            oscard = option.bind(tangon)(golfie, report);
 555:
            report = new Array(5);
            report[0] = oscard;
            option = _closure1_slot12;
            golfie = _closure1_slot1;
            yankee = _closure1_slot3;
            offset = 24;
            oscard = yankee[offset];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            source = _closure1_slot0;
            status = 9;
            backup = yankee[status];
            backup = source.bind(tangon)(backup);
            echoed = backup.intl;
            backup = echoed.string;
            yankee = yankee[status];
            yankee = source.bind(tangon)(yankee);
            yankee = yankee.t;
            yankee = yankee.dltUMD;
            yankee = backup.bind(echoed)(yankee);
            oscard['title'] = yankee;
            yankee = undefined;
            if(!romeon) { _fun00006_ip = 671; continue _fun00005 }
 651:
            echoed = _closure1_slot1;
            source = _closure1_slot3;
            backup = 25;
            backup = source[backup];
            yankee = echoed.bind(tangon)(backup);
 671:
            oscard['icon'] = yankee;
            yankee = undefined;
            if(!romeon) { _fun00006_ip = 706; continue _fun00005 }
 680:
            backup = _closure1_slot0;
            echoed = _closure1_slot3;
            romeon = 26;
            romeon = echoed[romeon];
            romeon = backup.bind(tangon)(romeon);
            yankee = romeon.presentGuildRoleSubscriptionTrialTierMonthCost;
 706:
            oscard['onPressIcon'] = yankee;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            option = _closure1_slot12;
            source = _closure1_slot1;
            papara = _closure1_slot3;
            yankee = 13;
            oscard = papara[yankee];
            golfie = source.bind(tangon)(oscard);
            oscard = {};
            verify = 16;
            oscard['size'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            option = _closure1_slot13;
            golfie = _closure1_slot7;
            oscard = {};
            verify = update.cardRow;
            oscard['style'] = verify;
            backup = _closure1_slot12;
            verify = papara[offset];
            romeon = source.bind(tangon)(verify);
            verify = {};
            verify['title'] = sizing;
            verify['children'] = kiloes;
            romeon = backup.bind(tangon)(romeon, verify);
            verify = new Array(3);
            verify[0] = romeon;
            backup = _closure1_slot12;
            yankee = papara[yankee];
            romeon = source.bind(tangon)(yankee);
            yankee = {};
            kiloes = 8;
            yankee['size'] = kiloes;
            yankee = backup.bind(tangon)(romeon, yankee);
            verify[1] = yankee;
            romeon = _closure1_slot12;
            offset = papara[offset];
            yankee = source.bind(tangon)(offset);
            offset = {};
            limora = _closure1_slot0;
            backup = papara[status];
            backup = limora.bind(tangon)(backup);
            sizing = backup.intl;
            kiloes = sizing.string;
            backup = papara[status];
            backup = limora.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.AOcwWF;
            backup = kiloes.bind(sizing)(backup);
            offset['title'] = backup;
            offset['children'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            verify[2] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[3] = oscard;
            option = _closure1_slot12;
            oscard = 27;
            oscard = papara[oscard];
            oscard = limora.bind(tangon)(oscard);
            golfie = oscard.FormSection;
            oscard = {};
            verify = true;
            oscard['inset'] = verify;
            verify = update.manageSection;
            oscard['titleViewStyle'] = verify;
            verify = papara[status];
            verify = limora.bind(tangon)(verify);
            yankee = verify.intl;
            offset = yankee.string;
            verify = papara[status];
            verify = limora.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.4neDMz;
            verify = offset.bind(yankee)(verify);
            oscard['title'] = verify;
            yankee = _closure1_slot12;
            offset = _closure1_slot7;
            verify = {};
            romeon = update.buttonsContainer;
            verify['style'] = romeon;
            backup = _closure1_slot13;
            romeon = 28;
            romeon = papara[romeon];
            romeon = limora.bind(tangon)(romeon);
            foxtra = romeon.GappedList;
            romeon = {};
            kiloes = function() { // Original name: renderGap
                tangon = _closure1_slot12;
                zuuluu = _closure1_slot7;
                michal = {};
                entity = _closure2_slot3;
                entity = entity.buttonDivider;
                michal['style'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            romeon['renderGap'] = kiloes;
            ctrled = _closure1_slot12;
            sizing = 29;
            kiloes = papara[sizing];
            echoed = source.bind(tangon)(kiloes);
            kiloes = {};
            target = papara[status];
            target = limora.bind(tangon)(target);
            whisks = target.intl;
            sierra = whisks.string;
            target = papara[status];
            target = limora.bind(tangon)(target);
            target = target.t;
            target = target.7spYfn;
            target = sierra.bind(whisks)(target);
            kiloes['text'] = target;
            target = function() { // Original name: onPress
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00010_ip = 271; continue _fun00009 }
 16:
                    michal = _closure2_slot1;
                    zuuluu = michal.paymentGateway;
                    michal = _closure1_slot8;
                    michal = michal.APPLE_PARTNER;
                    if(!(zuuluu !== michal)) { _fun00010_ip = 196; continue _fun00009 }
 46:
                    zuuluu = _closure1_slot1;
                    yankee = _closure1_slot3;
                    michal = 17;
                    michal = yankee[michal];
                    offset = undefined;
                    report = zuuluu.bind(offset)(michal);
                    zuuluu = report.show;
                    michal = {};
                    verify = _closure1_slot0;
                    oscard = 9;
                    golfie = yankee[oscard];
                    golfie = verify.bind(offset)(golfie);
                    romeon = golfie.intl;
                    option = romeon.string;
                    golfie = yankee[oscard];
                    golfie = verify.bind(offset)(golfie);
                    golfie = golfie.t;
                    golfie = golfie.fmm9jo;
                    golfie = option.bind(romeon)(golfie);
                    michal['body'] = golfie;
                    golfie = yankee[oscard];
                    golfie = verify.bind(offset)(golfie);
                    option = golfie.intl;
                    golfie = option.string;
                    oscard = yankee[oscard];
                    oscard = verify.bind(offset)(oscard);
                    oscard = oscard.t;
                    oscard = oscard.NX+WJC;
                    oscard = golfie.bind(option)(oscard);
                    michal['confirmText'] = oscard;
                    oscard = true;
                    michal['isDismissable'] = oscard;
                    michal = zuuluu.bind(report)(michal);
                    _fun00010_ip = 271; continue _fun00009;
 196:
                    zuuluu = _closure1_slot1;
                    golfie = _closure1_slot3;
                    michal = 30;
                    michal = golfie[michal];
                    oscard = undefined;
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = zuuluu.openURL;
                    report = _closure1_slot0;
                    tangon = 31;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.getExternalSubscriptionMethodUrl;
                    entity = _closure2_slot1;
                    tangon = entity.paymentGateway;
                    entity = 'PAYMENT_SOURCE_MANAGEMENT';
                    entity = report.bind(oscard)(tangon, entity);
                    entity = michal.bind(zuuluu)(entity);
 271:
                    entity = undefined;
                    return entity;
                }
            };
            kiloes['onPress'] = target;
            echoed = ctrled.bind(tangon)(echoed, kiloes);
            kiloes = new Array(3);
            kiloes[0] = echoed;
            ctrled = _closure1_slot12;
            echoed = papara[sizing];
            source = source.bind(tangon)(echoed);
            echoed = {};
            target = papara[status];
            target = limora.bind(tangon)(target);
            sierra = target.intl;
            target = sierra.string;
            papara = papara[status];
            papara = limora.bind(tangon)(papara);
            papara = papara.t;
            papara = papara.FRbWR0;
            papara = target.bind(sierra)(papara);
            echoed['text'] = papara;
            record = function() { // Original name: onPress
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 32;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.transitionTo;
                golfie = _closure1_slot9;
                oscard = golfie.CHANNEL;
                report = _closure2_slot2;
                michal = _closure1_slot11;
                michal = michal.ROLE_SUBSCRIPTIONS;
                michal = oscard.bind(golfie)(report, michal);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            echoed['onPress'] = record;
            echoed = ctrled.bind(tangon)(source, echoed);
            kiloes[1] = echoed;
            echoed = _closure1_slot12;
            if(output) { _fun00006_ip = 1376; continue _fun00005 }
 1288:
            output = _closure1_slot1;
            source = _closure1_slot3;
            sizing = source[sizing];
            output = output.bind(tangon)(sizing);
            sizing = {};
            papara = _closure1_slot0;
            ctrled = source[status];
            ctrled = papara.bind(tangon)(ctrled);
            record = ctrled.intl;
            ctrled = record.string;
            source = source[status];
            source = papara.bind(tangon)(source);
            source = source.t;
            source = source.Dx0lFx;
            source = ctrled.bind(record)(source);
            sizing['text'] = source;
            sizing['onPress'] = result;
            sizing = echoed.bind(tangon)(output, sizing);
            _fun00006_ip = 1503; continue _fun00005;
 1376:
            result = _closure1_slot7;
            output = {};
            update = update.resubscribeButtonContainer;
            output['style'] = update;
            ctrled = _closure1_slot12;
            source = _closure1_slot1;
            record = _closure1_slot3;
            update = 33;
            update = record[update];
            source = source.bind(tangon)(update);
            update = {};
            target = _closure1_slot0;
            cntext = record[status];
            cntext = target.bind(tangon)(cntext);
            papara = cntext.intl;
            cntext = papara.string;
            record = record[status];
            record = target.bind(tangon)(record);
            record = record.t;
            record = record.iIvF29;
            record = cntext.bind(papara)(record);
            update['text'] = record;
            update['onPress'] = config;
            if(vacuum) { _fun00006_ip = 1482; continue _fun00005 }
 1479:
            vacuum = !sequen;
 1482:
            update['loading'] = vacuum;
            update = ctrled.bind(tangon)(source, update);
            output['children'] = update;
            sizing = echoed.bind(tangon)(result, output);
 1503:
            kiloes[2] = sizing;
            romeon['children'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            verify['children'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[4] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.PaymentGateways;
    var _closure1_slot8 = golfie;
    golfie = tangon.Routes;
    var _closure1_slot9 = golfie;
    tangon = tangon.UserSettingsSections;
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StaticChannelRoute;
    var _closure1_slot11 = tangon;
    tangon = 6;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot12 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsxs;
    var _closure1_slot13 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Fragment;
    var _closure1_slot14 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 8;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.sm;
    verify['borderRadius'] = romeon;
    tangon['container'] = verify;
    verify = {};
    romeon = 16;
    verify['padding'] = romeon;
    tangon['cardContent'] = verify;
    verify = {};
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_SECONDARY_ALT;
    verify['backgroundColor'] = foxtra;
    foxtra = oscard[offset];
    foxtra = yankee.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    verify['borderRadius'] = foxtra;
    foxtra = 'hidden';
    verify['overflow'] = foxtra;
    tangon['buttonsContainer'] = verify;
    verify = {'width': '100%', 'borderBottomWidth': 1, 'borderColor': null, 'marginLeft': 16, 'marginTop': 4294967295};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_MODIFIER_ACCENT;
    verify['borderColor'] = backup;
    tangon['buttonDivider'] = verify;
    verify = {};
    verify['padding'] = romeon;
    tangon['resubscribeButtonContainer'] = verify;
    verify = {};
    verify['paddingHorizontal'] = romeon;
    tangon['separator'] = verify;
    verify = {};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    verify['borderRadius'] = backup;
    verify['overflow'] = foxtra;
    tangon['header'] = verify;
    foxtra = 'row';
    verify = {'padding': 16, 'alignItems': 'center', 'flexDirection': 'row'};
    tangon['headerContent'] = verify;
    verify = {'alignSelf': 'stretch', 'flexGrow': 1, 'flexShrink': 1, 'paddingHorizontal': 16};
    tangon['headerTitlesContainer'] = verify;
    verify = {};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.INTERACTIVE_NORMAL;
    verify['tintColor'] = backup;
    tangon['expandIcon'] = verify;
    verify = {};
    kiloes = {};
    backup = '180deg';
    kiloes['rotate'] = backup;
    backup = new Array(1);
    backup[0] = kiloes;
    verify['transform'] = backup;
    tangon['expandIconExpanded'] = verify;
    verify = {};
    verify['flexDirection'] = foxtra;
    tangon['cardRow'] = verify;
    verify = {};
    verify['paddingTop'] = romeon;
    tangon['manageSection'] = verify;
    verify = {'flexDirection': 'row', 'width': '90%'};
    tangon['paymentOverDueWarning'] = verify;
    verify = {'paddingVertical': 4, 'paddingHorizontal': 18, 'flexDirection': 'row', 'alignItems': 'center'};
    tangon['headerStatusContainer'] = verify;
    verify = {};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.STATUS_DANGER;
    verify['backgroundColor'] = romeon;
    tangon['headerStatusCancel'] = verify;
    verify = {};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_BRAND;
    verify['backgroundColor'] = romeon;
    tangon['headerStatusTrial'] = verify;
    verify = {};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.STATUS_WARNING;
    verify['backgroundColor'] = offset;
    tangon['headerStatusPastDue'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 36;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/native/manage_subscriptions/ManageSubscriptionCard.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ManageSubscriptionCard
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            output = entity.subscription;
            var _closure2_slot0 = output;
            entity = _closure1_slot15;
            report = undefined;
            oscard = entity.bind(report)();
            michal = _closure1_slot1;
            tangon = _closure1_slot3;
            entity = 34;
            entity = tangon[entity];
            entity = michal.bind(report)(entity);
            michal = entity.bind(report)(output);
            yankee = michal.listing;
            entity = michal.groupListing;
            sizing = michal.guild;
            golfie = michal.expanded;
            offset = michal.handleToggleExpanded;
            echoed = michal.subscriptionInfo;
            zuuluu = _closure1_slot0;
            michal = 35;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.useNavigation;
            michal = michal.bind(zuuluu)();
            var _closure2_slot1 = michal;
            result = null;
            michal = result == entity;
            entity = null;
            if(michal) { _fun00012_ip = 395; continue _fun00011 }
 132:
            michal = result == yankee;
            entity = null;
            if(michal) { _fun00012_ip = 395; continue _fun00011 }
 144:
            michal = result == echoed;
            entity = null;
            if(michal) { _fun00012_ip = 395; continue _fun00011 }
 156:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot7;
            michal = {};
            oscard = oscard.container;
            michal['style'] = oscard;
            verify = _closure1_slot12;
            option = _closure1_slot17;
            oscard = {};
            oscard['expanded'] = golfie;
            oscard['guild'] = sizing;
            foxtra = echoed.isCancelled;
            oscard['isCancelled'] = foxtra;
            foxtra = echoed.isTrial;
            oscard['isTrial'] = foxtra;
            foxtra = echoed.isPastDue;
            oscard['isPastDue'] = foxtra;
            oscard['listing'] = yankee;
            oscard['onToggleExpanded'] = offset;
            option = verify.bind(report)(option, oscard);
            oscard = new Array(2);
            oscard[0] = option;
            if(!golfie) { _fun00012_ip = 381; continue _fun00011 }
 257:
            offset = _closure1_slot13;
            verify = _closure1_slot14;
            option = {};
            backup = _closure1_slot12;
            foxtra = _closure1_slot18;
            yankee = {};
            foxtra = backup.bind(report)(foxtra, yankee);
            yankee = new Array(2);
            yankee[0] = foxtra;
            backup = _closure1_slot12;
            foxtra = _closure1_slot19;
            romeon = {};
            source = romeon;
            update = echoed;
            echoed = copyDataProperties(source, update);
            echoed = result == sizing;
            result = undefined;
            if(echoed) { _fun00012_ip = 325; continue _fun00011 }
 320:
            result = sizing.id;
 325:
            sizing = 'guildId';
            romeon[sizing] = result;
            sizing = 'subscription';
            romeon[sizing] = output;
            sizing = function() { // Original name: onCancelSubscription
                tangon = _closure2_slot1;
                zuuluu = tangon.push;
                entity = _closure1_slot10;
                michal = entity.GUILD_ROLE_SUBSCRIPTIONS_CANCEL;
                entity = {};
                report = _closure2_slot0;
                report = report.id;
                entity['subscriptionId'] = report;
                report = function() { // Original name: onClose
                    michal = _closure2_slot1;
                    entity = michal.pop;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity['onClose'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            };
            kiloes = 'onCancelSubscription';
            romeon[kiloes] = sizing;
            romeon = backup.bind(report)(foxtra, romeon);
            yankee[1] = romeon;
            option['children'] = yankee;
            golfie = offset.bind(report)(verify, option);
 381:
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 395:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();