// app/stores/billing/SubscriptionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
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
            _closure1_slot26 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: getUpdatedActiveSubscriptions
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.activeSubscriptions;
            michal = michal.record;
            var _closure2_slot0 = michal;
            tangon = zuuluu.findIndex;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal === entity;
                return entity;
            };
            tangon = tangon.bind(zuuluu)(entity);
            entity = -1;
            if(!(entity !== tangon)) { _fun00004_ip = 122; continue _fun00003 }
 47:
            entity = new Array(0);
            option = 0;
            offset = entity;
            verify = zuuluu;
            report = arraySpread(offset, verify, option);
            golfie = _closure1_slot28;
            oscard = undefined;
            oscard = golfie.bind(oscard)(michal);
            if(!oscard) { _fun00004_ip = 99; continue _fun00003 }
 80:
            oscard = michal.status;
            report = _closure1_slot10;
            report = report.ENDED;
            if(!(oscard === report)) { _fun00004_ip = 116; continue _fun00003 }
 99:
            oscard = entity.splice;
            report = 1;
            report = oscard.bind(entity)(tangon, report);
            _fun00004_ip = 120; continue _fun00003;
 116:
            entity[tangon] = michal;
 120:
            return entity;
 122:
            entity = new Array(1);
            entity[0] = michal;
            option = 1;
            offset = entity;
            verify = zuuluu;
            michal = arraySpread(offset, verify, option);
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    oscard = function() { // Original name: reset
        entity = null;
        _closure1_slot13 = entity;
        _closure1_slot14 = entity;
        _closure1_slot15 = entity;
        _closure1_slot16 = entity;
        _closure1_slot17 = entity;
        zuuluu = false;
        _closure1_slot18 = zuuluu;
        _closure1_slot19 = zuuluu;
        _closure1_slot20 = entity;
        _closure1_slot21 = zuuluu;
        _closure1_slot22 = zuuluu;
        _closure1_slot24 = entity;
        entity = undefined;
        return entity;
    };
    entity = function(argFoo) { // Original name: isPaid
        entity = argFoo;
        michal = entity.status;
        entity = _closure1_slot10;
        entity = entity.UNPAID;
        entity = michal !== entity;
        return entity;
    };
    var _closure1_slot28 = entity;
    tangon = function(argFoo) { // Original name: authenticatedUserFilter
        michal = _closure1_slot9;
        entity = michal.getId;
        michal = entity.bind(michal)();
        entity = argFoo;
        entity = entity.userId;
        entity = entity === michal;
        return entity;
    };
    var _closure1_slot29 = tangon;
    michal = function(argFoo, argBar) { // Original name: getSubscriptionOfType
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            foxtra = argFoo;
            romeon = argBar;
            entity = arguments[2];
            yankee = undefined;
            if(!(entity === yankee)) { _fun00006_ip = 17; continue _fun00005 }
 15:
            entity = true;
 17:
            if(entity) { _fun00006_ip = 29; continue _fun00005 }
 23:
            verify = _closure1_slot13;
            _fun00006_ip = 33; continue _fun00005;
 29:
            verify = _closure1_slot14;
 33:
            entity = null;
            if(!(entity != verify)) { _fun00006_ip = 234; continue _fun00005 }
 42:
            golfie = verify;
            for(tangon in golfie)
 56:
            {
 68:
                michal = tangon;
                michal = verify[michal];
                zuuluu = _closure1_slot29;
                zuuluu = zuuluu.bind(yankee)(michal);
                if(zuuluu) { _fun00006_ip = 203; continue _fun00005 }
 87:
                zuuluu = _closure1_slot19;
                if(zuuluu) { _fun00006_ip = 201; continue _fun00005 }
 94:
                backup = _closure1_slot9;
                zuuluu = backup.getId;
                result = zuuluu.bind(backup)();
                backup = _closure1_slot25;
                zuuluu = backup.log;
                sizing = 'user id mismatch between logged in user and SubscriptionStore user';
                zuuluu = zuuluu.bind(backup)(sizing);
                backup = _closure1_slot0;
                kiloes = _closure1_slot1;
                zuuluu = 11;
                zuuluu = kiloes[zuuluu];
                kiloes = backup.bind(yankee)(zuuluu);
                backup = kiloes.captureBillingMessage;
                zuuluu = {};
                output = {};
                output['authUserId'] = result;
                result = michal.id;
                output['subscriptionId'] = result;
                result = michal.userId;
                output['subscriptionUserId'] = result;
                zuuluu['extra'] = output;
                zuuluu = backup.bind(kiloes)(sizing, zuuluu);
                zuuluu = true;
                _closure1_slot19 = zuuluu;
 201:
                return entity;
 203:
                zuuluu = michal.type;
                if(zuuluu !== foxtra) { _fun00006_ip = 56; continue _fun00005 }
 215:
                if(!(entity != romeon)) { _fun00006_ip = 230; continue _fun00005 }
 219:
                zuuluu = romeon.bind(yankee)(michal);
                if(!zuuluu) { _fun00006_ip = 56; continue _fun00005 }
 230:
                return michal;
            }
 232:
            return entity;
 234:
            return entity;
        }
    };
    var _closure1_slot30 = michal;
    entity = global;
    romeon = entity.Object;
    offset = romeon.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(romeon)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 5;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.isNoneSubscription;
    var _closure1_slot7 = report;
    report = 6;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.SubscriptionRecord;
    var _closure1_slot8 = report;
    report = 7;
    report = option[report];
    report = verify.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 8;
    report = option[report];
    report = golfie.bind(entity)(report);
    offset = report.SubscriptionStatusTypes;
    var _closure1_slot10 = offset;
    report = report.SubscriptionTypes;
    var _closure1_slot11 = report;
    report = 9;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.REVERSE_TRIAL_IDS;
    var _closure1_slot12 = report;
    report = null;
    var _closure1_slot13 = report;
    var _closure1_slot14 = report;
    var _closure1_slot15 = report;
    var _closure1_slot16 = report;
    var _closure1_slot17 = report;
    offset = false;
    var _closure1_slot18 = offset;
    var _closure1_slot19 = offset;
    var _closure1_slot20 = report;
    var _closure1_slot21 = offset;
    var _closure1_slot22 = offset;
    var _closure1_slot23 = report;
    var _closure1_slot24 = report;
    report = 10;
    report = option[report];
    offset = verify.bind(entity)(report);
    report = offset.prototype;
    romeon = Object.create(report, {constructor: {value: offset}});
    report = 'SubscriptionStore';
    sizing = romeon;
    kiloes = report;
    offset = new sizing[offset](kiloes, backup);
    offset = offset instanceof Object ? offset : romeon;
    var _closure1_slot25 = offset;
    offset = 12;
    offset = option[offset];
    offset = verify.bind(entity)(offset);
    romeon = offset.Store;
    offset = function(argFoo) {
        tangon = function() { // Original name: SubscriptionStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot26;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'hasFetchedSubscriptions';
        report['key'] = entity;
        entity = function() { // Original name: value
            michal = _closure1_slot13;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(16);
        entity[0] = report;
        report = {};
        golfie = 'hasFetchedMostRecentPremiumTypeSubscription';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot18;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'hasFetchedPreviousPremiumTypeSubscription';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot21;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getPremiumSubscription';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = arguments[0];
                tangon = undefined;
                if(!(report === tangon)) { _fun00010_ip = 11; continue _fun00009 }
 9:
                report = true;
 11:
                zuuluu = _closure1_slot30;
                entity = _closure1_slot11;
                michal = entity.PREMIUM;
                entity = function(argFoo) {
                    zuuluu = _closure1_slot7;
                    entity = argFoo;
                    michal = entity.planId;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    entity = !entity;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal, entity, report);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getPremiumTypeSubscription';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = arguments[0];
                zuuluu = undefined;
                if(!(tangon === zuuluu)) { _fun00012_ip = 11; continue _fun00011 }
 9:
                tangon = true;
 11:
                michal = _closure1_slot30;
                entity = _closure1_slot11;
                entity = entity.PREMIUM;
                entity = michal.bind(zuuluu)(entity, zuuluu, tangon);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'inReverseTrial';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = _closure1_slot30;
                entity = _closure1_slot11;
                tangon = entity.PREMIUM;
                michal = undefined;
                entity = true;
                tangon = report.bind(michal)(tangon, michal, entity);
                report = null;
                entity = report != tangon;
                if(!entity) { _fun00014_ip = 95; continue _fun00013 }
 37:
                michal = tangon.trialId;
                michal = report != michal;
                if(!michal) { _fun00014_ip = 92; continue _fun00013 }
 50:
                golfie = _closure1_slot12;
                oscard = golfie.includes;
                zuuluu = tangon.trialId;
                zuuluu = oscard.bind(golfie)(zuuluu);
                oscard = !zuuluu;
                zuuluu = !oscard;
                if(oscard) { _fun00014_ip = 89; continue _fun00013 }
 79:
                tangon = tangon.paymentSourceId;
                zuuluu = report == tangon;
 89:
                michal = zuuluu;
 92:
                entity = michal;
 95:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getSubscriptions';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = arguments[0];
                michal = undefined;
                if(!(entity === michal)) { _fun00016_ip = 11; continue _fun00015 }
 9:
                entity = true;
 11:
                if(entity) { _fun00016_ip = 23; continue _fun00015 }
 17:
                entity = _closure1_slot13;
                _fun00016_ip = 27; continue _fun00015;
 23:
                entity = _closure1_slot14;
 27:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getSubscriptionById';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = _closure1_slot13;
                zuuluu = null;
                tangon = zuuluu == report;
                michal = undefined;
                if(tangon) { _fun00018_ip = 25; continue _fun00017 }
 18:
                tangon = argFoo;
                michal = report[tangon];
 25:
                zuuluu = zuuluu != michal;
                entity = undefined;
                if(!zuuluu) { _fun00018_ip = 37; continue _fun00017 }
 34:
                entity = michal;
 37:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getActiveGuildSubscriptions';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot16;
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getActiveApplicationSubscriptions';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot17;
            return entity;
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'getSubscriptionForPlanIds';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = arguments[1];
                entity = undefined;
                if(!(michal === entity)) { _fun00020_ip = 13; continue _fun00019 }
 11:
                michal = true;
 13:
                var _closure3_slot0 = entity;
                tangon = global;
                oscard = tangon.Set;
                entity = oscard.prototype;
                report = Object.create(entity, {constructor: {value: oscard}});
                golfie = argFoo;
                option = report;
                entity = new option[oscard](golfie, oscard);
                entity = entity instanceof Object ? entity : report;
                _closure3_slot0 = entity;
                if(michal) { _fun00020_ip = 64; continue _fun00019 }
 58:
                oscard = _closure1_slot13;
                _fun00020_ip = 68; continue _fun00019;
 64:
                oscard = _closure1_slot14;
 68:
                michal = null;
                report = michal == oscard;
                entity = null;
                if(report) { _fun00020_ip = 126; continue _fun00019 }
 79:
                report = tangon.Object;
                tangon = report.values;
                report = tangon.bind(report)(oscard);
                tangon = report.find;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.items;
                    michal = zuuluu.some;
                    entity = function(argFoo) {
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.has;
                        entity = argFoo;
                        entity = entity.planId;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00020_ip = 123; continue _fun00019 }
 120:
                michal = zuuluu;
 123:
                entity = michal;
 126:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'getMostRecentPremiumTypeSubscription';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot15;
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'getPreviousPremiumTypeSubscription';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot20;
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'getIsSubscriptionEligibleForReward';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot23;
            return entity;
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'getIsFetchingSubscriptionRewardEligibility';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot22;
            return entity;
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'getLastLazyPerkSync';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot24;
            return entity;
        };
        report['value'] = oscard;
        entity[15] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    offset = offset.bind(entity)(romeon);
    offset['displayName'] = report;
    report = 13;
    report = option[report];
    kiloes = verify.bind(entity)(report);
    report = {};
    romeon = function(argFoo) { // Original name: handleSubscriptionsFetch
        entity = argFoo;
        verify = entity.subscriptions;
        michal = entity.lastLazyPerkSync;
        oscard = {};
        var _closure2_slot0 = oscard;
        report = {};
        var _closure2_slot1 = report;
        tangon = new Array(0);
        var _closure2_slot2 = tangon;
        zuuluu = new Array(0);
        var _closure2_slot3 = zuuluu;
        offset = _closure1_slot9;
        option = offset.getId;
        option = option.bind(offset)();
        var _closure2_slot4 = option;
        option = verify.forEach;
        golfie = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                tangon = argFoo;
                zuuluu = tangon.user_id;
                entity = _closure2_slot4;
                if(!(zuuluu !== entity)) { _fun00022_ip = 132; continue _fun00021 }
 20:
                entity = _closure1_slot19;
                if(entity) { _fun00022_ip = 132; continue _fun00021 }
 30:
                zuuluu = _closure1_slot25;
                entity = zuuluu.log;
                option = '[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch';
                entity = entity.bind(zuuluu)(option);
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 11;
                zuuluu = zuuluu[entity];
                entity = undefined;
                golfie = oscard.bind(entity)(zuuluu);
                oscard = golfie.captureBillingMessage;
                zuuluu = {};
                verify = {};
                offset = _closure2_slot4;
                verify['authUserId'] = offset;
                offset = tangon.id;
                verify['subscriptionId'] = offset;
                offset = tangon.user_id;
                verify['subscriptionUserId'] = offset;
                zuuluu['extra'] = verify;
                zuuluu = oscard.bind(golfie)(option, zuuluu);
                zuuluu = true;
                _closure1_slot19 = zuuluu;
                return entity;
 132:
                zuuluu = _closure1_slot8;
                entity = zuuluu.createFromServer;
                tangon = entity.bind(zuuluu)(tangon);
                zuuluu = _closure2_slot0;
                entity = tangon.id;
                zuuluu[entity] = tangon;
                zuuluu = _closure1_slot28;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(tangon);
                if(!zuuluu) { _fun00022_ip = 309; continue _fun00021 }
 180:
                oscard = _closure2_slot1;
                zuuluu = tangon.id;
                oscard[zuuluu] = tangon;
                oscard = tangon.type;
                zuuluu = _closure1_slot11;
                zuuluu = zuuluu.GUILD;
                zuuluu = oscard === zuuluu;
                if(!zuuluu) { _fun00022_ip = 234; continue _fun00021 }
 215:
                golfie = tangon.status;
                oscard = _closure1_slot10;
                oscard = oscard.ENDED;
                zuuluu = golfie !== oscard;
 234:
                if(!zuuluu) { _fun00022_ip = 251; continue _fun00021 }
 237:
                oscard = _closure2_slot2;
                zuuluu = oscard.push;
                zuuluu = zuuluu.bind(oscard)(tangon);
 251:
                oscard = tangon.type;
                zuuluu = _closure1_slot11;
                zuuluu = zuuluu.APPLICATION;
                zuuluu = oscard === zuuluu;
                if(!zuuluu) { _fun00022_ip = 292; continue _fun00021 }
 273:
                oscard = tangon.status;
                report = _closure1_slot10;
                report = report.ENDED;
                zuuluu = oscard !== report;
 292:
                if(!zuuluu) { _fun00022_ip = 309; continue _fun00021 }
 295:
                zuuluu = _closure2_slot3;
                michal = zuuluu.push;
                michal = michal.bind(zuuluu)(tangon);
 309:
                return entity;
            }
        };
        golfie = option.bind(verify)(golfie);
        _closure1_slot13 = oscard;
        _closure1_slot14 = report;
        _closure1_slot16 = tangon;
        _closure1_slot17 = zuuluu;
        _closure1_slot24 = michal;
        entity = undefined;
        return entity;
    };
    report['BILLING_SUBSCRIPTION_FETCH_SUCCESS'] = romeon;
    romeon = function(argFoo) { // Original name: handleSubscriptionUpdate
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tangon = entity.subscription;
            michal = _closure1_slot8;
            entity = michal.createFromServer;
            report = entity.bind(michal)(tangon);
            entity = {};
            option = _closure1_slot13;
            verify = entity;
            michal = copyDataProperties(verify, option);
            michal = report.id;
            entity[michal] = report;
            _closure1_slot13 = entity;
            michal = _closure1_slot28;
            entity = undefined;
            michal = michal.bind(entity)(report);
            if(!michal) { _fun00024_ip = 95; continue _fun00023 }
 68:
            michal = {};
            option = _closure1_slot14;
            verify = michal;
            tangon = copyDataProperties(verify, option);
            tangon = report.id;
            michal[tangon] = report;
            _closure1_slot14 = michal;
 95:
            michal = _closure1_slot16;
            tangon = null;
            michal = tangon != michal;
            if(!michal) { _fun00024_ip = 127; continue _fun00023 }
 108:
            golfie = report.type;
            oscard = _closure1_slot11;
            oscard = oscard.GUILD;
            michal = golfie === oscard;
 127:
            if(!michal) { _fun00024_ip = 159; continue _fun00023 }
 130:
            oscard = _closure1_slot27;
            michal = {};
            golfie = _closure1_slot16;
            michal['activeSubscriptions'] = golfie;
            michal['record'] = report;
            michal = oscard.bind(entity)(michal);
            _closure1_slot16 = michal;
 159:
            michal = _closure1_slot17;
            michal = tangon != michal;
            if(!michal) { _fun00024_ip = 189; continue _fun00023 }
 170:
            oscard = report.type;
            tangon = _closure1_slot11;
            tangon = tangon.APPLICATION;
            michal = oscard === tangon;
 189:
            if(!michal) { _fun00024_ip = 221; continue _fun00023 }
 192:
            tangon = _closure1_slot27;
            michal = {};
            oscard = _closure1_slot17;
            michal['activeSubscriptions'] = oscard;
            michal['record'] = report;
            michal = tangon.bind(entity)(michal);
            _closure1_slot16 = michal;
 221:
            return entity;
        }
    };
    report['BILLING_SUBSCRIPTION_UPDATE_SUCCESS'] = romeon;
    romeon = function(argFoo) { // Original name: handleMostRecentSubscriptionFetch
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            tangon = entity.subscription;
            zuuluu = true;
            _closure1_slot18 = zuuluu;
            entity = null;
            if(!(entity != tangon)) { _fun00026_ip = 179; continue _fun00025 }
 27:
            report = _closure1_slot9;
            entity = report.getId;
            offset = entity.bind(report)();
            entity = tangon.user_id;
            if(!(entity !== offset)) { _fun00026_ip = 160; continue _fun00025 }
 51:
            entity = _closure1_slot19;
            if(entity) { _fun00026_ip = 160; continue _fun00025 }
 58:
            report = _closure1_slot25;
            entity = report.log;
            option = '[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch';
            entity = entity.bind(report)(option);
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            entity = 11;
            report = report[entity];
            entity = undefined;
            golfie = oscard.bind(entity)(report);
            oscard = golfie.captureBillingMessage;
            report = {};
            verify = {};
            verify['authUserId'] = offset;
            offset = tangon.id;
            verify['subscriptionId'] = offset;
            offset = tangon.user_id;
            verify['subscriptionUserId'] = offset;
            report['extra'] = verify;
            report = oscard.bind(golfie)(option, report);
            report = false;
            _closure1_slot18 = report;
            _closure1_slot19 = zuuluu;
            return entity;
 160:
            zuuluu = _closure1_slot8;
            entity = zuuluu.createFromServer;
            entity = entity.bind(zuuluu)(tangon);
            _closure1_slot15 = entity;
 179:
            entity = undefined;
            return entity;
        }
    };
    report['BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS'] = romeon;
    romeon = function(argFoo) { // Original name: handlePreviousSubscriptionFetch
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            tangon = entity.subscription;
            zuuluu = true;
            _closure1_slot21 = zuuluu;
            entity = null;
            if(!(entity != tangon)) { _fun00028_ip = 179; continue _fun00027 }
 27:
            report = _closure1_slot9;
            entity = report.getId;
            offset = entity.bind(report)();
            entity = tangon.user_id;
            if(!(entity !== offset)) { _fun00028_ip = 160; continue _fun00027 }
 51:
            entity = _closure1_slot19;
            if(entity) { _fun00028_ip = 160; continue _fun00027 }
 58:
            report = _closure1_slot25;
            entity = report.log;
            option = '[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch';
            entity = entity.bind(report)(option);
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            entity = 11;
            report = report[entity];
            entity = undefined;
            golfie = oscard.bind(entity)(report);
            oscard = golfie.captureBillingMessage;
            report = {};
            verify = {};
            verify['authUserId'] = offset;
            offset = tangon.id;
            verify['subscriptionId'] = offset;
            offset = tangon.user_id;
            verify['subscriptionUserId'] = offset;
            report['extra'] = verify;
            report = oscard.bind(golfie)(option, report);
            report = false;
            _closure1_slot21 = report;
            _closure1_slot19 = zuuluu;
            return entity;
 160:
            zuuluu = _closure1_slot8;
            entity = zuuluu.createFromServer;
            entity = entity.bind(zuuluu)(tangon);
            _closure1_slot20 = entity;
 179:
            entity = undefined;
            return entity;
        }
    };
    report['BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS'] = romeon;
    report['BILLING_SUBSCRIPTION_RESET'] = oscard;
    romeon = function() { // Original name: handleSubscriptionRewardEligibilityFetchStart
        entity = true;
        _closure1_slot22 = entity;
        entity = undefined;
        return entity;
    };
    report['BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START'] = romeon;
    romeon = function(argFoo) { // Original name: handleSubscriptionRewardEligibilityFetch
        entity = argFoo;
        entity = entity.eligible;
        _closure1_slot23 = entity;
        entity = false;
        _closure1_slot22 = entity;
        entity = undefined;
        return entity;
    };
    report['BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS'] = romeon;
    yankee = function(argFoo) { // Original name: handleSubscriptionRewardEligibilityFetchFailed
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(michal != entity)) { _fun00030_ip = 26; continue _fun00029 }
 9:
            entity = false;
            _closure1_slot23 = entity;
            _closure1_slot22 = entity;
            entity = undefined;
            return entity;
 26:
            report = "Cannot destructure 'undefined' or 'null'.";
            oscard = michal;
            entity = throwTypeError(oscard, report);
            entity = undefined;
            throw entity;
        }
    };
    report['BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE'] = yankee;
    report['LOGOUT'] = oscard;
    oscard = offset.prototype;
    oscard = Object.create(oscard, {constructor: {value: offset}});
    sizing = oscard;
    backup = report;
    report = new sizing[offset](kiloes, backup, foxtra);
    report = report instanceof Object ? report : oscard;
    oscard = 14;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'stores/billing/SubscriptionStore.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['authenticatedUserFilter'] = tangon;
    zuuluu['getSubscriptionOfType'] = michal;
    return entity;
})();