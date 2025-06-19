// app/modules/auth/native/components/PrivacyHint.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: PrivacyPolicyDescription
        entity = argFoo;
        report = entity.style;
        tangon = _closure1_slot8;
        oscard = _closure1_slot0;
        offset = _closure1_slot2;
        entity = 7;
        entity = offset[entity];
        zuuluu = undefined;
        entity = oscard.bind(zuuluu)(entity);
        michal = entity.TextWithIOSLinkWorkaround;
        entity = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
        entity['style'] = report;
        report = 8;
        golfie = offset[report];
        golfie = oscard.bind(zuuluu)(golfie);
        option = golfie.intl;
        golfie = option.format;
        report = offset[report];
        report = oscard.bind(zuuluu)(report);
        report = report.t;
        oscard = report.KI+BSU;
        report = {};
        offset = _closure1_slot7;
        offset = offset.TERMS;
        report['termsURL'] = offset;
        verify = _closure1_slot7;
        verify = verify.PRIVACY;
        report['privacyURL'] = verify;
        report = golfie.bind(option)(oscard, report);
        entity['children'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: PrivacyPolicyCheckbox
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.consent;
            oscard = entity.onToggleConsent;
            report = entity.asCheckbox;
            tangon = undefined;
            if(!(report === tangon)) { _fun00002_ip = 29; continue _fun00001 }
 27:
            report = false;
 29:
            entity = _closure1_slot10;
            option = entity.bind(tangon)();
            zuuluu = _closure1_slot9;
            michal = _closure1_slot4;
            entity = {};
            if(report) { _fun00002_ip = 61; continue _fun00001 }
 53:
            golfie = option.radio;
            _fun00002_ip = 67; continue _fun00001;
 61:
            golfie = option.checkbox;
 67:
            entity['style'] = golfie;
            golfie = {};
            golfie['checked'] = verify;
            entity['accessibilityState'] = golfie;
            golfie = 'checkbox';
            entity['accessibilityRole'] = golfie;
            yankee = _closure1_slot0;
            golfie = _closure1_slot2;
            backup = 8;
            option = golfie[backup];
            option = yankee.bind(tangon)(option);
            offset = option.intl;
            option = offset.string;
            golfie = golfie[backup];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.Y7Kgvb;
            golfie = option.bind(offset)(golfie);
            entity['accessibilityLabel'] = golfie;
            entity['onPress'] = oscard;
            oscard = {'top': 11, 'bottom': 11, 'left': 11};
            entity['hitSlop'] = oscard;
            option = _closure1_slot8;
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            if(report) { _fun00002_ip = 229; continue _fun00001 }
 190:
            report = 10;
            report = offset[report];
            report = golfie.bind(tangon)(report);
            report = report.FormRow;
            oscard = report.Radio;
            report = {};
            report['selected'] = verify;
            oscard = option.bind(tangon)(oscard, report);
            _fun00002_ip = 260; continue _fun00001;
 229:
            report = 9;
            report = offset[report];
            report = golfie.bind(tangon)(report);
            golfie = report.FormCheckbox;
            report = {};
            report['checked'] = verify;
            oscard = option.bind(tangon)(golfie, report);
 260:
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot8;
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 7;
            oscard = verify[oscard];
            oscard = offset.bind(tangon)(oscard);
            golfie = oscard.TextWithIOSLinkWorkaround;
            oscard = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            yankee = verify[backup];
            yankee = offset.bind(tangon)(yankee);
            romeon = yankee.intl;
            yankee = romeon.format;
            verify = verify[backup];
            verify = offset.bind(tangon)(verify);
            verify = verify.t;
            offset = verify.qMDAPz;
            verify = {};
            backup = _closure1_slot7;
            backup = backup.TERMS;
            verify['termsURL'] = backup;
            foxtra = _closure1_slot7;
            foxtra = foxtra.PRIVACY;
            verify['privacyURL'] = foxtra;
            verify = yankee.bind(romeon)(offset, verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot3 = golfie;
    tangon = tangon.Pressable;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.usePromoEmailConsentStore;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useRegistrationUIStore;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MarketingURLs;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot8 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = 'row';
    verify['flexDirection'] = offset;
    tangon['consentForm'] = verify;
    verify = {'flexDirection': 'column', 'gap': 16};
    tangon['multiItem'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'flex-start', 'gap': 8};
    tangon['checkbox'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    tangon['radio'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/native/components/PrivacyHint.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: PrivacyHint
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            backup = entity.consent;
            michal = entity.consentRequired;
            foxtra = entity.onToggleConsent;
            entity = _closure1_slot10;
            oscard = undefined;
            yankee = entity.bind(oscard)();
            tangon = _closure1_slot5;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.required;
                return entity;
            };
            entity = tangon.bind(oscard)(entity);
            tangon = _closure1_slot6;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.registrationOptions;
                michal = entity.email;
                entity = null;
                entity = entity != michal;
                return entity;
            };
            zuuluu = tangon.bind(oscard)(zuuluu);
            if(!zuuluu) { _fun00004_ip = 74; continue _fun00003 }
 71:
            zuuluu = entity;
 74:
            if(michal) { _fun00004_ip = 175; continue _fun00003 }
 77:
            if(!zuuluu) { _fun00004_ip = 175; continue _fun00003 }
 80:
            report = _closure1_slot9;
            tangon = _closure1_slot3;
            entity = {};
            golfie = yankee.multiItem;
            entity['style'] = golfie;
            verify = _closure1_slot8;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 11;
            golfie = romeon[golfie];
            option = option.bind(oscard)(golfie);
            golfie = {};
            option = verify.bind(oscard)(option, golfie);
            golfie = new Array(2);
            golfie[0] = option;
            romeon = _closure1_slot8;
            verify = _closure1_slot11;
            option = {};
            option = romeon.bind(oscard)(verify, option);
            golfie[1] = option;
            entity['children'] = golfie;
            entity = report.bind(oscard)(tangon, entity);
            _fun00004_ip = 395; continue _fun00003;
 175:
            if(!michal) { _fun00004_ip = 181; continue _fun00003 }
 178:
            if(zuuluu) { _fun00004_ip = 259; continue _fun00003 }
 181:
            report = _closure1_slot8;
            if(michal) { _fun00004_ip = 202; continue _fun00003 }
 188:
            zuuluu = _closure1_slot11;
            michal = {};
            michal = report.bind(oscard)(zuuluu, michal);
            _fun00004_ip = 254; continue _fun00003;
 202:
            tangon = _closure1_slot3;
            zuuluu = {};
            golfie = yankee.consentForm;
            zuuluu['style'] = golfie;
            verify = _closure1_slot8;
            option = _closure1_slot12;
            golfie = {};
            golfie['consent'] = backup;
            golfie['onToggleConsent'] = foxtra;
            golfie = verify.bind(oscard)(option, golfie);
            zuuluu['children'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 254:
            _fun00004_ip = 392; continue _fun00003;
 259:
            report = _closure1_slot9;
            tangon = _closure1_slot3;
            zuuluu = {};
            golfie = yankee.multiItem;
            zuuluu['style'] = golfie;
            verify = _closure1_slot8;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 11;
            golfie = romeon[golfie];
            option = option.bind(oscard)(golfie);
            golfie = {};
            option = verify.bind(oscard)(option, golfie);
            golfie = new Array(2);
            golfie[0] = option;
            verify = _closure1_slot8;
            option = {};
            yankee = yankee.consentForm;
            option['style'] = yankee;
            romeon = _closure1_slot8;
            yankee = _closure1_slot12;
            offset = {};
            offset['consent'] = backup;
            offset['onToggleConsent'] = foxtra;
            foxtra = true;
            offset['asCheckbox'] = foxtra;
            offset = romeon.bind(oscard)(yankee, offset);
            option['children'] = offset;
            option = verify.bind(oscard)(tangon, option);
            golfie[1] = option;
            zuuluu['children'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 392:
            entity = michal;
 395:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();