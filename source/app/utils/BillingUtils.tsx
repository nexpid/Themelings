// app/utils/BillingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _createGatewayCheckoutContext
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 115; continue _fun00001 }
 10:
                    report = null;
                    tangon = report != michal;
                    zuuluu = null;
                    if(!tangon) { _fun00002_ip = 109; continue _fun00001 }
 21:
                    oscard = michal.paymentGateway;
                    tangon = _closure1_slot4;
                    tangon = tangon.BRAINTREE;
                    zuuluu = null;
                    if(!(oscard === tangon)) { _fun00002_ip = 109; continue _fun00001 }
 46:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 2;
                    tangon = tangon[michal];
                    michal = undefined;
                    tangon = oscard.bind(michal)(tangon);
                    michal = tangon.collectDeviceData;
                    michal = michal.bind(tangon)();
                    SaveGenerator(address=82);
 80:
                    return michal;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 112; continue _fun00001 }
 88:
                    tangon = report != michal;
                    zuuluu = null;
                    if(!tangon) { _fun00002_ip = 109; continue _fun00001 }
 97:
                    tangon = {};
                    tangon['braintree_device_data'] = michal;
                    zuuluu = tangon;
 109:
                    return zuuluu;
 112:
                    return michal;
 115:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PaymentGateways;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/BillingUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: getLocalizedDisplayMonth
        entity = global;
        entity = entity.Date;
        michal = entity.prototype;
        michal = Object.create(michal, {constructor: {value: entity}});
        golfie = michal;
        entity = new golfie[entity](oscard);
        tangon = entity instanceof Object ? entity : michal;
        michal = tangon.setMonth;
        zuuluu = argFoo;
        entity = 1;
        entity = zuuluu - entity;
        entity = michal.bind(tangon)(entity);
        zuuluu = tangon.toLocaleString;
        michal = {};
        entity = 'short';
        michal['month'] = entity;
        entity = argBar;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getLocalizedDisplayMonth'] = tangon;
    tangon = function() { // Original name: createGatewayCheckoutContext
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['createGatewayCheckoutContext'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: captureBillingException
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argBar;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.captureException;
            zuuluu = {};
            offset = zuuluu;
            verify = golfie;
            michal = copyDataProperties(offset, verify);
            oscard = {};
            michal = null;
            option = michal == golfie;
            michal = undefined;
            if(option) { _fun00004_ip = 65; continue _fun00003 }
 59:
            michal = golfie.tags;
 65:
            offset = oscard;
            verify = michal;
            michal = copyDataProperties(offset, verify);
            golfie = 'billing';
            michal = 'app_context';
            oscard[michal] = golfie;
            michal = 'tags';
            zuuluu[michal] = oscard;
            michal = argFoo;
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['captureBillingException'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: captureBillingMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golfie = argBar;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.captureMessage;
            zuuluu = {};
            offset = zuuluu;
            verify = golfie;
            michal = copyDataProperties(offset, verify);
            oscard = {};
            michal = null;
            option = michal == golfie;
            michal = undefined;
            if(option) { _fun00006_ip = 65; continue _fun00005 }
 59:
            michal = golfie.tags;
 65:
            offset = oscard;
            verify = michal;
            michal = copyDataProperties(offset, verify);
            golfie = 'billing';
            michal = 'app_context';
            oscard[michal] = golfie;
            michal = 'tags';
            zuuluu[michal] = oscard;
            michal = argFoo;
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['captureBillingMessage'] = tangon;
    michal = function(argFoo, argBar) { // Original name: calculateStandardizedUnits
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            entity = 'P1M';
            entity = entity === zuuluu;
            report = entity;
            if(!entity) { _fun00008_ip = 32; continue _fun00007 }
 22:
            michal = 'P1Y';
            report = michal === tangon;
 32:
            michal = true;
            if(!(report !== michal)) { _fun00008_ip = 177; continue _fun00007 }
 41:
            report = entity;
            if(!entity) { _fun00008_ip = 57; continue _fun00007 }
 47:
            oscard = 'P6M';
            report = oscard === tangon;
 57:
            if(!(report !== michal)) { _fun00008_ip = 172; continue _fun00007 }
 61:
            if(!entity) { _fun00008_ip = 74; continue _fun00007 }
 64:
            report = 'P3M';
            entity = report === tangon;
 74:
            if(!(entity !== michal)) { _fun00008_ip = 167; continue _fun00007 }
 78:
            entity = 'P3M';
            entity = entity === zuuluu;
            report = entity;
            if(!entity) { _fun00008_ip = 104; continue _fun00007 }
 94:
            oscard = 'P1Y';
            report = oscard === tangon;
 104:
            if(!(report !== michal)) { _fun00008_ip = 162; continue _fun00007 }
 108:
            if(!entity) { _fun00008_ip = 121; continue _fun00007 }
 111:
            report = 'P6M';
            entity = report === tangon;
 121:
            if(!(entity !== michal)) { _fun00008_ip = 157; continue _fun00007 }
 125:
            entity = 'P6M';
            entity = entity === zuuluu;
            if(!entity) { _fun00008_ip = 148; continue _fun00007 }
 138:
            zuuluu = 'P1Y';
            entity = zuuluu === tangon;
 148:
            if(!(entity !== michal)) { _fun00008_ip = 157; continue _fun00007 }
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
    zuuluu['calculateStandardizedUnits'] = michal;
    return entity;
})();