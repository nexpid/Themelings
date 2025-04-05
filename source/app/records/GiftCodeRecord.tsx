// app/records/GiftCodeRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golfie;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    michal = global;
    offset = michal.Object;
    option = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = verify.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = verify.bind(entity)(report);
    option = 6;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 7;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    option = option.PremiumSubscriptionSKUToPremiumType;
    var _closure1_slot9 = option;
    verify = michal.Object;
    option = verify.freeze;
    michal = {'PAYMENT_SOURCE_REQUIRED': 1, 'EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED': 2, 'NOT_SELF_REDEEMABLE': 4};
    michal = option.bind(verify)(michal);
    var _closure1_slot10 = michal;
    tangon = function(argFoo) {
        report = function(argFoo) { // Original name: GiftCodeRecord
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                report = this;
                entity = _closure1_slot3;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)(report, zuuluu);
                entity = _closure1_slot6;
                offset = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot5;
                entity = _closure1_slot11;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 65; continue _fun00003 }
 52:
                entity = offset.apply;
                entity = entity.bind(offset)(report, tangon);
                _fun00004_ip = 103; continue _fun00003;
 65:
                golfie = global;
                verify = golfie.Reflect;
                option = verify.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                golfie = oscard.constructor;
                oscard = new Array(0);
                entity = option.bind(verify)(offset, oscard, golfie);
 103:
                entity = zuuluu.bind(tangon)(report, entity);
                zuuluu = michal.userId;
                entity['userId'] = zuuluu;
                zuuluu = michal.code;
                entity['code'] = zuuluu;
                zuuluu = michal.skuId;
                entity['skuId'] = zuuluu;
                zuuluu = michal.applicationId;
                entity['applicationId'] = zuuluu;
                zuuluu = michal.uses;
                entity['uses'] = zuuluu;
                zuuluu = michal.maxUses;
                entity['maxUses'] = zuuluu;
                zuuluu = michal.expiresAt;
                entity['expiresAt'] = zuuluu;
                zuuluu = michal.redeemed;
                entity['redeemed'] = zuuluu;
                zuuluu = michal.storeListingId;
                entity['storeListingId'] = zuuluu;
                zuuluu = michal.subscriptionPlanId;
                entity['subscriptionPlanId'] = zuuluu;
                zuuluu = michal.subscriptionPlan;
                entity['subscriptionPlan'] = zuuluu;
                zuuluu = michal.revoked;
                entity['revoked'] = zuuluu;
                zuuluu = michal.entitlementBranches;
                entity['entitlementBranches'] = zuuluu;
                zuuluu = michal.flags;
                entity['flags'] = zuuluu;
                zuuluu = michal.subscriptionTrial;
                entity['subscriptionTrial'] = zuuluu;
                zuuluu = michal.promotion;
                entity['promotion'] = zuuluu;
                michal = michal.giftStyle;
                entity['giftStyle'] = michal;
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
        michal = 'isExpired';
        oscard['key'] = michal;
        michal = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = this;
                tangon = entity.expiresAt;
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00006_ip = 58; continue _fun00005 }
 18:
                report = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 8;
                michal = zuuluu[michal];
                zuuluu = undefined;
                michal = report.bind(zuuluu)(michal);
                zuuluu = michal.bind(zuuluu)();
                michal = zuuluu.isAfter;
                entity = michal.bind(zuuluu)(tangon);
 58:
                return entity;
            }
        };
        oscard['value'] = michal;
        michal = new Array(10);
        michal[0] = oscard;
        oscard = {};
        golfie = 'hasMultipleCopies';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.maxUses;
            entity = 1;
            entity = michal > entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'isClaimed';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.uses;
            entity = entity.maxUses;
            entity = michal >= entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[2] = oscard;
        oscard = {};
        golfie = 'remainingUses';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.maxUses;
            entity = entity.uses;
            entity = michal - entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[3] = oscard;
        oscard = {};
        golfie = 'isSubscription';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            entity = this;
            michal = entity.subscriptionPlanId;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        oscard['get'] = golfie;
        michal[4] = oscard;
        oscard = {};
        golfie = 'premiumSubscriptionType';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = this;
                entity = michal.isSubscription;
                if(!entity) { _fun00008_ip = 29; continue _fun00007 }
 12:
                zuuluu = _closure1_slot9;
                michal = michal.skuId;
                entity = zuuluu[michal];
 29:
                if(entity) { _fun00008_ip = 34; continue _fun00007 }
 32:
                entity = null;
 34:
                return entity;
            }
        };
        oscard['get'] = golfie;
        michal[5] = oscard;
        oscard = {};
        golfie = 'isSelfRedeemable';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.hasFlag;
            michal = this;
            michal = michal.flags;
            entity = _closure1_slot10;
            entity = entity.NOT_SELF_REDEEMABLE;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = !entity;
            return entity;
        };
        oscard['get'] = golfie;
        michal[6] = oscard;
        oscard = {};
        golfie = 'isExistingPremiumSubscriptionDisallowed';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.hasFlag;
            michal = this;
            michal = michal.flags;
            entity = _closure1_slot10;
            entity = entity.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        oscard['get'] = golfie;
        michal[7] = oscard;
        oscard = {};
        golfie = 'analyticsData';
        oscard['key'] = golfie;
        golfie = function() { // Original name: get
            michal = this;
            entity = {};
            zuuluu = michal.code;
            entity['gift_code'] = zuuluu;
            michal = michal.maxUses;
            entity['gift_code_max_uses'] = michal;
            return entity;
        };
        oscard['get'] = golfie;
        michal[8] = oscard;
        oscard = {};
        golfie = 'toString';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            entity = entity.code;
            return entity;
        };
        oscard['value'] = golfie;
        michal[9] = oscard;
        oscard = {};
        golfie = 'createFromServer';
        oscard['key'] = golfie;
        entity = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                zuuluu = _closure2_slot0;
                entity = {};
                tangon = report.user;
                michal = null;
                oscard = michal != tangon;
                tangon = null;
                if(!oscard) { _fun00010_ip = 38; continue _fun00009 }
 28:
                oscard = report.user;
                tangon = oscard.id;
 38:
                entity['userId'] = tangon;
                tangon = report.code;
                entity['code'] = tangon;
                tangon = report.sku_id;
                entity['skuId'] = tangon;
                tangon = report.application_id;
                entity['applicationId'] = tangon;
                tangon = report.uses;
                entity['uses'] = tangon;
                tangon = report.max_uses;
                entity['maxUses'] = tangon;
                tangon = report.store_listing;
                oscard = michal != tangon;
                tangon = null;
                if(!oscard) { _fun00010_ip = 120; continue _fun00009 }
 109:
                oscard = report.store_listing;
                tangon = oscard.id;
 120:
                entity['storeListingId'] = tangon;
                tangon = report.expires_at;
                oscard = michal != tangon;
                tangon = null;
                if(!oscard) { _fun00010_ip = 176; continue _fun00009 }
 140:
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                oscard = 8;
                oscard = option[oscard];
                option = undefined;
                golfie = golfie.bind(option)(oscard);
                oscard = report.expires_at;
                tangon = golfie.bind(option)(oscard);
 176:
                entity['expiresAt'] = tangon;
                tangon = report.redeemed;
                entity['redeemed'] = tangon;
                tangon = report.subscription_plan;
                if(!(michal == tangon)) { _fun00010_ip = 210; continue _fun00009 }
 202:
                tangon = report.subscription_plan_id;
                _fun00010_ip = 221; continue _fun00009;
 210:
                oscard = report.subscription_plan;
                tangon = oscard.id;
 221:
                entity['subscriptionPlanId'] = tangon;
                tangon = report.subscription_plan;
                oscard = michal != tangon;
                tangon = null;
                if(!oscard) { _fun00010_ip = 265; continue _fun00009 }
 241:
                option = _closure1_slot8;
                golfie = option.createFromServer;
                oscard = report.subscription_plan;
                tangon = golfie.bind(option)(oscard);
 265:
                entity['subscriptionPlan'] = tangon;
                tangon = false;
                entity['revoked'] = tangon;
                tangon = report.entitlement_branches;
                oscard = michal != tangon;
                tangon = null;
                if(!oscard) { _fun00010_ip = 298; continue _fun00009 }
 292:
                tangon = report.entitlement_branches;
 298:
                entity['entitlementBranches'] = tangon;
                tangon = report.flags;
                oscard = michal != tangon;
                tangon = 0;
                if(!oscard) { _fun00010_ip = 322; continue _fun00009 }
 317:
                tangon = report.flags;
 322:
                entity['flags'] = tangon;
                tangon = report.gift_style;
                entity['giftStyle'] = tangon;
                tangon = report.subscription_trial;
                oscard = michal != tangon;
                tangon = null;
                if(!oscard) { _fun00010_ip = 423; continue _fun00009 }
 352:
                oscard = {};
                golfie = report.subscription_trial;
                golfie = golfie.id;
                oscard['id'] = golfie;
                golfie = report.subscription_trial;
                golfie = golfie.interval;
                oscard['interval'] = golfie;
                golfie = report.subscription_trial;
                golfie = golfie.interval_count;
                oscard['intervalCount'] = golfie;
                golfie = report.subscription_trial;
                golfie = golfie.sku_id;
                oscard['skuId'] = golfie;
                tangon = oscard;
 423:
                entity['subscriptionTrial'] = tangon;
                tangon = report.promotion;
                tangon = michal != tangon;
                michal = null;
                if(!tangon) { _fun00010_ip = 560; continue _fun00009 }
 443:
                tangon = {};
                oscard = report.promotion;
                oscard = oscard.id;
                tangon['id'] = oscard;
                oscard = report.promotion;
                oscard = oscard.start_date;
                tangon['startDate'] = oscard;
                oscard = report.promotion;
                oscard = oscard.end_date;
                tangon['endDate'] = oscard;
                oscard = report.promotion;
                oscard = oscard.inbound_header_text;
                tangon['inboundHeaderText'] = oscard;
                oscard = report.promotion;
                oscard = oscard.inbound_body_text;
                tangon['inboundBodyText'] = oscard;
                report = report.promotion;
                report = report.inbound_help_center_link;
                tangon['inboundHelpCenterLink'] = report;
                michal = tangon;
 560:
                entity['promotion'] = michal;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                offset = michal;
                verify = entity;
                entity = new offset[zuuluu](verify, option);
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
    tangon = tangon.bind(entity)(report);
    report = 10;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'records/GiftCodeRecord.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['GiftCodeFlags'] = michal;
    return entity;
})();