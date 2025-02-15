// app/utils/BillingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _createGatewayCheckoutContext
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun41933: for(var _fun41933_ip = 0; ; ) switch(_fun41933_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun41933_ip = 115; continue _fun41933 }
 10:
                    report = null;
                    tango = report != mike;
                    zulu = null;
                    if(!tango) { _fun41933_ip = 109; continue _fun41933 }
 21:
                    oscar = mike.paymentGateway;
                    tango = _closure1_slot4;
                    tango = tango.BRAINTREE;
                    zulu = null;
                    if(!(oscar === tango)) { _fun41933_ip = 109; continue _fun41933 }
 46:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 2;
                    tango = tango[mike];
                    mike = undefined;
                    tango = oscar.bind(mike)(tango);
                    mike = tango.collectDeviceData;
                    mike = mike.bind(tango)();
                    SaveGenerator(address=82);
 80:
                    return mike;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun41933_ip = 112; continue _fun41933 }
 88:
                    tango = report != mike;
                    zulu = null;
                    if(!tango) { _fun41933_ip = 109; continue _fun41933 }
 97:
                    tango = {};
                    tango['braintree_device_data'] = mike;
                    zulu = tango;
 109:
                    return zulu;
 112:
                    return mike;
 115:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.PaymentGateways;
    var _closure1_slot4 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/BillingUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: getLocalizedDisplayMonth
        entity = global;
        entity = entity.Date;
        mike = entity.prototype;
        mike = Object.create(mike, {constructor: {value: entity}});
        golf = mike;
        entity = new golf[entity](oscar);
        tango = entity instanceof Object ? entity : mike;
        mike = tango.setMonth;
        zulu = argFoo;
        entity = 1;
        entity = zulu - entity;
        entity = mike.bind(tango)(entity);
        zulu = tango.toLocaleString;
        mike = {};
        entity = 'short';
        mike['month'] = entity;
        entity = argBar;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getLocalizedDisplayMonth'] = tango;
    tango = function() { // Original name: createGatewayCheckoutContext
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['createGatewayCheckoutContext'] = tango;
    tango = function(argFoo, argBar) { // Original name: captureBillingException
        _fun41936: for(var _fun41936_ip = 0; ; ) switch(_fun41936_ip) {
 0:
            golf = argBar;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.captureException;
            zulu = {};
            offset = zulu;
            verify = golf;
            mike = copyDataProperties(offset, verify);
            oscar = {};
            mike = null;
            options = mike == golf;
            mike = undefined;
            if(options) { _fun41936_ip = 65; continue _fun41936 }
 59:
            mike = golf.tags;
 65:
            offset = oscar;
            verify = mike;
            mike = copyDataProperties(offset, verify);
            golf = 'billing';
            mike = 'app_context';
            oscar[mike] = golf;
            mike = 'tags';
            zulu[mike] = oscar;
            mike = argFoo;
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['captureBillingException'] = tango;
    tango = function(argFoo, argBar) { // Original name: captureBillingMessage
        _fun41937: for(var _fun41937_ip = 0; ; ) switch(_fun41937_ip) {
 0:
            golf = argBar;
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.captureMessage;
            zulu = {};
            offset = zulu;
            verify = golf;
            mike = copyDataProperties(offset, verify);
            oscar = {};
            mike = null;
            options = mike == golf;
            mike = undefined;
            if(options) { _fun41937_ip = 65; continue _fun41937 }
 59:
            mike = golf.tags;
 65:
            offset = oscar;
            verify = mike;
            mike = copyDataProperties(offset, verify);
            golf = 'billing';
            mike = 'app_context';
            oscar[mike] = golf;
            mike = 'tags';
            zulu[mike] = oscar;
            mike = argFoo;
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['captureBillingMessage'] = tango;
    mike = function(argFoo, argBar) { // Original name: calculateStandardizedUnits
        _fun41938: for(var _fun41938_ip = 0; ; ) switch(_fun41938_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            entity = 'P1M';
            entity = entity === zulu;
            report = entity;
            if(!entity) { _fun41938_ip = 32; continue _fun41938 }
 22:
            mike = 'P1Y';
            report = mike === tango;
 32:
            mike = true;
            if(!(report !== mike)) { _fun41938_ip = 177; continue _fun41938 }
 41:
            report = entity;
            if(!entity) { _fun41938_ip = 57; continue _fun41938 }
 47:
            oscar = 'P6M';
            report = oscar === tango;
 57:
            if(!(report !== mike)) { _fun41938_ip = 172; continue _fun41938 }
 61:
            if(!entity) { _fun41938_ip = 74; continue _fun41938 }
 64:
            report = 'P3M';
            entity = report === tango;
 74:
            if(!(entity !== mike)) { _fun41938_ip = 167; continue _fun41938 }
 78:
            entity = 'P3M';
            entity = entity === zulu;
            report = entity;
            if(!entity) { _fun41938_ip = 104; continue _fun41938 }
 94:
            oscar = 'P1Y';
            report = oscar === tango;
 104:
            if(!(report !== mike)) { _fun41938_ip = 162; continue _fun41938 }
 108:
            if(!entity) { _fun41938_ip = 121; continue _fun41938 }
 111:
            report = 'P6M';
            entity = report === tango;
 121:
            if(!(entity !== mike)) { _fun41938_ip = 157; continue _fun41938 }
 125:
            entity = 'P6M';
            entity = entity === zulu;
            if(!entity) { _fun41938_ip = 148; continue _fun41938 }
 138:
            zulu = 'P1Y';
            entity = zulu === tango;
 148:
            if(!(entity !== mike)) { _fun41938_ip = 157; continue _fun41938 }
 152:
            entity = 1;
            return entity;
 157:
            entity = 2;
            return entity;
 162:
            entity = 4;
            return entity;
 167:
            entity = 3;
            return entity;
 172:
            entity = 6;
            return entity;
 177:
            entity = 12;
            return entity;
        }
    };
    zulu['calculateStandardizedUnits'] = mike;
    return entity;
})();