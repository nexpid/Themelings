// app/design/components/Sheet/native/BottomSheetTitleHeader.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: RedesignBottomSheetTitleHeaderBase
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeon = entity.title;
            foxtra = entity.subtitle;
            entity = _closure1_slot8;
            tangon = undefined;
            option = entity.bind(tangon)();
            zuuluu = _closure1_slot6;
            michal = _closure1_slot5;
            entity = {};
            report = option.container;
            entity['style'] = report;
            golfie = _closure1_slot7;
            oscard = _closure1_slot5;
            report = {};
            option = option.titles;
            report['style'] = option;
            yankee = _closure1_slot6;
            verify = _closure1_slot14;
            option = {};
            backup = 2;
            option['lineClamp'] = backup;
            option['children'] = romeon;
            verify = yankee.bind(tangon)(verify, option);
            option = new Array(2);
            option[0] = verify;
            verify = null;
            yankee = verify != foxtra;
            if(!yankee) { _fun00002_ip = 131; continue _fun00001 }
 111:
            romeon = _closure1_slot6;
            yankee = _closure1_slot15;
            offset = {};
            offset['children'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 131:
            option[1] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: RedesignBottomSheetTitleHeaderStacked
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            foxtra = entity.title;
            backup = entity.subtitle;
            kiloes = entity.leading;
            sizing = entity.trailing;
            entity = _closure1_slot8;
            tangon = undefined;
            verify = entity.bind(tangon)();
            entity = _closure1_slot9;
            output = entity.bind(tangon)();
            zuuluu = _closure1_slot7;
            michal = _closure1_slot5;
            entity = {};
            oscard = verify.container;
            report = new Array(2);
            report[0] = oscard;
            oscard = output.container;
            report[1] = oscard;
            entity['style'] = report;
            golfie = _closure1_slot7;
            oscard = _closure1_slot5;
            report = {};
            option = output.accessories;
            report['style'] = option;
            romeon = _closure1_slot6;
            offset = _closure1_slot5;
            option = {};
            result = output.item;
            option['style'] = result;
            option['children'] = kiloes;
            offset = romeon.bind(tangon)(offset, option);
            option = new Array(2);
            option[0] = offset;
            kiloes = _closure1_slot6;
            romeon = _closure1_slot5;
            offset = {};
            output = output.item;
            offset['style'] = output;
            offset['children'] = sizing;
            offset = kiloes.bind(tangon)(romeon, offset);
            option[1] = offset;
            report['children'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot7;
            golfie = _closure1_slot5;
            oscard = {};
            verify = verify.titles;
            oscard['style'] = verify;
            romeon = _closure1_slot6;
            offset = _closure1_slot14;
            verify = {};
            kiloes = 1;
            verify['lineClamp'] = kiloes;
            verify['children'] = foxtra;
            offset = romeon.bind(tangon)(offset, verify);
            verify = new Array(2);
            verify[0] = offset;
            offset = null;
            romeon = offset != backup;
            if(!romeon) { _fun00004_ip = 276; continue _fun00003 }
 256:
            foxtra = _closure1_slot6;
            romeon = _closure1_slot15;
            yankee = {};
            yankee['children'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 276:
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: RedesignBottomSheetTitleHeaderComplex
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            echoed = michal.title;
            source = michal.subtitle;
            backup = michal.leading;
            verify = michal.trailing;
            update = michal.onTitleTextLayout;
            michal = _closure1_slot8;
            tangon = undefined;
            kiloes = michal.bind(tangon)();
            michal = _closure1_slot10;
            yankee = michal.bind(tangon)();
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 5;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            zuuluu = michal.width;
            michal = 32;
            zuuluu = zuuluu - michal;
            michal = 4;
            romeon = zuuluu / michal;
            zuuluu = _closure1_slot4;
            michal = zuuluu.useState;
            report = michal.bind(zuuluu)(tangon);
            zuuluu = _closure1_slot3;
            michal = 2;
            zuuluu = zuuluu.bind(tangon)(report, michal);
            michal = 0;
            sizing = zuuluu[michal];
            michal = 1;
            michal = zuuluu[michal];
            var _closure2_slot0 = michal;
            report = _closure1_slot4;
            zuuluu = report.useCallback;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                entity = entity.width;
                var _closure3_slot0 = entity;
                zuuluu = _closure2_slot0;
                entity = undefined;
                michal = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        michal = global;
                        tangon = michal.Math;
                        zuuluu = tangon.max;
                        michal = null;
                        report = michal != entity;
                        michal = 0;
                        if(!report) { _fun00008_ip = 30; continue _fun00007 }
 27:
                        michal = entity;
 30:
                        entity = _closure3_slot0;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    }
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = new Array(0);
            offset = zuuluu.bind(report)(michal, entity);
            zuuluu = _closure1_slot7;
            michal = _closure1_slot5;
            entity = {};
            report = kiloes.container;
            entity['style'] = report;
            option = _closure1_slot6;
            golfie = _closure1_slot5;
            report = {};
            foxtra = {};
            foxtra['width'] = sizing;
            report['style'] = foxtra;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(5);
            report[0] = golfie;
            foxtra = _closure1_slot7;
            option = _closure1_slot5;
            golfie = {};
            kiloes = kiloes.titles;
            golfie['style'] = kiloes;
            result = _closure1_slot6;
            output = _closure1_slot14;
            kiloes = {};
            kiloes['onTextLayout'] = update;
            update = 3;
            kiloes['lineClamp'] = update;
            kiloes['children'] = echoed;
            output = result.bind(tangon)(output, kiloes);
            kiloes = new Array(2);
            kiloes[0] = output;
            output = null;
            result = output != source;
            if(!result) { _fun00006_ip = 311; continue _fun00005 }
 291:
            update = _closure1_slot6;
            echoed = _closure1_slot15;
            result = {};
            result['children'] = source;
            output = update.bind(tangon)(echoed, result);
 311:
            kiloes[1] = output;
            golfie['children'] = kiloes;
            golfie = foxtra.bind(tangon)(option, golfie);
            report[1] = golfie;
            foxtra = _closure1_slot6;
            option = _closure1_slot5;
            golfie = {};
            kiloes = {};
            kiloes['width'] = sizing;
            golfie['style'] = kiloes;
            golfie = foxtra.bind(tangon)(option, golfie);
            report[2] = golfie;
            foxtra = _closure1_slot6;
            option = _closure1_slot5;
            golfie = {};
            golfie['onLayout'] = offset;
            sizing = yankee.accessory;
            kiloes = new Array(3);
            kiloes[0] = sizing;
            sizing = yankee.leading;
            kiloes[1] = sizing;
            sizing = {};
            sizing['maxWidth'] = romeon;
            kiloes[2] = sizing;
            golfie['style'] = kiloes;
            golfie['children'] = backup;
            golfie = foxtra.bind(tangon)(option, golfie);
            report[3] = golfie;
            option = _closure1_slot6;
            golfie = _closure1_slot5;
            oscard = {};
            oscard['onLayout'] = offset;
            foxtra = yankee.accessory;
            offset = new Array(3);
            offset[0] = foxtra;
            yankee = yankee.trailing;
            offset[1] = yankee;
            yankee = {};
            yankee['maxWidth'] = romeon;
            offset[2] = yankee;
            oscard['style'] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[4] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: Title
        michal = _closure1_slot8;
        tangon = undefined;
        report = michal.bind(tangon)();
        zuuluu = _closure1_slot6;
        michal = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 6;
        entity = oscard[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.Text;
        entity = {'variant': 'redesign/heading-18/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
        report = report.title;
        entity['style'] = report;
        golfie = argFoo;
        option = entity;
        report = copyDataProperties(option, golfie);
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: Subtitle
        entity = argFoo;
        report = entity.children;
        michal = _closure1_slot8;
        tangon = undefined;
        oscard = michal.bind(tangon)();
        zuuluu = _closure1_slot6;
        michal = _closure1_slot0;
        golfie = _closure1_slot2;
        entity = 6;
        entity = golfie[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.Text;
        entity = {'variant': 'text-xs/medium', 'color': 'header-secondary', 'lineClamp': 1};
        oscard = oscard.subtitle;
        entity['style'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot6 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = 4;
    golfie = oscard[tangon];
    verify = report.bind(entity)(golfie);
    option = verify.createStyles;
    golfie = function() {
        entity = {};
        michal = {'paddingHorizontal': 16, 'flexDirection': 'row', 'gap': 4, 'position': 'relative'};
        entity['container'] = michal;
        michal = {'flexGrow': 1, 'flexShrink': 1};
        entity['titles'] = michal;
        michal = {};
        zuuluu = 'center';
        michal['textAlign'] = zuuluu;
        entity['subtitle'] = michal;
        michal = {};
        michal['textAlign'] = zuuluu;
        entity['title'] = michal;
        return entity;
    };
    golfie = option.bind(verify)(golfie);
    var _closure1_slot8 = golfie;
    golfie = oscard[tangon];
    verify = report.bind(entity)(golfie);
    option = verify.createStyles;
    golfie = function() {
        entity = {};
        michal = {};
        zuuluu = 'column';
        michal['flexDirection'] = zuuluu;
        entity['container'] = michal;
        michal = {'flexDirection': 'row', 'justifyContent': 'space-between'};
        entity['accessories'] = michal;
        michal = {};
        zuuluu = 0;
        michal['flexShrink'] = zuuluu;
        entity['item'] = michal;
        return entity;
    };
    golfie = option.bind(verify)(golfie);
    var _closure1_slot9 = golfie;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = function() {
        entity = {};
        michal = {'position': 'absolute', 'top': 0, 'bottom': 0, 'flexShrink': 0, 'flexDirection': 'row', 'flexGrow': 1};
        entity['accessory'] = michal;
        michal = {'left': 16, 'justifyContent': 'flex-start'};
        entity['leading'] = michal;
        michal = {'right': 16, 'justifyContent': 'flex-end'};
        entity['trailing'] = michal;
        return entity;
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/Sheet/native/BottomSheetTitleHeader.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: BottomSheetTitleHeader
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argFoo;
            offset = golfie.leading;
            tangon = golfie.trailing;
            report = _closure1_slot4;
            michal = report.useState;
            entity = false;
            verify = michal.bind(report)(entity);
            report = _closure1_slot3;
            oscard = undefined;
            michal = 2;
            verify = report.bind(oscard)(verify, michal);
            michal = 0;
            michal = verify[michal];
            report = 1;
            report = verify[report];
            var _closure2_slot0 = report;
            report = null;
            if(!(report != offset)) { _fun00010_ip = 86; continue _fun00009 }
 74:
            if(!(entity !== offset)) { _fun00010_ip = 86; continue _fun00009 }
 78:
            verify = '';
            if(!(verify === offset)) { _fun00010_ip = 130; continue _fun00009 }
 86:
            if(!(report != tangon)) { _fun00010_ip = 102; continue _fun00009 }
 90:
            if(!(entity !== tangon)) { _fun00010_ip = 102; continue _fun00009 }
 94:
            entity = '';
            if(!(entity === tangon)) { _fun00010_ip = 130; continue _fun00009 }
 102:
            report = _closure1_slot6;
            tangon = _closure1_slot11;
            entity = {};
            romeon = entity;
            yankee = golfie;
            verify = copyDataProperties(romeon, yankee);
            entity = report.bind(oscard)(tangon, entity);
            _fun00010_ip = 202; continue _fun00009;
 130:
            report = _closure1_slot6;
            if(michal) { _fun00010_ip = 177; continue _fun00009 }
 137:
            tangon = _closure1_slot13;
            michal = {};
            romeon = michal;
            yankee = golfie;
            verify = copyDataProperties(romeon, yankee);
            verify = function(argFoo) { // Original name: onTitleTextLayout
                entity = argFoo;
                entity = entity.nativeEvent;
                zuuluu = _closure2_slot0;
                entity = entity.lines;
                michal = entity.length;
                entity = 2;
                michal = michal > entity;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            option = 'onTitleTextLayout';
            michal[option] = verify;
            michal = report.bind(oscard)(tangon, michal);
            _fun00010_ip = 199; continue _fun00009;
 177:
            tangon = _closure1_slot12;
            zuuluu = {};
            romeon = zuuluu;
            yankee = golfie;
            golfie = copyDataProperties(romeon, yankee);
            michal = report.bind(oscard)(tangon, zuuluu);
 199:
            entity = michal;
 202:
            return entity;
        }
    };
    zuuluu['BottomSheetTitleHeader'] = michal;
    return entity;
})();