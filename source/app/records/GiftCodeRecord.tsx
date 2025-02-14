// app/records/GiftCodeRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun69629: for(var _fun69629_ip = 0; ; ) switch(_fun69629_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun69629_ip = 48; continue _fun69629 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun69629_ip = 86; continue _fun69629;
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
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun69630: for(var _fun69630_ip = 0; ; ) switch(_fun69630_ip) {
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
 72: // try_end0
            _fun69630_ip = 76; continue _fun69630;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    mike = global;
    offset = mike.Object;
    options = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = verify.bind(entity)(report);
    options = 6;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 7;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.PremiumSubscriptionSKUToPremiumType;
    var _closure1_slot9 = options;
    verify = mike.Object;
    options = verify.freeze;
    mike = {'PAYMENT_SOURCE_REQUIRED': 1, 'EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED': 2, 'NOT_SELF_REDEEMABLE': 4};
    mike = options.bind(verify)(mike);
    var _closure1_slot10 = mike;
    tango = function(argFoo) {
        report = function(argFoo) { // Original name: GiftCodeRecord
            mike = argFoo;
            report = this;
            oscar = _closure1_slot3;
            tango = _closure2_slot0;
            zulu = undefined;
            oscar = oscar.bind(zulu)(report, tango);
            entity = _closure1_slot11;
            entity = entity.bind(zulu)(report, tango);
            zulu = mike.userId;
            entity['userId'] = zulu;
            zulu = mike.code;
            entity['code'] = zulu;
            zulu = mike.skuId;
            entity['skuId'] = zulu;
            zulu = mike.applicationId;
            entity['applicationId'] = zulu;
            zulu = mike.uses;
            entity['uses'] = zulu;
            zulu = mike.maxUses;
            entity['maxUses'] = zulu;
            zulu = mike.expiresAt;
            entity['expiresAt'] = zulu;
            zulu = mike.redeemed;
            entity['redeemed'] = zulu;
            zulu = mike.storeListingId;
            entity['storeListingId'] = zulu;
            zulu = mike.subscriptionPlanId;
            entity['subscriptionPlanId'] = zulu;
            zulu = mike.subscriptionPlan;
            entity['subscriptionPlan'] = zulu;
            zulu = mike.revoked;
            entity['revoked'] = zulu;
            zulu = mike.entitlementBranches;
            entity['entitlementBranches'] = zulu;
            zulu = mike.flags;
            entity['flags'] = zulu;
            zulu = mike.subscriptionTrial;
            entity['subscriptionTrial'] = zulu;
            zulu = mike.promotion;
            entity['promotion'] = zulu;
            mike = mike.giftStyle;
            entity['giftStyle'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot7;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot4;
        oscar = {};
        mike = 'isExpired';
        oscar['key'] = mike;
        mike = function() { // Original name: value
            _fun69635: for(var _fun69635_ip = 0; ; ) switch(_fun69635_ip) {
 0:
                entity = this;
                tango = entity.expiresAt;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun69635_ip = 58; continue _fun69635 }
 18:
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 8;
                mike = zulu[mike];
                zulu = undefined;
                mike = report.bind(zulu)(mike);
                zulu = mike.bind(zulu)();
                mike = zulu.isAfter;
                entity = mike.bind(zulu)(tango);
 58:
                return entity;
            }
        };
        oscar['value'] = mike;
        mike = new Array(10);
        mike[0] = oscar;
        oscar = {};
        golf = 'hasMultipleCopies';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            mike = entity.maxUses;
            entity = 1;
            entity = mike > entity;
            return entity;
        };
        oscar['get'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'isClaimed';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            mike = entity.uses;
            entity = entity.maxUses;
            entity = mike >= entity;
            return entity;
        };
        oscar['get'] = golf;
        mike[2] = oscar;
        oscar = {};
        golf = 'remainingUses';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            mike = entity.maxUses;
            entity = entity.uses;
            entity = mike - entity;
            return entity;
        };
        oscar['get'] = golf;
        mike[3] = oscar;
        oscar = {};
        golf = 'isSubscription';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            entity = this;
            mike = entity.subscriptionPlanId;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        oscar['get'] = golf;
        mike[4] = oscar;
        oscar = {};
        golf = 'premiumSubscriptionType';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            _fun69640: for(var _fun69640_ip = 0; ; ) switch(_fun69640_ip) {
 0:
                mike = this;
                entity = mike.isSubscription;
                if(!entity) { _fun69640_ip = 29; continue _fun69640 }
 12:
                zulu = _closure1_slot9;
                mike = mike.skuId;
                entity = zulu[mike];
 29:
                if(entity) { _fun69640_ip = 34; continue _fun69640 }
 32:
                entity = null;
 34:
                return entity;
            }
        };
        oscar['get'] = golf;
        mike[5] = oscar;
        oscar = {};
        golf = 'isSelfRedeemable';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 9;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.hasFlag;
            mike = this;
            mike = mike.flags;
            entity = _closure1_slot10;
            entity = entity.NOT_SELF_REDEEMABLE;
            entity = zulu.bind(tango)(mike, entity);
            entity = !entity;
            return entity;
        };
        oscar['get'] = golf;
        mike[6] = oscar;
        oscar = {};
        golf = 'isExistingPremiumSubscriptionDisallowed';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 9;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.hasFlag;
            mike = this;
            mike = mike.flags;
            entity = _closure1_slot10;
            entity = entity.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        oscar['get'] = golf;
        mike[7] = oscar;
        oscar = {};
        golf = 'analyticsData';
        oscar['key'] = golf;
        golf = function() { // Original name: get
            mike = this;
            entity = {};
            zulu = mike.code;
            entity['gift_code'] = zulu;
            mike = mike.maxUses;
            entity['gift_code_max_uses'] = mike;
            return entity;
        };
        oscar['get'] = golf;
        mike[8] = oscar;
        oscar = {};
        golf = 'toString';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            entity = entity.code;
            return entity;
        };
        oscar['value'] = golf;
        mike[9] = oscar;
        oscar = {};
        golf = 'createFromServer';
        oscar['key'] = golf;
        entity = function(argFoo) { // Original name: value
            _fun69645: for(var _fun69645_ip = 0; ; ) switch(_fun69645_ip) {
 0:
                report = argFoo;
                zulu = _closure2_slot0;
                entity = {};
                tango = report.user;
                mike = null;
                oscar = mike != tango;
                tango = null;
                if(!oscar) { _fun69645_ip = 38; continue _fun69645 }
 28:
                oscar = report.user;
                tango = oscar.id;
 38:
                entity['userId'] = tango;
                tango = report.code;
                entity['code'] = tango;
                tango = report.sku_id;
                entity['skuId'] = tango;
                tango = report.application_id;
                entity['applicationId'] = tango;
                tango = report.uses;
                entity['uses'] = tango;
                tango = report.max_uses;
                entity['maxUses'] = tango;
                tango = report.store_listing;
                oscar = mike != tango;
                tango = null;
                if(!oscar) { _fun69645_ip = 120; continue _fun69645 }
 109:
                oscar = report.store_listing;
                tango = oscar.id;
 120:
                entity['storeListingId'] = tango;
                tango = report.expires_at;
                oscar = mike != tango;
                tango = null;
                if(!oscar) { _fun69645_ip = 176; continue _fun69645 }
 140:
                golf = _closure1_slot1;
                options = _closure1_slot2;
                oscar = 8;
                oscar = options[oscar];
                options = undefined;
                golf = golf.bind(options)(oscar);
                oscar = report.expires_at;
                tango = golf.bind(options)(oscar);
 176:
                entity['expiresAt'] = tango;
                tango = report.redeemed;
                entity['redeemed'] = tango;
                tango = report.subscription_plan;
                if(!(mike == tango)) { _fun69645_ip = 210; continue _fun69645 }
 202:
                tango = report.subscription_plan_id;
                _fun69645_ip = 221; continue _fun69645;
 210:
                oscar = report.subscription_plan;
                tango = oscar.id;
 221:
                entity['subscriptionPlanId'] = tango;
                tango = report.subscription_plan;
                oscar = mike != tango;
                tango = null;
                if(!oscar) { _fun69645_ip = 265; continue _fun69645 }
 241:
                options = _closure1_slot8;
                golf = options.createFromServer;
                oscar = report.subscription_plan;
                tango = golf.bind(options)(oscar);
 265:
                entity['subscriptionPlan'] = tango;
                tango = false;
                entity['revoked'] = tango;
                tango = report.entitlement_branches;
                oscar = mike != tango;
                tango = null;
                if(!oscar) { _fun69645_ip = 298; continue _fun69645 }
 292:
                tango = report.entitlement_branches;
 298:
                entity['entitlementBranches'] = tango;
                tango = report.flags;
                oscar = mike != tango;
                tango = 0;
                if(!oscar) { _fun69645_ip = 322; continue _fun69645 }
 317:
                tango = report.flags;
 322:
                entity['flags'] = tango;
                tango = report.gift_style;
                entity['giftStyle'] = tango;
                tango = report.subscription_trial;
                oscar = mike != tango;
                tango = null;
                if(!oscar) { _fun69645_ip = 423; continue _fun69645 }
 352:
                oscar = {};
                golf = report.subscription_trial;
                golf = golf.id;
                oscar['id'] = golf;
                golf = report.subscription_trial;
                golf = golf.interval;
                oscar['interval'] = golf;
                golf = report.subscription_trial;
                golf = golf.interval_count;
                oscar['intervalCount'] = golf;
                golf = report.subscription_trial;
                golf = golf.sku_id;
                oscar['skuId'] = golf;
                tango = oscar;
 423:
                entity['subscriptionTrial'] = tango;
                tango = report.promotion;
                tango = mike != tango;
                mike = null;
                if(!tango) { _fun69645_ip = 560; continue _fun69645 }
 443:
                tango = {};
                oscar = report.promotion;
                oscar = oscar.id;
                tango['id'] = oscar;
                oscar = report.promotion;
                oscar = oscar.start_date;
                tango['startDate'] = oscar;
                oscar = report.promotion;
                oscar = oscar.end_date;
                tango['endDate'] = oscar;
                oscar = report.promotion;
                oscar = oscar.inbound_header_text;
                tango['inboundHeaderText'] = oscar;
                oscar = report.promotion;
                oscar = oscar.inbound_body_text;
                tango['inboundBodyText'] = oscar;
                report = report.promotion;
                report = report.inbound_help_center_link;
                tango['inboundHelpCenterLink'] = report;
                mike = tango;
 560:
                entity['promotion'] = mike;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                offset = mike;
                verify = entity;
                entity = new offset[zulu](verify, options);
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
    tango = tango.bind(entity)(report);
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'records/GiftCodeRecord.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['GiftCodeFlags'] = mike;
    return entity;
})();