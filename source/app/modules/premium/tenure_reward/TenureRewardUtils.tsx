// app/modules/premium/tenure_reward/TenureRewardUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    report = function(argFoo) { // Original name: isPremiumTier2Entitlement
        _fun66379: for(var _fun66379_ip = 0; ; ) switch(_fun66379_ip) {
 0:
            report = argFoo;
            zulu = report.type;
            entity = _closure1_slot13;
            entity = entity.PURCHASE;
            entity = zulu === entity;
            if(!entity) { _fun66379_ip = 48; continue _fun66379 }
 28:
            tango = report.skuId;
            zulu = _closure1_slot6;
            zulu = zulu.TIER_2;
            entity = tango === zulu;
 48:
            if(!entity) { _fun66379_ip = 64; continue _fun66379 }
 51:
            tango = report.applicationId;
            zulu = _closure1_slot5;
            entity = tango === zulu;
 64:
            if(!entity) { _fun66379_ip = 85; continue _fun66379 }
 67:
            tango = report.isValid;
            zulu = _closure1_slot3;
            mike = null;
            entity = tango.bind(report)(mike, zulu);
 85:
            return entity;
        }
    };
    var _closure1_slot14 = report;
    tango = function(argFoo, argBar) { // Original name: getTenureRewardEntitlement
        _fun66380: for(var _fun66380_ip = 0; ; ) switch(_fun66380_ip) {
 0:
            tango = argBar;
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = null;
            if(!(mike == tango)) { _fun66380_ip = 22; continue _fun66380 }
 18:
            mike = undefined;
            return mike;
 22:
            mike = global;
            zulu = mike.Array;
            mike = zulu.from;
            zulu = mike.bind(zulu)(tango);
            mike = zulu.find;
            entity = function(argFoo) {
                _fun66381: for(var _fun66381_ip = 0; ; ) switch(_fun66381_ip) {
 0:
                    report = argFoo;
                    zulu = report.type;
                    entity = _closure1_slot13;
                    entity = entity.PREMIUM_PURCHASE;
                    entity = zulu === entity;
                    if(!entity) { _fun66381_ip = 51; continue _fun66381 }
 28:
                    oscar = _closure2_slot0;
                    tango = oscar.includes;
                    zulu = report.skuId;
                    entity = tango.bind(oscar)(zulu);
 51:
                    if(!entity) { _fun66381_ip = 67; continue _fun66381 }
 54:
                    tango = report.applicationId;
                    zulu = _closure1_slot5;
                    entity = tango === zulu;
 67:
                    if(!entity) { _fun66381_ip = 88; continue _fun66381 }
 70:
                    tango = report.isValid;
                    zulu = _closure1_slot3;
                    mike = null;
                    entity = tango.bind(report)(mike, zulu);
 88:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot15 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot5 = verify;
    oscar = oscar.PremiumSubscriptionSKUs;
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.ALL_TENURE_REWARD_SKUS;
    var _closure1_slot7 = verify;
    verify = oscar.TenureRewardSKUs;
    var _closure1_slot8 = verify;
    verify = oscar.NitroRewardStatus;
    var _closure1_slot9 = verify;
    verify = oscar.NitroRewardType;
    var _closure1_slot10 = verify;
    oscar = oscar.AVATAR_DECO_TENURE_REWARD_SKU;
    var _closure1_slot11 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.COLLECTIBLES_APPLICATION_ID;
    var _closure1_slot12 = verify;
    oscar = oscar.EntitlementTypes;
    var _closure1_slot13 = oscar;
    oscar = 7;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/premium/tenure_reward/TenureRewardUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['isPremiumTier2Entitlement'] = report;
    report = function(argFoo) { // Original name: isValidTenureRewardEntitlement
        _fun66382: for(var _fun66382_ip = 0; ; ) switch(_fun66382_ip) {
 0:
            report = argFoo;
            zulu = report.type;
            entity = _closure1_slot13;
            entity = entity.PREMIUM_PURCHASE;
            entity = zulu === entity;
            if(!entity) { _fun66382_ip = 48; continue _fun66382 }
 28:
            oscar = _closure1_slot7;
            tango = oscar.has;
            zulu = report.skuId;
            entity = tango.bind(oscar)(zulu);
 48:
            if(!entity) { _fun66382_ip = 64; continue _fun66382 }
 51:
            tango = report.applicationId;
            zulu = _closure1_slot5;
            entity = tango === zulu;
 64:
            if(!entity) { _fun66382_ip = 85; continue _fun66382 }
 67:
            tango = report.isValid;
            zulu = _closure1_slot3;
            mike = null;
            entity = tango.bind(report)(mike, zulu);
 85:
            return entity;
        }
    };
    zulu['isValidTenureRewardEntitlement'] = report;
    report = function(argFoo) { // Original name: isValidTenureRewardEntitlementForAvatarDeco
        _fun66383: for(var _fun66383_ip = 0; ; ) switch(_fun66383_ip) {
 0:
            report = argFoo;
            zulu = report.type;
            entity = _closure1_slot13;
            entity = entity.FREE_PURCHASE;
            entity = zulu === entity;
            if(!entity) { _fun66383_ip = 42; continue _fun66383 }
 28:
            tango = report.skuId;
            zulu = _closure1_slot11;
            entity = tango === zulu;
 42:
            if(!entity) { _fun66383_ip = 58; continue _fun66383 }
 45:
            tango = report.applicationId;
            zulu = _closure1_slot12;
            entity = tango === zulu;
 58:
            if(!entity) { _fun66383_ip = 79; continue _fun66383 }
 61:
            tango = report.isValid;
            zulu = _closure1_slot3;
            mike = null;
            entity = tango.bind(report)(mike, zulu);
 79:
            return entity;
        }
    };
    zulu['isValidTenureRewardEntitlementForAvatarDeco'] = report;
    report = function(argFoo) { // Original name: getPremiumTier2Entitlement
        _fun66384: for(var _fun66384_ip = 0; ; ) switch(_fun66384_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity == zulu)) { _fun66384_ip = 13; continue _fun66384 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = global;
            mike = entity.Array;
            entity = mike.from;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.find;
            entity = function(argFoo) {
                zulu = _closure1_slot14;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getPremiumTier2Entitlement'] = report;
    zulu['getTenureRewardEntitlement'] = tango;
    tango = function(argFoo, argBar) { // Original name: getAvatarDecoEntitlment
        _fun66386: for(var _fun66386_ip = 0; ; ) switch(_fun66386_ip) {
 0:
            tango = argBar;
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = null;
            if(!(mike == tango)) { _fun66386_ip = 22; continue _fun66386 }
 18:
            mike = undefined;
            return mike;
 22:
            mike = global;
            zulu = mike.Array;
            mike = zulu.from;
            zulu = mike.bind(zulu)(tango);
            mike = zulu.find;
            entity = function(argFoo) {
                _fun66387: for(var _fun66387_ip = 0; ; ) switch(_fun66387_ip) {
 0:
                    report = argFoo;
                    zulu = report.type;
                    entity = _closure1_slot13;
                    entity = entity.FREE_PURCHASE;
                    entity = zulu === entity;
                    if(!entity) { _fun66387_ip = 45; continue _fun66387 }
 28:
                    tango = report.skuId;
                    zulu = _closure2_slot0;
                    entity = tango === zulu;
 45:
                    if(!entity) { _fun66387_ip = 61; continue _fun66387 }
 48:
                    tango = report.applicationId;
                    zulu = _closure1_slot12;
                    entity = tango === zulu;
 61:
                    if(!entity) { _fun66387_ip = 82; continue _fun66387 }
 64:
                    tango = report.isValid;
                    zulu = _closure1_slot3;
                    mike = null;
                    entity = tango.bind(report)(mike, zulu);
 82:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getAvatarDecoEntitlment'] = tango;
    tango = function(argFoo, argBar) { // Original name: isAvatarDecoApplied
        _fun66388: for(var _fun66388_ip = 0; ; ) switch(_fun66388_ip) {
 0:
            mike = argBar;
            zulu = null;
            entity = zulu != mike;
            if(!entity) { _fun66388_ip = 40; continue _fun66388 }
 12:
            mike = mike.avatarDecoration;
            tango = zulu == mike;
            zulu = undefined;
            if(tango) { _fun66388_ip = 33; continue _fun66388 }
 27:
            zulu = mike.skuId;
 33:
            mike = argFoo;
            entity = zulu === mike;
 40:
            return entity;
        }
    };
    zulu['isAvatarDecoApplied'] = tango;
    tango = function() { // Original name: getGuildBoostSlotTenureRewardEntitlement
        tango = _closure1_slot2;
        zulu = tango.getForApplication;
        mike = _closure1_slot5;
        tango = zulu.bind(tango)(mike);
        zulu = _closure1_slot15;
        entity = _closure1_slot8;
        report = entity.FREE_GUILD_BOOST_1_MONTH;
        mike = new Array(2);
        mike[0] = report;
        entity = entity.FREE_GUILD_BOOST_3_MONTHS;
        mike[1] = entity;
        entity = undefined;
        entity = zulu.bind(entity)(mike, tango);
        return entity;
    };
    zulu['getGuildBoostSlotTenureRewardEntitlement'] = tango;
    tango = function(argFoo) { // Original name: isUserTenureRewardStatusActive
        _fun66390: for(var _fun66390_ip = 0; ; ) switch(_fun66390_ip) {
 0:
            mike = argFoo;
            entity = mike.redeemable_at;
            zulu = null;
            entity = zulu != entity;
            if(!entity) { _fun66390_ip = 30; continue _fun66390 }
 20:
            mike = mike.next_tenure_reward_id;
            entity = zulu != mike;
 30:
            return entity;
        }
    };
    zulu['isUserTenureRewardStatusActive'] = tango;
    tango = function(argFoo) { // Original name: getTenureRewardBadgeDescription
        _fun66391: for(var _fun66391_ip = 0; ; ) switch(_fun66391_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot9;
            mike = mike.PENDING;
            if(!(mike !== zulu)) { _fun66391_ip = 107; continue _fun66391 }
 20:
            mike = _closure1_slot9;
            mike = mike.REDEEMABLE;
            if(!(mike !== zulu)) { _fun66391_ip = 48; continue _fun66391 }
 34:
            mike = _closure1_slot9;
            mike = mike.REDEEMED;
            mike = null;
            return mike;
 48:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 6;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.+zx47e;
            mike = zulu.bind(tango)(mike);
            return mike;
 107:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 6;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.jyYgZ2;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getTenureRewardBadgeDescription'] = tango;
    tango = function() { // Original name: getTenureRewardStatus
        _fun66392: for(var _fun66392_ip = 0; ; ) switch(_fun66392_ip) {
 0:
            tango = _closure1_slot4;
            zulu = tango.getTenureRewardStatusForRewardId;
            entity = _closure1_slot8;
            entity = entity.FREE_AVATAR_DECO_1_MONTH;
            entity = zulu.bind(tango)(entity);
            zulu = null;
            if(!(zulu == entity)) { _fun66392_ip = 59; continue _fun66392 }
 34:
            oscar = _closure1_slot4;
            report = oscar.getTenureRewardStatusForRewardId;
            tango = _closure1_slot8;
            tango = tango.FREE_GUILD_BOOST_1_MONTH;
            entity = report.bind(oscar)(tango);
 59:
            if(!(zulu == entity)) { _fun66392_ip = 88; continue _fun66392 }
 63:
            tango = _closure1_slot4;
            zulu = tango.getTenureRewardStatusForRewardId;
            mike = _closure1_slot8;
            mike = mike.FREE_GUILD_BOOST_3_MONTHS;
            entity = zulu.bind(tango)(mike);
 88:
            return entity;
        }
    };
    zulu['getTenureRewardStatus'] = tango;
    mike = function(argFoo) { // Original name: getNitroRewardType
        _fun66393: for(var _fun66393_ip = 0; ; ) switch(_fun66393_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot8;
            entity = entity.FREE_AVATAR_DECO_1_MONTH;
            if(!(tango !== entity)) { _fun66393_ip = 62; continue _fun66393 }
 20:
            entity = _closure1_slot8;
            entity = entity.FREE_GUILD_BOOST_1_MONTH;
            if(!(tango !== entity)) { _fun66393_ip = 50; continue _fun66393 }
 34:
            entity = _closure1_slot8;
            zulu = entity.FREE_GUILD_BOOST_3_MONTHS;
            entity = undefined;
            if(!(tango === zulu)) { _fun66393_ip = 60; continue _fun66393 }
 50:
            zulu = _closure1_slot10;
            entity = zulu.SERVER_BOOST;
 60:
            _fun66393_ip = 72; continue _fun66393;
 62:
            mike = _closure1_slot10;
            entity = mike.AVATAR_DECO;
 72:
            return entity;
        }
    };
    zulu['getNitroRewardType'] = mike;
    return entity;
})();