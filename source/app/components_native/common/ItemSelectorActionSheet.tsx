// app/components_native/common/ItemSelectorActionSheet.tsx
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot3 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot4 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_native/common/ItemSelectorActionSheet.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ItemSelectorActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            kiloes = entity.title;
            foxtra = entity.body;
            sizing = entity.items;
            michal = entity.selectedItem;
            var _closure2_slot0 = michal;
            michal = entity.onItemSelect;
            var _closure2_slot1 = michal;
            result = entity.onClose;
            tangon = _closure1_slot3;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            entity = 2;
            entity = verify[entity];
            zuuluu = undefined;
            entity = option.bind(zuuluu)(entity);
            michal = entity.RedesignCompat;
            entity = {};
            report = 3;
            report = verify[report];
            report = option.bind(zuuluu)(report);
            oscard = report.BottomSheet;
            report = {};
            golfie = true;
            report['scrollable'] = golfie;
            golfie = 4;
            golfie = verify[golfie];
            golfie = option.bind(zuuluu)(golfie);
            option = golfie.BottomSheetTitleHeader;
            golfie = {};
            golfie['title'] = kiloes;
            verify = null;
            offset = verify != result;
            if(!offset) { _fun00002_ip = 186; continue _fun00001 }
 144:
            output = _closure1_slot3;
            romeon = _closure1_slot0;
            echoed = _closure1_slot1;
            offset = 5;
            offset = echoed[offset];
            offset = romeon.bind(zuuluu)(offset);
            romeon = offset.ActionSheetCloseButton;
            offset = {};
            offset['onPress'] = result;
            verify = output.bind(zuuluu)(romeon, offset);
 186:
            golfie['trailing'] = verify;
            golfie = tangon.bind(zuuluu)(option, golfie);
            report['header'] = golfie;
            verify = _closure1_slot4;
            romeon = _closure1_slot0;
            output = _closure1_slot1;
            golfie = 6;
            golfie = output[golfie];
            golfie = romeon.bind(zuuluu)(golfie);
            option = golfie.BottomSheetScrollView;
            golfie = {};
            offset = new Array(2);
            offset[0] = foxtra;
            foxtra = _closure1_slot3;
            yankee = 7;
            yankee = output[yankee];
            yankee = romeon.bind(zuuluu)(yankee);
            romeon = yankee.FormRadioGroup;
            yankee = {'value': '', 'accessibilityLabel': null, 'hasIcons': false};
            yankee['accessibilityLabel'] = kiloes;
            kiloes = sizing.map;
            backup = function(argFoo, argBar) {
                golfie = argFoo;
                var _closure3_slot0 = golfie;
                report = _closure1_slot3;
                michal = _closure1_slot2;
                tangon = michal.Fragment;
                zuuluu = {};
                oscard = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 7;
                entity = michal[entity];
                michal = undefined;
                entity = oscard.bind(michal)(entity);
                oscard = entity.FormRadioRow;
                entity = {};
                verify = 'left';
                entity['align'] = verify;
                verify = golfie.label;
                entity['label'] = verify;
                option = function() { // Original name: onPress
                    zuuluu = _closure2_slot1;
                    entity = _closure3_slot0;
                    michal = entity.value;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                entity['onPress'] = option;
                option = golfie.value;
                golfie = _closure2_slot0;
                golfie = option === golfie;
                entity['selected'] = golfie;
                entity = report.bind(michal)(oscard, entity);
                zuuluu['children'] = entity;
                entity = argBar;
                entity = report.bind(michal)(tangon, zuuluu, entity);
                return entity;
            };
            backup = kiloes.bind(sizing)(backup);
            yankee['children'] = backup;
            yankee = foxtra.bind(zuuluu)(romeon, yankee);
            offset[1] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(zuuluu)(option, golfie);
            report['children'] = golfie;
            report = tangon.bind(zuuluu)(oscard, report);
            entity['children'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();