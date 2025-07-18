// app/modules/billing/actions/StripeActionCreators.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function() { // Original name: getSetupIntentSecret
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = tangon;
    entity = function() { // Original name: _getSetupIntentSecret
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    oscard = arguments[0];
                    tangon = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 177; continue _fun00001 }
 16:
                    report = undefined;
                    if(!(oscard === report)) { _fun00002_ip = 24; continue _fun00001 }
 22:
                    oscard = {};
 24:
                    SaveGenerator(address=28);
 26:
                    return report;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 174; continue _fun00001 }
 37:
                    zuuluu = null;
                    zuuluu = zuuluu != tangon;
                    golfie = undefined;
                    if(!zuuluu) { _fun00002_ip = 66; continue _fun00001 }
 48:
                    zuuluu = {};
                    tangon = tangon.regionalPaymentMethods;
                    zuuluu['regional_payment_element_source_types'] = tangon;
                    golfie = zuuluu;
 66:
                    tangon = _closure1_slot0;
                    verify = _closure1_slot1;
                    zuuluu = 3;
                    zuuluu = verify[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.post;
                    zuuluu = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    option = _closure1_slot4;
                    option = option.BILLING_STRIPE_SETUP_INTENT_SECRET;
                    zuuluu['url'] = option;
                    zuuluu['body'] = golfie;
                    yankee = zuuluu;
                    offset = oscard;
                    oscard = copyDataProperties(yankee, offset);
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=149);
 147:
                    return zuuluu;
 149:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 171; continue _fun00001 }
 155:
                    tangon = zuuluu.body;
                    tangon = tangon.client_secret;
                    return tangon;
 171:
                    return zuuluu;
 174:
                    return michal;
 177:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot4 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/billing/actions/StripeActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getSetupIntentSecret'] = tangon;
    michal = function() {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = arguments[0];
            entity = arguments[1];
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            oscard = undefined;
 14:
            if(!(entity === tangon)) { _fun00004_ip = 20; continue _fun00003 }
 18:
            entity = {};
 20:
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 4;
            zuuluu = golfie[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.getUserIsStaff;
            zuuluu = zuuluu.bind(report)();
            verify = null;
            if(!(verify == oscard)) { _fun00004_ip = 149; continue _fun00003 }
 59:
            if(zuuluu) { _fun00004_ip = 68; continue _fun00003 }
 62:
            zuuluu = new Array(0);
            _fun00004_ip = 146; continue _fun00003;
 68:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            report = 5;
            report = option[report];
            option = golfie.bind(tangon)(report);
            golfie = option.getPaymentMethods;
            report = {};
            offset = _closure1_slot3;
            offset = offset.ipCountryCode;
            yankee = verify != offset;
            verify = 'ALL';
            if(!yankee) { _fun00004_ip = 120; continue _fun00003 }
 117:
            verify = offset;
 120:
            report['ipCountryCode'] = verify;
            verify = 'create_setup_intent_for_payment_elements';
            report['location'] = verify;
            report = golfie.bind(option)(report);
            zuuluu = report.countryPaymentMethods;
 146:
            oscard = zuuluu;
 149:
            zuuluu = _closure1_slot5;
            michal = {};
            report = true;
            michal['failImmediatelyWhenRateLimited'] = report;
            foxtra = michal;
            romeon = entity;
            entity = copyDataProperties(foxtra, romeon);
            report = oscard.length;
            entity = 0;
            report = report > entity;
            entity = undefined;
            if(!report) { _fun00004_ip = 198; continue _fun00003 }
 188:
            report = {};
            report['regionalPaymentMethods'] = oscard;
            entity = report;
 198:
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['createSetupIntentForPaymentElements'] = michal;
    return entity;
})();