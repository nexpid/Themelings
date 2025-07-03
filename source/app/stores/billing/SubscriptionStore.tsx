// app/stores/billing/SubscriptionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
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
            _closure1_slot22 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot22 = entity;
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
            golfie = _closure1_slot24;
            oscard = undefined;
            oscard = golfie.bind(oscard)(michal);
            if(!oscard) { _fun00004_ip = 99; continue _fun00003 }
 80:
            oscard = michal.status;
            report = _closure1_slot8;
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
    var _closure1_slot23 = entity;
    report = function() { // Original name: reset
        entity = null;
        _closure1_slot11 = entity;
        _closure1_slot12 = entity;
        _closure1_slot13 = entity;
        _closure1_slot14 = entity;
        _closure1_slot15 = entity;
        zuuluu = false;
        _closure1_slot16 = zuuluu;
        _closure1_slot17 = entity;
        _closure1_slot18 = zuuluu;
        _closure1_slot19 = zuuluu;
        _closure1_slot21 = entity;
        entity = undefined;
        return entity;
    };
    entity = function(argFoo) { // Original name: isPaid
        entity = argFoo;
        michal = entity.status;
        entity = _closure1_slot8;
        entity = entity.UNPAID;
        entity = michal !== entity;
        return entity;
    };
    var _closure1_slot24 = entity;
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
            verify = _closure1_slot11;
            _fun00006_ip = 33; continue _fun00005;
 29:
            verify = _closure1_slot12;
 33:
            entity = null;
            if(!(entity != verify)) { _fun00006_ip = 116; continue _fun00005 }
 39:
            golfie = verify;
            for(tangon in golfie)
 50:
            {
 59:
                michal = tangon;
                michal = verify[michal];
                backup = michal.userId;
                kiloes = _closure1_slot7;
                zuuluu = kiloes.getId;
                zuuluu = zuuluu.bind(kiloes)();
                if(!(backup === zuuluu)) { _fun00006_ip = 112; continue _fun00005 }
 89:
                zuuluu = michal.type;
                if(zuuluu !== foxtra) { _fun00006_ip = 50; continue _fun00005 }
 98:
                if(!(entity != romeon)) { _fun00006_ip = 110; continue _fun00005 }
 102:
                zuuluu = romeon.bind(yankee)(michal);
                if(!zuuluu) { _fun00006_ip = 50; continue _fun00005 }
 110:
                return michal;
 112:
                return entity;
            }
 114:
            return entity;
 116:
            return entity;
        }
    };
    var _closure1_slot25 = michal;
    entity = global;
    yankee = entity.Object;
    verify = yankee.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.isNoneSubscription;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.SubscriptionRecord;
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 8;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.SubscriptionStatusTypes;
    var _closure1_slot8 = verify;
    tangon = tangon.SubscriptionTypes;
    var _closure1_slot9 = tangon;
    tangon = 9;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.REVERSE_TRIAL_IDS;
    var _closure1_slot10 = tangon;
    tangon = null;
    var _closure1_slot11 = tangon;
    var _closure1_slot12 = tangon;
    var _closure1_slot13 = tangon;
    var _closure1_slot14 = tangon;
    var _closure1_slot15 = tangon;
    verify = false;
    var _closure1_slot16 = verify;
    var _closure1_slot17 = tangon;
    var _closure1_slot18 = verify;
    var _closure1_slot19 = verify;
    var _closure1_slot20 = tangon;
    var _closure1_slot21 = tangon;
    tangon = 10;
    tangon = golfie[tangon];
    tangon = option.bind(entity)(tangon);
    verify = tangon.Store;
    tangon = function(argFoo) {
        tangon = function() { // Original name: SubscriptionStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot0;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot3;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot22;
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
                oscard = _closure1_slot3;
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
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'hasFetchedSubscriptions';
        report['key'] = entity;
        entity = function() { // Original name: value
            michal = _closure1_slot11;
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
            entity = _closure1_slot16;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'hasFetchedPreviousPremiumTypeSubscription';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot18;
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
                zuuluu = _closure1_slot25;
                entity = _closure1_slot9;
                michal = entity.PREMIUM;
                entity = function(argFoo) {
                    zuuluu = _closure1_slot5;
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
                michal = _closure1_slot25;
                entity = _closure1_slot9;
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
                report = _closure1_slot25;
                entity = _closure1_slot9;
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
                golfie = _closure1_slot10;
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
                entity = _closure1_slot11;
                _fun00016_ip = 27; continue _fun00015;
 23:
                entity = _closure1_slot12;
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
                report = _closure1_slot11;
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
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getActiveApplicationSubscriptions';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot15;
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
                oscard = _closure1_slot11;
                _fun00020_ip = 68; continue _fun00019;
 64:
                oscard = _closure1_slot12;
 68:
                michal = null;
                report = michal == oscard;
                entity = null;
                if(report) { _fun00020_ip = 125; continue _fun00019 }
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
                if(!tangon) { _fun00020_ip = 122; continue _fun00019 }
 119:
                michal = zuuluu;
 122:
                entity = michal;
 125:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'getMostRecentPremiumTypeSubscription';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'getPreviousPremiumTypeSubscription';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot17;
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'getIsSubscriptionEligibleForReward';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot20;
            return entity;
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'getIsFetchingSubscriptionRewardEligibility';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot19;
            return entity;
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'getLastLazyPerkSync';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot21;
            return entity;
        };
        report['value'] = oscard;
        entity[15] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = tangon.bind(entity)(verify);
    tangon = 'SubscriptionStore';
    verify['displayName'] = tangon;
    tangon = 11;
    tangon = golfie[tangon];
    backup = option.bind(entity)(tangon);
    tangon = {};
    yankee = function(argFoo) { // Original name: handleSubscriptionsFetch
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
        offset = _closure1_slot7;
        option = offset.getId;
        option = option.bind(offset)();
        var _closure2_slot4 = option;
        option = verify.forEach;
        golfie = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                report = argFoo;
                zuuluu = report.user_id;
                michal = _closure2_slot4;
                if(!(zuuluu === michal)) { _fun00022_ip = 200; continue _fun00021 }
 23:
                zuuluu = _closure1_slot6;
                michal = zuuluu.createFromServer;
                zuuluu = michal.bind(zuuluu)(report);
                report = _closure2_slot0;
                michal = zuuluu.id;
                report[michal] = zuuluu;
                report = _closure1_slot24;
                michal = undefined;
                michal = report.bind(michal)(zuuluu);
                if(!michal) { _fun00022_ip = 200; continue _fun00021 }
 71:
                report = _closure2_slot1;
                michal = zuuluu.id;
                report[michal] = zuuluu;
                report = zuuluu.type;
                michal = _closure1_slot9;
                michal = michal.GUILD;
                michal = report === michal;
                if(!michal) { _fun00022_ip = 125; continue _fun00021 }
 106:
                oscard = zuuluu.status;
                report = _closure1_slot8;
                report = report.ENDED;
                michal = oscard !== report;
 125:
                if(!michal) { _fun00022_ip = 142; continue _fun00021 }
 128:
                report = _closure2_slot2;
                michal = report.push;
                michal = michal.bind(report)(zuuluu);
 142:
                report = zuuluu.type;
                michal = _closure1_slot9;
                michal = michal.APPLICATION;
                michal = report === michal;
                if(!michal) { _fun00022_ip = 183; continue _fun00021 }
 164:
                report = zuuluu.status;
                tangon = _closure1_slot8;
                tangon = tangon.ENDED;
                michal = report !== tangon;
 183:
                if(!michal) { _fun00022_ip = 200; continue _fun00021 }
 186:
                michal = _closure2_slot3;
                entity = michal.push;
                entity = entity.bind(michal)(zuuluu);
 200:
                entity = undefined;
                return entity;
            }
        };
        golfie = option.bind(verify)(golfie);
        _closure1_slot11 = oscard;
        _closure1_slot12 = report;
        _closure1_slot14 = tangon;
        _closure1_slot15 = zuuluu;
        _closure1_slot21 = michal;
        entity = undefined;
        return entity;
    };
    tangon['BILLING_SUBSCRIPTION_FETCH_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handleSubscriptionUpdate
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            tangon = entity.subscription;
            zuuluu = tangon.user_id;
            report = _closure1_slot7;
            entity = report.getId;
            entity = entity.bind(report)();
            if(!(zuuluu === entity)) { _fun00024_ip = 248; continue _fun00023 }
 39:
            zuuluu = _closure1_slot6;
            entity = zuuluu.createFromServer;
            report = entity.bind(zuuluu)(tangon);
            entity = {};
            option = _closure1_slot11;
            verify = entity;
            zuuluu = copyDataProperties(verify, option);
            zuuluu = report.id;
            entity[zuuluu] = report;
            _closure1_slot11 = entity;
            entity = _closure1_slot24;
            tangon = undefined;
            entity = entity.bind(tangon)(report);
            if(!entity) { _fun00024_ip = 122; continue _fun00023 }
 95:
            entity = {};
            option = _closure1_slot12;
            verify = entity;
            zuuluu = copyDataProperties(verify, option);
            zuuluu = report.id;
            entity[zuuluu] = report;
            _closure1_slot12 = entity;
 122:
            entity = _closure1_slot14;
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00024_ip = 154; continue _fun00023 }
 135:
            golfie = report.type;
            oscard = _closure1_slot9;
            oscard = oscard.GUILD;
            entity = golfie === oscard;
 154:
            if(!entity) { _fun00024_ip = 186; continue _fun00023 }
 157:
            oscard = _closure1_slot23;
            entity = {};
            golfie = _closure1_slot14;
            entity['activeSubscriptions'] = golfie;
            entity['record'] = report;
            entity = oscard.bind(tangon)(entity);
            _closure1_slot14 = entity;
 186:
            entity = _closure1_slot15;
            entity = zuuluu != entity;
            if(!entity) { _fun00024_ip = 216; continue _fun00023 }
 197:
            oscard = report.type;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.APPLICATION;
            entity = oscard === zuuluu;
 216:
            if(!entity) { _fun00024_ip = 248; continue _fun00023 }
 219:
            zuuluu = _closure1_slot23;
            entity = {};
            oscard = _closure1_slot15;
            entity['activeSubscriptions'] = oscard;
            entity['record'] = report;
            entity = zuuluu.bind(tangon)(entity);
            _closure1_slot14 = entity;
 248:
            entity = undefined;
            return entity;
        }
    };
    tangon['BILLING_SUBSCRIPTION_UPDATE_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handleMostRecentSubscriptionFetch
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            tangon = entity.subscription;
            entity = true;
            _closure1_slot16 = entity;
            entity = null;
            if(!(entity != tangon)) { _fun00026_ip = 67; continue _fun00025 }
 24:
            zuuluu = tangon.user_id;
            report = _closure1_slot7;
            entity = report.getId;
            entity = entity.bind(report)();
            if(!(zuuluu === entity)) { _fun00026_ip = 71; continue _fun00025 }
 48:
            zuuluu = _closure1_slot6;
            entity = zuuluu.createFromServer;
            entity = entity.bind(zuuluu)(tangon);
            _closure1_slot13 = entity;
 67:
            entity = undefined;
            return entity;
 71:
            entity = false;
            _closure1_slot16 = entity;
            entity = undefined;
            return entity;
        }
    };
    tangon['BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS'] = yankee;
    yankee = function(argFoo) { // Original name: handlePreviousSubscriptionFetch
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            entity = argFoo;
            tangon = entity.subscription;
            entity = true;
            _closure1_slot18 = entity;
            entity = null;
            if(!(entity != tangon)) { _fun00028_ip = 67; continue _fun00027 }
 24:
            zuuluu = tangon.user_id;
            report = _closure1_slot7;
            entity = report.getId;
            entity = entity.bind(report)();
            if(!(zuuluu === entity)) { _fun00028_ip = 71; continue _fun00027 }
 48:
            zuuluu = _closure1_slot6;
            entity = zuuluu.createFromServer;
            entity = entity.bind(zuuluu)(tangon);
            _closure1_slot17 = entity;
 67:
            entity = undefined;
            return entity;
 71:
            entity = false;
            _closure1_slot18 = entity;
            entity = undefined;
            return entity;
        }
    };
    tangon['BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS'] = yankee;
    tangon['BILLING_SUBSCRIPTION_RESET'] = report;
    yankee = function() { // Original name: handleSubscriptionRewardEligibilityFetchStart
        entity = true;
        _closure1_slot19 = entity;
        entity = undefined;
        return entity;
    };
    tangon['BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START'] = yankee;
    yankee = function(argFoo) { // Original name: handleSubscriptionRewardEligibilityFetch
        entity = argFoo;
        entity = entity.eligible;
        _closure1_slot20 = entity;
        entity = false;
        _closure1_slot19 = entity;
        entity = undefined;
        return entity;
    };
    tangon['BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS'] = yankee;
    offset = function(argFoo) { // Original name: handleSubscriptionRewardEligibilityFetchFailed
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            michal = argFoo;
            entity = null;
            if(!(michal != entity)) { _fun00030_ip = 26; continue _fun00029 }
 9:
            entity = false;
            _closure1_slot20 = entity;
            _closure1_slot19 = entity;
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
    tangon['BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE'] = offset;
    tangon['LOGOUT'] = report;
    report = verify.prototype;
    report = Object.create(report, {constructor: {value: verify}});
    kiloes = report;
    foxtra = tangon;
    tangon = new kiloes[verify](backup, foxtra, romeon);
    tangon = tangon instanceof Object ? tangon : report;
    report = 12;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'stores/billing/SubscriptionStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['getSubscriptionOfType'] = michal;
    return entity;
})();