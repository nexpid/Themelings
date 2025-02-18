// app/modules/premium/PremiumSubscriptionInvoiceItem.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/PremiumSubscriptionInvoiceItem.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: coalesceInvoiceItems
        report = argFoo;
        zuuluu = new Array(0);
        var _closure2_slot0 = zuuluu;
        michal = global;
        michal = michal.Set;
        tangon = michal.prototype;
        tangon = Object.create(tangon, {constructor: {value: michal}});
        golfie = tangon;
        michal = new golfie[michal](oscard);
        michal = michal instanceof Object ? michal : tangon;
        var _closure2_slot1 = michal;
        tangon = report.map;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                verify = _closure2_slot0;
                michal = verify.length;
                option = 0;
                michal = option < michal;
                tangon = undefined;
                oscard = 0;
                if(!michal) { _fun00002_ip = 139; continue _fun00001 }
 31:
                michal = verify[oscard];
                offset = michal.subscriptionPlanId;
                report = entity.subscriptionPlanId;
                if(!(offset === report)) { _fun00002_ip = 127; continue _fun00001 }
 51:
                offset = michal.subscriptionPlanPrice;
                report = entity.subscriptionPlanPrice;
                if(!(offset === report)) { _fun00002_ip = 127; continue _fun00001 }
 67:
                offset = michal.amount;
                report = entity.amount;
                if(!(offset === report)) { _fun00002_ip = 127; continue _fun00001 }
 83:
                offset = _closure1_slot0;
                report = _closure1_slot1;
                report = report[option];
                romeon = offset.bind(tangon)(report);
                yankee = romeon.isEqual;
                offset = michal.discounts;
                report = entity.discounts;
                report = yankee.bind(romeon)(offset, report);
                if(report) { _fun00002_ip = 167; continue _fun00001 }
 127:
                oscard = oscard + 1;
                report = verify.length;
                if(oscard < report) { _fun00002_ip = 31; continue _fun00001 }
 139:
                golfie = _closure2_slot0;
                oscard = golfie.push;
                report = {};
                backup = report;
                foxtra = entity;
                option = copyDataProperties(backup, foxtra);
                report = oscard.bind(golfie)(report);
                return tangon;
 167:
                report = _closure2_slot1;
                tangon = report.add;
                zuuluu = michal.subscriptionPlanId;
                zuuluu = tangon.bind(report)(zuuluu);
                zuuluu = michal.quantity;
                entity = entity.quantity;
                entity = zuuluu + entity;
                michal['quantity'] = entity;
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal);
        michal = zuuluu.map;
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                entity = {};
                golfie = entity;
                oscard = zuuluu;
                tangon = copyDataProperties(golfie, oscard);
                var _closure3_slot0 = entity;
                report = _closure2_slot1;
                tangon = report.has;
                zuuluu = zuuluu.subscriptionPlanId;
                zuuluu = tangon.bind(report)(zuuluu);
                if(!zuuluu) { _fun00004_ip = 96; continue _fun00003 }
 47:
                tangon = entity.amount;
                zuuluu = entity.quantity;
                zuuluu = tangon * zuuluu;
                entity['amount'] = zuuluu;
                tangon = entity.discounts;
                zuuluu = tangon.map;
                michal = function(argFoo) {
                    michal = argFoo;
                    entity = {};
                    report = entity;
                    tangon = michal;
                    zuuluu = copyDataProperties(report, tangon);
                    zuuluu = michal.amount;
                    michal = _closure3_slot0;
                    michal = michal.quantity;
                    zuuluu = zuuluu * michal;
                    michal = 'amount';
                    entity[michal] = zuuluu;
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                entity['discounts'] = michal;
 96:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['coalesceInvoiceItems'] = tangon;
    michal = function(argFoo) { // Original name: createInvoiceItemFromServer
        michal = argFoo;
        entity = {};
        zuuluu = michal.id;
        entity['id'] = zuuluu;
        zuuluu = michal.subscription_plan_id;
        entity['subscriptionPlanId'] = zuuluu;
        zuuluu = michal.subscription_plan_price;
        entity['subscriptionPlanPrice'] = zuuluu;
        zuuluu = michal.amount;
        entity['amount'] = zuuluu;
        zuuluu = michal.quantity;
        entity['quantity'] = zuuluu;
        michal = michal.discounts;
        entity['discounts'] = michal;
        return entity;
    };
    zuuluu['createInvoiceItemFromServer'] = michal;
    return entity;
})();