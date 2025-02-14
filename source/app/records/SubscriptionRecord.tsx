// app/records/SubscriptionRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun41871: for(var _fun41871_ip = 0; ; ) switch(_fun41871_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot17;
            entity = entity.bind(zulu)();
            if(entity) { _fun41871_ip = 48; continue _fun41871 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun41871_ip = 86; continue _fun41871;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun41872: for(var _fun41872_ip = 0; ; ) switch(_fun41872_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun41872_ip = 74; continue _fun41872;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: createSubscriptionItemFromServer
        mike = argFoo;
        entity = {};
        zulu = mike.id;
        entity['id'] = zulu;
        zulu = mike.plan_id;
        entity['planId'] = zulu;
        mike = mike.quantity;
        entity['quantity'] = mike;
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    golf = 6;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = 7;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    options = golf.SubscriptionTypes;
    var _closure1_slot9 = options;
    options = golf.SubscriptionStatusTypes;
    var _closure1_slot10 = options;
    options = golf.SubscriptionStatusTypesSets;
    var _closure1_slot11 = options;
    golf = golf.PaymentGateways;
    var _closure1_slot12 = golf;
    golf = 8;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    options = golf.REVERSE_TRIAL_IDS;
    var _closure1_slot13 = options;
    options = golf.SubscriptionPlanInfo;
    var _closure1_slot14 = options;
    golf = golf.SubscriptionPlans;
    var _closure1_slot15 = golf;
    mike = function(argFoo) {
        report = function(argFoo) { // Original name: SubscriptionRecord
            _fun41877: for(var _fun41877_ip = 0; ; ) switch(_fun41877_ip) {
 0:
                report = argFoo;
                tango = this;
                entity = _closure1_slot3;
                zulu = _closure2_slot0;
                yankee = undefined;
                entity = entity.bind(yankee)(tango, zulu);
                entity = _closure1_slot16;
                entity = entity.bind(yankee)(tango, zulu);
                zulu = report.id;
                entity['id'] = zulu;
                zulu = report.type;
                entity['type'] = zulu;
                zulu = report.items;
                entity['items'] = zulu;
                zulu = report.createdAt;
                entity['createdAt'] = zulu;
                zulu = report.canceledAt;
                entity['canceledAt'] = zulu;
                zulu = report.currentPeriodStart;
                entity['currentPeriodStart'] = zulu;
                zulu = report.currentPeriodEnd;
                entity['currentPeriodEnd'] = zulu;
                zulu = report.status;
                entity['status'] = zulu;
                zulu = report.paymentSourceId;
                entity['paymentSourceId'] = zulu;
                zulu = report.paymentGateway;
                entity['paymentGateway'] = zulu;
                zulu = report.paymentGatewayPlanId;
                entity['paymentGatewayPlanId'] = zulu;
                zulu = report.paymentGatewaySubscriptionId;
                entity['paymentGatewaySubscriptionId'] = zulu;
                zulu = report.trialId;
                entity['trialId'] = zulu;
                zulu = report.trialEndsAt;
                entity['trialEndsAt'] = zulu;
                zulu = report.renewalMutations;
                entity['renewalMutations'] = zulu;
                zulu = report.currency;
                entity['currency'] = zulu;
                zulu = report.pauseEndsAt;
                entity['pauseEndsAt'] = zulu;
                zulu = report.metadata;
                entity['metadata'] = zulu;
                zulu = report.latestInvoice;
                entity['latestInvoice'] = zulu;
                zulu = report.useStorekitResubscribe;
                entity['useStorekitResubscribe'] = zulu;
                zulu = report.price;
                entity['price'] = zulu;
                zulu = report.userId;
                entity['userId'] = zulu;
                zulu = report.streakStartedAt;
                entity['streakStartedAt'] = zulu;
                zulu = entity.renewalMutations;
                tango = report.items;
                romeo = 0;
                tango = tango[romeo];
                offset = tango.planId;
                var _closure3_slot0 = offset;
                oscar = null;
                var _closure3_slot1 = oscar;
                golf = report.type;
                tango = _closure1_slot9;
                tango = tango.PREMIUM;
                if(!(golf !== tango)) { _fun41877_ip = 429; continue _fun41877 }
 365:
                verify = oscar != zulu;
                if(!verify) { _fun41877_ip = 387; continue _fun41877 }
 372:
                tango = zulu.items;
                tango = tango.length;
                verify = tango > romeo;
 387:
                golf = offset;
                tango = null;
                if(!verify) { _fun41877_ip = 566; continue _fun41877 }
 398:
                verify = zulu.items;
                verify = verify[romeo];
                verify = verify.planId;
                _closure3_slot1 = verify;
                golf = offset;
                tango = verify;
                _fun41877_ip = 566; continue _fun41877;
 429:
                offset = _closure1_slot14;
                verify = report.items;
                verify = verify[romeo];
                verify = verify.planId;
                verify = offset[verify];
                foxtrot = verify.interval;
                romeo = verify.intervalCount;
                offset = _closure1_slot0;
                verify = _closure1_slot2;
                backup = 9;
                verify = verify[backup];
                kilo = offset.bind(yankee)(verify);
                offset = kilo.getBasePlanIdForSubscriptionItems;
                verify = report.items;
                verify = offset.bind(kilo)(verify, foxtrot, romeo);
                _closure3_slot0 = verify;
                offset = oscar != zulu;
                golf = verify;
                tango = null;
                if(!offset) { _fun41877_ip = 566; continue _fun41877 }
 520:
                offset = _closure1_slot0;
                options = _closure1_slot2;
                options = options[backup];
                yankee = offset.bind(yankee)(options);
                offset = yankee.getBasePlanIdForSubscriptionItems;
                options = zulu.items;
                options = offset.bind(yankee)(options, foxtrot, romeo);
                _closure3_slot1 = options;
                golf = verify;
                tango = options;
 566:
                entity['planId'] = golf;
                options = report.items;
                golf = options.filter;
                report = function(argFoo) {
                    entity = argFoo;
                    mike = entity.planId;
                    entity = _closure3_slot0;
                    entity = mike !== entity;
                    return entity;
                };
                report = golf.bind(options)(report);
                entity['additionalPlans'] = report;
                report = oscar != zulu;
                if(!report) { _fun41877_ip = 610; continue _fun41877 }
 606:
                report = oscar != tango;
 610:
                if(!report) { _fun41877_ip = 646; continue _fun41877 }
 613:
                zulu['planId'] = tango;
                report = zulu.items;
                tango = report.filter;
                mike = function(argFoo) {
                    entity = argFoo;
                    mike = entity.planId;
                    entity = _closure3_slot1;
                    entity = mike !== entity;
                    return entity;
                };
                mike = tango.bind(report)(mike);
                zulu['additionalPlans'] = mike;
 646:
                return entity;
            }
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot7;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot4;
        oscar = {};
        mike = 'getCurrentSubscriptionPlanIdForGroup';
        oscar['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun41880: for(var _fun41880_ip = 0; ; ) switch(_fun41880_ip) {
 0:
                mike = argFoo;
                var _closure3_slot0 = mike;
                mike = this;
                zulu = mike.items;
                mike = zulu.find;
                entity = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.includes;
                    entity = argFoo;
                    entity = entity.planId;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                mike = mike.bind(zulu)(entity);
                entity = null;
                zulu = entity == mike;
                entity = undefined;
                if(zulu) { _fun41880_ip = 50; continue _fun41880 }
 44:
                entity = mike.planId;
 50:
                return entity;
            }
        };
        oscar['value'] = mike;
        mike = new Array(17);
        mike[0] = oscar;
        oscar = {};
        golf = 'isPremium';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            mike = entity.type;
            entity = _closure1_slot9;
            entity = entity.PREMIUM;
            entity = mike === entity;
            return entity;
        };
        oscar['get'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'planIdForCurrencies';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            _fun41883: for(var _fun41883_ip = 0; ; ) switch(_fun41883_ip) {
 0:
                mike = this;
                entity = mike.isPremium;
                if(entity) { _fun41883_ip = 20; continue _fun41883 }
 12:
                entity = mike.planId;
                _fun41883_ip = 69; continue _fun41883;
 20:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 10;
                zulu = report[zulu];
                oscar = undefined;
                report = tango.bind(oscar)(zulu);
                tango = mike.planIdFromItems;
                zulu = 'Premium subscription has no planId for currencies';
                zulu = report.bind(oscar)(tango, zulu);
                entity = mike.planIdFromItems;
 69:
                return entity;
            }
        };
        oscar['get'] = golf;
        mike[2] = oscar;
        oscar = {};
        golf = 'planIdFromItems';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            zulu = this;
            mike = zulu.getCurrentSubscriptionPlanIdForGroup;
            entity = global;
            report = entity.Object;
            tango = report.values;
            entity = _closure1_slot15;
            entity = tango.bind(report)(entity);
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['get'] = golf;
        mike[3] = oscar;
        oscar = {};
        golf = 'isPurchasedViaApple';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            mike = entity.paymentGateway;
            entity = _closure1_slot12;
            entity = entity.APPLE;
            entity = mike === entity;
            return entity;
        };
        oscar['get'] = golf;
        mike[4] = oscar;
        oscar = {};
        golf = 'isPurchasedViaGoogle';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            mike = entity.paymentGateway;
            entity = _closure1_slot12;
            entity = entity.GOOGLE;
            entity = mike === entity;
            return entity;
        };
        oscar['get'] = golf;
        mike[5] = oscar;
        oscar = {};
        golf = 'isPurchasedExternally';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            _fun41887: for(var _fun41887_ip = 0; ; ) switch(_fun41887_ip) {
 0:
                mike = this;
                entity = mike.isPurchasedViaApple;
                if(entity) { _fun41887_ip = 18; continue _fun41887 }
 12:
                entity = mike.isPurchasedViaGoogle;
 18:
                return entity;
            }
        };
        oscar['get'] = golf;
        mike[6] = oscar;
        oscar = {};
        golf = 'isOnPlatformMatchingExternalPaymentGateway';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            _fun41888: for(var _fun41888_ip = 0; ; ) switch(_fun41888_ip) {
 0:
                mike = this;
                entity = mike.isPurchasedViaApple;
                if(!entity) { _fun41888_ip = 47; continue _fun41888 }
 12:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 11;
                tango = tango[zulu];
                zulu = undefined;
                tango = report.bind(zulu)(tango);
                zulu = tango.isIOS;
                entity = zulu.bind(tango)();
 47:
                if(entity) { _fun41888_ip = 96; continue _fun41888 }
 50:
                mike = mike.isPurchasedViaGoogle;
                if(!mike) { _fun41888_ip = 93; continue _fun41888 }
 59:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 11;
                tango = tango[zulu];
                zulu = undefined;
                tango = report.bind(zulu)(tango);
                zulu = tango.isAndroid;
                mike = zulu.bind(tango)();
 93:
                entity = mike;
 96:
                return entity;
            }
        };
        oscar['get'] = golf;
        mike[7] = oscar;
        oscar = {};
        golf = 'hasExternalPlanChange';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            _fun41889: for(var _fun41889_ip = 0; ; ) switch(_fun41889_ip) {
 0:
                mike = this;
                entity = mike.isPurchasedExternally;
                if(!entity) { _fun41889_ip = 24; continue _fun41889 }
 12:
                tango = mike.renewalMutations;
                zulu = null;
                entity = zulu != tango;
 24:
                if(!entity) { _fun41889_ip = 49; continue _fun41889 }
 27:
                zulu = mike.paymentGatewayPlanId;
                mike = mike.renewalMutations;
                mike = mike.paymentGatewayPlanId;
                entity = zulu !== mike;
 49:
                return entity;
            }
        };
        oscar['get'] = golf;
        mike[8] = oscar;
        oscar = {};
        golf = 'hasPremiumNitroMonthly';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            zulu = entity.items;
            mike = zulu.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.planId;
                entity = _closure1_slot15;
                entity = entity.PREMIUM_MONTH_TIER_2;
                entity = mike === entity;
                return entity;
            };
            mike = mike.bind(zulu)(entity);
            entity = null;
            entity = entity != mike;
            return entity;
        };
        oscar['get'] = golf;
        mike[9] = oscar;
        oscar = {};
        golf = 'isBoostOnly';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            zulu = entity.items;
            mike = zulu.every;
            entity = function(argFoo) {
                entity = _closure1_slot15;
                mike = entity.PREMIUM_MONTH_GUILD;
                zulu = new Array(2);
                zulu[0] = mike;
                entity = entity.PREMIUM_YEAR_GUILD;
                zulu[1] = entity;
                mike = zulu.includes;
                entity = argFoo;
                entity = entity.planId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['get'] = golf;
        mike[10] = oscar;
        oscar = {};
        golf = 'isPausedOrPausePending';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = _closure1_slot11;
            zulu = entity.ALL_PAUSE;
            mike = zulu.has;
            entity = this;
            entity = entity.status;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        oscar['get'] = golf;
        mike[11] = oscar;
        oscar = {};
        golf = 'isPaused';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            mike = entity.status;
            entity = _closure1_slot10;
            entity = entity.PAUSED;
            entity = mike === entity;
            return entity;
        };
        oscar['get'] = golf;
        mike[12] = oscar;
        oscar = {};
        golf = 'isEnded';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            mike = entity.status;
            entity = _closure1_slot10;
            entity = entity.ENDED;
            entity = mike === entity;
            return entity;
        };
        oscar['get'] = golf;
        mike[13] = oscar;
        oscar = {};
        golf = 'isActive';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            mike = entity.status;
            entity = _closure1_slot10;
            entity = entity.ACTIVE;
            entity = mike === entity;
            return entity;
        };
        oscar['get'] = golf;
        mike[14] = oscar;
        oscar = {};
        golf = 'inReverseTrial';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            _fun41898: for(var _fun41898_ip = 0; ; ) switch(_fun41898_ip) {
 0:
                mike = this;
                entity = mike.trialId;
                zulu = null;
                entity = zulu != entity;
                if(!entity) { _fun41898_ip = 41; continue _fun41898 }
 18:
                oscar = _closure1_slot13;
                report = oscar.includes;
                tango = mike.trialId;
                entity = report.bind(oscar)(tango);
 41:
                if(!entity) { _fun41898_ip = 54; continue _fun41898 }
 44:
                mike = mike.paymentSourceId;
                entity = zulu == mike;
 54:
                return entity;
            }
        };
        oscar['get'] = golf;
        mike[15] = oscar;
        oscar = {};
        golf = 'premiumSince';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            _fun41899: for(var _fun41899_ip = 0; ; ) switch(_fun41899_ip) {
 0:
                mike = this;
                entity = mike.streakStartedAt;
                zulu = null;
                if(!(zulu == entity)) { _fun41899_ip = 21; continue _fun41899 }
 15:
                entity = mike.createdAt;
 21:
                return entity;
            }
        };
        oscar['get'] = golf;
        mike[16] = oscar;
        oscar = {};
        golf = 'createFromServer';
        oscar['key'] = golf;
        entity = function(argFoo) { // Original name: value
            _fun41900: for(var _fun41900_ip = 0; ; ) switch(_fun41900_ip) {
 0:
                report = argFoo;
                zulu = _closure2_slot0;
                entity = {};
                mike = report.id;
                entity['id'] = mike;
                mike = report.type;
                entity['type'] = mike;
                golf = global;
                oscar = golf.Date;
                foxtrot = report.created_at;
                tango = oscar.prototype;
                tango = Object.create(tango, {constructor: {value: oscar}});
                backup = tango;
                mike = new backup[oscar](foxtrot, romeo);
                mike = mike instanceof Object ? mike : tango;
                entity['createdAt'] = mike;
                mike = report.canceled_at;
                tango = null;
                oscar = tango != mike;
                mike = null;
                if(!oscar) { _fun41900_ip = 118; continue _fun41900 }
 86:
                verify = golf.Date;
                foxtrot = report.canceled_at;
                options = verify.prototype;
                options = Object.create(options, {constructor: {value: verify}});
                backup = options;
                oscar = new backup[verify](foxtrot, romeo);
                mike = oscar instanceof Object ? oscar : options;
 118:
                entity['canceledAt'] = mike;
                options = golf.Date;
                foxtrot = report.current_period_start;
                oscar = options.prototype;
                oscar = Object.create(oscar, {constructor: {value: options}});
                backup = oscar;
                mike = new backup[options](foxtrot, romeo);
                mike = mike instanceof Object ? mike : oscar;
                entity['currentPeriodStart'] = mike;
                options = golf.Date;
                foxtrot = report.current_period_end;
                oscar = options.prototype;
                oscar = Object.create(oscar, {constructor: {value: options}});
                backup = oscar;
                mike = new backup[options](foxtrot, romeo);
                mike = mike instanceof Object ? mike : oscar;
                entity['currentPeriodEnd'] = mike;
                mike = report.status;
                entity['status'] = mike;
                mike = report.payment_source_id;
                entity['paymentSourceId'] = mike;
                mike = report.payment_gateway;
                entity['paymentGateway'] = mike;
                mike = report.payment_gateway_plan_id;
                entity['paymentGatewayPlanId'] = mike;
                mike = report.payment_gateway_subscription_id;
                entity['paymentGatewaySubscriptionId'] = mike;
                mike = report.trial_id;
                entity['trialId'] = mike;
                mike = report.trial_ends_at;
                entity['trialEndsAt'] = mike;
                verify = report.items;
                options = verify.map;
                mike = _closure1_slot18;
                mike = options.bind(verify)(mike);
                entity['items'] = mike;
                mike = report.renewal_mutations;
                options = tango != mike;
                mike = null;
                if(!options) { _fun41900_ip = 376; continue _fun41900 }
 323:
                options = {};
                verify = report.renewal_mutations;
                yankee = verify.items;
                offset = yankee.map;
                verify = _closure1_slot18;
                verify = offset.bind(yankee)(verify);
                options['items'] = verify;
                verify = report.renewal_mutations;
                verify = verify.payment_gateway_plan_id;
                options['paymentGatewayPlanId'] = verify;
                mike = options;
 376:
                entity['renewalMutations'] = mike;
                mike = report.streak_started_at;
                options = tango != mike;
                mike = null;
                if(!options) { _fun41900_ip = 428; continue _fun41900 }
 396:
                offset = golf.Date;
                foxtrot = report.streak_started_at;
                verify = offset.prototype;
                verify = Object.create(verify, {constructor: {value: offset}});
                backup = verify;
                options = new backup[offset](foxtrot, romeo);
                mike = options instanceof Object ? options : verify;
 428:
                entity['streakStartedAt'] = mike;
                mike = report.currency;
                entity['currency'] = mike;
                mike = report.pause_ends_at;
                options = tango != mike;
                mike = null;
                if(!options) { _fun41900_ip = 491; continue _fun41900 }
 459:
                verify = golf.Date;
                foxtrot = report.pause_ends_at;
                options = verify.prototype;
                options = Object.create(options, {constructor: {value: verify}});
                backup = options;
                golf = new backup[verify](foxtrot, romeo);
                mike = golf instanceof Object ? golf : options;
 491:
                entity['pauseEndsAt'] = mike;
                mike = report.metadata;
                entity['metadata'] = mike;
                mike = report.use_storekit_resubscribe;
                entity['useStorekitResubscribe'] = mike;
                mike = report.price;
                entity['price'] = mike;
                mike = report.user_id;
                entity['userId'] = mike;
                mike = report.latest_invoice;
                if(!(tango == mike)) { _fun41900_ip = 555; continue _fun41900 }
 551:
                mike = {};
                _fun41900_ip = 586; continue _fun41900;
 555:
                tango = {};
                golf = _closure1_slot8;
                oscar = golf.createInvoiceFromServer;
                report = report.latest_invoice;
                report = oscar.bind(golf)(report);
                tango['latestInvoice'] = report;
                mike = tango;
 586:
                foxtrot = entity;
                romeo = mike;
                mike = copyDataProperties(foxtrot, romeo);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                backup = mike;
                foxtrot = entity;
                entity = new backup[zulu](foxtrot, romeo);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'records/SubscriptionRecord.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    zulu['SubscriptionRecord'] = mike;
    return entity;
})();