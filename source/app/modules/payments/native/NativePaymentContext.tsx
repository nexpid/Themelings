// app/modules/payments/native/NativePaymentContext.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    romeo = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = options;
    entity = global;
    oscar = entity.Object;
    tango = oscar.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(oscar)(zulu, entity, mike);
    verify = 0;
    mike = options[verify];
    entity = undefined;
    yankee = romeo.bind(entity)(mike);
    tango = 1;
    oscar = options[tango];
    mike = argCorge;
    mike = mike.bind(entity)(oscar);
    var _closure1_slot3 = mike;
    oscar = 2;
    mike = options[oscar];
    mike = romeo.bind(entity)(mike);
    var _closure1_slot4 = mike;
    offset = 3;
    mike = options[offset];
    mike = golf.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot5 = mike;
    mike = 4;
    mike = options[mike];
    mike = romeo.bind(entity)(mike);
    mike = mike.bind(entity)();
    mike = yankee.bind(entity)(mike, offset);
    verify = mike[verify];
    var _closure1_slot6 = verify;
    tango = mike[tango];
    mike = mike[oscar];
    oscar = 8;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/payments/native/NativePaymentContext.tsx';
    oscar = golf.bind(options)(oscar);
    report = function(argFoo) { // Original name: NativePaymentContextProvider
        entity = argFoo;
        report = entity.children;
        foxtrot = entity.skuIDs;
        var _closure2_slot0 = foxtrot;
        golf = entity.activeSubscription;
        zulu = _closure1_slot1;
        oscar = _closure1_slot2;
        tango = 5;
        options = oscar[tango];
        tango = undefined;
        offset = zulu.bind(tango)(options);
        verify = offset.useNativeIAPPayments;
        options = {};
        yankee = new Array(0);
        options['productIds'] = yankee;
        yankee = false;
        options['fetchingProductIDs'] = yankee;
        options = verify.bind(offset)(options);
        yankee = options.nativePaymentsConnected;
        options = options.storeFront;
        var _closure2_slot1 = options;
        romeo = _closure1_slot3;
        offset = romeo.useEffect;
        verify = new Array(2);
        verify[0] = options;
        verify[1] = foxtrot;
        mike = function() {
            _fun98852: for(var _fun98852_ip = 0; ; ) switch(_fun98852_ip) {
 0:
                zulu = _closure2_slot1;
                mike = null;
                mike = mike == zulu;
                if(mike) { _fun98852_ip = 40; continue _fun98852 }
 16:
                report = _closure1_slot4;
                tango = report.isFetchingForSKUs;
                zulu = _closure2_slot0;
                mike = tango.bind(report)(zulu);
 40:
                if(mike) { _fun98852_ip = 94; continue _fun98852 }
 43:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 6;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.fetchSubscriptionPlansBySKUs;
                mike = _closure2_slot0;
                entity = _closure2_slot1;
                entity = entity.country;
                entity = zulu.bind(tango)(mike, entity);
 94:
                entity = undefined;
                return entity;
            }
        };
        mike = offset.bind(romeo)(mike, verify);
        mike = 7;
        mike = oscar[mike];
        mike = zulu.bind(tango)(mike);
        mike = mike.bind(tango)();
        verify = mike.selectedPlan;
        offset = mike.setSelectedPlanId;
        zulu = _closure1_slot5;
        entity = _closure1_slot6;
        mike = entity.Provider;
        entity = {};
        oscar = {};
        oscar['isReadyToPurchase'] = yankee;
        oscar['setSelectedPlanId'] = offset;
        oscar['selectedPlan'] = verify;
        oscar['storeFront'] = options;
        oscar['activeSubscription'] = golf;
        entity['value'] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['NativePaymentContextProvider'] = report;
    zulu['useNativeIAPPaymentContext'] = tango;
    zulu['useForwardedNativePaymentContext'] = mike;
    return entity;
})();