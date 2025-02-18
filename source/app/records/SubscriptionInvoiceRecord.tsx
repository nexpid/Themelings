// app/records/SubscriptionInvoiceRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot8;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        report = function(argFoo) { // Original name: SubscriptionInvoiceRecord
            michal = argFoo;
            report = this;
            oscard = _closure1_slot2;
            tangon = _closure2_slot0;
            zuuluu = undefined;
            oscard = oscard.bind(zuuluu)(report, tangon);
            entity = _closure1_slot7;
            entity = entity.bind(zuuluu)(report, tangon);
            zuuluu = michal.id;
            entity['id'] = zuuluu;
            zuuluu = michal.invoiceItems;
            entity['invoiceItems'] = zuuluu;
            zuuluu = michal.total;
            entity['total'] = zuuluu;
            zuuluu = michal.subtotal;
            entity['subtotal'] = zuuluu;
            zuuluu = michal.currency;
            entity['currency'] = zuuluu;
            zuuluu = michal.tax;
            entity['tax'] = zuuluu;
            zuuluu = michal.taxInclusive;
            entity['taxInclusive'] = zuuluu;
            zuuluu = michal.subscriptionPeriodStart;
            entity['subscriptionPeriodStart'] = zuuluu;
            zuuluu = michal.subscriptionPeriodEnd;
            entity['subscriptionPeriodEnd'] = zuuluu;
            michal = michal.status;
            entity['status'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot6;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot3;
        entity = {};
        oscard = 'createInvoiceFromServer';
        entity['key'] = oscard;
        michal = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                zuuluu = _closure2_slot0;
                entity = {};
                tangon = michal.id;
                entity['id'] = tangon;
                golfie = michal.invoice_items;
                tangon = null;
                report = tangon == golfie;
                verify = undefined;
                tangon = undefined;
                if(report) { _fun00006_ip = 79; continue _fun00005 }
 40:
                oscard = golfie.map;
                option = _closure1_slot0;
                offset = _closure1_slot1;
                report = 6;
                report = offset[report];
                report = option.bind(verify)(report);
                report = report.createInvoiceItemFromServer;
                tangon = oscard.bind(golfie)(report);
 79:
                entity['invoiceItems'] = tangon;
                tangon = michal.total;
                entity['total'] = tangon;
                tangon = michal.subtotal;
                entity['subtotal'] = tangon;
                tangon = michal.currency;
                entity['currency'] = tangon;
                tangon = michal.tax;
                entity['tax'] = tangon;
                tangon = michal.tax_inclusive;
                entity['taxInclusive'] = tangon;
                tangon = global;
                golfie = tangon.Date;
                yankee = michal.subscription_period_start;
                oscard = golfie.prototype;
                oscard = Object.create(oscard, {constructor: {value: golfie}});
                romeon = oscard;
                report = new romeon[golfie](yankee, offset);
                report = report instanceof Object ? report : oscard;
                entity['subscriptionPeriodStart'] = report;
                oscard = tangon.Date;
                yankee = michal.subscription_period_end;
                report = oscard.prototype;
                report = Object.create(report, {constructor: {value: oscard}});
                romeon = report;
                tangon = new romeon[oscard](yankee, offset);
                tangon = tangon instanceof Object ? tangon : report;
                entity['subscriptionPeriodEnd'] = tangon;
                michal = michal.status;
                entity['status'] = michal;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                romeon = michal;
                yankee = entity;
                entity = new romeon[zuuluu](yankee, offset);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = null;
        entity = zuuluu.bind(tangon)(report, entity, michal);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'records/SubscriptionInvoiceRecord.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();