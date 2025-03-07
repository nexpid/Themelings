// app/design/components/AccessibilityView/AccessibilityView.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = golfie[entity];
    tangon = argCor;
    entity = undefined;
    option = tangon.bind(entity)(option);
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot3 = tangon;
    tangon = option.forwardRef;
    michal = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            offset = zuuluu.accessibilityViewIsModal;
            tangon = undefined;
            if(!(offset === tangon)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            offset = false;
 17:
            verify = zuuluu.nativeID;
            option = zuuluu.collapsable;
            oscard = zuuluu.onAccessibilityEscape;
            michal = {'accessibilityViewIsModal': 0, 'nativeID': 0, 'collapsable': 0, 'onAccessibilityEscape': 0};
            golfie = null;
            backup = michal;
            foxtra = null;
            entity = silentSetPrototypeOf(backup, foxtra);
            backup = {};
            foxtra = zuuluu;
            romeon = michal;
            report = copyDataProperties(backup, foxtra, romeon);
            if(!offset) { _fun00002_ip = 79; continue _fun00001 }
 75:
            if(!(golfie != oscard)) { _fun00002_ip = 179; continue _fun00001 }
 79:
            zuuluu = _closure1_slot0;
            yankee = _closure1_slot1;
            michal = 3;
            michal = yankee[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal['accessibilityViewIsModal'] = offset;
            michal['nativeID'] = verify;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot3;
            michal = _closure1_slot2;
            entity = {};
            offset = argBar;
            entity['ref'] = offset;
            entity['nativeID'] = verify;
            golfie = golfie == verify;
            if(!golfie) { _fun00002_ip = 151; continue _fun00001 }
 148:
            golfie = option;
 151:
            entity['collapsable'] = golfie;
            entity['onAccessibilityEscape'] = oscard;
            backup = entity;
            foxtra = report;
            report = copyDataProperties(backup, foxtra);
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 179:
            entity = global;
            zuuluu = entity.Error;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            backup = 'Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.';
            kiloes = michal;
            entity = new kiloes[zuuluu](backup, foxtra);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    tangon = tangon.bind(option)(michal);
    michal = 4;
    michal = golfie[michal];
    report = report.bind(entity)(michal);
    michal = report.createAnimatedComponent;
    michal = michal.bind(report)(tangon);
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'design/components/AccessibilityView/AccessibilityView.native.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['AccessibilityView'] = tangon;
    zuuluu['AccessibilityViewAnimated'] = michal;
    return entity;
})();