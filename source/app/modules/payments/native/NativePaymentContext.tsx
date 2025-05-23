// app/modules/payments/native/NativePaymentContext.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = option;
    entity = global;
    oscard = entity.Object;
    tangon = oscard.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(oscard)(zuuluu, entity, michal);
    verify = 0;
    michal = option[verify];
    entity = undefined;
    yankee = romeon.bind(entity)(michal);
    tangon = 1;
    oscard = option[tangon];
    michal = argCor;
    michal = michal.bind(entity)(oscard);
    var _closure1_slot3 = michal;
    oscard = 2;
    michal = option[oscard];
    michal = romeon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    offset = 3;
    michal = option[offset];
    michal = golfie.bind(entity)(michal);
    michal = michal.jsx;
    var _closure1_slot5 = michal;
    michal = 4;
    michal = option[michal];
    michal = romeon.bind(entity)(michal);
    michal = michal.bind(entity)();
    michal = yankee.bind(entity)(michal, offset);
    verify = michal[verify];
    var _closure1_slot6 = verify;
    tangon = michal[tangon];
    michal = michal[oscard];
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/payments/native/NativePaymentContext.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function(argFoo) { // Original name: NativePaymentContextProvider
        entity = argFoo;
        report = entity.children;
        foxtra = entity.skuIDs;
        var _closure2_slot0 = foxtra;
        golfie = entity.activeSubscription;
        zuuluu = _closure1_slot1;
        oscard = _closure1_slot2;
        tangon = 5;
        option = oscard[tangon];
        tangon = undefined;
        verify = zuuluu.bind(tangon)(option);
        option = verify.useNativeIAPPayments;
        option = option.bind(verify)();
        yankee = option.nativePaymentsConnected;
        option = option.storeFront;
        var _closure2_slot1 = option;
        romeon = _closure1_slot3;
        offset = romeon.useEffect;
        verify = new Array(2);
        verify[0] = option;
        verify[1] = foxtra;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot1;
                michal = null;
                michal = michal == zuuluu;
                if(michal) { _fun00002_ip = 40; continue _fun00001 }
 16:
                report = _closure1_slot4;
                tangon = report.isFetchingForSKUs;
                zuuluu = _closure2_slot0;
                michal = tangon.bind(report)(zuuluu);
 40:
                if(michal) { _fun00002_ip = 94; continue _fun00001 }
 43:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 6;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.fetchSubscriptionPlansBySKUs;
                michal = _closure2_slot0;
                entity = _closure2_slot1;
                entity = entity.country;
                entity = zuuluu.bind(tangon)(michal, entity);
 94:
                entity = undefined;
                return entity;
            }
        };
        michal = offset.bind(romeon)(michal, verify);
        michal = 7;
        michal = oscard[michal];
        michal = zuuluu.bind(tangon)(michal);
        michal = michal.bind(tangon)();
        verify = michal.selectedPlan;
        offset = michal.setSelectedPlanId;
        zuuluu = _closure1_slot5;
        entity = _closure1_slot6;
        michal = entity.Provider;
        entity = {};
        oscard = {};
        oscard['isReadyToPurchase'] = yankee;
        oscard['setSelectedPlanId'] = offset;
        oscard['selectedPlan'] = verify;
        oscard['storeFront'] = option;
        oscard['activeSubscription'] = golfie;
        entity['value'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['NativePaymentContextProvider'] = report;
    zuuluu['useNativeIAPPaymentContext'] = tangon;
    zuuluu['useForwardedNativePaymentContext'] = michal;
    return entity;
})();