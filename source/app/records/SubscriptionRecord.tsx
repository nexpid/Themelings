// app/records/SubscriptionRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot17;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: createSubscriptionItemFromServer
        michal = argFoo;
        entity = {};
        zuuluu = michal.id;
        entity['id'] = zuuluu;
        zuuluu = michal.plan_id;
        entity['planId'] = zuuluu;
        michal = michal.quantity;
        entity['quantity'] = michal;
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    golfie = 6;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    var _closure1_slot8 = golfie;
    golfie = 7;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.SubscriptionTypes;
    var _closure1_slot9 = option;
    option = golfie.SubscriptionStatusTypes;
    var _closure1_slot10 = option;
    option = golfie.SubscriptionStatusTypesSets;
    var _closure1_slot11 = option;
    golfie = golfie.PaymentGateways;
    var _closure1_slot12 = golfie;
    golfie = 8;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    option = golfie.REVERSE_TRIAL_IDS;
    var _closure1_slot13 = option;
    option = golfie.SubscriptionPlanInfo;
    var _closure1_slot14 = option;
    golfie = golfie.SubscriptionPlans;
    var _closure1_slot15 = golfie;
    michal = function(argFoo) {
        report = function(argFoo) { // Original name: SubscriptionRecord
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = argFoo;
                tangon = this;
                entity = _closure1_slot3;
                zuuluu = _closure2_slot0;
                yankee = undefined;
                entity = entity.bind(yankee)(tangon, zuuluu);
                entity = _closure1_slot16;
                entity = entity.bind(yankee)(tangon, zuuluu);
                zuuluu = report.id;
                entity['id'] = zuuluu;
                zuuluu = report.type;
                entity['type'] = zuuluu;
                zuuluu = report.items;
                entity['items'] = zuuluu;
                zuuluu = report.createdAt;
                entity['createdAt'] = zuuluu;
                zuuluu = report.canceledAt;
                entity['canceledAt'] = zuuluu;
                zuuluu = report.currentPeriodStart;
                entity['currentPeriodStart'] = zuuluu;
                zuuluu = report.currentPeriodEnd;
                entity['currentPeriodEnd'] = zuuluu;
                zuuluu = report.status;
                entity['status'] = zuuluu;
                zuuluu = report.paymentSourceId;
                entity['paymentSourceId'] = zuuluu;
                zuuluu = report.paymentGateway;
                entity['paymentGateway'] = zuuluu;
                zuuluu = report.paymentGatewayPlanId;
                entity['paymentGatewayPlanId'] = zuuluu;
                zuuluu = report.paymentGatewaySubscriptionId;
                entity['paymentGatewaySubscriptionId'] = zuuluu;
                zuuluu = report.trialId;
                entity['trialId'] = zuuluu;
                zuuluu = report.trialEndsAt;
                entity['trialEndsAt'] = zuuluu;
                zuuluu = report.renewalMutations;
                entity['renewalMutations'] = zuuluu;
                zuuluu = report.currency;
                entity['currency'] = zuuluu;
                zuuluu = report.pauseEndsAt;
                entity['pauseEndsAt'] = zuuluu;
                zuuluu = report.metadata;
                entity['metadata'] = zuuluu;
                zuuluu = report.latestInvoice;
                entity['latestInvoice'] = zuuluu;
                zuuluu = report.useStorekitResubscribe;
                entity['useStorekitResubscribe'] = zuuluu;
                zuuluu = report.price;
                entity['price'] = zuuluu;
                zuuluu = report.userId;
                entity['userId'] = zuuluu;
                zuuluu = report.streakStartedAt;
                entity['streakStartedAt'] = zuuluu;
                zuuluu = entity.renewalMutations;
                tangon = report.items;
                romeon = 0;
                tangon = tangon[romeon];
                offset = tangon.planId;
                var _closure3_slot0 = offset;
                oscard = null;
                var _closure3_slot1 = oscard;
                golfie = report.type;
                tangon = _closure1_slot9;
                tangon = tangon.PREMIUM;
                if(!(golfie !== tangon)) { _fun00006_ip = 429; continue _fun00005 }
 365:
                verify = oscard != zuuluu;
                if(!verify) { _fun00006_ip = 387; continue _fun00005 }
 372:
                tangon = zuuluu.items;
                tangon = tangon.length;
                verify = tangon > romeon;
 387:
                golfie = offset;
                tangon = null;
                if(!verify) { _fun00006_ip = 566; continue _fun00005 }
 398:
                verify = zuuluu.items;
                verify = verify[romeon];
                verify = verify.planId;
                _closure3_slot1 = verify;
                golfie = offset;
                tangon = verify;
                _fun00006_ip = 566; continue _fun00005;
 429:
                offset = _closure1_slot14;
                verify = report.items;
                verify = verify[romeon];
                verify = verify.planId;
                verify = offset[verify];
                foxtra = verify.interval;
                romeon = verify.intervalCount;
                offset = _closure1_slot0;
                verify = _closure1_slot2;
                backup = 9;
                verify = verify[backup];
                kiloes = offset.bind(yankee)(verify);
                offset = kiloes.getBasePlanIdForSubscriptionItems;
                verify = report.items;
                verify = offset.bind(kiloes)(verify, foxtra, romeon);
                _closure3_slot0 = verify;
                offset = oscard != zuuluu;
                golfie = verify;
                tangon = null;
                if(!offset) { _fun00006_ip = 566; continue _fun00005 }
 520:
                offset = _closure1_slot0;
                option = _closure1_slot2;
                option = option[backup];
                yankee = offset.bind(yankee)(option);
                offset = yankee.getBasePlanIdForSubscriptionItems;
                option = zuuluu.items;
                option = offset.bind(yankee)(option, foxtra, romeon);
                _closure3_slot1 = option;
                golfie = verify;
                tangon = option;
 566:
                entity['planId'] = golfie;
                option = report.items;
                golfie = option.filter;
                report = function(argFoo) {
                    entity = argFoo;
                    michal = entity.planId;
                    entity = _closure3_slot0;
                    entity = michal !== entity;
                    return entity;
                };
                report = golfie.bind(option)(report);
                entity['additionalPlans'] = report;
                report = oscard != zuuluu;
                if(!report) { _fun00006_ip = 610; continue _fun00005 }
 606:
                report = oscard != tangon;
 610:
                if(!report) { _fun00006_ip = 646; continue _fun00005 }
 613:
                zuuluu['planId'] = tangon;
                report = zuuluu.items;
                tangon = report.filter;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.planId;
                    entity = _closure3_slot1;
                    entity = michal !== entity;
                    return entity;
                };
                michal = tangon.bind(report)(michal);
                zuuluu['additionalPlans'] = michal;
 646:
                return entity;
            }
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot7;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot4;
        oscard = {};
        michal = 'getCurrentSubscriptionPlanIdForGroup';
        oscard['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = argFoo;
                var _closure3_slot0 = michal;
                michal = this;
                zuuluu = michal.items;
                michal = zuuluu.find;
                entity = function(argFoo) {
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.includes;
                    entity = argFoo;
                    entity = entity.planId;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00008_ip = 50; continue _fun00007 }
 44:
                entity = michal.planId;
 50:
                return entity;
            }
        };
        oscard['value'] = michal;
        michal = new Array(17);
        michal[0] = oscard;
        oscard = {};
        golfie = 'isPremium';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.type;
            entity = _closure1_slot9;
            entity = entity.PREMIUM;
            entity = michal === entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'planIdForCurrencies';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = this;
                entity = michal.isPremium;
                if(entity) { _fun00010_ip = 20; continue _fun00009 }
 12:
                entity = michal.planId;
                _fun00010_ip = 69; continue _fun00009;
 20:
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                zuuluu = 10;
                zuuluu = report[zuuluu];
                oscard = undefined;
                report = tangon.bind(oscard)(zuuluu);
                tangon = michal.planIdFromItems;
                zuuluu = 'Premium subscription has no planId for currencies';
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                entity = michal.planIdFromItems;
 69:
                return entity;
            }
        };
        oscard['get'] = golfie;
        michal[2] = oscard;
        oscard = {};
        golfie = 'planIdFromItems';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            zuuluu = this;
            michal = zuuluu.getCurrentSubscriptionPlanIdForGroup;
            entity = global;
            report = entity.Object;
            tangon = report.values;
            entity = _closure1_slot15;
            entity = tangon.bind(report)(entity);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard['get'] = golfie;
        michal[3] = oscard;
        oscard = {};
        golfie = 'isPurchasedViaApple';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.paymentGateway;
            entity = _closure1_slot12;
            entity = entity.APPLE;
            entity = michal === entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[4] = oscard;
        oscard = {};
        golfie = 'isPurchasedViaGoogle';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.paymentGateway;
            entity = _closure1_slot12;
            entity = entity.GOOGLE;
            entity = michal === entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[5] = oscard;
        oscard = {};
        golfie = 'isPurchasedExternally';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = this;
                entity = michal.isPurchasedViaApple;
                if(entity) { _fun00012_ip = 18; continue _fun00011 }
 12:
                entity = michal.isPurchasedViaGoogle;
 18:
                return entity;
            }
        };
        oscard['get'] = golfie;
        michal[6] = oscard;
        oscard = {};
        golfie = 'isOnPlatformMatchingExternalPaymentGateway';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = this;
                entity = michal.isPurchasedViaApple;
                if(!entity) { _fun00014_ip = 47; continue _fun00013 }
 12:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 11;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                tangon = report.bind(zuuluu)(tangon);
                zuuluu = tangon.isIOS;
                entity = zuuluu.bind(tangon)();
 47:
                if(entity) { _fun00014_ip = 96; continue _fun00013 }
 50:
                michal = michal.isPurchasedViaGoogle;
                if(!michal) { _fun00014_ip = 93; continue _fun00013 }
 59:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 11;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                tangon = report.bind(zuuluu)(tangon);
                zuuluu = tangon.isAndroid;
                michal = zuuluu.bind(tangon)();
 93:
                entity = michal;
 96:
                return entity;
            }
        };
        oscard['get'] = golfie;
        michal[7] = oscard;
        oscard = {};
        golfie = 'hasExternalPlanChange';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = this;
                entity = michal.isPurchasedExternally;
                if(!entity) { _fun00016_ip = 24; continue _fun00015 }
 12:
                tangon = michal.renewalMutations;
                zuuluu = null;
                entity = zuuluu != tangon;
 24:
                if(!entity) { _fun00016_ip = 49; continue _fun00015 }
 27:
                zuuluu = michal.paymentGatewayPlanId;
                michal = michal.renewalMutations;
                michal = michal.paymentGatewayPlanId;
                entity = zuuluu !== michal;
 49:
                return entity;
            }
        };
        oscard['get'] = golfie;
        michal[8] = oscard;
        oscard = {};
        golfie = 'hasPremiumNitroMonthly';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            zuuluu = entity.items;
            michal = zuuluu.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.planId;
                entity = _closure1_slot15;
                entity = entity.PREMIUM_MONTH_TIER_2;
                entity = michal === entity;
                return entity;
            };
            michal = michal.bind(zuuluu)(entity);
            entity = null;
            entity = entity != michal;
            return entity;
        };
        oscard['get'] = golfie;
        michal[9] = oscard;
        oscard = {};
        golfie = 'isBoostOnly';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            zuuluu = entity.items;
            michal = zuuluu.every;
            entity = function(argFoo) {
                entity = _closure1_slot15;
                michal = entity.PREMIUM_MONTH_GUILD;
                zuuluu = new Array(2);
                zuuluu[0] = michal;
                entity = entity.PREMIUM_YEAR_GUILD;
                zuuluu[1] = entity;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = entity.planId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard['get'] = golfie;
        michal[10] = oscard;
        oscard = {};
        golfie = 'isPausedOrPausePending';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot11;
            zuuluu = entity.ALL_PAUSE;
            michal = zuuluu.has;
            entity = this;
            entity = entity.status;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        oscard['get'] = golfie;
        michal[11] = oscard;
        oscard = {};
        golfie = 'isPaused';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.status;
            entity = _closure1_slot10;
            entity = entity.PAUSED;
            entity = michal === entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[12] = oscard;
        oscard = {};
        golfie = 'isEnded';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.status;
            entity = _closure1_slot10;
            entity = entity.ENDED;
            entity = michal === entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[13] = oscard;
        oscard = {};
        golfie = 'isActive';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.status;
            entity = _closure1_slot10;
            entity = entity.ACTIVE;
            entity = michal === entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[14] = oscard;
        oscard = {};
        golfie = 'inReverseTrial';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = this;
                entity = michal.trialId;
                zuuluu = null;
                entity = zuuluu != entity;
                if(!entity) { _fun00018_ip = 41; continue _fun00017 }
 18:
                oscard = _closure1_slot13;
                report = oscard.includes;
                tangon = michal.trialId;
                entity = report.bind(oscard)(tangon);
 41:
                if(!entity) { _fun00018_ip = 54; continue _fun00017 }
 44:
                michal = michal.paymentSourceId;
                entity = zuuluu == michal;
 54:
                return entity;
            }
        };
        oscard['get'] = golfie;
        michal[15] = oscard;
        oscard = {};
        golfie = 'premiumSince';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = this;
                entity = michal.streakStartedAt;
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00020_ip = 21; continue _fun00019 }
 15:
                entity = michal.createdAt;
 21:
                return entity;
            }
        };
        oscard['get'] = golfie;
        michal[16] = oscard;
        oscard = {};
        golfie = 'createFromServer';
        oscard['key'] = golfie;
        entity = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                report = argFoo;
                zuuluu = _closure2_slot0;
                entity = {};
                michal = report.id;
                entity['id'] = michal;
                michal = report.type;
                entity['type'] = michal;
                golfie = global;
                oscard = golfie.Date;
                foxtra = report.created_at;
                tangon = oscard.prototype;
                tangon = Object.create(tangon, {constructor: {value: oscard}});
                backup = tangon;
                michal = new backup[oscard](foxtra, romeon);
                michal = michal instanceof Object ? michal : tangon;
                entity['createdAt'] = michal;
                michal = report.canceled_at;
                tangon = null;
                oscard = tangon != michal;
                michal = null;
                if(!oscard) { _fun00022_ip = 118; continue _fun00021 }
 86:
                verify = golfie.Date;
                foxtra = report.canceled_at;
                option = verify.prototype;
                option = Object.create(option, {constructor: {value: verify}});
                backup = option;
                oscard = new backup[verify](foxtra, romeon);
                michal = oscard instanceof Object ? oscard : option;
 118:
                entity['canceledAt'] = michal;
                option = golfie.Date;
                foxtra = report.current_period_start;
                oscard = option.prototype;
                oscard = Object.create(oscard, {constructor: {value: option}});
                backup = oscard;
                michal = new backup[option](foxtra, romeon);
                michal = michal instanceof Object ? michal : oscard;
                entity['currentPeriodStart'] = michal;
                option = golfie.Date;
                foxtra = report.current_period_end;
                oscard = option.prototype;
                oscard = Object.create(oscard, {constructor: {value: option}});
                backup = oscard;
                michal = new backup[option](foxtra, romeon);
                michal = michal instanceof Object ? michal : oscard;
                entity['currentPeriodEnd'] = michal;
                michal = report.status;
                entity['status'] = michal;
                michal = report.payment_source_id;
                entity['paymentSourceId'] = michal;
                michal = report.payment_gateway;
                entity['paymentGateway'] = michal;
                michal = report.payment_gateway_plan_id;
                entity['paymentGatewayPlanId'] = michal;
                michal = report.payment_gateway_subscription_id;
                entity['paymentGatewaySubscriptionId'] = michal;
                michal = report.trial_id;
                entity['trialId'] = michal;
                michal = report.trial_ends_at;
                entity['trialEndsAt'] = michal;
                verify = report.items;
                option = verify.map;
                michal = _closure1_slot18;
                michal = option.bind(verify)(michal);
                entity['items'] = michal;
                michal = report.renewal_mutations;
                option = tangon != michal;
                michal = null;
                if(!option) { _fun00022_ip = 368; continue _fun00021 }
 315:
                option = {};
                verify = report.renewal_mutations;
                yankee = verify.items;
                offset = yankee.map;
                verify = _closure1_slot18;
                verify = offset.bind(yankee)(verify);
                option['items'] = verify;
                verify = report.renewal_mutations;
                verify = verify.payment_gateway_plan_id;
                option['paymentGatewayPlanId'] = verify;
                michal = option;
 368:
                entity['renewalMutations'] = michal;
                michal = report.streak_started_at;
                option = tangon != michal;
                michal = null;
                if(!option) { _fun00022_ip = 420; continue _fun00021 }
 388:
                offset = golfie.Date;
                foxtra = report.streak_started_at;
                verify = offset.prototype;
                verify = Object.create(verify, {constructor: {value: offset}});
                backup = verify;
                option = new backup[offset](foxtra, romeon);
                michal = option instanceof Object ? option : verify;
 420:
                entity['streakStartedAt'] = michal;
                michal = report.currency;
                entity['currency'] = michal;
                michal = report.pause_ends_at;
                option = tangon != michal;
                michal = null;
                if(!option) { _fun00022_ip = 483; continue _fun00021 }
 451:
                verify = golfie.Date;
                foxtra = report.pause_ends_at;
                option = verify.prototype;
                option = Object.create(option, {constructor: {value: verify}});
                backup = option;
                golfie = new backup[verify](foxtra, romeon);
                michal = golfie instanceof Object ? golfie : option;
 483:
                entity['pauseEndsAt'] = michal;
                michal = report.metadata;
                entity['metadata'] = michal;
                michal = report.use_storekit_resubscribe;
                entity['useStorekitResubscribe'] = michal;
                michal = report.price;
                entity['price'] = michal;
                michal = report.user_id;
                entity['userId'] = michal;
                michal = report.latest_invoice;
                if(!(tangon == michal)) { _fun00022_ip = 545; continue _fun00021 }
 541:
                michal = {};
                _fun00022_ip = 576; continue _fun00021;
 545:
                tangon = {};
                golfie = _closure1_slot8;
                oscard = golfie.createInvoiceFromServer;
                report = report.latest_invoice;
                report = oscard.bind(golfie)(report);
                tangon['latestInvoice'] = report;
                michal = tangon;
 576:
                foxtra = entity;
                romeon = michal;
                michal = copyDataProperties(foxtra, romeon);
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                backup = michal;
                foxtra = entity;
                entity = new backup[zuuluu](foxtra, romeon);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'records/SubscriptionRecord.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    zuuluu['SubscriptionRecord'] = michal;
    return entity;
})();