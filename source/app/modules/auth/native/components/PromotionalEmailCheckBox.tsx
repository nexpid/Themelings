// app/modules/auth/native/components/PromotionalEmailCheckBox.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
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
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    yankee = 1;
    tangon = oscard[yankee];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot2 = golfie;
    tangon = tangon.Pressable;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.usePromoEmailConsentStore;
    var _closure1_slot4 = golfie;
    tangon = tangon.setPromoEmailConsentChecked;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot6 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    golfie = {};
    tangon = {};
    offset = 24;
    tangon['marginTop'] = offset;
    golfie['marketingOptInCheckbox'] = tangon;
    tangon = 8;
    offset = {'flexDirection': 'row', 'alignItems': 'flex-start', 'gap': 8};
    golfie['checkboxRow'] = offset;
    offset = {};
    offset['flex'] = yankee;
    golfie['checkboxLabel'] = offset;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot8 = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/native/components/PromotionalEmailCheckBox.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: PromotionalEmailCheckBox
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            kiloes = entity.textVariant;
            report = undefined;
            if(!(kiloes === report)) { _fun00002_ip = 23; continue _fun00001 }
 17:
            kiloes = 'text-sm/normal';
 23:
            backup = entity.textColor;
            if(!(backup === report)) { _fun00002_ip = 39; continue _fun00001 }
 33:
            backup = 'text-secondary';
 39:
            golfie = entity.style;
            var _closure2_slot0 = report;
            entity = _closure1_slot8;
            foxtra = entity.bind(report)();
            zuuluu = _closure1_slot4;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.required;
                return entity;
            };
            michal = zuuluu.bind(report)(entity);
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.checked;
                return entity;
            };
            output = zuuluu.bind(report)(entity);
            _closure2_slot0 = output;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 5;
            entity = tangon[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.getMobileMarketingEmailOptInCopy;
            entity = entity.bind(zuuluu)();
            romeon = entity.copy;
            entity = null;
            if(!michal) { _fun00002_ip = 334; continue _fun00001 }
 131:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot2;
            michal = {};
            option = foxtra.marketingOptInCheckbox;
            oscard = new Array(2);
            oscard[0] = option;
            oscard[1] = golfie;
            michal['style'] = oscard;
            option = _closure1_slot7;
            golfie = _closure1_slot3;
            oscard = {};
            yankee = 'checkbox';
            oscard['accessibilityRole'] = yankee;
            oscard['accessibilityLabel'] = romeon;
            yankee = {};
            yankee['selected'] = output;
            oscard['accessibilityState'] = yankee;
            offset = function() { // Original name: onPress
                zuuluu = _closure1_slot5;
                entity = _closure2_slot0;
                michal = !entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            oscard['onPress'] = offset;
            offset = foxtra.checkboxRow;
            oscard['style'] = offset;
            yankee = _closure1_slot0;
            sizing = _closure1_slot1;
            verify = 6;
            verify = sizing[verify];
            verify = yankee.bind(report)(verify);
            offset = verify.FormCheckbox;
            verify = {};
            verify['checked'] = output;
            offset = tangon.bind(report)(offset, verify);
            verify = new Array(2);
            verify[0] = offset;
            offset = 7;
            offset = sizing[offset];
            offset = yankee.bind(report)(offset);
            yankee = offset.Text;
            offset = {};
            offset['variant'] = kiloes;
            offset['color'] = backup;
            foxtra = foxtra.checkboxLabel;
            offset['style'] = foxtra;
            offset['children'] = romeon;
            offset = tangon.bind(report)(yankee, offset);
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 334:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();