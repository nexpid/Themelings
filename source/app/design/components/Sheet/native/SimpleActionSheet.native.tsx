// app/design/components/Sheet/native/SimpleActionSheet.native.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    michal = function(argFoo) { // Original name: SimpleActionSheet
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.hideActionSheet;
            var _closure2_slot0 = michal;
            sizing = entity.header;
            yankee = entity.options;
            tangon = _closure1_slot3;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.ActionSheet;
            entity = {};
            romeon = null;
            golfie = romeon != sizing;
            if(!golfie) { _fun00002_ip = 210; continue _fun00001 }
 74:
            offset = _closure1_slot2;
            option = _closure1_slot0;
            foxtra = _closure1_slot1;
            report = 3;
            report = foxtra[report];
            report = option.bind(zuuluu)(report);
            option = report.BottomSheetTitleHeader;
            report = {};
            foxtra = sizing.icon;
            report['leading'] = foxtra;
            foxtra = sizing.title;
            report['title'] = foxtra;
            foxtra = sizing.subtitle;
            report['subtitle'] = foxtra;
            foxtra = sizing.onClose;
            foxtra = romeon != foxtra;
            romeon = null;
            if(!foxtra) { _fun00002_ip = 199; continue _fun00001 }
 151:
            kiloes = _closure1_slot2;
            backup = _closure1_slot0;
            output = _closure1_slot1;
            foxtra = 4;
            foxtra = output[foxtra];
            foxtra = backup.bind(zuuluu)(foxtra);
            backup = foxtra.ActionSheetCloseButton;
            foxtra = {};
            sizing = sizing.onClose;
            foxtra['onPress'] = sizing;
            romeon = kiloes.bind(zuuluu)(backup, foxtra);
 199:
            report['trailing'] = romeon;
            golfie = offset.bind(zuuluu)(option, report);
 210:
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot2;
            golfie = _closure1_slot0;
            offset = _closure1_slot1;
            oscard = 5;
            oscard = offset[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            oscard = oscard.ActionSheetRow;
            golfie = oscard.Group;
            oscard = {};
            offset = yankee.map;
            verify = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    oscard = michal.label;
                    romeon = michal.icon;
                    yankee = michal.IconComponent;
                    option = michal.isDestructive;
                    michal = michal.onPress;
                    var _closure3_slot0 = michal;
                    report = _closure1_slot2;
                    verify = _closure1_slot0;
                    foxtra = _closure1_slot1;
                    golfie = 5;
                    michal = foxtra[golfie];
                    tangon = undefined;
                    michal = verify.bind(tangon)(michal);
                    zuuluu = michal.ActionSheetRow;
                    michal = {};
                    offset = _closure1_slot2;
                    golfie = foxtra[golfie];
                    golfie = verify.bind(tangon)(golfie);
                    golfie = golfie.ActionSheetRow;
                    verify = golfie.Icon;
                    golfie = {};
                    golfie['source'] = romeon;
                    golfie['IconComponent'] = yankee;
                    golfie = offset.bind(tangon)(verify, golfie);
                    michal['icon'] = golfie;
                    golfie = 'default';
                    if(!option) { _fun00004_ip = 130; continue _fun00003 }
 126:
                    golfie = 'danger';
 130:
                    michal['variant'] = golfie;
                    michal['label'] = oscard;
                    entity = function() { // Original name: onPress
                        michal = _closure2_slot0;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        michal = _closure3_slot0;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    michal['onPress'] = entity;
                    entity = argBar;
                    entity = report.bind(tangon)(zuuluu, michal, entity);
                    return entity;
                }
            };
            verify = offset.bind(yankee)(verify);
            oscard['children'] = verify;
            oscard = option.bind(zuuluu)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot2 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot3 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Sheet/native/SimpleActionSheet.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    zuuluu['SimpleActionSheet'] = michal;
    return entity;
})();