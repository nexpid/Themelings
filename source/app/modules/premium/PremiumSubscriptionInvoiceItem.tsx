// app/modules/premium/PremiumSubscriptionInvoiceItem.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    tango = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tango;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, report);
    entity = 1;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/PremiumSubscriptionInvoiceItem.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: coalesceInvoiceItems
        report = argFoo;
        zulu = new Array(0);
        var _closure2_slot0 = zulu;
        mike = global;
        mike = mike.Set;
        tango = mike.prototype;
        tango = Object.create(tango, {constructor: {value: mike}});
        golf = tango;
        mike = new golf[mike](oscar);
        mike = mike instanceof Object ? mike : tango;
        var _closure2_slot1 = mike;
        tango = report.map;
        mike = function(argFoo) {
            _fun41919: for(var _fun41919_ip = 0; ; ) switch(_fun41919_ip) {
 0:
                entity = argFoo;
                verify = _closure2_slot0;
                mike = verify.length;
                options = 0;
                mike = options < mike;
                tango = undefined;
                oscar = 0;
                if(!mike) { _fun41919_ip = 139; continue _fun41919 }
 31:
                mike = verify[oscar];
                offset = mike.subscriptionPlanId;
                report = entity.subscriptionPlanId;
                if(!(offset === report)) { _fun41919_ip = 127; continue _fun41919 }
 51:
                offset = mike.subscriptionPlanPrice;
                report = entity.subscriptionPlanPrice;
                if(!(offset === report)) { _fun41919_ip = 127; continue _fun41919 }
 67:
                offset = mike.amount;
                report = entity.amount;
                if(!(offset === report)) { _fun41919_ip = 127; continue _fun41919 }
 83:
                offset = _closure1_slot0;
                report = _closure1_slot1;
                report = report[options];
                romeo = offset.bind(tango)(report);
                yankee = romeo.isEqual;
                offset = mike.discounts;
                report = entity.discounts;
                report = yankee.bind(romeo)(offset, report);
                if(report) { _fun41919_ip = 167; continue _fun41919 }
 127:
                oscar = oscar + 1;
                report = verify.length;
                if(oscar < report) { _fun41919_ip = 31; continue _fun41919 }
 139:
                golf = _closure2_slot0;
                oscar = golf.push;
                report = {};
                backup = report;
                foxtrot = entity;
                options = copyDataProperties(backup, foxtrot);
                report = oscar.bind(golf)(report);
                return tango;
 167:
                report = _closure2_slot1;
                tango = report.add;
                zulu = mike.subscriptionPlanId;
                zulu = tango.bind(report)(zulu);
                zulu = mike.quantity;
                entity = entity.quantity;
                entity = zulu + entity;
                mike['quantity'] = entity;
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike);
        mike = zulu.map;
        entity = function(argFoo) {
            _fun41920: for(var _fun41920_ip = 0; ; ) switch(_fun41920_ip) {
 0:
                zulu = argFoo;
                entity = {};
                golf = entity;
                oscar = zulu;
                tango = copyDataProperties(golf, oscar);
                var _closure3_slot0 = entity;
                report = _closure2_slot1;
                tango = report.has;
                zulu = zulu.subscriptionPlanId;
                zulu = tango.bind(report)(zulu);
                if(!zulu) { _fun41920_ip = 96; continue _fun41920 }
 47:
                tango = entity.amount;
                zulu = entity.quantity;
                zulu = tango * zulu;
                entity['amount'] = zulu;
                tango = entity.discounts;
                zulu = tango.map;
                mike = function(argFoo) {
                    mike = argFoo;
                    entity = {};
                    report = entity;
                    tango = mike;
                    zulu = copyDataProperties(report, tango);
                    zulu = mike.amount;
                    mike = _closure3_slot0;
                    mike = mike.quantity;
                    zulu = zulu * mike;
                    mike = 'amount';
                    entity[mike] = zulu;
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                entity['discounts'] = mike;
 96:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['coalesceInvoiceItems'] = tango;
    mike = function(argFoo) { // Original name: createInvoiceItemFromServer
        mike = argFoo;
        entity = {};
        zulu = mike.id;
        entity['id'] = zulu;
        zulu = mike.subscription_plan_id;
        entity['subscriptionPlanId'] = zulu;
        zulu = mike.subscription_plan_price;
        entity['subscriptionPlanPrice'] = zulu;
        zulu = mike.amount;
        entity['amount'] = zulu;
        zulu = mike.quantity;
        entity['quantity'] = zulu;
        mike = mike.discounts;
        entity['discounts'] = mike;
        return entity;
    };
    zulu['createInvoiceItemFromServer'] = mike;
    return entity;
})();