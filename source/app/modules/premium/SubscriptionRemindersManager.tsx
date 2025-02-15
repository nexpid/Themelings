// app/modules/premium/SubscriptionRemindersManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun124559: for(var _fun124559_ip = 0; ; ) switch(_fun124559_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot16;
            entity = entity.bind(zulu)();
            if(entity) { _fun124559_ip = 51; continue _fun124559 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun124559_ip = 92; continue _fun124559;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun124559_ip = 71; continue _fun124559 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun124560: for(var _fun124560_ip = 0; ; ) switch(_fun124560_ip) {
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
            _fun124560_ip = 76; continue _fun124560;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot16 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.PurchasedFlags;
    var _closure1_slot13 = options;
    tango = tango.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot14 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: SubscriptionRemindersManager
            golf = this;
            romeo = 0;
            options = copyRestArgs(romeo);
            entity = _closure1_slot5;
            oscar = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(golf, oscar);
            report = _closure1_slot15;
            entity = new Array(0);
            romeo = entity;
            yankee = options;
            offset = 0;
            options = arraySpread(romeo, yankee, offset);
            entity = report.bind(tango)(golf, oscar, entity);
            var _closure3_slot0 = entity;
            report = {};
            oscar = function() { // Original name: POST_CONNECTION_OPEN
                mike = _closure3_slot0;
                entity = mike.maybeFetchSubscriptions;
                entity = entity.bind(mike)();
                entity = mike.maybeFetchCountryCode;
                entity = entity.bind(mike)();
                entity = mike.maybeFetchMostRecentSubscription;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            report['POST_CONNECTION_OPEN'] = oscar;
            entity['actions'] = report;
            zulu = _closure1_slot3;
            report = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun124567: for(var _fun124567_ip = 0; ; ) switch(_fun124567_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun124567_ip = 241; continue _fun124567 }
 10:
                        tango = _closure1_slot9;
                        mike = tango.getCurrentUser;
                        oscar = mike.bind(tango)();
                        report = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 11;
                        tango = tango[mike];
                        mike = undefined;
                        report = report.bind(mike)(tango);
                        tango = report.isPremium;
                        tango = tango.bind(report)(oscar);
                        if(!tango) { _fun124567_ip = 238; continue _fun124567 }
 65:
                        report = _closure1_slot11;
                        tango = report.hasFetchedSubscriptions;
                        tango = tango.bind(report)();
                        if(tango) { _fun124567_ip = 125; continue _fun124567 }
 82:
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        tango = 12;
                        tango = oscar[tango];
                        report = report.bind(mike)(tango);
                        tango = report.fetchSubscriptions;
                        tango = tango.bind(report)();
                        SaveGenerator(address=116);
 114:
                        return tango;
 116:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(!report) { _fun124567_ip = 125; continue _fun124567 }
 122:
                        return tango;
 125:
                        report = _closure1_slot11;
                        tango = report.getPremiumSubscription;
                        oscar = tango.bind(report)();
                        report = null;
                        golf = report == oscar;
                        tango = undefined;
                        if(golf) { _fun124567_ip = 156; continue _fun124567 }
 150:
                        tango = oscar.paymentSourceId;
 156:
                        tango = report != tango;
                        if(tango) { _fun124567_ip = 187; continue _fun124567 }
 163:
                        report = _closure1_slot12;
                        golf = report.applicationIdsFetched;
                        oscar = golf.has;
                        report = _closure1_slot14;
                        tango = oscar.bind(golf)(report);
 187:
                        if(tango) { _fun124567_ip = 238; continue _fun124567 }
 190:
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        tango = 13;
                        tango = oscar[tango];
                        report = report.bind(mike)(tango);
                        tango = report.fetchUserEntitlementsForApplication;
                        zulu = _closure1_slot14;
                        zulu = tango.bind(report)(zulu);
                        SaveGenerator(address=229);
 227:
                        return zulu;
 229:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(!tango) { _fun124567_ip = 238; continue _fun124567 }
 235:
                        return zulu;
 238:
                        return mike;
 241:
                        return entity;
                    }
                };
                return entity;
            };
            report = zulu.bind(tango)(report);
            entity['maybeFetchSubscriptions'] = report;
            report = function() {
                _fun124568: for(var _fun124568_ip = 0; ; ) switch(_fun124568_ip) {
 0:
                    zulu = _closure1_slot9;
                    mike = zulu.getCurrentUser;
                    tango = mike.bind(zulu)();
                    report = null;
                    mike = report == tango;
                    if(mike) { _fun124568_ip = 58; continue _fun124568 }
 25:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 11;
                    oscar = oscar[zulu];
                    zulu = undefined;
                    oscar = golf.bind(zulu)(oscar);
                    zulu = oscar.isPremium;
                    mike = zulu.bind(oscar)(tango);
 58:
                    if(mike) { _fun124568_ip = 71; continue _fun124568 }
 61:
                    zulu = tango.purchasedFlags;
                    mike = report == zulu;
 71:
                    if(mike) { _fun124568_ip = 181; continue _fun124568 }
 74:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    options = 14;
                    zulu = zulu[options];
                    golf = undefined;
                    verify = report.bind(golf)(zulu);
                    oscar = verify.hasFlag;
                    report = tango.purchasedFlags;
                    zulu = _closure1_slot13;
                    zulu = zulu.PREMIUM_TIER_1;
                    zulu = oscar.bind(verify)(report, zulu);
                    zulu = !zulu;
                    if(!zulu) { _fun124568_ip = 178; continue _fun124568 }
 130:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[options];
                    golf = oscar.bind(golf)(report);
                    oscar = golf.hasFlag;
                    report = tango.purchasedFlags;
                    tango = _closure1_slot13;
                    tango = tango.PREMIUM_TIER_2;
                    tango = oscar.bind(golf)(report, tango);
                    zulu = !tango;
 178:
                    mike = zulu;
 181:
                    if(mike) { _fun124568_ip = 216; continue _fun124568 }
 184:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    entity = mike.fetchMostRecentSubscription;
                    entity = entity.bind(mike)();
 216:
                    entity = undefined;
                    return entity;
                }
            };
            entity['maybeFetchMostRecentSubscription'] = report;
            report = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun124570: for(var _fun124570_ip = 0; ; ) switch(_fun124570_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun124570_ip = 108; continue _fun124570 }
 7:
                        zulu = _closure1_slot9;
                        mike = zulu.getCurrentUser;
                        oscar = mike.bind(zulu)();
                        report = _closure1_slot1;
                        zulu = _closure1_slot2;
                        mike = 11;
                        mike = zulu[mike];
                        zulu = undefined;
                        report = report.bind(zulu)(mike);
                        mike = report.isPremium;
                        mike = mike.bind(report)(oscar);
                        if(!mike) { _fun124570_ip = 72; continue _fun124570 }
 59:
                        tango = _closure1_slot10;
                        tango = tango.ipCountryCodeLoaded;
                        mike = !tango;
 72:
                        if(!mike) { _fun124570_ip = 102; continue _fun124570 }
 75:
                        tango = _closure3_slot0;
                        mike = tango.fetchCountryCode;
                        mike = mike.bind(tango)();
                        SaveGenerator(address=96);
 94:
                        return mike;
 96:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun124570_ip = 105; continue _fun124570 }
 102:
                        return zulu;
 105:
                        return mike;
 108:
                        return entity;
                    }
                };
                return entity;
            };
            report = zulu.bind(tango)(report);
            entity['maybeFetchCountryCode'] = report;
            mike = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun124572: for(var _fun124572_ip = 0; ; ) switch(_fun124572_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun124572_ip = 114; continue _fun124572 }
 7:
                        report = _closure1_slot0;
                        mike = _closure1_slot2;
                        oscar = 12;
                        mike = mike[oscar];
                        tango = undefined;
                        report = report.bind(tango)(mike);
                        mike = report.fetchIpCountryCode;
                        mike = mike.bind(report)();
                        SaveGenerator(address=46);
 44:
                        return mike;
 46:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun124572_ip = 111; continue _fun124572 }
 52:
                        report = _closure1_slot10;
                        golf = report.ipCountryCode;
                        report = null;
                        if(!(report != golf)) { _fun124572_ip = 105; continue _fun124572 }
 68:
                        report = _closure1_slot0;
                        zulu = _closure1_slot2;
                        zulu = zulu[oscar];
                        report = report.bind(tango)(zulu);
                        zulu = report.fetchPaymentSources;
                        zulu = zulu.bind(report)();
                        SaveGenerator(address=99);
 97:
                        return zulu;
 99:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun124572_ip = 108; continue _fun124572 }
 105:
                        return tango;
 108:
                        return zulu;
 111:
                        return mike;
 114:
                        return entity;
                    }
                };
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            entity['fetchCountryCode'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot8;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot4;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/SubscriptionRemindersManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();