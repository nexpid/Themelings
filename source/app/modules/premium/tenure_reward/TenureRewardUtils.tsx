// app/modules/premium/tenure_reward/TenureRewardUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    report = function(argFoo) { // Original name: isPremiumTier2Entitlement
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zuuluu = report.type;
            entity = _closure1_slot13;
            entity = entity.PURCHASE;
            entity = zuuluu === entity;
            if(!entity) { _fun00002_ip = 48; continue _fun00001 }
 28:
            tangon = report.skuId;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.TIER_2;
            entity = tangon === zuuluu;
 48:
            if(!entity) { _fun00002_ip = 64; continue _fun00001 }
 51:
            tangon = report.applicationId;
            zuuluu = _closure1_slot5;
            entity = tangon === zuuluu;
 64:
            if(!entity) { _fun00002_ip = 85; continue _fun00001 }
 67:
            tangon = report.isValid;
            zuuluu = _closure1_slot3;
            michal = null;
            entity = tangon.bind(report)(michal, zuuluu);
 85:
            return entity;
        }
    };
    var _closure1_slot14 = report;
    tangon = function(argFoo, argBar) { // Original name: getTenureRewardEntitlement
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argBar;
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = null;
            if(!(michal == tangon)) { _fun00004_ip = 22; continue _fun00003 }
 18:
            michal = undefined;
            return michal;
 22:
            michal = global;
            zuuluu = michal.Array;
            michal = zuuluu.from;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = zuuluu.find;
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = argFoo;
                    zuuluu = report.type;
                    entity = _closure1_slot13;
                    entity = entity.PREMIUM_PURCHASE;
                    entity = zuuluu === entity;
                    if(!entity) { _fun00006_ip = 51; continue _fun00005 }
 28:
                    oscard = _closure2_slot0;
                    tangon = oscard.includes;
                    zuuluu = report.skuId;
                    entity = tangon.bind(oscard)(zuuluu);
 51:
                    if(!entity) { _fun00006_ip = 67; continue _fun00005 }
 54:
                    tangon = report.applicationId;
                    zuuluu = _closure1_slot5;
                    entity = tangon === zuuluu;
 67:
                    if(!entity) { _fun00006_ip = 88; continue _fun00005 }
 70:
                    tangon = report.isValid;
                    zuuluu = _closure1_slot3;
                    michal = null;
                    entity = tangon.bind(report)(michal, zuuluu);
 88:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot15 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot5 = verify;
    oscard = oscard.PremiumSubscriptionSKUs;
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.ALL_TENURE_REWARD_SKUS;
    var _closure1_slot7 = verify;
    verify = oscard.TenureRewardSKUs;
    var _closure1_slot8 = verify;
    verify = oscard.NitroRewardStatus;
    var _closure1_slot9 = verify;
    verify = oscard.NitroRewardType;
    var _closure1_slot10 = verify;
    oscard = oscard.AVATAR_DECO_TENURE_REWARD_SKU;
    var _closure1_slot11 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot12 = verify;
    oscard = oscard.EntitlementTypes;
    var _closure1_slot13 = oscard;
    oscard = 7;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/premium/tenure_reward/TenureRewardUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['isPremiumTier2Entitlement'] = report;
    report = function(argFoo) { // Original name: isValidTenureRewardEntitlement
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            zuuluu = report.type;
            entity = _closure1_slot13;
            entity = entity.PREMIUM_PURCHASE;
            entity = zuuluu === entity;
            if(!entity) { _fun00008_ip = 48; continue _fun00007 }
 28:
            oscard = _closure1_slot7;
            tangon = oscard.has;
            zuuluu = report.skuId;
            entity = tangon.bind(oscard)(zuuluu);
 48:
            if(!entity) { _fun00008_ip = 64; continue _fun00007 }
 51:
            tangon = report.applicationId;
            zuuluu = _closure1_slot5;
            entity = tangon === zuuluu;
 64:
            if(!entity) { _fun00008_ip = 85; continue _fun00007 }
 67:
            tangon = report.isValid;
            zuuluu = _closure1_slot3;
            michal = null;
            entity = tangon.bind(report)(michal, zuuluu);
 85:
            return entity;
        }
    };
    zuuluu['isValidTenureRewardEntitlement'] = report;
    report = function(argFoo) { // Original name: isValidTenureRewardEntitlementForAvatarDeco
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            zuuluu = report.type;
            entity = _closure1_slot13;
            entity = entity.FREE_PURCHASE;
            entity = zuuluu === entity;
            if(!entity) { _fun00010_ip = 42; continue _fun00009 }
 28:
            tangon = report.skuId;
            zuuluu = _closure1_slot11;
            entity = tangon === zuuluu;
 42:
            if(!entity) { _fun00010_ip = 58; continue _fun00009 }
 45:
            tangon = report.applicationId;
            zuuluu = _closure1_slot12;
            entity = tangon === zuuluu;
 58:
            if(!entity) { _fun00010_ip = 79; continue _fun00009 }
 61:
            tangon = report.isValid;
            zuuluu = _closure1_slot3;
            michal = null;
            entity = tangon.bind(report)(michal, zuuluu);
 79:
            return entity;
        }
    };
    zuuluu['isValidTenureRewardEntitlementForAvatarDeco'] = report;
    report = function(argFoo) { // Original name: getPremiumTier2Entitlement
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            if(!(entity == zuuluu)) { _fun00012_ip = 13; continue _fun00011 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = global;
            michal = entity.Array;
            entity = michal.from;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.find;
            entity = function(argFoo) {
                zuuluu = _closure1_slot14;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getPremiumTier2Entitlement'] = report;
    zuuluu['getTenureRewardEntitlement'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getAvatarDecoEntitlment
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argBar;
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = null;
            if(!(michal == tangon)) { _fun00014_ip = 22; continue _fun00013 }
 18:
            michal = undefined;
            return michal;
 22:
            michal = global;
            zuuluu = michal.Array;
            michal = zuuluu.from;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = zuuluu.find;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    report = argFoo;
                    zuuluu = report.type;
                    entity = _closure1_slot13;
                    entity = entity.FREE_PURCHASE;
                    entity = zuuluu === entity;
                    if(!entity) { _fun00016_ip = 45; continue _fun00015 }
 28:
                    tangon = report.skuId;
                    zuuluu = _closure2_slot0;
                    entity = tangon === zuuluu;
 45:
                    if(!entity) { _fun00016_ip = 61; continue _fun00015 }
 48:
                    tangon = report.applicationId;
                    zuuluu = _closure1_slot12;
                    entity = tangon === zuuluu;
 61:
                    if(!entity) { _fun00016_ip = 82; continue _fun00015 }
 64:
                    tangon = report.isValid;
                    zuuluu = _closure1_slot3;
                    michal = null;
                    entity = tangon.bind(report)(michal, zuuluu);
 82:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getAvatarDecoEntitlment'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: isAvatarDecoApplied
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argBar;
            zuuluu = null;
            entity = zuuluu != michal;
            if(!entity) { _fun00018_ip = 40; continue _fun00017 }
 12:
            michal = michal.avatarDecoration;
            tangon = zuuluu == michal;
            zuuluu = undefined;
            if(tangon) { _fun00018_ip = 33; continue _fun00017 }
 27:
            zuuluu = michal.skuId;
 33:
            michal = argFoo;
            entity = zuuluu === michal;
 40:
            return entity;
        }
    };
    zuuluu['isAvatarDecoApplied'] = tangon;
    tangon = function() { // Original name: getGuildBoostSlotTenureRewardEntitlement
        tangon = _closure1_slot2;
        zuuluu = tangon.getForApplication;
        michal = _closure1_slot5;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = _closure1_slot15;
        entity = _closure1_slot8;
        report = entity.FREE_GUILD_BOOST_1_MONTH;
        michal = new Array(2);
        michal[0] = report;
        entity = entity.FREE_GUILD_BOOST_3_MONTHS;
        michal[1] = entity;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal, tangon);
        return entity;
    };
    zuuluu['getGuildBoostSlotTenureRewardEntitlement'] = tangon;
    tangon = function(argFoo) { // Original name: isUserTenureRewardStatusActive
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = argFoo;
            entity = michal.redeemable_at;
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00020_ip = 30; continue _fun00019 }
 20:
            michal = michal.next_tenure_reward_id;
            entity = zuuluu != michal;
 30:
            return entity;
        }
    };
    zuuluu['isUserTenureRewardStatusActive'] = tangon;
    tangon = function(argFoo) { // Original name: getTenureRewardBadgeDescription
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot9;
            michal = michal.PENDING;
            if(!(michal !== zuuluu)) { _fun00022_ip = 107; continue _fun00021 }
 20:
            michal = _closure1_slot9;
            michal = michal.REDEEMABLE;
            if(!(michal !== zuuluu)) { _fun00022_ip = 48; continue _fun00021 }
 34:
            michal = _closure1_slot9;
            michal = michal.REDEEMED;
            michal = null;
            return michal;
 48:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 6;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.+zx47e;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 107:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 6;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.jyYgZ2;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getTenureRewardBadgeDescription'] = tangon;
    tangon = function() { // Original name: getTenureRewardStatus
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tangon = _closure1_slot4;
            zuuluu = tangon.getTenureRewardStatusForRewardId;
            entity = _closure1_slot8;
            entity = entity.FREE_AVATAR_DECO_1_MONTH;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00024_ip = 59; continue _fun00023 }
 34:
            oscard = _closure1_slot4;
            report = oscard.getTenureRewardStatusForRewardId;
            tangon = _closure1_slot8;
            tangon = tangon.FREE_GUILD_BOOST_1_MONTH;
            entity = report.bind(oscard)(tangon);
 59:
            if(!(zuuluu == entity)) { _fun00024_ip = 88; continue _fun00023 }
 63:
            tangon = _closure1_slot4;
            zuuluu = tangon.getTenureRewardStatusForRewardId;
            michal = _closure1_slot8;
            michal = michal.FREE_GUILD_BOOST_3_MONTHS;
            entity = zuuluu.bind(tangon)(michal);
 88:
            return entity;
        }
    };
    zuuluu['getTenureRewardStatus'] = tangon;
    michal = function(argFoo) { // Original name: getNitroRewardType
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot8;
            entity = entity.FREE_AVATAR_DECO_1_MONTH;
            if(!(tangon !== entity)) { _fun00026_ip = 62; continue _fun00025 }
 20:
            entity = _closure1_slot8;
            entity = entity.FREE_GUILD_BOOST_1_MONTH;
            if(!(tangon !== entity)) { _fun00026_ip = 50; continue _fun00025 }
 34:
            entity = _closure1_slot8;
            zuuluu = entity.FREE_GUILD_BOOST_3_MONTHS;
            entity = undefined;
            if(!(tangon === zuuluu)) { _fun00026_ip = 60; continue _fun00025 }
 50:
            zuuluu = _closure1_slot10;
            entity = zuuluu.SERVER_BOOST;
 60:
            _fun00026_ip = 72; continue _fun00025;
 62:
            michal = _closure1_slot10;
            entity = michal.AVATAR_DECO;
 72:
            return entity;
        }
    };
    zuuluu['getNitroRewardType'] = michal;
    return entity;
})();