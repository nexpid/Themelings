// app/modules/premium/native/getExternalManagementMessage.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.PaymentGatewayToFriendlyName;
    var _closure1_slot2 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/native/getExternalManagementMessage.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getExternalManagementMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            entity = null;
            if(!(entity != golf)) { _fun00002_ip = 248; continue _fun00001 }
 12:
            mike = golf.isOnPlatformMatchingExternalPaymentGateway;
            if(mike) { _fun00002_ip = 248; continue _fun00001 }
 24:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 1;
            mike = tango[mike];
            offset = undefined;
            zulu = zulu.bind(offset)(mike);
            mike = zulu.isIOS;
            mike = mike.bind(zulu)();
            verify = 'Android';
            if(!mike) { _fun00002_ip = 74; continue _fun00001 }
 68:
            verify = 'iOS';
 74:
            mike = golf.isPurchasedExternally;
            if(!mike) { _fun00002_ip = 93; continue _fun00001 }
 83:
            mike = golf.paymentGateway;
            if(!(entity == mike)) { _fun00002_ip = 160; continue _fun00001 }
 93:
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 2;
            tango = oscar[mike];
            tango = zulu.bind(offset)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = oscar[mike];
            mike = zulu.bind(offset)(mike);
            mike = mike.t;
            zulu = mike.CnoyAA;
            mike = {};
            mike['mobilePlatform'] = verify;
            mike = tango.bind(report)(zulu, mike);
            _fun00002_ip = 246; continue _fun00001;
 160:
            tango = _closure1_slot0;
            yankee = _closure1_slot1;
            zulu = 2;
            report = yankee[zulu];
            report = tango.bind(offset)(report);
            oscar = report.intl;
            report = oscar.formatToPlainString;
            zulu = yankee[zulu];
            zulu = tango.bind(offset)(zulu);
            zulu = zulu.t;
            tango = zulu.cFZnqa;
            zulu = {};
            zulu['mobilePlatform'] = verify;
            options = _closure1_slot2;
            golf = golf.paymentGateway;
            golf = options[golf];
            zulu['externalPaymentGateway'] = golf;
            mike = report.bind(oscar)(tango, zulu);
 246:
            return mike;
 248:
            return entity;
        }
    };
    zulu['getExternalManagementMessage'] = mike;
    return entity;
})();