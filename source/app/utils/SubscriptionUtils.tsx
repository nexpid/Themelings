// app/utils/SubscriptionUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot11;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot11;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    report = function(argFoo) { // Original name: getSubscriptionPlans
        entity = argFoo;
        zulu = entity.items;
        mike = zulu.map;
        entity = function(argFoo) {
            tango = _closure1_slot5;
            zulu = tango.get;
            entity = argFoo;
            entity = entity.planId;
            entity = zulu.bind(tango)(entity);
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 5;
            mike = tango[mike];
            report = undefined;
            tango = zulu.bind(report)(mike);
            mike = null;
            zulu = mike != entity;
            mike = 'Unable to fetch plan';
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot12 = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: subscriptionCanSwitchImmediately
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = argBar;
            tango = argBaz;
            mike = entity.getCurrentSubscriptionPlanIdForGroup;
            zulu = mike.bind(entity)(tango);
            mike = entity.type;
            entity = _closure1_slot7;
            entity = entity.PREMIUM;
            entity = mike === entity;
            if(!entity) { _fun00008_ip = 51; continue _fun00007 }
 45:
            mike = null;
            entity = mike == zulu;
 51:
            if(entity) { _fun00008_ip = 173; continue _fun00007 }
 54:
            golf = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 5;
            offset = verify[mike];
            options = undefined;
            romeo = golf.bind(options)(offset);
            offset = null;
            yankee = offset != zulu;
            offset = 'Current subscription has no plan in group';
            offset = romeo.bind(options)(yankee, offset);
            mike = verify[mike];
            golf = golf.bind(options)(mike);
            mike = _closure1_slot8;
            mike = mike.PREMIUM_YEAR_TIER_1;
            mike = zulu === mike;
            if(!mike) { _fun00008_ip = 134; continue _fun00007 }
 120:
            oscar = _closure1_slot8;
            oscar = oscar.PREMIUM_MONTH_TIER_2;
            mike = report === oscar;
 134:
            oscar = !mike;
            mike = 'Unexpected plan switch';
            mike = golf.bind(options)(oscar, mike);
            mike = tango.indexOf;
            zulu = mike.bind(tango)(zulu);
            mike = tango.indexOf;
            mike = mike.bind(tango)(report);
            entity = zulu < mike;
 173:
            return entity;
        }
    };
    var _closure1_slot13 = tango;
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
    var _closure1_slot3 = oscar;
    oscar = 1;
    offset = options[oscar];
    oscar = argCorge;
    oscar = oscar.bind(entity)(offset);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.SubscriptionStatusTypes;
    var _closure1_slot6 = verify;
    oscar = oscar.SubscriptionTypes;
    var _closure1_slot7 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.SubscriptionPlans;
    var _closure1_slot8 = verify;
    oscar = oscar.SubscriptionPlanInfo;
    var _closure1_slot9 = oscar;
    oscar = 11;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'utils/SubscriptionUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['getSubscriptionPlans'] = report;
    report = function(argFoo) { // Original name: getSubscriptionSKUs
        zulu = _closure1_slot12;
        mike = undefined;
        entity = argFoo;
        zulu = zulu.bind(mike)(entity);
        mike = zulu.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.skuId;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getSubscriptionSKUs'] = report;
    zulu['subscriptionCanSwitchImmediately'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: subscriptionCanDowngrade
        report = _closure1_slot13;
        tango = undefined;
        zulu = argFoo;
        mike = argBar;
        entity = argBaz;
        entity = report.bind(tango)(zulu, mike, entity);
        entity = !entity;
        return entity;
    };
    zulu['subscriptionCanDowngrade'] = tango;
    tango = function(argFoo, argBar) { // Original name: getOrFetchSubscriptionPlan
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            offset = argFoo;
            zulu = _closure1_slot5;
            entity = zulu.get;
            entity = entity.bind(zulu)(offset);
            report = null;
            if(!(report == entity)) { _fun00010_ip = 179; continue _fun00009 }
 29:
            zulu = _closure1_slot9;
            zulu = zulu[offset];
            options = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 5;
            oscar = golf[tango];
            tango = undefined;
            options = options.bind(tango)(oscar);
            oscar = report != zulu;
            report = global;
            report = report.HermesInternal;
            verify = report.concat;
            report = 'Missing hardcoded subscriptionPlan: ';
            report = verify.bind(report)(offset);
            report = options.bind(tango)(oscar, report);
            oscar = _closure1_slot0;
            report = 6;
            report = golf[report];
            oscar = oscar.bind(tango)(report);
            report = oscar.castPremiumSubscriptionAsSkuId;
            zulu = zulu.skuId;
            report = report.bind(oscar)(zulu);
            oscar = _closure1_slot5;
            zulu = oscar.isFetchingForSKU;
            zulu = zulu.bind(oscar)(report);
            if(zulu) { _fun00010_ip = 179; continue _fun00009 }
 144:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 7;
            mike = oscar[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.fetchSubscriptionPlansForSKU;
            mike = argBar;
            mike = zulu.bind(tango)(report, mike);
 179:
            return entity;
        }
    };
    zulu['getOrFetchSubscriptionPlan'] = tango;
    tango = function(argFoo, argBar) { // Original name: useGetOrFetchSubscriptionPlan
        options = argFoo;
        golf = argBar;
        var _closure2_slot0 = options;
        var _closure2_slot1 = golf;
        tango = _closure1_slot0;
        report = _closure1_slot2;
        entity = 8;
        entity = report[entity];
        oscar = undefined;
        verify = tango.bind(oscar)(entity);
        report = verify.useStateFromStoresArray;
        entity = _closure1_slot5;
        tango = new Array(1);
        tango[0] = entity;
        entity = function() {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = _closure2_slot0;
                mike = null;
                tango = mike != zulu;
                zulu = null;
                if(!tango) { _fun00012_ip = 39; continue _fun00011 }
 18:
                report = _closure1_slot5;
                tango = report.get;
                entity = _closure2_slot0;
                zulu = tango.bind(report)(entity);
 39:
                entity = new Array(2);
                entity[0] = zulu;
                mike = mike != zulu;
                if(!mike) { _fun00012_ip = 78; continue _fun00011 }
 54:
                report = _closure1_slot5;
                tango = report.isFetchingForSKU;
                zulu = zulu.skuId;
                mike = tango.bind(report)(zulu);
 78:
                entity[1] = mike;
                return entity;
            }
        };
        report = report.bind(verify)(tango, entity);
        tango = _closure1_slot3;
        entity = 2;
        report = tango.bind(oscar)(report, entity);
        entity = 0;
        entity = report[entity];
        var _closure2_slot2 = entity;
        tango = 1;
        oscar = report[tango];
        var _closure2_slot3 = oscar;
        report = _closure1_slot4;
        tango = report.useEffect;
        zulu = new Array(4);
        zulu[0] = entity;
        zulu[1] = options;
        zulu[2] = golf;
        zulu[3] = oscar;
        mike = function() {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = _closure2_slot2;
                tango = null;
                if(!(tango == mike)) { _fun00014_ip = 169; continue _fun00013 }
 16:
                mike = _closure2_slot0;
                if(!(tango != mike)) { _fun00014_ip = 169; continue _fun00013 }
 27:
                mike = _closure2_slot3;
                if(mike) { _fun00014_ip = 169; continue _fun00013 }
 37:
                mike = _closure1_slot9;
                offset = _closure2_slot0;
                mike = mike[offset];
                oscar = _closure1_slot1;
                options = _closure1_slot2;
                report = 5;
                report = options[report];
                golf = undefined;
                oscar = oscar.bind(golf)(report);
                report = tango != mike;
                tango = global;
                tango = tango.HermesInternal;
                verify = tango.concat;
                tango = 'Missing hardcoded subscriptionPlan: ';
                tango = verify.bind(tango)(offset);
                tango = oscar.bind(golf)(report, tango);
                oscar = _closure1_slot0;
                zulu = 7;
                zulu = options[zulu];
                tango = oscar.bind(golf)(zulu);
                zulu = tango.fetchSubscriptionPlansForSKU;
                report = 6;
                report = options[report];
                oscar = oscar.bind(golf)(report);
                report = oscar.castPremiumSubscriptionAsSkuId;
                mike = mike.skuId;
                mike = report.bind(oscar)(mike);
                entity = _closure2_slot1;
                entity = zulu.bind(tango)(mike, entity);
 169:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useGetOrFetchSubscriptionPlan'] = tango;
    mike = function(argFoo) { // Original name: getSubscriptionPauseDurations
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zulu = argFoo;
            entity = global;
            report = entity.Object;
            tango = report.keys;
            oscar = _closure1_slot0;
            mike = _closure1_slot2;
            options = 9;
            mike = mike[options];
            golf = undefined;
            mike = oscar.bind(golf)(mike);
            mike = mike.PauseDuration;
            report = tango.bind(report)(mike);
            tango = report.filter;
            mike = function(argFoo) {
                entity = global;
                zulu = entity.isNaN;
                tango = entity.Number;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity);
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            mike = tango.bind(report)(mike);
            report = zulu.status;
            tango = _closure1_slot6;
            tango = tango.PAUSED;
            if(!(report === tango)) { _fun00016_ip = 311; continue _fun00015 }
 93:
            report = zulu.pauseEndsAt;
            tango = null;
            if(!(tango == report)) { _fun00016_ip = 125; continue _fun00015 }
 105:
            tango = {};
            report = new Array(0);
            tango['durations'] = report;
            report = 0;
            tango['currentDaysPaused'] = report;
            return tango;
 125:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 10;
            offset = oscar[tango];
            yankee = report.bind(golf)(offset);
            offset = zulu.currentPeriodStart;
            yankee = yankee.bind(golf)(offset);
            tango = oscar[tango];
            tango = report.bind(golf)(tango);
            zulu = zulu.pauseEndsAt;
            offset = tango.bind(golf)(zulu);
            tango = entity.Math;
            zulu = tango.round;
            oscar = offset.diff;
            report = 'days';
            entity = true;
            entity = oscar.bind(offset)(yankee, report, entity);
            zulu = zulu.bind(tango)(entity);
            tango = new Array(0);
            entity = _closure1_slot10;
            oscar = entity.bind(golf)(mike);
            report = oscar.bind(golf)();
            entity = report.done;
            if(entity) { _fun00016_ip = 297; continue _fun00015 }
 236:
            offset = report.value;
            yankee = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[options];
            entity = yankee.bind(golf)(entity);
            entity = entity.PauseDuration;
            entity = entity[offset];
            if(!(entity > zulu)) { _fun00016_ip = 282; continue _fun00015 }
 272:
            entity = tango.push;
            entity = entity.bind(tango)(offset);
 282:
            offset = oscar.bind(golf)();
            entity = offset.done;
            report = offset;
            if(!entity) { _fun00016_ip = 236; continue _fun00015 }
 297:
            entity = {};
            entity['durations'] = tango;
            entity['currentDaysPaused'] = zulu;
            return entity;
 311:
            entity = {};
            entity['durations'] = mike;
            mike = 0;
            entity['currentDaysPaused'] = mike;
            return entity;
        }
    };
    zulu['getSubscriptionPauseDurations'] = mike;
    return entity;
})();