// app/modules/premium/native/getExternalManagementMessage.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PaymentGatewayToFriendlyName;
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/getExternalManagementMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getExternalManagementMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            entity = null;
            if(!(entity != golfie)) { _fun00002_ip = 248; continue _fun00001 }
 12:
            michal = golfie.isOnPlatformMatchingExternalPaymentGateway;
            if(michal) { _fun00002_ip = 248; continue _fun00001 }
 24:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 1;
            michal = tangon[michal];
            offset = undefined;
            zuuluu = zuuluu.bind(offset)(michal);
            michal = zuuluu.isIOS;
            michal = michal.bind(zuuluu)();
            verify = 'Android';
            if(!michal) { _fun00002_ip = 74; continue _fun00001 }
 68:
            verify = 'iOS';
 74:
            michal = golfie.isPurchasedExternally;
            if(!michal) { _fun00002_ip = 93; continue _fun00001 }
 83:
            michal = golfie.paymentGateway;
            if(!(entity == michal)) { _fun00002_ip = 160; continue _fun00001 }
 93:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 2;
            tangon = oscard[michal];
            tangon = zuuluu.bind(offset)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            michal = oscard[michal];
            michal = zuuluu.bind(offset)(michal);
            michal = michal.t;
            zuuluu = michal.CnoyAA;
            michal = {};
            michal['mobilePlatform'] = verify;
            michal = tangon.bind(report)(zuuluu, michal);
            _fun00002_ip = 246; continue _fun00001;
 160:
            tangon = _closure1_slot0;
            yankee = _closure1_slot1;
            zuuluu = 2;
            report = yankee[zuuluu];
            report = tangon.bind(offset)(report);
            oscard = report.intl;
            report = oscard.formatToPlainString;
            zuuluu = yankee[zuuluu];
            zuuluu = tangon.bind(offset)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.cFZnqa;
            zuuluu = {};
            zuuluu['mobilePlatform'] = verify;
            option = _closure1_slot2;
            golfie = golfie.paymentGateway;
            golfie = option[golfie];
            zuuluu['externalPaymentGateway'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 246:
            return michal;
 248:
            return entity;
        }
    };
    zuuluu['getExternalManagementMessage'] = michal;
    return entity;
})();