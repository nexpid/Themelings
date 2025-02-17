// app/records/SubscriptionInvoiceRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        report = function(argFoo) { // Original name: SubscriptionInvoiceRecord
            mike = argFoo;
            report = this;
            oscar = _closure1_slot2;
            tango = _closure2_slot0;
            zulu = undefined;
            oscar = oscar.bind(zulu)(report, tango);
            entity = _closure1_slot7;
            entity = entity.bind(zulu)(report, tango);
            zulu = mike.id;
            entity['id'] = zulu;
            zulu = mike.invoiceItems;
            entity['invoiceItems'] = zulu;
            zulu = mike.total;
            entity['total'] = zulu;
            zulu = mike.subtotal;
            entity['subtotal'] = zulu;
            zulu = mike.currency;
            entity['currency'] = zulu;
            zulu = mike.tax;
            entity['tax'] = zulu;
            zulu = mike.taxInclusive;
            entity['taxInclusive'] = zulu;
            zulu = mike.subscriptionPeriodStart;
            entity['subscriptionPeriodStart'] = zulu;
            zulu = mike.subscriptionPeriodEnd;
            entity['subscriptionPeriodEnd'] = zulu;
            mike = mike.status;
            entity['status'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot6;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot3;
        entity = {};
        oscar = 'createInvoiceFromServer';
        entity['key'] = oscar;
        mike = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = argFoo;
                zulu = _closure2_slot0;
                entity = {};
                tango = mike.id;
                entity['id'] = tango;
                golf = mike.invoice_items;
                tango = null;
                report = tango == golf;
                verify = undefined;
                tango = undefined;
                if(report) { _fun00006_ip = 79; continue _fun00005 }
 40:
                oscar = golf.map;
                options = _closure1_slot0;
                offset = _closure1_slot1;
                report = 6;
                report = offset[report];
                report = options.bind(verify)(report);
                report = report.createInvoiceItemFromServer;
                tango = oscar.bind(golf)(report);
 79:
                entity['invoiceItems'] = tango;
                tango = mike.total;
                entity['total'] = tango;
                tango = mike.subtotal;
                entity['subtotal'] = tango;
                tango = mike.currency;
                entity['currency'] = tango;
                tango = mike.tax;
                entity['tax'] = tango;
                tango = mike.tax_inclusive;
                entity['taxInclusive'] = tango;
                tango = global;
                golf = tango.Date;
                yankee = mike.subscription_period_start;
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                romeo = oscar;
                report = new romeo[golf](yankee, offset);
                report = report instanceof Object ? report : oscar;
                entity['subscriptionPeriodStart'] = report;
                oscar = tango.Date;
                yankee = mike.subscription_period_end;
                report = oscar.prototype;
                report = Object.create(report, {constructor: {value: oscar}});
                romeo = report;
                tango = new romeo[oscar](yankee, offset);
                tango = tango instanceof Object ? tango : report;
                entity['subscriptionPeriodEnd'] = tango;
                mike = mike.status;
                entity['status'] = mike;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                romeo = mike;
                yankee = entity;
                entity = new romeo[zulu](yankee, offset);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = null;
        entity = zulu.bind(tango)(report, entity, mike);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'records/SubscriptionInvoiceRecord.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();