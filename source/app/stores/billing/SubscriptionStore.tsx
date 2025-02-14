// app/stores/billing/SubscriptionStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun41834: for(var _fun41834_ip = 0; ; ) switch(_fun41834_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot25;
            entity = entity.bind(zulu)();
            if(entity) { _fun41834_ip = 51; continue _fun41834 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun41834_ip = 92; continue _fun41834;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun41834_ip = 71; continue _fun41834 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun41835: for(var _fun41835_ip = 0; ; ) switch(_fun41835_ip) {
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
            _fun41835_ip = 74; continue _fun41835;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot25 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: getUpdatedActiveSubscriptions
        _fun41838: for(var _fun41838_ip = 0; ; ) switch(_fun41838_ip) {
 0:
            mike = argFoo;
            zulu = mike.activeSubscriptions;
            mike = mike.record;
            var _closure2_slot0 = mike;
            tango = zulu.findIndex;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike === entity;
                return entity;
            };
            tango = tango.bind(zulu)(entity);
            entity = -1;
            if(!(entity !== tango)) { _fun41838_ip = 122; continue _fun41838 }
 47:
            entity = new Array(0);
            options = 0;
            offset = entity;
            verify = zulu;
            report = arraySpread(offset, verify, options);
            golf = _closure1_slot27;
            oscar = undefined;
            oscar = golf.bind(oscar)(mike);
            if(!oscar) { _fun41838_ip = 99; continue _fun41838 }
 80:
            oscar = mike.status;
            report = _closure1_slot10;
            report = report.ENDED;
            if(!(oscar === report)) { _fun41838_ip = 116; continue _fun41838 }
 99:
            oscar = entity.splice;
            report = 1;
            report = oscar.bind(entity)(tango, report);
            _fun41838_ip = 120; continue _fun41838;
 116:
            entity[tango] = mike;
 120:
            return entity;
 122:
            entity = new Array(1);
            entity[0] = mike;
            options = 1;
            offset = entity;
            verify = zulu;
            mike = arraySpread(offset, verify, options);
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    oscar = function() { // Original name: reset
        zulu = null;
        _closure1_slot13 = zulu;
        _closure1_slot14 = zulu;
        _closure1_slot15 = zulu;
        _closure1_slot16 = zulu;
        _closure1_slot17 = zulu;
        entity = false;
        _closure1_slot18 = entity;
        _closure1_slot19 = entity;
        _closure1_slot20 = zulu;
        _closure1_slot21 = entity;
        entity = undefined;
        return entity;
    };
    entity = function(argFoo) { // Original name: isPaid
        entity = argFoo;
        mike = entity.status;
        entity = _closure1_slot10;
        entity = entity.UNPAID;
        entity = mike !== entity;
        return entity;
    };
    var _closure1_slot27 = entity;
    tango = function(argFoo) { // Original name: authenticatedUserFilter
        mike = _closure1_slot9;
        entity = mike.getId;
        mike = entity.bind(mike)();
        entity = argFoo;
        entity = entity.userId;
        entity = entity === mike;
        return entity;
    };
    var _closure1_slot28 = tango;
    mike = function(argFoo, argBar) { // Original name: getSubscriptionOfType
        _fun41843: for(var _fun41843_ip = 0; ; ) switch(_fun41843_ip) {
 0:
            foxtrot = argFoo;
            romeo = argBar;
            entity = arguments[2];
            yankee = undefined;
            if(!(entity === yankee)) { _fun41843_ip = 17; continue _fun41843 }
 15:
            entity = true;
 17:
            if(entity) { _fun41843_ip = 29; continue _fun41843 }
 23:
            verify = _closure1_slot13;
            _fun41843_ip = 33; continue _fun41843;
 29:
            verify = _closure1_slot14;
 33:
            entity = null;
            if(!(entity != verify)) { _fun41843_ip = 234; continue _fun41843 }
 42:
            golf = verify;
            for(tango in golf)
 56:
            {
 68:
                mike = tango;
                mike = verify[mike];
                zulu = _closure1_slot28;
                zulu = zulu.bind(yankee)(mike);
                if(zulu) { _fun41843_ip = 203; continue _fun41843 }
 87:
                zulu = _closure1_slot19;
                if(zulu) { _fun41843_ip = 201; continue _fun41843 }
 94:
                backup = _closure1_slot9;
                zulu = backup.getId;
                result = zulu.bind(backup)();
                backup = _closure1_slot23;
                zulu = backup.log;
                sizing = 'user id mismatch between logged in user and SubscriptionStore user';
                zulu = zulu.bind(backup)(sizing);
                backup = _closure1_slot0;
                kilo = _closure1_slot1;
                zulu = 11;
                zulu = kilo[zulu];
                kilo = backup.bind(yankee)(zulu);
                backup = kilo.captureBillingMessage;
                zulu = {};
                output = {};
                output['authUserId'] = result;
                result = mike.id;
                output['subscriptionId'] = result;
                result = mike.userId;
                output['subscriptionUserId'] = result;
                zulu['extra'] = output;
                zulu = backup.bind(kilo)(sizing, zulu);
                zulu = true;
                _closure1_slot19 = zulu;
 201:
                return entity;
 203:
                zulu = mike.type;
                if(zulu !== foxtrot) { _fun41843_ip = 56; continue _fun41843 }
 215:
                if(!(entity != romeo)) { _fun41843_ip = 230; continue _fun41843 }
 219:
                zulu = romeo.bind(yankee)(mike);
                if(!zulu) { _fun41843_ip = 56; continue _fun41843 }
 230:
                return mike;
            }
 232:
            return entity;
 234:
            return entity;
        }
    };
    var _closure1_slot29 = mike;
    entity = global;
    romeo = entity.Object;
    offset = romeo.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(romeo)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 5;
    report = options[report];
    report = golf.bind(entity)(report);
    report = report.isNoneSubscription;
    var _closure1_slot7 = report;
    report = 6;
    report = options[report];
    report = golf.bind(entity)(report);
    report = report.SubscriptionRecord;
    var _closure1_slot8 = report;
    report = 7;
    report = options[report];
    report = verify.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 8;
    report = options[report];
    report = golf.bind(entity)(report);
    offset = report.SubscriptionStatusTypes;
    var _closure1_slot10 = offset;
    report = report.SubscriptionTypes;
    var _closure1_slot11 = report;
    report = 9;
    report = options[report];
    report = golf.bind(entity)(report);
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
    var _closure1_slot22 = report;
    report = 10;
    report = options[report];
    offset = verify.bind(entity)(report);
    report = offset.prototype;
    romeo = Object.create(report, {constructor: {value: offset}});
    report = 'SubscriptionStore';
    sizing = romeo;
    kilo = report;
    offset = new sizing[offset](kilo, backup);
    offset = offset instanceof Object ? offset : romeo;
    var _closure1_slot23 = offset;
    offset = 12;
    offset = options[offset];
    offset = verify.bind(entity)(offset);
    romeo = offset.Store;
    offset = function(argFoo) {
        tango = function() { // Original name: SubscriptionStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot24;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'hasFetchedSubscriptions';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = _closure1_slot13;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(14);
        entity[0] = report;
        report = {};
        golf = 'hasFetchedMostRecentPremiumTypeSubscription';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot18;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'hasFetchedPreviousPremiumTypeSubscription';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot21;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getPremiumSubscription';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun41849: for(var _fun41849_ip = 0; ; ) switch(_fun41849_ip) {
 0:
                report = arguments[0];
                tango = undefined;
                if(!(report === tango)) { _fun41849_ip = 11; continue _fun41849 }
 9:
                report = true;
 11:
                zulu = _closure1_slot29;
                entity = _closure1_slot11;
                mike = entity.PREMIUM;
                entity = function(argFoo) {
                    zulu = _closure1_slot7;
                    entity = argFoo;
                    mike = entity.planId;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    entity = !entity;
                    return entity;
                };
                entity = zulu.bind(tango)(mike, entity, report);
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getPremiumTypeSubscription';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun41851: for(var _fun41851_ip = 0; ; ) switch(_fun41851_ip) {
 0:
                tango = arguments[0];
                zulu = undefined;
                if(!(tango === zulu)) { _fun41851_ip = 11; continue _fun41851 }
 9:
                tango = true;
 11:
                mike = _closure1_slot29;
                entity = _closure1_slot11;
                entity = entity.PREMIUM;
                entity = mike.bind(zulu)(entity, zulu, tango);
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'inReverseTrial';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun41852: for(var _fun41852_ip = 0; ; ) switch(_fun41852_ip) {
 0:
                report = _closure1_slot29;
                entity = _closure1_slot11;
                tango = entity.PREMIUM;
                mike = undefined;
                entity = true;
                tango = report.bind(mike)(tango, mike, entity);
                report = null;
                entity = report != tango;
                if(!entity) { _fun41852_ip = 95; continue _fun41852 }
 37:
                mike = tango.trialId;
                mike = report != mike;
                if(!mike) { _fun41852_ip = 92; continue _fun41852 }
 50:
                golf = _closure1_slot12;
                oscar = golf.includes;
                zulu = tango.trialId;
                zulu = oscar.bind(golf)(zulu);
                oscar = !zulu;
                zulu = !oscar;
                if(oscar) { _fun41852_ip = 89; continue _fun41852 }
 79:
                tango = tango.paymentSourceId;
                zulu = report == tango;
 89:
                mike = zulu;
 92:
                entity = mike;
 95:
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getSubscriptions';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun41853: for(var _fun41853_ip = 0; ; ) switch(_fun41853_ip) {
 0:
                entity = arguments[0];
                mike = undefined;
                if(!(entity === mike)) { _fun41853_ip = 11; continue _fun41853 }
 9:
                entity = true;
 11:
                if(entity) { _fun41853_ip = 23; continue _fun41853 }
 17:
                entity = _closure1_slot13;
                _fun41853_ip = 27; continue _fun41853;
 23:
                entity = _closure1_slot14;
 27:
                return entity;
            }
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getSubscriptionById';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun41854: for(var _fun41854_ip = 0; ; ) switch(_fun41854_ip) {
 0:
                report = _closure1_slot13;
                zulu = null;
                tango = zulu == report;
                mike = undefined;
                if(tango) { _fun41854_ip = 25; continue _fun41854 }
 18:
                tango = argFoo;
                mike = report[tango];
 25:
                zulu = zulu != mike;
                entity = undefined;
                if(!zulu) { _fun41854_ip = 37; continue _fun41854 }
 34:
                entity = mike;
 37:
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getActiveGuildSubscriptions';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot16;
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getActiveApplicationSubscriptions';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot17;
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'getSubscriptionForPlanIds';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun41857: for(var _fun41857_ip = 0; ; ) switch(_fun41857_ip) {
 0:
                mike = arguments[1];
                entity = undefined;
                if(!(mike === entity)) { _fun41857_ip = 13; continue _fun41857 }
 11:
                mike = true;
 13:
                var _closure3_slot0 = entity;
                tango = global;
                oscar = tango.Set;
                entity = oscar.prototype;
                report = Object.create(entity, {constructor: {value: oscar}});
                golf = argFoo;
                options = report;
                entity = new options[oscar](golf, oscar);
                entity = entity instanceof Object ? entity : report;
                _closure3_slot0 = entity;
                if(mike) { _fun41857_ip = 64; continue _fun41857 }
 58:
                oscar = _closure1_slot13;
                _fun41857_ip = 68; continue _fun41857;
 64:
                oscar = _closure1_slot14;
 68:
                mike = null;
                report = mike == oscar;
                entity = null;
                if(report) { _fun41857_ip = 125; continue _fun41857 }
 79:
                report = tango.Object;
                tango = report.values;
                report = tango.bind(report)(oscar);
                tango = report.find;
                zulu = function(argFoo) {
                    entity = argFoo;
                    zulu = entity.items;
                    mike = zulu.some;
                    entity = function(argFoo) {
                        zulu = _closure3_slot0;
                        mike = zulu.has;
                        entity = argFoo;
                        entity = entity.planId;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                zulu = tango.bind(report)(zulu);
                tango = mike != zulu;
                mike = null;
                if(!tango) { _fun41857_ip = 122; continue _fun41857 }
 119:
                mike = zulu;
 122:
                entity = mike;
 125:
                return entity;
            }
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'getMostRecentPremiumTypeSubscription';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot15;
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'getPreviousPremiumTypeSubscription';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot20;
            return entity;
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'getIsSubscriptionEligibleForReward';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot22;
            return entity;
        };
        report['value'] = oscar;
        entity[13] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    offset = offset.bind(entity)(romeo);
    offset['displayName'] = report;
    report = 13;
    report = options[report];
    kilo = verify.bind(entity)(report);
    report = {};
    romeo = function(argFoo) { // Original name: handleSubscriptionsFetch
        entity = argFoo;
        options = entity.subscriptions;
        report = {};
        var _closure2_slot0 = report;
        tango = {};
        var _closure2_slot1 = tango;
        zulu = new Array(0);
        var _closure2_slot2 = zulu;
        mike = new Array(0);
        var _closure2_slot3 = mike;
        verify = _closure1_slot9;
        golf = verify.getId;
        golf = golf.bind(verify)();
        var _closure2_slot4 = golf;
        golf = options.forEach;
        oscar = function(argFoo) {
            _fun41864: for(var _fun41864_ip = 0; ; ) switch(_fun41864_ip) {
 0:
                tango = argFoo;
                zulu = tango.user_id;
                entity = _closure2_slot4;
                if(!(zulu !== entity)) { _fun41864_ip = 132; continue _fun41864 }
 20:
                entity = _closure1_slot19;
                if(entity) { _fun41864_ip = 132; continue _fun41864 }
 30:
                zulu = _closure1_slot23;
                entity = zulu.log;
                options = '[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch';
                entity = entity.bind(zulu)(options);
                oscar = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 11;
                zulu = zulu[entity];
                entity = undefined;
                golf = oscar.bind(entity)(zulu);
                oscar = golf.captureBillingMessage;
                zulu = {};
                verify = {};
                offset = _closure2_slot4;
                verify['authUserId'] = offset;
                offset = tango.id;
                verify['subscriptionId'] = offset;
                offset = tango.user_id;
                verify['subscriptionUserId'] = offset;
                zulu['extra'] = verify;
                zulu = oscar.bind(golf)(options, zulu);
                zulu = true;
                _closure1_slot19 = zulu;
                return entity;
 132:
                zulu = _closure1_slot8;
                entity = zulu.createFromServer;
                tango = entity.bind(zulu)(tango);
                zulu = _closure2_slot0;
                entity = tango.id;
                zulu[entity] = tango;
                zulu = _closure1_slot27;
                entity = undefined;
                zulu = zulu.bind(entity)(tango);
                if(!zulu) { _fun41864_ip = 309; continue _fun41864 }
 180:
                oscar = _closure2_slot1;
                zulu = tango.id;
                oscar[zulu] = tango;
                oscar = tango.type;
                zulu = _closure1_slot11;
                zulu = zulu.GUILD;
                zulu = oscar === zulu;
                if(!zulu) { _fun41864_ip = 234; continue _fun41864 }
 215:
                golf = tango.status;
                oscar = _closure1_slot10;
                oscar = oscar.ENDED;
                zulu = golf !== oscar;
 234:
                if(!zulu) { _fun41864_ip = 251; continue _fun41864 }
 237:
                oscar = _closure2_slot2;
                zulu = oscar.push;
                zulu = zulu.bind(oscar)(tango);
 251:
                oscar = tango.type;
                zulu = _closure1_slot11;
                zulu = zulu.APPLICATION;
                zulu = oscar === zulu;
                if(!zulu) { _fun41864_ip = 292; continue _fun41864 }
 273:
                oscar = tango.status;
                report = _closure1_slot10;
                report = report.ENDED;
                zulu = oscar !== report;
 292:
                if(!zulu) { _fun41864_ip = 309; continue _fun41864 }
 295:
                zulu = _closure2_slot3;
                mike = zulu.push;
                mike = mike.bind(zulu)(tango);
 309:
                return entity;
            }
        };
        oscar = golf.bind(options)(oscar);
        _closure1_slot13 = report;
        _closure1_slot14 = tango;
        _closure1_slot16 = zulu;
        _closure1_slot17 = mike;
        entity = undefined;
        return entity;
    };
    report['BILLING_SUBSCRIPTION_FETCH_SUCCESS'] = romeo;
    romeo = function(argFoo) { // Original name: handleSubscriptionUpdate
        _fun41865: for(var _fun41865_ip = 0; ; ) switch(_fun41865_ip) {
 0:
            entity = argFoo;
            tango = entity.subscription;
            mike = _closure1_slot8;
            entity = mike.createFromServer;
            report = entity.bind(mike)(tango);
            entity = {};
            options = _closure1_slot13;
            verify = entity;
            mike = copyDataProperties(verify, options);
            mike = report.id;
            entity[mike] = report;
            _closure1_slot13 = entity;
            mike = _closure1_slot27;
            entity = undefined;
            mike = mike.bind(entity)(report);
            if(!mike) { _fun41865_ip = 95; continue _fun41865 }
 68:
            mike = {};
            options = _closure1_slot14;
            verify = mike;
            tango = copyDataProperties(verify, options);
            tango = report.id;
            mike[tango] = report;
            _closure1_slot14 = mike;
 95:
            mike = _closure1_slot16;
            tango = null;
            mike = tango != mike;
            if(!mike) { _fun41865_ip = 127; continue _fun41865 }
 108:
            golf = report.type;
            oscar = _closure1_slot11;
            oscar = oscar.GUILD;
            mike = golf === oscar;
 127:
            if(!mike) { _fun41865_ip = 159; continue _fun41865 }
 130:
            oscar = _closure1_slot26;
            mike = {};
            golf = _closure1_slot16;
            mike['activeSubscriptions'] = golf;
            mike['record'] = report;
            mike = oscar.bind(entity)(mike);
            _closure1_slot16 = mike;
 159:
            mike = _closure1_slot17;
            mike = tango != mike;
            if(!mike) { _fun41865_ip = 189; continue _fun41865 }
 170:
            oscar = report.type;
            tango = _closure1_slot11;
            tango = tango.APPLICATION;
            mike = oscar === tango;
 189:
            if(!mike) { _fun41865_ip = 221; continue _fun41865 }
 192:
            tango = _closure1_slot26;
            mike = {};
            oscar = _closure1_slot17;
            mike['activeSubscriptions'] = oscar;
            mike['record'] = report;
            mike = tango.bind(entity)(mike);
            _closure1_slot16 = mike;
 221:
            return entity;
        }
    };
    report['BILLING_SUBSCRIPTION_UPDATE_SUCCESS'] = romeo;
    romeo = function(argFoo) { // Original name: handleMostRecentSubscriptionFetch
        _fun41866: for(var _fun41866_ip = 0; ; ) switch(_fun41866_ip) {
 0:
            entity = argFoo;
            tango = entity.subscription;
            zulu = true;
            _closure1_slot18 = zulu;
            entity = null;
            if(!(entity != tango)) { _fun41866_ip = 179; continue _fun41866 }
 27:
            report = _closure1_slot9;
            entity = report.getId;
            offset = entity.bind(report)();
            entity = tango.user_id;
            if(!(entity !== offset)) { _fun41866_ip = 160; continue _fun41866 }
 51:
            entity = _closure1_slot19;
            if(entity) { _fun41866_ip = 160; continue _fun41866 }
 58:
            report = _closure1_slot23;
            entity = report.log;
            options = '[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch';
            entity = entity.bind(report)(options);
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            entity = 11;
            report = report[entity];
            entity = undefined;
            golf = oscar.bind(entity)(report);
            oscar = golf.captureBillingMessage;
            report = {};
            verify = {};
            verify['authUserId'] = offset;
            offset = tango.id;
            verify['subscriptionId'] = offset;
            offset = tango.user_id;
            verify['subscriptionUserId'] = offset;
            report['extra'] = verify;
            report = oscar.bind(golf)(options, report);
            report = false;
            _closure1_slot18 = report;
            _closure1_slot19 = zulu;
            return entity;
 160:
            zulu = _closure1_slot8;
            entity = zulu.createFromServer;
            entity = entity.bind(zulu)(tango);
            _closure1_slot15 = entity;
 179:
            entity = undefined;
            return entity;
        }
    };
    report['BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS'] = romeo;
    romeo = function(argFoo) { // Original name: handlePreviousSubscriptionFetch
        _fun41867: for(var _fun41867_ip = 0; ; ) switch(_fun41867_ip) {
 0:
            entity = argFoo;
            tango = entity.subscription;
            zulu = true;
            _closure1_slot21 = zulu;
            entity = null;
            if(!(entity != tango)) { _fun41867_ip = 179; continue _fun41867 }
 27:
            report = _closure1_slot9;
            entity = report.getId;
            offset = entity.bind(report)();
            entity = tango.user_id;
            if(!(entity !== offset)) { _fun41867_ip = 160; continue _fun41867 }
 51:
            entity = _closure1_slot19;
            if(entity) { _fun41867_ip = 160; continue _fun41867 }
 58:
            report = _closure1_slot23;
            entity = report.log;
            options = '[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch';
            entity = entity.bind(report)(options);
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            entity = 11;
            report = report[entity];
            entity = undefined;
            golf = oscar.bind(entity)(report);
            oscar = golf.captureBillingMessage;
            report = {};
            verify = {};
            verify['authUserId'] = offset;
            offset = tango.id;
            verify['subscriptionId'] = offset;
            offset = tango.user_id;
            verify['subscriptionUserId'] = offset;
            report['extra'] = verify;
            report = oscar.bind(golf)(options, report);
            report = false;
            _closure1_slot21 = report;
            _closure1_slot19 = zulu;
            return entity;
 160:
            zulu = _closure1_slot8;
            entity = zulu.createFromServer;
            entity = entity.bind(zulu)(tango);
            _closure1_slot20 = entity;
 179:
            entity = undefined;
            return entity;
        }
    };
    report['BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS'] = romeo;
    report['BILLING_SUBSCRIPTION_RESET'] = oscar;
    romeo = function(argFoo) { // Original name: handleSubscriptionRewardEligibilityFetch
        entity = argFoo;
        mike = entity.eligible;
        _closure1_slot22 = mike;
        entity = undefined;
        return entity;
    };
    report['BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS'] = romeo;
    yankee = function(argFoo) { // Original name: handleSubscriptionRewardEligibilityFetchFailed
        _fun41869: for(var _fun41869_ip = 0; ; ) switch(_fun41869_ip) {
 0:
            mike = argFoo;
            entity = null;
            if(!(mike != entity)) { _fun41869_ip = 22; continue _fun41869 }
 9:
            entity = false;
            _closure1_slot22 = entity;
            entity = undefined;
            return entity;
 22:
            tango = "Cannot destructure 'undefined' or 'null'.";
            report = mike;
            entity = throwTypeError(report, tango);
            entity = undefined;
            throw entity;
        }
    };
    report['BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE'] = yankee;
    report['LOGOUT'] = oscar;
    oscar = offset.prototype;
    oscar = Object.create(oscar, {constructor: {value: offset}});
    sizing = oscar;
    backup = report;
    report = new sizing[offset](kilo, backup, foxtrot);
    report = report instanceof Object ? report : oscar;
    oscar = 14;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'stores/billing/SubscriptionStore.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['authenticatedUserFilter'] = tango;
    zulu['getSubscriptionOfType'] = mike;
    return entity;
})();